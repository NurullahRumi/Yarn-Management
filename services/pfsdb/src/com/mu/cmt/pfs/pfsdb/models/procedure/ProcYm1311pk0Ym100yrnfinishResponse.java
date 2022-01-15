/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcYm1311pk0Ym100yrnfinishResponse implements Serializable {


    @ColumnAlias("poutYM100YRNFINISH")
    private List<ProcYm1311pk0Ym100yrnfinishResponsePoutYm100yrnfinish> poutYm100yrnfinish;

    public List<ProcYm1311pk0Ym100yrnfinishResponsePoutYm100yrnfinish> getPoutYm100yrnfinish() {
        return this.poutYm100yrnfinish;
    }

    public void setPoutYm100yrnfinish(List<ProcYm1311pk0Ym100yrnfinishResponsePoutYm100yrnfinish> poutYm100yrnfinish) {
        this.poutYm100yrnfinish = poutYm100yrnfinish;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcYm1311pk0Ym100yrnfinishResponse)) return false;
        final ProcYm1311pk0Ym100yrnfinishResponse procYm1311pk0ym100yrnfinishResponse = (ProcYm1311pk0Ym100yrnfinishResponse) o;
        return Objects.equals(getPoutYm100yrnfinish(), procYm1311pk0ym100yrnfinishResponse.getPoutYm100yrnfinish());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutYm100yrnfinish());
    }
}