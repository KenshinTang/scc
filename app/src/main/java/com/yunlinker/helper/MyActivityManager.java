package com.yunlinker.helper;

import android.app.Activity;

import java.util.ArrayList;
import java.util.Stack;

public class MyActivityManager  {
	private Stack<Activity> activityStackMain;
	public Stack<Activity> activityStack;
	public ArrayList<String> stackTagList;
	private static MyActivityManager instance;

	private static String BASE = "file:///android_asset/www/";

	private MyActivityManager() {
	}

	public void clearTag(){
		stackTagList.clear();
	}

	public int getASize(){
		return activityStack.size();
	}

	public static MyActivityManager getScreenManager() {
		if (instance == null) {
			instance = new MyActivityManager();
			instance.activityStackMain = new Stack<Activity>();
			instance.activityStack = new Stack<Activity>();
			instance.stackTagList = new ArrayList<>();
		}
		return instance;
	}




	private ArrayList<Activity> mList = new ArrayList<Activity>();
	// add Activity
	public void addNewActivity(Activity activity) {
		mList.add(activity);
	}
	public void exit() {
		try {
			for (Activity activity:mList) {
				if (activity != null)
					activity.finish();
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			System.exit(0);
		}
	}


	public void clearOther(){
		int length=getASize();
		for(int i=0;i<length;i++){
			if(getASize()!=1){
				Activity ac=currentActivity();
				popActivity(ac,"");
			}
		}
	}
	// 退出栈顶Activity
	public void popActivity(Activity activity,String tag) {
		if (activity != null) {
			// 在从自定义集合中取出当前Activity时，也进行了Activity的关闭操作
			activity.finish();
			if(stackTagList.contains(BASE+tag)){
				stackTagList.remove(BASE+tag);
			}
			activityStack.remove(activity);
			activity = null;
		}
	}

	public int getMianSize(){
		return activityStackMain.size();
	}
	public void addActivity(Activity activity) {
		activityStackMain.add(activity);
	}

	public void finishAllActivity() {
		for (int i = 0, size = activityStackMain.size(); i < size; i++) {
			if (null != activityStackMain.get(i) && i!=size) {
				finishActivity(activityStackMain.get(i));
				break;
			}
		}
	}
	//关闭所有的activity
	public void closeAllCtivity(){
		for(Activity activity:activityStackMain){
			activityStackMain.remove(activity);
			activity.finish();
		}
		for(Activity activity:activityStack){
			activityStack.remove(activity);
			activity.finish();
		}
		stackTagList.clear();
	}
	//关闭所有的activity
	public void closeAllCtivityButFirst(){
		Stack<Activity> as = new Stack<>();
		for(Activity activity:activityStackMain){
			String aclass = activity.getClass().toString();
			if(aclass!=null && aclass.contains("FragmentActivity"))
				as.push(activity);
		}
		activityStackMain = as;
		for(Activity activity:activityStack)
			activity.finish();
		activityStack.clear();
		stackTagList.clear();
	}

	public void popActivityAAA(int num){
		/**
		 * 如果参数大于栈中activity数量，则num置为栈中activity数量
		 */
		num = (activityStackMain.size()<num?activityStackMain.size():num);
		for(;num>0;num--){
			/**
			 * 调用无参pop()弹出栈顶;
			 */
			finishActivity(activityStackMain.get(num));
		}
	}

	public void finishActivity() {
        if(activityStackMain.size()>0) {
            Activity activity = activityStackMain.lastElement();
            if(activity!=null)
                finishActivity(activity);
        }
	}
	/**
	 * 结束指定的Activity
	 */
	public void finishActivity(Activity activity) {
		if (activity != null ) {
			activityStackMain.remove(activity);
		}
	}
	/**
	 * 结束指定类名的Activity
	 */
	public void finishActivity(Class<?> cls) {
		for (Activity activity : activityStackMain) {
			if (activity.getClass().equals(cls)) {
				finishActivity(activity);
				break;
			}
		}
	}

	/**
	 * 弹出多个Activity
	 */
	public void popActivity(int num){
		/**
		 * 如果参数大于栈中activity数量，则num置为栈中activity数量
		 */
		num = (activityStack.size()<num?activityStack.size():num);
		for(;num>0;num--){
			/**
			 * 调用无参pop()弹出栈顶;
			 */
//			activityStack.remove(currentActivity());
			popActivity(currentActivity(),"");
		}
	}

	public void popActivityForTop(int num){
		num = (activityStack.size()<num?activityStack.size():num);
		for(;num>0;num--){
			/**
			 * 调用无参pop()弹出栈顶;
			 */
			if(num!=0){

				popActivity();
			}

		}
	}

	public void popActivity(){
		//如果已经到了栈底,显然需要退出程序
		boolean exitFlag=false;
		if(activityStack.size()==0){
            /*栈为空*/
			return;
		}else if(activityStack.size()==1) {
            /*到了栈底，应该退出App*/
			exitFlag=true;
		}
		//finish栈顶activity
		activityStack.get(activityStack.size()-1).finish();
		//在栈中移除栈顶
		//退出App
		if(exitFlag){
			System.exit(0);
		}
	}

	// 获得当前栈顶Activity
	public Activity currentActivity() {
		Activity activity = null;
		if(activityStack!=null){
			if (!activityStack.empty())
				activity = activityStack.lastElement();
		}
		return activity;
	}

	// 将当前Activity推入栈中
	public void pushActivity(Activity activity,String tag) {
		if (activityStack == null) {
			activityStack = new Stack<Activity>();
		}
		if(tag != null && !stackTagList.contains(BASE+tag)){
			stackTagList.add(BASE+tag);
		}
		activityStack.add(activity);
	}

	// 退出栈中所有Activity
	public void popAllActivityExceptOne(Class<?> cls) {
		stackTagList.clear();
		while (true) {
			Activity activity = currentActivity();
			if (activity == null) {
				break;
			}
			if (activity.getClass().equals(cls)) {
				popActivity(activity,"");
				continue;
			}
			popActivity(activity,"");
		}
	}
}
