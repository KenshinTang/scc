package com.hyphenate.easeui.jxcontrol.model;

import android.text.TextUtils;
import android.util.Log;

import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

/**
 * 网络请求的封装的参数
 */

public class CommonParams {
    public static String convertParams (Map<String,String> pams){
        StringBuffer sbf=new StringBuffer();
        Iterator<Map.Entry<String, String>> iterator = pams.entrySet().iterator();
        while (iterator.hasNext()){
            Map.Entry<String, String> next = iterator.next();
            sbf.append(next.getKey()).append("=").append(next.getValue()).append("&");
        }
        return sbf.toString();
    }
    public  static Map<String,String> getMap(){
        return new HashMap<String,String>();
    }
    public static String getPramsLogin(String phone, String pwd){
        Map<String, String> loginMap = getMap();
        loginMap.put("phone",phone);
        loginMap.put("password",pwd);
        return   convertParams(loginMap);
    }
    public static String getRegister(String phone, String password, String verificationCode, String recomandCode ){
        Map<String, String> loginMap = getMap();
        loginMap.put("phone",phone);
        loginMap.put("password",password);
        loginMap.put("verificationCode",verificationCode);
        loginMap.put("invitationPhone",recomandCode);
        return  convertParams(loginMap);
    }
    public static String getGroupUserInfo(List<String> list){
        StringBuffer sbf=new StringBuffer();
        sbf.append("_timespan=").append(UserSession.getInstance().getTimespace()).append("&");
        sbf.append("usernames=");
        for(String s:list){
            sbf.append(s).append(",");
        }
        String str=sbf.toString();
        if(!TextUtils.isEmpty(str)&&str.length()>0&&list.size()>0){
            str=str.substring(0,str.lastIndexOf(","));
        }
        return str;
    }

    public static String getUserInfoParams(List<PhoneInfo> catactsList){

        StringBuffer sbf=new StringBuffer();
        sbf.append("mobiles=");
        int i=0;
        for (PhoneInfo p:catactsList){
             if(i==catactsList.size()-1)
            {
                String sphone=re(p.getPhonenumer());
                if(!TextUtils.isEmpty(sphone) && sphone.length()==11){
                    sbf.append(sphone);
                }

            }else {
                 String sphone2=re(p.getPhonenumer());
                 if(!TextUtils.isEmpty(sphone2) && sphone2.length()==11){
                     sbf.append(sphone2).append(",");
                 }
            }
            i++;
        }
       if(sbf.toString().length()>0){
           int len=sbf.toString().length();
           String str1=sbf.toString().substring(sbf.toString().length()-1,sbf.toString().length());
           String str2=null;
           if(str1.trim().equals(",")){
               str2=sbf.toString().substring(0,sbf.lastIndexOf(","));
               return  str2;
           }
       }
        Log.d("contacts:",sbf.toString());

       return sbf.toString();
    }
    private static String re(String str){
        //方法2：str.replaceAll(" ", ""); 去掉所有空格，包括首尾、中间
        String temp=str;
       try{
           if(temp.contains(" ")){
               temp = temp.replaceAll(" ", "");
           }if(temp.contains("-")){
               temp=temp.replaceAll("-","");
           }
           if(temp.contains("\\+")){
               temp=temp.replaceAll("\\+","");
           }
           return temp;
       }catch (Exception e){
           return temp;
       }
    }

    /**
     * 是否签到
     */
    public static String getIsSingin(String groupid, String userid){
        StringBuffer sbf=new StringBuffer();
        sbf.append("easemobgroupid=").append(groupid).append("&");
        sbf.append("easemobnames=").append(userid);
        return sbf.toString();
    } /**
     * 签到
     */
    public static Map<String,String> getSingin(String groupid, String userid){
       Map<String,String> map= getMap();
        map.put("groupid",groupid);
        map.put("easemobname",userid);
        return map;
    }

    /**
     *修改密码
     * @return
     */
    public static Map<String,String> getModfyPassword(String phone,String pwd,String validate){
        //phone=13551015395&verificationCode=0000&newPWD=123456aaa
        Map<String,String> map= getMap();
        map.put("phone",phone);
        map.put("newPWD",pwd);
        map.put("verificationCode",validate);
        return map;
    }

    /**
     * H5 调用原生修改密码
     * @param oldpwd
     * @param newpwd
     * @return
     */
    public static Map<String,String> modifypwd(String oldpwd,String newpwd){
        Map<String,String>map=getMap();
        map.put("_timespan",UserSession.getInstance().getTimespace());
        map.put("oldPWD",oldpwd);
        map.put("newPWD",newpwd);
        return  map;
    }  /**
     * H5 调用原生修改密码
     * @param oldpwd
     * @param newpwd
     * @return
     */
    public static String modifypwd1(String oldpwd,String newpwd){
       StringBuffer sbf=new StringBuffer();
        sbf.append("_timespan=").append(UserSession.getInstance().getTimespace())
         .append("&").append("oldPWD=").append(oldpwd).append("&").append("newPWD=").append(newpwd);
        return  sbf.toString();
    }

    /**
     * 修改备注
     * @param friendsid
     * @param remark
     * @param label
     * @param alllabel
     * @return
     */
    public  static Map<String,String> getRemark(String friendsid,String remark,String label,String alllabel){
        Map<String,String> map= getMap();
        map.put("_timespan",UserSession.getInstance().getTimespace());
        map.put("friendsid",friendsid);
        map.put("remark",remark);
        map.put("label",label);
        map.put("alllabel",alllabel);
        return map;
    }
    public static String getGroupAddUsers(List<String> list){
        StringBuffer sbf=new StringBuffer();
        for(String s:list){
            sbf.append(s).append(",");
        }
        String str=sbf.toString();
        if(!TextUtils.isEmpty(str)&&str.length()>0&&list.size()>0){
            str=str.substring(0,str.lastIndexOf(","));
        }
        return str;
    }
    public static String getSystemMsgCount(){
        StringBuffer sbf=new StringBuffer();
        sbf.append("_timespan="+UserSession.getInstance().getTimespace()).append("&")
        .append("isread=0");
        return sbf.toString();
    }

}
