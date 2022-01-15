/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcYm1000pkoYm155detailResponse implements Serializable {


    @ColumnAlias("poutDetail")
    private List<ProcYm1000pkoYm155detailResponsePoutDetail> poutDetail;

    public List<ProcYm1000pkoYm155detailResponsePoutDetail> getPoutDetail() {
        return this.poutDetail;
    }

    public void setPoutDetail(List<ProcYm1000pkoYm155detailResponsePoutDetail> poutDetail) {
        this.poutDetail = poutDetail;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcYm1000pkoYm155detailResponse)) return false;
        final ProcYm1000pkoYm155detailResponse procYm1000pkoYm155detailResponse = (ProcYm1000pkoYm155detailResponse) o;
        return Objects.equals(getPoutDetail(), procYm1000pkoYm155detailResponse.getPoutDetail());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutDetail());
    }
}