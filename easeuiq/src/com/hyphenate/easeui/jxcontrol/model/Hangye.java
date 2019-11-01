package com.hyphenate.easeui.jxcontrol.model;

/**
 * 行业
 */

public class Hangye {
    public  static final String industry="industry";
    private Integer industryid;
    private Integer itemid;
    private Integer type;
    private String name;

    private Integer dictid;
    private Integer dictpid;
    private String dictname;
    private String dictcode;
    private String dicttype;
    private Integer orderindex;
    private Integer enable;
    private String remark;

    public Integer getDictpid() {
        return dictpid;
    }

    public void setDictpid(Integer dictpid) {
        this.dictpid = dictpid;
    }

    public String getDictname() {
        return dictname;
    }

    public void setDictname(String dictname) {
        this.dictname = dictname;
    }

    public String getDictcode() {
        return dictcode;
    }

    public void setDictcode(String dictcode) {
        this.dictcode = dictcode;
    }

    public String getDicttype() {
        return dicttype;
    }

    public void setDicttype(String dicttype) {
        this.dicttype = dicttype;
    }

    public Integer getOrderindex() {
        return orderindex;
    }

    public void setOrderindex(Integer orderindex) {
        this.orderindex = orderindex;
    }

    public Integer getEnable() {
        return enable;
    }

    public void setEnable(Integer enable) {
        this.enable = enable;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    public Integer getIndustryid() {
        return industryid;
    }

    public void setIndustryid(Integer industryid) {
        this.industryid = industryid;
    }

    public Integer getItemid() {
        return itemid;
    }

    public void setItemid(Integer itemid) {
        this.itemid = itemid;
    }

    public Integer getDictid() {
        return dictid;
    }

    public void setDictid(Integer dictid) {
        this.dictid = dictid;
    }

    public Integer getType() {
        return type;
    }

    public void setType(Integer type) {
        this.type = type;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
