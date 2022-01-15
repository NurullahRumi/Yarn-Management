/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class CreateProcYm1000wpk0YnretYm160addYrnRettoWrhResponse implements Serializable {


    @ColumnAlias("pOutretnum")
    private String poutretnum;

    public String getPoutretnum() {
        return this.poutretnum;
    }

    public void setPoutretnum(String poutretnum) {
        this.poutretnum = poutretnum;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof CreateProcYm1000wpk0YnretYm160addYrnRettoWrhResponse)) return false;
        final CreateProcYm1000wpk0YnretYm160addYrnRettoWrhResponse createProcYm1000wpk0ynretYm160addYrnRettoWrhResponse = (CreateProcYm1000wpk0YnretYm160addYrnRettoWrhResponse) o;
        return Objects.equals(getPoutretnum(), createProcYm1000wpk0ynretYm160addYrnRettoWrhResponse.getPoutretnum());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutretnum());
    }
}