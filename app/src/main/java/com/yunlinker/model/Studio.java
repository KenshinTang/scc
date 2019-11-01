package com.yunlinker.model;

import java.io.Serializable;
import java.util.List;

/**
 * Created by 82196 on 2018/4/12.
 */

public class Studio implements Serializable{
    private static final long serialVersionUID = 8633299996744734593L;

    /**
     * code : 1
     * curPage : 0
     * data : [{"id":1,"name":"高升店","lng":104.090697,"lat":30.636714,"opng":1,"addr":"地址1","face":"htmlimg/2018-04/1523528031117.png","opentime":"全天 周一到周日"},{"id":2,"name":"玉林店","lng":104.07,"lat":30.666291,"opng":0,"addr":"地址2","face":"htmlimg/2018-04/1523528031117.png","opentime":"全天 周一到周日"},{"id":3,"name":"奥恩店","lng":104.063963,"lat":30.624036,"opng":0,"addr":"地址3","face":"htmlimg/2018-04/1523528031117.png","opentime":"全天 周一到周日"},{"id":4,"name":"环环店","lng":104.034067,"lat":30.655604,"opng":0,"addr":"地址4","face":"htmlimg/2018-04/1523528031117.png","opentime":"全天 周一到周日"},{"id":5,"name":"罗玉店","lng":104.054477,"lat":30.644668,"opng":0,"addr":"地址5","face":"htmlimg/2018-04/1523528031117.png","opentime":"全天 周一到周日"},{"id":6,"name":"笨熊店","lng":104.069137,"lat":30.618193,"opng":0,"addr":"地址6","face":"htmlimg/2018-04/1523528031117.png","opentime":"全天 周一到周日"}]
     * msg :
     * pageSize : 0
     * totalCount : 0
     */

    private int code;
    private int curPage;
    private String msg;
    private int pageSize;
    private int totalCount;
    private List<DataBean> data;

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public int getCurPage() {
        return curPage;
    }

    public void setCurPage(int curPage) {
        this.curPage = curPage;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public int getPageSize() {
        return pageSize;
    }

    public void setPageSize(int pageSize) {
        this.pageSize = pageSize;
    }

    public int getTotalCount() {
        return totalCount;
    }

    public void setTotalCount(int totalCount) {
        this.totalCount = totalCount;
    }

    public List<DataBean> getData() {
        return data;
    }

    public void setData(List<DataBean> data) {
        this.data = data;
    }

    public static class DataBean {
        /**
         * id : 1
         * name : 高升店
         * lng : 104.090697
         * lat : 30.636714
         * opng : 1
         * addr : 地址1
         * face : htmlimg/2018-04/1523528031117.png
         * opentime : 全天 周一到周日
         */

        private int id;
        private String name;
        private double lng;
        private double lat;
        private int opng;
        private String addr;
        private String face;
        private String opentime;

        public int getId() {
            return id;
        }

        public void setId(int id) {
            this.id = id;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public double getLng() {
            return lng;
        }

        public void setLng(double lng) {
            this.lng = lng;
        }

        public double getLat() {
            return lat;
        }

        public void setLat(double lat) {
            this.lat = lat;
        }

        public int getOpng() {
            return opng;
        }

        public void setOpng(int opng) {
            this.opng = opng;
        }

        public String getAddr() {
            return addr;
        }

        public void setAddr(String addr) {
            this.addr = addr;
        }

        public String getFace() {
            return face;
        }

        public void setFace(String face) {
            this.face = face;
        }

        public String getOpentime() {
            return opentime;
        }

        public void setOpentime(String opentime) {
            this.opentime = opentime;
        }
    }
}
