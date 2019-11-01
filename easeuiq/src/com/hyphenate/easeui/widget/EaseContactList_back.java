package com.hyphenate.easeui.widget;

import android.content.Context;
import android.content.res.TypedArray;
import android.graphics.drawable.Drawable;
import android.os.Handler;
import android.os.Message;
import android.text.TextUtils;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.RelativeLayout;

import com.hyphenate.easeui.R;
import com.hyphenate.easeui.adapter.EaseMyMailListContactAdapter;
import com.hyphenate.easeui.domain.EaseUser;
import com.hyphenate.easeui.jxcontrol.login.GroupControl;
import com.hyphenate.easeui.jxcontrol.login.GroupInterface;
import com.hyphenate.easeui.jxcontrol.model.GroupUserInfo;
import com.hyphenate.easeui.jxcontrol.model.PingyinUtils;
import com.hyphenate.easeui.jxcontrol.view.XListView;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class EaseContactList_back extends RelativeLayout {
    protected static final String TAG = EaseContactList_back.class.getSimpleName();

    protected Context context;
    protected XListView listView;
    protected EaseMyMailListContactAdapter adapter;
    protected List<EaseUser> contactList;
    protected EaseSidebar sidebar;

    protected int primaryColor;
    protected int primarySize;
    protected boolean showSiderBar;
    protected Drawable initialLetterBg;

    static final int MSG_UPDATE_LIST = 0;

    Handler handler = new Handler() {

        @Override
        public void handleMessage(Message msg) {
            switch (msg.what) {
            case MSG_UPDATE_LIST:
                if(adapter != null){
                	adapter.clear();
                	adapter.addAll(new ArrayList<EaseUser>(contactList));

                	adapter.notifyDataSetChanged();
                }
                break;
            default:
                break;
            }
            super.handleMessage(msg);
        }
    };

    protected int initialLetterColor;


    public EaseContactList_back(Context context) {
        super(context);
        init(context, null);
    }

    public EaseContactList_back(Context context, AttributeSet attrs) {
        super(context, attrs);
        init(context, attrs);
    }

    public EaseContactList_back(Context context, AttributeSet attrs, int defStyle) {
        this(context, attrs);
    }

    
    private void init(Context context, AttributeSet attrs) {
        this.context = context;
        TypedArray ta = context.obtainStyledAttributes(attrs, R.styleable.EaseContactList);
        primaryColor = ta.getColor(R.styleable.EaseContactList_ctsListPrimaryTextColor, 0);
        primarySize = ta.getDimensionPixelSize(R.styleable.EaseContactList_ctsListPrimaryTextSize, 0);
        showSiderBar = ta.getBoolean(R.styleable.EaseContactList_ctsListShowSiderBar, true);
        initialLetterBg = ta.getDrawable(R.styleable.EaseContactList_ctsListInitialLetterBg);
        initialLetterColor = ta.getColor(R.styleable.EaseContactList_ctsListInitialLetterColor, 0);
        ta.recycle();
        
        
        LayoutInflater.from(context).inflate(R.layout.ease_widget_contact_list, this);
        listView = (XListView)findViewById(R.id.list);

        listView.setPullRefreshEnable(true);
        sidebar = (EaseSidebar) findViewById(R.id.sidebar);
        if(!showSiderBar)
            sidebar.setVisibility(View.GONE);
    }
    
    /*
     * init view
     */
    public void init(List<EaseUser> contactList){
    	this.contactList = contactList;
        initCactUserName();

    }
    private void initCactUserName(){
        List<String> nameList=new ArrayList<>();
        for (EaseUser u:contactList){
            nameList.add(u.getUsername());
        }
        GroupControl groupControl=new GroupControl(context, groupInterface);
        groupControl.searchGroupUserInfo(nameList);
    }
    GroupInterface groupInterface=new GroupInterface() {
        @Override
        public void onSuccee(List<GroupUserInfo> groupUserInfos) {
            listView.stopRefresh();

            initLatter(groupUserInfos);

            adapter = new EaseMyMailListContactAdapter(context, 0, new ArrayList<EaseUser>(contactList),groupUserInfos);
            adapter.setPrimaryColor(primaryColor).setPrimarySize(primarySize).setInitialLetterBg(initialLetterBg)
                    .setInitialLetterColor(initialLetterColor);
            listView.setAdapter(adapter);
            if(showSiderBar){
                sidebar.setListView(listView);
            }
        }
    };
    private void initLatter(List<GroupUserInfo> groupUserInfos){
        if(groupUserInfos==null)
            return;
        Map<String,GroupUserInfo> mapuser=new HashMap<>();
        for(int i=0;i<groupUserInfos.size();i++){
            GroupUserInfo tempuser= groupUserInfos.get(i);
            mapuser.put(tempuser.getEasemobname(),tempuser);
        }
        for(int j=0;j<contactList.size();j++){
           EaseUser user= contactList.get(j);
            GroupUserInfo user2= mapuser.get(user.getUsername());
            if(user2==null){
                continue;
            }
            String _uname="";
            if(!TextUtils.isEmpty(user2.getRemark())){
                _uname=user2.getRemark();
            }
            else if(!TextUtils.isEmpty(user2.getNickname())){
                _uname=user2.getNickname();
            }else if(!TextUtils.isEmpty(user2.getPhone())){
                _uname=user2.getPhone();
            }
            String la= PingyinUtils.getPinyin(_uname);
            String later=la.length()>=2?la.substring(0,1):la;
            user.setInitialLetter(later);
        }

    }
    
    public void refresh(){
        Message msg = handler.obtainMessage(MSG_UPDATE_LIST);
        handler.sendMessage(msg);
    }

    public void filter(CharSequence str) {
        adapter.getFilter().filter(str);
    }
    
    public XListView getListView(){
        return listView;
    }
    
    public void setShowSiderBar(boolean showSiderBar){
        if(showSiderBar){
            sidebar.setVisibility(View.VISIBLE);
        }else{
            sidebar.setVisibility(View.GONE);
        }
    }


}
