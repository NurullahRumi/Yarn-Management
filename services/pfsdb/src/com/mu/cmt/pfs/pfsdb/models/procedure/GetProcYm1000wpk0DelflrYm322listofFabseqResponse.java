/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class GetProcYm1000wpk0DelflrYm322listofFabseqResponse implements Serializable {


    @ColumnAlias("pOutListoffabseq")
    private List<GetProcYm1000wpk0DelflrYm322listofFabseqResponsePoutListoffabseq> poutListoffabseq;

    @ColumnAlias("pOutClinam")
    private String poutClinam;

    public List<GetProcYm1000wpk0DelflrYm322listofFabseqResponsePoutListoffabseq> getPoutListoffabseq() {
        return this.poutListoffabseq;
    }

    public void setPoutListoffabseq(List<GetProcYm1000wpk0DelflrYm322listofFabseqResponsePoutListoffabseq> poutListoffabseq) {
        this.poutListoffabseq = poutListoffabseq;
    }

    public String getPoutClinam() {
        return this.poutClinam;
    }

    public void setPoutClinam(String poutClinam) {
        this.poutClinam = poutClinam;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof GetProcYm1000wpk0DelflrYm322listofFabseqResponse)) return false;
        final GetProcYm1000wpk0DelflrYm322listofFabseqResponse getProcYm1000wpk0delflrYm322listofFabseqResponse = (GetProcYm1000wpk0DelflrYm322listofFabseqResponse) o;
        return Objects.equals(getPoutListoffabseq(), getProcYm1000wpk0delflrYm322listofFabseqResponse.getPoutListoffabseq()) &&
                Objects.equals(getPoutClinam(), getProcYm1000wpk0delflrYm322listofFabseqResponse.getPoutClinam());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutListoffabseq(),
                getPoutClinam());
    }
}