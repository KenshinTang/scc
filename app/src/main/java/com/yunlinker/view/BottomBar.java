package com.yunlinker.view;/**
 * Created by dell on 2017/4/6/0006.
 */

import android.content.Context;
import android.content.SharedPreferences;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.FrameLayout;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;

import com.yunlinker.scc.R;
import com.yunlinker.scc.WebviewActivity;

import static com.yunlinker.config.WebConfig.saveKey;


/**
 * created by LiChengalin at 2017/4/6/0006
 */
public class BottomBar extends LinearLayout {

    private Context mContext;
    private String val;

    private FrameLayout mFirst_bottom, mSecond_bottom, mThird_bottom, mFouth_bottom, mCenter_bottom;
    public ImageView home,chang,ke,wo,ditu;
    public TextView home_text,bang_text,Qrq_text,tui_text,mine_text;
    private OnBottonbarClick mOnBottonbarClick;
    public BottomBar(Context context) {
        super(context);
        init(context);
    }

    public BottomBar(Context context, AttributeSet attrs) {
        super(context, attrs);
        init(context);

    }

    private void init(Context context) {
        mContext = context;
        LayoutInflater.from(mContext).inflate(R.layout.layout_bottom, this, true);
        //获取控件id
        initId();
        onBottomBarClick();
        optioninit();
    }

    private void optioninit(){
        SaveOptionData("daohang","3");
    }

    public void SaveOptionData(String key,String value){
        SharedPreferences spf= mContext.getSharedPreferences(saveKey,Context.MODE_APPEND);
        SharedPreferences.Editor editor=spf.edit();
        editor.putString(key,value);
        editor.commit();
    }

    private String GetOptionData(String key){
        SharedPreferences spf= mContext.getSharedPreferences(saveKey,Context.MODE_APPEND);
        return spf.getString(key,"");
    }

    private void ImageSetImg(){
        if (GetOptionData("daohang").equals("1")){
            home.setImageResource(R.mipmap.home_h);
            chang.setImageResource(R.mipmap.linkmap);
            ditu.setImageResource(R.mipmap.hbao);
            ke.setImageResource(R.mipmap.change);
            home_text.setTextColor(getResources().getColor(R.color.zitiyanse));
            bang_text.setTextColor(getResources().getColor(R.color.huise));
            Qrq_text.setTextColor(getResources().getColor(R.color.huise));
            tui_text.setTextColor(getResources().getColor(R.color.huise));
        }
        if (GetOptionData("daohang").equals("2")){
            home.setImageResource(R.mipmap.home);
            chang.setImageResource(R.mipmap.linkmap_h);
            ditu.setImageResource(R.mipmap.hbao);
            ke.setImageResource(R.mipmap.change);
            home_text.setTextColor(getResources().getColor(R.color.huise));
            bang_text.setTextColor(getResources().getColor(R.color.zitiyanse));
            Qrq_text.setTextColor(getResources().getColor(R.color.huise));
            tui_text.setTextColor(getResources().getColor(R.color.huise));
        }
        if (GetOptionData("daohang").equals("3")){
            home.setImageResource(R.mipmap.home);
            chang.setImageResource(R.mipmap.linkmap);
            ditu.setImageResource(R.mipmap.hbao_h);
            ke.setImageResource(R.mipmap.change);
            home_text.setTextColor(getResources().getColor(R.color.huise));
            bang_text.setTextColor(getResources().getColor(R.color.huise));
            Qrq_text.setTextColor(getResources().getColor(R.color.zitiyanse));
            tui_text.setTextColor(getResources().getColor(R.color.huise));
        }
        if (GetOptionData("daohang").equals("4")){
            home.setImageResource(R.mipmap.home);
            chang.setImageResource(R.mipmap.linkmap);
            ditu.setImageResource(R.mipmap.hbao);
            ke.setImageResource(R.mipmap.change_h);
            home_text.setTextColor(getResources().getColor(R.color.huise));
            bang_text.setTextColor(getResources().getColor(R.color.huise));
            Qrq_text.setTextColor(getResources().getColor(R.color.huise));
            tui_text.setTextColor(getResources().getColor(R.color.zitiyanse));
        }

    }


    private void initId() {
        mFirst_bottom = (FrameLayout) findViewById(R.id.first);
        mSecond_bottom = (FrameLayout) findViewById(R.id.second);
        mThird_bottom = (FrameLayout) findViewById(R.id.third);
        mFouth_bottom = (FrameLayout) findViewById(R.id.fouth);
        mCenter_bottom = (FrameLayout) findViewById(R.id.center);
        home = (ImageView)findViewById(R.id.tab_home_click);
        chang=(ImageView)findViewById(R.id.tab_bang);
        ke=(ImageView)findViewById(R.id.kecheng);
        wo=(ImageView)findViewById(R.id.my_wo);
        ditu =(ImageView)findViewById(R.id.center_img);
        home_text = (TextView)findViewById(R.id.tab_home_text);
        bang_text = (TextView)findViewById(R.id.tab_bang_text);
        Qrq_text = (TextView)findViewById(R.id.tab_Qrq_text);
        tui_text = (TextView)findViewById(R.id.tab_tui_text);
        mine_text = (TextView)findViewById(R.id.tab_mine_text);
    }

