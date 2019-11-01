package com.yunlinker.interfaces;

/**
 * Created by Administrator on 2018/5/18/018.
 */

public interface EMCallBack {
    void onSuccess();

    void onError(int var1, String var2);

    void onProgress(int var1, String var2);
}
