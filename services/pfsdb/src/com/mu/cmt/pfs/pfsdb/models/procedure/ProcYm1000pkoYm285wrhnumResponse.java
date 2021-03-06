/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcYm1000pkoYm285wrhnumResponse implements Serializable {


    @ColumnAlias("poutWRHNUM")
    private List<ProcYm1000pkoYm285wrhnumResponsePoutWrhnum> poutWrhnum;

    public List<ProcYm1000pkoYm285wrhnumResponsePoutWrhnum> getPoutWrhnum() {
        return this.poutWrhnum;
    }

    public void setPoutWrhnum(List<ProcYm1000pkoYm285wrhnumResponsePoutWrhnum> poutWrhnum) {
        this.poutWrhnum = poutWrhnum;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcYm1000pkoYm285wrhnumResponse)) return false;
        final ProcYm1000pkoYm285wrhnumResponse procYm1000pkoYm285wrhnumResponse = (ProcYm1000pkoYm285wrhnumResponse) o;
        return Objects.equals(getPoutWrhnum(), procYm1000pkoYm285wrhnumResponse.getPoutWrhnum());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutWrhnum());
    }
}