package com.hyphenate.easeui.jxcontrol.base;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class BaseController implements BaseControllerInterface
{
    private Map<Long, List<BaseAsyncTask<?>>> taskMap = new HashMap<Long, List<BaseAsyncTask<?>>>();
    
    private static int gTaskId = 1;
    
    public synchronized static int generateTaskId()
    {
        if (gTaskId == Integer.MAX_VALUE - 1)
        {
            gTaskId = 1;
        }
        else
        {
            gTaskId++;
        }
        return gTaskId;
    }
    
    @Override
    public synchronized void registeTask(long taskId, BaseAsyncTask<?> task)
    {
        List<BaseAsyncTask<?>> list = taskMap.get(taskId);
        if (list == null)
        {
            list = new ArrayList<BaseAsyncTask<?>>();
            list.add(task);
            taskMap.put(Long.valueOf(taskId), list);
        }
        else
        {
            list.add(task);
        }
        
    }
    
    @Override
    public synchronized void cancelTask(long taskId)
    {
        List<BaseAsyncTask<?>> list = taskMap.get(taskId);
        if (list != null)
        {
            for (BaseAsyncTask<?> temp : list)
            {
                temp.cancel(true);
            }
            taskMap.remove(taskId);
        }
    }
    
    @Override
    public synchronized void cancelAllTask()
    {
        for (List<BaseAsyncTask<?>> list : taskMap.values())
        {
            if (list != null)
            {
                for (BaseAsyncTask<?> temp : list)
                {
                    temp.cancel(true);
                }
                list.clear();
            }
        }
        taskMap.clear();
    }
    
    @Override
    public synchronized int registeTask(BaseAsyncTask<?> task)
    {
        int retId = generateTaskId();
        registeTask(retId, task);
        return retId;
    }
}
