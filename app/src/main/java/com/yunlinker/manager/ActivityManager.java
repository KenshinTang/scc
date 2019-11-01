package com.yunlinker.manager;

import android.app.Activity;
import android.content.Intent;

import com.yunlinker.baseclass.BaseWebView;
import com.yunlinker.scc.WebviewActivity;

import java.util.ArrayList;
import java.util.Stack;

/**
 * Created by lemon on 2017/8/3.
 */

public class ActivityManager {
    private static Stack<Activity> activityStack;
    public static ArrayList<String> stackTagList = new ArrayList<>();
    private static ActivityManager instance = null;

    public static ActivityManager getInstance() {
        if (instance == null) {
            synchronized (ActivityManager.class) {
                if (instance == null) {
                    instance = new ActivityManager();

                    instance.webStacks = new Stack<>();
                    instance.stackes = new Stack<>();
                }
            }
        }
        return instance;
    }


    public Stack<BaseWebView> webStacks;

    private Stack<WebviewActivity> stackes;



    public void adde(WebviewActivity activity){
        stackes.push(activity);
    }

    public void start(String url) {

        WebviewActivity activity = stackes.pop();
        Intent itt =  new Intent(activity,WebviewActivity.class);
        itt.putExtra("sendUrl",url);
        activity.startActivity(itt);
        stackes.push(activity);
    }

    //根据url返回指定控制器
    public void backTo(String url) {
        WebviewActivity c =null;
        int times = 0;
        for (WebviewActivity activity : stackes) {
            times ++;
            //if (TextUtils.equals(activity.loadUrl, url))
              //  break;
        }
        for(int i=0;i<times;i++) {
            WebviewActivity s =stackes.pop();
            s.finish();
        }
    }

    //根据次数返回
    public void back(int t) {
        for(int i=0;i<t;i++) {
            WebviewActivity s =stackes.pop();
            s.finish();
        }


    }

    //关闭除顶层控制器外的所有控制器
    public void finishButTop() {
        WebviewActivity w = null;
        int times = stackes.size();
        for(int i=0;i<times;i++) {
            WebviewActivity s =stackes.pop();
            if(i != 0)
                s.finish();
            else
                w = s;
        }
        stackes.push(w);
    }

    //关闭除底层控制器外的所有控制器
    public void finishButFirst() {
        int times = stackes.size();
        for(int i=times;i>1;i--) {
            WebviewActivity s = stackes.pop();
            if(i != 0)
                s.finish();
        }
    }


    //获取第一个控制器
    public WebviewActivity getFirst() {
        if(stackes.size()>0)
            return stackes.get(0);
        else
            return null;
    }

    //获取最顶层控制器
    public WebviewActivity getTop() {
        if(stackes.size()>0)
            return stackes.get(stackes.size()-1);
        else
            return null;
    }

    public int getPageIndex(String page){
        int index=-1;
        for(int i=0;i<stackTagList.size();i++){
            String url=stackTagList.get(i);
            if(url.contains(page)){
                index=i;
                break;
            }
        }
        return index;
    }
    public synchronized void pushActivity(Activity activity, String tag){
        if(activityStack==null)
            activityStack=new Stack<>();
        stackTagList.add(tag);
        activityStack.add(activity);
    }
    public static void clearTag(){
        stackTagList.clear();
    }

    public static int getASize(){
        return activityStack.size();
    }

    public synchronized  Activity currentActivity(){
        Activity activity = null;
        if(activityStack!=null){
            if (!activityStack.empty())
                activity = activityStack.lastElement();
        }
        return activity;
    }
    // 退出栈顶Activity
    public void popActivity(Activity activity,String tag) {
        if (activity != null) {
            // 在从自定义集合中取出当前Activity时，也进行了Activity的关闭操作
            activity.finish();
            if(stackTagList.contains(tag)){
                stackTagList.remove(tag);
            }
            activityStack.remove(activity);
            activity=null;
        }
    }
    /**
     * 弹出多个Activity
     */
    public void popActivity(int num){
        if(num<0)
            return;
        /**
         * 如果参数大于栈中activity数量，则num置为栈中activity数量
         */
        num = (activityStack.size()<num?activityStack.size():num);
        int count=activityStack.size();
        for(;num<count;num++){
            popActivity();
            if(num<stackTagList.size())
                stackTagList.remove(stackTagList.size()-1);
        }
    }

    public void popActivity(){
        //如果已经到了栈底,显然需要退出程序
        boolean exitFlag=false;
        if(activityStack.size()==1){
            /*栈为空*/
            return;
        }
        //finish栈顶activity
        activityStack.get(activityStack.size()-1).finish();
        //在栈中移除栈顶
        activityStack.remove(activityStack.size()-1);
        //退出App
    }

    public void exit(){
        if(activityStack!=null){
            for(int i=0;i<activityStack.size();i++){
                Activity activity=currentActivity();
                if(activity==null)
                    return;
                popActivity(activity,"");
            }
        }
    }
}
