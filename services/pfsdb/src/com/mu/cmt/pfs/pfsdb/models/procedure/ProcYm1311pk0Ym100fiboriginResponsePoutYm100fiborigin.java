/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcYm1311pk0Ym100fiboriginResponsePoutYm100fiborigin implements Serializable {


    @ColumnAlias("FIBORI")
    private String fibori;

    @ColumnAlias("SUPDES")
    private String supdes;

    public String getFibori() {
        return this.fibori;
    }

    public void setFibori(String fibori) {
        this.fibori = fibori;
    }

    public String getSupdes() {
        return this.supdes;
    }

    public void setSupdes(String supdes) {
        this.supdes = supdes;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcYm1311pk0Ym100fiboriginResponsePoutYm100fiborigin)) return false;
        final ProcYm1311pk0Ym100fiboriginResponsePoutYm100fiborigin procYm1311pk0ym100fiboriginResponsePoutYm100fiborigin = (ProcYm1311pk0Ym100fiboriginResponsePoutYm100fiborigin) o;
        return Objects.equals(getFibori(), procYm1311pk0ym100fiboriginResponsePoutYm100fiborigin.getFibori()) &&
                Objects.equals(getSupdes(), procYm1311pk0ym100fiboriginResponsePoutYm100fiborigin.getSupdes());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getFibori(),
                getSupdes());
    }
}