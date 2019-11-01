package com.yunlinker.shell;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.webkit.JavascriptInterface;

import com.alibaba.sdk.android.oss.ClientConfiguration;
import com.alibaba.sdk.android.oss.OSS;
import com.alibaba.sdk.android.oss.OSSClient;
import com.alibaba.sdk.android.oss.common.auth.OSSCredentialProvider;

import com.yunlinker.aliupload.ImageService;
import com.yunlinker.manager.ActivityManager;
import com.yunlinker.myApp;
import com.yunlinker.upimage.aliupload.OssService;
import com.yunlinker.upimage.aliupload.PauseableUploadTask;
import com.yunlinker.upimage.aliupload.STSGetter;
import com.yunlinker.scc.WebviewActivity;

import org.json.JSONException;

import java.lang.ref.WeakReference;

/**
 * 外壳
 * WeiLai.close()
 */

public class ShellWebView extends  BaseShellWebView{

    private Context context;
    private Activity activity;
    private ShellCallBack shellCallBack;
    /**
     * 这里是上传图片到阿里云服务器的相关属性
     */
    public static String furl;
    public static String val,value;
    private OssService ossService;
    private ImageService imageService;
    private static final String bucket = "swzh-upload";
    private static final String endpoint = "http://oss-cn-shanghai.aliyuncs.com";
    private WeakReference<PauseableUploadTask> task;
    /**
     * 需要上传到服务器的地址
     */
    String upLoadImgUrl = "";
    private String url;

    public ShellWebView(Context context, Activity activity,ShellCallBack shellCallBack) {

        this.context = context;
        this.activity = activity;
        this.shellCallBack=shellCallBack;
//        String deviceId=ShellUtils.getDeviceId(context);
//        if(deviceId == null){
//            SPFUtils.saveInfo(context,ShellUtils.deviceId,new Date().getTime()+"");
//        }else{
//            SPFUtils.saveInfo(context,ShellUtils.deviceId, deviceId);
//        }
//        SPFUtils.saveInfo(context,ShellUtils.deviceType, "1");
    }

    public ShellWebView(Context context) {
        this.context = context;
    }

    public ShellWebView(Activity activity) {
        this.activity = activity;
    }
    public ShellWebView() {

    }
    @JavascriptInterface
    public void close(String count){
        //shellCallBack.close(count);
        int c = Integer.parseInt(count);
        if(c<1)
            c=1;
        ActivityManager.getInstance().back(c);
    }
    @JavascriptInterface
    public void godismiss(String obj){
        shellCallBack.godismiss(obj);
    }

    @JavascriptInterface
    public void navigation(String obj){
        shellCallBack.navigation(obj);
    }

    @JavascriptInterface
    //注册推送
    public void registerPush(String obj){
        shellCallBack.registerPush(obj);
    }

    @JavascriptInterface
    //设置推送
    public void setPush(String obj){
        shellCallBack.setPush(obj);
    }
    //支付
    @JavascriptInterface
    public void pay(String obj){
        shellCallBack.pay(obj);
    }

    @JavascriptInterface
    public void gologin(String url){
        shellCallBack.gologin(url);
    }
    @JavascriptInterface
    public void gopage(String url){

        shellCallBack.gopage(url);
    }

    @JavascriptInterface
    public void  signOut(){
        shellCallBack.loginOut();
    }

    @JavascriptInterface
    public void go(String url) throws JSONException {
        Intent intent=new Intent(context,WebviewActivity.class);
        intent.putExtra("url",url);
        activity.startActivity(intent);
    }

    @JavascriptInterface
    public void extLogin(String obj) {
        shellCallBack.extLogin(obj);
    }

    @JavascriptInterface
    public void jxtv() {
        shellCallBack.jxtv();
    }


    @JavascriptInterface
    public void gotop(String url){
        shellCallBack.gotop(url);
    }

    @JavascriptInterface
    public void storage(String obj) {
        shellCallBack.storage(obj);
    }
    @JavascriptInterface
    public void storageValue(String obj) {
        shellCallBack.storageValue(obj);
    }
    @JavascriptInterface
    public void setbg(String bgs) {
        shellCallBack.setbg(bgs);
    }
    @JavascriptInterface
    public void alert(String obj) {
        shellCallBack.alert(obj);
    }
    @JavascriptInterface
    public void confirm(String obj){
        shellCallBack.confirm(obj);
    }
    @JavascriptInterface
    public void message(String obj){
        shellCallBack.message(obj);
    }
    @JavascriptInterface
    public void deviceInfo() {
        shellCallBack.deviceInfo();
    }
    @JavascriptInterface
    public void getAddressBook(){
        shellCallBack.getAddressBook();
    }
   @JavascriptInterface
    public void upimg(String imgUrl) {
        shellCallBack.upimg(imgUrl);
    }
    @JavascriptInterface
    public void mgWallet(){
        shellCallBack.mgWallet();
    }//钱包
    @JavascriptInterface
    public void position(String code){
        shellCallBack.position(code);
    }//定位
    @JavascriptInterface
    public void qiyu(String objStr){
        shellCallBack.qiyu(objStr);
    }
    @JavascriptInterface
    public void saveImg(String obj){
        shellCallBack.saveImg(obj);
    }

