package com.yunlinker.scc;

import android.app.Dialog;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.os.Handler;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.view.WindowManager;
import android.widget.TextView;

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
