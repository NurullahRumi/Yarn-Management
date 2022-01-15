/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class UpdateProcYm4000pk0Ym410ackPalletResponse implements Serializable {


    @ColumnAlias("pAckPallet")
    private Integer packPallet;

    public Integer getPackPallet() {
        return this.packPallet;
    }

    public void setPackPallet(Integer packPallet) {
        this.packPallet = packPallet;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof UpdateProcYm4000pk0Ym410ackPalletResponse)) return false;
        final UpdateProcYm4000pk0Ym410ackPalletResponse updateProcYm4000pk0ym410ackPalletResponse = (UpdateProcYm4000pk0Ym410ackPalletResponse) o;
        return Objects.equals(getPackPallet(), updateProcYm4000pk0ym410ackPalletResponse.getPackPallet());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPackPallet());
    }
}