/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.math.BigDecimal;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class GetProcYm1000wpk0DelflrYm323nonbaseResponsePoutblnce implements Serializable {


    @ColumnAlias("BALANCE")
    private BigDecimal balance;

    public BigDecimal getBalance() {
        return this.balance;
    }

    public void setBalance(BigDecimal balance) {
        this.balance = balance;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof GetProcYm1000wpk0DelflrYm323nonbaseResponsePoutblnce)) return false;
        final GetProcYm1000wpk0DelflrYm323nonbaseResponsePoutblnce getProcYm1000wpk0delflrYm323nonbaseResponsePoutblnce = (GetProcYm1000wpk0DelflrYm323nonbaseResponsePoutblnce) o;
        return Objects.equals(getBalance(), getProcYm1000wpk0delflrYm323nonbaseResponsePoutblnce.getBalance());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getBalance());
    }
}