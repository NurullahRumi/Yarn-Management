/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.query;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class QryYm650MaterialcodeResponse implements Serializable {


    @ColumnAlias("MATERIALCODE")
    private String materialcode;

    public String getMaterialcode() {
        return this.materialcode;
    }

    public void setMaterialcode(String materialcode) {
        this.materialcode = materialcode;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof QryYm650MaterialcodeResponse)) return false;
        final QryYm650MaterialcodeResponse qryYm650materialcodeResponse = (QryYm650MaterialcodeResponse) o;
        return Objects.equals(getMaterialcode(), qryYm650materialcodeResponse.getMaterialcode());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getMaterialcode());
    }
}