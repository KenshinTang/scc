package com.yunlinker.shell;

import android.view.Gravity;
import android.widget.Toast;

import com.yunlinker.myApp;


/**
 * Created by Administrator on 2016/10/8.
 */
public class ToastUtil {
    private static Toast mtost;
    public static  void  showTost(String msg){
        if(mtost==null)
            mtost= Toast.makeText(myApp.getContext(),msg, Toast.LENGTH_SHORT);
        else
            mtost.setText(msg);
        mtost.show();
    }

    public static void showTop(String str){
        Toast toast = Toast.makeText(myApp.getContext(), str,  Toast.LENGTH_SHORT);
        //可以控制toast显示的位置
        toast.setGravity(Gravity.TOP| Gravity.CENTER_HORIZONTAL, 0, 100);
        toast.show();
    }

}
