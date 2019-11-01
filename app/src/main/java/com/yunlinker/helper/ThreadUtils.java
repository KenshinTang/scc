package com.yunlinker.helper;






import com.yunlinker.myApp;

import java.util.concurrent.ArrayBlockingQueue;
import java.util.concurrent.Callable;
import java.util.concurrent.FutureTask;
import java.util.concurrent.ThreadFactory;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicInteger;


public class ThreadUtils {

    public static Thread sMainThread = null;
    private static AtomicInteger sId = new AtomicInteger(0);

    public static ThreadPoolExecutor sThreadPool = new ThreadPoolExecutor(3, 64, 60, TimeUnit.SECONDS, new ArrayBlockingQueue<Runnable>(256),
            new ThreadFactory() {
                @Override
                public Thread newThread(Runnable r) {
                    Thread thread = new Thread(r);
                    thread.setDaemon(true);
                    thread.setName("Background#" + sId.getAndIncrement());
                    return thread;
                }
            });

    public static void runInMainThread(Runnable executable) {
        myApp.getInstance().getHandler().post(executable);
    }

    public static void setMainThread(Thread mainThread) {
        sMainThread = mainThread;
    }

    public static boolean isInMainThread() {
        return Thread.currentThread().equals(sMainThread);
    }

    /**
     * �ں�ִ̨������
     *
     * @param executable
     */
    public static void runInBackground(Runnable executable) {
        sThreadPool.execute(executable);
    }

    public static void runInBackground(Thread thread) {
        thread.setDaemon(true);
        thread.start();
    }

    /**
     * ��������̣߳��ȴ����߳�ִ������
     *
     * @param callable              ��Ҫִ�е����񣬷���T�������ִ����ɺ󷵻ص�����
     * @param timeoutMillis         ��ʱʱ�䣬�����ʱ�䲻�ٵȴ�
     * @param mayInterruptIfRunning �Ƿ����?ʱ���ж����߳�
     * @param <T>
     * @return
     */
    public static <T> T runInBackgroundAndBlock(Callable<T> callable, int timeoutMillis, boolean mayInterruptIfRunning) {
        FutureTask<T> futureTask = new FutureTask<T>(callable);
        sThreadPool.execute(futureTask);
        T t = null;
        try {
            t = futureTask.get(timeoutMillis, TimeUnit.MILLISECONDS);
        } catch (Exception e) {
            futureTask.cancel(mayInterruptIfRunning);
        }
        return t;
    }

}
