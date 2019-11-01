package com.hyphenate.easeui.jxcontrol.model;

/**
 * 签到实体
 */

public class Singin {
    private Integer groupsignid;
    private String groupid;
    private Integer count;
    private Long lastdate;
    private long subdate;
    private String easemobname;
    private Integer todayissign;

    public Integer getGroupsignid() {
        return groupsignid;
    }

    public void setGroupsignid(Integer groupsignid) {
        this.groupsignid = groupsignid;
    }

    public String getGroupid() {
        return groupid;
    }

    public void setGroupid(String groupid) {
        this.groupid = groupid;
    }

    public Integer getCount() {
        return count;
    }

    public void setCount(Integer count) {
        this.count = count;
    }

    public Long getLastdate() {
        return lastdate;
    }

    public void setLastdate(Long lastdate) {
        this.lastdate = lastdate;
    }

    public long getSubdate() {
        return subdate;
    }

    public void setSubdate(long subdate) {
        this.subdate = subdate;
    }

    public String getEasemobname() {
        return easemobname;
    }

    public void setEasemobname(String easemobname) {
        this.easemobname = easemobname;
    }

    public Integer getTodayissign() {
        return todayissign;
    }

    public void setTodayissign(Integer todayissign) {
        this.todayissign = todayissign;
    }
}
