package com.hyphenate.easeui.jxcontrol.base;

import android.content.Context;
import android.os.Handler;

import java.util.concurrent.Executor;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

import roboguice.util.RoboAsyncTask;
import roboguice.util.SafeAsyncTask;

/**
 * Created by Administrator on 2017/3/18.
 */
public abstract class BaseAsyncTask <T> extends RoboAsyncTask<T> {
    private static final String TAG = "BaseAsyncTask";
    private static int threadNum = 8;
    private static long lastNetExeptionTime = 0L;
    /** * 超过5s断连做网络异常处理  */
    private static final int OVER_TIME = 5 * 1000;
    private static ExecutorService executorService = Executors.newFixedThreadPool(threadNum);
    protected BaseAsyncTask(Context context) {
        super(context);
    }
    @Override
    public void execute()  {
        executor(executorService);
        super.execute();
    }
    protected BaseAsyncTask(Context context, Handler handler)
    {
        super(context, handler);
    }

    protected BaseAsyncTask(Context context, Handler handler, Executor executor)
    {
        super(context, handler, executor);
    }

    protected BaseAsyncTask(Context context, Executor executor)
    {
        super(context, executor);
    }
    @Override
    public SafeAsyncTask<T> executor(Executor executor)
    {
        return super.executor(executorService);
    }
    @Override
    protected void onSuccess(T t) {  }
    @Override
    public Executor executor()  {
        return executorService;
    }

    @Override
    protected void onException(Exception e) throws RuntimeException {
        super.onException(e);
    }
    /** * 清除上次提示网络错误的时间标记  */
    public static void clearLatNetworkErrorHint() {
        lastNetExeptionTime = 0;
    }
    abstract protected void handleOnException(Exception e);
    @Override
    public boolean cancel(boolean mayInterruptIfRunning) {
        if (future == null)
        {
            return false;
        }
        return super.cancel(mayInterruptIfRunning);
    }
}
