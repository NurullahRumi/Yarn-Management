/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class GetProcYm1000wpk0YnreqnYm144rgfabseqResponse implements Serializable {


    @ColumnAlias("pOutFabseq")
    private List<GetProcYm1000wpk0YnreqnYm144rgfabseqResponsePoutFabseq> poutFabseq;

    public List<GetProcYm1000wpk0YnreqnYm144rgfabseqResponsePoutFabseq> getPoutFabseq() {
        return this.poutFabseq;
    }

    public void setPoutFabseq(List<GetProcYm1000wpk0YnreqnYm144rgfabseqResponsePoutFabseq> poutFabseq) {
        this.poutFabseq = poutFabseq;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof GetProcYm1000wpk0YnreqnYm144rgfabseqResponse)) return false;
        final GetProcYm1000wpk0YnreqnYm144rgfabseqResponse getProcYm1000wpk0ynreqnYm144rgfabseqResponse = (GetProcYm1000wpk0YnreqnYm144rgfabseqResponse) o;
        return Objects.equals(getPoutFabseq(), getProcYm1000wpk0ynreqnYm144rgfabseqResponse.getPoutFabseq());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutFabseq());
    }
}