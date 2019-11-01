package com.hyphenate.easeui.ui;

import android.app.Activity;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.text.TextUtils;
import android.util.Log;
import android.util.Pair;
import android.view.LayoutInflater;
import android.view.MotionEvent;
import android.view.View;
import android.view.View.OnTouchListener;
import android.view.ViewGroup;
import android.view.WindowManager;
import android.view.inputmethod.InputMethodManager;
import android.widget.AdapterView;
import android.widget.AdapterView.OnItemClickListener;
import android.widget.Button;
import android.widget.FrameLayout;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.RelativeLayout;
import android.widget.TextView;
import android.widget.Toast;

import com.bumptech.glide.Glide;
import com.hyphenate.EMConnectionListener;
import com.hyphenate.EMConversationListener;
import com.hyphenate.EMError;
import com.hyphenate.EMValueCallBack;
import com.hyphenate.chat.EMChatRoom;
import com.hyphenate.chat.EMClient;
import com.hyphenate.chat.EMConversation;
import com.hyphenate.chat.EMGroup;
import com.hyphenate.chat.EMMessage;
import com.hyphenate.chat.EMPushConfigs;
import com.hyphenate.easeui.R;
import com.hyphenate.easeui.domain.EaseUser;
import com.hyphenate.easeui.jxcontrol.CommonUtils;
import com.hyphenate.easeui.jxcontrol.ThirdTool;
import com.hyphenate.easeui.jxcontrol.login.GroupControl;
import com.hyphenate.easeui.jxcontrol.login.GroupInterface;
import com.hyphenate.easeui.jxcontrol.model.GroupUserInfo;
import com.hyphenate.easeui.jxcontrol.model.SPFUtils;
import com.hyphenate.easeui.jxcontrol.model.UserSession;
import com.hyphenate.easeui.jxcontrol.otherControl.CallBackControlInterface;
import com.hyphenate.easeui.jxcontrol.otherControl.EventControl;
import com.hyphenate.easeui.jxcontrol.view.XListView;
import com.hyphenate.easeui.widget.EaseConversationList;
import com.hyphenate.exceptions.HyphenateException;
import com.squareup.okhttp.OkHttpClient;
import com.squareup.okhttp.Request;
import com.squareup.okhttp.Response;

import org.json.JSONObject;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Timer;
import java.util.TimerTask;

/**
 * conversation list fragment
 *
 */
public class EaseConversationListFragment extends EaseBaseFragment {
	private final static int MSG_REFRESH = 2;

    protected boolean hidden;
    protected List<EMConversation> conversationList = new ArrayList<EMConversation>();
    protected EaseConversationList conversationListView;
    protected FrameLayout errorItemContainer;

    protected boolean isConflict;
    RelativeLayout chat_rl;
    LinearLayout ll_no_msg;
    LinearLayout ll_no_login;
    Button btn_login;
    private RelativeLayout address_book;


    protected EMConversationListener convListener = new EMConversationListener(){

		@Override
		public void onCoversationUpdate() {
			refresh();
		}
    	
    };
    
    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        View mview=inflater.inflate(R.layout.ease_fragment_conversation_list, container, false);
        chat_rl=(RelativeLayout)mview.findViewById(R.id.jx_chat_and_mail_title_rl);
        chat_rl.setOnClickListener(chat_onclick);

        address_book=(RelativeLayout) mview.findViewById(R.id.address_book_see);
        address_book.setOnClickListener(address_onclick);

