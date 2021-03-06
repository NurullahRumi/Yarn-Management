/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class GetProcYm311pk0ReqistYm311vldtYrnMixCodeResponse implements Serializable {


    @ColumnAlias("pOutCNT")
    private String poutCnt;

    @ColumnAlias("pOutCPS")
    private String poutCps;

    public String getPoutCnt() {
        return this.poutCnt;
    }

    public void setPoutCnt(String poutCnt) {
        this.poutCnt = poutCnt;
    }

    public String getPoutCps() {
        return this.poutCps;
    }

    public void setPoutCps(String poutCps) {
        this.poutCps = poutCps;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof GetProcYm311pk0ReqistYm311vldtYrnMixCodeResponse)) return false;
        final GetProcYm311pk0ReqistYm311vldtYrnMixCodeResponse getProcYm311pk0reqistYm311vldtYrnMixCodeResponse = (GetProcYm311pk0ReqistYm311vldtYrnMixCodeResponse) o;
        return Objects.equals(getPoutCnt(), getProcYm311pk0reqistYm311vldtYrnMixCodeResponse.getPoutCnt()) &&
                Objects.equals(getPoutCps(), getProcYm311pk0reqistYm311vldtYrnMixCodeResponse.getPoutCps());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutCnt(),
                getPoutCps());
    }
}