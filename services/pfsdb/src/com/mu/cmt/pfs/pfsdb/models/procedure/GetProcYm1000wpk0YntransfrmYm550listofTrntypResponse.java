/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class GetProcYm1000wpk0YntransfrmYm550listofTrntypResponse implements Serializable {


    @ColumnAlias("pOutTrntyp")
    private List<GetProcYm1000wpk0YntransfrmYm550listofTrntypResponsePoutTrntyp> poutTrntyp;

    public List<GetProcYm1000wpk0YntransfrmYm550listofTrntypResponsePoutTrntyp> getPoutTrntyp() {
        return this.poutTrntyp;
    }

    public void setPoutTrntyp(List<GetProcYm1000wpk0YntransfrmYm550listofTrntypResponsePoutTrntyp> poutTrntyp) {
        this.poutTrntyp = poutTrntyp;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof GetProcYm1000wpk0YntransfrmYm550listofTrntypResponse)) return false;
        final GetProcYm1000wpk0YntransfrmYm550listofTrntypResponse getProcYm1000wpk0yntransfrmYm550listofTrntypResponse = (GetProcYm1000wpk0YntransfrmYm550listofTrntypResponse) o;
        return Objects.equals(getPoutTrntyp(), getProcYm1000wpk0yntransfrmYm550listofTrntypResponse.getPoutTrntyp());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutTrntyp());
    }
}