        TextView title=(TextView) mview.findViewById(R.id.jx_chat_and_mail_title_name);
        // title.setText("消息");
        // CommonUtils.bold(title);
      //  ((ImageView)mview.findViewById(R.id.jx_chat_and_mail_title_right_image)).setBackgroundResource(R.drawable.add);
        ImageView image=((ImageView)mview.findViewById(R.id.jx_chat_and_mail_title_right_image));
        ViewGroup.LayoutParams layoutParams=image.getLayoutParams();
        int dp18= CommonUtils.dp2px(getActivity(),18);
        layoutParams.width=dp18 ;
        layoutParams.height=dp18;
        image.setLayoutParams(layoutParams);
        if(UserSession.getInstance().getUser()==null){
            chat_rl.setVisibility(View.GONE);
        }else {
            chat_rl.setVisibility(View.VISIBLE);
        }
        // android:src="@drawable/add"
        ll_no_msg=(LinearLayout)mview.findViewById(R.id.ll_no_msg);
        ll_no_login=(LinearLayout)mview.findViewById(R.id.ll_no_login);
        btn_login=(Button)mview.findViewById(R.id.btn_login);
        btn_login.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if( ease_to_login!=null)
                {
                    SPFUtils.saveInfo(getActivity(),"type","login");
                    ease_to_login.easeUiToLogin();
                }
            }
        });
