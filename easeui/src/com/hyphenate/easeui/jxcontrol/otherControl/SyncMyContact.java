package com.hyphenate.easeui.jxcontrol.otherControl;

import com.hyphenate.easeui.domain.EaseUser;

import java.util.List;

/**
 *  从 EaseContactList 同步联系人 到  ContactListFragment
 */

public interface SyncMyContact {
    public void sync(List<EaseUser> list);
}
