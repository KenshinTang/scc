package com.hyphenate.easeui.jxcontrol.base;

import android.content.Context;
import android.content.Intent;
import android.text.TextUtils;

import com.hyphenate.EMCallBack;
import com.hyphenate.chat.EMClient;
import com.hyphenate.easeui.jxcontrol.ThirdTool;
import com.hyphenate.easeui.jxcontrol.model.Constant;
import com.hyphenate.easeui.jxcontrol.model.SPFUtils;
import com.hyphenate.easeui.jxcontrol.model.UserSession;
import com.hyphenate.easeui.jxcontrol.otherControl.EventControl;
import com.squareup.okhttp.FormEncodingBuilder;
import com.squareup.okhttp.OkHttpClient;
import com.squareup.okhttp.Request;
import com.squareup.okhttp.RequestBody;
import com.squareup.okhttp.Response;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;


public class ClientHttp extends BaseHttp {
    private static ClientHttp clientHttp;
    public String POST = "POST";
    public String GET = "GET";
    private ClientHttp() {
    }

    public synchronized static ClientHttp getInstance() {
        if (clientHttp == null)
            clientHttp = new ClientHttp();
        return clientHttp;
    }
    public String sendPostHttp(String strUrl, String params){
        return   send(strUrl,params,POST);
    }
    public String sendGetHttp(String strUrl, String params){
        return   send(strUrl,params,GET);
    }
    public String sendGetHttp(String strUrl){
        return sendGetHttp(strUrl,null);
    }
    public String sendPostHttp(String strUrl){
        return sendPostHttp(strUrl,null);
    }
    public String OKHttp_GET(String url, String params){
        String backBody = null;
        try{
            OkHttpClient client = new OkHttpClient();
            if(TextUtils.isEmpty(params))
                params="";
            if(!params.contains("?"))
                params = "?"+params;
            if(!params.contains("_timespan"))
                params += ("&_timespan=" + UserSession.getInstance().getTimespace());
            url=url+params;
            Request request = new Request.Builder()
                    .url(url)
                    .build();
            Response response = client.newCall(request).execute();
            if (response.isSuccessful()) {
                backBody = response.body().string();
                if(backBody.contains("\"code\":110")) {
                    //验证用户合法性失败
                    if(ThirdTool.getInstance().ar!=null)
                        ThirdTool.getInstance().ar.exitToLogin();
                }
            }
        }catch (Exception e){
            e.printStackTrace();
        }
        return backBody;
    }
    public String OKHttp_POST(String url, Map<String,String > params){
        String backBody = null;
        try{
            if(params==null)
                params = new HashMap<>();
            params.put("_timespan", UserSession.getInstance().getTimespace());
            Iterator<Map.Entry<String, String>> params_entry = params.entrySet().iterator();
            OkHttpClient client = new OkHttpClient();
            FormEncodingBuilder formBody = new FormEncodingBuilder();
                    while(params_entry.hasNext()){
                        Map.Entry<String, String> map_params_item = params_entry.next();
                        formBody.add(map_params_item.getKey(),map_params_item.getValue());
                    }
            RequestBody build = formBody.build();
            Request request = new Request.Builder()
                    .url(url)
                    .post(build)
                    .build();
            Response response = client.newCall(request).execute();
            if (response.isSuccessful()) {
                backBody = response.body().string();
                if(backBody.contains("\"code\":110")) {
                    //验证用户合法性失败
                    if(ThirdTool.getInstance().ar!=null)
                        ThirdTool.getInstance().ar.exitToLogin();
                }
            }
        }catch (Exception e){
            e.printStackTrace();
        }
        return backBody;
    }

}
