package com.yunlinker.baseclass;

import android.webkit.WebView;

public class MyWebViewTransport {
	private static MyWebViewTransport myWebViewTransport;
	public static MyWebViewTransport getInstance(){
		if(myWebViewTransport==null)
			myWebViewTransport=new MyWebViewTransport();
		return myWebViewTransport;
	} 
	WebView.WebViewTransport transport;
	android.os.Message message;
	public void setWeb(WebView.WebViewTransport transport){
		this.transport=transport;
	}
	public WebView.WebViewTransport getTra(){
		return transport;
	}
	public void setMessage(android.os.Message m){
		this.message=m;
	}
	public android.os.Message getM(){
		return message;
	}
	
}