    @JavascriptInterface
    public void copyText(String text){
        shellCallBack.copyText(text);
    }
    @JavascriptInterface
    public void refreshCurrentUser(){
        shellCallBack.refreshCurrentUser();
    }
    @JavascriptInterface
    public void goShare(){
        shellCallBack.goShare();
    }
    @JavascriptInterface
    public void goChat(){shellCallBack.goChat();}
    @JavascriptInterface
    public void shareUrl(String obj){
        shellCallBack.shareUrl(obj);
    }
    @JavascriptInterface
    public void contactUser(String str){
        shellCallBack.contactUser(str);
    }
    @JavascriptInterface
    public void goBackTo(String page){
        shellCallBack.goBackTo(page);
    }
    @JavascriptInterface
    public void callNavigationMap(String location){
        shellCallBack.callNavigationMap(location);
    }
    @JavascriptInterface
    public void getVersion(){
            shellCallBack.getVersion();
    }
    @JavascriptInterface
    public Integer getCache(){
        return shellCallBack.getCache();
    }
    @JavascriptInterface
    public void clearCache(String code){
        shellCallBack.clearCache(code);
    }
    @JavascriptInterface
    public void syncUserData(final String user){
        shellCallBack.syncUserData(user);
    }
    @JavascriptInterface
    public void authError() {
        //ThirdTool.getInstance().ar.exitToLogin();
    }
    /**
     * 返回 0,1
     * @param state
     */
    @JavascriptInterface
    public void nftMsgSwich(String state){
        shellCallBack.nftMsgSwich(state);
    }
    @JavascriptInterface
    public void openUrlStr(String url){
        //打开外部浏览器
        shellCallBack.openUrlStr(url);
    }
    @JavascriptInterface
    public void showUserInfo(String str){
        shellCallBack.showUserInfo(str);
    }
    @JavascriptInterface
    public void goChangePassword(){
        shellCallBack.goChangePassword();
    }
    @JavascriptInterface
    public void  goShowBackList(){
        shellCallBack.goShowBackList();
    }
    @JavascriptInterface
    public void checkUpadte() {
        myApp.hasCheckedUpdate=false;
        myApp.checkUpdate(activity);
    }


    @JavascriptInterface
    public void  scanf(String code){
        shellCallBack.scanf(code);
    }

    /**
     * 初始化阿里云上传
     *
     *
     * @param imgUrl 服务器地址
     * @param endpoint
     * @param bucket
     * @return
     */
    public OssService initOSS( String endpoint, String bucket,String imgUrl) {
        //如果希望直接使用accessKey来访问的时候，可以直接使用OSSPlainTextAKSKCredentialProvider来鉴权。
        //OSSCredentialProvider credentialProvider = new OSSPlainTextAKSKCredentialProvider(accessKeyId, accessKeySecret);
        OSSCredentialProvider credentialProvider;
        //使用自己的获取STSToken的类
        credentialProvider = new STSGetter(imgUrl);
        ClientConfiguration conf = new ClientConfiguration();
        conf.setConnectionTimeout(15 * 1000); // 连接超时，默认15秒
        conf.setSocketTimeout(15 * 1000); // socket超时，默认15秒
        conf.setMaxConcurrentRequest(5); // 最大并发请求书，默认5个
        conf.setMaxErrorRetry(2); // 失败后最大重试次数，默认2次
        OSS oss = new OSSClient(context, endpoint, credentialProvider, conf);
        return new OssService(oss, bucket);

    }
    /*private final int MY_PERMISSIONS_REQUEST_CAMERA_CODE = 4;
    protected static final int REQUEST_STORAGE_READ_ACCESS_PERMISSION = 101;


    public void upimg(String imgUrl) {
        //{"url":"http://www.jke5.com//swzh/api/imgupload/app/getUploadToken","multi":1,"remain":6}
        try{
            JSONObject jb = new JSONObject(imgUrl);
            upLoadImgUrl = jb.getString("url");
            //MainApplication.ALiUpLoadToken = upLoadImgUrl;
            //这里初始化阿里云上传图片,传入地址
//        ossService = initOSS(endpoint, bucket, UrlApi.UPLOAD_URL);
            ossService = initOSS(endpoint, bucket, upLoadImgUrl);
            imageService = new ImageService(ossService);
            if (ContextCompat.checkSelfPermission(context, Manifest.permission.CAMERA) != PackageManager.PERMISSION_GRANTED) {
                //申请拍照权限
                ActivityCompat.requestPermissions(activity, new String[]{Manifest.permission.CAMERA}, MY_PERMISSIONS_REQUEST_CAMERA_CODE);
            } else {
                //拍照
//                    chosePhotoForm();
                pickImage();
            }
        }catch (Exception e){

        }
    }
    private void pickImage() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.JELLY_BEAN // Permission was added in API Level 16
                && ActivityCompat.checkSelfPermission(context, Manifest.permission.READ_EXTERNAL_STORAGE)
                != PackageManager.PERMISSION_GRANTED) {
            requestPermission(Manifest.permission.READ_EXTERNAL_STORAGE,"需要SD卡读取权限",
                    REQUEST_STORAGE_READ_ACCESS_PERMISSION);
        }else {
          *//* MultiImageSelector selector = MultiImageSelector.create(MainActivity.this);
            selector.showCamera(true);
            selector.count(mCurrentMaxSize);
            selector.start(MainActivity.this, REQUEST_IMAGE); *//*
        }
    }

    private void requestPermission(final String permission, String rationale, final int requestCode){
        if(ActivityCompat.shouldShowRequestPermissionRationale(activity, permission)){
             new AlertDialog.Builder(context)
                    .setTitle("权限拒绝")
                    .setMessage(rationale)
                    .setPositiveButton("好", new DialogInterface.OnClickListener() {
                        @Override
                        public void onClick(DialogInterface dialog, int which) {
                            ActivityCompat.requestPermissions(activity, new String[]{permission}, requestCode);
                        }
                    })
                    .setNegativeButton("拒绝", null)
                    .create().show();
        }else{
            ActivityCompat.requestPermissions(activity, new String[]{permission}, requestCode);
        }
    }*/



}
