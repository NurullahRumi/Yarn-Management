/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class GetProcYm1000wpk0YntransfrmYm430rgfabseqResponsePoutFabseq implements Serializable {


    @ColumnAlias("FABSEQ")
    private Byte fabseq;

    public Byte getFabseq() {
        return this.fabseq;
    }

    public void setFabseq(Byte fabseq) {
        this.fabseq = fabseq;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof GetProcYm1000wpk0YntransfrmYm430rgfabseqResponsePoutFabseq)) return false;
        final GetProcYm1000wpk0YntransfrmYm430rgfabseqResponsePoutFabseq getProcYm1000wpk0yntransfrmYm430rgfabseqResponsePoutFabseq = (GetProcYm1000wpk0YntransfrmYm430rgfabseqResponsePoutFabseq) o;
        return Objects.equals(getFabseq(), getProcYm1000wpk0yntransfrmYm430rgfabseqResponsePoutFabseq.getFabseq());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getFabseq());
    }
}