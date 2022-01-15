/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcYm1311pk0Ym650matctycodResponsePoutMatctycod implements Serializable {


    @ColumnAlias("CTYCOD")
    private String ctycod;

    @ColumnAlias("CTYABB")
    private String ctyabb;

    public String getCtycod() {
        return this.ctycod;
    }

    public void setCtycod(String ctycod) {
        this.ctycod = ctycod;
    }

    public String getCtyabb() {
        return this.ctyabb;
    }

    public void setCtyabb(String ctyabb) {
        this.ctyabb = ctyabb;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcYm1311pk0Ym650matctycodResponsePoutMatctycod)) return false;
        final ProcYm1311pk0Ym650matctycodResponsePoutMatctycod procYm1311pk0ym650matctycodResponsePoutMatctycod = (ProcYm1311pk0Ym650matctycodResponsePoutMatctycod) o;
        return Objects.equals(getCtycod(), procYm1311pk0ym650matctycodResponsePoutMatctycod.getCtycod()) &&
                Objects.equals(getCtyabb(), procYm1311pk0ym650matctycodResponsePoutMatctycod.getCtyabb());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getCtycod(),
                getCtyabb());
    }
}