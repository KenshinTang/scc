package com.hyphenate.easeui.adapter;

import android.content.Context;
import android.text.TextUtils;
import android.util.TypedValue;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.Filter;
import android.widget.RelativeLayout;
import android.widget.TextView;
import android.widget.TextView.BufferType;

import com.hyphenate.chat.EMChatRoom;
import com.hyphenate.chat.EMClient;
import com.hyphenate.chat.EMConversation;
import com.hyphenate.chat.EMConversation.EMConversationType;
import com.hyphenate.chat.EMGroup;
import com.hyphenate.chat.EMMessage;
import com.hyphenate.easeui.R;
import com.hyphenate.easeui.domain.EaseUser;
import com.hyphenate.easeui.jxcontrol.CommonUtils;
import com.hyphenate.easeui.jxcontrol.model.GroupUserInfo;
import com.hyphenate.easeui.jxcontrol.model.UserSession;
import com.hyphenate.easeui.jxcontrol.view.CircleImageView;
import com.hyphenate.easeui.model.EaseAtMessageHelper;
import com.hyphenate.easeui.utils.EaseCommonUtils;
import com.hyphenate.easeui.utils.EaseSmileUtils;
import com.hyphenate.easeui.utils.EaseUserUtils;
import com.hyphenate.easeui.widget.EaseConversationList.EaseConversationListHelper;
import com.hyphenate.util.DateUtils;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * conversation list adapter
 *
 */
public class EaseConversationAdapter extends ArrayAdapter<EMConversation> {
    private static final String TAG = "ChatAllHistoryAdapter";
    private List<EMConversation> conversationList;
    private List<EMConversation> copyConversationList;
    private ConversationFilter conversationFilter;
    private boolean notiyfyByFilter;


    protected int primaryColor;
    protected int secondaryColor;
    protected int timeColor;
    protected int primarySize;
    protected int secondarySize;
    protected float timeSize;
    Map<String,String> map;
    public EaseConversationAdapter(Context context, int resource,
                                   List<EMConversation> objects, Map<String,String> map) {
        super(context, resource, objects);
        conversationList = objects;
        copyConversationList = new ArrayList<EMConversation>();
        copyConversationList.addAll(objects);
        this.map=map;
    }

    @Override
    public int getCount() {
        return conversationList.size();
    }

    @Override
    public EMConversation getItem(int arg0) {
        if (arg0 < conversationList.size()) {
            return conversationList.get(arg0);
        }
        return null;
    }
    public String getTagName(int posion){
        if(posion<conversationList.size()){
            String uid=conversationList.get(posion).conversationId();
            if(map.containsKey(uid) && !TextUtils.isEmpty(map.get(uid))){
                return  map.get(uid);
            }
            EMGroup group = EMClient.getInstance().groupManager().getGroup(uid);
             return group != null ? group.getGroupName() : uid;
        }
        return "匿名用户";
    }

    @Override
    public long getItemId(int position) {
        return position;
    }

