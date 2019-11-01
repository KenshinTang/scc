package com.hyphenate.easeui.jxcontrol.model;

import android.content.Context;

import com.hyphenate.chat.EMMessage;
import com.hyphenate.easeui.domain.EaseUser;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by Administrator on 2017/3/24.
 */

public class UserSession {
    private static UserSession userSession;
    private User user;
    private UserSession(){}
    public synchronized static UserSession getInstance(){
        if(userSession==null)
            userSession=new UserSession();
        return userSession;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
    //当前状态是否登录
    public  boolean currentLoginState=false;
    //当前页面是否在聊天界面
    public  boolean cueerntPageIsChat=false;
    private String timespace="";
    //存放当前签到的位置信息
    private EMMessage singin_location_msg;
    //存储查询签到的信息 用于签到定位
    private Singin singin;
    private  List<EaseUser> contactlist;
    private boolean isfirst=false;
    private Context tempUploadContext;

    public void setTempUploadContext(Context tempUploadContext) {
        this.tempUploadContext = tempUploadContext;
    }

    public Context getTempUploadContext() {
        return tempUploadContext;
    }

    public boolean getIsfirst() {
        return isfirst;
    }

    public void setIsfirst(boolean isfirst) {
        this.isfirst = isfirst;
    }

    //存放用户的真是名字  key:环信id  value:用户名字
    private Map<String,String> userReayName=new HashMap<>();
    private Map<String,GroupUserInfo> userUserInfo=new HashMap<>();
    private Map<String,GroupUserInfo> mapGroupUser=new HashMap<>();//存储群用户的信息

    public void setMapGroupUser(Map<String, GroupUserInfo> mapGroupUser) {
        this.mapGroupUser = mapGroupUser;
    }

    public Map<String, GroupUserInfo> getMapGroupUser() {
        return mapGroupUser;
    }

    public void setSingin(Singin singin) {
        this.singin = singin;
    }

    public Singin getSingin() {
        return singin;
    }

    public EMMessage getSingin_location_msg() {
        return singin_location_msg;
    }

    public void setSingin_location_msg(EMMessage singin_location_msg) {
        this.singin_location_msg = singin_location_msg;
    }

    public  List<EaseUser> getContactlist() {
        return contactlist;
    }

    public Map<String,EaseUser> getContactsDict() {
        HashMap<String,EaseUser> m = new HashMap<>();
        for(EaseUser u:contactlist) {
            if(u.getUsername()!=null && u.getUsername().length()>0)
                m.put(u.getUsername(),u);
        }
        return m;
    }

    public void setContactlist( List<EaseUser> contactlist) {
        this.contactlist = contactlist;
    }

    public Map<String, String> getUserReayName() {
        return userReayName;
    }

    public void setUserReayName(Map<String, String> userReayName) {
        this.userReayName = userReayName;
    }

    public Map<String, GroupUserInfo> getUserUserInfo() {
        return userUserInfo;
    }

    public void setUserUserInfo(Map<String, GroupUserInfo> userUserInfo) {
        this.userUserInfo = userUserInfo;
    }

    public  synchronized   void setCurrentLoginState(boolean state){
        currentLoginState=state;
    }
    public  synchronized  boolean getCurrentLoginState(){return currentLoginState;}
    public  void setCueerntPageIsChat(boolean current_chat){ cueerntPageIsChat=current_chat;}
    public  boolean getCurtenPageIsChat(){return  cueerntPageIsChat;}
    public void setTimespace(String timespace){
        this.timespace=timespace;
    }
    public String getTimespace(){return this.timespace;}
    //临时通讯录的搜索
    private   List<EaseUser> tempContactList;

    public   void setTempContactList(List<EaseUser> tempContactList) {
        this.tempContactList = tempContactList;
    }

    public   List<EaseUser> getTempContactList() {
        return this.tempContactList;
    }

    public void clear(){
        setUser(null);
        setCurrentLoginState(false);
        setCueerntPageIsChat(false);
        setTimespace(null);
        setSingin_location_msg(null);
        setSingin(null);
        setTempContactList(null);
        if (contactlist!=null)
             contactlist.clear();
    }
}
