/**
 * Copyright (C) 2016 Hyphenate Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.hyphenate.easeui.domain;

import com.hyphenate.chat.EMContact;
import com.hyphenate.easeui.utils.EaseCommonUtils;

public class EaseUser extends EMContact {
    
    /**
     * initial letter for nickname
     */
	protected String initialLetter;
	/**
	 * avatar of the user
	 */
	protected String avatar;

	private String myeasemobname;
	private String myphone;
	private Integer mycustomerid;
	private String mynickname;
	private String myhead;
	private String myremark;
	private String mylable;
	private String mylatter;

	public void setMylatter(String mylatter) {
		this.mylatter = mylatter;
	}

	public String getMylatter() {
		return mylatter;
	}

	public String getMyeasemobname() {
		return myeasemobname;
	}

	public void setMyeasemobname(String myeasemobname) {
		this.myeasemobname = myeasemobname;
	}

	public String getMyphone() {
		return myphone;
	}

	public void setMyphone(String myphone) {
		this.myphone = myphone;
	}

	public Integer getMycustomerid() {
		return mycustomerid;
	}

	public void setMycustomerid(Integer mycustomerid) {
		this.mycustomerid = mycustomerid;
	}

	public String getMynickname() {
		return mynickname;
	}

	public void setMynickname(String mynickname) {
		this.mynickname = mynickname;
	}

	public String getMyhead() {
		return myhead;
	}

	public void setMyhead(String myhead) {
		this.myhead = myhead;
	}

	public String getMyremark() {
		return myremark;
	}

	public void setMyremark(String myremark) {
		this.myremark = myremark;
	}

	public String getMylable() {
		return mylable;
	}

	public void setMylable(String mylable) {
		this.mylable = mylable;
	}

	private String myName;

	public void setMyName(String myName) {
		this.myName = myName;
	}

	public String getMyName() {
		return myName;
	}

	public EaseUser(String username){
	    this.username = username;
	}
	private String myeaseuserid;

	public String getMyeaseuserid() {
		return myeaseuserid;
	}

	public void setMyeaseuserid(String myeaseuserid) {
		this.myeaseuserid = myeaseuserid;
	}

	public void setUSERNAME(String username){
		this.username=username;
	}

	public String getInitialLetter() {
	    if(initialLetter == null){
            EaseCommonUtils.setUserInitialLetter(this);
        }
		return initialLetter;
	}


	public void setInitialLetter(String initialLetter) {
		this.initialLetter = initialLetter;
	}


	public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    @Override
	public int hashCode() {
		return 17 * getUsername().hashCode();
	}

	@Override
	public boolean equals(Object o) {
		if (o == null || !(o instanceof EaseUser)) {
			return false;
		}
		return getUsername().equals(((EaseUser) o).getUsername());
	}

	@Override
	public String toString() {
		return nick == null ? username : nick;
	}
}
