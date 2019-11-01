package com.hyphenate.easeui.jxcontrol.otherControl;

/**
 *临时消息通知
 */

public interface TempMessageNoticeInterface {
    /**
     * 消息通知
     * @param sysNotice  系统消息
     * @param msg_notice  聊天消息
     */
    void notice(int sysNotice,int msg_notice);

    /**
     * 获取系统消息
     * @param sysNotice
     */
    void noticeSystem(int sysNotice);
}
