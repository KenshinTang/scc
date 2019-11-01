package com.hyphenate.easeui.jxcontrol.base;

import java.net.Socket;

/**
 * Created by Administrator on 2017/3/20.
 */

public class SocketContext {
    private  static  SocketContext socketContext;
    private Socket socket;
    public  static  final int SEND_OK=0;//发送成功
    public  static  final int SEND_ERROR=1;//发送失败
    private  SocketContext(){}
    public  static  synchronized SocketContext getInstance(){
        if(socketContext==null)
            socketContext=new SocketContext();
        return socketContext;
    }
    public void setSocket(Socket socket){
        this.socket=socket;
    }
    public Socket getSocket(){return  this.socket;}

}
