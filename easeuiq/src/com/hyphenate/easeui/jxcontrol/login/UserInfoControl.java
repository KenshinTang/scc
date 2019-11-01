package com.hyphenate.easeui.jxcontrol.login;

import android.content.Context;
import android.text.TextUtils;

import com.google.gson.Gson;
import com.hyphenate.easeui.jxcontrol.base.BaseAsyncTask;
import com.hyphenate.easeui.jxcontrol.base.BaseController;
import com.hyphenate.easeui.jxcontrol.base.ClientHttp;
import com.hyphenate.easeui.jxcontrol.model.CommonParams;
import com.hyphenate.easeui.jxcontrol.model.Constant;
import com.hyphenate.easeui.jxcontrol.model.GroupUserInfo;
import com.hyphenate.easeui.jxcontrol.model.Hangye;
import com.hyphenate.easeui.jxcontrol.model.PhoneInfo;
import com.hyphenate.easeui.jxcontrol.model.UserSession;

import org.json.JSONArray;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;

import static android.R.attr.type;

/**
 * Created by Administrator on 2017-04-14.
 */

public class UserInfoControl extends BaseController {
    Context context;
    UserInfoControlInterface usi;
    ClientHttp clientHttp = null;
    RemarkInterface remarkInterface;
    HangyeInterface hangyeInterface;
    public void setRemarkInterface(RemarkInterface remarkInterface) {
        this.remarkInterface = remarkInterface;
    }

    public void setHangyeInterface(HangyeInterface hangyeInterface) {
        this.hangyeInterface = hangyeInterface;
    }

    public UserInfoControl(Context context, UserInfoControlInterface usi) {
        this.usi = usi;
        this.context = context;
        clientHttp = ClientHttp.getInstance();
    }

    public void loadPhoneCatacts(final List<PhoneInfo> catactsList) {
        int taskid = generateTaskId();
        BaseAsyncTask<List<GroupUserInfo>> task = new BaseAsyncTask<List<GroupUserInfo>>(context) {
            @Override
            protected void handleOnException(Exception e) {
            }

            @Override
            protected void onSuccess(List<GroupUserInfo> userInfos) {
                usi.onSuccess(userInfos);
            }

            @Override
            public List<GroupUserInfo> call() throws Exception {
                List<GroupUserInfo> allUsers=new ArrayList<>();
                if(catactsList.size()>200){
                        int count=200;
                        int index=1;
                        List<PhoneInfo> temp200=new ArrayList<>();
                       for(int i=0;i<catactsList.size();i++){
                            if(i<count){
                                temp200.add(catactsList.get(i));
                            }else if (i==count){
                                allUsers.addAll(selectContacts200(temp200));
                                index++;
                                count=count*index;
                            }
                       }
                }else {
                    allUsers.addAll(selectContacts200(catactsList));
                }
                return allUsers;
            }
        };
        registeTask(taskid, task);
        task.execute();
    }

    /**
     * 每次查询200个手机号码
     */
    private List<GroupUserInfo>  selectContacts200(List<PhoneInfo>  catactsList){
        String result=clientHttp.sendPostHttp(Constant.URL_GET_MAIL_LIST, CommonParams.getUserInfoParams(catactsList));
        if(TextUtils.isEmpty(result))
            return null;
        try{
            JSONObject object=new JSONObject(result);
            if(object.getInt("code")==1){
                JSONArray arr= object.getJSONArray("data");
                List<GroupUserInfo> datas=new ArrayList<>();
                Gson gson=new Gson();
                for(int i=0;i<arr.length();i++){
                    datas.add(gson.fromJson(arr.getString(i),GroupUserInfo.class));
                }
                return datas;
            }else {
                return null;
            }
        }catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }

    /**
     * 修改备注 标签
     * @param friendsid
     * @param remark 备注
     * @param label 签名
     * @param alllabel 当前用户所有签名
     */
    public void saveOrupateremark(final String friendsid, final String remark, final String label, final String alllabel){
        int taskid=generateTaskId();
        BaseAsyncTask<Boolean> task=new BaseAsyncTask<Boolean>(context) {
            @Override
            protected void handleOnException(Exception e) {
            }
            @Override
            public Boolean call() throws Exception {
               // String result=clientHttp.OKHttp_POST(Constant.URL_REMARK,CommonParams.getRemark(friendsid, remark, label, alllabel));
                String pa=CommonParams.convertParams(CommonParams.getRemark(friendsid, remark, label, alllabel));
                pa=pa.substring(0,pa.lastIndexOf("&"));
                String result =clientHttp.OKHttp_POST(Constant.URL_REMARK,CommonParams.getRemark(friendsid, remark, label, alllabel));
                if (TextUtils.isEmpty(result))
                    return false;
                JSONObject object=new JSONObject(result);
                return object.getBoolean("success");
            }
            @Override
            protected void onSuccess(Boolean aBoolean) {
                remarkInterface.onSuccess(aBoolean);
            }
        };
        registeTask(taskid,task);
        task.execute();
    }

    /**
     * 获取行业
     * @param customerid
     */
    public void getHangye(){
        int taskid=generateTaskId();
        BaseAsyncTask<List<Hangye>> task=new BaseAsyncTask<List<Hangye>>(context) {
            @Override
            protected void handleOnException(Exception e) {
            }
            @Override
            public List<Hangye> call() throws Exception {
                String result=clientHttp.OKHttp_GET(Constant.URL_HANGYE_DICT,"");
                if (TextUtils.isEmpty(result))
                    return null;
                JSONObject object=new JSONObject(result);
                if(!object.getBoolean("success"))
                    return null;
                List<Hangye> hangyeList=new ArrayList<>();
                Gson gson=new Gson();
               JSONArray jsonArray=object.getJSONArray("data");
                    for (int i=0;i<jsonArray.length();i++){
                    Hangye h=gson.fromJson(jsonArray.getString(i),Hangye.class);
                    hangyeList.add(h);
                }
                return  hangyeList;
            }
            @Override
            protected void onSuccess(List<Hangye> hangyes) {
                hangyeInterface.onSuccess(hangyes);
            }
        };
        registeTask(taskid,task);
        task.execute();
    }

    /**
     * 保存行业
     * @param customerid
     */
    public void  HangyeSave(final Integer itemid, final String indstr,final Integer type){
        int taskid=generateTaskId();
        BaseAsyncTask<Boolean> task=new BaseAsyncTask<Boolean>(context) {
            @Override
            protected void handleOnException(Exception e) {
            }
            @Override
            public Boolean call() throws Exception {
                String timespace=UserSession.getInstance().getUser().getCustomerid()+"_"+UserSession.getInstance().getUser().getToken();
                // result=clientHttp.OKHttp_GET(Constant.URL_HANGYE_SAVE,"itemid="+UserSession.getInstance().getUser().getCustomerid()+"&type="+type+"&indstr="+indstr);
                String  result=clientHttp.OKHttp_GET(Constant.URL_HANGYE_SAVE,"_timespan="+timespace+"&indstr="+indstr);
                if (TextUtils.isEmpty(result))
                    return null;
                JSONObject object=new JSONObject(result);
                return object.getBoolean("success");
            }
            @Override
            protected void onSuccess(Boolean hangyes) {
                hangyeInterface.onSuccess(hangyes);
            }
        };
        registeTask(taskid,task);
        task.execute();
    }
}
