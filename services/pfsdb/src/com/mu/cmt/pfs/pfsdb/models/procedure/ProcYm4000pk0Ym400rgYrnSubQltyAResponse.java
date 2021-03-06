/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcYm4000pk0Ym400rgYrnSubQltyAResponse implements Serializable {


    @ColumnAlias("pOutRgYrnSubQltyA")
    private List<ProcYm4000pk0Ym400rgYrnSubQltyAResponsePoutRgYrnSubQltyA> poutRgYrnSubQltyA;

    public List<ProcYm4000pk0Ym400rgYrnSubQltyAResponsePoutRgYrnSubQltyA> getPoutRgYrnSubQltyA() {
        return this.poutRgYrnSubQltyA;
    }

    public void setPoutRgYrnSubQltyA(List<ProcYm4000pk0Ym400rgYrnSubQltyAResponsePoutRgYrnSubQltyA> poutRgYrnSubQltyA) {
        this.poutRgYrnSubQltyA = poutRgYrnSubQltyA;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcYm4000pk0Ym400rgYrnSubQltyAResponse)) return false;
        final ProcYm4000pk0Ym400rgYrnSubQltyAResponse procYm4000pk0ym400rgYrnSubQltyAresponse = (ProcYm4000pk0Ym400rgYrnSubQltyAResponse) o;
        return Objects.equals(getPoutRgYrnSubQltyA(), procYm4000pk0ym400rgYrnSubQltyAresponse.getPoutRgYrnSubQltyA());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutRgYrnSubQltyA());
    }
}