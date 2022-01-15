/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class GetProcYm1311pk0Ym100addItemCodResponse implements Serializable {


    @ColumnAlias("pOutItemCod")
    private List<GetProcYm1311pk0Ym100addItemCodResponsePoutItemCod> poutItemCod;

    public List<GetProcYm1311pk0Ym100addItemCodResponsePoutItemCod> getPoutItemCod() {
        return this.poutItemCod;
    }

    public void setPoutItemCod(List<GetProcYm1311pk0Ym100addItemCodResponsePoutItemCod> poutItemCod) {
        this.poutItemCod = poutItemCod;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof GetProcYm1311pk0Ym100addItemCodResponse)) return false;
        final GetProcYm1311pk0Ym100addItemCodResponse getProcYm1311pk0ym100addItemCodResponse = (GetProcYm1311pk0Ym100addItemCodResponse) o;
        return Objects.equals(getPoutItemCod(), getProcYm1311pk0ym100addItemCodResponse.getPoutItemCod());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutItemCod());
    }
}