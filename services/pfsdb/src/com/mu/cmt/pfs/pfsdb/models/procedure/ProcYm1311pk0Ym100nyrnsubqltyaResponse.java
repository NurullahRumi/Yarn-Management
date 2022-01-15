/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcYm1311pk0Ym100nyrnsubqltyaResponse implements Serializable {


    @ColumnAlias("poutNYRNSUBQLTYA")
    private List<ProcYm1311pk0Ym100nyrnsubqltyaResponsePoutNyrnsubqltya> poutNyrnsubqltya;

    public List<ProcYm1311pk0Ym100nyrnsubqltyaResponsePoutNyrnsubqltya> getPoutNyrnsubqltya() {
        return this.poutNyrnsubqltya;
    }

    public void setPoutNyrnsubqltya(List<ProcYm1311pk0Ym100nyrnsubqltyaResponsePoutNyrnsubqltya> poutNyrnsubqltya) {
        this.poutNyrnsubqltya = poutNyrnsubqltya;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcYm1311pk0Ym100nyrnsubqltyaResponse)) return false;
        final ProcYm1311pk0Ym100nyrnsubqltyaResponse procYm1311pk0ym100nyrnsubqltyaResponse = (ProcYm1311pk0Ym100nyrnsubqltyaResponse) o;
        return Objects.equals(getPoutNyrnsubqltya(), procYm1311pk0ym100nyrnsubqltyaResponse.getPoutNyrnsubqltya());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutNyrnsubqltya());
    }
}