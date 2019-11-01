package com.hyphenate.easeui.jxcontrol.base;
public interface BaseControllerInterface
{
    void cancelTask(long taskId);
    
    void cancelAllTask();
    
    void registeTask(long taskId, BaseAsyncTask<?> task);
    
    int registeTask(BaseAsyncTask<?> task);
}
