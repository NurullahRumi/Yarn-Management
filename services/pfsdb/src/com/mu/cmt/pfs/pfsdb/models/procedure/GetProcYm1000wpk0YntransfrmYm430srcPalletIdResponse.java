/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class GetProcYm1000wpk0YntransfrmYm430srcPalletIdResponse implements Serializable {


    @ColumnAlias("pOutpal")
    private List<GetProcYm1000wpk0YntransfrmYm430srcPalletIdResponsePoutpal> poutpal;

    public List<GetProcYm1000wpk0YntransfrmYm430srcPalletIdResponsePoutpal> getPoutpal() {
        return this.poutpal;
    }

    public void setPoutpal(List<GetProcYm1000wpk0YntransfrmYm430srcPalletIdResponsePoutpal> poutpal) {
        this.poutpal = poutpal;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof GetProcYm1000wpk0YntransfrmYm430srcPalletIdResponse)) return false;
        final GetProcYm1000wpk0YntransfrmYm430srcPalletIdResponse getProcYm1000wpk0yntransfrmYm430srcPalletIdResponse = (GetProcYm1000wpk0YntransfrmYm430srcPalletIdResponse) o;
        return Objects.equals(getPoutpal(), getProcYm1000wpk0yntransfrmYm430srcPalletIdResponse.getPoutpal());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutpal());
    }
}