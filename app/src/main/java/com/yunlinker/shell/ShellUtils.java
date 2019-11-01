package com.yunlinker.shell;

import android.Manifest;
import android.content.Context;
import android.content.pm.PackageManager;
import android.os.Build;
import android.telephony.TelephonyManager;

import java.util.ArrayList;

/**
 * Created by Yunlinker on 2017/5/26.
 */

public class ShellUtils {
    private static boolean isPermissionRequested=false;

    public static String getDeviceId(Context context) {
        TelephonyManager TelephonyMgr = (TelephonyManager) context.getSystemService(Context.TELEPHONY_SERVICE);
        String szImei = TelephonyMgr.getDeviceId();
        return szImei;
    }


    private void initPermission() {
        if (Build.VERSION.SDK_INT >= 23 && !isPermissionRequested) {

            String permissions[] = {
                    Manifest.permission.INTERNET,
                    Manifest.permission.ACCESS_NETWORK_STATE,
                    Manifest.permission.MODIFY_AUDIO_SETTINGS,
                    Manifest.permission.WRITE_EXTERNAL_STORAGE,
                    Manifest.permission.WRITE_SETTINGS,
                    Manifest.permission.READ_PHONE_STATE,
                    Manifest.permission.ACCESS_WIFI_STATE,
                    Manifest.permission.CHANGE_WIFI_STATE
            };

            ArrayList<String> toApplyList = new ArrayList<String>();

            for (String perm : permissions) {
                //if (PackageManager.PERMISSION_GRANTED != checkSelfPermission(perm)) {
                    toApplyList.add(perm);
                    //进入到这里代表没有权限.
               // }
            }
            if (toApplyList.size() == 0) {
                return;
            } else {
              //  requestPermissions(toApplyList.toArray(new String[toApplyList.size()]), 0);
            }
        }

    }
}