    /**
     * 底部按钮点击监听器
     */
    private void onBottomBarClick() {
        final SharedPreferences sp = mContext.getSharedPreferences(saveKey, Context.MODE_APPEND);
        //首页
        mFirst_bottom.setOnClickListener(new OnClickListener() {
            @Override
            public void onClick(View v) {
                if (mOnBottonbarClick != null) {
                    SaveOptionData("daohang","1");
                    home.setImageResource(R.mipmap.home_h);
                    chang.setImageResource(R.mipmap.linkmap);
                    ditu.setImageResource(R.mipmap.hbao);
                    wo.setImageResource(R.mipmap.mine);
                    ke.setImageResource(R.mipmap.change);
                    home_text.setTextColor(getResources().getColor(R.color.zitiyanse));
                    bang_text.setTextColor(getResources().getColor(R.color.huise));
                    Qrq_text.setTextColor(getResources().getColor(R.color.huise));
                    tui_text.setTextColor(getResources().getColor(R.color.huise));
                    mine_text.setTextColor(getResources().getColor(R.color.huise));
                    mOnBottonbarClick.onFirstClick();
                }
            }
        });
        //店铺
        mSecond_bottom.setOnClickListener(new OnClickListener() {
            @Override
            public void onClick(View v) {
                if (mOnBottonbarClick != null) {
                        SaveOptionData("daohang", "2");
                        home.setImageResource(R.mipmap.home);
                        chang.setImageResource(R.mipmap.linkmap_h);
                        ditu.setImageResource(R.mipmap.hbao);
                        wo.setImageResource(R.mipmap.mine);
                        ke.setImageResource(R.mipmap.change);
                    home_text.setTextColor(getResources().getColor(R.color.huise));
                    bang_text.setTextColor(getResources().getColor(R.color.zitiyanse));
                    Qrq_text.setTextColor(getResources().getColor(R.color.huise));
                    tui_text.setTextColor(getResources().getColor(R.color.huise));
                    mine_text.setTextColor(getResources().getColor(R.color.huise));
                        mOnBottonbarClick.onSecondClick();

                }
            }
        });
        //商城
        mThird_bottom.setOnClickListener(new OnClickListener() {
            @Override
            public void onClick(View v) {
                if (mOnBottonbarClick != null) {
                    SaveOptionData("daohang","4");
                    home.setImageResource(R.mipmap.home);
                    chang.setImageResource(R.mipmap.linkmap);
                    ditu.setImageResource(R.mipmap.hbao);
                    wo.setImageResource(R.mipmap.mine);
                    ke.setImageResource(R.mipmap.change_h);
                    home_text.setTextColor(getResources().getColor(R.color.huise));
                    bang_text.setTextColor(getResources().getColor(R.color.huise));
                    Qrq_text.setTextColor(getResources().getColor(R.color.huise));
                    tui_text.setTextColor(getResources().getColor(R.color.zitiyanse));
                    mine_text.setTextColor(getResources().getColor(R.color.huise));
                    mOnBottonbarClick.onThirdClick();
                }
            }

        });
        //我的
        mFouth_bottom.setOnClickListener(new OnClickListener() {
            @Override
            public void onClick(View v) {
                if (mOnBottonbarClick != null) {
                    if(sp.getString("userinfo","").equals("")||sp.getString("token","").equals("")){
                        ImageSetImg();
                        wo.setImageResource(R.mipmap.mine);
                        mine_text.setTextColor(getResources().getColor(R.color.huise));
                        mOnBottonbarClick.onFouthClick();
                    }else {
                        SaveOptionData("daohang","5");
                        home.setImageResource(R.mipmap.home);
                        chang.setImageResource(R.mipmap.linkmap);
                        ditu.setImageResource(R.mipmap.hbao);
                        wo.setImageResource(R.mipmap.mine_h);
                        ke.setImageResource(R.mipmap.change);
                        home_text.setTextColor(getResources().getColor(R.color.huise));
                        bang_text.setTextColor(getResources().getColor(R.color.huise));
                        Qrq_text.setTextColor(getResources().getColor(R.color.huise));
                        tui_text.setTextColor(getResources().getColor(R.color.huise));
                        mine_text.setTextColor(getResources().getColor(R.color.zitiyanse));
                        mOnBottonbarClick.onFouthClick();
                    }


                }
            }
        });
        //红包
        mCenter_bottom.setOnClickListener(new OnClickListener() {
            @Override
            public void onClick(View v) {
                if (mOnBottonbarClick != null) {
                    SaveOptionData("daohang","3");
                    home.setImageResource(R.mipmap.home);
                    chang.setImageResource(R.mipmap.linkmap);
                    ditu.setImageResource(R.mipmap.hbao_h);
                    wo.setImageResource(R.mipmap.mine);
                    ke.setImageResource(R.mipmap.change);
                    home_text.setTextColor(getResources().getColor(R.color.huise));
                    bang_text.setTextColor(getResources().getColor(R.color.huise));
                    Qrq_text.setTextColor(getResources().getColor(R.color.zitiyanse));
                    tui_text.setTextColor(getResources().getColor(R.color.huise));
                    mine_text.setTextColor(getResources().getColor(R.color.huise));
                    mOnBottonbarClick.onCenterClick();
                }
            }
        });
    }
    public void setOnBottombarOnclick(OnBottonbarClick onBottonbarClick) {

        mOnBottonbarClick = onBottonbarClick;
    }




    public interface OnBottonbarClick {
        void onFirstClick();

        void onSecondClick();

        void onThirdClick();

        void onFouthClick();

        void onCenterClick();
    }
}
