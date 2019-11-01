package com.hyphenate.easeui.utils;

import android.content.Context;
import android.graphics.Bitmap;
import android.text.TextUtils;
import android.widget.ImageView;
import android.widget.TextView;

import com.bumptech.glide.Glide;
import com.bumptech.glide.load.engine.DiskCacheStrategy;
import com.bumptech.glide.request.animation.GlideAnimation;
import com.bumptech.glide.request.target.SimpleTarget;
import com.hyphenate.easeui.controller.EaseUI;
import com.hyphenate.easeui.controller.EaseUI.EaseUserProfileProvider;
import com.hyphenate.easeui.domain.EaseUser;
import com.hyphenate.easeui.jxcontrol.model.Constant;
import com.hyphenate.easeui.jxcontrol.view.CircleImageView;

import java.text.SimpleDateFormat;

import static com.hyphenate.easeui.R.drawable.defalutuserhead;
//defalutuserhead ease_default_avatar
public class EaseUserUtils {

    static EaseUserProfileProvider userProvider;
    
    static {
        userProvider = EaseUI.getInstance().getUserProfileProvider();
    }
    
    /**
     * get EaseUser according username
     * @param username
     * @return
     */
    public static EaseUser getUserInfo(String username){
        if(userProvider != null)
            return userProvider.getUser(username);
        
        return null;
    }
    
