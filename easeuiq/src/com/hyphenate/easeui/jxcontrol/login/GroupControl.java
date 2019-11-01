package com.hyphenate.easeui.jxcontrol.login;

import android.app.job.JobScheduler;
import android.content.ContentValues;
import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.text.TextUtils;
import android.util.Log;

import com.google.gson.Gson;
import com.hyphenate.chat.EMClient;
import com.hyphenate.chat.EMCursorResult;
import com.hyphenate.chat.EMGroup;
import com.hyphenate.easeui.jxcontrol.GroupMenberHelper;
import com.hyphenate.easeui.jxcontrol.ThirdTool;
import com.hyphenate.easeui.jxcontrol.base.BaseAsyncTask;
import com.hyphenate.easeui.jxcontrol.base.BaseController;
import com.hyphenate.easeui.jxcontrol.base.ClientHttp;
import com.hyphenate.easeui.jxcontrol.model.CommonParams;
import com.hyphenate.easeui.jxcontrol.model.Constant;
import com.hyphenate.easeui.jxcontrol.model.GroupUserInfo;
import com.hyphenate.easeui.jxcontrol.model.Singin;
import com.hyphenate.easeui.jxcontrol.model.UserSession;
import com.hyphenate.easeui.jxcontrol.otherControl.TempMessageNoticeInterface;
import com.hyphenate.easeui.widget.EaseConversationList;

import org.json.JSONArray;
import org.json.JSONObject;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static com.baidu.location.d.j.a;
import static com.baidu.location.d.j.ar;

/**
 * Created by Administrator on 2017-04-11.
 */

public class GroupControl extends BaseController {
    Context context;
    GroupInterface groupInterface;
    ClientHttp clientHttp = null;
    SiginInterface siginInterface;
    CreateGroupInterface createGroupInterface;

    public GroupControl(Context context, GroupInterface groupInterface) {
        this.groupInterface = groupInterface;
        this.context = context;
        clientHttp = ClientHttp.getInstance();
    }

    public void setGroupInterface(GroupInterface groupInterface) {
        this.groupInterface = groupInterface;
    }

    public void setCreateGroupInterface(CreateGroupInterface createGroupInterface) {
        this.createGroupInterface = createGroupInterface;
    }

    public void setSiginInterface(SiginInterface s){
        this.siginInterface=s;
    }
    //
    public void searchGroupUserInfo(final List<String> list ) {
        int taskId = generateTaskId();
        BaseAsyncTask<List<GroupUserInfo>> task = new BaseAsyncTask<List<GroupUserInfo>>(context) {
            @Override
            protected void handleOnException(Exception e) {
            }
            @Override
            protected void onSuccess(List<GroupUserInfo> users) {
                groupInterface.onSuccee(users);
            }
            @Override
            public List<GroupUserInfo> call() throws Exception {
                try{
                    String result= clientHttp.sendPostHttp(Constant.URL_GROUP_USER_INFO,CommonParams.getGroupUserInfo(list));
                    if (TextUtils.isEmpty(result)) {
                        return null;
                    }
                    JSONObject object = new JSONObject(result);
                    if (object.getInt("code") == 1) {
                        List<GroupUserInfo> listdata = new ArrayList<>();
                        JSONArray jsonArray = object.getJSONArray("data");
                        if (jsonArray.length() < 1)
                            return null;
                        Gson gson = new Gson();
                        for (int i = 0; i < jsonArray.length(); i++) {
                            listdata.add(gson.fromJson(jsonArray.getString(i), GroupUserInfo.class));
                        }
                        return  listdata;
                    } else {
                        return null;
                    }
                }catch (Exception e){
                    e.printStackTrace();
                }
                return null;
            }
        };
        registeTask(taskId, task);
        task.execute();
    }
    //
    public void searchGroupUserInfo2(final List<String> list ) {
        int taskId = generateTaskId();
        BaseAsyncTask<List<GroupUserInfo>> task = new BaseAsyncTask<List<GroupUserInfo>>(context) {
            @Override
            protected void handleOnException(Exception e) {
            }
            @Override
            protected void onSuccess(List<GroupUserInfo> users) {
                groupInterface.onSuccee(users);
            }
            @Override
            public List<GroupUserInfo> call() throws Exception {
                try{
                    String result= clientHttp.sendPostHttp(Constant.URL_GROUP_USER_INFO,CommonParams.getGroupUserInfo(list));
                    if (TextUtils.isEmpty(result)) {
                        return null;
                    }
                    JSONObject object = new JSONObject(result);
                    if (object.getInt("code") == 1) {
                        List<GroupUserInfo> listdata = new ArrayList<>();
                        JSONArray jsonArray = object.getJSONArray("data");
                        if (jsonArray.length() < 1)
                            return null;
                        Gson gson = new Gson();
                        for (int i = 0; i < jsonArray.length(); i++) {
                            listdata.add(gson.fromJson(jsonArray.getString(i), GroupUserInfo.class));
                        }
                        return  listdata;
                    } else {
                        return null;
                    }
                }catch (Exception e){
                    e.printStackTrace();
                }
                return null;
            }
        };
        registeTask(taskId, task);
        task.execute();
    }

