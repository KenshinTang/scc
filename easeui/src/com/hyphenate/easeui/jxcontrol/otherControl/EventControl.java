package com.hyphenate.easeui.jxcontrol.otherControl;

import com.hyphenate.easeui.jxcontrol.login.SiginInterface;

import java.util.ArrayList;
import java.util.List;

/**
 *事件总线 观察者
 */

public class EventControl  {
    private static EventControl eventControl;

    private List<BaseEvenControl> eventList=new ArrayList<>();
    private  EaseToJianxinLoginCallBackInterface other_ej;
    private RefreshChatFragmentName refreshChatFragmentName;
    private SendChatFragmentGroupPublicMsg sendChatFragmentGroupPublicMsg;
    private  SyncMyContact syncMyContact;
    private  SyncMyContact syncMyContactAddUser;
    private HangyeHH hh;
    private EaseToJianxinLoginCallBackInterface maillist_otherlogin;
    private EventControl(){}
    private OtherLogin otherLogin;
    private  RefreshChatMsgHAHA refreshChatMsgHAHA;
    private  SearchGroupKey searchGroupKey;
    private UserFragmentInterface userFragmentInterface;
    private GetCurrentDemoHelper getCurrentDemoHelper;
    private RefreshCurrentUser refreshCurrentUser;
    private UploadFileAliyunInterface uploadFileAliyunInterface;
    private WeichatBindToLogin weichatBindToLogin;
    private TempMessageNoticeInterface tempMessageNoticeInterface;
    private WXCallBack wxCallBack;
    private CloseLoginMainPageInterface closeLoginMainPageInterface;
    public synchronized static EventControl getInstance(){
        if(eventControl==null)
            eventControl=new EventControl();
        return eventControl;
    }

    public void setWeichatBindToLogin(WeichatBindToLogin weichatBindToLogin) {
        this.weichatBindToLogin = weichatBindToLogin;
    }

    public WeichatBindToLogin getWeichatBindToLogin() {
        return weichatBindToLogin;
    }

    public void setRefreshCurrentUser(RefreshCurrentUser refreshCurrentUser) {
        this.refreshCurrentUser = refreshCurrentUser;
    }

    public void setCloseLoginMainPageInterface(CloseLoginMainPageInterface closeLoginMainPageInterface) {

        this.closeLoginMainPageInterface=closeLoginMainPageInterface;
    }

    public CloseLoginMainPageInterface getCloseLoginMainPageInterface() {
        return this.closeLoginMainPageInterface;
    }

    public void setWxCallBack(WXCallBack wxCallBack) {
        this.wxCallBack = wxCallBack;
    }

    public WXCallBack getWxCallBack() {
        return wxCallBack;
    }

    public RefreshCurrentUser getRefreshCurrentUser() {
        return refreshCurrentUser;
    }

    public void setUploadFileAliyunInterface(UploadFileAliyunInterface uploadFileAliyunInterface) {
        this.uploadFileAliyunInterface = uploadFileAliyunInterface;
    }

    public UploadFileAliyunInterface getUploadFileAliyunInterface() {
        return uploadFileAliyunInterface;
    }

    public void setTempMessageNoticeInterface(TempMessageNoticeInterface tempMessageNoticeInterface) {
        this.tempMessageNoticeInterface = tempMessageNoticeInterface;
    }

    public TempMessageNoticeInterface getTempMessageNoticeInterface() {
        return tempMessageNoticeInterface;
    }

    //观察者的接口
    public synchronized void setEvent(BaseEvenControl e){
        this.eventList.add(e);
    }
    public synchronized List<BaseEvenControl> getEventList(){return eventList;}
    public synchronized void setOther_ej(EaseToJianxinLoginCallBackInterface other_ej){
        this.other_ej=other_ej;
    }
    public void notifyLoginRefresh(){
        if(other_ej!=null)
            other_ej.chat_refresh();
    }
    //总的刷新方法，根据 方法的code 刷新
    public void refreshMethod(int methodCode){
        switch (methodCode){
            case BaseEvenControl.REFRESH_refreshGroupUser:
                for(BaseEvenControl e:eventList){
                    e.refreshGroupUser();
                }
                break;
            case BaseEvenControl.REFRESH_close_chat_group_page:
                for (BaseEvenControl e:eventList){
                    e.close_chat_group_page();
                }
        }
    }
    //签到接口
    private SiginInterface siginInterface;
    public void setSiginInterface(SiginInterface siginInterface) {
        this.siginInterface = siginInterface;
    }
    public SiginInterface getSiginInterface() {
        return siginInterface;
    }

