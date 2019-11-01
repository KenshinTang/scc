package com.hyphenate.easeui.jxcontrol.model;

/**
 * Created by Administrator on 2017/4/6.
 */

public class Constant {
    //http://106.14.20.73:8090/jx/api/customer
    //http://106.14.20.73:8090/jianxin/api/customer/userLogin?phone=13576354829&password=qweaasd
    //119.23.64.158:8080/jx/api/customer  http://www.zyhjianxin.com
    public static final String BASE_URL="http://www.zyhjianxin.com/jx/";
    public static final String URL_LOGIN=BASE_URL+"api/customer/userLogin";
    public static final String URL_REGISTER= BASE_URL+"api/customer/register";
    public static final String URL_SEARCH= BASE_URL+"api/customer/search";
    public static final String URL_GROUP_USER_INFO= BASE_URL+"api/customer/easemobUserIds";
    public static final String GET_USER_INFO= BASE_URL+"api/customer/show";
    public static final String URL_GET_MAIL_LIST= BASE_URL+"api/customer/maillist";
    public static final String URL_IS_SIGIN= BASE_URL+"api/groupsign/show";
    public static final String URL_SIGIN= BASE_URL+"api/groupsign/groupsign";
    public static final String URL_FIND_PASSWORD= BASE_URL+"api/customer/backPassword";
    public static final String URL_UPLOAD_FILE= BASE_URL+"api/imgupload/imgUpload";
    public static final String URL_GROUP_SHOW= BASE_URL+"api/group/show";
    public static final String URL_GROUP_CREATE= BASE_URL+"api/group/saveOrUpdate";
    public static final String URL_REMARK= BASE_URL+"api/userrelation/saveOrModily";
    public static final String URL_HANGYE= BASE_URL+"api/industry/list";
    public static final String URL_HANGYE_SAVE= BASE_URL+"api/industry/save";
    public static final String URL_HANGYE_DICT= BASE_URL+"api/dict/all";
    public static final String URL_GROUP_ADD= BASE_URL+"api/group/add";
    public static final  String WEICHAT_OPENLOGIN=BASE_URL+"api/customer/openLogin";
    public static final  String WEICHAT_BIND=BASE_URL+"api/customer/boundPhone";
    public static final  String URL_SYSTEM_MESSAGE_COUNT=BASE_URL+"api/messsage/count";
    public static final  String URL_VERSION=BASE_URL+"api/versionmanager/version";


    public static final  String URL_MODIFY_PASSWORD=BASE_URL+"api/customer/modifyPassword";
    public static final String URL_SELECT_AREA=BASE_URL+"api/area/show";
    public static final String URL_GUANGGAO=BASE_URL+"api/startupadvert/home";
            //http://www.zyhjianxin.com/jx/api/startupadvert/home
            //http://www.zyhjianxin.com/jx/api/area/show?areaId=110102

    public static final String URL_SEND_VALIEDATE=BASE_URL+"api/customer/sendVerificationCode";
    public static final String  ALIYUN_IMAGE_URL="http://newjianxin.oss-cn-shenzhen.aliyuncs.com/";
    public static final String URL_SELECT_AREAY=BASE_URL+"api/area/show";
//http://www.zyhjianxin.com/jx/api/area/show?areaId=110102


    //常量值
    public static final String SPF_USER_NAME="spf_user_name";
    public static final String SPF_USER_PASSWORD="spf_user_password";
    public static final String SPF_USER_H5="_user";
}