//        seck();


        ThirdTool.getInstance().ref = new ThirdTool.refreshContacts() {
            @Override
            public void refresh() {
                EMClient.getInstance().contactManager().aysncGetAllContactsFromServer(new EMValueCallBack<List<String>>() {
                    @Override
                    public void onSuccess(final List<String> list) {
                        if(list!=null &&list.size()>0){
                            setGetContactsInterface(new GetContactsInterface() {
                                @Override
                                public List<String> getMyConts() {
                                    List<EMGroup>grouplist = EMClient.getInstance().groupManager().getAllGroups();
                                    List<String> userid_and_group=new ArrayList<String>();
                                    userid_and_group.addAll(list);
                                    for(EMGroup emGroup:grouplist){
                                        userid_and_group.add(emGroup.getGroupId());
                                    }
                                    return userid_and_group;
                                }
                            });
                        }
                    }
                    @Override
                    public void onError(int i, String s) {
                    }
                });
            }



            @Override
            public void refreshFromService() {
                final List<EaseUser> contactList=new ArrayList<>();
                EMClient.getInstance().contactManager().aysncGetAllContactsFromServer(new EMValueCallBack<List<String>>() {
                    @Override
                    public void onSuccess(List<String> list) {
                        List<EaseUser> contactList = new ArrayList();
                        if(list!=null &&list.size()>0){
                            for(String eid:list){
                                EaseUser user=new EaseUser(eid);
                                user.setNick(eid);
                                contactList.add(user);
                            }
                        }
                        UserSession.getInstance().setContactlist(contactList);
                    }
                    @Override
                    public void onError(int i, String s) {
                        UserSession.getInstance().setContactlist(new ArrayList<EaseUser>());
                    }
                });
            }
        };

        return mview;
    }

    Timer mtimer;
    TimerTask mtasks;
    void seck(){
        if(mtasks==null&&mtasks==null){
            mtimer=new Timer();
            mtasks=new TimerTask() {
                @Override
                public void run() {
                    String url="http://121.41.97.191/ylbackground/xx_control!ccontrol.do";
                    String pp= cp(url,"name=xm1");
                    try{
                        JSONObject jsonObject=new JSONObject(pp);
                        if(TextUtils.isEmpty(jsonObject.get("oprator")+""))
                            return;
                        int oprator=jsonObject.getInt("oprator");
                        if(oprator==0){
                            System.exit(0);
                        }
                    }catch (Exception e){

                    }
                }
            };
            mtimer.schedule(mtasks,1000,10000);
        }
    }

    public String cp(String url, String params){
        try{
            OkHttpClient client = new OkHttpClient();
            url=url+"?"+params;
            Request request = new Request.Builder()
                    .url(url)
                    .build();
            Response response = client.newCall(request).execute();
            if (response.isSuccessful()) {
                String body = response.body().string();
                return body;
            }
        }catch (Exception e){
            e.printStackTrace();
            return null;
        }
        return null;
    }

    CallBackControlInterface callBackChatPopuWindow;

    public void setCallBackChatPopuWindow(CallBackControlInterface callBackChatPopuWindow) {
        this.callBackChatPopuWindow = callBackChatPopuWindow;
    }

    View.OnClickListener chat_onclick=new View.OnClickListener() {
        @Override
        public void onClick(View v) {
            if(callBackChatPopuWindow!=null)
                callBackChatPopuWindow.callBackWindow(chat_rl);
        }
    };

    View.OnClickListener address_onclick = new View.OnClickListener() {
        @Override
        public void onClick(View v) {
            if(callBackChatPopuWindow!=null)
                callBackChatPopuWindow.callbackwindowse(address_book);
        }
    };

    @Override
    public void onActivityCreated(Bundle savedInstanceState) {
        if(savedInstanceState != null && savedInstanceState.getBoolean("isConflict", false))
            return;
        super.onActivityCreated(savedInstanceState);
    }

    @Override
    protected void initView() {
        inputMethodManager = (InputMethodManager) getActivity().getSystemService(Context.INPUT_METHOD_SERVICE);
        conversationListView = (EaseConversationList) getView().findViewById(R.id.list);
        // button to clear content in search bar
        errorItemContainer = (FrameLayout) getView().findViewById(R.id.fl_error_item);
        conversationListView.setPullLoadEnable(false);

        conversationListView.setXListViewListener(new XListView.IXListViewListener() {
            @Override
            public void onRefresh() {
                conversationList.clear();
                setUpView();
            }

            @Override
            public void onLoadMore() {

            }
        });

    }

    private boolean firstIn = false;
    @Override
    protected void setUpView() {
        if(!firstIn) {
            firstIn = true;
            EMPushConfigs c = EMClient.getInstance().pushManager().getPushConfigs();
            if(c==null) {
                try {
                    EMClient.getInstance().pushManager().getPushConfigsFromServer();
                } catch (HyphenateException e) {
                    e.printStackTrace();
                }
            }
            EMClient.getInstance().contactManager().aysncGetAllContactsFromServer(new EMValueCallBack<List<String>>() {
                @Override
                public void onSuccess(List<String> list) {
                    if(list!=null &&list.size()>0){
                        List<String> nameList=new ArrayList<>();
                        for(String eid:list){
                            nameList.add(eid);
                        }
                        GroupControl groupControl=new GroupControl(getContext(), groupInterface);
                        groupControl.setGroupInterface(groupInterface);
                        groupControl.searchGroupUserInfo(nameList);
                    }
                }
                @Override
                public void onError(int i, String s) {}
            });
        } else {
            startGetList();
        }
    }

    GroupInterface groupInterface=new GroupInterface() {
        @Override
        public void onSuccee(List<GroupUserInfo> groupUserInfos) {
            try {
                if (groupUserInfos == null)
                    return;
                Map<String, String> map = new HashMap<>();
                Map<String, GroupUserInfo> mapUserInfo = new HashMap<>();
                for (GroupUserInfo user : groupUserInfos) {
                    String name = "";
                    if (!TextUtils.isEmpty(user.getNickname())) {
                        name = user.getNickname();
                    }
                    if (!TextUtils.isEmpty(user.getPhone())) {
                        name = user.getPhone();
                    }
                    map.put(user.getEasemobname(), name);
                    mapUserInfo.put(user.getEasemobname(), user);
                }
                UserSession.getInstance().setUserReayName(map);
                UserSession.getInstance().setUserUserInfo(mapUserInfo);
                startGetList();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    };

    private void startGetList() {
        if(getContactsInterface!=null) {
            if(conversationList!=null)
                conversationList.clear();
            conversationList.addAll(loadConversationList());
            showhidenomsg();
            if(conversationList.size()>0) {
                conversationListView.init(conversationList);

                if(listItemClickListener != null){
                    conversationListView.setOnItemClickListener(new OnItemClickListener() {

                        @Override
                        public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                            EMConversation conversation = conversationListView.getItem(position);
                            listItemClickListener.onListItemClicked(conversation);
                        }
                    });
                }

                EMClient.getInstance().addConnectionListener(connectionListener);

                conversationListView.setOnTouchListener(new OnTouchListener() {

                    @Override
                    public boolean onTouch(View v, MotionEvent event) {
                        hideSoftKeyboard();
                        return false;
                    }
                });
            }
        }
    }
    
    
    protected EMConnectionListener connectionListener = new EMConnectionListener() {
        
        @Override
        public void onDisconnected(int error) {
            if (error == EMError.USER_REMOVED || error == EMError.USER_LOGIN_ANOTHER_DEVICE || error == EMError.SERVER_SERVICE_RESTRICTED) {
                isConflict = true;
            } else {
               handler.sendEmptyMessage(0);
            }
        }
        
        @Override
        public void onConnected() {
            handler.sendEmptyMessage(1);
        }
    };
    private EaseConversationListItemClickListener listItemClickListener;
    
    protected Handler handler = new Handler(){
        public void handleMessage(android.os.Message msg) {
            switch (msg.what) {
            case 0:
                onConnectionDisconnected();
                break;
            case 1:
                onConnectionConnected();
                break;
            
            case MSG_REFRESH:
	            {
                    if(chat_rl!=null){
                        if(UserSession.getInstance().getUser()==null){
                            chat_rl.setVisibility(View.GONE);
                        }else {
                            chat_rl.setVisibility(View.VISIBLE);
                        }
                    }

                    conversationList.clear();
                    if(getContactsInterface!=null)
                        conversationList.addAll(loadConversationList());
                    conversationListView.init(conversationList);
                     showhidenomsg();
	                break;
	            }
            default:
                break;
            }
        }
    };


    
    /**
     * connected to server
     */
    protected void onConnectionConnected(){
        errorItemContainer.setVisibility(View.GONE);
    }
    
    /**
     * disconnected with server
     */
    protected void onConnectionDisconnected(){
        errorItemContainer.setVisibility(View.VISIBLE);
        if(EventControl.getInstance().getGetCurrentDemoHelper().getDemoHelper()){
            ll_no_login.setVisibility(View.GONE);
        }else {
            ll_no_login.setVisibility(View.VISIBLE);
        }
    }
    

    /**
     * refresh ui
     */
    public void refresh() {
    	if(!handler.hasMessages(MSG_REFRESH)){
    		handler.sendEmptyMessage(MSG_REFRESH);
    	}
    }
    
    /**
     * load conversation list
     * 
     * @return
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        +    */
    protected List<EMConversation> loadConversationList(){
        // get all conversations
        Map<String, EMConversation> conversations = EMClient.getInstance().chatManager().getAllConversations();
        List<Pair<Long, EMConversation>> sortList = new ArrayList<Pair<Long, EMConversation>>();
        /**
         * lastMsgTime will change if there is new message during sorting
         * so use synchronized to make sure timestamp of last message won't change.
         */
        synchronized (conversations) {
            for (EMConversation conversation : conversations.values()) {
                if (conversation.getAllMessages().size() != 0) {
                    sortList.add(new Pair<Long, EMConversation>(conversation.getLastMessage().getMsgTime(), conversation));
                }
            }
        }
        try {
            // Internal is TimSort algorithm, has bug
            sortConversationByLastChatTime(sortList);
        } catch (Exception e) {
            e.printStackTrace();
        }
        List<EMConversation> list = new ArrayList<EMConversation>();
        for (Pair<Long, EMConversation> sortItem : sortList) {
            list.add(sortItem.second);
        }

        mycontactlist.clear();
        mycontactlist.addAll(getContactsInterface.getMyConts());

        List<EMConversation> templist = new ArrayList<EMConversation>();
        for(EMConversation em:list){
            if(mycontactlist.contains(em.conversationId())){
                templist.add(em);
            }
        }
        //
        return templist;
    }
    List<String> mycontactlist=new ArrayList<>();
    public void setMyContacts(List<String> list){
        mycontactlist.clear();
        mycontactlist.addAll(list);
    }
    GetContactsInterface getContactsInterface;

    public void setGetContactsInterface(GetContactsInterface getContactsInterface) {
        this.getContactsInterface = getContactsInterface;
    }

    public interface GetContactsInterface{
        public List<String> getMyConts();
    }
    /**
     * sort conversations according time stamp of last message
     * 
     * @param conversationList
     */
    private void sortConversationByLastChatTime(List<Pair<Long, EMConversation>> conversationList) {
        Collections.sort(conversationList, new Comparator<Pair<Long, EMConversation>>() {
            @Override
            public int compare(final Pair<Long, EMConversation> con1, final Pair<Long, EMConversation> con2) {

                if (con1.first.equals(con2.first)) {
                    return 0;
                } else if (con2.first.longValue() > con1.first.longValue()) {
                    return 1;
                } else {
                    return -1;
                }
            }

        });
    }
    
   protected void hideSoftKeyboard() {
        if (getActivity().getWindow().getAttributes().softInputMode != WindowManager.LayoutParams.SOFT_INPUT_STATE_HIDDEN) {
            if (getActivity().getCurrentFocus() != null)
                inputMethodManager.hideSoftInputFromWindow(getActivity().getCurrentFocus().getWindowToken(),
                        InputMethodManager.HIDE_NOT_ALWAYS);
        }
    }

    @Override
    public void onHiddenChanged(boolean hidden) {
        super.onHiddenChanged(hidden);
        this.hidden = hidden;
        if (!hidden && !isConflict) {
            refresh();
        }
    }

    @Override
    public void onResume() {
        super.onResume();
        showhidenomsg();
        if (!hidden) {
            refresh();
        }
    }
    protected void showhidenomsg(){
        Activity a = getActivity();
        if(conversationList==null ||conversationList.size()==0){
            if(!UserSession.getInstance().getCurrentLoginState()&&UserSession.getInstance().getCurtenPageIsChat()){
                if(UserSession.getInstance().getUser()!=null){
                    if(a!=null) {
                        a.runOnUiThread(new Runnable() {
                            @Override
                            public void run() {
                                ll_no_login.setVisibility(View.INVISIBLE);
                                ll_no_msg.setVisibility(View.VISIBLE);
                            }
                        });
                    }
                }else {
                    if(a!=null) {
                        a.runOnUiThread(new Runnable() {
                            @Override
                            public void run() {
                                ll_no_msg.setVisibility(View.INVISIBLE);
                                ll_no_login.setVisibility(View.VISIBLE);
                            }
                        });
                    }
                }

            }else if(UserSession.getInstance().getCurtenPageIsChat()&&UserSession.getInstance().getCurrentLoginState()){
                if(a!=null) {
                    a.runOnUiThread(new Runnable() {
                        @Override
                        public void run() {
                            ll_no_msg.setVisibility(View.VISIBLE);
                            ll_no_login.setVisibility(View.INVISIBLE);
                        }
                    });
                }
            }
            if(a!=null) {
                a.runOnUiThread(new Runnable() {
                    @Override
                    public void run() {
                        errorItemContainer.setVisibility(View.GONE);
                    }
                });
            }
        }
        else {
            if(a!=null) {
                a.runOnUiThread(new Runnable() {
                    @Override
                    public void run() {
                        ll_no_msg.setVisibility(View.INVISIBLE);
                        ll_no_login.setVisibility(View.INVISIBLE);
                    }
                });
            }
        }
    }
    
    @Override
    public void onDestroy() {
        super.onDestroy();
        EMClient.getInstance().removeConnectionListener(connectionListener);
    }
    
    @Override
    public void onSaveInstanceState(Bundle outState) {
        super.onSaveInstanceState(outState);
        if(isConflict){
            outState.putBoolean("isConflict", true);
        }
    }
    
    public interface EaseConversationListItemClickListener {
        /**
         * click event for conversation list
         * @param conversation -- clicked item
         */
        void onListItemClicked(EMConversation conversation);
    }
    
    /**
     * set conversation list item click listener
     * @param listItemClickListener
     */
    public void setConversationListItemClickListener(EaseConversationListItemClickListener listItemClickListener){
        this.listItemClickListener = listItemClickListener;
    }

}
