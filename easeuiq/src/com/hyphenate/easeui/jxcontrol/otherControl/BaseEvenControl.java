package com.hyphenate.easeui.jxcontrol.otherControl;

/**
 *事件总线 观察者
 */

public interface BaseEvenControl {
    public static final int REFRESH_refreshGroupUser=0;
    public static final int REFRESH_close_chat_group_page=1;

    //更新群成员
    public void refreshGroupUser();
    //关闭 聊天，群组详情 页面
    public void close_chat_group_page();


}
