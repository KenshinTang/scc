package com.yunlinker.manager;
import android.content.Intent;
import android.util.Log;

import com.luck.picture.lib.PictureSelector;
import com.luck.picture.lib.entity.LocalMedia;
import com.umeng.socialize.UMShareAPI;
import com.yunlinker.baseclass.BaseActivity;
import com.yunlinker.upimage.UpImger;
import com.lzy.imagepicker.ImagePicker;
import com.lzy.imagepicker.bean.ImageItem;
import com.yunlinker.scc.WebviewActivity;

import java.util.ArrayList;
import java.util.List;

import static android.app.Activity.RESULT_OK;
import static com.yunlinker.config.WebConfig.QRCODE_GET_CODE;
import static com.yunlinker.config.WebConfig.SELECTED_IMAGE_CODE;


/**
 * Created by lemon on 2017/8/21.
 */

public class ActivityResult {
    private static ActivityResult instance = null;

    public static ActivityResult getInstance() {
        if (instance == null) {
            synchronized (ActivityResult.class) {
                if (instance == null) {
                    instance = new ActivityResult();
                }
            }
        }
        return instance;
    }

    public void resultBack(WebviewActivity activity, int requestCode, int resultCode, Intent data) {
        //处理回调
        if(resultCode == RESULT_OK) {
            switch (requestCode) {
                case QRCODE_GET_CODE:
                    //扫描二维码成功
                    activity.setValue("scanf",data.getExtras().getString("code"));
                    break;
//                case UM_AUTH_CODE:
//                    UMShareAPI.get(BaseActivity.this).onActivityResult(requestCode, resultCode, data);
//                    break;
                case SELECTED_IMAGE_CODE:
                   // ArrayList<ImageItem> images = (ArrayList<ImageItem>) data.getSerializableExtra(ImagePicker.EXTRA_RESULT_ITEMS);

                    List<LocalMedia> images = PictureSelector.obtainMultipleResult(data);
                    Log.e("11111", "resultBack: "+images);
                    if (images != null){
                        UpImger.getInstance().initUploadImageItems(images);
                    }
                    break;
            }
        } else {
            //异常处理
        }
    }
}

