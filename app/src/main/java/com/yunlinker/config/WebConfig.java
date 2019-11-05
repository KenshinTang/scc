package com.yunlinker.config;

/**
 * Created by lemon on 2017/8/21.
 */

public class WebConfig {
    public static String saveKey = "MWebApp";
    public static String AssestRoot = "file:///android_asset/";
    //public static String AssestRoot ="http://yzjs.yingheyezi.com/apphtml/";


    public static final String WXID = "wxaa11342f3f621851";
    public static final String WXSECRET = "8491ee36a7519bee12c3e57a64d88633";

    public static final String QQID ="1106245959";
    public static final String QQSECRET ="xqtSW4Ks2dAA2GDH";

    public static final String QYSECRET = "e69e0593f2546c70496d67eddc041dd4";

    public static final String UMKEY = "5af3bec8b27b0a038600008d";


    public static final String bucket = "shuicheche";
    public static final String endpoint = "http://oss-cn-hangzhou.aliyuncs.com/";

//    public static final String bucket = "jccy";
//    public static final String endpoint = "http://jccy.oss-cn-shenzhen.aliyuncs.com";

    public static final int SELECTED_IMAGE_CODE = 2000;
    public static final int QRCODE_GET_CODE = 2001;
    public static final int UMSHARE_CALLBACK_CODE = 10103;
    public static final int GPS_REQUEST_CODE = 3000;


    public static final String downloadUrl = "http://www.baidu.com";
    public static final String checkUpdateUrl = "http://39.108.173.126/housekeep/api/sysconfig/get?keys=ANDROID_VERSION";


    /**
     * 红包接口
     */
   // public static final String path2="http://192.168.0.14:8080/api/rpacket/getRpacketList?";
    public static final String path2="http://api.shuicheche.com/api/rpacket/getRpacketList?";


    /**
     * 公告接口
     */
   // public static final String notice="http://192.168.0.14:8080/api/customer/headPageDetail?";
    public static final String notice="http://api.shuicheche.com/api/customer/headPageDetail?";

    /**
     * 领红包接口
     */
   //public static final String LHB = "http://192.168.0.14:8080/api/rpacket/robRpacket?";
    public static final String LHB = "http://api.shuicheche.com/api/rpacket/robRpacket?";
}
