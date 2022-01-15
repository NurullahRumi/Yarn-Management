/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.query;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class QryYm650ReceiptTrnnumResponse implements Serializable {


    @ColumnAlias("RECEIPTTRNNUM")
    private BigDecimal receipttrnnum;

    public BigDecimal getReceipttrnnum() {
        return this.receipttrnnum;
    }

    public void setReceipttrnnum(BigDecimal receipttrnnum) {
        this.receipttrnnum = receipttrnnum;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof QryYm650ReceiptTrnnumResponse)) return false;
        final QryYm650ReceiptTrnnumResponse qryYm650receiptTrnnumResponse = (QryYm650ReceiptTrnnumResponse) o;
        return Objects.equals(getReceipttrnnum(), qryYm650receiptTrnnumResponse.getReceipttrnnum());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getReceipttrnnum());
    }
}