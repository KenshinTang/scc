package com.hyphenate.easeui.jxcontrol.model;

/**
 * 群组成员的信息
 */
public class GroupUserInfo{
    /*"easemobname": "170412135610011",
            "phone": "13551015380",
            "customerid": 45,
            "nickname": "135****5380"*/
    private String easemobname;
    private String phone;
    private Integer customerid;
    private String nickname;
    private String head;
    private String remark;
    private String label;
    private int oprator;
    private int sex;
    private String  areaid;
    private String  industry;
    private String  enterpriseid;

    public int getSex() {
        return sex;
    }

    public void setSex(int sex) {
        this.sex = sex;
    }

    public String getAreaid() {
        return areaid;
    }

    public void setAreaid(String areaid) {
        this.areaid = areaid;
    }

    public String getIndustry() {
        return industry;
    }

    public void setIndustry(String industry) {
        this.industry = industry;
    }

    public String getEnterpriseid() {
        return enterpriseid;
    }

    public void setEnterpriseid(String enterpriseid) {
        this.enterpriseid = enterpriseid;
    }

    public int getOprator() {
        return oprator;
    }

    public void setOprator(int oprator) {
        this.oprator = oprator;
    }

    //当前用户是否添加  默认是false ：没有  true ：已经添加
    private Boolean currentUserStateAradayAdd;

    public Boolean getCurrentUserStateAradayAdd() {
        return currentUserStateAradayAdd;
    }

    public void setCurrentUserStateAradayAdd(Boolean currentUserStateAradayAdd) {
        this.currentUserStateAradayAdd = currentUserStateAradayAdd;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public String getEasemobname() {
        return easemobname;
    }
    public void setEasemobname(String easemobname) {
        this.easemobname = easemobname;
    }
    public String getPhone() {
        return phone;
    }
    public void setPhone(String phone) {
        this.phone = phone;
    }
    public Integer getCustomerid() {
        return customerid;
    }
    public void setCustomerid(Integer customerid) {
        this.customerid = customerid;
    }
    public String getNickname() {
        return nickname;
    }
    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public String getHead() {
        return head;
    }

    public void setHead(String head) {
        this.head = head;
    }
}
