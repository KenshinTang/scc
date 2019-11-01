package com.hyphenate.easeui.jxcontrol.login;

import android.content.Context;
import android.text.TextUtils;

import com.google.gson.Gson;
import com.hyphenate.easeui.jxcontrol.base.BaseAsyncTask;
import com.hyphenate.easeui.jxcontrol.base.BaseController;
import com.hyphenate.easeui.jxcontrol.base.ClientHttp;
import com.hyphenate.easeui.jxcontrol.model.Constant;
import com.hyphenate.easeui.jxcontrol.model.User;
import com.hyphenate.easeui.jxcontrol.model.UserSession;

import org.json.JSONArray;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Administrator on 2017-04-11.
 */

public class SearchUserControl extends BaseController {
    Context context;
    UserSearchCallInterface userLoinInterface;
    ClientHttp clientHttp = null;

    public SearchUserControl(Context context, UserSearchCallInterface userLoinInterface) {
        this.userLoinInterface = userLoinInterface;
        this.context = context;
        clientHttp = ClientHttp.getInstance();
    }

    //关键字查询
    public void userSraech(final String keyword) {
        int taskId = generateTaskId();
        BaseAsyncTask<List<User>> task = new BaseAsyncTask<List<User>>(context) {
            @Override
            protected void handleOnException(Exception e) {
            }
            @Override
            protected void onSuccess(List<User> users) {
                userLoinInterface.onSearchResult(users);
            }
            @Override
            public List<User> call() throws Exception {
                String result = clientHttp.sendGetHttp(Constant.URL_SEARCH, "keyword=" + keyword);
                if (TextUtils.isEmpty(result)) {
                    return null;
                }
                JSONObject object = new JSONObject(result);
                if (object.getInt("code") == 1) {
                    List<User> list = new ArrayList<>();
                    JSONArray jsonArray = object.getJSONArray("data");
                    if (jsonArray.length() < 1)
                        return null;
                    Gson gson = new Gson();
                    for (int i = 0; i < jsonArray.length(); i++) {
                        list.add(gson.fromJson(jsonArray.getString(i), User.class));
                    }
                    return list;
                } else {
                    return null;
                }
            }
        };
        registeTask(taskId, task);
        task.execute();
    }

}
