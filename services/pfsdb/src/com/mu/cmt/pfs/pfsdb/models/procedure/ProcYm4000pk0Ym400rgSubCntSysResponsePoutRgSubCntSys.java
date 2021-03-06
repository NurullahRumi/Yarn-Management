/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcYm4000pk0Ym400rgSubCntSysResponsePoutRgSubCntSys implements Serializable {


    @ColumnAlias("CNTSYS")
    private String cntsys;

    public String getCntsys() {
        return this.cntsys;
    }

    public void setCntsys(String cntsys) {
        this.cntsys = cntsys;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcYm4000pk0Ym400rgSubCntSysResponsePoutRgSubCntSys)) return false;
        final ProcYm4000pk0Ym400rgSubCntSysResponsePoutRgSubCntSys procYm4000pk0ym400rgSubCntSysResponsePoutRgSubCntSys = (ProcYm4000pk0Ym400rgSubCntSysResponsePoutRgSubCntSys) o;
        return Objects.equals(getCntsys(), procYm4000pk0ym400rgSubCntSysResponsePoutRgSubCntSys.getCntsys());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getCntsys());
    }
}