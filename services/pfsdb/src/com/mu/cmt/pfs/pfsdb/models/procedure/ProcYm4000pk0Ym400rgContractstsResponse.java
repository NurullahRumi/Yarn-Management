/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcYm4000pk0Ym400rgContractstsResponse implements Serializable {


    @ColumnAlias("pOutRgCONTRACTSTS")
    private List<ProcYm4000pk0Ym400rgContractstsResponsePoutRgContractsts> poutRgContractsts;

    public List<ProcYm4000pk0Ym400rgContractstsResponsePoutRgContractsts> getPoutRgContractsts() {
        return this.poutRgContractsts;
    }

    public void setPoutRgContractsts(List<ProcYm4000pk0Ym400rgContractstsResponsePoutRgContractsts> poutRgContractsts) {
        this.poutRgContractsts = poutRgContractsts;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcYm4000pk0Ym400rgContractstsResponse)) return false;
        final ProcYm4000pk0Ym400rgContractstsResponse procYm4000pk0ym400rgContractstsResponse = (ProcYm4000pk0Ym400rgContractstsResponse) o;
        return Objects.equals(getPoutRgContractsts(), procYm4000pk0ym400rgContractstsResponse.getPoutRgContractsts());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutRgContractsts());
    }
}