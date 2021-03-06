/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class GetYm250pk0YnsalesYm340qryYrnSoldResponse implements Serializable {


    @ColumnAlias("pOutQryYrnSold")
    private List<GetYm250pk0YnsalesYm340qryYrnSoldResponsePoutQryYrnSold> poutQryYrnSold;

    public List<GetYm250pk0YnsalesYm340qryYrnSoldResponsePoutQryYrnSold> getPoutQryYrnSold() {
        return this.poutQryYrnSold;
    }

    public void setPoutQryYrnSold(List<GetYm250pk0YnsalesYm340qryYrnSoldResponsePoutQryYrnSold> poutQryYrnSold) {
        this.poutQryYrnSold = poutQryYrnSold;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof GetYm250pk0YnsalesYm340qryYrnSoldResponse)) return false;
        final GetYm250pk0YnsalesYm340qryYrnSoldResponse getYm250pk0ynsalesYm340qryYrnSoldResponse = (GetYm250pk0YnsalesYm340qryYrnSoldResponse) o;
        return Objects.equals(getPoutQryYrnSold(), getYm250pk0ynsalesYm340qryYrnSoldResponse.getPoutQryYrnSold());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutQryYrnSold());
    }
}