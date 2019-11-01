package com.yunlinker.scc;

import android.app.Dialog;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.location.LocationManager;
import android.os.Bundle;
import android.os.Handler;
import android.os.Message;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentTransaction;
import android.support.v4.view.ViewPager;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.KeyEvent;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.ImageView;
import android.widget.RelativeLayout;
import android.widget.Switch;
import android.widget.TextView;
import android.widget.Toast;

import com.baidu.mapapi.SDKInitializer;
import com.hjq.permissions.OnPermission;
import com.hjq.permissions.Permission;
import com.hjq.permissions.XXPermissions;
import com.yunlinker.adapter.TabFragmentPagerAdapter;
import com.yunlinker.fragment.FragmentA;
import com.yunlinker.fragment.FragmentB;
import com.yunlinker.fragment.FragmentC;
import com.yunlinker.fragment.FragmentD;
import com.yunlinker.fragment.FragmentE;
import com.yunlinker.ulit.NoScrollViewPager;
import com.yunlinker.view.BottomBar;

import java.util.ArrayList;
import java.util.List;

import static com.yunlinker.config.WebConfig.saveKey;


public class Main2Activity extends AppCompatActivity  {
    private Dialog dialog;
    public final String URle="ewm.html";
    private String AB,DB;
   // private  CustomViewPager viewPager;
    private NoScrollViewPager viewPager;
    private static  final  String URL="login.html";
    private long exitTime = 0;
    private RelativeLayout home,chuangguan,kecheng,mine,erweima;
    private ImageView homei,chuangguangi,kechengi,minei;
    private FragmentA mFragmentA;
    private FragmentB mFragmentB;
    private FragmentC mFragmentC;
    private FragmentD mFragmentD;
    private FragmentE mFragmentE;
    private TabFragmentPagerAdapter adapter;
    private List<Fragment> fragments;
    private BottomBar mBottomBar;
    private ImageView mCenterImage;
    boolean flag = false;

    private Fragment mFragment;//当前显示的Fragment
    public static final int openNewDetali=100;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        //FullScreen.fullScreen(this);
        SDKInitializer.initialize(this);
        setContentView(R.layout.activity_main2);
      //  viewPager=(NoScrollViewPager) findViewById(R.id.vpager);
       // viewPager.setScanScroll(false);
       // viewPager.setNoScroll(false);

         initView();
        initViewPager();


