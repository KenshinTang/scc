package com.hyphenate.easeui.jxcontrol;

import android.content.Context;
import android.content.Intent;

import com.hyphenate.EMCallBack;
import com.hyphenate.chat.EMClient;
import com.hyphenate.easeui.jxcontrol.model.Constant;
import com.hyphenate.easeui.jxcontrol.model.SPFUtils;
import com.hyphenate.easeui.jxcontrol.model.UserSession;
import com.hyphenate.easeui.jxcontrol.otherControl.EventControl;

import org.json.JSONObject;

/**
 * Created by lemon on 2017/7/14.
 */

public class ThirdTool {


    private static ThirdTool instance = null;
    public static ThirdTool getInstance() {
        if (instance == null) {
            instance = new ThirdTool();
        }
        return instance;
    }

    public interface refreshContacts {
        void refresh();
        void refreshFromService();
    }

    public refreshContacts ref;



    public int sNotice = 0;
    public int mNotice = 0;



    public authError ar;
    public boolean showError = false;
    public interface authError {
        void exitToLogin();
    }

}