    /**
     * 消息通知查询
     * @param list
     */
    public void searchGroupUserInfo3(final List<String> list,final GroupInterface i ) {
        int taskId = generateTaskId();
        BaseAsyncTask<List<GroupUserInfo>> task = new BaseAsyncTask<List<GroupUserInfo>>(context) {
            @Override
            protected void handleOnException(Exception e) {
            }
            @Override
            protected void onSuccess(List<GroupUserInfo> users) {
                i.onSuccee(users);
            }
            @Override
            public List<GroupUserInfo> call() throws Exception {
                try{
                    String result= clientHttp.sendPostHttp(Constant.URL_GROUP_USER_INFO,CommonParams.getGroupUserInfo(list));
                    if (TextUtils.isEmpty(result)) {
                        return null;
                    }
                    JSONObject object = new JSONObject(result);
                    if (object.getInt("code") == 1) {
                        List<GroupUserInfo> listdata = new ArrayList<>();
                        JSONArray jsonArray = object.getJSONArray("data");
                        if (jsonArray.length() < 1)
                            return null;
                        Gson gson = new Gson();
                        for (int i = 0; i < jsonArray.length(); i++) {
                            listdata.add(gson.fromJson(jsonArray.getString(i), GroupUserInfo.class));
                        }
                        return  listdata;
                    } else {
                        return null;
                    }
                }catch (Exception e){
                    e.printStackTrace();
                }
                return null;
            }
        };
        registeTask(taskId, task);
        task.execute();
    }

    public void searchUserInfo(final String easemobname ) {
        int taskId = generateTaskId();
        BaseAsyncTask<List<GroupUserInfo>> task = new BaseAsyncTask<List<GroupUserInfo>>(context) {
            @Override
            protected void handleOnException(Exception e) {
            }
            @Override
            protected void onSuccess(List<GroupUserInfo> users) {
                groupInterface.onSuccee(users);
            }
            @Override
            public List<GroupUserInfo> call() throws Exception {
                String result=clientHttp.sendPostHttp(Constant.URL_GROUP_USER_INFO,"isOther=1&usernames="+easemobname+"&_timespan="+ UserSession.getInstance().getTimespace());
                if (TextUtils.isEmpty(result)) {
                    return null;
                }
                JSONObject object = new JSONObject(result);
                if (object.getInt("code") == 1) {
                    List<GroupUserInfo> listdata = new ArrayList<>();
                    JSONArray jsonArray = object.getJSONArray("data");
                    if (jsonArray.length() < 1)
                        return null;
                    Gson gson = new Gson();
                    for (int i = 0; i < jsonArray.length(); i++) {
                        listdata.add(gson.fromJson(jsonArray.getString(i), GroupUserInfo.class));
                    }
                    return  listdata;
                } else {
                    return null;
                }
            }
        };
        registeTask(taskId, task);
        task.execute();
    }

