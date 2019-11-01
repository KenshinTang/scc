package com.yunlinker.helper;

import android.content.Context;
import android.content.SharedPreferences;
import android.content.SharedPreferences.Editor;

import com.yunlinker.myApp;


public class MySharePreferenceHelper {// 记录临时
	public final static SharedPreferences PREFERENCES;
	private final static Editor EDITOR;
	private static final myApp CONTEXT = myApp
			.getInstance();
	
	/**
	 * 存的文件名称
	 */
	private final static String COMMON_PREFERENCE_NAME = "myf.xml";
	

	/*******************变量定义************************/
	//是否登陆的凭证
	private final static String LOGIN_ACCESS_TOKEN = "login_access_token";

	//用户信息
	private final static String USER_INFO = "user_info";

	//用户信息
	private final static String LOG_USER_INFO = "log_user_info";


	//楼栋信息
	private final static String LOU_DONG = "lou_dong";

	//系统版本
	private final static String SYSTEM_VERSION = "system_version";

	//系统版本
	private final static String SYSTEM_BADGE = "system_badge";

	//手机号
	private final static String USER_PHONE = "user_phone";

	//用户是否挂失
	private final static String USER_LOST = "user_lost";

	//用户首次下载
	private final static String FIRST_START = "first_start";


	//首页数据
	private final static String HOME_INFO = "home_info";

	//分类数据
	private final static String FENLEI_INFO = "fenlei_info";

	//搜索历史
	private final static String SEARCH_HISTORY_INFO = "search_history_info";

	//搜索热门关键字
	private final static String SEARCH_HOT_KEY= "search_hot_key";

	//省市区数据
	private final static String PROVINCE_INFO= "province_info";

	//城市id
	private final static String CITY_ID= "city_id";

	//城市id
	private final static String CITY_NAME= "city_name";

	//联系电话
	private final static String CALL_PHONE= "call_phone";

	
	private static final String LAT = "lat";
	private static final String LNG = "lng";
	

	/****************************** methods ****************************/
	static {
		PREFERENCES = CONTEXT.getSharedPreferences(COMMON_PREFERENCE_NAME,
				Context.MODE_PRIVATE);
		EDITOR = PREFERENCES.edit();
	}


	public static void setString(String key, String value) {
		EDITOR.putString(key, value);
		EDITOR.apply();
	}

	@SuppressWarnings("unused")
	public static void setInt(String key, int value) {
		EDITOR.putInt(key, value);
		EDITOR.apply();
	}



	

	public static void setAccessToken(String accessToken) {
		setString(LOGIN_ACCESS_TOKEN, accessToken);
	}
	
	public static String getAccessToken() {
		return PREFERENCES.getString(LOGIN_ACCESS_TOKEN, "");
	}

	//用户信息
	public static void setUserInfo(String accessToken) {
		setString(USER_INFO, accessToken);
	}
	public static String getUserInfo() {
		return PREFERENCES.getString(USER_INFO, "");
	}

	//用户信息LOG_USER_INFO
	public static void setLogUserInfo(String accessToken) {
		setString(LOG_USER_INFO, accessToken);
	}
	public static String getLogUserInfo() {
		return PREFERENCES.getString(LOG_USER_INFO, "");
	}

	//楼栋信息
	public static void setLouDong(String accessToken) {
		setString(LOU_DONG, accessToken);
	}
	public static String getLouDong() {
		return PREFERENCES.getString(LOU_DONG, "");
	}

	//系统版本
	public static void setSystemBadge(String accessToken) {
		setString(SYSTEM_BADGE, accessToken);
	}
	public static String getSystemBadge() {
		return PREFERENCES.getString(SYSTEM_BADGE, "");
	}


	//系统版本
	public static void setSystemVersion(String accessToken) {
		setString(SYSTEM_VERSION, accessToken);
	}
	public static String getSystemVersion() {
		return PREFERENCES.getString(SYSTEM_VERSION, "");
	}

	//手机信息
	public static void setUserPhone(String accessToken) {
		setString(USER_PHONE, accessToken);
	}
	public static String getUserPhone() {
		return PREFERENCES.getString(USER_PHONE, "");
	}

	//用户是否挂失
	public static void setUserLost(String accessToken) {
		setString(USER_LOST, accessToken);
	}
	public static String getUserLost() {
		return PREFERENCES.getString(USER_LOST, "");
	}


	//用户首页数据
	public static void setHomeInfo(String accessToken) {
		setString(HOME_INFO, accessToken);
	}
	public static String getHomeInfo() {
		return PREFERENCES.getString(HOME_INFO, "");
	}

	//用户首页数据
	public static void setFenLeiInfo(String accessToken) {
		setString(FENLEI_INFO, accessToken);
	}
	public static String getFenLeiInfo() {
		return PREFERENCES.getString(FENLEI_INFO, "");
	}

	//用户首页数据
	public static void setSearchHistoryInfo(String accessToken) {
		setString(SEARCH_HISTORY_INFO, accessToken);
	}
	public static String getSearchHistoryInfo() {
		return PREFERENCES.getString(SEARCH_HISTORY_INFO, "");
	}

	//省市区数据
	public static void setProvince(String accessToken) {
		setString(PROVINCE_INFO, accessToken);
	}
	public static String getProvince() {
		return PREFERENCES.getString(PROVINCE_INFO, "");
	}

	//热门关键字
	public static void setHotKey(String accessToken) {
		setString(SEARCH_HOT_KEY, accessToken);
	}
	public static String getHotKey() {
		return PREFERENCES.getString(SEARCH_HOT_KEY, "");
	}




	//热门关键字
	public static void setCityId(String accessToken) {
		setString(CITY_ID, accessToken);
	}
	public static String getCityId() {
		return PREFERENCES.getString(CITY_ID, "1348");
	}

	//热门关键字
	public static void setCityName(String accessToken) {
		setString(CITY_NAME, accessToken);
	}
	public static String getCityName() {
		return PREFERENCES.getString(CITY_NAME, "成都");
	}

	//热门关键字
	public static void setCallPhone(String accessToken) {
		setString(CALL_PHONE, accessToken);
	}
	public static String getCallPhone() {
		return PREFERENCES.getString(CALL_PHONE, "");
	}






	public static void setLat(String lat) {

		setString(LAT, lat);
	}

	public static String getLat() {
		return PREFERENCES.getString(LAT, "");
	}

	public static void setLng(String lng) {
		setString(LNG, lng);
	}

	public static String getLng() {
		return PREFERENCES.getString(LNG, "");
	}
	
	
	
	
	
	
	
	/**
	 * 退出系统
	 */
	public static void exit() {
		setAccessToken("");
		setUserInfo("");
	}

	
}
