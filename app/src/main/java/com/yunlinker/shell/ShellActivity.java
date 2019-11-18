package com.yunlinker.shell;

import android.Manifest;
import android.annotation.SuppressLint;
import android.app.Activity;
import android.app.AlertDialog;
import android.content.ContentResolver;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.database.Cursor;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.Environment;
import android.provider.ContactsContract;
import android.provider.MediaStore;
import android.support.annotation.NonNull;
import android.support.v4.app.ActivityCompat;
import android.support.v4.content.ContextCompat;
import android.text.TextUtils;
import android.util.Log;
import android.view.View;
import android.webkit.JavascriptInterface;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.RelativeLayout;
import android.widget.TextView;

import com.alibaba.sdk.android.oss.ClientConfiguration;
import com.alibaba.sdk.android.oss.OSS;
import com.alibaba.sdk.android.oss.OSSClient;
import com.alibaba.sdk.android.oss.common.auth.OSSCredentialProvider;
import com.google.gson.Gson;
import com.yunlinker.aliupload.ImageService;
import com.yunlinker.aliupload.OssService;
import com.yunlinker.aliupload.PauseableUploadTask;
import com.yunlinker.aliupload.STSGetter;
import com.yunlinker.manager.ActivityManager;
import com.yunlinker.scc.R;

import org.json.JSONArray;
import org.json.JSONObject;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.lang.ref.WeakReference;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;

import static mapsdkvi.com.gdi.bgl.android.java.EnvDrawText.bmp;

/**
 * 外壳
 */

public class ShellActivity extends Activity {
    WebView webview;
    String url = "";
    private ShellWebView shellWebView;
    /**
     * 这里是上传图片到阿里云服务器的相关属性
     */
    protected OssService ossService;
    protected ImageService imageService;
    protected static final String bucket = "newjianxin";
    protected static final String endpoint = "http://oss-cn-shenzhen.aliyuncs.com/";
    private WeakReference<PauseableUploadTask> task;

    private TextView user_info_title;
    private RelativeLayout user_info_delete;
    private RelativeLayout user_info_back;
    private boolean isshowTitle = false;
    private String title="";
    private View view_title;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main3);
        webview = (WebView) findViewById(R.id.webr);
        url = getIntent().getStringExtra("url");
        init(webview);
        String lastUrl = "";
        if (url.contains("http")) {
            lastUrl = url;
        } else {
            lastUrl = "file:///android_asset/www/" + url;
        }
        webview.loadUrl(lastUrl);
        ActivityManager.getInstance().pushActivity(this, url);
