/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcYm1311pk0Ym100fibdiameterUomResponse implements Serializable {


    @ColumnAlias("poutYM100FIBDIAMETERUOM")
    private List<ProcYm1311pk0Ym100fibdiameterUomResponsePoutYm100fibdiameteruom> poutYm100fibdiameteruom;

    public List<ProcYm1311pk0Ym100fibdiameterUomResponsePoutYm100fibdiameteruom> getPoutYm100fibdiameteruom() {
        return this.poutYm100fibdiameteruom;
    }

    public void setPoutYm100fibdiameteruom(List<ProcYm1311pk0Ym100fibdiameterUomResponsePoutYm100fibdiameteruom> poutYm100fibdiameteruom) {
        this.poutYm100fibdiameteruom = poutYm100fibdiameteruom;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcYm1311pk0Ym100fibdiameterUomResponse)) return false;
        final ProcYm1311pk0Ym100fibdiameterUomResponse procYm1311pk0ym100fibdiameterUomResponse = (ProcYm1311pk0Ym100fibdiameterUomResponse) o;
        return Objects.equals(getPoutYm100fibdiameteruom(), procYm1311pk0ym100fibdiameterUomResponse.getPoutYm100fibdiameteruom());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutYm100fibdiameteruom());
    }
}