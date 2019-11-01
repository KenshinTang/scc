package com.hyphenate.easeui.jxcontrol.otherControl;

/**
 * 微信绑定成功/失败 后 调回登录界面
 */

public interface WeichatBindToLogin {
    /**
     * 设置数据 开始登录，数据为空自己输入账号登录
     * @param phone
     * @param pwd
     */
    public void setArguments(String phone,String pwd);
}
