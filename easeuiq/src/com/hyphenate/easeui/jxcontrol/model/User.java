package com.hyphenate.easeui.jxcontrol.model;

/**
 * Created by Administrator on 2017/3/19.
 */

public class User {
    public User() {
    }

    private String name;
    private String password;
    private String easemobname;
    private Integer role;
    private String phone;
    private String sex;
    private Integer customerid;
    private String nickname;
    private String easemobuuid;
    private String easemobpassword;
    private String token;
    private String head;
    private String re_name;
    private String re_pwd;
    private String _timespan;
    private String birthday;
    private Integer age;
    private Integer isindustry;
    private String alllabel;
    /**
     * 居住地
     */
    private String areaid;
    /**
     * 设备类型 1 = 安卓 2 = 苹果
     */
    private Integer devicetype;
    /**
     * 设备token  注册友盟推送成功后的  devicetoken
     */
    private String devicetoken;

           /* "head": null,
            "easemobname": "8120acb8094a9a8a46b9184df8936b32",
            "role": 0,
            "phone": "13587364334",
            "sex": null,
            "customerid": 30,
            "nickname": "135****4334",
            "easemobuuid": null,
            "easemobpassword": "e10adc3949ba59abbe56e057f20f883e",
            "token": "7a335b216e9856160198419a53f459"*/

    public Integer getIsindustry() {
        return isindustry;
    }

    public void setIsindustry(Integer isindustry) {
        this.isindustry = isindustry;
    }

    public String getAlllabel() {
        return alllabel;
    }

    public void setAlllabel(String alllabel) {
        this.alllabel = alllabel;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEasemobname() {
        return easemobname;
    }

    public void setEasemobname(String easemobname) {
        this.easemobname = easemobname;
    }

    public Integer getRole() {
        return role;
    }

    public void setRole(Integer role) {
        this.role = role;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
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

    public String getEasemobuuid() {
        return easemobuuid;
    }

    public void setEasemobuuid(String easemobuuid) {
        this.easemobuuid = easemobuuid;
    }

    public String getEasemobpassword() {
        return easemobpassword;
    }

    public void setEasemobpassword(String easemobpassword) {
        this.easemobpassword = easemobpassword;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getHead() {
        return head;
    }

    public void setHead(String head) {
        this.head = head;
    }

    public String getRe_name() {
        return re_name;
    }

    public void setRe_name(String re_name) {
        this.re_name = re_name;
    }

    public String getRe_pwd() {
        return re_pwd;
    }

    public void setRe_pwd(String re_pwd) {
        this.re_pwd = re_pwd;
    }

    public String getDevicetoken() {
        return devicetoken;
    }

    public void setDevicetoken(String devicetoken) {
        this.devicetoken = devicetoken;
    }

    public String get_timespan() {
        return _timespan;
    }

    public void set_timespan(String _timespan) {
        this._timespan = _timespan;
    }

    public String getBirthday() {
        return birthday;
    }

    public void setBirthday(String birthday) {
        this.birthday = birthday;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getAreaid() {
        return areaid;
    }

    public void setAreaid(String areaid) {
        this.areaid = areaid;
    }

    public Integer getDevicetype() {
        return devicetype;
    }

    public void setDevicetype(Integer devicetype) {
        this.devicetype = devicetype;
    }

    @Override
    public String toString() {
        return "User{" +
                "name='" + name + '\'' +
                ", password='" + password + '\'' +
                ", easemobname='" + easemobname + '\'' +
                ", role=" + role +
                ", phone='" + phone + '\'' +
                ", sex='" + sex + '\'' +
                ", customerid=" + customerid +
                ", nickname='" + nickname + '\'' +
                ", easemobuuid='" + easemobuuid + '\'' +
                ", easemobpassword='" + easemobpassword + '\'' +
                ", token='" + token + '\'' +
                ", head='" + head + '\'' +
                ", re_name='" + re_name + '\'' +
                ", re_pwd='" + re_pwd + '\'' +
                '}';
    }
}