    public void selectAreay(Context context,final AreayInterface areayInterface,final String areaid){
        int taskid=generateTaskId();
        BaseAsyncTask<String> task=new BaseAsyncTask<String>(context) {
            @Override
            protected void handleOnException(Exception e) {
            }
            @Override
            public String call() throws Exception {
                String result=clientHttp.OKHttp_GET(Constant.URL_SELECT_AREAY,"areaId="+areaid);
                if (TextUtils.isEmpty(result)) {
                    return null;
                }
                try {
                    JSONObject jsonObject=new JSONObject(result);
                    if(jsonObject.getBoolean("success")){
                        String fullpath=jsonObject.getJSONObject("data").getString("fullpath");
                        if(!TextUtils.isEmpty(fullpath)){
                            String [] arr=fullpath.split(",");
                            if(arr.length>=3){
                                String lastAddress="";
                                if(arr[1].trim().equals(arr[2].trim()))
                                    lastAddress=arr[1];
                                else
                                    lastAddress=arr[1]+" "+arr[2];
                                return lastAddress;
                            }
                        }else {
                            return null;
                        }
                    }
                }catch (Exception e){
                    e.printStackTrace();
                    return null;
                }
                return null;
            }
            @Override
            protected void onSuccess(String s) {
                areayInterface.onResult(s);
            }
        };
        registeTask(taskid,task);
        task.execute();
    }
    /**
     *  是否签到
     *  @param easemobgroupid  环信群组
     * @param easemobnames 环信客户ID，多个可以用英文逗号分隔
     */

    public void isSigin(final String easemobgroupid, final String easemobnames){
        int taskid=generateTaskId();
        final Map<String,Integer> msg=new HashMap<>();
        BaseAsyncTask<Boolean> task=new BaseAsyncTask<Boolean>(context) {
            @Override
            protected void handleOnException(Exception e) {
            }
            @Override
            public Boolean call() throws Exception {
                String result=clientHttp.OKHttp_GET(Constant.URL_IS_SIGIN, CommonParams.getIsSingin(easemobgroupid,easemobnames));
                if (TextUtils.isEmpty(result)) {
                    return false;
                }
                try{
                    JSONObject object=new JSONObject(result);
                    boolean success=object.getBoolean("success");
                    if(success){
                        if(object.get("data")!=null){
                            String today = new SimpleDateFormat("yyyy-MM-dd").format(new Date());
                            JSONArray arrData=object.getJSONArray("data");

                            for(int i=0;i<arrData.length();i++){
                                JSONObject item=arrData.getJSONObject(i);
                                Long time=item.getLong("lastdate");
                                String temp_day=new SimpleDateFormat("yyyy-MM-dd").format(new Date(time));
                                if(today.equals(temp_day)&&item.getInt("count")>=5){
                                    return true;
                                }
                                msg.put("count",item.getInt("count"));
                            }

                            return false;
                        }else
                            return false;
                    }

                }catch (Exception e){
                    e.printStackTrace();
                }
                return false;
            }

            @Override
            protected void onSuccess(Boolean b) {
                if( siginInterface!=null)
                    siginInterface.isSigin(b,msg.containsKey("count")?msg.get("count"):0);
            }
        };
        registeTask(taskid,task);
        task.execute();
    }

