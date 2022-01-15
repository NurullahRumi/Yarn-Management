/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class GetProcYm1000wpk0DelflrYm150rgpalletidResponse implements Serializable {


    @ColumnAlias("pOutPal")
    private List<GetProcYm1000wpk0DelflrYm150rgpalletidResponsePoutPal> poutPal;

    public List<GetProcYm1000wpk0DelflrYm150rgpalletidResponsePoutPal> getPoutPal() {
        return this.poutPal;
    }

    public void setPoutPal(List<GetProcYm1000wpk0DelflrYm150rgpalletidResponsePoutPal> poutPal) {
        this.poutPal = poutPal;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof GetProcYm1000wpk0DelflrYm150rgpalletidResponse)) return false;
        final GetProcYm1000wpk0DelflrYm150rgpalletidResponse getProcYm1000wpk0delflrYm150rgpalletidResponse = (GetProcYm1000wpk0DelflrYm150rgpalletidResponse) o;
        return Objects.equals(getPoutPal(), getProcYm1000wpk0delflrYm150rgpalletidResponse.getPoutPal());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutPal());
    }
}