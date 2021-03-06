/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcYm1311pk0Ym100yrnoriResponse implements Serializable {


    @ColumnAlias("poutYM100YRNORI")
    private List<ProcYm1311pk0Ym100yrnoriResponsePoutYm100yrnori> poutYm100yrnori;

    public List<ProcYm1311pk0Ym100yrnoriResponsePoutYm100yrnori> getPoutYm100yrnori() {
        return this.poutYm100yrnori;
    }

    public void setPoutYm100yrnori(List<ProcYm1311pk0Ym100yrnoriResponsePoutYm100yrnori> poutYm100yrnori) {
        this.poutYm100yrnori = poutYm100yrnori;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcYm1311pk0Ym100yrnoriResponse)) return false;
        final ProcYm1311pk0Ym100yrnoriResponse procYm1311pk0ym100yrnoriResponse = (ProcYm1311pk0Ym100yrnoriResponse) o;
        return Objects.equals(getPoutYm100yrnori(), procYm1311pk0ym100yrnoriResponse.getPoutYm100yrnori());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutYm100yrnori());
    }
}