        LocationManager locationManager
                = (LocationManager) getSystemService(Context.LOCATION_SERVICE);
        // 通过GPS卫星定位
        boolean gps = locationManager.isProviderEnabled(LocationManager.GPS_PROVIDER);
        // GPS辅助定位,AGPS,借助网络
        boolean network = locationManager.isProviderEnabled(LocationManager.NETWORK_PROVIDER);
        if (gps || network) {
            //Toast.makeText(this, "有权限", Toast.LENGTH_SHORT).show();
            flag = true;
        }else {
            //Toast.makeText(this, "没有权限", Toast.LENGTH_SHORT).show();
            showdialog1();
        }


    }


    private void initViewPager() {
        mFragmentB = new FragmentB();
        mFragmentA = new FragmentA();
        mFragmentC = new FragmentC();
        mFragmentD = new FragmentD();
        mFragmentE = new FragmentE();
        FragmentTransaction transaction= getSupportFragmentManager().beginTransaction();
        transaction.add(R.id.framLayout, mFragmentB)
                .commit();
        mFragment = mFragmentB;

        Intent intent = getIntent();
        String ad = intent.getStringExtra("Starag");
        if (ad!=null&&ad.equals("1")) {
            commitFragment(mFragment, mFragmentA, new Bundle());
            mFragment = mFragmentA;
            mBottomBar.home.setImageResource(R.mipmap.home_h);
            mBottomBar.chang.setImageResource(R.mipmap.linkmap);
            mBottomBar.ditu.setImageResource(R.mipmap.hbao);
            mBottomBar.wo.setImageResource(R.mipmap.mine);
            mBottomBar.ke.setImageResource(R.mipmap.change);
            mBottomBar.home_text.setTextColor(getResources().getColor(R.color.zitiyanse));
            mBottomBar.bang_text.setTextColor(getResources().getColor(R.color.huise));
            mBottomBar.Qrq_text.setTextColor(getResources().getColor(R.color.huise));
            mBottomBar.tui_text.setTextColor(getResources().getColor(R.color.huise));
            mBottomBar.mine_text.setTextColor(getResources().getColor(R.color.huise));
            mBottomBar.SaveOptionData("daohang","1");
        }else if(ad!=null&&ad.equals("2")){
            commitFragment(mFragment,mFragmentC,new Bundle());
            mFragment=mFragmentC;
            mBottomBar.home.setImageResource(R.mipmap.home);
            mBottomBar.chang.setImageResource(R.mipmap.linkmap_h);
            mBottomBar.ditu.setImageResource(R.mipmap.hbao);
            mBottomBar.wo.setImageResource(R.mipmap.mine);
            mBottomBar.ke.setImageResource(R.mipmap.change);
            mBottomBar.home_text.setTextColor(getResources().getColor(R.color.huise));
            mBottomBar.bang_text.setTextColor(getResources().getColor(R.color.zitiyanse));
            mBottomBar.Qrq_text.setTextColor(getResources().getColor(R.color.huise));
            mBottomBar.tui_text.setTextColor(getResources().getColor(R.color.huise));
            mBottomBar.mine_text.setTextColor(getResources().getColor(R.color.huise));
            mBottomBar.SaveOptionData("daohang","2");
        }else if (ad!=null&&ad.equals("3")){
            commitFragment(mFragment,mFragmentB,new Bundle());
            mFragment=mFragmentB;
            mBottomBar.home.setImageResource(R.mipmap.home);
            mBottomBar.chang.setImageResource(R.mipmap.linkmap);
            mBottomBar.ditu.setImageResource(R.mipmap.hbao_h);
            mBottomBar.wo.setImageResource(R.mipmap.mine);
            mBottomBar.ke.setImageResource(R.mipmap.change);
            mBottomBar.home_text.setTextColor(getResources().getColor(R.color.huise));
            mBottomBar.bang_text.setTextColor(getResources().getColor(R.color.huise));
            mBottomBar.Qrq_text.setTextColor(getResources().getColor(R.color.zitiyanse));
            mBottomBar.tui_text.setTextColor(getResources().getColor(R.color.huise));
            mBottomBar.mine_text.setTextColor(getResources().getColor(R.color.huise));
            mBottomBar.SaveOptionData("daohang","3");
        }else if (ad!=null&&ad.equals("4")){
            commitFragment(mFragment,mFragmentD,new Bundle());
            mFragment=mFragmentD;
            mBottomBar.home.setImageResource(R.mipmap.home);
            mBottomBar.chang.setImageResource(R.mipmap.linkmap);
            mBottomBar.ditu.setImageResource(R.mipmap.hbao);
            mBottomBar.wo.setImageResource(R.mipmap.mine);
            mBottomBar.ke.setImageResource(R.mipmap.change_h);
            mBottomBar.home_text.setTextColor(getResources().getColor(R.color.huise));
            mBottomBar.bang_text.setTextColor(getResources().getColor(R.color.huise));
            mBottomBar.Qrq_text.setTextColor(getResources().getColor(R.color.huise));
            mBottomBar.tui_text.setTextColor(getResources().getColor(R.color.zitiyanse));
            mBottomBar.mine_text.setTextColor(getResources().getColor(R.color.huise));
            mBottomBar.SaveOptionData("daohang","4");
        }else if (ad!=null&&ad.equals("5")){
            commitFragment(mFragment,mFragmentE,new Bundle());
            mFragment=mFragmentE;
            mBottomBar.home.setImageResource(R.mipmap.home);
            mBottomBar.chang.setImageResource(R.mipmap.linkmap);
            mBottomBar.ditu.setImageResource(R.mipmap.hbao);
            mBottomBar.wo.setImageResource(R.mipmap.mine_h);
            mBottomBar.ke.setImageResource(R.mipmap.change);
            mBottomBar.home_text.setTextColor(getResources().getColor(R.color.huise));
            mBottomBar.bang_text.setTextColor(getResources().getColor(R.color.huise));
            mBottomBar.Qrq_text.setTextColor(getResources().getColor(R.color.huise));
            mBottomBar.tui_text.setTextColor(getResources().getColor(R.color.huise));
            mBottomBar.mine_text.setTextColor(getResources().getColor(R.color.zitiyanse));
        }
    }

    public boolean islogin(){

        return false;
    }

    private void initView() {

        mBottomBar = (BottomBar) findViewById(R.id.bottomBar);

        final SharedPreferences sp = getSharedPreferences(saveKey, Context.MODE_APPEND);
        mBottomBar.setOnBottombarOnclick(new BottomBar.OnBottonbarClick() {
            @Override
            public void onFirstClick() {
                //首页
                commitFragment(mFragment,mFragmentA,new Bundle());
                mFragment=mFragmentA;

                Log.e("1111", "onFirstClick: "+1111111);
            }

            @Override
            public void onSecondClick() {
                //店铺
                commitFragment(mFragment,mFragmentC,new Bundle());
                mFragment=mFragmentC;
                Log.e("2222", "onFirstClick: "+2222222);
            }

            @Override
            public void onThirdClick() {

                commitFragment(mFragment,mFragmentD,new Bundle());
                mFragment=mFragmentD;

                Log.e("33333", "onFirstClick: "+33333333);

            }

            @Override
            public void onFouthClick() {
                //商场
                if (sp.getString("userinfo","").equals("")||sp.getString("token","").equals("")){
                    showdialog();
                }else {
                    commitFragment(mFragment,mFragmentE,new Bundle());
                    mFragment=mFragmentE;
                    Log.e("444444", "onFirstClick: "+4444444);
                }


            }

            @Override
            public void onCenterClick() {
                switchFragment(mFragmentB);
                commitFragment(mFragment,mFragmentB,new Bundle());
                mFragment=mFragmentB;

                Log.e("555555", "onFirstClick: "+555555);
            }

        });

    }


    private void switchFragment(Fragment fragment) {
        //判断当前显示的Fragment是不是切换的Fragment
        if(mFragment != fragment) {
            //判断切换的Fragment是否已经添加过
            if (!fragment.isAdded()) {
                //如果没有，则先把当前的Fragment隐藏，把切换的Fragment添加上
                getSupportFragmentManager().beginTransaction().hide(mFragment)
                        .add(R.id.framLayout,fragment).commit();
            } else {
                //如果已经添加过，则先把当前的Fragment隐藏，把切换的Fragment显示出来
                getSupportFragmentManager().beginTransaction().hide(mFragment).show(fragment).commit();
            }
            mFragment = fragment;
        }
    }



    Fragment mCurrentFragment;
    android.support.v4.app.FragmentManager fm;
    FragmentTransaction ft;
    private void commitFragment(Fragment fragmentFrom, Fragment fragmentTo, Bundle bundle) {
        mCurrentFragment = fragmentTo;
        if (bundle != null) {
            if (null==fragmentTo.getArguments())
                fragmentTo.setArguments(bundle);
        }

        fm = getSupportFragmentManager();
        ft = fm.beginTransaction();
        if (fragmentFrom == null) {
            ft.remove(fragmentTo).commit();
            ft=fm.beginTransaction();
            ft.add(R.id.framLayout, fragmentTo, fragmentTo.getClass().getName());
            ft.addToBackStack(null);
            ft.commit();
            return;
        }
        if (fragmentTo.isAdded()) {
            ft.hide(fragmentFrom).show(fragmentTo).commit();
            fm.executePendingTransactions();
        } else {
            ft.remove(fragmentTo).commit();
            ft=fm.beginTransaction();
            ft.hide(fragmentFrom).add(R.id.framLayout, fragmentTo, fragmentTo.getClass().getName());
            ft.addToBackStack(null);
            ft.commit();
        }
    }




    public void showdialog(){
        LayoutInflater inflater = getLayoutInflater();
        View view = inflater.inflate(R.layout.layout_popupt,null);
        TextView notto=(TextView)view.findViewById(R.id.zanbu);
        TextView upgradenow=(TextView)view.findViewById(R.id.xianzai);
        //取消
        notto.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                dialog.dismiss();
            }
        });
        //确定
        upgradenow.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(Main2Activity.this,WebviewActivity.class);
                intent.putExtra("url",URL);
                startActivity(intent);
                dialog.dismiss();
                finish();

            }
        });
        dialog=new Dialog(this,R.style.loadingDialogStyle);
        dialog.setContentView(view);
        dialog.show();

    }





    @Override
    public void onBackPressed() {
        // TODO 自动生成的方法存根
        if(System.currentTimeMillis() - exitTime > 2000){
            Toast.makeText(this,"再按一次返回退出",Toast.LENGTH_SHORT).show();
            exitTime = System.currentTimeMillis();
        } else{
            this.finish();
        }
    }




    @Override
    protected void onResume() {
        SharedPreferences sp = getSharedPreferences(saveKey,Context.MODE_APPEND);
         AB=sp.getString("userinfo","");
         DB =sp.getString("token","");

        super.onResume();
    }

    public void showdialog1(){
        LayoutInflater inflater = getLayoutInflater();
        View view = inflater.inflate(R.layout.layout_popuppt,null);
        TextView upgradenow=(TextView)view.findViewById(R.id.quedin);
        //确定
        upgradenow.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                dialog.dismiss();
            }
        });
        dialog=new Dialog(this,R.style.loadingDialogStyle);
        dialog.setContentView(view);
        dialog.show();
    }



}
