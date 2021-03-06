/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class GetProcYm4000pk0Ym400rgwrhNumResponse implements Serializable {


    @ColumnAlias("pOutRGWrhNum")
    private List<GetProcYm4000pk0Ym400rgwrhNumResponsePoutRgwrhNum> poutRgwrhNum;

    public List<GetProcYm4000pk0Ym400rgwrhNumResponsePoutRgwrhNum> getPoutRgwrhNum() {
        return this.poutRgwrhNum;
    }

    public void setPoutRgwrhNum(List<GetProcYm4000pk0Ym400rgwrhNumResponsePoutRgwrhNum> poutRgwrhNum) {
        this.poutRgwrhNum = poutRgwrhNum;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof GetProcYm4000pk0Ym400rgwrhNumResponse)) return false;
        final GetProcYm4000pk0Ym400rgwrhNumResponse getProcYm4000pk0ym400rgwrhNumResponse = (GetProcYm4000pk0Ym400rgwrhNumResponse) o;
        return Objects.equals(getPoutRgwrhNum(), getProcYm4000pk0ym400rgwrhNumResponse.getPoutRgwrhNum());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutRgwrhNum());
    }
}