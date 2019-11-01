package com.hyphenate.easeui.jxcontrol;

import android.content.Context;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;

/**
 * 群组成员信息数据库
 */

public class GroupMenberHelper extends SQLiteOpenHelper {
    public static final String table="mygroupmenberinfo";
    public static final String groupid="groupid";
    public static final String menber="menber";
    public GroupMenberHelper(Context context, String name, int version) {
        super(context, name, null, version);
    }

    @Override
    public void onCreate(SQLiteDatabase db) {
         String sql = "create table "+table+" (id integer primary key autoincrement, "+groupid+" text,"+menber+" text)";
        db.execSQL(sql);
    }

    @Override
    public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {

    }
}
