package com.yunlinker.baseclass;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.Intent;
import android.content.res.Configuration;
import android.content.res.Resources;
import android.graphics.Rect;
import android.os.Build;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.text.TextUtils;
import android.view.KeyEvent;
import android.view.ViewTreeObserver;
import android.view.Window;
import android.view.WindowManager;
import android.webkit.WebSettings;
import android.widget.ImageView;
import android.widget.RelativeLayout;

import com.umeng.analytics.MobclickAgent;
import com.umeng.socialize.UMShareAPI;
import com.yunlinker.auth.WebPermissionManager;

import com.yunlinker.scc.JSInspect;

import static com.yunlinker.config.WebConfig.AssestRoot;
import static com.yunlinker.config.WebConfig.UMSHARE_CALLBACK_CODE;


/**
 * Created by lemon on 2017/7/26.
 */

public class BaseActivity extends Activity {

    public String loadUrl;

    protected BaseWebView mwebView;
    private ImageView splash;
    public BaseWebView getWebView() {
        return mwebView;
    }

    public RelativeLayout rootlay;


    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        configAcView();
        addWebView();
    }

    @Override
    protected void onResume() {
        super.onResume();
        MobclickAgent.onResume(this);

        if(mwebView!=null)
            mwebView.resumeWeb();

    }


    public AlertDialog dialog;
    @Override
    protected void onPause() {
        super.onPause();
        if(dialog!=null) dialog.dismiss();
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        MobclickAgent.onPause(this);
    }

    @Override
    public Resources getResources() {
        Resources res = super.getResources();
        Configuration config=new Configuration();
        config.setToDefaults();
        res.updateConfiguration(config,res.getDisplayMetrics());
        return res;
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode,  Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if(requestCode==UMSHARE_CALLBACK_CODE) {
            UMShareAPI.get(this).onActivityResult(requestCode, resultCode, data);
        } else {
            //ActivityResult.getInstance().resultBack(BaseActivity.this, requestCode, resultCode, data);
        }
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
        WebPermissionManager.getInstance(BaseActivity.this).authBack(requestCode, permissions, grantResults);
    }

    @Override
    public void onBackPressed() {
        mwebView.setValue("0", "back");
    }
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



    //配置activity视图
    private void configAcView() {
        requestWindowFeature(Window.FEATURE_NO_TITLE);
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {
            // Translucent status bar
            getWindow().addFlags(WindowManager.LayoutParams.FLAG_TRANSLUCENT_STATUS);
        }
        rootlay = new RelativeLayout(this);
        setContentView(rootlay);
    }


    //添加webview
    private JSInspect inp = null;
    //获取inspect对象
    public JSInspect jsInp() {
        return inp;
    }
    //添加视图
    protected void addWebView() {

        mwebView = new BaseWebView(this);
        RelativeLayout.LayoutParams webLayoutParams = new RelativeLayout.LayoutParams(RelativeLayout.LayoutParams.MATCH_PARENT, RelativeLayout.LayoutParams.MATCH_PARENT);
        mwebView.setLayoutParams(webLayoutParams);
        rootlay.addView(mwebView);

        mwebView.setHorizontalScrollBarEnabled(false);//水平不显示
        mwebView.setVerticalScrollBarEnabled(false); //垂直不显示
        inp = new JSInspect(mwebView, BaseActivity.this);

        mwebView.addJavascriptInterface(inp, "WeiLai");
        mwebView.setWebViewClient(new BaseClient(mwebView, BaseActivity.this));

//        if(BaseTools.isApkInDebug(this))
            mwebView.setWebContentsDebuggingEnabled(true);

        WebSettings setting = mwebView.getSettings();
        setting.setJavaScriptEnabled(true);//支持js
        setting.setDefaultTextEncodingName("utf-8");
        setting.setDomStorageEnabled(true);
        setting.setAllowFileAccess(true);
        setting.setAllowContentAccess(true);
        setting.setAllowFileAccessFromFileURLs(true);
        setting.setCacheMode(WebSettings.LOAD_DEFAULT);


        loadUrl = getIntent().getStringExtra("sendUrl");
        if (!TextUtils.isEmpty(loadUrl)) {
            if(!loadUrl.startsWith("http") || !loadUrl.startsWith("file"))
                loadUrl = AssestRoot+loadUrl;
            mwebView.loadUrl(loadUrl);
        } else {
            //首页
            mwebView.loadUrl(AssestRoot+"index.html");
        }

        setKeyBoard();
    }

    private int screenHeight=0;
    private void setKeyBoard() {
        //---------------安卓键盘处理-----------------
        mwebView.getViewTreeObserver().addOnGlobalLayoutListener(new ViewTreeObserver.OnGlobalLayoutListener() {
            @Override
            public void onGlobalLayout() {
                Rect r = new Rect();
                mwebView.getWindowVisibleDisplayFrame(r);
                final int visibleHeight = r.height();
                if(screenHeight==0) {
                    screenHeight = visibleHeight;
                } else {
                    if(visibleHeight>100 && screenHeight!=visibleHeight) {
                        //有可能为打开键盘
                        mwebView.post(new Runnable() {
                            @Override
                            public void run() {
                                float ratio = (screenHeight-visibleHeight)/(float)screenHeight;
                                mwebView.loadUrl("javascript:window.keyBoardEvent&&keyBoardEvent(1,"+ratio+");");
                            }
                        });
                    } else {
                        //有可能为关闭键盘
                        mwebView.post(new Runnable() {
                            @Override
                            public void run() {
                                mwebView.loadUrl("javascript:window.keyBoardEvent&&keyBoardEvent(0);");
                            }
                        });
                    }
                }
            }
        });
    }


}
