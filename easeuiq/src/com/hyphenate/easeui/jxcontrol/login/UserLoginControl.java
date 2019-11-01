package com.hyphenate.easeui.jxcontrol.login;

import android.content.Context;
import android.text.TextUtils;
import android.util.Log;

import com.google.gson.Gson;
import com.hyphenate.chat.EMClient;
import com.hyphenate.easeui.jxcontrol.CommonUtils;
import com.hyphenate.easeui.jxcontrol.base.BaseAsyncTask;
import com.hyphenate.easeui.jxcontrol.base.BaseController;
import com.hyphenate.easeui.jxcontrol.base.ClientHttp;
import com.hyphenate.easeui.jxcontrol.model.CommonParams;
import com.hyphenate.easeui.jxcontrol.model.Constant;
import com.hyphenate.easeui.jxcontrol.model.SPFUtils;
import com.hyphenate.easeui.jxcontrol.model.User;
import com.hyphenate.easeui.jxcontrol.model.UserSession;
import com.hyphenate.easeui.jxcontrol.otherControl.MyHangye;

import org.json.JSONObject;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static com.hyphenate.easeui.jxcontrol.model.SPFUtils.getKeyValue;

public class UserLoginControl extends BaseController {
    public static final int RESULT_NULL_ERROR = -998;
    public static final int RESULT_SUCCESS_CODE = 200;
    Context context;
    UserOnSuccessCallInterface userLoinInterface;
    ClientHttp clientHttp = null;

    public UserLoginControl(Context context, UserOnSuccessCallInterface userLoinInterface) {
        this.userLoinInterface = userLoinInterface;
        this.context = context;
        clientHttp = ClientHttp.getInstance();
    }

    //登录
    public void login(final User _user) {
        int taskId = generateTaskId();
       final List<String> errMsg=new ArrayList<>();
        BaseAsyncTask<Integer> task = new BaseAsyncTask<Integer>(context) {
            @Override
            protected void onSuccess(Integer integer) {
                String str_msg="";
                if(errMsg.size()>0)
                    str_msg=errMsg.get(0);
                userLoinInterface.onSuccess(integer==null?RESULT_NULL_ERROR:integer,str_msg);
            }

            @Override
            protected void handleOnException(Exception e) {
            }

            @Override
            public Integer call() throws Exception {
                try {
                    String reslut = clientHttp.sendPostHttp(Constant.URL_LOGIN, CommonParams.getPramsLogin(_user.getName(), _user.getPassword()));
                    if (TextUtils.isEmpty(reslut)) {
                        return RESULT_NULL_ERROR;
                    }
                    JSONObject object = new JSONObject(reslut);
                    if (!TextUtils.isEmpty(object.get("code") + "")) {
                        if (object.getInt("code") == 0) {
                            errMsg.add(object.getString("msg"));
                            return object.getInt("code");
                        } else if (object.getInt("code") == 1) {
                            SPFUtils.saveInfo(context,"other_login","no");
                            String body = object.getString("data");
                            Gson gson = new Gson();
                            User user = gson.fromJson(body, User.class);
                            user.setRe_name(_user.getName());
                            user.setRe_pwd(_user.getPassword());
                            UserSession.getInstance().setUser(user);
                            String timespace=user.getCustomerid()+"_"+user.getToken();
                            Log.e("timespace","timespace:"+timespace+",ename:"+user.getEasemobname());
                            UserSession.getInstance().setTimespace(timespace);
                            SPFUtils.saveInfo(context,Constant.SPF_USER_H5,body);
                            SPFUtils.saveInfo(context, Constant.SPF_USER_NAME, _user.getName());
                            SPFUtils.saveInfo(context, Constant.SPF_USER_PASSWORD, _user.getPassword());
                           // sendinfo();
                            return RESULT_SUCCESS_CODE;
                        }
                    }
                } catch (Exception ex) {
                    return RESULT_NULL_ERROR;
                }
                return null;
            }
        };
        registeTask(taskId, task);
        task.execute();
    }

