package com.yunlinker.baseclass;


import android.app.Activity;
import android.content.Context;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.view.WindowManager;
import android.view.inputmethod.InputMethodManager;
import android.webkit.WebView;

import com.yunlinker.shell.ShellWebView;

import me.yokeyword.fragmentation.SupportFragment;


/**
 * created by LiChengalin at 2017/4/5/0005
 */
public abstract class BaseFragment extends Fragment {
    protected Activity mActivity;
    protected ShellWebView shellWebView ;
    protected InputMethodManager inputMethodManager;
    protected WebView webView;
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        mActivity = getActivity();
    }

    public BaseFragment() {
        //必须确保在Fragment实例化时setArguments()
        setArguments(new Bundle());
    }

    protected void hideSoftKeyboard() {
        if (getActivity().getWindow().getAttributes().softInputMode != WindowManager.LayoutParams.SOFT_INPUT_STATE_HIDDEN) {
            if (getActivity().getCurrentFocus() != null)
                inputMethodManager.hideSoftInputFromWindow(getActivity().getCurrentFocus().getWindowToken(),
                        InputMethodManager.HIDE_NOT_ALWAYS);
        }
    }

    @Override
    public void onActivityCreated(Bundle savedInstanceState) {
        super.onActivityCreated(savedInstanceState);
        inputMethodManager = (InputMethodManager) getActivity().getSystemService(Context.INPUT_METHOD_SERVICE);
        // webView=getWebView();
        initView();
        setUpView();
    }

    @Override
    public void onSaveInstanceState(Bundle outState) {
    }

    protected abstract void initView();

    protected abstract void setUpView();

    @Override
    public void onResume() {
        super.onResume();
    }

    @Override
    protected void finalize() throws Throwable {
        super.finalize();
    }

}
