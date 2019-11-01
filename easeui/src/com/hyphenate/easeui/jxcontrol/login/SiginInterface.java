package com.hyphenate.easeui.jxcontrol.login;

import com.hyphenate.easeui.jxcontrol.model.Singin;
import com.hyphenate.easeui.jxcontrol.otherControl.BaseEvenControl;

/**
 * 签到接口
 */

public interface SiginInterface {
    /**
     * 是否签到
     */
    public void isSigin(Boolean issigin,int count);

    /**
     * 签到
     */
    public void sigin(Boolean sigin);

    /**
     * 返回当前的签到时间
     * @param time
     */
    public void siginTime( Singin singin);


}
