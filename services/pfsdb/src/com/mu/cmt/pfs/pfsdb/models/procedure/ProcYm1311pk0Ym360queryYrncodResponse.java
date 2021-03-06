/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcYm1311pk0Ym360queryYrncodResponse implements Serializable {


    @ColumnAlias("poutQueryYrncod")
    private List<ProcYm1311pk0Ym360queryYrncodResponsePoutQueryYrncod> poutQueryYrncod;

    public List<ProcYm1311pk0Ym360queryYrncodResponsePoutQueryYrncod> getPoutQueryYrncod() {
        return this.poutQueryYrncod;
    }

    public void setPoutQueryYrncod(List<ProcYm1311pk0Ym360queryYrncodResponsePoutQueryYrncod> poutQueryYrncod) {
        this.poutQueryYrncod = poutQueryYrncod;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcYm1311pk0Ym360queryYrncodResponse)) return false;
        final ProcYm1311pk0Ym360queryYrncodResponse procYm1311pk0ym360queryYrncodResponse = (ProcYm1311pk0Ym360queryYrncodResponse) o;
        return Objects.equals(getPoutQueryYrncod(), procYm1311pk0ym360queryYrncodResponse.getPoutQueryYrncod());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutQueryYrncod());
    }
}