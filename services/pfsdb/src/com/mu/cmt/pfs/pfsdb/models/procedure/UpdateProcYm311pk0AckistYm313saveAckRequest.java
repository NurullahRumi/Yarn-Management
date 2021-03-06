/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.math.BigDecimal;
import java.sql.Date;
import java.util.Objects;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateProcYm311pk0AckistYm313saveAckRequest implements Serializable {


    @JsonProperty("pPrgid")
    private String pprgid;

    @JsonProperty("pTrnNum")
    private Integer ptrnNum;

    @JsonProperty("pYrnMixCode")
    private String pyrnMixCode;

    @JsonProperty("pPalletId")
    private String ppalletId;

    public String getPprgid() {
        return this.pprgid;
    }

    public void setPprgid(String pprgid) {
        this.pprgid = pprgid;
    }

    public Integer getPtrnNum() {
        return this.ptrnNum;
    }

    public void setPtrnNum(Integer ptrnNum) {
        this.ptrnNum = ptrnNum;
    }

    public String getPyrnMixCode() {
        return this.pyrnMixCode;
    }

    public void setPyrnMixCode(String pyrnMixCode) {
        this.pyrnMixCode = pyrnMixCode;
    }

    public String getPpalletId() {
        return this.ppalletId;
    }

    public void setPpalletId(String ppalletId) {
        this.ppalletId = ppalletId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof UpdateProcYm311pk0AckistYm313saveAckRequest)) return false;
        final UpdateProcYm311pk0AckistYm313saveAckRequest updateProcYm311pk0ackistYm313saveAckRequest = (UpdateProcYm311pk0AckistYm313saveAckRequest) o;
        return Objects.equals(getPprgid(), updateProcYm311pk0ackistYm313saveAckRequest.getPprgid()) &&
                Objects.equals(getPtrnNum(), updateProcYm311pk0ackistYm313saveAckRequest.getPtrnNum()) &&
                Objects.equals(getPyrnMixCode(), updateProcYm311pk0ackistYm313saveAckRequest.getPyrnMixCode()) &&
                Objects.equals(getPpalletId(), updateProcYm311pk0ackistYm313saveAckRequest.getPpalletId());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPprgid(),
                getPtrnNum(),
                getPyrnMixCode(),
                getPpalletId());
    }
}