    /**
     * 查询签到
     */
    public void selectSingin(final String easemobgroupid, final String easemobnames){
        int taskid=generateTaskId();
        BaseAsyncTask<Singin> task=new BaseAsyncTask<Singin>(context) {
            @Override
            protected void handleOnException(Exception e) {
            }
            @Override
            public Singin call() throws Exception {
                String result=clientHttp.OKHttp_GET(Constant.URL_IS_SIGIN, CommonParams.getIsSingin(easemobgroupid,easemobnames));
                if (TextUtils.isEmpty(result)) {
                    return  null;
                }
                try{
                    JSONObject object=new JSONObject(result);
                    boolean success=object.getBoolean("success");
                    if(success){
                        if(object.get("data")!=null){
                            String today = new SimpleDateFormat("yyyy-MM-dd").format(new Date());
                            JSONArray arrData=object.getJSONArray("data");
                            for(int i=0;i<arrData.length();i++){
                                JSONObject item=arrData.getJSONObject(i);
                                Long time=item.getLong("lastdate");
                                String temp_day=new SimpleDateFormat("yyyy-MM-dd").format(new Date(time));
                                if(today.equals(temp_day)){
                                    Gson gson=new Gson();
                                    Singin singin=gson.fromJson(item.toString(),Singin.class);
                                    return singin ;
                                }
                            }
                            return null ;
                        }else
                            return null ;
                    }

                }catch (Exception e){
                    e.printStackTrace();
                }

                return null ;
            }

            @Override
            protected void onSuccess(Singin singin) {
                siginInterface.siginTime(singin);
            }
        };
        registeTask(taskid,task);
        task.execute();
    }

    /**
     * 签到
     * @param easemobgroupid
     * @param easemobnames
     */
    public void Sigin(final String easemobgroupid, final String easemobnames){
        int taskid=generateTaskId();
        BaseAsyncTask<Boolean> task=new BaseAsyncTask<Boolean>(context) {
            @Override
            protected void handleOnException(Exception e) {
            }

            @Override
            public Boolean call() throws Exception {
                try{
                    String result=clientHttp.OKHttp_POST(Constant.URL_SIGIN,CommonParams.getSingin(easemobgroupid,easemobnames));
                    if (TextUtils.isEmpty(result)) {
                        return false;
                    }
                    JSONObject object=new JSONObject(result);
                    return object.getBoolean("success");
                }catch (Exception e){
                    e.printStackTrace();
                }
                return false;
            }

            @Override
            protected void onSuccess(Boolean aBoolean) {
                if(siginInterface!=null)
                    siginInterface.sigin(aBoolean);
            }
        };
        registeTask(taskid,task);
        task.execute();
    }

    /**
     * 签到完成，并查询签到
     */
    public void sigin_select(final String easemobgroupid, final String easemobnames){
        int taskid=generateTaskId();
        BaseAsyncTask<Singin> task=new BaseAsyncTask<Singin>(context) {
            @Override
            protected void handleOnException(Exception e) {
            }
            @Override
            public Singin call() throws Exception {
                try{
                    String result=clientHttp.OKHttp_POST(Constant.URL_SIGIN,CommonParams.getSingin(easemobgroupid,easemobnames));
                    if (TextUtils.isEmpty(result)) {
                        return null;
                    }
                    JSONObject object=new JSONObject(result);
                    boolean flag=object.getBoolean("success");
                    if(!flag)
                        return null;
                      result=clientHttp.OKHttp_GET(Constant.URL_IS_SIGIN, CommonParams.getIsSingin(easemobgroupid,easemobnames));
                    if (TextUtils.isEmpty(result)) {
                        return  null;
                    }
                      object=new JSONObject(result);
                    boolean success=object.getBoolean("success");
                    if(success){
                        if(object.get("data")!=null){
                            String today = new SimpleDateFormat("yyyy-MM-dd").format(new Date());
                            JSONArray arrData=object.getJSONArray("data");
                            for(int i=0;i<arrData.length();i++){
                                JSONObject item=arrData.getJSONObject(i);
                                Long time=item.getLong("lastdate");
                                String temp_day=new SimpleDateFormat("yyyy-MM-dd").format(new Date(time));
                                if(today.equals(temp_day)){
                                    Gson gson=new Gson();
                                    Singin singin=gson.fromJson(item.toString(),Singin.class);
                                    return singin ;
                                }
                            }
                            return null ;
                        }else
                            return null ;
                    }
                }catch (Exception e){
                   return null;
                }
                return null;
            }

            @Override
            protected void onSuccess(Singin singin) {
                siginInterface.siginTime(singin);
            }
        };
        registeTask(taskid,task);
        task.execute();
    }

