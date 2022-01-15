/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcYm1311pk0Ym650templateMaterialRefResponse implements Serializable {


    @ColumnAlias("poutTemplateMaterialRef")
    private List<ProcYm1311pk0Ym650templateMaterialRefResponsePoutTemplateMaterialRef> poutTemplateMaterialRef;

    public List<ProcYm1311pk0Ym650templateMaterialRefResponsePoutTemplateMaterialRef> getPoutTemplateMaterialRef() {
        return this.poutTemplateMaterialRef;
    }

    public void setPoutTemplateMaterialRef(List<ProcYm1311pk0Ym650templateMaterialRefResponsePoutTemplateMaterialRef> poutTemplateMaterialRef) {
        this.poutTemplateMaterialRef = poutTemplateMaterialRef;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcYm1311pk0Ym650templateMaterialRefResponse)) return false;
        final ProcYm1311pk0Ym650templateMaterialRefResponse procYm1311pk0ym650templateMaterialRefResponse = (ProcYm1311pk0Ym650templateMaterialRefResponse) o;
        return Objects.equals(getPoutTemplateMaterialRef(), procYm1311pk0ym650templateMaterialRefResponse.getPoutTemplateMaterialRef());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutTemplateMaterialRef());
    }
}