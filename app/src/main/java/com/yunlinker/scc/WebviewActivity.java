package com.yunlinker.scc;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.app.AlertDialog;
import android.app.Dialog;
import android.app.ProgressDialog;
import android.content.ClipData;
import android.content.ClipboardManager;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.SharedPreferences;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.content.res.Configuration;
import android.content.res.Resources;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Color;
import android.graphics.Rect;
import android.graphics.drawable.ColorDrawable;
import android.net.Uri;
import android.os.Build;
import android.os.Handler;
import android.os.Message;
import android.support.annotation.NonNull;
import android.support.annotation.RequiresApi;
import android.os.Bundle;
import android.support.v4.content.ContextCompat;
import android.text.TextUtils;
import android.util.Base64;
import android.util.Log;
import android.view.Gravity;
import android.view.KeyEvent;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.PopupWindow;
import android.widget.TextView;
import android.widget.Toast;

import com.luck.picture.lib.PictureSelector;
import com.luck.picture.lib.entity.LocalMedia;
import com.qiyukf.unicorn.api.ConsultSource;
import com.qiyukf.unicorn.api.ProductDetail;
import com.qiyukf.unicorn.api.Unicorn;
import com.qiyukf.unicorn.api.YSFOptions;
import com.qiyukf.unicorn.api.YSFUserInfo;
import com.umeng.message.IUmengCallback;
import com.umeng.message.PushAgent;
import com.umeng.socialize.ShareAction;
import com.umeng.socialize.UMAuthListener;
import com.umeng.socialize.UMShareAPI;
import com.umeng.socialize.UMShareConfig;
import com.umeng.socialize.UMShareListener;
import com.umeng.socialize.bean.SHARE_MEDIA;
import com.umeng.socialize.media.UMImage;
import com.umeng.socialize.media.UMWeb;
import com.yunlinker.auth.WebPermissionManager;
import com.yunlinker.image.ImageTool;
import com.yunlinker.manager.ActivityManager;
import com.yunlinker.manager.ActivityResult;
import com.yunlinker.manager.HttpManager;
import com.yunlinker.map.Location;
import com.yunlinker.myApp;
import com.yunlinker.pay.OnlinePay;
import com.yunlinker.shell.ShellCallBack;
import com.yunlinker.shell.ShellWebView;
import com.yunlinker.ulit.DonwloadSaveImg;
import com.yunlinker.upimage.UpImger;

import org.json.JSONException;
import org.json.JSONObject;

import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URISyntaxException;
import java.net.URL;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Stack;

import static com.yunlinker.auth.WebPermissionManager.StoragePermissions;
import static com.yunlinker.auth.WebPermissionManager.UpImgPermissions;
import static com.yunlinker.config.WebConfig.AssestRoot;
import static com.yunlinker.config.WebConfig.SELECTED_IMAGE_CODE;
import static com.yunlinker.config.WebConfig.UMSHARE_CALLBACK_CODE;
import static com.yunlinker.config.WebConfig.saveKey;

public class WebviewActivity extends Activity implements View.OnClickListener{
    private Handler handler;
     public static String key,lat,lng,ab,val;
     private long exitTime = 0;
     //public String val;
     public static int fittraine;
     private WebView webView;
     private String value;
     private ShellWebView shellWebView;
     SharedPreferences.Editor editor;
     private Main2Activity main2Activity;
     private Bundle webViewState;
     PopupWindow window;
     private ProgressDialog progressDialog;
     private List<String> downImgs = new ArrayList<>();
     //支付
     private OnlinePay payObj;
     public OnlinePay getPay() {
        return payObj;
    }
     protected Map<String,Stack<String>> insCodeMap= new HashMap<String, Stack<String>>();
     //添加webview
     private WebviewActivity inp = null;
     //获取inspect对象
     public WebviewActivity jsInp() {
        return inp;
    }
     String url = "";
     private Boolean hasLoaded = false;
     public void setHasLoaded(Boolean hasLoaded) {
        this.hasLoaded = hasLoaded;
    }

     //添加webview
     private WebviewActivity webviewActivity = null;
     //获取inspect对象
     public WebviewActivity inptest() {
        return webviewActivity;
    }

     private Dialog logindialog,dialog;
     private static final int REQUEST_CODE_SCAN = 0x0000;
     public   String tempcode;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        //FullScreen.fullScreen(this);
        setContentView(R.layout.activity_webview);
        webView=(WebView)findViewById(R.id.webviewat);

        if (webViewState != null) {
            //Fragment实例并未被销毁, 重新create view
            webView.restoreState(webViewState);
        } else if (savedInstanceState != null) {
            //Fragment实例被销毁重建
            webView.restoreState(savedInstanceState);
        }
        Intent intent = getIntent();

        String st = intent.getStringExtra("url");
        webView.loadUrl(st);