    /**
     * 查询群组
     * @param easemobgroupid
     */
    public void search_group_show(final List<EaseConversationList.ConversationDomain> easemobgroupids){
        int taskid=generateTaskId();
        BaseAsyncTask< List<GroupUserInfo>> task=new BaseAsyncTask< List<GroupUserInfo>>(context) {
            @Override
            protected void handleOnException(Exception e) {
            }
            @Override
            public  List<GroupUserInfo> call() throws Exception {
                List<String> ids_group=new ArrayList<>();
                List<String> user_ids=new ArrayList<>();
                List<GroupUserInfo> listdata = new ArrayList<>();
                for(EaseConversationList.ConversationDomain domain: easemobgroupids){
                    if(domain.getType().intValue()== EaseConversationList.type_user.intValue()){
                        user_ids.add(domain.getName());
                    }else {
                        ids_group.add(domain.getName());
                    }
                }
                if(user_ids.size()>0) {
                    String result= clientHttp.sendPostHttp(Constant.URL_GROUP_USER_INFO,CommonParams.getGroupUserInfo(user_ids));
                    JSONObject object = new JSONObject(result);
                    if (object.getInt("code") == 1) {

                        JSONArray jsonArray = object.getJSONArray("data");
                        if (jsonArray.length() < 1)
                            return null;
                        Gson gson = new Gson();
                        for (int i = 0; i < jsonArray.length(); i++) {
                            listdata.add(gson.fromJson(jsonArray.getString(i), GroupUserInfo.class));
                        }
                    }
                }
                for(int i=0;i<ids_group.size();i++){
                    String resultData=clientHttp.OKHttp_GET(Constant.URL_GROUP_SHOW, "easemobgroupid="+ids_group.get(i));
                   if(TextUtils.isEmpty(resultData))
                       continue;
                    JSONObject jsonObject=new JSONObject(resultData);
                    if(jsonObject.getBoolean("success")){
                        String mydata=jsonObject.getString("data");
                        Gson gson = new Gson();
                        EaseConversationList.Group group= gson.fromJson(mydata, EaseConversationList.Group.class);
                        if(group==null)
                            continue;
                        GroupUserInfo guf=new GroupUserInfo();
                        guf.setEasemobname(TextUtils.isEmpty(group.getEasemobgroupid())?"":group.getEasemobgroupid());
                        guf.setNickname(TextUtils.isEmpty(group.getNickname())?"":group.getNickname());
                        guf.setCustomerid(group.getGroupid()==null?-1:group.getGroupid());
                        listdata.add(guf);
                    }
                }
                return listdata;
            }
            @Override
            protected void onSuccess( List<GroupUserInfo> group) {
                groupInterface.onSuccee(group);
            }
        };
        registeTask(taskid,task);
        task.execute();
    }

