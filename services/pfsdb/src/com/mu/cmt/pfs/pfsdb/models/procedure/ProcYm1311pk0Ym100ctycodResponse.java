/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcYm1311pk0Ym100ctycodResponse implements Serializable {


    @ColumnAlias("poutYM100CTYCOD")
    private List<ProcYm1311pk0Ym100ctycodResponsePoutYm100ctycod> poutYm100ctycod;

    public List<ProcYm1311pk0Ym100ctycodResponsePoutYm100ctycod> getPoutYm100ctycod() {
        return this.poutYm100ctycod;
    }

    public void setPoutYm100ctycod(List<ProcYm1311pk0Ym100ctycodResponsePoutYm100ctycod> poutYm100ctycod) {
        this.poutYm100ctycod = poutYm100ctycod;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcYm1311pk0Ym100ctycodResponse)) return false;
        final ProcYm1311pk0Ym100ctycodResponse procYm1311pk0ym100ctycodResponse = (ProcYm1311pk0Ym100ctycodResponse) o;
        return Objects.equals(getPoutYm100ctycod(), procYm1311pk0ym100ctycodResponse.getPoutYm100ctycod());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutYm100ctycod());
    }
}