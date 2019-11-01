package com.yunlinker.shell;

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
