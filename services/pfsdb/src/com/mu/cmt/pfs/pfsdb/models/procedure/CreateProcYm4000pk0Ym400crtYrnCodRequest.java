/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.math.BigDecimal;
import java.sql.Date;
import java.util.Objects;

import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateProcYm4000pk0Ym400crtYrnCodRequest implements Serializable {


    @JsonProperty("pPrgid")
    private String pprgid;

    @JsonProperty("pContractID")
    private String pcontractId;

    @JsonProperty("pYnItemNo")
    private Integer pynItemNo;

    @JsonProperty("pContaierSeq")
    private Integer pcontaierSeq;

    @JsonProperty("pYrnSource")
    private String pyrnSource;

    @JsonProperty("pYrnCategory")
    private String pyrnCategory;

    @JsonProperty("pYrnTyp")
    private String pyrnTyp;

    @JsonProperty("pRawMat")
    private String prawMat;

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

    public Integer getPcontaierSeq() {
        return this.pcontaierSeq;
    }

    public void setPcontaierSeq(Integer pcontaierSeq) {
        this.pcontaierSeq = pcontaierSeq;
    }

    public String getPyrnSource() {
        return this.pyrnSource;
    }

    public void setPyrnSource(String pyrnSource) {
        this.pyrnSource = pyrnSource;
    }

    public String getPyrnCategory() {
        return this.pyrnCategory;
    }

    public void setPyrnCategory(String pyrnCategory) {
        this.pyrnCategory = pyrnCategory;
    }

    public String getPyrnTyp() {
        return this.pyrnTyp;
    }

    public void setPyrnTyp(String pyrnTyp) {
        this.pyrnTyp = pyrnTyp;
    }

    public String getPrawMat() {
        return this.prawMat;
    }

    public void setPrawMat(String prawMat) {
        this.prawMat = prawMat;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof CreateProcYm4000pk0Ym400crtYrnCodRequest)) return false;
        final CreateProcYm4000pk0Ym400crtYrnCodRequest createProcYm4000pk0ym400crtYrnCodRequest = (CreateProcYm4000pk0Ym400crtYrnCodRequest) o;
        return Objects.equals(getPprgid(), createProcYm4000pk0ym400crtYrnCodRequest.getPprgid()) &&
                Objects.equals(getPcontractId(), createProcYm4000pk0ym400crtYrnCodRequest.getPcontractId()) &&
                Objects.equals(getPynItemNo(), createProcYm4000pk0ym400crtYrnCodRequest.getPynItemNo()) &&
                Objects.equals(getPcontaierSeq(), createProcYm4000pk0ym400crtYrnCodRequest.getPcontaierSeq()) &&
                Objects.equals(getPyrnSource(), createProcYm4000pk0ym400crtYrnCodRequest.getPyrnSource()) &&
                Objects.equals(getPyrnCategory(), createProcYm4000pk0ym400crtYrnCodRequest.getPyrnCategory()) &&
                Objects.equals(getPyrnTyp(), createProcYm4000pk0ym400crtYrnCodRequest.getPyrnTyp()) &&
                Objects.equals(getPrawMat(), createProcYm4000pk0ym400crtYrnCodRequest.getPrawMat());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPprgid(),
                getPcontractId(),
                getPynItemNo(),
                getPcontaierSeq(),
                getPyrnSource(),
                getPyrnCategory(),
                getPyrnTyp(),
                getPrawMat());
    }
}