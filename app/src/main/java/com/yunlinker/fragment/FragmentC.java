package com.yunlinker.fragment;


import android.annotation.SuppressLint;
import android.app.Dialog;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.text.TextUtils;
import android.util.Base64;
import android.util.Log;
import android.view.Gravity;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.TextView;
import android.widget.Toast;

import com.umeng.socialize.ShareAction;
import com.umeng.socialize.UMShareListener;
import com.umeng.socialize.bean.SHARE_MEDIA;
import com.umeng.socialize.media.UMImage;
import com.umeng.socialize.media.UMWeb;
import com.yunlinker.auth.WebPermissionManager;
import com.yunlinker.baseclass.BaseFragment;
import com.yunlinker.map.Location;
import com.yunlinker.myApp;
import com.yunlinker.scc.Main2Activity;
import com.yunlinker.scc.R;
import com.yunlinker.scc.WebviewActivity;
import com.yunlinker.shell.ShellCallBack;
import com.yunlinker.shell.ShellWebView;
import com.yunlinker.shell.ThirdTool;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.HashMap;
import java.util.Map;
import java.util.Stack;

import static com.yunlinker.config.WebConfig.saveKey;


public class FragmentC extends BaseFragment{

    public static FragmentC newInstance() {

        Bundle bundle = new Bundle();

        FragmentC fragment = new FragmentC();
        fragment.setArguments(bundle);
        return fragment;
    }

    private Dialog dialog,logindialog;
    protected Map<String,Stack<String>> insCodeMap= new HashMap<String, Stack<String>>();

    private Boolean hasLoaded = false;
    public void setHasLoaded(Boolean hasLoaded) {
        this.hasLoaded = hasLoaded;
    }

