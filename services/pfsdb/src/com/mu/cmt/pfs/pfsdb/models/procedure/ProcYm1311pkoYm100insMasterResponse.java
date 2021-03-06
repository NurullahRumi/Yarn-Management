/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcYm1311pkoYm100insMasterResponse implements Serializable {


    @ColumnAlias("poutYRNCOD")
    private String poutYrncod;

    public String getPoutYrncod() {
        return this.poutYrncod;
    }

    public void setPoutYrncod(String poutYrncod) {
        this.poutYrncod = poutYrncod;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcYm1311pkoYm100insMasterResponse)) return false;
        final ProcYm1311pkoYm100insMasterResponse procYm1311pkoYm100insMasterResponse = (ProcYm1311pkoYm100insMasterResponse) o;
        return Objects.equals(getPoutYrncod(), procYm1311pkoYm100insMasterResponse.getPoutYrncod());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutYrncod());
    }
}