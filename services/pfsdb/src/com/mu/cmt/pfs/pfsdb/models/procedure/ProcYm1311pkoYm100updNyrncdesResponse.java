/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcYm1311pkoYm100updNyrncdesResponse implements Serializable {


    @ColumnAlias("poutNYRNCDES")
    private List<ProcYm1311pkoYm100updNyrncdesResponsePoutNyrncdes> poutNyrncdes;

    public List<ProcYm1311pkoYm100updNyrncdesResponsePoutNyrncdes> getPoutNyrncdes() {
        return this.poutNyrncdes;
    }

    public void setPoutNyrncdes(List<ProcYm1311pkoYm100updNyrncdesResponsePoutNyrncdes> poutNyrncdes) {
        this.poutNyrncdes = poutNyrncdes;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcYm1311pkoYm100updNyrncdesResponse)) return false;
        final ProcYm1311pkoYm100updNyrncdesResponse procYm1311pkoYm100updNyrncdesResponse = (ProcYm1311pkoYm100updNyrncdesResponse) o;
        return Objects.equals(getPoutNyrncdes(), procYm1311pkoYm100updNyrncdesResponse.getPoutNyrncdes());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutNyrncdes());
    }
}