/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcYm1311pk0Ym100subcntcpsResponsePoutYm100subcntcps implements Serializable {


    @ColumnAlias("SUBCPSTYP")
    private String subcpstyp;

    @ColumnAlias("SUBCPSTYP_DES")
    private String subcpstypDes;

    public String getSubcpstyp() {
        return this.subcpstyp;
    }

    public void setSubcpstyp(String subcpstyp) {
        this.subcpstyp = subcpstyp;
    }

    public String getSubcpstypDes() {
        return this.subcpstypDes;
    }

    public void setSubcpstypDes(String subcpstypDes) {
        this.subcpstypDes = subcpstypDes;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcYm1311pk0Ym100subcntcpsResponsePoutYm100subcntcps)) return false;
        final ProcYm1311pk0Ym100subcntcpsResponsePoutYm100subcntcps procYm1311pk0ym100subcntcpsResponsePoutYm100subcntcps = (ProcYm1311pk0Ym100subcntcpsResponsePoutYm100subcntcps) o;
        return Objects.equals(getSubcpstyp(), procYm1311pk0ym100subcntcpsResponsePoutYm100subcntcps.getSubcpstyp()) &&
                Objects.equals(getSubcpstypDes(), procYm1311pk0ym100subcntcpsResponsePoutYm100subcntcps.getSubcpstypDes());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getSubcpstyp(),
                getSubcpstypDes());
    }
}