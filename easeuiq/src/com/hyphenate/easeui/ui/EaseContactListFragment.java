/**
 * Copyright (C) 2016 Hyphenate Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.hyphenate.easeui.ui;

import android.app.Activity;
import android.app.ProgressDialog;
import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.text.Editable;
import android.text.TextWatcher;
import android.view.LayoutInflater;
import android.view.MotionEvent;
import android.view.View;
import android.view.View.OnClickListener;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.Button;
import android.widget.EditText;
import android.widget.FrameLayout;
import android.widget.ImageButton;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.Toast;

import com.bumptech.glide.Glide;
import com.hyphenate.EMConnectionListener;
import com.hyphenate.EMError;
import com.hyphenate.EMValueCallBack;
import com.hyphenate.chat.EMClient;
import com.hyphenate.easeui.R;
import com.hyphenate.easeui.domain.EaseUser;
import com.hyphenate.easeui.jxcontrol.CommonUtils;
import com.hyphenate.easeui.jxcontrol.model.SPFUtils;
import com.hyphenate.easeui.jxcontrol.model.UserSession;
import com.hyphenate.easeui.jxcontrol.otherControl.CallBackControlInterface;
import com.hyphenate.easeui.jxcontrol.otherControl.EventControl;
import com.hyphenate.easeui.jxcontrol.view.XListView;
import com.hyphenate.easeui.widget.EaseContactList;
import com.hyphenate.exceptions.HyphenateException;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.Map;

import static com.hyphenate.easeui.R.id.jx_chat_and_mail_title_name;
import static com.hyphenate.easeui.R.id.jx_chat_and_mail_title_right_image;

/**
 * contact list
 * 
 */
public class EaseContactListFragment extends EaseBaseFragment {
    private static final String TAG = "EaseContactListFragment";
    protected List<EaseUser> contactList;
    protected XListView listView;
    protected boolean hidden;
    protected ImageButton clearSearch;
    protected EditText query;
    TextView txt_search_name;
    protected Handler handler = new Handler();
    protected EaseUser toBeProcessUser;
    protected String toBeProcessUsername;
    protected EaseContactList contactListLayout;

    protected boolean isConflict;
    protected FrameLayout contentContainer;
    
    private Map<String, EaseUser> contactsMap;

    private LinearLayout ll_no_login;
    private Button btn_login;
    ImageView  mmjx_chat_and_mail_title_right_image,back;
    View search_bar_view;
    TextView tt;
    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        View mview=inflater.inflate(R.layout.ease_fragment_contact_list, container, false);
        back=(ImageView)mview.findViewById(R.id.im_back);
        tt=((TextView)mview.findViewById(jx_chat_and_mail_title_name));
        tt.setText("通讯录");
        CommonUtils.bold(tt);
           mmjx_chat_and_mail_title_right_image= ((ImageView)mview.findViewById(jx_chat_and_mail_title_right_image));
       // mmjx_chat_and_mail_title_right_image.setBackgroundResource(R.drawable.catact_add_1);
        mmjx_chat_and_mail_title_right_image.setClickable(true);

