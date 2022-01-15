/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcYm1311pk0Ym100subcntsysResponse implements Serializable {


    @ColumnAlias("poutYM100SUBCNTSYS")
    private List<ProcYm1311pk0Ym100subcntsysResponsePoutYm100subcntsys> poutYm100subcntsys;

    public List<ProcYm1311pk0Ym100subcntsysResponsePoutYm100subcntsys> getPoutYm100subcntsys() {
        return this.poutYm100subcntsys;
    }

    public void setPoutYm100subcntsys(List<ProcYm1311pk0Ym100subcntsysResponsePoutYm100subcntsys> poutYm100subcntsys) {
        this.poutYm100subcntsys = poutYm100subcntsys;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcYm1311pk0Ym100subcntsysResponse)) return false;
        final ProcYm1311pk0Ym100subcntsysResponse procYm1311pk0ym100subcntsysResponse = (ProcYm1311pk0Ym100subcntsysResponse) o;
        return Objects.equals(getPoutYm100subcntsys(), procYm1311pk0ym100subcntsysResponse.getPoutYm100subcntsys());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutYm100subcntsys());
    }
}