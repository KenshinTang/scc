package com.yunlinker.scc;

import android.content.Intent;
import android.support.v4.view.PagerAdapter;
import android.support.v4.view.ViewPager;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;

import com.bumptech.glide.Glide;

import java.util.ArrayList;
import java.util.List;
import java.util.Timer;
import java.util.TimerTask;

public class SplashActivity extends AppCompatActivity {

    ViewPager vip;
    int[] imgs = new int[]{R.drawable.start1, R.drawable.start2, R.drawable.start3, R.drawable.start4};
    List<ImageView> listimgs;

    @Override
    protected void onCreate(Bundle arg0) {
        super.onCreate(arg0);
        setContentView(R.layout.activity_splash);

        vip = (ViewPager) findViewById(R.id.vip);
        listimgs = new ArrayList<>();
        for (int i = 0; i < imgs.length; i++) {
            ImageView imageView = new ImageView(this);
            imageView.setScaleType(ImageView.ScaleType.FIT_XY);//铺满屏幕
            Glide.with(this).load(imgs[i]).into(imageView);
            listimgs.add(imageView);
        }
        VipAdapter adapter = new VipAdapter();
        vip.setAdapter(adapter);
        vip.setOnPageChangeListener(new ViewPager.OnPageChangeListener() {
            @Override
            public void onPageScrolled(int position, float positionOffset, int positionOffsetPixels) {
                if(position+1>=listimgs.size()){
                    if(!pushHome) {
                        pushHome=true;
                        final Timer t = new Timer();
                        t.schedule(new TimerTask() {
                            @Override
                            public void run() {
                                SplashActivity.this.runOnUiThread(new Runnable() {
                                    @Override
                                    public void run() {
                                        t.cancel();
                                        startActivity(new Intent(SplashActivity.this, Main2Activity.class));
                                        finish();
                                    }
                                });
                            }
                        },500);
                    }
                }
            }

            @Override
            public void onPageSelected(int position) {

            }

            @Override
            public void onPageScrollStateChanged(int state) {

            }
        });
    }
    private boolean pushHome = false;

    class VipAdapter extends PagerAdapter {

        @Override
        public int getCount() {
            return listimgs.size();
        }

        @Override
        public boolean isViewFromObject(View view, Object object) {
            return view == object;
        }

        @Override
        public void destroyItem(ViewGroup container, int position, Object object) {
            container.removeView(listimgs.get(position));
        }

        @Override
        public Object instantiateItem(ViewGroup container, int position) {
            container.addView(listimgs.get(position));
            return listimgs.get(position);
        }
    }
}
