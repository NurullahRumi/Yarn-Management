/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class GetProcYm1000wpk0YnreqnYm144rgordnumResponse implements Serializable {


    @ColumnAlias("pOutOrdnum")
    private List<GetProcYm1000wpk0YnreqnYm144rgordnumResponsePoutOrdnum> poutOrdnum;

    public List<GetProcYm1000wpk0YnreqnYm144rgordnumResponsePoutOrdnum> getPoutOrdnum() {
        return this.poutOrdnum;
    }

    public void setPoutOrdnum(List<GetProcYm1000wpk0YnreqnYm144rgordnumResponsePoutOrdnum> poutOrdnum) {
        this.poutOrdnum = poutOrdnum;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof GetProcYm1000wpk0YnreqnYm144rgordnumResponse)) return false;
        final GetProcYm1000wpk0YnreqnYm144rgordnumResponse getProcYm1000wpk0ynreqnYm144rgordnumResponse = (GetProcYm1000wpk0YnreqnYm144rgordnumResponse) o;
        return Objects.equals(getPoutOrdnum(), getProcYm1000wpk0ynreqnYm144rgordnumResponse.getPoutOrdnum());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutOrdnum());
    }
}