    public void setRefreshChatFragmentName(RefreshChatFragmentName refreshChatFragmentName) {
        this.refreshChatFragmentName = refreshChatFragmentName;
    }

    public void setGetCurrentDemoHelper(GetCurrentDemoHelper getCurrentDemoHelper) {
        this.getCurrentDemoHelper = getCurrentDemoHelper;
    }

    public GetCurrentDemoHelper getGetCurrentDemoHelper() {
        return getCurrentDemoHelper;
    }

    public RefreshChatFragmentName getRefreshChatFragmentName() {
        return refreshChatFragmentName;
    }

    public void setSendChatFragmentGroupPublicMsg(SendChatFragmentGroupPublicMsg sendChatFragmentGroupPublicMsg) {
        this.sendChatFragmentGroupPublicMsg = sendChatFragmentGroupPublicMsg;
    }

    public void setSyncMyContact(SyncMyContact syncMyContact) {
        this.syncMyContact = syncMyContact;
    }

    public void setSearchGroupKey(SearchGroupKey searchGroupKey) {
        this.searchGroupKey = searchGroupKey;
    }

    public SearchGroupKey getSearchGroupKey() {
        return searchGroupKey;
    }

    public void setRefreshChatMsgHAHA(RefreshChatMsgHAHA refreshChatMsgHAHA) {
        this.refreshChatMsgHAHA = refreshChatMsgHAHA;
    }

    public void setUserFragmentInterface(UserFragmentInterface userFragmentInterface) {
        this.userFragmentInterface = userFragmentInterface;
    }

    public UserFragmentInterface getUserFragmentInterface() {
        return userFragmentInterface;
    }

    public RefreshChatMsgHAHA getRefreshChatMsgHAHA() {
        return refreshChatMsgHAHA;
    }

    public void setOtherLogin(OtherLogin otherLogin) {
        this.otherLogin = otherLogin;
    }

    public OtherLogin getOtherLogin() {
        return otherLogin;
    }

    public void setHh(HangyeHH hh) {
        this.hh = hh;
    }

    public HangyeHH getHh() {
        return hh;
    }

    public SyncMyContact getSyncMyContact() {
        return syncMyContact;
    }

    public SyncMyContact getSyncMyContactAddUser() {
        return syncMyContactAddUser;
    }

    public void setSyncMyContactAddUser(SyncMyContact syncMyContactAddUser) {
        this.syncMyContactAddUser = syncMyContactAddUser;
    }

    public SendChatFragmentGroupPublicMsg getSendChatFragmentGroupPublicMsg() {
        return sendChatFragmentGroupPublicMsg;
    }

    public void setMaillist_otherlogin(EaseToJianxinLoginCallBackInterface maillist_otherlogin) {
        this.maillist_otherlogin = maillist_otherlogin;
    }

    public EaseToJianxinLoginCallBackInterface getMaillist_otherlogin() {
        return maillist_otherlogin;
    }

    public void clear(){
        eventList.clear();
        if (this.other_ej!=null)
            this.other_ej=null;
        if (this.refreshChatFragmentName!=null)
            this.refreshChatFragmentName=null;
        if (this.sendChatFragmentGroupPublicMsg!=null)
            this.sendChatFragmentGroupPublicMsg=null;
        if (this.syncMyContact!=null)
            this.syncMyContact=null;
        if (this.syncMyContactAddUser!=null)
            this.syncMyContactAddUser=null;
        if (this.hh!=null)
            this.hh=null;
        if (this.otherLogin!=null)

        if (this.siginInterface!=null)
            this.siginInterface=null;
        if (this.maillist_otherlogin!=null)
            this.maillist_otherlogin=null;
    }
}
