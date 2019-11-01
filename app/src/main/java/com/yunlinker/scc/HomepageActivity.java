package com.yunlinker.scc;

import android.app.Dialog;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Handler;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.view.WindowManager;
import android.widget.TextView;
import android.widget.Toast;

import com.hjq.permissions.OnPermission;
import com.hjq.permissions.Permission;
import com.hjq.permissions.XXPermissions;

import java.util.List;
import java.util.Timer;
import java.util.TimerTask;

public class HomepageActivity extends AppCompatActivity implements View.OnClickListener {
    private int recLen = 3;//跳过倒计时提示5秒
    private TextView tv;
    Timer timer = new Timer();
    private Handler handler;
    private Runnable runnable;

    private Dialog dialog;

    public  static  final String SHARE_APP_TAG="SHARE_APP_TAG";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_homepage);
        int flag= WindowManager.LayoutParams.FLAG_FULLSCREEN;
        //设置当前窗体为全屏显示
        getWindow().setFlags(flag, flag);
        initViews();
        timer.schedule(task, 1000, 1000);//等待时间一秒，停顿时间一秒
        /**
         * 正常情况下不点击跳过
         */
        handler = new Handler();
        handler.postDelayed(runnable = new Runnable() {
            @Override
            public void run() {
                SharedPreferences setting = getSharedPreferences(SHARE_APP_TAG, 0);
                Boolean user_first = setting.getBoolean("FIRST",true);
                if(user_first){//第一次
                    setting.edit().putBoolean("FIRST", false).commit();
                    //Toast.makeText(HomepageActivity.this, "第一次", Toast.LENGTH_LONG).show();
                    Intent intent = new Intent(HomepageActivity.this, SplashActivity.class);
                    startActivity(intent);
                    finish();
                }else{
                   // Toast.makeText(HomepageActivity.this, "不是第一次", Toast.LENGTH_LONG).show();
                    //toMainActivity();
                    //从闪屏界面跳转到首界面
                    Intent intent = new Intent(HomepageActivity.this, Main2Activity.class);
                    startActivity(intent);
                    finish();

                }

            }
        }, 2000);//延迟3S后发送handler信息



        XXPermissions.with(this)
                //.constantRequest() //可设置被拒绝后继续申请，直到用户授权或者永久拒绝
                //.permission(Permission.SYSTEM_ALERT_WINDOW, Permission.REQUEST_INSTALL_PACKAGES) //支持请求6.0悬浮窗权限8.0请求安装权限
                .permission(Permission.Group.LOCATION) //不指定权限则自动获取清单中的危险权限
                .request(new OnPermission() {

                    @Override
                    public void hasPermission(List<String> granted, boolean isAll) {
                        if (isAll) {
                          //  Toast.makeText(HomepageActivity.this, "获取权限成功", Toast.LENGTH_SHORT).show();
                        }else {
                         //   Toast.makeText(HomepageActivity.this, "获取权限成功，部分权限未正常授予", Toast.LENGTH_SHORT).show();
                        }
                    }

                    @Override
                    public void noPermission(List<String> denied, boolean quick) {
                        if(quick) {
                          //  Toast.makeText(HomepageActivity.this, "被永久拒绝授权，请手动授予权限", Toast.LENGTH_SHORT).show();
                            //如果是被永久拒绝就跳转到应用权限系统设置页面
                            XXPermissions.gotoPermissionSettings(HomepageActivity.this);
                        }else {
                          //  Toast.makeText(HomepageActivity.this, "获取权限失败", Toast.LENGTH_SHORT).show();
                        }
                    }
                });

    }
    private void initViews() {
        tv =(TextView) findViewById(R.id.tv);//跳过
        tv.setOnClickListener(this);//跳过监听

    }
    TimerTask task = new TimerTask() {
        @Override
        public void run() {
            runOnUiThread(new Runnable() { // UI thread
                @Override
                public void run() {
                    recLen--;
                    tv.setText("跳过" +"("+recLen+"s"+")");
                    if (recLen < 0) {
                        timer.cancel();
                        tv.setVisibility(View.GONE);//倒计时到0隐藏字体
                    }
                }
            });
        }
    };

    @Override
    public void onClick(View v) {
        switch (v.getId()) {
            case R.id.tv:
                //从闪屏界面跳转到首界面
                Intent intent = new Intent(HomepageActivity.this, Main2Activity.class);
                startActivity(intent);
                finish();
                if (runnable != null) {
                    handler.removeCallbacks(runnable);
                }
                break;
            default:
                break;
        }
    }

//    @Override
//    protected void onResume() {
//        super.onResume();
//    }



}
