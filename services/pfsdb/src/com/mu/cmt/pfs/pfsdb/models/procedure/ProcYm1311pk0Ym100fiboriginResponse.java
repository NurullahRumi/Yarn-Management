/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcYm1311pk0Ym100fiboriginResponse implements Serializable {


    @ColumnAlias("poutYM100FIBORIGIN")
    private List<ProcYm1311pk0Ym100fiboriginResponsePoutYm100fiborigin> poutYm100fiborigin;

    public List<ProcYm1311pk0Ym100fiboriginResponsePoutYm100fiborigin> getPoutYm100fiborigin() {
        return this.poutYm100fiborigin;
    }

    public void setPoutYm100fiborigin(List<ProcYm1311pk0Ym100fiboriginResponsePoutYm100fiborigin> poutYm100fiborigin) {
        this.poutYm100fiborigin = poutYm100fiborigin;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcYm1311pk0Ym100fiboriginResponse)) return false;
        final ProcYm1311pk0Ym100fiboriginResponse procYm1311pk0ym100fiboriginResponse = (ProcYm1311pk0Ym100fiboriginResponse) o;
        return Objects.equals(getPoutYm100fiborigin(), procYm1311pk0ym100fiboriginResponse.getPoutYm100fiborigin());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutYm100fiborigin());
    }
}