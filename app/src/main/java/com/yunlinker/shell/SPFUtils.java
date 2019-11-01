package com.yunlinker.shell;

import android.content.Context;
import android.content.SharedPreferences;

/**
 * Created by Administrator on 2017-04-11.
 */

public class SPFUtils {
    private static SharedPreferences spf;

    private static void getInstance(Context context) {
        spf = context.getSharedPreferences("save_info", Context.MODE_PRIVATE);
    }

    public static void saveInfo(Context context, String key, String value) {
        getInstance(context);
        spf.edit().putString(key, value).commit();
    }

    public static String getKeyValue(Context context, String key) {
        getInstance(context);
        return spf.getString(key, null);
    }
}