        ActivityManager.getInstance().adde(WebviewActivity.this);
        url = getIntent().getStringExtra("url");
        init(webView);
        String lastUrl = "";
        if (url.contains("http")) {
            lastUrl = url;
        } else {
            lastUrl = "file:///android_asset/" + url;
        }
        webView.loadUrl(lastUrl);
        ActivityManager.getInstance().pushActivity(this, url);


    }



    @Override
    protected void onActivityResult(int requestCode, int resultCode,  Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if(requestCode==UMSHARE_CALLBACK_CODE) {
            UMShareAPI.get(this).onActivityResult(requestCode, resultCode, data);
        } else {
            ActivityResult.getInstance().resultBack(WebviewActivity.this, requestCode, resultCode, data);
        }

        if(requestCode==REQUEST_CODE_SCAN&&resultCode==RESULT_OK) {
            if (data != null) {
                String result = data.getStringExtra("codedContent");
                setInsCode("scanf", tempcode);
                setValue("scanf", result);
            }
        }
    }
    @Override
    public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
        WebPermissionManager.getInstance(WebviewActivity.this).authBack(requestCode, permissions, grantResults);
    }

    @Override
    public Resources getResources() {
        Resources res = super.getResources();
        Configuration config=new Configuration();
        config.setToDefaults();
        res.updateConfiguration(config,res.getDisplayMetrics());
        return res;
    }

    @SuppressLint("NewApi")
    void init(WebView view) {
        shellWebView = new ShellWebView(this, this, shellCallBack);
        view.getSettings().setTextZoom(100);
        view.addJavascriptInterface(shellWebView, "WeiLai");
        WebSettings setting = view.getSettings();
        setting.setJavaScriptCanOpenWindowsAutomatically(true);
        setting.setSupportMultipleWindows(true);
        setting.setAllowFileAccess(true);// 设置允许访问文件数据
        setting.setSupportMultipleWindows(true);// 设置允许开启多窗口
        setting.setDomStorageEnabled(true);//
        setting.setJavaScriptEnabled(true);// 设置支持javascript
        setting.setUseWideViewPort(true);
        setting.setLoadWithOverviewMode(true);
        setting.setDefaultTextEncodingName("utf-8");
        setting.setDomStorageEnabled(true);
        setting.setLoadsImagesAutomatically(true);  //支持自动加载图片
        WebView.setWebContentsDebuggingEnabled(true);

        // 覆盖WebView默认使用第三方或系统默认浏览器打开网页的行为，使网页用WebView打开

        view.setWebViewClient(webViewClient);
        view.setWebChromeClient(webChromeClient);
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {
            // WebView.setWebContentsDebuggingEnabled(true);
        }
    }

    WebChromeClient webChromeClient = new WebChromeClient() {

    };
    WebViewClient webViewClient = new WebViewClient() {
        @Override
        public boolean shouldOverrideUrlLoading(WebView view, String url) {
            if (url.startsWith("tel:")) {
                Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse(url));
                startActivity(intent);
                return true;
            }
            view.loadUrl(url);
            return true;
        }

        @Override
        public void onPageFinished(WebView view, String url) {
            super.onPageFinished(view, url);
            setHasLoaded(true);
            new Handler().postDelayed(new Runnable(){
                public void run() {
                    webView.setAlpha(1);
                    //if(TextUtils.equals("Main2Activity", activity.getLocalClassName()))
                    //activity.setTheme(R.style.AppTheme);
                }
            }, 1000);

        }
        @Override
        public void onPageStarted(WebView view, String url, Bitmap favicon) {
            super.onPageStarted(view, url, favicon);
            setHasLoaded(false);
        }
    };


    ShellCallBack shellCallBack = new ShellCallBack() {
        //注册推送
        @Override
        public void registerPush(String obj) {
            int state = 0;
            String devicetk = "none";
            String tempTk = null;
            String url = null;
            if(obj != null) {
                try {
                    JSONObject jb = new JSONObject(obj);
                    setInsCode("registerPush",jb.getString("code"));
                    state = jb.getInt("state");
                    tempTk = jb.getString("token");
                    url = jb.getString("url");
                } catch (JSONException e) {
                    e.printStackTrace();
                }
            }
            SharedPreferences sp = getSharedPreferences(saveKey, MODE_PRIVATE);
            if(state==1 || obj == null)
                devicetk = sp.getString("deviceToken", "");
            if(tempTk!=null && url!=null) {
                HashMap<String,String> tempParam = new HashMap<>();
                tempParam.put("devicetype",tempTk.length()>0?"1":"0");
                tempParam.put("devicetoken",devicetk);
                tempParam.put("_token",tempTk);
                tempParam.put("_device","2");
                final String furl = url;
                final HashMap<String,String> fparam = tempParam;
                new Thread(new Runnable() {
                    @Override
                    public void run() {
                        HttpManager.POST(furl, fparam);
                    }
                }).start();
            }
            if(obj!=null)
                setValue("registerPush", "1");

        }
        //设置推送
        @Override
        public void setPush(String obj) {
            String act = "";
            String open = "";
            try {
                JSONObject jb = new JSONObject(obj);
                setInsCode("setPush",jb.getString("code"));
                act = jb.getString("act");
                open = jb.getString("value");
            } catch (JSONException e) {
                e.printStackTrace();
            }
            final SharedPreferences sp = getSharedPreferences(saveKey, MODE_PRIVATE);
            if(act.equals("get")) {
                String closeStr = sp.getString("closePush", "");
                setValue("setPush",(TextUtils.equals(closeStr,"1")?"0":"1"));
            } else if(act.equals("set")) {
                final String openStr = open;
                PushAgent push = PushAgent.getInstance(getApplicationContext());
                IUmengCallback pushCb = new IUmengCallback() {
                    @Override
                    public void onSuccess() {
                        SharedPreferences.Editor editor = sp.edit();
                        String res = openStr.equals("1")?"0":"1";
                        editor.putString("closePush", res);
                        editor.apply();
                        setValue("setPush",openStr);
                    }
                    @Override
                    public void onFailure(String s, String s1) {
                        setValue("setPush","0");
                    }
                };
                if(Integer.parseInt(open)==1) {
                    push.enable(pushCb);
                } else {
                    push.disable(pushCb);
                }
            }
        }
         //支付
        @Override
        public void pay(String obj) {
            try{
                JSONObject jb = new JSONObject(obj);
                setInsCode("pay",jb.getString("code"));
                if(payObj==null) {
                    payObj = new OnlinePay();
                    payObj.payResult = new OnlinePay.PayResult() {
                        @Override
                        public void success() {
                            setValue("pay","{\"code\":1}");
                        }
                        @Override
                        public void error(String msg) {
                            setValue("pay","{\"code\":0,\"msg\":\""+msg+"\"}");

                        }
                    };
                }
                payObj.startPay(jb, WebviewActivity.this);
            }catch(Exception e){}
        }

        @Override
        public void godismiss(String obj)  {
            //Toast.makeText(WebviewActivity.this, "点击了按钮", Toast.LENGTH_SHORT).show();
            if (!obj.equals("")||obj.equals("1")) {
                Intent intent = new Intent(WebviewActivity.this, Main2Activity.class).setFlags(Intent.FLAG_ACTIVITY_CLEAR_TASK | Intent.FLAG_ACTIVITY_NEW_TASK);
                Bundle bundle = new Bundle();
                bundle.putString("Starag", "1");
                intent.putExtras(bundle);
                startActivity(intent);
                finish();
            }else if(!obj.equals("")||obj.equals("2")){
                Intent intent = new Intent(WebviewActivity.this, Main2Activity.class).setFlags(Intent.FLAG_ACTIVITY_CLEAR_TASK | Intent.FLAG_ACTIVITY_NEW_TASK);
                Bundle bundle = new Bundle();
                bundle.putString("Starag", "2");
                intent.putExtras(bundle);
                startActivity(intent);
                finish();
           }else if (!obj.equals("")||obj.equals("3")){
                Intent intent = new Intent(WebviewActivity.this, Main2Activity.class).setFlags(Intent.FLAG_ACTIVITY_CLEAR_TASK | Intent.FLAG_ACTIVITY_NEW_TASK);
                Bundle bundle = new Bundle();
                bundle.putString("Starag", "3");
                intent.putExtras(bundle);
                startActivity(intent);
                finish();
            }else if(!obj.equals("")||obj.equals("4")){
                Intent intent = new Intent(WebviewActivity.this, Main2Activity.class).setFlags(Intent.FLAG_ACTIVITY_CLEAR_TASK | Intent.FLAG_ACTIVITY_NEW_TASK);
                Bundle bundle = new Bundle();
                bundle.putString("Starag", "4");
                intent.putExtras(bundle);
                startActivity(intent);
                finish();
            }else if (!obj.equals("")||obj.equals("5")){
                Intent intent = new Intent(WebviewActivity.this, Main2Activity.class).setFlags(Intent.FLAG_ACTIVITY_CLEAR_TASK | Intent.FLAG_ACTIVITY_NEW_TASK);
                Bundle bundle = new Bundle();
                bundle.putString("Starag", "5");
                intent.putExtras(bundle);
                startActivity(intent);
                finish();
            }else {
                Intent intent = new Intent(WebviewActivity.this, Main2Activity.class).setFlags(Intent.FLAG_ACTIVITY_CLEAR_TASK | Intent.FLAG_ACTIVITY_NEW_TASK);
                startActivity(intent);
                finish();
            }

        }
        @Override
        public void gologin(String url) {
            SharedPreferences sp = getSharedPreferences(saveKey,Context.MODE_APPEND);
            SharedPreferences.Editor editor = sp.edit();
            editor.remove("token");
            editor.remove("customerId");
            editor.remove("userinfo");
            editor.commit();
            if(TextUtils.isEmpty(url)){
                ActivityManager.getInstance().finishButFirst();
            }else{
                ActivityManager.getInstance().finishButTop();
                if(!url.contains("http:"))
                    url= AssestRoot+url;
                final String fUrl = url;
                WebviewActivity.this.runOnUiThread(new Runnable() {
                    @Override
                    public void run() {
                        webView.loadUrl(fUrl);
                    }
                });
            }
        }

        @Override
        public void gopage(String url) {
            Log.e("有没有数据", "*****************gopage*****************"+url );
            Log.e("有没有数据", "*****************gopage*****************"+key);
            Log.e("有没有数据", "*****************gopage*****************"+ab);
            Log.e("有没有数据", "*****************gopage*****************"+fittraine);
            Log.e("有没有数据", "*****************gopage*****************"+val);
            try {
                SharedPreferences sp = getSharedPreferences(saveKey,Context.MODE_APPEND);
                SharedPreferences.Editor editar = sp.edit();
                val = sp.getString("userinfo","");
                JSONObject object = new JSONObject(val);
                String token = object.getString("token");
                String customerId =object.getString("customerId");
                editar.putString("userinfo",val);
                editar.putString("token",token);
                editar.putString("customerId",customerId);
                Log.e("哈哈哈哈哈哈哈", "**************gopage***************"+token);
                editar.commit();
                //fittraine = Integer.parseInt(bbt);
            }catch (Exception e){
                e.printStackTrace();
            }
            if (url!=null&&val!=null){
                Intent intent = new Intent(WebviewActivity.this, Main2Activity.class).setFlags(Intent.FLAG_ACTIVITY_CLEAR_TASK | Intent.FLAG_ACTIVITY_NEW_TASK);
                startActivityForResult(intent,1);
                finish();
            }

        }

        @Override
        public void loginOut() {

        }

        @Override
        public void close(String count) {
            int c = Integer.parseInt(count);
            if(c<1)
                c=1;
            ActivityManager.getInstance().back(c);
        }

        @Override
        public void gotop(String url) {
            if(TextUtils.isEmpty(url)){
                ActivityManager.getInstance().finishButFirst();
            }else{
                ActivityManager.getInstance().finishButTop();
                if(!url.contains("http:"))
                    url= AssestRoot+url;
                final String fUrl = url;
                WebviewActivity.this.runOnUiThread(new Runnable() {
                    @Override
                    public void run() {
                        webView.loadUrl(fUrl);
                    }
                });
            }
        }
        @Override
        public void storageValue(String obj) {
            try{
                JSONObject jb = new JSONObject(obj);
                setInsCode("storageValue",jb.getString("code"));;
                SharedPreferences sp= getSharedPreferences(saveKey,Context.MODE_APPEND);
                SharedPreferences.Editor editor = sp.edit();
                String key = jb.getString("key");
                String value = jb.getString("value");
                editor.putString(key,value);
                editor.commit();
                setValue("storageValue", value);
            } catch (Exception e){
                e.printStackTrace();
            }
        }

        @Override
        public void storage(String obj) {
            try {
                JSONObject jb = new JSONObject(obj);
                setInsCode("storage",jb.getString("code"));
                SharedPreferences sp = getSharedPreferences(saveKey,Context.MODE_APPEND);
                String val = sp.getString(jb.getString("userinfo"),"");
               // Toast.makeText(mactivity, ""+val, Toast.LENGTH_SHORT).show();
                setValue("storage",val );
            } catch (Exception e) {
                e.printStackTrace();
            }
        }

        @Override
        public void setbg(String bgs) {

        }

        @Override
        public void alert(String obj) {
            try {
                JSONObject jb = new JSONObject(obj);
                setInsCode("alert",jb.getString("code"));
                showAlert(jb.getString("mess"));
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }

        @Override
        public void confirm(String obj) {
            try {
                JSONObject jb = new JSONObject(obj);
                setInsCode("confirm",jb.getString("code"));
                showConfirm(jb.getString("mess"));
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }

        @Override
        public void message(String obj) {
            Toast toast = Toast.makeText(getApplicationContext(), obj,
                    Toast.LENGTH_SHORT);
            //可以控制toast显示的位置
            toast.setGravity(Gravity.TOP|Gravity.CENTER_HORIZONTAL, 0, 100);
            toast.show();

        }

        @Override
        public void deviceInfo() {

        }

        @Override
        public void getAddressBook() {

        }

        @Override
        public void upimg(String imgUrl) {
            try{
                final JSONObject jb = new JSONObject(imgUrl);
                setInsCode("upimg",jb.getString("code"));
                WebPermissionManager.getInstance(WebviewActivity.this).CheckPermission(UpImgPermissions, new WebPermissionManager.OnPermissionBack() {
                    @Override
                    public void success() {
                        UpImger.getInstance().upimgs(jb, WebviewActivity.this);
                    }

                    @Override
                    public void error() {}
                });
            }catch(Exception e){

            }
        }

        @Override
        public void mgWallet() {

        }
        //获取位置信息
        @Override
        public void position(final String code) {
           // setInsCode("position",code);
            WebPermissionManager.getInstance(WebviewActivity.this).CheckPermission(WebPermissionManager.LocationPermissions, new WebPermissionManager.OnPermissionBack() {
                @Override
                public void success() {
                    Location.getInstance().position(WebviewActivity.this,webView,code);
                }

                @Override
                public void error() {
                    setValue("position", "{\"code\":0}");
                    Toast.makeText(getApplicationContext(),"授权失败，请设置权限后重试",Toast.LENGTH_SHORT).show();
                }
            });
        }

        @Override
        public void goChat() {

        }

        @Override
        public void refreshCurrentUser() {

        }

        @Override
        public void goShare() {

        }
        //分享
        @Override
        public void shareUrl(String obj) {
            JSONObject jb = null;
            try{
                jb = new JSONObject(obj);
                setInsCode("shareUrl",jb.getString("code"));
            }catch(Exception e){}
            final JSONObject fjb = jb;
            WebPermissionManager.getInstance(WebviewActivity.this).CheckPermission(WebPermissionManager.StoragePermissions, new WebPermissionManager.OnPermissionBack() {
                @Override
                public void success() {
                    startShare(fjb);
                }

                @Override
                public void error() {
                    Toast.makeText(WebviewActivity.this.getApplicationContext(), "获取权限失败，请检查权限后重试", Toast.LENGTH_SHORT).show();
                }
            });

        }

        private UMShareListener umShareListener;
        private void startShare(JSONObject jb) {
            if(umShareListener==null) {
                umShareListener = new UMShareListener() {
                    @Override
                    public void onStart(SHARE_MEDIA share_media) {

                    }

                    @Override
                    public void onResult(SHARE_MEDIA share_media) {
                        setValue("shareUrl","{\"code\":1,\"msg\": \"分享成功\"}");
                    }

                    @Override
                    public void onError(SHARE_MEDIA share_media, Throwable throwable) {
                        setValue("shareUrl","{\"code\":0,\"msg\": \"分享失败\"}");
                    }

                    @Override
                    public void onCancel(SHARE_MEDIA share_media) {
                        setValue("shareUrl","{\"code\":0,\"msg\": \"分享失败\"}");
                    }
                };
            }
            if(jb != null) {
                String title = "";
                String pic = "";
                String url = "";
                String desc = "";
                String base64 = null;
                try {
                    if(jb.has("base64"))
                        base64 = jb.getString("base64");
                    title = jb.getString("title");
                    pic = jb.getString("pic");
                    url = jb.getString("url");
                    desc = jb.getString("desc");
                } catch (JSONException e) {
                    e.printStackTrace();
                }
                if((TextUtils.isEmpty(title) || TextUtils.isEmpty(pic) || TextUtils.isEmpty(url) || TextUtils.isEmpty(desc))) {
                    Toast.makeText(WebviewActivity.this.getApplicationContext(), "分享异常，请稍后重试", Toast.LENGTH_SHORT).show();
                    return;
                }
                UMImage umimg = null;
                UMWeb web = null;
                if(base64!=null) {
                    byte[] bt = Base64.decode(base64, Base64.DEFAULT);
                    umimg = new UMImage(WebviewActivity.this, bt);
                } else {
                    web = new UMWeb(url);
                    web.setTitle(title);//标题
                    UMImage thumb =  new UMImage(WebviewActivity.this, pic);
                    web.setThumb(thumb);  //缩略图
                    web.setDescription(desc);//描述
                }
                int platform = 0;
//                try {
//                    platform = Integer.parseInt(jb.getString("platform"));
//                } catch (JSONException e) {
//                    e.printStackTrace();
//                }
                ShareAction sa = new ShareAction(WebviewActivity.this);
                if(umimg!=null) sa.withMedia(umimg);
                else sa.withMedia(web);
                sa.setCallback(umShareListener);
                if(platform>0) {
                    SHARE_MEDIA m = SHARE_MEDIA.WEIXIN;
                    if(platform==2) {
                        m = SHARE_MEDIA.WEIXIN_CIRCLE;
                    }
                    sa.setPlatform(m);
                    sa.share();
                } else {
                    sa.setDisplayList(SHARE_MEDIA.WEIXIN,SHARE_MEDIA.WEIXIN_CIRCLE);
                    sa.open();
                }

            }
        }


        @Override
        public void contactUser(String str) {

        }

        @Override
        public void goBackTo(String page) {
            int startPosition=ActivityManager.getInstance().getPageIndex(page);
            ActivityManager.getInstance().popActivity(startPosition);
        }

        @Override
        public void callNavigationMap(String location) {

        }

        @Override
        public void getVersion() {

        }

        @Override
        public Integer getCache() {
            return null;
        }

        @Override
        public void clearCache(String code) {
//            setInsCode("clearCache", code);
//            BaseTools.clearAllCache(getApplicationContext());
//            setValue("clearCache","1");
        }

        @Override
        public void nftMsgSwich(String state) {

        }

        @Override
        public void openUrlStr(String url) {
                Intent intent = new Intent();
                intent.setAction("android.intent.action.VIEW");
                Uri content_url = Uri.parse(url);
                intent.setData(content_url);
                startActivity(intent);
        }
        @Override
        public void showUserInfo(String str) {

        }

        @Override
        public void goChangePassword() {

        }

        @Override
        public void goShowBackList() {

        }

        @Override
        public void syncUserData(String user) {

        }
        //第三方登陆
        private UMAuthListener authListener = null;
        @Override
        public void extLogin(String obj) {
            UMShareConfig config = new UMShareConfig();
            config.isNeedAuthOnGetUserInfo(true);
            UMShareAPI.get(WebviewActivity.this).setShareConfig(config);
            String type = "1";
            try{
                JSONObject jb = new JSONObject(obj);
                type = jb.getString("type");
                setInsCode("extLogin",jb.getString("code"));
            }catch(Exception e){}
            final String platform = type;
            if(authListener==null) {
                authListener = new UMAuthListener() {
                    @Override
                    public void onStart(SHARE_MEDIA share_media) {

                    }

                    @Override
                    public void onComplete(SHARE_MEDIA share_media, int i, Map<String, String> map) {
                        JSONObject successJb = new JSONObject();
                        Log.i("!!!!!!",share_media + "授权成功:" + map);
                        try {
                            String unionid = map.get("unionid");
                            if(unionid==null || unionid.length()<=0)
                                unionid = map.get("openid");
                            successJb.put("unionid",unionid);
                            successJb.put("openid",map.get("openid"));
                            successJb.put("nickname",map.get("screen_name"));
                            successJb.put("sex",map.get("gender"));
                            successJb.put("face",map.get("profile_image_url"));
                            successJb.put("city",map.get("city"));
                            successJb.put("province",map.get("province"));
                            successJb.put("type",Integer.parseInt(platform));
                            successJb.put("code","1");
                        } catch (JSONException e) {
                            e.printStackTrace();
                        }
//                    UMShareAPI.get(mactivity).deleteOauth(mactivity, (Integer.parseInt(platform) == 2 ? SHARE_MEDIA.QQ : SHARE_MEDIA.WEIXIN), null);
                        if(successJb.has("unionid")) {
                            setValue("extLogin",successJb.toString());
                        } else {
                            setValue("extLogin","{\"code\":0,\"msg\": \"获取用户登录信息失败\"}");
                        }
                    }

                    @Override
                    public void onError(SHARE_MEDIA share_media, int i, Throwable throwable) {
                        Log.e("123123"+share_media + "授权失败", "!!!!");
                        setValue("extLogin","{\"code\":0,\"msg\": \"第三方登录失败\"}");
                    }

                    @Override
                    public void onCancel(SHARE_MEDIA share_media, int i) {
                        Log.e("123123132",share_media + "授权取消");
                        setValue("extLogin","{\"code\":0,\"msg\": \"用户取消登录\"}");
                    }
                };
            }
            UMShareAPI.get(WebviewActivity.this).getPlatformInfo(WebviewActivity.this, Integer.parseInt(platform) == 2 ? SHARE_MEDIA.QQ : SHARE_MEDIA.WEIXIN, authListener);
        }

        @Override
        public void jxtv() {

        }

        @Override
        public void navigation(String obj) {
            dhPopupView();
            try {
                JSONObject jb = new JSONObject(obj);
                 lng = jb.getString("lat");
                 lat = jb.getString("lng");
                Log.e("哈哈哈哈哈哈哈哈","lat"+lat+"lng"+lng );
                String addr= jb.getString("addr");
            }catch (Exception e){

            }

        }





        @Override
        public void qiyu(String objStr) {
            try {
                JSONObject jb = new JSONObject(objStr);
                if(!jb.has("login") || jb.getInt("login")==0) {
                    //注销用户
                    Unicorn.logout();
                } else {
                    //打开客服窗口
                    //如果用户存在展示用户信息
                    if(jb.has("user")) {
                        JSONObject user =  jb.getJSONObject("user");
                        YSFUserInfo userInfo = new YSFUserInfo();
                        userInfo.userId = user.getString("userId");
                        userInfo.authToken = "";
                        userInfo.data="[\n" +
                                "    {\"key\":\"real_name\", \"value\":\""+user.getString("real_name")+"\"},\n" +
                                "    {\"key\":\"mobile_phone\", \"value\":\"" + user.getString("mobile_phone") + "\"},\n" +
                                "    {\"key\":\"avatar\", \"value\": \"" + user.getString("avatar") + "\"},\n" +
                                "]";
                        YSFOptions o = myApp.options();
                        o.uiCustomization.rightAvatar = user.getString("avatar");
                        Unicorn.updateOptions(o);
                        Unicorn.setUserInfo(userInfo);
                    }

                    ConsultSource source = new ConsultSource("", "", "");

                    if(jb.has("goods")) {
                        JSONObject goods =  jb.getJSONObject("goods");
                        ProductDetail.Builder gb =  new ProductDetail.Builder();
                        gb.setTitle(goods.getString("title"));
                        gb.setPicture(goods.getString("picture"));
                        gb.setDesc(goods.getString("desc"));
                        gb.setNote(goods.getString("note"));
                        gb.setAlwaysSend(true);
                        source.productDetail = gb.create();
                    }

                    Unicorn.openServiceActivity(WebviewActivity.this, "皮革客服", source);

                }
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }

        @Override
        public void saveImg(final String obj) {
            WebPermissionManager.getInstance(WebviewActivity.this).CheckPermission(StoragePermissions, new WebPermissionManager.OnPermissionBack() {
                @Override
                public void success() {
                    JSONObject jb = null;
                    String urls = null;
                    try{
                        //jb = new JSONObject(obj);
                        //setInsCode("saveImg",jb.getString("code"));
                       // urls = jb.getString("data");
                        DonwloadSaveImg.donwloadImg(WebviewActivity.this,obj);
                    }catch(Exception e){

                    }
                }

                @Override
                public void error() {
                   setValue("saveImg","{\"code\":0,\"msg\": \"存储权限读取失败\"}");
                }
            });
        }

        @Override
        public void copyText(String text) {
            //获取剪贴板管理器：
            ClipboardManager cm = (ClipboardManager)getSystemService(Context.CLIPBOARD_SERVICE);
            // 创建普通字符型ClipData
            ClipData mClipData = ClipData.newPlainText("Label", text);
            // 将ClipData内容放到系统剪贴板里。
            cm.setPrimaryClip(mClipData);
            Toast.makeText(getApplicationContext(), "复制成功",
                    Toast.LENGTH_SHORT).show();
        }

        @Override
        public void scanf(String code) {
            if (ContextCompat.checkSelfPermission(WebviewActivity.this,
                    android.Manifest.permission.CAMERA)
                    != PackageManager.PERMISSION_GRANTED) {
                requestPermissions(
                        new String[]{android.Manifest.permission.CAMERA},
                        REQUEST_CODE_SCAN);
            } else {
                Intent intent = new Intent(WebviewActivity.this, TestScanActivity.class);
                startActivityForResult(intent, REQUEST_CODE_SCAN);
                tempcode = code;
            }

        }
    };
    @Override
    public boolean onKeyDown(int keyCode, KeyEvent event) {
        Boolean backV = true;
        switch (keyCode) {
            case KeyEvent.KEYCODE_BACK:
                onBackPressed();
                break;
            case KeyEvent.KEYCODE_MENU:
                break;
            default:
                backV = super.onKeyDown(keyCode, event);
                break;
        }
        return  backV;
    }

    //设置code
    public void setInsCode(String method, String code) {
        if(!insCodeMap.containsKey(method)) {
            insCodeMap.put(method, new Stack<String>
                    ());
        }
        insCodeMap.get(method).push(code);
    }

    public void setValue(final String method, String tempData) {
        if(!TextUtils.isEmpty(tempData)) {
            if(tempData.contains("'"))
                tempData = tempData.replaceAll("\'","\\\\'");
            if(tempData.contains("\\\""))
                tempData = tempData.replaceAll("\\\\\"","\\\\'");
        }
        final String resultString = tempData;
        webView.post(new Runnable() {
            @Override
            public void run() {
                if(TextUtils.isEmpty(method) || TextUtils.equals(method,"0")) {
                    webView.loadUrl("javascript:_w9_wcallback('" + resultString + "','0')");
                } else {
                    webView.loadUrl("javascript:_w9_wcallback('" + resultString + "','"+getInsCode(method)+"')");
                }
            }
        });

    }

    //获取code
    public String getInsCode(String method) {
        if (insCodeMap.get(method)==null || insCodeMap.get(method).empty()) {
            return "";
        } else {
            return insCodeMap.get(method).pop();
        }
    }
    public void resumeWeb() {
        if(hasLoaded)
            setValue("","resume");
    }

    @Override
    public void onBackPressed() {
         webView.loadUrl("javascript:_w9_wcallback('back',0);");
    }



    private void showAlert(String mess){
        logindialog=null;
        LayoutInflater inflater = getLayoutInflater();
        View view = inflater.inflate(R.layout.layout_popuppt,null);
        TextView upgradenow=(TextView)view.findViewById(R.id.quedin);
        TextView ting = (TextView)view.findViewById(R.id.ting);
        ting.setText(mess);
        //确定
        upgradenow.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                logindialog.dismiss();
                setValue("alert","1");
            }
        });
        logindialog=new Dialog(this, R.style.loadingDialogStyle);
        logindialog.setContentView(view);
        logindialog.show();
    }

    @Override
    protected void onPause() {
        //webView.onPause();

        //Fragment不被销毁(Fragment被加入back stack)的情况下, 依靠Fragment中的成员变量保存WebView状态
        webViewState = new Bundle();
        webView.saveState(webViewState);
        super.onPause();
        if(dialog!=null) dialog.dismiss();
    }

    @RequiresApi(api = Build.VERSION_CODES.KITKAT)
    private void dhPopupView() {
        View popupView = getLayoutInflater().inflate(R.layout.map_navgation_sheet, null);
        TextView baidu_btn = (TextView) popupView.findViewById(R.id.baidu_btn);
        TextView gaode_btn = (TextView)popupView.findViewById(R.id.gaode_btn);
        TextView tencent_btn = (TextView)popupView.findViewById(R.id.tencent_btn);
        TextView cancel_btn2 = (TextView)popupView.findViewById(R.id.cancel_btn2);

        baidu_btn.setOnClickListener(this);
        gaode_btn.setOnClickListener(this);
        tencent_btn.setOnClickListener(this);
        cancel_btn2.setOnClickListener(this);
        // : 2016/5/17 创建PopupWindow对象，指定宽度和高度
//        window = new PopupWindow(popupView, ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT);
        window = new PopupWindow();

        window.setContentView(popupView);
        //设置宽高
        window.setWidth(ViewGroup.LayoutParams.MATCH_PARENT);
        window.setHeight(ViewGroup.LayoutParams.WRAP_CONTENT);

        // : 2016/5/17 设置动画
//        window.setAnimationStyle(R.style.popup_window_anim);
        // : 2016/5/17 设置背景颜色
        window.setBackgroundDrawable(new ColorDrawable(Color.parseColor("#88323232")));
        // : 2016/5/17 设置可以获取焦点
        window.setFocusable(true);
        // : 2016/5/17 设置可以触摸弹出框以外的区域
        window.setOutsideTouchable(true);
        // ：更新popupwindow的状态
        window.update();
        window.setClippingEnabled(false);
        Rect rect = new Rect();
        getWindow().getDecorView().getWindowVisibleDisplayFrame(rect);
        int winHeight = getWindow().getDecorView().getHeight();
        window.showAtLocation(popupView, Gravity.BOTTOM | Gravity.CENTER_HORIZONTAL, 0, winHeight - rect.bottom);
    }
    @Override
    public void onClick(View v) {
        switch (v.getId()) {
            case R.id.baidu_btn:
                baiduMap();
                break;
            case R.id.gaode_btn:
                gaodeMap();
                break;
            case R.id.cancel_btn2:
                if (window != null) {
                    window.dismiss();
                }
                break;
        }
    }
    /*百度地图*/
    public void baiduMap() {
        if (isAvilible(this, "com.baidu.BaiduMap")) {//传入指定应用包名
            Intent il = new Intent();
            il.setData(Uri.parse("baidumap://map/direction?destination=" + lng + "," + lat + "&mode=driving"));
            startActivity(il);
        } else {//未安装
            //market为路径，id为包名
            //显示手机上所有的market商店
            Toast.makeText(this, "您尚未安装百度地图", Toast.LENGTH_LONG).show();
            Uri uri = Uri.parse("market://details?id=com.baidu.BaiduMap");
            Intent intent = new Intent(Intent.ACTION_VIEW, uri);
            startActivity(intent);
        }
        window.dismiss();
    }

    //高德地图,起点就是定位点  startNaviGao
    // 终点是LatLng ll = new LatLng("你的纬度latitude","你的经度longitude");
    public void gaodeMap() {
        if (isAvilible(this, "com.autonavi.minimap")) {
            try{
            Intent  intent = Intent.getIntent("androidamap://navi?sourceApplication=慧医&poiname=我的目的地&lat="+lng+"&lon="+lat+"&dev=0");
               startActivity(intent);
            } catch (URISyntaxException e)
            {e.printStackTrace(); }
        }else{
            Toast.makeText(WebviewActivity.this, "您尚未安装高德地图", Toast.LENGTH_LONG).show();
            Uri uri = Uri.parse("market://details?id=com.autonavi.minimap");
            Intent intent = new Intent(Intent.ACTION_VIEW, uri);
            startActivity(intent);
        }
        window.dismiss();
    }

    public static boolean isAvilible(Context context, String packageName){
        //获取packagemanager
        final PackageManager packageManager = context.getPackageManager();
        //获取所有已安装程序的包信息
        List<PackageInfo> packageInfos = packageManager.getInstalledPackages(0);
        //用于存储所有已安装程序的包名
        List<String> packageNames = new ArrayList<String>();
        //从pinfo中将包名字逐一取出，压入pName list中
        if(packageInfos != null){
            for(int i = 0; i < packageInfos.size(); i++){
                String packName = packageInfos.get(i).packageName;
                packageNames.add(packName);
            }
        }
        //判断packageNames中是否有目标程序的包名，有TRUE，没有FALSE
        return packageNames.contains(packageName);
    }


    private void showConfirm(String mess){
        dialog = null;
        LayoutInflater inflater = getLayoutInflater();
        View view = inflater.inflate(R.layout.layout_popupt,null);
        TextView notto=(TextView)view.findViewById(R.id.zanbu);
        TextView upgradenow=(TextView)view.findViewById(R.id.xianzai);
        TextView message = (TextView)view.findViewById(R.id.message);
        message.setText(mess);
        upgradenow.setText("确定");
        //取消
        notto.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                setValue("confirm","0");
                dialog.dismiss();
            }
        });
        //确定
        upgradenow.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                setValue("confirm","1");
                dialog.dismiss();
            }
        });
        dialog=new Dialog(this, R.style.loadingDialogStyle);
        dialog.setContentView(view);
        dialog.show();
    }




    @Override
    protected void onResume() {
        super.onResume();
        try {
            if (webView != null) {
                resumeWeb();
            }
            else if (webView != null)
                webView.post(new Runnable() {
                    @Override
                    public void run() {
                       webView.loadUrl("javascript:_w9_resume()");

                    }
                });
        } catch(Exception e){
            e.printStackTrace();
        }

    }

    @Override
    protected void onSaveInstanceState(Bundle outState) {
        if (webView!=null) {
           // webView.saveState(outState);
        }
        super.onSaveInstanceState(outState);
    }

    private void setmyNoticeValue(final String method, final String tempData) {
        try {
            webView.post(new Runnable() {
                @Override
                public void run() {
                    webView.loadUrl("javascript:"+method+"(" + tempData + ")");
                    // webView.loadUrl("javascript:_w9_wcallback('" + tempData + "')");
                }
            });
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    public void onConfigurationChanged(Configuration newConfig) {
        try {
            super.onConfigurationChanged(newConfig);
            if (this.getResources().getConfiguration().orientation == Configuration.ORIENTATION_LANDSCAPE) {
                // land
            } else if (this.getResources().getConfiguration().orientation == Configuration.ORIENTATION_PORTRAIT) {
                // port
            }
        } catch (Exception ex) {
        }

    }

}