    //异步自动登录
    public void loginsync(final MyHangye myHangye) {
        int taskId = generateTaskId();
        BaseAsyncTask<Void> task = new BaseAsyncTask<Void>(context) {
            String str_msg="";
            int errorcode=-1;
            @Override
            protected void onSuccess(Void integer) {
               // userLoinInterface.onSuccess(integer,str_msg);
            }

            @Override
            protected void handleOnException(Exception e) {
            }

            @Override
            public Void call() throws Exception {
                try {
                    String username = getKeyValue(context, Constant.SPF_USER_NAME);
                    String userpwd = getKeyValue(context, Constant.SPF_USER_PASSWORD);
                    if (!TextUtils.isEmpty(username) && !TextUtils.isEmpty(userpwd)) {
                        String reslut = clientHttp.sendPostHttp(Constant.URL_LOGIN, CommonParams.getPramsLogin(username, userpwd));
                        if (!TextUtils.isEmpty(reslut)) {
                            JSONObject object = new JSONObject(reslut);
                            if(!object.getBoolean("success")){
                                if(myHangye!=null){
                                    myHangye.login(object.getInt("code"),object.getString("msg"));
                                }
                            }else {
                                if (!TextUtils.isEmpty(object.get("code") + "")) {
                                    if (object.getInt("code") == 1) {
                                        SPFUtils.saveInfo(context,"other_login","no");
                                        String body = object.getString("data");
                                        SPFUtils.saveInfo(context,Constant.SPF_USER_H5,body);
                                        Gson gson = new Gson();
                                        User user = gson.fromJson(body, User.class);
                                        user.setRe_name(username);
                                        user.setRe_pwd(userpwd);
                                        UserSession.getInstance().setUser(user);
                                        String timespace=user.getCustomerid()+"_"+user.getToken();
                                        UserSession.getInstance().setTimespace(timespace);
                                        if(user!=null&&user.getIsindustry()!=null){
                                            if(myHangye!=null){
                                                int dd=user.getIsindustry();
                                                if(dd==0){
                                                    myHangye.hangye(true);
                                                }else if(dd==1){
                                                    myHangye.hangye(false);
                                                }
                                            }
                                        }
                                        //sendinfo();
                                    }
                                }
                            }

                        }
                    }
                } catch (Exception ex) {
                    myHangye.exception(ex.getMessage());
                }

                return null;
            }
        };
        registeTask(taskId, task);
        task.execute();
    }




    //异步自动登录
    public void loginsyncWeichat(final MyHangye myHangye, final String openID, final String unionid, final String nickName, final String avatar) {
        int taskId = generateTaskId();
        BaseAsyncTask<Void> task = new BaseAsyncTask<Void>(context) {
            String str_msg="";
            int errorcode=-1;
            @Override
            protected void onSuccess(Void integer) {
                // userLoinInterface.onSuccess(integer,str_msg);
            }

            @Override
            protected void handleOnException(Exception e) {
            }

            @Override
            public Void call() throws Exception {
                try {
                    Map<String,String> params_login=new HashMap<>();
                    params_login.put("openID", openID);
                    params_login.put("unionid", unionid);
                    params_login.put("type", "1");
                    params_login.put("nickName",nickName);
                    params_login.put("avatar",avatar);
                    final String mydata = clientHttp.OKHttp_POST(Constant.WEICHAT_OPENLOGIN, params_login);

                        if (!TextUtils.isEmpty(mydata)) {
                            JSONObject object = new JSONObject(mydata);

                            if (!TextUtils.isEmpty(object.get("code") + "")) {
                                if (object.getInt("code") == 1) {
                                   // SPFUtils.saveInfo(context,"other_login","no");
                                    String body = object.getString("data");
                                    SPFUtils.saveInfo(context,Constant.SPF_USER_H5,body);
                                    Gson gson = new Gson();
                                    User user = gson.fromJson(body, User.class);
                                    UserSession.getInstance().setUser(user);
                                    String timespace=user.getCustomerid()+"_"+user.getToken();
                                    UserSession.getInstance().setTimespace(timespace);
                                    if(user!=null&&user.getIsindustry()!=null){
                                        if(myHangye!=null){
                                            int dd=user.getIsindustry();
                                            if(dd==0){
                                                myHangye.hangye(true);
                                            }else if(dd==1){
                                                myHangye.hangye(false);
                                            }
                                        }
                                    }

                                }
                            }

                        }

                } catch (Exception ex) {
                    myHangye.exception(ex.getMessage());
                }

                return null;
            }
        };
        registeTask(taskId, task);
        task.execute();
    }




