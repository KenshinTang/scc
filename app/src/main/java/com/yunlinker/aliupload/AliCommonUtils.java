package com.yunlinker.aliupload;

import android.content.Context;

import com.alibaba.sdk.android.oss.ClientConfiguration;
import com.alibaba.sdk.android.oss.OSS;
import com.alibaba.sdk.android.oss.OSSClient;
import com.alibaba.sdk.android.oss.common.auth.OSSCredentialProvider;

/**
 * Created by Administrator on 2017/3/8.
 */

public class AliCommonUtils {
    /**
     * 初始化阿里云上传
     *
     * @param imgUrl   服务器地址
     * @param endpoint
     * @param bucket
     * @return
     */
    public static OssService initOSS(String endpoint, String bucket, String imgUrl, Context context) {
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
        OSS oss = new OSSClient(context, endpoint, credentialProvider, conf);
        return new OssService(oss, bucket);
    }

}
