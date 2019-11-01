package com.hyphenate.easeui.utils;

import com.hyphenate.easeui.domain.EaseUser;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * 存储当前登录 用户的好友列表
 */

public class CurrentMailListUser {
    protected List<String> contactList=  Collections.synchronizedList(new ArrayList<String>());
    private static CurrentMailListUser cmu;
    private CurrentMailListUser(){}
    public static CurrentMailListUser getInstance(){
        synchronized (CurrentMailListUser.class){
            if(cmu==null)
                cmu=new CurrentMailListUser();
            return cmu;
        }
    }
    public synchronized void setContactList(List<EaseUser> list){
        contactList.clear();
        for(EaseUser user: list){
            contactList.add(user.getUsername());
        }
    }
    //是否包含环信用户
    public synchronized boolean isContains(String easename){
        return contactList.contains(easename);
    }
    public synchronized List<String> getContactList(){return  contactList;}
}