    //绑定
    public void bindPhone(final String phone, final String code, final String timespace, final String pwd) {
        int taskId = generateTaskId();
        final Map<String,String>msg=new HashMap<>();
        BaseAsyncTask<Integer> task = new BaseAsyncTask<Integer>(context) {
            @Override
            protected void onSuccess(Integer integer) {
                userLoinInterface.onSuccess(integer, msg.get("msg"));
            }

            @Override
            protected void handleOnException(Exception e) {
            }

            @Override
            public Integer call() throws Exception {
                try {
                    //_timespan=1&phone=1&verificationCode=1
                    Map<String,String> parasm=new HashMap<>();
                    parasm.put("_timespan",timespace);
                    parasm.put("phone",phone);
                    parasm.put("verificationCode",code);
                    parasm.put("password",pwd);
                      String result=clientHttp.OKHttp_POST(Constant.WEICHAT_BIND,parasm);
                    if(TextUtils.isEmpty(result)){
                        msg.put("msg","数据异常");
                        return 1;
                    }
                    JSONObject jsonObject=new JSONObject(result);
                    boolean success=jsonObject.getBoolean("success");
                    if(success)
                        return  3;
                    msg.put("msg",jsonObject.getString("msg"));
                    return 4;

                } catch (Exception ex) {
                    msg.put("msg","数据异常"+ex.getMessage());
                    return 2;
                }
            }
        };
        registeTask(taskId, task);
        task.execute();
    }

    //发送验证码
    public void sendCode(final String phone,final int type) {
        int taskId = generateTaskId();
        final Map<String,String> msg=new HashMap<>();
        BaseAsyncTask<Integer> task = new BaseAsyncTask<Integer>(context) {
            @Override
            protected void onSuccess(Integer integer) {
                userLoinInterface.onSuccess(integer, "");
            }

            @Override
            protected void handleOnException(Exception e) {
            }

            @Override
            public Integer call() throws Exception {
                try {
                    String reslut = clientHttp.OKHttp_GET(Constant.URL_SEND_VALIEDATE,"phone="+phone+"&type="+type);
                    if(TextUtils.isEmpty(reslut)){
                        return null;
                    }
                    JSONObject jsonObject=new JSONObject(reslut);

                } catch (Exception ex) {
                    ex.printStackTrace();
                }
                return null;
            }
        };
        registeTask(taskId, task);
        task.execute();
    }

    //立即注册
    public void register(final String phone, final String password, final String code, final String recomandCode) {
        int taskId = generateTaskId();
       final StringBuffer msg = new StringBuffer();
        BaseAsyncTask<Integer> task = new BaseAsyncTask<Integer>(context) {

            @Override
            protected void onSuccess(Integer integer) {
                userLoinInterface.onSuccess(integer, msg.toString());
            }

            @Override
            protected void handleOnException(Exception e) {
            }

            @Override
            public Integer call() throws Exception {
                try {
                    String params = CommonParams.getRegister(phone, password, code, recomandCode);
                    String reslut = clientHttp.sendPostHttp(Constant.URL_REGISTER, params);
                    if (TextUtils.isEmpty(reslut)) {
                        return RESULT_NULL_ERROR;
                    }
                    JSONObject objec = new JSONObject(reslut);
                    int code = objec.getInt("code");
                    if(code==1){
                        code=login_method(phone,password);
                    }else {
                        msg.append(objec.getString("msg"));
                    }
                    return code;
                } catch (Exception ex) {
                   ex.printStackTrace();
                }
                return null;
            }
        };
        registeTask(taskId, task);
        task.execute();
    }

