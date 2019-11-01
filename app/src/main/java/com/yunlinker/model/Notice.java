package com.yunlinker.model;

public class Notice {


    /**
     * code : 1
     * data : {"isPartener":0,"stores":12,"members":53,"parteners":4,"isShop":0,"rebateMoney":0}
     */

    private int code;
    private DataBean data;

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public DataBean getData() {
        return data;
    }

    public void setData(DataBean data) {
        this.data = data;
    }

    public static class DataBean {
        /**
         * isPartener : 0
         * stores : 12
         * members : 53
         * parteners : 4
         * isShop : 0
         * rebateMoney : 0
         */

        private int isPartener;
        private int stores;
        private int members;
        private int parteners;
        private int isShop;
        private int rebateMoney;

        public int getIsPartener() {
            return isPartener;
        }

        public void setIsPartener(int isPartener) {
            this.isPartener = isPartener;
        }

        public int getStores() {
            return stores;
        }

        public void setStores(int stores) {
            this.stores = stores;
        }

        public int getMembers() {
            return members;
        }

        public void setMembers(int members) {
            this.members = members;
        }

        public int getParteners() {
            return parteners;
        }

        public void setParteners(int parteners) {
            this.parteners = parteners;
        }

        public int getIsShop() {
            return isShop;
        }

        public void setIsShop(int isShop) {
            this.isShop = isShop;
        }

        public int getRebateMoney() {
            return rebateMoney;
        }

        public void setRebateMoney(int rebateMoney) {
            this.rebateMoney = rebateMoney;
        }
    }
}
