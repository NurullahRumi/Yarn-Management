/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcYm1311pk0Ym650ctyCodResponse implements Serializable {


    @ColumnAlias("POUTCtyCod")
    private List<ProcYm1311pk0Ym650ctyCodResponsePoutctyCod> poutctyCod;

    public List<ProcYm1311pk0Ym650ctyCodResponsePoutctyCod> getPoutctyCod() {
        return this.poutctyCod;
    }

    public void setPoutctyCod(List<ProcYm1311pk0Ym650ctyCodResponsePoutctyCod> poutctyCod) {
        this.poutctyCod = poutctyCod;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcYm1311pk0Ym650ctyCodResponse)) return false;
        final ProcYm1311pk0Ym650ctyCodResponse procYm1311pk0ym650ctyCodResponse = (ProcYm1311pk0Ym650ctyCodResponse) o;
        return Objects.equals(getPoutctyCod(), procYm1311pk0ym650ctyCodResponse.getPoutctyCod());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutctyCod());
    }
}