    @Override
    public View getView(int position, View convertView, ViewGroup parent) {
        if (convertView == null) {
            convertView = LayoutInflater.from(getContext()).inflate(R.layout.ease_row_chat_history, parent, false);
        }
        ViewHolder holder = (ViewHolder) convertView.getTag();
        if (holder == null) {
            holder = new ViewHolder();
            holder.name = (TextView) convertView.findViewById(R.id.name);
            holder.unreadLabel = (TextView) convertView.findViewById(R.id.unread_msg_number);
            holder.message = (TextView) convertView.findViewById(R.id.message);
            holder.time = (TextView) convertView.findViewById(R.id.time);
            holder.avatar = (CircleImageView) convertView.findViewById(R.id.avatar);
            holder.msgState = convertView.findViewById(R.id.msg_state);
            holder.list_itease_layout = (RelativeLayout) convertView.findViewById(R.id.list_itease_layout);
            holder.motioned = (TextView) convertView.findViewById(R.id.mentioned);
            convertView.setTag(holder);
        }
         holder.list_itease_layout.setBackgroundResource(R.drawable.ease_mm_listitem);

        // get conversation
        EMConversation conversation = getItem(position);
        // get username or group id
        String username = conversation.conversationId();
        
        if (conversation.getType() == EMConversationType.GroupChat) {
            String groupId = conversation.conversationId();
            if(EaseAtMessageHelper.get().hasAtMeMsg(groupId)){
                holder.motioned.setVisibility(View.VISIBLE);
            }else{
                holder.motioned.setVisibility(View.GONE);
            }
            // group message, show group avatar
            holder.avatar.setImageResource(R.drawable.group_info_user);
            EMGroup group = EMClient.getInstance().groupManager().getGroup(username);
            if(map.containsKey(username)&&!TextUtils.isEmpty(map.get(username))){
                holder.name.setText(map.get(username));
            }else {
                holder.name.setText(group != null ? group.getGroupName() : username);
            }

        } else if(conversation.getType() == EMConversationType.ChatRoom){
            holder.avatar.setImageResource(R.drawable.group_info_user);
            EMChatRoom room = EMClient.getInstance().chatroomManager().getChatRoom(username);
            if(map.containsKey(username)&&!TextUtils.isEmpty(map.get(username))){
                holder.name.setText(map.get(username));
            }else {
                holder.name.setText(room != null && !TextUtils.isEmpty(room.getName()) ? room.getName() : username);
            }
            holder.motioned.setVisibility(View.GONE);
        }else {
            if(map.containsKey(username)&&!TextUtils.isEmpty(map.get(username))){
                holder.name.setText(map.get(username));
            }else {
                holder.name.setText("");
//                EaseUserUtils.setUserNick(username, holder.name);
            }
            String head="";
            Map<String,GroupUserInfo> userinfo=UserSession.getInstance().getUserUserInfo();
            if(userinfo!=null&&userinfo.containsKey(username)&&userinfo.get(username)!=null){
                head=userinfo.get(username).getHead();
            }
            if(TextUtils.isEmpty(head)){
               // head=username;
            }

            EaseUserUtils.MailListloadHeadImageView(getContext(), head, holder.avatar, "m");
            holder.motioned.setVisibility(View.GONE);
        }

        if (conversation.getUnreadMsgCount() > 0) {
            // show unread message count
            holder.unreadLabel.setText(String.valueOf(conversation.getUnreadMsgCount()));
            holder.unreadLabel.setVisibility(View.VISIBLE);
        } else {
            holder.unreadLabel.setVisibility(View.INVISIBLE);
        }

        if (conversation.getAllMsgCount() != 0) {
        	// show the content of latest message
            EMMessage lastMessage = conversation.getLastMessage();
            String content = null;
            if(cvsListHelper != null){
                content = cvsListHelper.onSetItemSecondaryText(lastMessage);
                GroupUserInfo user=UserSession.getInstance().getMapGroupUser().get(lastMessage.getFrom());
                if(user!=null){
                    String name=user.getRemark();
                    if(TextUtils.isEmpty(name))
                        name=user.getNickname();
                    if(!CommonUtils.isEmpty(content) &&lastMessage!=null&&!CommonUtils.isEmpty(lastMessage.getFrom()) &&!CommonUtils.isEmpty(name))
                        content=content.replace(lastMessage.getFrom(),name);
                }
            }
            String msg_txt= EaseCommonUtils.getMessageDigest(lastMessage, (this.getContext()));

            if(!TextUtils.isEmpty(msg_txt)){
                if(msg_txt.contains("位置"))
                    msg_txt="[位置]";
                if(msg_txt.contains("签到")||lastMessage.getStringAttribute("isSign","0").equals("1"))
                    msg_txt="[签到]";
                if(msg_txt.contains("环信"))
                    msg_txt=msg_txt.replace("环","建");
            }

            holder.message.setText(EaseSmileUtils.getSmiledText(getContext(),msg_txt),BufferType.SPANNABLE);
            if(content != null){
                holder.message.setText(content);
            }

            String tm = DateUtils.getTimestampString(new Date(lastMessage.getMsgTime()));
            tm = tm.replace("上午","");
            if(tm.indexOf("下午")>-1) {
                tm = tm.replace("下午","");
                String hour = "";
                String re = " (.*):";
                Pattern p = Pattern.compile(re);
                Matcher m = p.matcher(tm);
                while(m.find()){
                    hour = m.group(1);
                }
                int nh = Integer.parseInt(hour);
                if(nh < 12) {
                    nh += 12;
                }
                hour = " " + nh + ":";
                tm = tm.replaceAll(re, hour);
            }
            holder.time.setText(tm);

            if (lastMessage.direct() == EMMessage.Direct.SEND && lastMessage.status() == EMMessage.Status.FAIL) {
                holder.msgState.setVisibility(View.VISIBLE);
            } else {
                holder.msgState.setVisibility(View.GONE);
            }
        }
        

        holder.message.setTextColor(secondaryColor);
        holder.time.setTextColor(timeColor);
        if(primarySize != 0)
            holder.name.setTextSize(TypedValue.COMPLEX_UNIT_PX, primarySize);
        if(secondarySize != 0)
            holder.message.setTextSize(TypedValue.COMPLEX_UNIT_PX, secondarySize);
        if(timeSize != 0)
            holder.time.setTextSize(TypedValue.COMPLEX_UNIT_PX, timeSize);

        return convertView;
    }
    
