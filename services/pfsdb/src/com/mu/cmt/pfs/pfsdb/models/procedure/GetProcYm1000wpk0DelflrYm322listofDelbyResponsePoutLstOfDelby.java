/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class GetProcYm1000wpk0DelflrYm322listofDelbyResponsePoutLstOfDelby implements Serializable {


    @ColumnAlias("WRKID")
    private String wrkid;

    @ColumnAlias("WRKNAM")
    private String wrknam;

    public String getWrkid() {
        return this.wrkid;
    }

    public void setWrkid(String wrkid) {
        this.wrkid = wrkid;
    }

    public String getWrknam() {
        return this.wrknam;
    }

    public void setWrknam(String wrknam) {
        this.wrknam = wrknam;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof GetProcYm1000wpk0DelflrYm322listofDelbyResponsePoutLstOfDelby)) return false;
        final GetProcYm1000wpk0DelflrYm322listofDelbyResponsePoutLstOfDelby getProcYm1000wpk0delflrYm322listofDelbyResponsePoutLstOfDelby = (GetProcYm1000wpk0DelflrYm322listofDelbyResponsePoutLstOfDelby) o;
        return Objects.equals(getWrkid(), getProcYm1000wpk0delflrYm322listofDelbyResponsePoutLstOfDelby.getWrkid()) &&
                Objects.equals(getWrknam(), getProcYm1000wpk0delflrYm322listofDelbyResponsePoutLstOfDelby.getWrknam());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getWrkid(),
                getWrknam());
    }
}