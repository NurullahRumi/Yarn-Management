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

public class CreateProcYm4000pk0Ym400insCpsTypRequest implements Serializable {


    @JsonProperty("pPrgid")
    private String pprgid;

    @JsonProperty("pContractID")
    private String pcontractId;

    @JsonProperty("pYnItemNO")
    private Integer pynItemNo;

    @JsonProperty("pSubCpsTyp")
    private String psubCpsTyp;

    @JsonProperty("pYrnFrac")
    private Integer pyrnFrac;

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

    public String getPsubCpsTyp() {
        return this.psubCpsTyp;
    }

    public void setPsubCpsTyp(String psubCpsTyp) {
        this.psubCpsTyp = psubCpsTyp;
    }

    public Integer getPyrnFrac() {
        return this.pyrnFrac;
    }

    public void setPyrnFrac(Integer pyrnFrac) {
        this.pyrnFrac = pyrnFrac;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof CreateProcYm4000pk0Ym400insCpsTypRequest)) return false;
        final CreateProcYm4000pk0Ym400insCpsTypRequest createProcYm4000pk0ym400insCpsTypRequest = (CreateProcYm4000pk0Ym400insCpsTypRequest) o;
        return Objects.equals(getPprgid(), createProcYm4000pk0ym400insCpsTypRequest.getPprgid()) &&
                Objects.equals(getPcontractId(), createProcYm4000pk0ym400insCpsTypRequest.getPcontractId()) &&
                Objects.equals(getPynItemNo(), createProcYm4000pk0ym400insCpsTypRequest.getPynItemNo()) &&
                Objects.equals(getPsubCpsTyp(), createProcYm4000pk0ym400insCpsTypRequest.getPsubCpsTyp()) &&
                Objects.equals(getPyrnFrac(), createProcYm4000pk0ym400insCpsTypRequest.getPyrnFrac());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPprgid(),
                getPcontractId(),
                getPynItemNo(),
                getPsubCpsTyp(),
                getPyrnFrac());
    }
}