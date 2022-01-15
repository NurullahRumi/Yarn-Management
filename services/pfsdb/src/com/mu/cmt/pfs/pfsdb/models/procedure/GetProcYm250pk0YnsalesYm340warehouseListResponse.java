/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class GetProcYm250pk0YnsalesYm340warehouseListResponse implements Serializable {


    @ColumnAlias("pOutList")
    private List<GetProcYm250pk0YnsalesYm340warehouseListResponsePoutList> poutList;

    public List<GetProcYm250pk0YnsalesYm340warehouseListResponsePoutList> getPoutList() {
        return this.poutList;
    }

    public void setPoutList(List<GetProcYm250pk0YnsalesYm340warehouseListResponsePoutList> poutList) {
        this.poutList = poutList;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof GetProcYm250pk0YnsalesYm340warehouseListResponse)) return false;
        final GetProcYm250pk0YnsalesYm340warehouseListResponse getProcYm250pk0ynsalesYm340warehouseListResponse = (GetProcYm250pk0YnsalesYm340warehouseListResponse) o;
        return Objects.equals(getPoutList(), getProcYm250pk0ynsalesYm340warehouseListResponse.getPoutList());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutList());
    }
}