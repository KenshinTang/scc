package com.yunlinker.shell;

import java.io.Serializable;

/**
 * Created by Administrator on 2016/12/2.
 */
public class DeviceModel implements Serializable {
    private String ver;

    public String getVer() {
        return ver;
    }

    public void setVer(String ver) {
        this.ver = ver;
    }

    private String type;

    private String imei;

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getImei() {
        return imei;
    }

    public void setImei(String imei) {
        this.imei = imei;
    }
}
