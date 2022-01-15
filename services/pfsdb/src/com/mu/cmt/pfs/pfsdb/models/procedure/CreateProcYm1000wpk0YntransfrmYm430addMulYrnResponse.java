/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class CreateProcYm1000wpk0YntransfrmYm430addMulYrnResponse implements Serializable {


    @ColumnAlias("pOutPalmodnum")
    private String poutPalmodnum;

    public String getPoutPalmodnum() {
        return this.poutPalmodnum;
    }

    public void setPoutPalmodnum(String poutPalmodnum) {
        this.poutPalmodnum = poutPalmodnum;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof CreateProcYm1000wpk0YntransfrmYm430addMulYrnResponse)) return false;
        final CreateProcYm1000wpk0YntransfrmYm430addMulYrnResponse createProcYm1000wpk0yntransfrmYm430addMulYrnResponse = (CreateProcYm1000wpk0YntransfrmYm430addMulYrnResponse) o;
        return Objects.equals(getPoutPalmodnum(), createProcYm1000wpk0yntransfrmYm430addMulYrnResponse.getPoutPalmodnum());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutPalmodnum());
    }
}