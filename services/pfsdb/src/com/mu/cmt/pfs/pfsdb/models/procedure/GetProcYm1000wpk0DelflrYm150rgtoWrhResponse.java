/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class GetProcYm1000wpk0DelflrYm150rgtoWrhResponse implements Serializable {


    @ColumnAlias("pOutWrh")
    private List<GetProcYm1000wpk0DelflrYm150rgtoWrhResponsePoutWrh> poutWrh;

    public List<GetProcYm1000wpk0DelflrYm150rgtoWrhResponsePoutWrh> getPoutWrh() {
        return this.poutWrh;
    }

    public void setPoutWrh(List<GetProcYm1000wpk0DelflrYm150rgtoWrhResponsePoutWrh> poutWrh) {
        this.poutWrh = poutWrh;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof GetProcYm1000wpk0DelflrYm150rgtoWrhResponse)) return false;
        final GetProcYm1000wpk0DelflrYm150rgtoWrhResponse getProcYm1000wpk0delflrYm150rgtoWrhResponse = (GetProcYm1000wpk0DelflrYm150rgtoWrhResponse) o;
        return Objects.equals(getPoutWrh(), getProcYm1000wpk0delflrYm150rgtoWrhResponse.getPoutWrh());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutWrh());
    }
}