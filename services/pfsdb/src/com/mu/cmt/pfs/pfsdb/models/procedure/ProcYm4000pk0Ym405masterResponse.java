/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcYm4000pk0Ym405masterResponse implements Serializable {


    @ColumnAlias("pOutMaster")
    private List<ProcYm4000pk0Ym405masterResponsePoutMaster> poutMaster;

    public List<ProcYm4000pk0Ym405masterResponsePoutMaster> getPoutMaster() {
        return this.poutMaster;
    }

    public void setPoutMaster(List<ProcYm4000pk0Ym405masterResponsePoutMaster> poutMaster) {
        this.poutMaster = poutMaster;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcYm4000pk0Ym405masterResponse)) return false;
        final ProcYm4000pk0Ym405masterResponse procYm4000pk0ym405masterResponse = (ProcYm4000pk0Ym405masterResponse) o;
        return Objects.equals(getPoutMaster(), procYm4000pk0ym405masterResponse.getPoutMaster());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutMaster());
    }
}