    /**
     * 创建群组
     * @param easemobgroupid
     * @param notice
     */
    public void createGroup(final  String easemobgroupid,final String notice){
        int taskid=generateTaskId();
        BaseAsyncTask<String> task=new BaseAsyncTask<String>(context) {
            @Override
            protected void handleOnException(Exception e) {
            }
            @Override
            public String call() throws Exception {

                Map<String ,String > map=new HashMap<>();
                map.put("easemobgroupid",easemobgroupid);
                map.put("notice",notice);
                String result=clientHttp.OKHttp_POST(Constant.URL_GROUP_CREATE,map);
                if(TextUtils.isEmpty(result)){
                    return null;
                }
                JSONObject jsonObject=new JSONObject(result);
                if(jsonObject.getBoolean("success"))
                    return "SUCCESS";
                return "ERROR";
            }

            @Override
            protected void onSuccess(String s) {
                createGroupInterface.onSuccee(s);
            }
        };
        registeTask(taskid,task);
        task.execute();
    }
    /**
     * 群组加人
     */
    public void addGroupUser(final List<String> userids,final String groupId,final CreateGroupInterface gg){
        int taskid=generateTaskId();
        BaseAsyncTask<Boolean> task=new BaseAsyncTask<Boolean>(context) {
            @Override
            protected void handleOnException(Exception e) {
            }
            @Override
            public Boolean call() throws Exception {

                Map<String ,String > map=new HashMap<>();
                map.put("groupid",groupId);
                map.put("userId",CommonParams.getGroupAddUsers(userids));
                String result=clientHttp.OKHttp_POST(Constant.URL_GROUP_ADD,map);
                if(TextUtils.isEmpty(result)){
                    return null;
                }
                JSONObject jsonObject=new JSONObject(result);
                return jsonObject.getBoolean("success");
            }

            @Override
            protected void onSuccess(Boolean s) {
                gg.onSuccee(s?"ok":"no");
            }
        };
        registeTask(taskid,task);
        task.execute();
    }
    public void  getGroupMenber(Context context, final GroupMenberHelper helper){
        int taskid=generateTaskId();
       BaseAsyncTask<Void> task=new BaseAsyncTask<Void>(context) {
           @Override
           protected void handleOnException(Exception e) {
           }
           @Override
           public Void call() throws Exception {
               SQLiteDatabase db=null;
               try{
                     db= helper.getWritableDatabase();
                   //从本地加载群组列表
                   List<EMGroup> grouplist = EMClient.getInstance().groupManager().getAllGroups();
                   for(EMGroup g:grouplist){
                       String groupid=g.getGroupId();
                       List<String> memberList = new ArrayList<>();
                       EMCursorResult<String> result = null;
                       final int pageSize = 20;
                       do {
                           result = EMClient.getInstance().groupManager().fetchGroupMembers(groupid,
                                   result != null ? result.getCursor() : "", pageSize);
                           memberList.addAll(result.getData());
                       } while (result.getData().size() == pageSize);

                       if(memberList.size()==0){
                           continue;
                       }
                    //获取服务器的群成员信息  保存到本地db
                       String userinfo= clientHttp.sendPostHttp(Constant.URL_GROUP_USER_INFO,CommonParams.getGroupUserInfo(memberList));
                        if(TextUtils.isEmpty(userinfo)){
                            continue;
                        }
                       //{ "groupid":"aaa",[GroupUserInfo]}
                       JSONObject object = new JSONObject(userinfo);
                       if (object.getInt("code") == 1) {
                           List<GroupUserInfo> listdata = new ArrayList<>();
                           JSONArray jsonArray = object.getJSONArray("data");
                           if (jsonArray.length() < 1)
                              continue;
                           String menberData=jsonArray.toString();


                           if(db.isOpen()) {
                               //保存数据库
                               ContentValues values = new ContentValues();
                               String select="select * from "+GroupMenberHelper.table+" where "+GroupMenberHelper.groupid+"=?";
                               String [] args={groupid};
                               Cursor cursor= db.rawQuery(select,args);
                               boolean next=cursor.moveToNext();
                               if(cursor==null||!next){
                                   values.put(GroupMenberHelper.groupid,groupid);
                                   values.put(GroupMenberHelper.menber,menberData);
                                   db.insert(GroupMenberHelper.table,null,values);
                                   // Log.i("数据库  插入数据:",groupid);
                               }else {
                                   if(next){
                                       values.put(GroupMenberHelper.menber,menberData);
                                       db.update(GroupMenberHelper.table,values,GroupMenberHelper.groupid+"=?",new String[]{groupid});
                                       //Log.i("数据库 更新数据:",groupid);
                                   }
                               }
                           }

                           //Log.i("数据库  groupid:",groupid);
                           //Log.i("数据库  value:",objectdata.toString());

                       }
                   }
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
    public void  getGroupMenberSaveUserSision(Context context, final GroupMenberHelper helper){
        int taskid=generateTaskId();
        BaseAsyncTask<Void> task=new BaseAsyncTask<Void>(context) {
            @Override
            protected void handleOnException(Exception e) {
            }

            @Override
            public Void call() throws Exception {
                SQLiteDatabase db=null;
                Cursor cursor=null;
                try{
                    db=helper.getWritableDatabase();
                    String sql="select * from "+GroupMenberHelper.table;
                     cursor=db.rawQuery(sql,null);
                    if(cursor!=null){
                        Gson gson=new Gson();
                        Map<String,GroupUserInfo> mapinfo=new HashMap<>();
                        while (cursor.moveToNext()){
                           //String groupid=cursor.getString(1);
                            //[{"a":"1"},{"a":"1"}]
                            String menber=cursor.getString(2);
                            JSONArray array=new JSONArray(menber);
                            if(array.length()>0){
                                for(int i=0;i<array.length();i++){
                                    String userinfo=array.getString(i);
                                    if(!TextUtils.isEmpty(userinfo)){
                                        GroupUserInfo groupUserInfo=gson.fromJson(userinfo,GroupUserInfo.class);
                                        if(groupUserInfo!=null){
                                            mapinfo.put(groupUserInfo.getEasemobname(),groupUserInfo);
                                        }
                                    }
                                }
                            }
                           // mapinfo.put(groupid,menber);
                        }
                         UserSession.getInstance().setMapGroupUser(mapinfo);
                    }
                }catch (Exception e){
                    e.printStackTrace();
                }
                finally {
                    if(cursor!=null)
                        cursor.close();
                    if (db!=null)
                        db.close();
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
    public void  getSystemNoticeMsg(Context context, final TempMessageNoticeInterface temp){
        int taskid=generateTaskId();
        BaseAsyncTask<Integer> task=new BaseAsyncTask<Integer>(context) {
            @Override
            protected void handleOnException(Exception e) {
            }
            @Override
            public Integer call()  {
                String result= clientHttp.OKHttp_GET(Constant.URL_SYSTEM_MESSAGE_COUNT,CommonParams.getSystemMsgCount());
                if (TextUtils.isEmpty(result)) {
                    return null;
                }
              try{
                  JSONObject jsonObject=new JSONObject(result);
                  ThirdTool.getInstance().sNotice = jsonObject.getInt("data");
                  return ThirdTool.getInstance().sNotice;
              }catch (Exception e){
                  e.printStackTrace();
                  return null;
              }
            }
            @Override
            protected void onSuccess(Integer integer) {
                if(temp!=null)
                    temp.noticeSystem(integer==null?0:integer);
            }
        };
        registeTask(taskid,task);
        task.execute();
    }
    public void searchGuanggao(Context context,final GunggaoInterface g){
        int taskid=generateTaskId();
        BaseAsyncTask<String> task=new BaseAsyncTask<String>(context) {
            @Override
            protected void handleOnException(Exception e) {
            }
            @Override
            public String call() throws Exception {
                String result= clientHttp.OKHttp_GET(Constant.URL_GUANGGAO,"");
                if (TextUtils.isEmpty(result)) {
                    return null;
                }
                try{
                    JSONObject object=new JSONObject(result);
                    if(object.getBoolean("success")){
                        JSONObject dataObject=object.getJSONObject("data");
                        if(dataObject.getInt("enable")==1){
                            return dataObject.getString("face");
                        }else {
                            return null;
                        }
                    }else {
                        return null;
                    }
                }catch (Exception e){
                    e.printStackTrace();return null;
                }
            }

            @Override
            protected void onSuccess(String s) {
                g.makeUrl(s);
            }
        };
        registeTask(taskid,task);
        task.execute();
    }
}
