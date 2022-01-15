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

public class UpdateProcYm4000pk0Ym400lnkYrnCodRequest implements Serializable {


    @JsonProperty("pPrgid")
    private String pprgid;

    @JsonProperty("pContractID")
    private String pcontractId;

    @JsonProperty("pYnItemNo")
    private Integer pynItemNo;

    @JsonProperty("pContainerSeq")
    private Integer pcontainerSeq;

    @JsonProperty("pYrnCod")
    private String pyrnCod;

    public String getPprgid() {
        return this.pprgid;
    }

    public void setPprgid(String pprgid) {
        this.pprgid = pprgid;
    }

    public String getPcontractId() {
        return this.pcontractId;
    }

    public void setPcontractId(String pcontractId) {
        this.pcontractId = pcontractId;
    }

    public Integer getPynItemNo() {
        return this.pynItemNo;
    }

    public void setPynItemNo(Integer pynItemNo) {
        this.pynItemNo = pynItemNo;
    }

    public Integer getPcontainerSeq() {
        return this.pcontainerSeq;
    }

    public void setPcontainerSeq(Integer pcontainerSeq) {
        this.pcontainerSeq = pcontainerSeq;
    }

    public String getPyrnCod() {
        return this.pyrnCod;
    }

    public void setPyrnCod(String pyrnCod) {
        this.pyrnCod = pyrnCod;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof UpdateProcYm4000pk0Ym400lnkYrnCodRequest)) return false;
        final UpdateProcYm4000pk0Ym400lnkYrnCodRequest updateProcYm4000pk0ym400lnkYrnCodRequest = (UpdateProcYm4000pk0Ym400lnkYrnCodRequest) o;
        return Objects.equals(getPprgid(), updateProcYm4000pk0ym400lnkYrnCodRequest.getPprgid()) &&
                Objects.equals(getPcontractId(), updateProcYm4000pk0ym400lnkYrnCodRequest.getPcontractId()) &&
                Objects.equals(getPynItemNo(), updateProcYm4000pk0ym400lnkYrnCodRequest.getPynItemNo()) &&
                Objects.equals(getPcontainerSeq(), updateProcYm4000pk0ym400lnkYrnCodRequest.getPcontainerSeq()) &&
                Objects.equals(getPyrnCod(), updateProcYm4000pk0ym400lnkYrnCodRequest.getPyrnCod());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPprgid(),
                getPcontractId(),
                getPynItemNo(),
                getPcontainerSeq(),
                getPyrnCod());
    }
}