    /**
     * set user avatar
     * @param username
     */
    public static void setUserAvatar(Context context, String username, final ImageView imageView){
        if(username!=null && username.indexOf(".jpg")>-1) {
            if(!username.startsWith("http"))
                username = Constant.ALIYUN_IMAGE_URL + username;
            if(username.indexOf(".jpg/")<=-1)
                username += "/120";
            Glide.with(context).load(username).placeholder(defalutuserhead).into(imageView);
        } else {
            if(username!=null && username.length()>0) {
                EaseUser user = getUserInfo(username);
                if(user != null && user.getAvatar() != null){
                    try {
                        int avatarResId = Integer.parseInt(user.getAvatar());
                        Glide.with(context).load(avatarResId).into(imageView);
                    } catch (Exception e) {
                        //use default avatar
                        Glide.with(context).load(user.getAvatar()).asBitmap().diskCacheStrategy(DiskCacheStrategy.ALL).placeholder(defalutuserhead).into(new SimpleTarget<Bitmap>() {
                            @Override
                            public void onResourceReady(Bitmap bitmap, GlideAnimation<? super Bitmap> glideAnimation) {
                                imageView.setImageBitmap(bitmap);
                            }
                        });
                    }
                    return;
                }
            }
            Glide.with(context).load(defalutuserhead).into(imageView);
        }
    }
    public static void MailListloadHeadCircleImageView(Context context, String url, final CircleImageView imageView, String type){
        try{
            if(url==null || TextUtils.isEmpty(url)||"null".trim().equals(url.trim())||url.trim().toLowerCase().contains("null")) {
                Glide.with(context).load(defalutuserhead).into(imageView);
            }
            else {
                if(!url.startsWith("http")) {
                    url = Constant.ALIYUN_IMAGE_URL+url;
                    if(type != null) {
                        if(type.equals("m")) {
                            url += "/120";
                        }
                    }
                }
                if(url.startsWith("http://newjianxin.oss-cn-shenzhen.aliyuncs.com") && type != null && type.equals("m") && url.indexOf("/120")<=-1)
                    url += "/120";
                Glide.with(context).load(url).asBitmap().placeholder(defalutuserhead).into(new SimpleTarget<Bitmap>() {
                    @Override
                    public void onResourceReady(Bitmap bitmap, GlideAnimation<? super Bitmap> glideAnimation) {
                        imageView.setImageBitmap(bitmap);
                    }
                });
            }
            return;
        }catch (Exception e){
            e.printStackTrace();
        }
        final Context nc = context;
        final ImageView im = imageView;
        imageView.post(new Runnable() {
            @Override
            public void run() {
                Glide.with(nc).load(defalutuserhead).into(im);
            }
        });
    }
    public static void MailListloadHeadImageView(Context context, String url, final ImageView imageView, String ...type){
        try{
            if(url == null || TextUtils.isEmpty(url)||"null".trim().equals(url.trim())) {
                Glide.with(context).load(defalutuserhead).into(imageView);
            }
            else {
                if(!url.startsWith("http")) {
                    url = Constant.ALIYUN_IMAGE_URL+url;
                    if(type != null && type.length>0) {
                        if(type[0].equals("m")) {
                            url += "/120";
                        }
                    }
                }
                Glide.with(context).load(url).asBitmap().placeholder(defalutuserhead).into(new SimpleTarget<Bitmap>() {
                    @Override
                    public void onResourceReady(Bitmap bitmap, GlideAnimation<? super Bitmap> glideAnimation) {
                        imageView.setImageBitmap(bitmap);
                    }
                });
            }
            return;
        }catch (Exception e){
            e.printStackTrace();
        }
        final Context nc = context;
        final ImageView im = imageView;
        imageView.post(new Runnable() {
            @Override
            public void run() {
                Glide.with(nc).load(defalutuserhead).into(im);
            }
        });
    }
    public static String egtUrl(String url, String ...type){
        if(url != null && !url.contains("http")) {
            url = Constant.ALIYUN_IMAGE_URL+url;
            if(type != null && type.length>0) {
                if(type[0].equals("m")) {
                    url += "/120";
                }
            }
        }
        return url;
    }
    public static void loadImage(Context context, String username, String url, final ImageView imageView, String ...type){
        if(url != null && !url.contains("http")) {
            url = Constant.ALIYUN_IMAGE_URL+url;
            if(type != null && type.length>0) {
                if(type[0].equals("m")) {
                    url += "/120";
                }
            }
        }
        if(!TextUtils.isEmpty(url)&&url.contains(Constant.ALIYUN_IMAGE_URL)){
            Glide.with(context).load(url).placeholder(defalutuserhead).into(imageView);
        }else {
            EaseUser user = getUserInfo(username);
            if(user != null && user.getAvatar() != null){
                try {
                    int avatarResId = Integer.parseInt(user.getAvatar());
                    Glide.with(context).load(avatarResId).into(imageView);
                } catch (Exception e) {
                    //use default avatar
                    Glide.with(context).load(user.getAvatar()).asBitmap().diskCacheStrategy(DiskCacheStrategy.ALL).placeholder(defalutuserhead).into(new SimpleTarget<Bitmap>() {
                        @Override
                        public void onResourceReady(Bitmap bitmap, GlideAnimation<? super Bitmap> glideAnimation) {
                            imageView.setImageBitmap(bitmap);
                        }
                    });
                }
            }else if (!TextUtils.isEmpty(url)){
                Glide.with(context).load(url).asBitmap().placeholder(defalutuserhead).into(new SimpleTarget<Bitmap>() {
                    @Override
                    public void onResourceReady(Bitmap bitmap, GlideAnimation<? super Bitmap> glideAnimation) {
                        imageView.setImageBitmap(bitmap);
                    }
                });
            }else {
                Glide.with(context).load(defalutuserhead).into(imageView);
            }
        }
    }
    public static void loadImage(Context context, String url, final ImageView imageView){
        if(TextUtils.isEmpty(url)||"null".trim().equals(url.trim()))
            return;
        if(TextUtils.isEmpty(url)){
            Glide.with(context).load(defalutuserhead).into(imageView);
        }else {
            Glide.with(context).load(url).asBitmap().placeholder(defalutuserhead).into(new SimpleTarget<Bitmap>() {
                @Override
                public void onResourceReady(Bitmap bitmap, GlideAnimation<? super Bitmap> glideAnimation) {
                    imageView.setImageBitmap(bitmap);
                }
            });
        }
    }
    
    /**
     * set user's nickname
     */
    public static void setUserNick(String username, TextView textView){
        if(textView != null){
        	EaseUser user = getUserInfo(username);
        	if(user != null && user.getNick() != null){
        		textView.setText(user.getNick());
        	}else{
        		textView.setText(username);
        	}
        }
    }
    
}
