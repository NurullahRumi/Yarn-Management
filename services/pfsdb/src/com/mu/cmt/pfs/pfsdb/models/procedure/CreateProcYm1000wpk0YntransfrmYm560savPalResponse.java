/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class CreateProcYm1000wpk0YntransfrmYm560savPalResponse implements Serializable {


    @ColumnAlias("pOutPalletid")
    private String poutPalletid;

    public String getPoutPalletid() {
        return this.poutPalletid;
    }

    public void setPoutPalletid(String poutPalletid) {
        this.poutPalletid = poutPalletid;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof CreateProcYm1000wpk0YntransfrmYm560savPalResponse)) return false;
        final CreateProcYm1000wpk0YntransfrmYm560savPalResponse createProcYm1000wpk0yntransfrmYm560savPalResponse = (CreateProcYm1000wpk0YntransfrmYm560savPalResponse) o;
        return Objects.equals(getPoutPalletid(), createProcYm1000wpk0yntransfrmYm560savPalResponse.getPoutPalletid());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutPalletid());
    }
}