        mmjx_chat_and_mail_title_right_image.setOnClickListener(catactOnclik);
        back.setOnClickListener(backonclik);
        ll_no_login=(LinearLayout)mview.findViewById(R.id.ll_no_login);
        btn_login=(Button)mview.findViewById(R.id.btn_login);
        search_bar_view= mview.findViewById(R.id.search_bar_view);
        return mview;
    }




        OnClickListener backonclik = new OnClickListener() {
        @Override
        public void onClick(View v) {
            if(callBackControlInterface!=null)
                callBackControlInterface.callbackwindows(null);

        }
    };
    OnClickListener catactOnclik=new OnClickListener() {
        @Override
        public void onClick(View v) {
            if(callBackControlInterface!=null)
                callBackControlInterface.callBackWindow(null);
        }
    };
    CallBackControlInterface callBackControlInterface;

    public void setCallBackControlInterface(CallBackControlInterface callBackControlInterface) {
        this.callBackControlInterface = callBackControlInterface;
    }

    @Override
    public void onActivityCreated(Bundle savedInstanceState) {
    	//to avoid crash when open app after long time stay in background after user logged into another device
        if(savedInstanceState != null && savedInstanceState.getBoolean("isConflict", false))
            return;
        super.onActivityCreated(savedInstanceState);
    }

    @Override
    protected void initView() {
        contentContainer = (FrameLayout) getView().findViewById(R.id.content_container);
        
        contactListLayout = (EaseContactList) getView().findViewById(R.id.contact_list);        
        listView = contactListLayout.getListView();
        listView.setPullLoadEnable(false);
        listView.setXListViewListener(new XListView.IXListViewListener() {
            @Override
            public void onRefresh() {
                EMClient.getInstance().contactManager().aysncGetAllContactsFromServer(new EMValueCallBack<List<String>>() {
                    @Override
                    public void onSuccess(final List<String> list) {
                        if(list!=null&&list.size()>0){

                            getActivity().runOnUiThread(new Runnable() {
                                @Override
                                public void run() {
                                    tt.setText("通讯录（"+list.size()+"）");
                                }
                            });
                            contactList=new ArrayList<EaseUser>();
                            for(String eid:list){
                                EaseUser user=new EaseUser(eid);
                                user.setNick(eid);
                                contactList.add(user);
                            }
                            contactListLayout.init(contactList);
                        }
                    }

                    @Override
                    public void onError(int i, String s) {

                    }
                });

            }

            @Override
            public void onLoadMore() {

            }
        });
        //search
        query = (EditText) getView().findViewById(R.id.query);
        txt_search_name=(TextView)getView().findViewById(R.id.txt_search_name123);
        clearSearch = (ImageButton) getView().findViewById(R.id.search_clear);
        
        myotherlogin();

    }
    private void myotherlogin(){
        Activity a = getActivity();
        if(a==null)
            return;
        getActivity().runOnUiThread(new Runnable() {
            @Override
            public void run() {
                //未登录
                if(UserSession.getInstance().getUser()==null ){
                    ll_no_login.setVisibility(View.VISIBLE);
                    btn_login.setOnClickListener(new OnClickListener() {
                        @Override
                        public void onClick(View v) {
                            if( EventControl.getInstance().getMaillist_otherlogin()!=null){
                                SPFUtils.saveInfo(getActivity(),"type","login");
                                EventControl.getInstance().getMaillist_otherlogin().easeUiToLogin();
                            }
                        }
                    });
                    contactListLayout.setVisibility(View.GONE);
                    mmjx_chat_and_mail_title_right_image.setVisibility(View.GONE);
                    search_bar_view.setVisibility(View.GONE);

                }else {
                    contactListLayout.setVisibility(View.VISIBLE);
                    mmjx_chat_and_mail_title_right_image.setVisibility(View.VISIBLE);
                    ll_no_login.setVisibility(View.GONE);
                    search_bar_view.setVisibility(View.VISIBLE);
                }
            }
        });
    }

    @Override
    protected void setUpView() {
        EMClient.getInstance().addConnectionListener(connectionListener);
        EMClient.getInstance().contactManager().aysncGetAllContactsFromServer(new EMValueCallBack<List<String>>() {
            @Override
            public void onSuccess(final List<String> list) {

                contactList=new ArrayList<EaseUser>();
                if(list!=null&&list.size()>0){
                    getActivity().runOnUiThread(new Runnable() {
                        @Override
                        public void run() {
                            tt.setText("通讯录（"+list.size()+"）");
                        }
                    });
                    for(String eid:list){
                        EaseUser user=new EaseUser(eid);
                        user.setNick(eid);
                        contactList.add(user);
                    }
                }
                contactListLayout.init(contactList);

                if(listItemClickListener != null){
                    listView.setOnItemClickListener(new AdapterView.OnItemClickListener() {

                        @Override
                        public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                            EaseUser user = (EaseUser)listView.getItemAtPosition(position);
                            listItemClickListener.onListItemClicked(user);
                        }
                    });
                }

                query.addTextChangedListener(new TextWatcher() {
                    public void onTextChanged(CharSequence s, int start, int before, int count) {

                        if (s.length() > 0) {
                            txt_search_name.setVisibility(View.GONE);
                            clearSearch.setVisibility(View.VISIBLE);
                        } else {
                            txt_search_name.setVisibility(View.VISIBLE);
                            clearSearch.setVisibility(View.INVISIBLE);
                        }
                        contactListLayout.myfilter(s.length()>0?s.toString():null);
                    }

                    public void beforeTextChanged(CharSequence s, int start, int count, int after) {
                    }

                    public void afterTextChanged(Editable s) {
                    }
                });
                clearSearch.setOnClickListener(new OnClickListener() {
                    @Override
                    public void onClick(View v) {
                        query.getText().clear();
                        contactListLayout.myfilter(null);
                        hideSoftKeyboard();
                    }
                });

                listView.setOnTouchListener(new View.OnTouchListener() {

                    @Override
                    public boolean onTouch(View v, MotionEvent event) {
                        hideSoftKeyboard();
                        return false;
                    }
                });
            }

            @Override
            public void onError(int i, String s) {

            }
        });

        
    }

    @Override
    public void onHiddenChanged(boolean hidden) {
        super.onHiddenChanged(hidden);
        this.hidden = hidden;
        if (!hidden) {
            refresh();
        }
    }

    private boolean firstIn = true;
    @Override
    public void onResume() {
        super.onResume();
        if(firstIn) {
            firstIn = false;
        } else {
            if (!hidden) {
                refresh();
            }
        }
    }

    public void unreadMsg(){

    }


    /**
     * move user to blacklist
     */
    protected void moveToBlacklist(final String username){
        final ProgressDialog pd = new ProgressDialog(getActivity());
        String st1 = getResources().getString(R.string.Is_moved_into_blacklist);
        final String st2 = getResources().getString(R.string.Move_into_blacklist_success);
        final String st3 = getResources().getString(R.string.Move_into_blacklist_failure);
        pd.setMessage(st1);
        pd.setCanceledOnTouchOutside(false);
        pd.show();
        new Thread(new Runnable() {
            public void run() {
                try {
                    //move to blacklist
                    EMClient.getInstance().contactManager().addUserToBlackList(username,false);
                    getActivity().runOnUiThread(new Runnable() {
                        public void run() {
                            pd.dismiss();
                            Toast.makeText(getActivity(), st2, Toast.LENGTH_SHORT).show();
                            refresh();
                        }
                    });
                } catch (HyphenateException e) {
                    e.printStackTrace();
                    getActivity().runOnUiThread(new Runnable() {
                        public void run() {
                            pd.dismiss();
                            Toast.makeText(getActivity(), st3, Toast.LENGTH_SHORT).show();
                        }
                    });
                }
            }
        }).start();
        
    }
    
    // refresh ui
    public void refresh() {
        myotherlogin();
        loadFiends();
    }
    private void loadFiends(){
        EMClient.getInstance().contactManager().aysncGetAllContactsFromServer(new EMValueCallBack<List<String>>() {
            @Override
            public void onSuccess(final List<String> list) {
                if(list!=null&&list.size()>0){
                    getActivity().runOnUiThread(new Runnable() {
                        @Override
                        public void run() {
                            tt.setText("通讯录（"+list.size()+"）");
                        }
                    });
                    contactList=new ArrayList<EaseUser>();
                    for(String eid:list){
                        EaseUser user=new EaseUser(eid);
                        user.setNick(eid);
                        contactList.add(user);
                    }
                    contactListLayout.init(contactList);
                }
            }

            @Override
            public void onError(int i, String s) {

            }
        });
    }
    

    @Override
    public void onDestroy() {
        
        EMClient.getInstance().removeConnectionListener(connectionListener);
        super.onDestroy();
    }
    

    /**
     * get contact list and sort, will filter out users in blacklist
     */
    protected void getContactList() {
        if(contactsMap == null){
            return;
        }
        EMClient.getInstance().contactManager().aysncGetAllContactsFromServer(new EMValueCallBack<List<String>>() {
            @Override
            public void onSuccess(List<String> list) {
                contactList=new ArrayList<EaseUser>();
                if(list!=null &&list.size()>0){
                    for(String eid:list){
                        EaseUser user=new EaseUser(eid);
                        user.setNick(eid);
                        contactList.add(user);
                    }
                }
                // sorting
                Collections.sort(contactList, new Comparator<EaseUser>() {

                    @Override
                    public int compare(EaseUser lhs, EaseUser rhs) {
                        if(lhs.getInitialLetter().equals(rhs.getInitialLetter())){
                            return lhs.getNick().compareTo(rhs.getNick());
                        }else{
                            if("#".equals(lhs.getInitialLetter())){
                                return 1;
                            }else if("#".equals(rhs.getInitialLetter())){
                                return -1;
                            }
                            return lhs.getInitialLetter().compareTo(rhs.getInitialLetter());
                        }

                    }
                });
            }
            @Override
            public void onError(int i, String s) {
            }
        });

    }
    
    
    
    protected EMConnectionListener connectionListener = new EMConnectionListener() {
        
        @Override
        public void onDisconnected(int error) {
            if (error == EMError.USER_REMOVED || error == EMError.USER_LOGIN_ANOTHER_DEVICE || error == EMError.SERVER_SERVICE_RESTRICTED) {
                isConflict = true;
            } else {
                getActivity().runOnUiThread(new Runnable() {
                    public void run() {
                        onConnectionDisconnected();
                    }

                });
            }
        }
        
        @Override
        public void onConnected() {
            getActivity().runOnUiThread(new Runnable() {
                public void run() {
                    onConnectionConnected();
                }

            });
        }
    };
    private EaseContactListItemClickListener listItemClickListener;
    
    
    protected void onConnectionDisconnected() {
        
    }
    
    protected void onConnectionConnected() {
        
    }
    
    /**
     * set contacts map, key is the hyphenate id
     * @param contactsMap
     */
    public void setContactsMap(Map<String, EaseUser> contactsMap){
        this.contactsMap = contactsMap;
    }
    
    public interface EaseContactListItemClickListener {
        /**
         * on click event for item in contact list 
         * @param user --the user of item
         */
        void onListItemClicked(EaseUser user);
    }
    
    /**
     * set contact list item click listener
     * @param listItemClickListener
     */
    public void setContactListItemClickListener(EaseContactListItemClickListener listItemClickListener){
        this.listItemClickListener = listItemClickListener;
    }
    
}
