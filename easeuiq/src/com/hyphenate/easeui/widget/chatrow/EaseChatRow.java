package com.hyphenate.easeui.widget.chatrow;

import android.app.Activity;
import android.content.Context;
import android.text.TextUtils;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.BaseAdapter;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.ProgressBar;
import android.widget.TextView;
import android.widget.Toast;

import com.hyphenate.EMCallBack;
import com.hyphenate.EMError;
import com.hyphenate.chat.EMClient;
import com.hyphenate.chat.EMMessage;
import com.hyphenate.chat.EMMessage.Direct;
import com.hyphenate.easeui.R;
import com.hyphenate.easeui.adapter.EaseMessageAdapter;
import com.hyphenate.easeui.jxcontrol.login.GroupControl;
import com.hyphenate.easeui.jxcontrol.login.GroupInterface;
import com.hyphenate.easeui.jxcontrol.model.GroupUserInfo;
import com.hyphenate.easeui.jxcontrol.model.UserSession;
import com.hyphenate.easeui.jxcontrol.view.CircleImageView;
import com.hyphenate.easeui.utils.EaseUserUtils;
import com.hyphenate.easeui.widget.EaseChatMessageList;
import com.hyphenate.easeui.widget.EaseChatMessageList.MessageListItemClickListener;
import com.hyphenate.exceptions.HyphenateException;
import com.hyphenate.util.DateUtils;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;


public abstract class EaseChatRow extends LinearLayout {
    protected static final String TAG = EaseChatRow.class.getSimpleName();

    protected LayoutInflater inflater;
    protected Context context;
    protected Context appContext;
    protected BaseAdapter adapter;
    protected EMMessage message;
    protected int position;

    protected TextView timeStampView;
    protected CircleImageView userAvatarView;
    protected View bubbleLayout;
    protected TextView usernickView;

    protected TextView percentageView;
    protected ProgressBar progressBar;
    protected ImageView statusView;
    protected Activity activity;

    protected TextView ackedView;
    protected TextView deliveredView;

    protected EMCallBack messageSendCallback;
    protected EMCallBack messageReceiveCallback;

    protected MessageListItemClickListener itemClickListener;

    public EaseChatRow(Context context, EMMessage message, int position, BaseAdapter adapter, Context mc) {
        super(context);
        this.context = context;
        this.activity = (Activity) context;
        this.message = message;
        this.position = position;
        this.adapter = adapter;
        this.appContext = mc;
        inflater = LayoutInflater.from(context);

        initView();
    }

    private void initView() {
        onInflateView();
        timeStampView = (TextView) findViewById(R.id.timestamp);
        userAvatarView = (CircleImageView) findViewById(R.id.iv_userhead);
        bubbleLayout = findViewById(R.id.bubble);
        usernickView = (TextView) findViewById(R.id.tv_userid);

        progressBar = (ProgressBar) findViewById(R.id.progress_bar);
        statusView = (ImageView) findViewById(R.id.msg_status);
        ackedView = (TextView) findViewById(R.id.tv_ack);
        deliveredView = (TextView) findViewById(R.id.tv_delivered);

        onFindViewById();
    }

