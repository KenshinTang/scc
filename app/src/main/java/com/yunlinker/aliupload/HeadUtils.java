package com.yunlinker.aliupload;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Matrix;
import android.media.ExifInterface;
import android.util.Log;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

/**
 * 图片处理
 */

public class HeadUtils {
    /**
     * 图片裁剪 压缩
     * @return
     */
    public static boolean compressBiamp2(Bitmap bt, String filename, String topath, int with) {
        if (bt == null)
            return false;
        float pc = (float) with / (float) bt.getWidth();//压缩比例
        Bitmap bit2 = resize_img(bt, pc);//压缩bitmap
        saveMyBitmap(topath, filename, bit2);
        return true;
    }

    //压缩bitmap
    public static Bitmap resize_img(Bitmap bitmap, float pc) {
        Matrix matrix = new Matrix();
        matrix.postScale(pc, pc); // 长和宽放大缩小的比例
        Bitmap resizeBmp = Bitmap.createBitmap(bitmap, 0, 0, bitmap.getWidth(),  bitmap.getHeight(), matrix, true);
        bitmap.recycle();
        bitmap = null;
        System.gc();
        int width = resizeBmp.getWidth();
        int height = resizeBmp.getHeight();
        Log.i("this", "按比例缩小后宽度--" + width);
        Log.i("this", "按比例缩小后高度--" + height);
        return resizeBmp;
    }

    //将压缩的bitmap保存到sdcard卡临时文件夹zhizhushe，用于上传

    public static void saveMyBitmap(String path, String filename, Bitmap bit) {
        File dir = new File(path);
        if (!dir.exists()) {
            dir.mkdir();
        }
        File f = new File(path + filename);
        Log.e("this", "开始存储路径：" + path + filename);
        try {
            f.createNewFile();
            FileOutputStream fOut = null;
            fOut = new FileOutputStream(f);
            bit.compress(Bitmap.CompressFormat.PNG, 100, fOut);
            fOut.flush();
            fOut.close();
            Log.e("this", "存储路径：" + path + filename);
        } catch (IOException e1) {
            Log.e("this", "oncreare loss");
            f = null;
            e1.printStackTrace();
        }
    }


    // 读取图像的旋转度
    public static int readBitmapDegree(String path) {
        int degree = 0;
        try {
            ExifInterface exifInterface = new ExifInterface(path);
            int orientation = exifInterface.getAttributeInt(
                    ExifInterface.TAG_ORIENTATION,
                    ExifInterface.ORIENTATION_NORMAL);
            switch (orientation) {
                case ExifInterface.ORIENTATION_ROTATE_90:
                    degree = 90;
                    break;
                case ExifInterface.ORIENTATION_ROTATE_180:
                    degree = 180;
                    break;
                case ExifInterface.ORIENTATION_ROTATE_270:
                    degree = 270;
                    break;
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return degree;
    }

    // 旋转图片
    public static Bitmap rotateBitmap(int angle, Bitmap bitmap) {
        // 旋转图片 动作
        Matrix matrix = new Matrix();
        matrix.postRotate(angle);
        // 创建新的图片
        Bitmap resizedBitmap = Bitmap.createBitmap(bitmap, 0, 0,
                bitmap.getWidth(), bitmap.getHeight(), matrix, false);
        return resizedBitmap;
    }
    /**
     * 创建图片
     *
     * @param path
     * @return
     */
    public static Bitmap createBitmap(String path) {
        if (path == null) {
            return null;
        }
        BitmapFactory.Options opts = new BitmapFactory.Options();
        opts.inSampleSize = 1;
        opts.inJustDecodeBounds = false;// 这里一定要将其设置回false，因为之前我们将其设置成了true
        opts.inPurgeable = true;
        opts.inInputShareable = true;
        opts.inDither = false;
        opts.inPurgeable = true;
        FileInputStream is = null;
        Bitmap bitmap = null;
        try {
            is = new FileInputStream(path);
            bitmap = BitmapFactory.decodeFileDescriptor(is.getFD(), null, opts);
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            try {
                if (is != null) {
                    is.close();
                    is = null;
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return bitmap;
    }


}
