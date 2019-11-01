package com.hyphenate.easeui.adapter;

import android.content.Context;
import android.text.TextUtils;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.TextView;

import com.hyphenate.easeui.R;
import com.hyphenate.easeui.domain.EaseUser;
import com.hyphenate.easeui.jxcontrol.model.UserSession;
import com.hyphenate.easeui.jxcontrol.view.CircleImageView;
import com.hyphenate.easeui.utils.EaseUserUtils;

import java.util.ArrayList;
import java.util.List;

public class EaseMyMailListContactAdapterNew extends BaseAdapter {
    private static final String TAG = "ContactAdapter";
    List<EaseUser> userList;
    private LayoutInflater layoutInflater;
    private int res;
    Context context;
    List<String> stringList;
    List<EaseUser>  temp_select_user;
    public EaseMyMailListContactAdapterNew(Context context, int resource, List<EaseUser> objects ) {
        this.res = resource;
        this.userList = objects;
        layoutInflater = LayoutInflater.from(context);
        this.context=context;
        stringList=new ArrayList<>();
    }

    public List<String> myLatterList(){
       if(stringList.size()>0)
           return stringList;
        for(EaseUser e:userList){
            if(!stringList.contains(e.getMylatter()))
                stringList.add(e.getMylatter());
        }
        return stringList;
    }
    
    private static class ViewHolder {
        CircleImageView avatar;
        TextView nameView;
        TextView headerView;
    }
    public void setData(List<EaseUser> data){
        userList.clear();
        userList.addAll(data);
        notifyDataSetChanged();
    }
    public void myFilter(String name){
        if(temp_select_user==null ||  temp_select_user.size()==0){
            temp_select_user=new ArrayList<>();
            temp_select_user.addAll(userList);
        }

        if(TextUtils.isEmpty(name)){
            if(temp_select_user!=null)
            {
                userList.clear();
                userList.addAll(temp_select_user);
                notifyDataSetChanged();
            }
        } else {
            List<EaseUser> tp=new ArrayList<>();
            for(EaseUser user:temp_select_user){
                String temp_name=user.getMyName();
                if(temp_name.indexOf(name.trim())!=-1){
                    tp.add(user);
                }
            }
            UserSession.getInstance().setTempContactList(tp);
                userList.clear();
                userList.addAll(tp);
                notifyDataSetChanged();

        }

    }
    @Override
    public int getCount() {
        return userList.size();
    }

    @Override
    public EaseUser getItem(int position) {
        return userList.get(position);
    }

    @Override
    public long getItemId(int position) {
        return position;
    }

    @Override
    public View getView(int position, View convertView, ViewGroup parent) {
        ViewHolder holder;
        if(convertView == null){
            holder = new ViewHolder();
            if(res == 0)
                convertView = layoutInflater.inflate(R.layout.ease_row__my_contact, parent, false);
            else
                convertView = layoutInflater.inflate(res, null);
            holder.avatar = (CircleImageView) convertView.findViewById(R.id.avatar);
            holder.nameView = (TextView) convertView.findViewById(R.id.name);
            holder.headerView = (TextView) convertView.findViewById(R.id.header);
            convertView.setTag(holder);
        }else{
            holder = (ViewHolder) convertView.getTag();
        }
        
        EaseUser user = getItem(position);
        String header = user.getMylatter();
        if(position==0){
            holder.headerView.setVisibility(View.VISIBLE);
            holder.headerView.setText(header);
        }else {
            String lastheader=getItem(position - 1).getMylatter();
            if(header!=null && lastheader!=null && lastheader.trim().equals(header.trim())){
                holder.headerView.setVisibility(View.GONE);
            }else {
                holder.headerView.setVisibility(View.VISIBLE);
                holder.headerView.setText(header);
            }
        }
        holder.nameView.setText(user.getMyName());
        EaseUserUtils.MailListloadHeadImageView(context,user.getMyhead(),holder.avatar,"m");
        return convertView;
    }
}
