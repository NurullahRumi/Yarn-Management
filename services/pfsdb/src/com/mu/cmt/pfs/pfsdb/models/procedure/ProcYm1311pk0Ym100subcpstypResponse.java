/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcYm1311pk0Ym100subcpstypResponse implements Serializable {


    @ColumnAlias("poutYM100SUBCPSTYP")
    private List<ProcYm1311pk0Ym100subcpstypResponsePoutYm100subcpstyp> poutYm100subcpstyp;

    public List<ProcYm1311pk0Ym100subcpstypResponsePoutYm100subcpstyp> getPoutYm100subcpstyp() {
        return this.poutYm100subcpstyp;
    }

    public void setPoutYm100subcpstyp(List<ProcYm1311pk0Ym100subcpstypResponsePoutYm100subcpstyp> poutYm100subcpstyp) {
        this.poutYm100subcpstyp = poutYm100subcpstyp;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcYm1311pk0Ym100subcpstypResponse)) return false;
        final ProcYm1311pk0Ym100subcpstypResponse procYm1311pk0ym100subcpstypResponse = (ProcYm1311pk0Ym100subcpstypResponse) o;
        return Objects.equals(getPoutYm100subcpstyp(), procYm1311pk0ym100subcpstypResponse.getPoutYm100subcpstyp());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutYm100subcpstyp());
    }
}