    @Nullable
    @Override
    public View onCreateView(LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_c,null);
        webView = (WebView)view.findViewById(R.id.course);
        //registerObservers(true);
        return view;
    }



    @Override
    protected void initView() {
        init(webView);
        webView.loadUrl("file:///android_asset/tabPage2.html");
    }

    @Override
    protected void setUpView() {

    }
    @SuppressLint("NewApi")
    void init(WebView view) {
        shellWebView=new ShellWebView(mActivity,getActivity(),shellCallBack);
        view.getSettings().setTextZoom(100);
        view.addJavascriptInterface(shellWebView, "WeiLai");
        WebSettings setting = view.getSettings();
        setting.setJavaScriptEnabled(true);// 支持js
        setting.setJavaScriptCanOpenWindowsAutomatically(true);
        setting.setSupportMultipleWindows(true);
        setting.setAllowFileAccess(true);// 设置允许访问文件数据
        setting.setSupportMultipleWindows(true);// 设置允许开启多窗口
        setting.setDomStorageEnabled(true);//
        setting.setUseWideViewPort(true);
        setting.setLoadWithOverviewMode(true);
        setting.setDefaultTextEncodingName("utf-8");
        setting.setDomStorageEnabled(true);
        setting.setLoadsImagesAutomatically(true);  //支持自动加载图片
        setting.setAppCacheMaxSize(1024*1024*10);

        view.setWebViewClient(webViewClient);
        view.setWebChromeClient(webChromeClient);
        // WebView.setWebContentsDebuggingEnabled(true);
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
            view.getSettings().setJavaScriptEnabled(true);
            view.loadUrl(url);
            return true;
        }

        @Override
        public void onPageFinished(WebView view, String url) {
            setHasLoaded(true);
            view.getSettings().setJavaScriptEnabled(true);
            super.onPageFinished(view, url);
            if (myApp.firstStart) {
                Log.i("kenshin", "onPageFinished set startApp = 1");
                webView.loadUrl("javascript:_w9_wcallback('startApp',0)");
                Log.i("kenshin", "javascript:_w9_wcallback('startApp',0)");
//                webView.loadUrl("javascript:localStorage.setItem('startApp','1')");
//                Log.e("kenshin", "javascript:localStorage.setItem('startApp',1);");
//                webView.loadUrl("javascript:getPosition()");
                myApp.firstStart = false;
            }
            setmyNoticeValue("getMsg",ThirdTool.getInstance().sNotice+","+ThirdTool.getInstance().mNotice);
        }
    };

    private ShellCallBack shellCallBack = new ShellCallBack() {
        @Override
        public void loginOut() {

        }

        @Override
        public void close(String count) {

        }


        @Override
        public void gotop(String url) {

        }

        @Override
        public void storage(String key) {

        }

        @Override
        public void storageValue(String obj) {
            try{
                JSONObject jb = new JSONObject(obj);
                setInsCode("storageValue",jb.getString("code"));;
                SharedPreferences sp= getActivity().getSharedPreferences(saveKey, Context.MODE_APPEND);
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
        public void setbg(String bgs) {

        }

        @Override
        public void alert(String mess) {
            try {
                JSONObject jb = new JSONObject(mess);
                setInsCode("alert",jb.getString("code"));
                showAlert(jb.getString("mess"));
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }

        @Override
        public void confirm(String mess) {
            try {
                JSONObject jb = new JSONObject(mess);
                setInsCode("confirm",jb.getString("code"));
                showConfirm(jb.getString("mess"));
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }

        @Override
        public void message(String mess) {
            Toast toast = Toast.makeText(getActivity().getApplicationContext(), mess,
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

        }

        @Override
        public void mgWallet() {

        }

        @Override
        public void position(final String code) {
            //setInsCode("position",code);
            WebPermissionManager.getInstance(getActivity()).CheckPermission(WebPermissionManager.LocationPermissions, new WebPermissionManager.OnPermissionBack() {
                @Override
                public void success() {
                    Location.getInstance().position(getActivity(), webView,code);
                }

                @Override
                public void error() {
                    setValue("position", "{\"code\":0}");
                    Toast.makeText(getActivity().getApplicationContext(),"授权失败，请设置权限后重试",Toast.LENGTH_SHORT).show();
                }
            });
        }


        @Override
        public void goChat() {
            startActivity(new Intent(getActivity(), Main2Activity.class));
        }

        @Override
        public void refreshCurrentUser() {

        }

        @Override
        public void goShare() {

        }

        @Override
        public void shareUrl(String s) {
            JSONObject jb = null;
            try{
                jb = new JSONObject(s);
                setInsCode("shareUrl",jb.getString("code"));
            }catch(Exception e){}
            final JSONObject fjb = jb;
            WebPermissionManager.getInstance(getActivity()).CheckPermission(WebPermissionManager.StoragePermissions, new WebPermissionManager.OnPermissionBack() {
                @Override
                public void success() {
                    startShare(fjb);
                }

                @Override
                public void error() {
                    Toast.makeText(getActivity().getApplicationContext(), "获取权限失败，请检查权限后重试", Toast.LENGTH_SHORT).show();
                }
            });
        }

        @Override
        public void contactUser(String str) {

        }

        @Override
        public void goBackTo(String page) {

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

        }


        @Override
        public void nftMsgSwich(String state) {

        }

        @Override
        public void openUrlStr(String url) {

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

        @Override
        public void extLogin(String type) {

        }

        @Override
        public void jxtv() {

        }

        @Override
        public void navigation(String obj) {

        }

        @Override
        public void qiyu(String objStr) {

        }

        @Override
        public void saveImg(String obj) {

        }

        @Override
        public void copyText(String text) {

        }

        @Override
        public void scanf(String code) {

        }


        @Override
        public void registerPush(String obj) {

        }

        @Override
        public void setPush(String obj) {

        }

        @Override
        public void pay(String obj) {

        }

        @Override
        public void godismiss(String obj) {

        }

        @Override
        public void gologin(String url) {
            SharedPreferences sp = getActivity().getSharedPreferences(saveKey,Context.MODE_APPEND);
            SharedPreferences.Editor editor = sp.edit();
            editor.remove("token");
            editor.remove("customerId");
            editor.remove("userinfo");
            editor.commit();
            Intent intent = new Intent(getActivity(), WebviewActivity.class);
            intent.putExtra("url",url);
            startActivity(intent);
        }

        @Override
        public void gopage(String url) {

        }
    };


    public void resumeWeb() {
        if(hasLoaded)
            setValue("","resume");
    }

    public void setValue(final String method, String tempData) {
        if (!TextUtils.isEmpty(tempData)) {
            if (tempData.contains("'"))
                tempData = tempData.replaceAll("\'", "\\\\'");
            if (tempData.contains("\\\""))
                tempData = tempData.replaceAll("\\\\\"", "\\\\'");
        }
        final String resultString = tempData;
        webView.post(new Runnable() {
            @Override
            public void run() {
                if (TextUtils.isEmpty(method) || TextUtils.equals(method, "0")) {
                    webView.loadUrl("javascript:_w9_wcallback('" + resultString + "','0')");
                } else {
                    webView.loadUrl("javascript:_w9_wcallback('" + resultString + "','" + getInsCode(method) + "')");
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

    //设置code
    public void setInsCode(String method, String code) {
        if(!insCodeMap.containsKey(method)) {
            insCodeMap.put(method, new Stack<String>
                    ());
        }
        insCodeMap.get(method).push(code);
    }

    private void setmyNoticeValue(final String method, final String tempData) {
        try {
            webView.post(new Runnable() {
                @Override
                public void run() {
                    //webView.loadUrl("javascript:"+method+"(" + tempData + ")");
                    //webView.loadUrl("file:///android_asset/www/index.html");
                    webView.loadUrl("javascript:_w9_wcallback('" + tempData + "')");
                }
            });
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    public void onResume() {
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
        super.onResume();

    }

    private void showAlert(String mess){
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
        logindialog=new Dialog(getActivity(), R.style.loadingDialogStyle);
        logindialog.setContentView(view);
        logindialog.show();
    }

    private void showConfirm(String mess){
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
        dialog=new Dialog(getActivity(),R.style.loadingDialogStyle);
        dialog.setContentView(view);
        dialog.show();
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
            if(TextUtils.isEmpty(base64) && (TextUtils.isEmpty(title) || TextUtils.isEmpty(pic) || TextUtils.isEmpty(url) || TextUtils.isEmpty(desc))) {
                Toast.makeText(getActivity().getApplicationContext(), "分享异常，请稍后重试", Toast.LENGTH_SHORT).show();
                return;
            }
            UMImage umimg = null;
            UMWeb web = null;
            if(base64!=null) {
                byte[] bt = Base64.decode(base64, Base64.DEFAULT);
                umimg = new UMImage(getActivity(), bt);
            } else {
                web = new UMWeb(url);
                web.setTitle(title);//标题
                UMImage thumb =  new UMImage(getActivity(), pic);
                web.setThumb(thumb);  //缩略图
                web.setDescription(desc);//描述
            }
            int platform = 0;
            try {
                platform = Integer.parseInt(jb.getString("platform"));
            } catch (JSONException e) {
                e.printStackTrace();
            }
            ShareAction sa = new ShareAction(getActivity());
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



}
