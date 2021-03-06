/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class GetProcYm1000wpk0YntransfrmYm430concatPalletResponse implements Serializable {


    @ColumnAlias("pOutPallet")
    private String poutPallet;

    public String getPoutPallet() {
        return this.poutPallet;
    }

    public void setPoutPallet(String poutPallet) {
        this.poutPallet = poutPallet;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof GetProcYm1000wpk0YntransfrmYm430concatPalletResponse)) return false;
        final GetProcYm1000wpk0YntransfrmYm430concatPalletResponse getProcYm1000wpk0yntransfrmYm430concatPalletResponse = (GetProcYm1000wpk0YntransfrmYm430concatPalletResponse) o;
        return Objects.equals(getPoutPallet(), getProcYm1000wpk0yntransfrmYm430concatPalletResponse.getPoutPallet());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutPallet());
    }
}