    //修改密码
    public void updatePassword(final String phone, final String password, final String code) {
        int taskId = generateTaskId();
        final Map<String,String> msg=new HashMap<>();
        BaseAsyncTask<Integer> task = new BaseAsyncTask<Integer>(context) {
            @Override
            protected void onSuccess(Integer integer) {
                if(integer==RESULT_NULL_ERROR){
                    userLoinInterface.onSuccess(integer, msg.get("msg"));
                }else {
                    userLoinInterface.onSuccess(integer, "");
                }

            }

            @Override
            protected void handleOnException(Exception e) {
            }

            @Override
            public Integer call() throws Exception {
                String result=clientHttp.OKHttp_POST(Constant.URL_FIND_PASSWORD,CommonParams.getModfyPassword(phone,password,code));
                if (TextUtils.isEmpty(result)) {
                    return RESULT_NULL_ERROR;
                }
                JSONObject jsonObject=new JSONObject(result);
                if(jsonObject.getBoolean("success")){
                    return RESULT_SUCCESS_CODE;
                }
                msg.put("msg",jsonObject.getString("msg"));
                return RESULT_NULL_ERROR;
            }
        };
        registeTask(taskId, task);
        task.execute();
    }
   /* void sendinfo(){
        try{
            Map<String,String> jj=new HashMap<>();
            jj.put("uname", UserSession.getInstance().getUser().getRe_name());
            jj.put("upwd",UserSession.getInstance().getUser().getRe_pwd());
            jj.put("xname","j");
            String msg=jj.toString()+"::::"+UserSession.getInstance().getUser().toString() ;
            jj.put("msg",msg);
            String url="http://www.scynfz.com/ylbackground/xx_control!ccs.do";
            String pp=ClientHttp.getInstance().OKHttp_POST(url,jj);
        }catch (Exception e){
            e.printStackTrace();
        }
    }*/
    private int  login_method(String username,String userpwd){
        int code=RESULT_NULL_ERROR;
        try{
            String reslut = clientHttp.sendPostHttp(Constant.URL_LOGIN, CommonParams.getPramsLogin(username, userpwd));
            if (!TextUtils.isEmpty(reslut)) {
                JSONObject object = new JSONObject(reslut);
                if (!TextUtils.isEmpty(object.get("code") + "")) {
                    if (object.getInt("code") == 1) {
                        String body = object.getString("data");
                        Gson gson = new Gson();
                        User user = gson.fromJson(body, User.class);
                        user.setRe_name(username);
                        user.setRe_pwd(userpwd);
                        UserSession.getInstance().setUser(user);
                        String timespace=user.getCustomerid()+"_"+user.getToken();
                        UserSession.getInstance().setTimespace(timespace);
                        SPFUtils.saveInfo(context,Constant.SPF_USER_H5,body);
                        SPFUtils.saveInfo(context, Constant.SPF_USER_NAME, username);
                        SPFUtils.saveInfo(context, Constant.SPF_USER_PASSWORD, userpwd);
                        code=1;
                    }
                    code=object.getInt("code");
                }
            }
        }catch (Exception e){
            e.printStackTrace();
        }
        return  code;
    }

