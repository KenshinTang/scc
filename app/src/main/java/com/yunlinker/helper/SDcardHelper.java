package com.yunlinker.helper;

import android.graphics.Bitmap;
import android.os.Environment;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;

/**
 * 目录帮助类
 * @author chengfeng
 *
 */
public class SDcardHelper {
	
	/*********************** 目录的名称********************/
	private final static String ROOT_DIR_NAME = "19club";
	private final static String LOG_NAME = "19clublot.txt";
	private final static String TEMP = "temp";
	
	/***********************目录的常量*********************/
	private static String ROOT_DIR = null;
	private static String LOG_FILENAME=null;
	private static String TEMP_DIR = null;
	
	/**
	 * 获取外部存储的目录
	 *
	 * @return
	 */
	private static String getExternalStorageDir() {
		return Environment.getExternalStorageDirectory().getAbsolutePath();
	}
	
	/**
	 * 获取APP的根目录
	 * @return
	 */
	private static String getAppRootDir() {
		if (ROOT_DIR == null) {
			ROOT_DIR = getExternalStorageDir() + File.separator + ROOT_DIR_NAME;
			File file = new File(ROOT_DIR);
			if (!file.exists()) {
				file.mkdirs();
			}
		}
		return ROOT_DIR;
	}
	
	/**
	 * 获取日志的保存地址
	 * @return
	 */
	public static String getLogFileName() {
		if (LOG_FILENAME == null) {
			LOG_FILENAME = getAppRootDir() + File.separator + LOG_NAME;
		}
		return LOG_FILENAME;
	}
	
	public static String getTempDir() {
		if (TEMP_DIR == null) {
			TEMP_DIR = getAppRootDir() + File.separator + TEMP;
			File file = new File(TEMP_DIR);
			if (!file.exists()) {
				file.mkdirs();
			}
		}
		return TEMP_DIR;
	}


	public static String PATH = "/sdcard/myHead/";//sd路径
	public static String headName = "upload.png";

	public static File getUploadFile(Bitmap bitmap){
		String fileName = PATH +System.currentTimeMillis()+"-"+headName;
		FileOutputStream b = null;
		File file = new File(PATH);
		if (!file.exists()) {
			file.mkdirs();// 创建文件夹
		}
		try {
			b = new FileOutputStream(fileName);
			bitmap.compress(Bitmap.CompressFormat.PNG, 100, b);// 把数据写入文件
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} finally {
			try {
				b.flush();
				b.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		final File f = new File(fileName);
		return f;
	}
	
}

