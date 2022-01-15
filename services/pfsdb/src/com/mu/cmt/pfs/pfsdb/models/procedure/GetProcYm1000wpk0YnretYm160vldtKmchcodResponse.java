/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class GetProcYm1000wpk0YnretYm160vldtKmchcodResponse implements Serializable {


    @ColumnAlias("pYnretid")
    private String pynretid;

    public String getPynretid() {
        return this.pynretid;
    }

    public void setPynretid(String pynretid) {
        this.pynretid = pynretid;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof GetProcYm1000wpk0YnretYm160vldtKmchcodResponse)) return false;
        final GetProcYm1000wpk0YnretYm160vldtKmchcodResponse getProcYm1000wpk0ynretYm160vldtKmchcodResponse = (GetProcYm1000wpk0YnretYm160vldtKmchcodResponse) o;
        return Objects.equals(getPynretid(), getProcYm1000wpk0ynretYm160vldtKmchcodResponse.getPynretid());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPynretid());
    }
}