package com.yunlinker.upimage.aliupload;

import android.util.Log;

import com.alibaba.sdk.android.oss.ClientException;
import com.alibaba.sdk.android.oss.OSS;
import com.alibaba.sdk.android.oss.ServiceException;
import com.alibaba.sdk.android.oss.callback.OSSCompletedCallback;
import com.alibaba.sdk.android.oss.callback.OSSProgressCallback;
import com.alibaba.sdk.android.oss.internal.OSSAsyncTask;
import com.alibaba.sdk.android.oss.model.GetObjectRequest;
import com.alibaba.sdk.android.oss.model.PutObjectRequest;
import com.alibaba.sdk.android.oss.model.PutObjectResult;
import com.yunlinker.upimage.UpImger;

import java.io.File;
import java.util.ArrayList;
import java.util.Map;


public class OssService {

    private OSS oss;
    private String bucket;
    private ArrayList<Map> uploadList;
    private MultiPartUploadManager multiPartUploadManager;

    private final static int partSize = 256 * 1024;
    public OssService(OSS oss, String bucket) {
        this.oss = oss;
        this.bucket = bucket;
        this.multiPartUploadManager = new MultiPartUploadManager(oss, bucket, partSize);
    }

    public void configUploadList(ArrayList<Map> list) {
        successList = new ArrayList<>();
        uploadList = list;
    }

    private ArrayList<String> successList;
    public void uploadImgs() {
        if(uploadList.size()>0) {
            String object = (String)uploadList.get(0).get("name");
            String path = (String)uploadList.get(0).get("path");
            asyncUploadImage(object, path);
            uploadList.remove(0);
        } else {
            //全部上传完成
            UpImger.getInstance().uploadEvent.finished(successList);
        }
    }

    private void asyncUploadImage(final String object, String localFile) {
        if (object.equals("")) {
            Log.e("AsyncPutImage", "ObjectNull");
            return;
        }

        File file = new File(localFile);
        if (!file.exists()) {
            Log.e("AsyncPutImage", "FileNotExist");
            Log.e("LocalFile", localFile);
            return;
        }


        // 构造上传请求
        PutObjectRequest put = new PutObjectRequest(bucket, object, localFile);

        // 异步上传时可以设置进度回调
        put.setProgressCallback(new OSSProgressCallback<PutObjectRequest>() {
            @Override
            public void onProgress(PutObjectRequest request, long currentSize, long totalSize) {
            }
        });

        OSSAsyncTask task = oss.asyncPutObject(put, new OSSCompletedCallback<PutObjectRequest, PutObjectResult>() {
            @Override
            public void onSuccess(PutObjectRequest request, PutObjectResult result) {
                successList.add(object);
                Log.e("11111111", "onSuccess: "+request.getUploadFilePath());
                uploadImgs();
            }

            @Override
            public void onFailure(PutObjectRequest request, ClientException clientExcepion, ServiceException serviceException) {
                uploadImgs();
            }
        });
    }
    public void asyncGetImage(String object) {
        if ((object == null) || object.equals("")) {
            Log.w("AsyncGetImage", "ObjectNull");
            return;
        }

        GetObjectRequest get = new GetObjectRequest(bucket, object);


//        OSSAsyncTask task = oss.asyncGetObejct(get, new OSSCompletedCallback<GetObjectRequest, GetObjectResult>() {
//            @Override
//            public void onSuccess(GetObjectRequest request, GetObjectResult result) {
//                // 请求成功
//                InputStream inputStream = result.getObjectContent();
//                //重载InputStream来获取读取进度信息
//                ProgressInputStream progressStream = new ProgressInputStream(inputStream, new OSSProgressCallback<GetObjectRequest>() {
//                    @Override
//                    public void onProgress(GetObjectRequest o, long currentSize, long totalSize) {
//                    }
//                }, result.getContentLength());
//            }
//
//            @Override
//            public void onFailure(GetObjectRequest request, ClientException clientExcepion, ServiceException serviceException) {
//                String info = "";
//                // 请求异常
//                if (clientExcepion != null) {
//                    // 本地异常如网络异常等
//                    clientExcepion.printStackTrace();
//                    info = clientExcepion.toString();
//                }
//                if (serviceException != null) {
//                    // 服务异常
//                    Log.e("ErrorCode", serviceException.getErrorCode());
//                    Log.e("RequestId", serviceException.getRequestId());
//                    Log.e("HostId", serviceException.getHostId());
//                    Log.e("RawMessage", serviceException.getRawMessage());
//                    info = serviceException.toString();
//                }
//            }
//        });
    }
    //断点上传，返回的task可以用来暂停任务
    public PauseableUploadTask asyncMultiPartUpload(String name, String localFile,final loadSuccessCallBack callBack) {
        if (name.equals("")) {
            Log.w("AsyncMultiPartUpload", "ObjectNull");
            return null;
        }

        File file = new File(localFile);
        if (!file.exists()) {
            Log.w("AsyncMultiPartUpload", "FileNotExist");
            Log.w("LocalFile", localFile);
            return null;
        }

        Log.d("MultiPartUpload", localFile);
        PauseableUploadTask task = multiPartUploadManager.asyncUpload(name, localFile, new MultiPartUploadManager.upLoadSuccessCallBack() {
            @Override
            public void onUploadSuccess() {
                callBack.loadSuccess();
            }
        });
        return task;
    }
    public interface loadSuccessCallBack{
        void loadSuccess();
    }
}
