package com.yunlinker.shell;

import org.json.JSONException;

/**
 *外壳回调 一些界面的数据
 * 5.页面关闭【无返回】 	WeiLai.close(){
 6.跳转页面【无返回】 WeiLai.go(url){
 WeiLai.gotop(url){

 7.数据保存获取【方法直接返回】【返回字符串】
 用于保存数据，将网页上的数据永久（用户主动清除不考虑）保存到本地
 String WeiLai.storage(key)

 storageValue（）

 10.提示框【回调返回】
 WeiLai.alert(mess){

 11.确认框【回调返回】
 WeiLai.confirm(mess){
 12.提示消息【无返回】
 WeiLai.message(mess){
 18.设备信息【方法直接返回】
 String WeiLai.deviceInfo(){
 19.获取用户通讯录【回调返回】
 WeiLai.getAddressBook(){
 */

public interface ShellCallBack {
    //注册推送
    public void registerPush(String obj);
    //设置推送
    public void setPush(String obj);
    //支付
    public void pay(String obj);
    public void godismiss(String obj) ;
    public void gologin(String url);
    public void gopage(String url);
    public void loginOut();
    public void close(String count);
    public void gotop(String url);
    public void storage(String obj);
    public void storageValue(String obj) ;
    public void setbg(String bgs) ;
    public void alert(String obj);
    public void confirm(String obj);
    public void message(String obj);
    public void deviceInfo();
    public void getAddressBook();
    public void upimg(String imgUrl);
    public void mgWallet();//钱包
    public void position(String code);//定位
    public void goChat();//调到聊天界面
    public void refreshCurrentUser();//刷新当前用户
    public void goShare();//分享
    public void shareUrl(String obj);
    public void contactUser(String str);//咨询
    public void goBackTo(String page);//指定调到界面
    public void callNavigationMap(String location);//导航
    public void getVersion();//获取版本
    public Integer getCache();//获取缓存大小
    public void clearCache(String code);//清除缓存clearCache
    public void nftMsgSwich(String state);//消息提示
    public void openUrlStr(String url);//打开外部浏览器
    public void showUserInfo(String str);//js 跳转  跳转用户资料
    public void goChangePassword();//js 跳转到原生修改密码
    public void  goShowBackList();//调到黑名单界面
    public void syncUserData(String user);//调到黑名单界面
    public void extLogin(String obj);//第三方登陆
    public void jxtv();
    //第三方地图
    public void navigation(String obj);
    public void qiyu(String objStr);
    public void saveImg(String obj);
    public void copyText(String text);

    //二维码
    public void scanf(String code);
}
