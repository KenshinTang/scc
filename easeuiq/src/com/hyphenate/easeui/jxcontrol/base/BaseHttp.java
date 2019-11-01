package com.hyphenate.easeui.jxcontrol.base;
import android.text.TextUtils;
import android.widget.Toast;

import com.hyphenate.easeui.jxcontrol.ThirdTool;
import com.hyphenate.easeui.jxcontrol.model.UserSession;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public abstract class BaseHttp
{
    public BaseHttp()
    {
    }
    
    protected String POST = "POST";
    
    protected String GET = "GET";
    

    
    private int HTTP_READ_TIMEOUT = 5000;
    
    private int HTTP_CONNECT_TIMEOUT = 5000;
    
    private String UTF8 = "UTF-8";
    
    public String send(String stringurl, String params, String method)
    {
        if(TextUtils.isEmpty(params))
            params="";
        if(!params.contains("_timespan")) {
            params += ("&_timespan=" + UserSession.getInstance().getTimespace());
        }

        String result = null;
        HttpURLConnection connection = null;
        URL url = null;
        try
        {
            url = new URL(stringurl);
            connection = (HttpURLConnection)url.openConnection();
            connection.setDoInput(true);
            connection.setDoOutput(true);
            connection.setRequestMethod(method);
            connection.setUseCaches(false);
            connection.setRequestProperty("Charset", UTF8);
            connection.setInstanceFollowRedirects(true);
            connection.setRequestProperty("User-Agent", "Android/1.0");
            connection.setRequestProperty("Accept-Encoding", "");
            connection.setRequestProperty("contentType", "application/json");
            connection.setDefaultUseCaches(false);
            connection.setReadTimeout(HTTP_READ_TIMEOUT);
            connection.setConnectTimeout(HTTP_CONNECT_TIMEOUT);
            //connection.setRequestProperty("Content-Type", "application/x-www-form-urlencoded");
            connection.connect();
            DataOutputStream out = new DataOutputStream(connection.getOutputStream());
            out.write(params.getBytes(UTF8));
            out.flush();
            out.close();
            int code = connection.getResponseCode();
            if (code == 200)
            {
                BufferedReader reader = new BufferedReader(new InputStreamReader(connection.getInputStream()));
                String lines;
                StringBuffer sbf = new StringBuffer();
                while ((lines = reader.readLine()) != null)
                {
                    lines = new String(lines.getBytes(), "utf-8");
                    sbf.append(lines);
                }
                reader.close();
                String resStr = sbf.toString();
                if(resStr!=null && resStr.indexOf("\"code\":110")>-1) {
                    //验证用户合法性失败
                    if(ThirdTool.getInstance().ar!=null)
                        ThirdTool.getInstance().ar.exitToLogin();
                }
                return resStr;
            }
        }
        catch (Exception ex)
        {
            new Throwable(ex);
        }
        finally
        {
            // 断开连接
            if (connection!=null)
            connection.disconnect();
        }
        return result;
    }
}