    @Override
    public void notifyDataSetChanged() {
        super.notifyDataSetChanged();
        if(!notiyfyByFilter){
            copyConversationList.clear();
            copyConversationList.addAll(conversationList);
            notiyfyByFilter = false;
        }
    }
    
    @Override
    public Filter getFilter() {
        if (conversationFilter == null) {
            conversationFilter = new ConversationFilter(conversationList);
        }
        return conversationFilter;
    }
    

    public void setPrimaryColor(int primaryColor) {
        this.primaryColor = primaryColor;
    }

    public void setSecondaryColor(int secondaryColor) {
        this.secondaryColor = secondaryColor;
    }

    public void setTimeColor(int timeColor) {
        this.timeColor = timeColor;
    }

    public void setPrimarySize(int primarySize) {
        this.primarySize = primarySize;
    }

    public void setSecondarySize(int secondarySize) {
        this.secondarySize = secondarySize;
    }

    public void setTimeSize(float timeSize) {
        this.timeSize = timeSize;
    }


    private class ConversationFilter extends Filter {
        List<EMConversation> mOriginalValues = null;

        public ConversationFilter(List<EMConversation> mList) {
            mOriginalValues = mList;
        }

        @Override
        protected FilterResults performFiltering(CharSequence prefix) {
            FilterResults results = new FilterResults();

            if (mOriginalValues == null) {
                mOriginalValues = new ArrayList<EMConversation>();
            }
            if (prefix == null || prefix.length() == 0) {
                results.values = copyConversationList;
                results.count = copyConversationList.size();
            } else {
                String prefixString = prefix.toString();
                final int count = mOriginalValues.size();
                final ArrayList<EMConversation> newValues = new ArrayList<EMConversation>();

                for (int i = 0; i < count; i++) {
                    final EMConversation value = mOriginalValues.get(i);
                    String username = value.conversationId();
                    
                    EMGroup group = EMClient.getInstance().groupManager().getGroup(username);
                    if(group != null){
                        username = group.getGroupName();
                    }else{
                        EaseUser user = EaseUserUtils.getUserInfo(username);
                        // TODO: not support Nick anymore
//                        if(user != null && user.getNick() != null)
//                            username = user.getNick();
                    }

                    // First match against the whole ,non-splitted value
                    if (username.startsWith(prefixString)) {
                        newValues.add(value);
                    } else{
                          final String[] words = username.split(" ");
                            final int wordCount = words.length;

                            // Start at index 0, in case valueText starts with space(s)
                        for (String word : words) {
                            if (word.startsWith(prefixString)) {
                                newValues.add(value);
                                break;
                            }
                        }
                    }
                }

                results.values = newValues;
                results.count = newValues.size();
            }
            return results;
        }

        @Override
        protected void publishResults(CharSequence constraint, FilterResults results) {
            conversationList.clear();
            if (results.values != null) {
                conversationList.addAll((List<EMConversation>) results.values);
            }
            if (results.count > 0) {
                notiyfyByFilter = true;
                notifyDataSetChanged();
            } else {
                notifyDataSetInvalidated();
            }
        }
    }

    private EaseConversationListHelper cvsListHelper;

    public void setCvsListHelper(EaseConversationListHelper cvsListHelper){
        this.cvsListHelper = cvsListHelper;
    }
    
    private static class ViewHolder {
        /** who you chat with */
        TextView name;
        /** unread message count */
        TextView unreadLabel;
        /** content of last message */
        TextView message;
        /** time of last message */
        TextView time;
        /** avatar */
        CircleImageView avatar;
        /** status of last message */
        View msgState;
        /** layout */
        RelativeLayout list_itease_layout;
        TextView motioned;
    }
}