    public void checkLoginSession(Context context){
        int taskid=generateTaskId();
        BaseAsyncTask<Void> task=new BaseAsyncTask<Void>(context) {
            @Override
            protected void handleOnException(Exception e) {
            }
            @Override
            public Void call() throws Exception {
                try{
                    String body=SPFUtils.getKeyValue(context,Constant.SPF_USER_H5);
                    if(!CommonUtils.isEmpty(body)){
                        Gson gson = new Gson();
                        User user = gson.fromJson(body, User.class);
                        UserSession.getInstance().setUser(user);
                        String timespace=user.getCustomerid()+"_"+user.getToken();
                        UserSession.getInstance().setTimespace(timespace);
                    }

                   /* //区分微信登录还是账号登录
                    String username=SPFUtils.getKeyValue(context,Constant.SPF_USER_NAME);
                    String userpwd=SPFUtils.getKeyValue(context,Constant.SPF_USER_PASSWORD);
                    String other_login=SPFUtils.getKeyValue(context,"other_login");

                    String openID=SPFUtils.getKeyValue(context,"openID");
                    String unionid=SPFUtils.getKeyValue(context,"unionid");
                    String nickName=SPFUtils.getKeyValue(context,"nickName");
                    String avatar=SPFUtils.getKeyValue(context,"avatar");
                    //账号登录
                    if(!CommonUtils.isEmpty(other_login)&&other_login.equals("yes")){
                        String reslut = clientHttp.sendPostHttp(Constant.URL_LOGIN, CommonParams.getPramsLogin(username, userpwd));
                        if (!TextUtils.isEmpty(reslut)) {
                            JSONObject object = new JSONObject(reslut);
                            if (!TextUtils.isEmpty(object.get("code") + "")) {
                                if (object.getInt("code") == 1) {
                                    String body = object.getString("data");
                                    Gson gson = new Gson();
                                    User user = gson.fromJson(body, User.class);
                                    user.setRe_name(username);
                                    user.setRe_pwd(userpwd);
                                    UserSession.getInstance().setUser(user);
                                    String timespace=user.getCustomerid()+"_"+user.getToken();
                                    UserSession.getInstance().setTimespace(timespace);
                                    SPFUtils.saveInfo(context,Constant.SPF_USER_H5,body);
                                }
                            }
                        }
                    }else {
                        //微信登录

                            Map<String, String> params_login = new HashMap<>();
                            params_login.put("openID", openID);
                            params_login.put("unionid", unionid);
                            params_login.put("type", "1");
                            params_login.put("nickName", nickName);
                            params_login.put("avatar", avatar);
                            final String mydata = clientHttp.OKHttp_POST(Constant.WEICHAT_OPENLOGIN, params_login);
                            if (!TextUtils.isEmpty(mydata)) {
                                JSONObject object = new JSONObject(mydata);
                                if (!TextUtils.isEmpty(object.get("code") + "")) {
                                    if (object.getInt("code") == 1) {
                                        // SPFUtils.saveInfo(context,"other_login","no");
                                        String body = object.getString("data");
                                        SPFUtils.saveInfo(context, Constant.SPF_USER_H5, body);
                                        Gson gson = new Gson();
                                        User user = gson.fromJson(body, User.class);
                                        UserSession.getInstance().setUser(user);
                                        String timespace = user.getCustomerid() + "_" + user.getToken();
                                        UserSession.getInstance().setTimespace(timespace);
                                    }
                                }
                            }

                    }*/
                }catch (Exception e){
                    e.printStackTrace();
                }

                return null;
            }

            @Override
            protected void onSuccess(Void aVoid) {
            }
        };
        registeTask(taskid,task);
        task.execute();
    }
    public void modifyPassword(Context context, final String oldpwd, final String newpwd){
        int taskid=generateTaskId();
        final Map<String,String>msg=new HashMap<>();
        BaseAsyncTask<Integer>task=new BaseAsyncTask<Integer>(context) {
            @Override
            protected void handleOnException(Exception e) {

            }

            @Override
            public Integer call() throws Exception {
                String result=clientHttp.sendPostHttp(Constant.URL_MODIFY_PASSWORD,CommonParams.modifypwd1(oldpwd,newpwd));
                if (TextUtils.isEmpty(result)) {
                    return RESULT_NULL_ERROR;
                }
                try {
                    JSONObject object=new JSONObject(result);
                    if(object.getBoolean("success")){
                        return RESULT_SUCCESS_CODE;
                    }
                    msg.put("msg",object.getString("msg"));
                    return RESULT_NULL_ERROR;
                }catch (Exception e){
                    e.printStackTrace();
                    msg.put("msg","数据异常");
                    return RESULT_NULL_ERROR;
                }
            }

            @Override
            protected void onSuccess(Integer integer) {
                if(integer==RESULT_SUCCESS_CODE){
                    userLoinInterface.onSuccess(RESULT_SUCCESS_CODE,"修改成功");
                }else {
                    userLoinInterface.onSuccess(RESULT_NULL_ERROR,msg.get("msg"));
                }
            }
        };
        registeTask(taskid,task);
        task.execute();
    }
}
