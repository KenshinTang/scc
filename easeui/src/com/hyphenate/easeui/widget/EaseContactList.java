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
import com.hyphenate.easeui.adapter.EaseMyMailListContactAdapterNew;
import com.hyphenate.easeui.domain.EaseUser;
import com.hyphenate.easeui.jxcontrol.login.GroupControl;
import com.hyphenate.easeui.jxcontrol.login.GroupInterface;
import com.hyphenate.easeui.jxcontrol.model.GroupUserInfo;
import com.hyphenate.easeui.jxcontrol.model.PingyinUtils;
import com.hyphenate.easeui.jxcontrol.otherControl.EventControl;
import com.hyphenate.easeui.jxcontrol.otherControl.SyncMyContact;
import com.hyphenate.easeui.jxcontrol.view.XListView;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Timer;
import java.util.TimerTask;

public class EaseContactList extends RelativeLayout {
    protected static final String TAG = EaseContactList.class.getSimpleName();
    
    protected Context context;
    protected XListView listView;
    protected EaseMyMailListContactAdapterNew adapter;
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
                if(contactList != null){
                    adapter.setData(new ArrayList<EaseUser>(contactList));
                }
                break;
            default:
                break;
            }
            super.handleMessage(msg);
        }
    };

    protected int initialLetterColor;

    
    public EaseContactList(Context context) {
        super(context);
        init(context, null);
    }

    public EaseContactList(Context context, AttributeSet attrs) {
        super(context, attrs);
        init(context, attrs);
    }
    
    public EaseContactList(Context context, AttributeSet attrs, int defStyle) {
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
            nameList.add(u.getNick());
        }
        GroupControl groupControl=new GroupControl(context, groupInterface);
        groupControl.searchGroupUserInfo(nameList);
    }
    List<EaseUser> datass;
    GroupInterface groupInterface=new GroupInterface() {
        @Override
        public void onSuccee(List<GroupUserInfo> groupUserInfos) {
            listView.stopRefresh();
            if(!refreshing) {
                datass=initLatter(groupUserInfos);
                if(datass==null)
                    datass=new ArrayList<>();
                adapter = new EaseMyMailListContactAdapterNew(context,0,datass);
                listView.setAdapter(adapter);
                if(showSiderBar){
                    sidebar.setListView(listView);
                    sidebar.setMySelection(selecttionListView);
                }
                Timer timer = new Timer();
                TimerTask task= new TimerTask() {
                    @Override
                    public void run() {
                        refreshing = false;
                    }
                };
                timer.schedule(task, 500);
            }
        }
    };
    private boolean refreshing = false;

    SelecttionListView selecttionListView=new SelecttionListView() {
        @Override
        public void selection(String latter) {
            //A
            for(int i=0;i<datass.size();i++){
                EaseUser user=datass.get(i);
                if(user.getMylatter().trim().equals(latter.trim())){
                    int postion=i+2;
                    if(postion<listView.getCount()){
                        listView.setSelection(postion);
                    }
                    break;
                }
            }
        }
    };
    public interface  SelecttionListView{
        public void selection(String latter);
    }

    private List<EaseUser> initLatter(List<GroupUserInfo> groupUserInfos){
        List<EaseUser> list=new ArrayList<>();
        if(groupUserInfos==null)
            return null;
        Map<String,GroupUserInfo> mapuser=new HashMap<>();
        for(int i=0;i<groupUserInfos.size();i++){
            GroupUserInfo tempuser= groupUserInfos.get(i);
            mapuser.put(tempuser.getEasemobname(),tempuser);
        }
        for(int j=0;j<contactList.size();j++){
           EaseUser user= contactList.get(j);
            GroupUserInfo user2= mapuser.get(user.getNick());
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
            user.setMyName(_uname);
            user.setMyeaseuserid(user2.getEasemobname());
            user.setMycustomerid(user2.getCustomerid());
            user.setMyhead(user2.getHead());
            user.setMylable(user2.getLabel());
            user.setMynickname(user2.getNickname());
            user.setMyphone(user2.getPhone());
            user.setMyremark(user2.getRemark());
            String la= PingyinUtils.getPinyin(_uname);
            String later=la.length()>=2?la.substring(0,1):la;
            try{
                Integer.valueOf(later);
                user.setMylatter("#");
            }catch (Exception e){
                user.setMylatter(later.toUpperCase());
            }

            list.add(user);
        }
        Collections.sort(list, new Comparator<EaseUser>() {
            @Override
            public int compare(EaseUser e1, EaseUser e2) {
                return e1.getMylatter().compareTo(e2.getMylatter());
            }
        });
       SyncMyContact syncMyContact= EventControl.getInstance().getSyncMyContact();
        if(syncMyContact!=null){
            syncMyContact.sync(list);
        }
        return list;
    }
    
    public void refresh(){
        Message msg = handler.obtainMessage(MSG_UPDATE_LIST);
        handler.sendMessage(msg);
    }

    public void filter(CharSequence str) {
       // adapter.getFilter().filter(str);
    }
    public void myfilter(String str){
        if(adapter!=null)
            adapter.myFilter(str);
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
