package com.yunlinker.model;

import java.util.List;

/**
 * Created by Administrator on 2018/5/13/013.
 */

public class Addres {


    /**
     * code : 1
     * data : [{"fanwei":"2000","face":"/doorpic","lng":"104.0446178","nickName":"God","rpacketId":"10","juli":"1","lat":"30.6313826"},{"fanwei":"500","face":"","lng":"104.0700000","nickName":"","rpacketId":"11","juli":"5","lat":"30.6700000"},{"fanwei":"500","face":"","lng":"104.0700000","nickName":"","rpacketId":"12","juli":"5","lat":"30.6700000"},{"fanwei":"500","face":"","lng":"104.0700000","nickName":"","rpacketId":"13","juli":"5","lat":"30.6700000"},{"fanwei":"500","face":"","lng":"104.0700000","nickName":"","rpacketId":"14","juli":"5","lat":"30.6700000"}]
     * msg :
     */

    private int code;
    private String msg;
    private List<DataBean> data;

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public List<DataBean> getData() {
        return data;
    }

    public void setData(List<DataBean> data) {
        this.data = data;
    }

    public static class DataBean {
        /**
         * fanwei : 2000
         * face : /doorpic
         * lng : 104.0446178
         * nickName : God
         * rpacketId : 10
         * juli : 1
         * lat : 30.6313826
         */

        private String fanwei;
        private String face;
        private double lng;
        private String nickName;
        private Integer rpacketId;
        private String juli;
        private double lat;

        public String getFanwei() {
            return fanwei;
        }

        public void setFanwei(String fanwei) {
            this.fanwei = fanwei;
        }

        public String getFace() {
            return face;
        }

        public void setFace(String face) {
            this.face = face;
        }

        public double getLng() {
            return lng;
        }

        public void setLng(double lng) {
            this.lng = lng;
        }

        public String getNickName() {
            return nickName;
        }

        public void setNickName(String nickName) {
            this.nickName = nickName;
        }

        public Integer getRpacketId() {
            return rpacketId;
        }

        public void setRpacketId(Integer rpacketId) {
            this.rpacketId = rpacketId;
        }

        public String getJuli() {
            return juli;
        }

        public void setJuli(String juli) {
            this.juli = juli;
        }

        public double getLat() {
            return lat;
        }

        public void setLat(double lat) {
            this.lat = lat;
        }
    }
}