//        if(setModel.getSettingMsgNotification()){
//            setmyValue("nftMsgSwichNotice","1");
//        }else {
//            setmyValue("nftMsgSwichNotice","0");
//        }
    }
    private void setmyValue(final String method, final String tempData) {
        try {
            webview.post(new Runnable() {
                @Override
                public void run() {
                    webview.loadUrl("javascript:"+method+"('" + tempData + "')");
                    // webView.loadUrl("javascript:_w9_wcallback('" + tempData + "')");
                }
            });
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    @SuppressLint("NewApi")
    void init(WebView view) {
        shellWebView = new ShellWebView(this, this, shellCallBack);
        view.getSettings().setTextZoom(100);
        view.addJavascriptInterface(shellWebView, "WeiLai");
        WebSettings setting = view.getSettings();
        setting.setJavaScriptCanOpenWindowsAutomatically(true);
        setting.setSupportMultipleWindows(true);
        setting.setAllowFileAccess(true);// 设置允许访问文件数据
        setting.setSupportMultipleWindows(true);// 设置允许开启多窗口
        setting.setDomStorageEnabled(true);//
        setting.setJavaScriptEnabled(true);// 设置支持javascript
        setting.setUseWideViewPort(true);
        setting.setLoadWithOverviewMode(true);
        setting.setDefaultTextEncodingName("utf-8");
        setting.setDomStorageEnabled(true);
        setting.setLoadsImagesAutomatically(true);  //支持自动加载图片
        WebView.setWebContentsDebuggingEnabled(true);

        // 覆盖WebView默认使用第三方或系统默认浏览器打开网页的行为，使网页用WebView打开

        view.setWebViewClient(webViewClient);
        view.setWebChromeClient(webChromeClient);
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {
            // WebView.setWebContentsDebuggingEnabled(true);
        }
    }

    WebChromeClient webChromeClient = new WebChromeClient() {
    };
    WebViewClient webViewClient = new WebViewClient() {
        @Override
        public boolean shouldOverrideUrlLoading(WebView view, String url) {
            if (url.startsWith("tel:")){
                Intent intent = new Intent(Intent.ACTION_VIEW,Uri.parse(url));
                startActivity(intent);
                return true;
            }else{
                view.loadUrl(url);
                return true;
            }
        }
    };


    private ShellCallBack shellCallBack = new ShellCallBack() {
        @Override
        public void goShowBackList() {

        }

        @Override
        public void extLogin(String type) {

        }

        @JavascriptInterface
        public void jxtv() {

        }

        @Override
        public void navigation(String obj) {

        }

        @Override
        public void qiyu(String objStr) {

        }

        @Override
        public void saveImg(String obj) {

        }

        @Override
        public void copyText(String text) {

        }

        @Override
        public void scanf(String code) {

        }

        @Override
        public void syncUserData(String user) {

        }

        @Override
        public void showUserInfo(String str) {

        }


        @Override
        public void goChangePassword() {
            //startActivity(new Intent(ShellActivity.this,UpdatePasswordActivity.class));
        }

        @Override
        public void openUrlStr(String url) {
            Intent intent = new Intent();
            intent.setAction("android.intent.action.VIEW");
            Uri content_url = Uri.parse(url);
            intent.setData(content_url);
          // intent.setClassName("com.android.browser","com.android.browser.BrowserActivity");
            startActivity(intent);
        }

        @Override
        public void getVersion() {
            String v="1.0.0";
            JSONObject j=new JSONObject();
            try {
                PackageManager manager = ShellActivity.this.getPackageManager();
                PackageInfo info = manager.getPackageInfo( ShellActivity.this.getPackageName(), 0);
                v =""+ info.versionName;
                j.put("versionName",v);
                j.put("versionType","android");
            } catch (Exception e) {
                e.printStackTrace();
               v="1.0.0";
               try {
                   j.put("versionName",v);
                   j.put("versionType","android");
               }catch (Exception e1){
                   e1.printStackTrace();
               }
            }
            final String str="{\"versionName\":\""+v+"\",\"versionType\":\"android\"}";

            setValue("getVersion",str);
        }

        @Override
        public Integer getCache() {
            return null;
        }

        @Override
        public void clearCache(String code) {

        }


        @Override
        public void nftMsgSwich(String state) {
//            if(state!=null&&state.trim().equals("state")){
//                if(setModel.getSettingMsgNotification()){
//                    setmyValue("nftMsgSwichNotice","1");
//                }else {
//                    setmyValue("nftMsgSwichNotice","0");
//                }
//            }
//           else if(state!=null&&state.trim().equals("oprator")){
//                if(setModel.getSettingMsgNotification()){
//                    setModel.setSettingMsgNotification(false);
//                    setmyValue("nftMsgSwichNotice","0");
//                }else {
//                    setModel.setSettingMsgNotification(true);
//                    setmyValue("nftMsgSwichNotice","1");
//                }
//            }
        }

        @Override
        public void goBackTo(String page) {
            int startPosition=ActivityManager.getInstance().getPageIndex(page);
            ActivityManager.getInstance().popActivity(startPosition);
        }

        @Override
        public void callNavigationMap(String location) {

        }

        @Override
        public void contactUser(final String str) {

        }

        @Override
        public void shareUrl(String s) {

        }

        @Override
        public void goShare() {

        }

        @Override
        public void refreshCurrentUser() {

        }

        @Override
        public void goChat() {

        }

        @Override
        public void mgWallet() {
           // RedPacketUtil.startChangeActivity(ShellActivity.this);
        }

        @Override
        public void position(String code) {

        }

        @Override
        public void registerPush(String obj) {

        }

        @Override
        public void setPush(String obj) {

        }

        @Override
        public void pay(String obj) {

        }

        @Override
        public void godismiss(String obj) {

        }

        @Override
        public void gologin(String url) {

        }

        @Override
        public void gopage(String url) {

        }

        @Override
        public void loginOut() {
            ActivityManager.getInstance().popActivity(ShellActivity.this, url);
            finish();
        }

        @Override
        public void close(String count) {
            ActivityManager.getInstance().popActivity(ShellActivity.this, url);
            finish();
        }


        @Override
        public void gotop(final String url) {
            if (url.equals("")) {
                //为空
                int startPosition = ActivityManager.stackTagList.indexOf(url);
                ActivityManager.getInstance().popActivity(startPosition);
            } else {
                final int startPosition = ActivityManager.getASize() - 1;
                webview.post(new Runnable() {
                    @Override
                    public void run() {
                        if (startPosition > 0) {
                            ActivityManager.getInstance().popActivity(startPosition);
                        } else {
                            webview.loadUrl("file:///android_asset/www/" + url);
                        }
                    }
                });
            }
        }

        @Override
        public void storage(String key) {
//            if (key.equals("deviceT")) {
//                try {
//                    JSONObject jb = new JSONObject();
//                    jb.put(ShellUtils.deviceId, SPFUtils.getKeyValue(ShellActivity.this, ShellUtils.deviceId));
//                    jb.put(ShellUtils.deviceToken, SPFUtils.getKeyValue(ShellActivity.this, ShellUtils.deviceToken));
//                    jb.put(ShellUtils.deviceType, SPFUtils.getKeyValue(ShellActivity.this, ShellUtils.deviceType));
//                    setValue("storage", jb.toString());
//                } catch (Exception e) {
//                }
//            } else {
//                String tempStr = SPFUtils.getKeyValue(ShellActivity.this, key);
//                setValue("storage", tempStr);
//            }
        }

        @Override
        public void storageValue(String tempStr) {
            try {
                JSONObject jb = new JSONObject(tempStr);
                String key = jb.getString("key");
                String value = jb.getString("value");
                SPFUtils.saveInfo(ShellActivity.this, key, value);
                setValue("storageValue", value);
            } catch (Exception e) {
            }
        }

        @Override
        public void setbg(String bgs) {
            //        viewss.setBackgroundColor(Color.parseColor(bgs));
            setValue("setbg", "1");
        }

        @Override
        public void alert(String mess) {
            final AlertDialog.Builder builder = new AlertDialog.Builder(ShellActivity.this);
            builder.setMessage(mess);
            builder.setCancelable(false);
            builder.setPositiveButton("确定", new DialogInterface.OnClickListener() {
                @Override
                public void onClick(DialogInterface dialog, int which) {
                    setValue("alert", "1");
                    dialog.cancel();
                }
            });
            builder.create().show();
        }

        @Override
        public void confirm(String mess) {
            final AlertDialog.Builder builder = new AlertDialog.Builder(ShellActivity.this);
            builder.setMessage(mess);
            builder.setCancelable(false);
            builder.setNegativeButton("确定", new DialogInterface.OnClickListener() {
                @Override
                public void onClick(DialogInterface dialog, int which) {
                    setValue("confirm", "1");
                    dialog.cancel();
                }
            });
            builder.setPositiveButton("取消", new DialogInterface.OnClickListener() {
                @Override
                public void onClick(DialogInterface dialog, int which) {
                    setValue("confirm", "0");
                    dialog.cancel();
                }
            });
            builder.create().show();
        }

        @Override
        public void message(String mess) {
            ToastUtil.showTop(mess);
            setValue("message", "1");
        }

        @Override
        public void deviceInfo() {
            String imei = ShellUtils.getDeviceId(ShellActivity.this);
            DeviceModel deviceModel = new DeviceModel();
            deviceModel.setType("android");
            deviceModel.setImei(imei);
            int currentapiVersion = Build.VERSION.SDK_INT;
            switch (currentapiVersion) {
                case 15:
                    deviceModel.setVer("4.x");
                    break;
                case 16:
                    deviceModel.setVer("4.x");
                    break;
                case 17:
                    deviceModel.setVer("4.x");
                    break;
                case 18:
                    deviceModel.setVer("4.x");
                    break;
                case 19:
                    deviceModel.setVer("4.x");
                    break;
                case 20:
                    deviceModel.setVer("4.0");
                    break;
                case 21:
                    deviceModel.setVer("5.0");
                    break;
                case 22:
                    deviceModel.setVer("5.0");
                    break;
                case 23:
                    deviceModel.setVer("6.0");
                    break;
                case 24:
                    deviceModel.setVer("7.0");
                    break;
                default:
                    deviceModel.setVer("未知");
                    break;
            }
            setValue("deviceInfo", new Gson().toJson(deviceModel));
        }

        @Override
        public void getAddressBook() {

        }

        @Override
        public void upimg(String imgUrl) {
            //这里初始化阿里云上传图片,传入地址
            //{"url":"/api/imgupload/app/getUploadToken","multi":0,"remain":0}
            if(TextUtils.isEmpty(imgUrl)){
                ToastUtil.showTost("上传参数错误");
                return;
            }
          try{
              JSONObject object=new JSONObject(imgUrl);
              album_multi=object.getInt("multi");
              remain=object.getInt("remain");
          }catch (Exception e){
              e.printStackTrace();
          }

            ossService = initOSS(endpoint, bucket, UPLOAD_URL);
            imageService = new ImageService(ossService);
            /* try{
                 isCropPhoto= Integer.valueOf(imgUrl);
             }catch (Exception e){
                 ToastUtil.showTost("上传图片传入参数错误， 0:裁剪 1：不裁剪  默认是不裁剪");
                 e.printStackTrace();
             }*/
           // EventControl.getInstance().setUploadFileAliyunInterface(uploadFileAliyunInterface);
            selectImage(imgUrl);
        }
    };
    private int album_multi=0;
    private String getTokenUrl="";
    private int remain=0;
    //是否裁剪图片 0:裁剪 1：不裁剪  默认是不裁剪
    private Integer isCropPhoto=1;
    /**
     * 上传到阿里云的地址,根据需要修改
     */
    public static final String UPLOAD_URL = "http://www.zyhjianxin.com/jx/api/imgupload/app/getUploadToken";

    /**
     * 初始化阿里云上传
     *
     * @param imgUrl   服务器地址
     * @param endpoint
     * @param bucket
     * @return
     */
    public OssService initOSS(String endpoint, String bucket, String imgUrl) {
        //如果希望直接使用accessKey来访问的时候，可以直接使用OSSPlainTextAKSKCredentialProvider来鉴权。
        //OSSCredentialProvider credentialProvider = new OSSPlainTextAKSKCredentialProvider(accessKeyId, accessKeySecret);
        OSSCredentialProvider credentialProvider;
        //使用自己的获取STSToken的类
        credentialProvider = new STSGetter(imgUrl);
        ClientConfiguration conf = new ClientConfiguration();
        conf.setConnectionTimeout(15 * 1000); // 连接超时，默认15秒
        conf.setSocketTimeout(15 * 1000); // socket超时，默认15秒
        conf.setMaxConcurrentRequest(5); // 最大并发请求书，默认5个
        conf.setMaxErrorRetry(2); // 失败后最大重试次数，默认2次
        OSS oss = new OSSClient(this, endpoint, credentialProvider, conf);
        return new OssService(oss, bucket);

    }

    private void selectImage(String imageurl) {
//        HeadPopuWindow headPopuWindow = new HeadPopuWindow(this);
//        headPopuWindow.showAtLocation(webview, Gravity.BOTTOM, 0, 0);
//        headPopuWindow.setCallBackTakePhoto(headCallBackTakePhoto);
    }

    private final  int REQUEST_CAMERA_CODE=336;
    public static final int MY_PERMISSIONS_REQUEST_CAMERA_CODE = 4;
    Uri  imageUri;
    String outputImagePath;
    private void _camera() {
        if (ContextCompat.checkSelfPermission(this, Manifest.permission.CAMERA) != PackageManager.PERMISSION_GRANTED) {
            //申请拍照权限
            ActivityCompat.requestPermissions(this, new String[]{Manifest.permission.CAMERA},MY_PERMISSIONS_REQUEST_CAMERA_CODE);
        }else {
            //图片名称 时间命名
            SimpleDateFormat format = new SimpleDateFormat("yyyyMMddHHmmss");
            Date date = new Date(System.currentTimeMillis());
            String  tempfilename = format.format(date);
            //创建File对象用于存储拍照的图片 SD卡根目录
            //File outputImage = new File(Environment.getExternalStorageDirectory(),test.jpg);
            //存储至DCIM文件夹
            File path = Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_DCIM);
            File outputImage = new File(path,tempfilename+".jpg");
            try {
                if(outputImage.exists()) {
                    outputImage.delete();
                }
                outputImage.createNewFile();
            } catch(IOException e) {
                e.printStackTrace();
            }
            outputImagePath=outputImage.getAbsolutePath();
            //将File对象转换为Uri并启动照相程序
            imageUri = Uri.fromFile(outputImage);
            Intent intent = new Intent("android.media.action.IMAGE_CAPTURE"); //照相
            intent.putExtra(MediaStore.EXTRA_OUTPUT, imageUri); //指定图片输出地址
            intent.putExtra(MediaStore.EXTRA_VIDEO_QUALITY, 1);
            //startActivityForResult(intent,HeadPopuWindow.USER_HEAD_CAMERA); //启动照相
            startActivityForResult(intent,SELECT_IMG_CAMMER); //启动照相
            //拍完照startActivityForResult() 结果返回onActivityResult()函数
        }
    }

    private void _album() {
        // 相册选取
        Intent intent1 = new Intent(Intent.ACTION_GET_CONTENT);
        intent1.setDataAndType(MediaStore.Images.Media.EXTERNAL_CONTENT_URI, "image/*");
       // this.startActivityForResult(intent1, HeadPopuWindow.USER_HEAD_ALBUM);
        this.startActivityForResult(intent1, SELECT_IMG_ALBUM);
       /* MultiImageSelector selector = MultiImageSelector.create(ShellActivity.this);
        selector.showCamera(true);
        selector.count(2);
        selector.start( this, REQUEST_IMAGE);*/
    }

    private ArrayList<String> mSelectPath;
    Bitmap head;
    private final int MY_PERMISSIONS_REQUEST_STORAGE_CODE = 5;

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        if (resultCode == Activity.RESULT_OK) {
            switch (requestCode) {
                case REQUEST_IMAGE:
                    if (data == null)
                        return;
                    // BlockedProgressDialog.show(this,"图片正在上传中...");
                    // static NSString *const BucketName = @"newjianxin";
                    // static NSString *const AliYunHost = @"http://oss-cn-shenzhen.aliyuncs.com";
                    // static NSString *const AliGetImgName = @"http://newjianxin.oss-cn-shenzhen.aliyuncs.com";


                   /* mSelectPath = data.getStringArrayListExtra(MultiImageSelector.EXTRA_RESULT);
                    for (int i = 0; i < mSelectPath.size(); i++) {
                        File file = new File(mSelectPath.get(i));
                        Bitmap bitmap=BitMapUtils.getimage(file.getPath());
                        BitMapUtils.saveBitmap(bitmap);
                    }*/

                    break;
                //case HeadPopuWindow.USER_HEAD_ALBUM:
                    //cropPhoto(data.getData());//裁剪图片
                   // break;
                //case HeadPopuWindow.USER_HEAD_CAMERA:
                    //cropPhoto_camaer();
                    //break;
                case CROP_TYPE:
                    if (data != null) {
                        Bundle extras = data.getExtras();
                        head = extras.getParcelable("data");
                        if (head != null) {
                            /**
                             * 上传服务器代码
                             *  <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
                             <uses-permission android:name="android.permission.MOUNT_UNMOUNT_FILESYSTEMS"/>
                             */
                            //Android 6.0 需要检查权限 ，对于没有权限的需要先申请权限
                            if (ContextCompat.checkSelfPermission(this, Manifest.permission.WRITE_EXTERNAL_STORAGE) != PackageManager.PERMISSION_GRANTED) {
                                //申请拍照权限
                                ActivityCompat.requestPermissions(this, new String[]{Manifest.permission.WRITE_EXTERNAL_STORAGE}, MY_PERMISSIONS_REQUEST_STORAGE_CODE);
                            } else {
                                setPicToView(head);//保存在SD卡中
                            }
                            //uploadFile(filename, filePath);

                        }
                    }
                    break;
                case  CROP_TYPE_CAMMER:
                    //uploadFile("", outputImagePath);
                    break;
                case SELECT_IMG_CAMMER:
                    //uploadFile("", outputImagePath);
                    ArrayList<String> paths=new ArrayList<>();
                    paths.add(outputImagePath);
                    refreshAdpater(paths);
                    break;
                case SELECT_IMG_ALBUM:
                    no_caijian_img(data.getData());
                    break;
                case REQUEST_CAMERA_CODE:
                    //refreshAdpater(data.getStringArrayListExtra(PhotoPickerActivity.EXTRA_RESULT));
                    break;
            }
        }
    }
    ArrayList<String> tempUploadAliyunFilePath;
    ArrayList<String> tempUploadAliyunFilePath_tt;
    private void refreshAdpater(ArrayList<String> paths){
        if(paths==null||paths.size()==0){
            //ToastUtil.showTost("拍照参数错误");
            return;
        }

        //BlockedProgressDialog.show(ShellActivity.this,"正在上传图片",true);
        tempUploadAliyunFilePath=new ArrayList<>();
        tempUploadAliyunFilePath_tt=new ArrayList<>();
        // 处理返回照片地址

        File file=null;
        String filDIR=new SimpleDateFormat("yyyy-MM").format(new Date());
        for(String url:paths){
            Log.i("图片地址：",url);
            file=new File(url);
            String tempFile="";//filDIR+"/"+file.getName();
            // /storage/emulated/0/DCIM/341325705679447106.jpg
            String filepath=copyFile(file.getAbsolutePath());
            tempFile=filDIR+"/"+new File(filepath).getName();

            tempUploadAliyunFilePath.add(tempFile);
            uploadAliImg(tempFile,filepath);
        }
    }
    private String copyFile(String path){
        try{
            File f=new File(path);
            String sufx=f.getName();
            sufx=sufx.substring(sufx.lastIndexOf("."),sufx.length());
            FileInputStream in=new FileInputStream(f);
            String newpath=f.getParentFile().getAbsolutePath()+"/"+ System.currentTimeMillis()+sufx;
            FileOutputStream out=new FileOutputStream(newpath);
            byte[] buffer=new byte[1024];
            int len=-1;
            while ((len=in.read(buffer))!=-1){
                out.write(buffer,0,len);
            }
            out.flush();
            out.close();
            in.close();
            return newpath;
        }catch (Exception e){
            e.printStackTrace();
            return path;
        }
    }
    private void no_caijian_img(Uri uri){
        //选择图片
        ContentResolver cr = this.getContentResolver();
        try {
            if(bmp != null)//如果不释放的话，不断取图片，将会内存不够
                bmp.recycle();
            bmp = BitmapFactory.decodeStream(cr.openInputStream(uri));
            setPicToView(bmp);//保存在SD卡中
            //uploadFile(filename, filePath);
        } catch (FileNotFoundException e) {
            ToastUtil.showTost("重新选择图片");
            e.printStackTrace();
        }
    }
    private static String path = "/sdcard/myHead/";//sd路径
    private String filePath = "";
    private String filename = "jx.jpg";

    /**
     * 保存图片到sd卡
     */
    private void setPicToView(Bitmap mBitmap) {
        String sdStatus = Environment.getExternalStorageState();
        if (!sdStatus.equals(Environment.MEDIA_MOUNTED)) { // 检测sd是否可用
            return;
        }
        FileOutputStream b = null;
        File file = new File(path);
        file.mkdirs();// 创建文件夹
        String fileName = path + filename;//图片名字
        //filePath = fileName;
        filePath = new File(fileName).getAbsolutePath();

        try {
            b = new FileOutputStream(fileName);
            mBitmap.compress(Bitmap.CompressFormat.JPEG, 100, b);// 把数据写入文件
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } finally {
            try {
                //关闭流
                b.flush();
                b.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    /**
     * 上传到阿里云
     *
     * @param name
     * @param filePate
     */
    private void uploadAliImg(final String name, String filePate) {
        task = new WeakReference<>(ossService.asyncMultiPartUpload(name, filePate, new OssService.loadSuccessCallBack() {
            @Override
            public void loadSuccess() {
                Log.e("success", "上传成功"+name );

            }
        }));
    }
//    UploadFileAliyunInterface uploadFileAliyunInterface=new UploadFileAliyunInterface() {
//        @Override
//        public void sendUrl(String url) {
//            tempUploadAliyunFilePath_tt.add(url);
//            if(tempUploadAliyunFilePath!=null&&tempUploadAliyunFilePath_tt!=null&&tempUploadAliyunFilePath_tt.size()==tempUploadAliyunFilePath.size()){
//
//                String urlValue="";
//                for(int i=0;i<tempUploadAliyunFilePath_tt.size();i++){
//                    if(i==tempUploadAliyunFilePath_tt.size()-1){
//                        urlValue+=tempUploadAliyunFilePath_tt.get(i);
//                    }else {
//                        urlValue+=tempUploadAliyunFilePath_tt.get(i)+",";
//                    }
//                }
//
//                setValue("upimg",urlValue);
//                BlockedProgressDialog.close();
//            }
//        }
//    };

    /**
     * fileName 文件名(不带后缀)
     * filePath 文件的本地路径 (xxx / xx / test.jpg)
     */
//    public void uploadFile(String fileName, String filePath) {
//        BlockedProgressDialog.close();
//        BlockedProgressDialog.show(ShellActivity.this,"正在上传");
//        RequestParams requestParams = new RequestParams();
//        String mime= MimeTypeMap.getSingleton().getMimeTypeFromExtension("png");
//        requestParams.addBodyParameter("upfile",new File(filePath),mime);
//        String sendUrl = "http://106.14.20.73/mrkx/api/imgupload/imgUpload";
//        HttpUtils httpUtils = new HttpUtils();
//        httpUtils.send(HttpRequest.HttpMethod.POST, sendUrl, requestParams,new RequestCallBack<Object>() {
//            @Override
//            public void onSuccess(ResponseInfo<Object> responseInfo) {
//                Log.d("xx","success");
//                try {
//                    BlockedProgressDialog.close();
////                   http://i.mkuaixun.com/img/2017-06/1496803989249.jpg
//                    JSONObject resultJb = new JSONObject(responseInfo.result.toString());
//                    String url="http://i.mkuaixun.com/"+resultJb.getString("data");
//                    Log.e("url:",url);
//                    setValue("uploadFile",url);
//                }catch(Exception e){
//                    e.printStackTrace();
//                }
//            }
//
//            @Override
//            public void onFailure(HttpException e, String s) {
//                BlockedProgressDialog.close();
//                Log.d("xx","error");
//            }
//        });
//
//    }


//    UploadFileInterface uploadFileInterface = new UploadFileInterface() {
//        @Override
//        public void onsuccess(String str) {
//
//        }
//
//        @Override
//        public void onError(String str) {
//
//        }
//    };

    /**
     * 调用系统的裁剪
     */
    public void cropPhoto(Uri uri ) {
        Intent intent = new Intent("com.android.camera.action.CROP");
        intent.setDataAndType(uri, "image/*");
        intent.putExtra("crop", "true");
        // aspectX aspectY 是宽高的比例
        intent.putExtra("aspectX", 1);
        intent.putExtra("aspectY", 1);
        // outputX outputY 是裁剪图片宽高
        intent.putExtra("outputX", 150);
        intent.putExtra("outputY", 150);
        intent.putExtra("return-data", true);
        startActivityForResult(intent, CROP_TYPE);
    }
    public void cropPhoto_camaer(){
        Intent intent = new Intent("com.android.camera.action.CROP"); //剪裁
        intent.setDataAndType(imageUri, "image/*");
        intent.putExtra("crop", true);
        //设置宽高比例
        intent.putExtra("aspectX", 1);
        intent.putExtra("aspectY", 1);
        //设置裁剪图片宽高
        intent.putExtra("outputX", 150);
        intent.putExtra("outputY", 150);
        intent.putExtra(MediaStore.EXTRA_OUTPUT, imageUri);
        Intent intentBc = new Intent(Intent.ACTION_MEDIA_SCANNER_SCAN_FILE);
        intentBc.setData(imageUri);
        this.sendBroadcast(intentBc);
        startActivityForResult(intent, CROP_TYPE_CAMMER);
    }

    private final int SELECT_IMG_CAMMER=335;//选择相机拍照
    private final int SELECT_IMG_ALBUM=334;//选择相册图片
    private final int CROP_TYPE = 333;
    private final int CROP_TYPE_CAMMER= 332;
    private static final int REQUEST_IMAGE = 211;
    final int READ_CONTACTS = 1;


    @Override
    public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions,
                                           @NonNull int[] grantResults) {
        //PermissionsManager.getInstance().notifyPermissionsChange(permissions, grantResults);
        if (requestCode == READ_CONTACTS) {
            if (grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                getContact();
            }
        }
    }

    private void getContact() {
        new Thread() {
            @Override
            public void run() {
               // List<PhoneInfo> tempData = new ArrayList<>();
                Cursor cursor = getContentResolver().query(ContactsContract.CommonDataKinds.Phone.CONTENT_URI, null, null, null, null);
                if (cursor == null)
                    return;
                JSONArray ja = new JSONArray();
                while (cursor.moveToNext()) {
                    JSONObject jb = new JSONObject();
                    //读取通讯录的姓名
                    String name = cursor.getString(cursor.getColumnIndex(ContactsContract.CommonDataKinds.Phone.DISPLAY_NAME));
                    //读取通讯录的号码
                    String number = cursor.getString(cursor.getColumnIndex(ContactsContract.CommonDataKinds.Phone.NUMBER));
                    if (number.contains("+86")) {
                        number = number.substring(3, number.length());
                    }
                    try {
                        jb.put("userName", name);
                        jb.put("userPhone", number);
                        ja.put(jb);
                    } catch (Exception e) {
                        e.printStackTrace();
                    }
                }
                setValue("getAddressBook", ja.toString());
                //App.setCatactsList(tempData);
            }
        }.start();
    }

    /**
     * 回调js
     *
     * @param method   方法名称
     * @param tempData 回传的数据 {}
     */
    public void setValue(final String method, final String tempData) {
        try {
            if(webview!=null) {
                webview.post(new Runnable() {
                    @Override
                    public void run() {
                        webview.loadUrl("javascript:_w9_wcallback('" + tempData + "')");
                    }
                });
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    protected void onResume() {
        super.onResume();
        try {
            if (webview != null)
                webview.post(new Runnable() {
                    @Override
                    public void run() {
                        webview.loadUrl("javascript:_w9_resume()");
                    }
                });
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    public void onBackPressed() {
        ActivityManager.getInstance().popActivity(ShellActivity.this, url);
        finish();
    }

    private void showShare(String pic,String title,String desc,String url) {
        // pic="http://newjianxin.oss-cn-shenzhen.aliyuncs.com/2017-06/JPEG_20170610_170948_.jpg";

        if(TextUtils.isEmpty(url)||(!TextUtils.isEmpty(url)&&(!url.contains("http://")&&!url.contains("https://")))){
            ToastUtil.showTost("参数{url}错误，分享失败 ，必须是以http:// 或 https:// 开头的");
            return;
        }
      /*  if(TextUtils.isEmpty(pic)||(!TextUtils.isEmpty(pic)&&(!pic.contains("http://")&&!pic.contains("https://")))){
            ToastUtil.showTost("参数{pic}错误，分享失败");
            return;
        }*/

//        OnekeyShare oks = new OnekeyShare();
//        //关闭sso授权
//        oks.disableSSOWhenAuthorize();
//        // title标题，印象笔记、邮箱、信息、微信、人人网、QQ和QQ空间使用
//
//        oks.setTitle(title);
//        // titleUrl是标题的网络链接，仅在Linked-in,QQ和QQ空间使用
//        oks.setTitleUrl(url);
//        // text是分享文本，所有平台都需要这个字段
//        oks.setText(desc);
//        //分享网络图片，新浪微博分享网络图片需要通过审核后申请高级写入接口，否则请注释掉测试新浪微博
//        if(pic.contains("http://")||pic.contains("https://")){
//            oks.setImageUrl(pic);
//        }
//        else{
//            // imagePath是图片的本地路径，Linked-In以外的平台都支持此参数
//            oks.setImagePath(pic);//确保SDcard下面存在此张图片
//        }
//        // imagePath是图片的本地路径，Linked-In以外的平台都支持此参数
//        //oks.setImagePath("/sdcard/test.jpg");//确保SDcard下面存在此张图片
//        // url仅在微信（包括好友和朋友圈）中使用
//        oks.setUrl(url);
//        // comment是我对这条分享的评论，仅在人人网和QQ空间使用
//        oks.setComment(desc);
//        // site是分享此内容的网站名称，仅在QQ空间使用
//        oks.setSite("建信");
//        // siteUrl是分享此内容的网站地址，仅在QQ空间使用
//        oks.setSiteUrl(url);
//
//// 启动分享GUI
//        oks.show(this);
    }

}