    /**
     * set property according message and postion
     * 
     * @param message
     * @param position
     */
    public void setUpView(EMMessage message, int position,
                          EaseChatMessageList.MessageListItemClickListener itemClickListener) {
        this.message = message;
        this.position = position;
        this.itemClickListener = itemClickListener;

        setUpBaseView();
        onSetUpView();
        setClickListener();
    }
    private String  tempHeader_revice=null;
    private void setUpBaseView() {
    	// set nickname, avatar and background of bubble
        TextView timestamp = (TextView) findViewById(R.id.timestamp);
        if (timestamp != null) {
            Long t = null;
            try {
                t = message.getLongAttribute("timespan");
            } catch (HyphenateException e) {
                e.printStackTrace();
            }
            if(t==null)
                t = message.getMsgTime();
            if(t!=null && String.valueOf(t).length()<=10)
                t=t*1000;

            String _time = DateUtils.getTimestampString(new Date(t!=null?t:0));
            _time = _time.replace("上午","");
            if(_time.indexOf("下午")>-1) {
                _time = _time.replace("下午","");
                String hour = "";
                String re = " (.*):";
                Pattern p = Pattern.compile(re);
                Matcher m = p.matcher(_time);
                while(m.find()){
                    hour = m.group(1);
                }
                int nh = Integer.parseInt(hour);
                if(nh < 12) {
                    nh += 12;
                }
                hour = " " + nh + ":";
                _time = _time.replaceAll(re, hour);
            }
            timestamp.setText(_time);
            timestamp.setVisibility(View.VISIBLE);
        }
        //set nickname and avatar
        if(message.direct() == Direct.SEND){
            String head="";
            if(UserSession.getInstance().getUser()!=null)
                head=UserSession.getInstance().getUser().getHead();
            EaseUserUtils.MailListloadHeadCircleImageView(appContext, head, userAvatarView,"m");
        }else{

            GroupUserInfo user= UserSession.getInstance().getUserUserInfo().get(message.getFrom());
            if(user!=null){
                //、是我的好友
                EaseUserUtils.MailListloadHeadCircleImageView(appContext,user.getHead(),userAvatarView,"m");
                String name=user.getRemark();
                if(TextUtils.isEmpty(name)){
                    name=user.getNickname();
                }
                if (TextUtils.isEmpty(name)){
                    name=user.getPhone();
                }
                if(usernickView!=null && !TextUtils.isEmpty(name))
                    usernickView.setText(name);
            }else {
                //、不是我的好友
                GroupUserInfo no_my_friends= UserSession.getInstance().getMapGroupUser().get(message.getFrom());
                if(no_my_friends!=null){
                    EaseUserUtils.MailListloadHeadCircleImageView(appContext,no_my_friends.getHead(),userAvatarView, "m");
                    String name=no_my_friends.getNickname();
                    if(TextUtils.isEmpty(name)){
                        name=user.getPhone();
                    }
                    if(usernickView!=null && !TextUtils.isEmpty(name))
                        usernickView.setText(name);
                }else {
                    if(tempHeader_revice!=null){
                        EaseUserUtils.MailListloadHeadCircleImageView(appContext,tempHeader_revice,userAvatarView,"m");
                        return;
                    }
                    List<String> ids=new ArrayList<>();
                    ids.add(message.getFrom());
                     new GroupControl(UserSession.getInstance().getTempUploadContext(),null).searchGroupUserInfo3(ids, new GroupInterface() {
                         @Override
                         public void onSuccee(List<GroupUserInfo> groupUserInfos) {
                             if(groupUserInfos!=null && groupUserInfos.size()>0){
                                 GroupUserInfo user=groupUserInfos.get(0);
                                 if(user!=null &&user.getHead() !=null){
                                     tempHeader_revice=user.getHead();
                                     EaseUserUtils.MailListloadHeadCircleImageView(appContext,tempHeader_revice,userAvatarView,"m");
                                 }
                             }
                         }
                     });

                }
            }
        }
        
        if(deliveredView != null){
            if (message.isDelivered()) {
                deliveredView.setVisibility(View.VISIBLE);
            } else {
                deliveredView.setVisibility(View.INVISIBLE);
            }
        }
        
        if(ackedView != null){
            if (message.isAcked()) {
                if (deliveredView != null) {
                    deliveredView.setVisibility(View.INVISIBLE);
                }
                ackedView.setVisibility(View.VISIBLE);
            } else {
                ackedView.setVisibility(View.INVISIBLE);
            }
        }
        

        if (adapter instanceof EaseMessageAdapter) {
            if (((EaseMessageAdapter) adapter).isShowAvatar())
                userAvatarView.setVisibility(View.VISIBLE);
            else
                userAvatarView.setVisibility(View.GONE);
            if (usernickView != null) {
                if (((EaseMessageAdapter) adapter).isShowUserNick())
                    usernickView.setVisibility(View.VISIBLE);
                else
                    usernickView.setVisibility(View.GONE);
            }
            if (message.direct() == Direct.SEND) {
                if (((EaseMessageAdapter) adapter).getMyBubbleBg() != null) {
                    bubbleLayout.setBackgroundDrawable(((EaseMessageAdapter) adapter).getMyBubbleBg());
                }
            } else if (message.direct() == Direct.RECEIVE) {
                if (((EaseMessageAdapter) adapter).getOtherBuddleBg() != null) {
                    bubbleLayout.setBackgroundDrawable(((EaseMessageAdapter) adapter).getOtherBuddleBg());
                }
            }
        }
    }

