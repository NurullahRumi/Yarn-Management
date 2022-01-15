/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class GetProcYm1000wpk0YnretYm160listofWrhResponse implements Serializable {


    @ColumnAlias("pOutWrh")
    private List<GetProcYm1000wpk0YnretYm160listofWrhResponsePoutWrh> poutWrh;

    public List<GetProcYm1000wpk0YnretYm160listofWrhResponsePoutWrh> getPoutWrh() {
        return this.poutWrh;
    }

    public void setPoutWrh(List<GetProcYm1000wpk0YnretYm160listofWrhResponsePoutWrh> poutWrh) {
        this.poutWrh = poutWrh;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof GetProcYm1000wpk0YnretYm160listofWrhResponse)) return false;
        final GetProcYm1000wpk0YnretYm160listofWrhResponse getProcYm1000wpk0ynretYm160listofWrhResponse = (GetProcYm1000wpk0YnretYm160listofWrhResponse) o;
        return Objects.equals(getPoutWrh(), getProcYm1000wpk0ynretYm160listofWrhResponse.getPoutWrh());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutWrh());
    }
}