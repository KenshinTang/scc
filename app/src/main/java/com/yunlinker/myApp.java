package com.yunlinker;

import android.app.Activity;
import android.app.AlertDialog;
import android.app.Application;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.SharedPreferences;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.os.Handler;
import android.text.TextUtils;
import android.util.Log;

import com.baidu.mapapi.CoordType;
import com.baidu.mapapi.SDKInitializer;
import com.lzy.imagepicker.ImagePicker;
import com.qiyukf.unicorn.api.SavePowerConfig;
import com.qiyukf.unicorn.api.StatusBarNotificationConfig;
import com.qiyukf.unicorn.api.UICustomization;
import com.qiyukf.unicorn.api.YSFOptions;
import com.umeng.analytics.MobclickAgent;
import com.umeng.commonsdk.UMConfigure;
import com.umeng.message.IUmengRegisterCallback;
import com.umeng.message.PushAgent;
import com.umeng.message.UmengNotificationClickHandler;
import com.umeng.message.entity.UMessage;
import com.umeng.socialize.Config;
import com.umeng.socialize.PlatformConfig;
import com.umeng.socialize.UMShareAPI;
import com.yunlinker.scc.MainActivity;
import com.yunlinker.scc.WebviewActivity;
import com.yunlinker.shell.ToastUtil;
import com.yunlinker.upimage.GlideImageLoader;

import org.json.JSONException;
import org.json.JSONObject;
import org.xutils.x;

import java.util.Date;

import cn.bingoogolapple.qrcode.core.BGAQRCodeUtil;

import static com.yunlinker.config.WebConfig.QQID;
import static com.yunlinker.config.WebConfig.QQSECRET;
import static com.yunlinker.config.WebConfig.UMKEY;
import static com.yunlinker.config.WebConfig.WXID;
import static com.yunlinker.config.WebConfig.WXSECRET;
import static com.yunlinker.config.WebConfig.saveKey;

/**
 * Created by lemon on 2017/8/21.
 */

public class myApp extends Application {
    public static boolean hasCheckedUpdate = false;
    public static boolean firstStart = true;
    private static myApp sInstance;
    public static JSONObject newPush = new JSONObject();
    static public String currentMode = "sun";
    private Handler mHandler = new Handler();
    public static String user_timeSpan = "";
    public boolean isRefreshHome = false;
    public String isRefreshUrl = "";
    public static Date startAppTime;
    private static Handler mainHandler;
    public static void setMainhandler(Handler handler){
        mainHandler=handler;
    }
    @Override
    public void onCreate() {
        super.onCreate();
        SDKInitializer.initialize(this);
        SDKInitializer.setCoordType(CoordType.GCJ02);
        initImagePicker();
        initUmeng();
        sInstance = this;
        x.Ext.init(this);
        BGAQRCodeUtil.setDebug(true);
        UMConfigure.init(this, UMConfigure.DEVICE_TYPE_PHONE, "8bb18dfaea752c13c23b35e33e050827");

//        initQiyu();
        startApp();

    }

    public void startApp(){
        SharedPreferences sp = getSharedPreferences(saveKey, Context.MODE_PRIVATE);
        SharedPreferences.Editor editor = sp.edit();
        editor.putString("startApp", "1");
        editor.commit();
    }



    public static myApp getContext() {
        return sInstance;
    }

    private void initImagePicker() {
        //初始化图片选择器
        ImagePicker imagePicker = ImagePicker.getInstance();
        imagePicker.setImageLoader(new GlideImageLoader());   //设置图片加载器
        imagePicker.setOutPutX(1000);//保存文件的宽度。单位像素
        imagePicker.setOutPutY(1000);//保存文件的高度。单位像素
    }

    private void initUmeng() {

        MobclickAgent.startWithConfigure(new MobclickAgent.UMAnalyticsConfig(getApplicationContext(), UMKEY, "OnlineApp"));

        final PushAgent mPushAgent = PushAgent.getInstance(this);
         new Thread(new Runnable() {
            @Override
            public void run() {
                //注册推送服务，每次调用register方法都会回调该接口
                mPushAgent.register(new IUmengRegisterCallback() {

                    @Override
                    public void onSuccess(String deviceToken) {
                        //注册成功会返回device token
                        SharedPreferences sp = getApplicationContext().getSharedPreferences(saveKey, Context.MODE_PRIVATE);
                        Log.e("deviceToken", deviceToken);
                        if (!deviceToken.equals("")&&deviceToken!=null) {
                            SharedPreferences.Editor editor = sp.edit();
                            editor.putString("deviceToken", deviceToken);
                            editor.commit();
                        }
                    }

                    @Override
                    public void onFailure(String s, String s1) {

                    }
                });

                UmengNotificationClickHandler notificationClickHandler = new UmengNotificationClickHandler(){
                    @Override
                    public void dealWithCustomAction(Context context, UMessage msg) {
                        super.dealWithCustomAction(context, msg);

                        Log.e("UMessage", "dealWithCustomAction: "+msg.custom);
                        try{
                            JSONObject object =new JSONObject(msg.custom);
                            String ordersId = object.getString("ordersId");
                            String messageId = object.getString("messageId");
                            String url="";
                            if (ordersId!=null&&messageId!=null){
                                url = "orderDetail.html?oid="+ordersId+"&messageId="+messageId;
                            }
                            if (url!=null){
                                Intent intent = new Intent(getApplicationContext(), WebviewActivity.class);
                                intent.putExtra("url",url);
                                intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                               // intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                                startActivity(intent);
                            }
                        }catch (Exception e){
                            Log.e("Exception", "dealWithCustomAction: "+e);
                        }
                    }
                };
                mPushAgent.setNotificationClickHandler(notificationClickHandler);
            }
        }).start();

        UMShareAPI.get(this);
    }

