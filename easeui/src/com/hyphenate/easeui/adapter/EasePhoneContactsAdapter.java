package com.hyphenate.easeui.adapter;

import android.content.Context;
import android.graphics.drawable.Drawable;
import android.text.TextUtils;
import android.util.SparseIntArray;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.Filter;
import android.widget.SectionIndexer;
import android.widget.TextView;

import com.hyphenate.easeui.R;
import com.hyphenate.easeui.domain.EaseUser;
import com.hyphenate.easeui.jxcontrol.model.GroupUserInfo;
import com.hyphenate.easeui.jxcontrol.model.UserSession;
import com.hyphenate.easeui.jxcontrol.view.CircleImageView;
import com.hyphenate.easeui.utils.EaseUserUtils;
import com.hyphenate.util.EMLog;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class EasePhoneContactsAdapter extends ArrayAdapter<EaseUser> implements SectionIndexer {
    CallBackOpenFriends callBackOpenFriends;
    public interface  CallBackOpenFriends {
        void openFriends(int postion);
    }

    private static final String TAG = "ContactAdapter";
    List<String> list;
    List<EaseUser> userList;
    List<EaseUser> copyUserList;
    private LayoutInflater layoutInflater;
    private SparseIntArray positionOfSection;
    private SparseIntArray sectionOfPosition;
    private int res;
    private MyFilter myFilter;
    private boolean notiyfyByFilter;
    List<GroupUserInfo> groupUserInfos;
    Map<String,GroupUserInfo> mapuser=new HashMap<>();
    public interface  AddUserInterface{
        public void adduser( String user);
    }
    private AddUserInterface addUserInterface;

    public void setAddUserInterface(AddUserInterface addUserInterface) {
        this.addUserInterface = addUserInterface;
    }

    Context mc;
    Context appContext;
    public EasePhoneContactsAdapter(Context context, int resource, List<EaseUser> objects, List<GroupUserInfo> groupUserInfos, CallBackOpenFriends callBackOpenFriends,Context ac) {
        super(context, resource, objects);
        this.res = resource;
        mc=context;
        this.callBackOpenFriends=callBackOpenFriends;
        this.userList = objects;
        copyUserList = new ArrayList<EaseUser>();
        copyUserList.addAll(objects);
        layoutInflater = LayoutInflater.from(context);
        if(groupUserInfos!=null)
        {
            this.groupUserInfos=groupUserInfos;
            for(int i=0;i<groupUserInfos.size();i++){
                GroupUserInfo tempuser= groupUserInfos.get(i);
                mapuser.put(tempuser.getEasemobname(),tempuser);
            }
        }
        this.appContext = ac;
    }
    public void setListGroupUsers(List<GroupUserInfo> groupUserInfos){
        mapuser.clear();
        if(groupUserInfos!=null)
        {
            this.groupUserInfos=groupUserInfos;
            for(int i=0;i<groupUserInfos.size();i++){
                GroupUserInfo tempuser= groupUserInfos.get(i);
                mapuser.put(tempuser.getEasemobname(),tempuser);
            }
        }
    }
    
    private static class ViewHolder {
        CircleImageView avatar;
        TextView nameView;
        TextView headerView;
        TextView add_user_cotacts_txt;
        Button add_user_cotact_btn;
    }
    @Override
    public View getView(final int position, View convertView, ViewGroup parent) {
        ViewHolder holder;
        if(convertView == null){
            holder = new ViewHolder();
            convertView = layoutInflater.inflate(res, null);
            holder.avatar = (CircleImageView) convertView.findViewById(R.id.avatar);
            holder.nameView = (TextView) convertView.findViewById(R.id.myname);
            holder.headerView = (TextView) convertView.findViewById(R.id.header);
            holder.add_user_cotacts_txt=(TextView)convertView.findViewById(R.id.add_user_cotacts_txt);
            holder.add_user_cotact_btn=(Button)convertView.findViewById(R.id.add_user_cotact_btn);

            convertView.setTag(holder);
        }else{
            holder = (ViewHolder) convertView.getTag();
        }
        convertView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                callBackOpenFriends.openFriends(position);
            }
        });
        final EaseUser user = getItem(position);
        String _uname=user.getUsername();
        String username = _uname;
        Map<String,GroupUserInfo>userInfoMap=UserSession.getInstance().getUserUserInfo();
        if(userInfoMap.containsKey(user.getMyeaseuserid())){
            username=userInfoMap.get(user.getMyeaseuserid()).getRemark();
        }
        holder.nameView.setText(TextUtils.isEmpty(username)?_uname:username);
        holder.nameView.setVisibility(View.VISIBLE);
        final GroupUserInfo userinfo= mapuser.get(user.getMyeaseuserid());
        if(userinfo==null||!userinfo.getCurrentUserStateAradayAdd()){
            holder.add_user_cotacts_txt.setVisibility(View.GONE);
            holder.add_user_cotact_btn.setVisibility(View.VISIBLE);
            holder.add_user_cotact_btn.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    if(addUserInterface!=null ){
                        GroupUserInfo p= mapuser.get(user.getMyeaseuserid());
                        if(p!=null){
                            addUserInterface.adduser(user.getMyeaseuserid());
                        }
                    }
                }
            });
        }else if(userinfo!=null&&userinfo.getCurrentUserStateAradayAdd()){
            holder.add_user_cotacts_txt.setVisibility(View.VISIBLE);
            holder.add_user_cotact_btn.setVisibility(View.GONE);

        }
        String header = user.getMylatter();
        if (position == 0 || header != null && !header.equals(getItem(position - 1).getMylatter())) {
            if (TextUtils.isEmpty(header)) {
                holder.headerView.setVisibility(View.GONE);
            } else {
                holder.headerView.setVisibility(View.VISIBLE);
                holder.headerView.setText(header);
            }
        } else {
            holder.headerView.setVisibility(View.GONE);
        }
        EaseUserUtils.MailListloadHeadCircleImageView(appContext,user.getMyhead(),holder.avatar,"m");
        return convertView;
    }
    
    @Override
    public EaseUser getItem(int position) {
        return super.getItem(position);
    }
    
    @Override
    public int getCount() {
        return super.getCount();
    }

    @Override
    public int getPositionForSection(int section) {
        return positionOfSection.get(section);
    }

    @Override
    public int getSectionForPosition(int position) {
        return sectionOfPosition.get(position);
    }
    
    @Override
    public Object[] getSections() {
        positionOfSection = new SparseIntArray();
        sectionOfPosition = new SparseIntArray();
        int count = getCount();
        list = new ArrayList<String>();
        list.add(getContext().getString(R.string.search_header));
        positionOfSection.put(0, 0);
        sectionOfPosition.put(0, 0);
        for (int i = 1; i < count; i++) {

            String letter = getItem(i).getInitialLetter();
            int section = list.size() - 1;
            if (list.get(section) != null && !list.get(section).equals(letter)) {
                list.add(letter);
                section++;
                positionOfSection.put(section, i);
            }
            sectionOfPosition.put(i, section);
        }
        return list.toArray(new String[list.size()]);
    }
    
    @Override
    public Filter getFilter() {
        if(myFilter==null){
            myFilter = new MyFilter(userList);
        }
        return myFilter;
    }
    
    protected class  MyFilter extends Filter {
        List<EaseUser> mOriginalList = null;
        
        public MyFilter(List<EaseUser> myList) {
            this.mOriginalList = myList;
        }

        @Override
        protected synchronized FilterResults performFiltering(CharSequence prefix) {
            FilterResults results = new FilterResults();
            if(mOriginalList==null){
                mOriginalList = new ArrayList<EaseUser>();
            }
            EMLog.d(TAG, "contacts original size: " + mOriginalList.size());
            EMLog.d(TAG, "contacts copy size: " + copyUserList.size());
            
            if(prefix==null || prefix.length()==0){
                results.values = copyUserList;
                results.count = copyUserList.size();
            }else{
                String prefixString = prefix.toString();
                final int count = mOriginalList.size();
                final ArrayList<EaseUser> newValues = new ArrayList<EaseUser>();
                for(int i=0;i<count;i++){
                    final EaseUser user = mOriginalList.get(i);
                    String username = user.getUsername();
                    
                    if(username.startsWith(prefixString)){
                        newValues.add(user);
                    }
                    else{
                         final String[] words = username.split(" ");
                         final int wordCount = words.length;
    
                         // Start at index 0, in case valueText starts with space(s)
                        for (String word : words) {
                            if (word.startsWith(prefixString)) {
                                newValues.add(user);
                                break;
                            }
                        }
                    }
                }
                results.values=newValues;
                results.count=newValues.size();
            }
            EMLog.d(TAG, "contacts filter results size: " + results.count);
            return results;
        }

        @Override
        protected synchronized void publishResults(CharSequence constraint,
                FilterResults results) {
            userList.clear();
            userList.addAll((List<EaseUser>)results.values);
            EMLog.d(TAG, "publish contacts filter results size: " + results.count);
            if (results.count > 0) {
                notiyfyByFilter = true;
                notifyDataSetChanged();
                notiyfyByFilter = false;
            } else {
                notifyDataSetInvalidated();
            }
        }
    }
    
    
    @Override
    public void notifyDataSetChanged() {
        super.notifyDataSetChanged();
        if(!notiyfyByFilter){
            copyUserList.clear();
            copyUserList.addAll(userList);
        }
    }
    
    protected int primaryColor;
    protected int primarySize;
    protected Drawable initialLetterBg;
    protected int initialLetterColor;

    public EasePhoneContactsAdapter setPrimaryColor(int primaryColor) {
        this.primaryColor = primaryColor;
        return this;
    }


    public EasePhoneContactsAdapter setPrimarySize(int primarySize) {
        this.primarySize = primarySize;
        return this;
    }

    public EasePhoneContactsAdapter setInitialLetterBg(Drawable initialLetterBg) {
        this.initialLetterBg = initialLetterBg;
        return this;
    }

    public EasePhoneContactsAdapter setInitialLetterColor(int initialLetterColor) {
        this.initialLetterColor = initialLetterColor;
        return this;
    }


}
