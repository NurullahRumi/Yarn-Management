/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcYm3600pkoYm360masterResponse implements Serializable {


    @ColumnAlias("poutYM350MASTER")
    private List<ProcYm3600pkoYm360masterResponsePoutYm350master> poutYm350master;

    public List<ProcYm3600pkoYm360masterResponsePoutYm350master> getPoutYm350master() {
        return this.poutYm350master;
    }

    public void setPoutYm350master(List<ProcYm3600pkoYm360masterResponsePoutYm350master> poutYm350master) {
        this.poutYm350master = poutYm350master;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcYm3600pkoYm360masterResponse)) return false;
        final ProcYm3600pkoYm360masterResponse procYm3600pkoYm360masterResponse = (ProcYm3600pkoYm360masterResponse) o;
        return Objects.equals(getPoutYm350master(), procYm3600pkoYm360masterResponse.getPoutYm350master());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutYm350master());
    }
}