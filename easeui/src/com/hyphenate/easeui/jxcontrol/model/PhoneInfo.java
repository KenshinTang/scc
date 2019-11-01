package com.hyphenate.easeui.jxcontrol.model;


public class PhoneInfo {
    private String name;
    private String phonenumer;

    public PhoneInfo() {
    }

    public PhoneInfo(String name, String phonenumer) {
        this.name = name;
        this.phonenumer = phonenumer;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhonenumer() {
        return phonenumer;
    }

    public void setPhonenumer(String phonenumer) {
        this.phonenumer = phonenumer;
    }
}
