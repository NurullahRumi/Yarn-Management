/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcYm1000pk0Ym286detpalletResponse implements Serializable {


    @ColumnAlias("poutDETPALLET")
    private List<ProcYm1000pk0Ym286detpalletResponsePoutDetpallet> poutDetpallet;

    public List<ProcYm1000pk0Ym286detpalletResponsePoutDetpallet> getPoutDetpallet() {
        return this.poutDetpallet;
    }

    public void setPoutDetpallet(List<ProcYm1000pk0Ym286detpalletResponsePoutDetpallet> poutDetpallet) {
        this.poutDetpallet = poutDetpallet;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcYm1000pk0Ym286detpalletResponse)) return false;
        final ProcYm1000pk0Ym286detpalletResponse procYm1000pk0ym286detpalletResponse = (ProcYm1000pk0Ym286detpalletResponse) o;
        return Objects.equals(getPoutDetpallet(), procYm1000pk0ym286detpalletResponse.getPoutDetpallet());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutDetpallet());
    }
}