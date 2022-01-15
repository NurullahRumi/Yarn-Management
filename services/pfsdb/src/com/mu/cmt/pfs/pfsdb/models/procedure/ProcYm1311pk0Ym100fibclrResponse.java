/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcYm1311pk0Ym100fibclrResponse implements Serializable {


    @ColumnAlias("poutYM100FIBCLR")
    private List<ProcYm1311pk0Ym100fibclrResponsePoutYm100fibclr> poutYm100fibclr;

    public List<ProcYm1311pk0Ym100fibclrResponsePoutYm100fibclr> getPoutYm100fibclr() {
        return this.poutYm100fibclr;
    }

    public void setPoutYm100fibclr(List<ProcYm1311pk0Ym100fibclrResponsePoutYm100fibclr> poutYm100fibclr) {
        this.poutYm100fibclr = poutYm100fibclr;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcYm1311pk0Ym100fibclrResponse)) return false;
        final ProcYm1311pk0Ym100fibclrResponse procYm1311pk0ym100fibclrResponse = (ProcYm1311pk0Ym100fibclrResponse) o;
        return Objects.equals(getPoutYm100fibclr(), procYm1311pk0ym100fibclrResponse.getPoutYm100fibclr());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutYm100fibclr());
    }
}