/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class GetProcYm1000wpk0YntransfrmYm430rgpalletTypResponse implements Serializable {


    @ColumnAlias("pOutPalTyp")
    private List<GetProcYm1000wpk0YntransfrmYm430rgpalletTypResponsePoutPalTyp> poutPalTyp;

    public List<GetProcYm1000wpk0YntransfrmYm430rgpalletTypResponsePoutPalTyp> getPoutPalTyp() {
        return this.poutPalTyp;
    }

    public void setPoutPalTyp(List<GetProcYm1000wpk0YntransfrmYm430rgpalletTypResponsePoutPalTyp> poutPalTyp) {
        this.poutPalTyp = poutPalTyp;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof GetProcYm1000wpk0YntransfrmYm430rgpalletTypResponse)) return false;
        final GetProcYm1000wpk0YntransfrmYm430rgpalletTypResponse getProcYm1000wpk0yntransfrmYm430rgpalletTypResponse = (GetProcYm1000wpk0YntransfrmYm430rgpalletTypResponse) o;
        return Objects.equals(getPoutPalTyp(), getProcYm1000wpk0yntransfrmYm430rgpalletTypResponse.getPoutPalTyp());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutPalTyp());
    }
}