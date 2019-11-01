package com.hyphenate.easeui.widget.chatrow;

import android.content.Context;
import android.widget.BaseAdapter;
import android.widget.TextView;

import com.hyphenate.chat.EMMessage;
import com.hyphenate.chat.EMTextMessageBody;
import com.hyphenate.easeui.R;

public class EaseChatRowTextNotice extends EaseChatRow {

	private TextView contentView;

    public EaseChatRowTextNotice(Context context, EMMessage message, int position, BaseAdapter adapter) {
		super(context, message, position, adapter,context);
	}

	@Override
	protected void onInflateView() {
		inflater.inflate(R.layout.ease_group_notice_message, this);
        //group_public_message


	}

	@Override
	protected void onFindViewById() {
        contentView = (TextView) findViewById(R.id.tv_chatcontent);
        EMTextMessageBody txtBody = (EMTextMessageBody) message.getBody();
        contentView.setText(txtBody.getMessage());
       /* if(message.getStringAttribute("ChatPubMessage","0").trim().equals("1")){
            contentView = (TextView) findViewById(R.id.tv_chatcontent);
            EMTextMessageBody txtBody = (EMTextMessageBody) message.getBody();
            Spannable span = EaseSmileUtils.getSmiledText(context, txtBody.getMessage());
            // 设置内容
            contentView.setText(span, BufferType.SPANNABLE);
        }*/
	}

    @Override
    public void onSetUpView() {
        EMTextMessageBody txtBody = (EMTextMessageBody) message.getBody();
        contentView.setText(txtBody.getMessage());
    }


    @Override
    protected void onUpdateView() {
       adapter.notifyDataSetChanged();
    }

    @Override
    protected void onBubbleClick() {
        // TODO Auto-generated method stub
        
    }



}
