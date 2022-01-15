/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcYm1311pk0Ym284insYarnPalletStkrResponse implements Serializable {


    @ColumnAlias("poutPalletId")
    private String poutPalletId;

    public String getPoutPalletId() {
        return this.poutPalletId;
    }

    public void setPoutPalletId(String poutPalletId) {
        this.poutPalletId = poutPalletId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcYm1311pk0Ym284insYarnPalletStkrResponse)) return false;
        final ProcYm1311pk0Ym284insYarnPalletStkrResponse procYm1311pk0ym284insYarnPalletStkrResponse = (ProcYm1311pk0Ym284insYarnPalletStkrResponse) o;
        return Objects.equals(getPoutPalletId(), procYm1311pk0ym284insYarnPalletStkrResponse.getPoutPalletId());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutPalletId());
    }
}