    /**
     * set callback for sending message
     */
    protected void setMessageSendCallback(){
        if(messageSendCallback == null){
            messageSendCallback = new EMCallBack() {
                
                @Override
                public void onSuccess() {
                    updateView();
                }
                
                @Override
                public void onProgress(final int progress, String status) {
                    activity.runOnUiThread(new Runnable() {
                        @Override
                        public void run() {
                            if(percentageView != null)
                                percentageView.setText(progress + "%");

                        }
                    });
                }
                
                @Override
                public void onError(int code, String error) {
                    updateView(code, error);
                }
            };
        }
        message.setMessageStatusCallback(messageSendCallback);
    }
    
    /**
     * set callback for receiving message
     */
    protected void setMessageReceiveCallback(){
        if(messageReceiveCallback == null){
            messageReceiveCallback = new EMCallBack() {
                
                @Override
                public void onSuccess() {
                    updateView();
                }
                
                @Override
                public void onProgress(final int progress, String status) {
                    activity.runOnUiThread(new Runnable() {
                        public void run() {
                            if(percentageView != null){
                                percentageView.setText(progress + "%");
                            }
                        }
                    });
                }
                
                @Override
                public void onError(int code, String error) {
                    updateView();
                }
            };
        }
        message.setMessageStatusCallback(messageReceiveCallback);
    }
    
    
    private void setClickListener() {
        if(bubbleLayout != null){
            bubbleLayout.setOnClickListener(new OnClickListener() {
    
                @Override
                public void onClick(View v) {
                    if (itemClickListener != null){
                        if(!itemClickListener.onBubbleClick(message)){
                        	// if listener return false, we call default handling
                            onBubbleClick();
                        }
                    }
                }
            });
    
            bubbleLayout.setOnLongClickListener(new OnLongClickListener() {
    
                @Override
                public boolean onLongClick(View v) {
                    if (itemClickListener != null) {
                        itemClickListener.onBubbleLongClick(message);
                    }
                    return true;
                }
            });
        }

        if (statusView != null) {
            statusView.setOnClickListener(new OnClickListener() {

                @Override
                public void onClick(View v) {
                    if (itemClickListener != null) {
                        itemClickListener.onResendClick(message);
                    }
                }
            });
        }

        if(userAvatarView != null){
            userAvatarView.setOnClickListener(new OnClickListener() {
    
                @Override
                public void onClick(View v) {
                    if (itemClickListener != null) {
                        if (message.direct() == Direct.SEND) {
                            itemClickListener.onUserAvatarClick(EMClient.getInstance().getCurrentUser());
                        } else {
                            itemClickListener.onUserAvatarClick(message.getFrom());
                        }
                    }
                }
            });
            userAvatarView.setOnLongClickListener(new OnLongClickListener() {
                
                @Override
                public boolean onLongClick(View v) {
                    if(itemClickListener != null){
                        if (message.direct() == Direct.SEND) {
                            itemClickListener.onUserAvatarLongClick(EMClient.getInstance().getCurrentUser());
                        } else {
                            itemClickListener.onUserAvatarLongClick(message.getFrom());
                        }
                        return true;
                    }
                    return false;
                }
            });
        }
    }


    protected void updateView() {
        activity.runOnUiThread(new Runnable() {
            public void run() {
                if (message.status() == EMMessage.Status.FAIL) {
                    Toast.makeText(activity,activity.getString(R.string.send_fail) + activity.getString(R.string.connect_failuer_toast), Toast.LENGTH_SHORT).show();
                }

                onUpdateView();
            }
        });
    }

    protected void updateView(final int errorCode, final String desc) {
        activity.runOnUiThread(new Runnable() {
            public void run() {
                if (errorCode == EMError.MESSAGE_INCLUDE_ILLEGAL_CONTENT) {
                    Toast.makeText(activity,activity.getString(R.string.send_fail) + activity.getString(R.string.error_send_invalid_content), Toast.LENGTH_SHORT).show();
                } else if (errorCode == EMError.GROUP_NOT_JOINED) {
                    Toast.makeText(activity,activity.getString(R.string.send_fail) + activity.getString(R.string.error_send_not_in_the_group), Toast.LENGTH_SHORT).show();
                } else {
                    Toast.makeText(activity,activity.getString(R.string.send_fail) + activity.getString(R.string.connect_failuer_toast), Toast.LENGTH_SHORT).show();
                }
                onUpdateView();
            }
        });
    }

    protected abstract void onInflateView();

    /**
     * find view by id
     */
    protected abstract void onFindViewById();

    /**
     * refresh list view when message status change
     */
    protected abstract void onUpdateView();

    /**
     * setup view
     * 
     */
    protected abstract void onSetUpView();
    
    /**
     * on bubble clicked
     */
    protected abstract void onBubbleClick();

}
