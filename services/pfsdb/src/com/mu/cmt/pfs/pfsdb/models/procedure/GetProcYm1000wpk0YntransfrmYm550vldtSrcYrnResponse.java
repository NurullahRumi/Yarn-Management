/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class GetProcYm1000wpk0YntransfrmYm550vldtSrcYrnResponse implements Serializable {


    @ColumnAlias("pOutPalwgt")
    private BigDecimal poutPalwgt;

    public BigDecimal getPoutPalwgt() {
        return this.poutPalwgt;
    }

    public void setPoutPalwgt(BigDecimal poutPalwgt) {
        this.poutPalwgt = poutPalwgt;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof GetProcYm1000wpk0YntransfrmYm550vldtSrcYrnResponse)) return false;
        final GetProcYm1000wpk0YntransfrmYm550vldtSrcYrnResponse getProcYm1000wpk0yntransfrmYm550vldtSrcYrnResponse = (GetProcYm1000wpk0YntransfrmYm550vldtSrcYrnResponse) o;
        return Objects.equals(getPoutPalwgt(), getProcYm1000wpk0yntransfrmYm550vldtSrcYrnResponse.getPoutPalwgt());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutPalwgt());
    }
}