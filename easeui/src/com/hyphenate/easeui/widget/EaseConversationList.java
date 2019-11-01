package com.hyphenate.easeui.widget;

import android.content.Context;
import android.content.res.TypedArray;
import android.os.Handler;
import android.os.Message;
import android.text.TextUtils;
import android.util.AttributeSet;
import android.widget.ListView;

import com.hyphenate.EMValueCallBack;
import com.hyphenate.chat.EMClient;
import com.hyphenate.chat.EMConversation;
import com.hyphenate.chat.EMMessage;
import com.hyphenate.easeui.R;
import com.hyphenate.easeui.adapter.EaseConversationAdapter;
import com.hyphenate.easeui.domain.EaseUser;
import com.hyphenate.easeui.jxcontrol.login.GroupControl;
import com.hyphenate.easeui.jxcontrol.login.GroupInterface;
import com.hyphenate.easeui.jxcontrol.model.GroupUserInfo;
import com.hyphenate.easeui.jxcontrol.model.UserSession;
import com.hyphenate.easeui.jxcontrol.view.XListView;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class EaseConversationList extends XListView {
    
    protected int primaryColor;
    protected int secondaryColor;
    protected int timeColor;
    protected int primarySize;
    protected int secondarySize;
    protected float timeSize;
    

    protected final int MSG_REFRESH_ADAPTER_DATA = 0;
    
    protected Context context;
    protected EaseConversationAdapter adapter;
    protected List<EMConversation> conversations = new ArrayList<EMConversation>();
    protected List<EMConversation> passedListRef = null;
    GroupControl groupControl;
    
    public EaseConversationList(Context context, AttributeSet attrs) {
        super(context, attrs);
        init(context, attrs);
    }
    
    public EaseConversationList(Context context, AttributeSet attrs, int defStyle) {
        super(context, attrs, defStyle);
        init(context, attrs);
    }

    
    private void init(Context context, AttributeSet attrs) {
        this.context = context;
        TypedArray ta = context.obtainStyledAttributes(attrs, R.styleable.EaseConversationList);
        primaryColor = ta.getColor(R.styleable.EaseConversationList_cvsListPrimaryTextColor, R.color.list_itease_primary_color);
        secondaryColor = ta.getColor(R.styleable.EaseConversationList_cvsListSecondaryTextColor, R.color.list_itease_secondary_color);
        timeColor = ta.getColor(R.styleable.EaseConversationList_cvsListTimeTextColor, R.color.list_itease_secondary_color);
        primarySize = ta.getDimensionPixelSize(R.styleable.EaseConversationList_cvsListPrimaryTextSize, 0);
        secondarySize = ta.getDimensionPixelSize(R.styleable.EaseConversationList_cvsListSecondaryTextSize, 0);
        timeSize = ta.getDimension(R.styleable.EaseConversationList_cvsListTimeTextSize, 0);
        
        ta.recycle();
        
    }
    Map<String,String> map=new HashMap<>();
    List<ConversationDomain> allConversation=new ArrayList<>();
    List<EMConversation> temp_conversationList;
    public void init(List<EMConversation> conversationList){
        this.temp_conversationList=conversationList;
        initName(conversationList);
    }
    GroupInterface groupInterface=new GroupInterface() {
        @Override
        public void onSuccee(List<GroupUserInfo> groupUserInfos) {
              stopRefresh();
             init(temp_conversationList, null,groupUserInfos);
        }
    };

    private void initName(List<EMConversation> conversationList){
        groupControl=new GroupControl(context,groupInterface );
//        map.clear();
        allConversation.clear();
        for(EMConversation conversation:conversationList){
            if (conversation.getType() == EMConversation.EMConversationType.GroupChat){
                allConversation.add(new ConversationDomain( type_group,conversation.conversationId()));
            }else if (conversation.getType() == EMConversation.EMConversationType.ChatRoom){
                allConversation.add(new ConversationDomain( type_group,conversation.conversationId()));
            }else {
                allConversation.add(new ConversationDomain( type_user,conversation.conversationId()));
            }
        }
        //开始查询
        groupControl.search_group_show(allConversation);

    }


    public void init(List<EMConversation> conversationList, EaseConversationListHelper helper,List<GroupUserInfo> groupUserInfos){
        conversations = conversationList;
        if(helper != null){
            this.conversationListHelper = helper;
        }

        for(GroupUserInfo g:groupUserInfos){
            String name="";
            if (!TextUtils.isEmpty(g.getRemark())){
                name=g.getRemark();
            }
            else if(!TextUtils.isEmpty(g.getNickname())){
                name=g.getNickname();
            }
            else if(!TextUtils.isEmpty(g.getPhone())){
                name=g.getPhone();
            }
            map.put(g.getEasemobname(), name);
        }

        if(conversationList!=null &&conversationList.size()>0)
        {
            setListAdapter(conversationList,map);
        }
    }
    private void setListAdapter(List<EMConversation> conversationList, Map<String,String> map){
        adapter = new EaseConversationAdapter(context, 0, conversationList,map);
        adapter.setCvsListHelper(conversationListHelper);
        adapter.setPrimaryColor(primaryColor);
        adapter.setPrimarySize(primarySize);
        adapter.setSecondaryColor(secondaryColor);
        adapter.setSecondarySize(secondarySize);
        adapter.setTimeColor(timeColor);
        adapter.setTimeSize(timeSize);
        setAdapter(adapter);
    }
    Handler handler = new Handler() {
        @Override
        public void handleMessage(Message message) {
            switch (message.what) {
            case MSG_REFRESH_ADAPTER_DATA:
                if (adapter != null) {
                    adapter.notifyDataSetChanged();
                }
                break;
            default:
                break;
            }
        }
    };


    public EMConversation getItem(int position) {
        return (EMConversation)adapter.getItem(position);
    }
    public String getTagName(int posion){
        return  adapter.getTagName(posion);
    }
    
    public void refresh() {
    	if(!handler.hasMessages(MSG_REFRESH_ADAPTER_DATA)){
    		handler.sendEmptyMessage(MSG_REFRESH_ADAPTER_DATA);
    	}
    }
    
    public void filter(CharSequence str) {
        adapter.getFilter().filter(str);
    }


    private EaseConversationListHelper conversationListHelper;

    public interface EaseConversationListHelper{
        /**
         * set content of second line
         * @param lastMessage
         * @return
         */
        String onSetItemSecondaryText(EMMessage lastMessage);
    }
    public void setConversationListHelper(EaseConversationListHelper helper){
        conversationListHelper = helper;
    }
    public class Group{
        private Integer groupid;
        private String  notice;
        private  String easemobgroupid;
        private String nickname;

        public Integer getGroupid() {
            return groupid;
        }

        public void setGroupid(Integer groupid) {
            this.groupid = groupid;
        }

        public String getNotice() {
            return notice;
        }

        public void setNotice(String notice) {
            this.notice = notice;
        }

        public String getEasemobgroupid() {
            return easemobgroupid;
        }

        public void setEasemobgroupid(String easemobgroupid) {
            this.easemobgroupid = easemobgroupid;
        }

        public String getNickname() {
            return nickname;
        }

        public void setNickname(String nickname) {
            this.nickname = nickname;
        }
    }
    public static Integer type_group=0;
    public static Integer type_user=1;
    public static Integer type_other=3;
    public class ConversationDomain{

        public Integer type;
        public String name;

        public ConversationDomain(Integer type, String name) {
            this.type = type;
            this.name = name;
        }

        public ConversationDomain( ) {
        }

        public Integer getType() {
            return type;
        }

        public void setType(Integer type) {
            this.type = type;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }
    }
}
