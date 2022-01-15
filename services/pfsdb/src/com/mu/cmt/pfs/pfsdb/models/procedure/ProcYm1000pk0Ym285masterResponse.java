/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcYm1000pk0Ym285masterResponse implements Serializable {


    @ColumnAlias("poutYM285MASTER")
    private List<ProcYm1000pk0Ym285masterResponsePoutYm285master> poutYm285master;

    public List<ProcYm1000pk0Ym285masterResponsePoutYm285master> getPoutYm285master() {
        return this.poutYm285master;
    }

    public void setPoutYm285master(List<ProcYm1000pk0Ym285masterResponsePoutYm285master> poutYm285master) {
        this.poutYm285master = poutYm285master;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcYm1000pk0Ym285masterResponse)) return false;
        final ProcYm1000pk0Ym285masterResponse procYm1000pk0ym285masterResponse = (ProcYm1000pk0Ym285masterResponse) o;
        return Objects.equals(getPoutYm285master(), procYm1000pk0ym285masterResponse.getPoutYm285master());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutYm285master());
    }
}