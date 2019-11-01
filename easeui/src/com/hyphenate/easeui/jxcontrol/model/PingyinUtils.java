package com.hyphenate.easeui.jxcontrol.model;

import android.content.Context;
import android.text.TextUtils;

import net.sourceforge.pinyin4j.PinyinHelper;
import net.sourceforge.pinyin4j.format.HanyuPinyinCaseType;
import net.sourceforge.pinyin4j.format.HanyuPinyinOutputFormat;
import net.sourceforge.pinyin4j.format.HanyuPinyinToneType;

public class PingyinUtils {

	/**
	 * 根据传入的字符串(包含汉字),得到拼音 黑马 -> HEIMA 黑 马*& -> HEIMA 黑马f5 -> HEIMA
	 * 
	 * @param str
	 *            字符串
	 * @return
	 */
	public static String getPinyin(String str) {
		if(TextUtils.isEmpty(str))
			return "";
		HanyuPinyinOutputFormat format = new HanyuPinyinOutputFormat();
		format.setCaseType(HanyuPinyinCaseType.UPPERCASE);
		format.setToneType(HanyuPinyinToneType.WITHOUT_TONE);

		StringBuilder sb = new StringBuilder();

		char[] charArray = str.toCharArray();
		for (int i = 0; i < charArray.length; i++) {
			char c = charArray[i];
			// 如果是空格, 跳过
			if (Character.isWhitespace(c)) {
				continue;
			}
			if (c >= -127 && c < 128) {
				// 肯定不是汉字
				sb.append(c);
			} else {
				String s = "";
				try {
					// 通过char得到拼音集合. 单 -> dan, shan
					s = PinyinHelper.toHanyuPinyinStringArray(c, format)[0];
					sb.append(s);
				} catch (Exception e) {
					e.printStackTrace();
					sb.append("#");
				}
			}
		}
		/*char c = charArray[0];
		// 如果是空格, 跳过
		if (Character.isWhitespace(c)) {
			sb.append("#");
		}
		if (c >= -127 && c < 128) {
			// 肯定不是汉字
			sb.append(c);
		} else {
			String s = "";
			try {
				// 通过char得到拼音集合. 单 -> dan, shan
				s = PinyinHelper.toHanyuPinyinStringArray(c, format)[0];
				sb.append(s);
			} catch (Exception e) {
				e.printStackTrace();
				sb.append(s);
			}
		}*/

		return sb.toString();
	}

	/** dip转换px */
	public static int dip2px(Context context, int dip) {
		 
		final float scale = context.getResources().getDisplayMetrics().density;
		return (int) (dip * scale + 0.5f);
	}

	/** pxz转换dip */

	public static int px2dip(Context context, int px) {
		final float scale = context.getResources().getDisplayMetrics().density;
		return (int) (px / scale + 0.5f);
	}

}
