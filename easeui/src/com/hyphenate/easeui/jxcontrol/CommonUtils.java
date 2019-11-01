package com.hyphenate.easeui.jxcontrol;

import android.content.Context;
import android.text.TextPaint;
import android.text.TextUtils;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import com.hyphenate.easeui.jxcontrol.model.Constant;

import java.text.SimpleDateFormat;

/**
 * Created by Administrator on 2017/3/31.
 */

public class CommonUtils {
    public static int dp2px(Context context, float dp) {
        final float scale = context.getResources().getDisplayMetrics().density;
        return (int) (dp * scale + 0.5f);
    }

    public static int px2dp(Context context, float px) {
        final float scale = context.getResources().getDisplayMetrics().density;
        return (int) (px / scale + 0.5f);
    }
    public static void setImageLayout(Context context,View view,int widthDP,int heightDP){
        ViewGroup.LayoutParams layoutParams=view.getLayoutParams();
        int wdp= CommonUtils.dp2px(context,widthDP);
        int hdp= CommonUtils.dp2px(context,heightDP);
        layoutParams.width=wdp ;
        layoutParams.height=hdp;
        view.setLayoutParams(layoutParams);
    }
  public   static String egtUrl(String url){
        if(TextUtils.isEmpty(url))
            return url;
        String [] urlarr=url.split("/");
        if(urlarr.length>0){
            String data=urlarr[0];
            try{
                new SimpleDateFormat("yyyy-MM").parse(data);
                String hahurl= Constant.ALIYUN_IMAGE_URL+url;
                return hahurl;
            }catch (Exception e){
                return url;
                //e.printStackTrace();
            }
        }
        return url;
    }
    /**
     * 字体加粗
     * @param title
     */
    public static void bold(TextView title){
        TextPaint tp = title.getPaint();
        tp.setFakeBoldText(true);
    }
    public static boolean isEmpty(String str){
       boolean b=(str!=null && str.trim().length()>0 &&!str.toLowerCase().trim().equals("null"));
        return !b;
    }

    /**
     * 去掉手机号空格 - +
     * @param str
     * @return
     */
    public static String re(String str){
        //方法2：str.replaceAll(" ", ""); 去掉所有空格，包括首尾、中间
        String temp=str;
        try{
            temp = temp.replaceAll(" ", "");
            temp=temp.replaceAll("-","");
            temp=temp.replaceAll("\\+","");
            return temp;
        }catch (Exception e){
            return temp;
        }
    }

}