    {
        Config.DEBUG = true;
        PlatformConfig.setWeixin(WXID, WXSECRET);
        PlatformConfig.setQQZone(QQID, QQSECRET);
    }

    static public boolean checkUpdate = false;


    //----qiyu---如果返回值为null，则全部使用默认参数。
    public static YSFOptions options() {
        YSFOptions options = new YSFOptions();
        options.statusBarNotificationConfig = new StatusBarNotificationConfig();
        options.statusBarNotificationConfig.notificationEntrance = MainActivity.class;
        options.savePowerConfig = new SavePowerConfig();
        options.uiCustomization = new UICustomization();
        options.uiCustomization.leftAvatar = "";
        return options;
    }

    public static myApp getInstance() {
        return sInstance;
    }

    public Handler getHandler() {
        return mHandler;
    }

    public static void checkUpdate(final Activity a) {
        if (hasCheckedUpdate)
            return;
        hasCheckedUpdate = true;
        new Thread(new Runnable() {
            @Override
            public void run() {
                String result = null;//ClientHttp.getInstance().OKHttp_GET(URL_VERSION, "type=1");
                if (!TextUtils.isEmpty(result)) {
                    try {
                        final JSONObject updateObj = new JSONObject(result);
                        if (updateObj.has("code") && updateObj.getInt("code") == 1) {
                            if (updateObj.has("data")) {
                                final JSONObject mUpdateObj = updateObj.getJSONObject("data");
                                String ver = mUpdateObj.getString("vernum");

                                int versionCode = 0;
                                try {
                                    versionCode = a.getApplicationContext().getPackageManager().getPackageInfo(a.getPackageName(), 0).versionCode;
                                } catch (PackageManager.NameNotFoundException e) {
                                    e.printStackTrace();
                                }
                                if (ver != null && versionCode > 0 && Integer.parseInt(ver) > versionCode) {
                                    a.runOnUiThread(new Runnable() {
                                        @Override
                                        public void run() {
                                            AlertDialog.Builder builder = new AlertDialog.Builder(a);
                                            builder.setPositiveButton("确定", new DialogInterface.OnClickListener() {
                                                @Override
                                                public void onClick(DialogInterface dialog, int which) {
                                                    try {
                                                        if (mUpdateObj.getInt("forced") >= 1) {
                                                            a.finish();
                                                        }
                                                        Intent intent = new Intent();
                                                        intent.setAction("android.intent.action.VIEW");
                                                        Uri content_url = Uri.parse(mUpdateObj.getString("url"));
                                                        intent.setData(content_url);
                                                        a.startActivity(intent);
                                                    } catch (JSONException e) {
                                                        e.printStackTrace();
                                                    }
                                                }
                                            });
                                            builder.setNegativeButton("取消", new DialogInterface.OnClickListener() {
                                                @Override
                                                public void onClick(DialogInterface dialog, int which) {
                                                    try {
                                                        if (mUpdateObj.getInt("forced") >= 1) {
                                                            a.finish();
                                                        }
                                                    } catch (JSONException e) {
                                                        e.printStackTrace();
                                                    }
                                                }
                                            });
                                            AlertDialog dialog = builder.create();
                                            dialog.setCancelable(false);
                                            dialog.setTitle("提示");
                                            dialog.setMessage("发现新版本，是否更新？");
                                            dialog.show();
                                        }
                                    });
                                } else {
                                    if (a.getLocalClassName().contains("ShellActivity")) {
                                        a.runOnUiThread(new Runnable() {
                                            @Override
                                            public void run() {
                                                ToastUtil.showTost("当前已是最新版本");
                                            }
                                        });
                                    }
                                }
                            }
                        }

                    } catch (JSONException e) {
                        e.printStackTrace();
                    }
                }
            }
        }).start();
    }


}
