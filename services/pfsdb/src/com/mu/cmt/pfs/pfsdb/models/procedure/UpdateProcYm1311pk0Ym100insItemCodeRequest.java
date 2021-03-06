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

public class UpdateProcYm1311pk0Ym100insItemCodeRequest implements Serializable {


    @JsonProperty("pYrncod")
    private String pyrncod;

    @JsonProperty("pFIBDETSEQ")
    private Integer pfibdetseq;

    @JsonProperty("pItemcod")
    private String pitemcod;

    public String getPyrncod() {
        return this.pyrncod;
    }

    public void setPyrncod(String pyrncod) {
        this.pyrncod = pyrncod;
    }

    public Integer getPfibdetseq() {
        return this.pfibdetseq;
    }

    public void setPfibdetseq(Integer pfibdetseq) {
        this.pfibdetseq = pfibdetseq;
    }

    public String getPitemcod() {
        return this.pitemcod;
    }

    public void setPitemcod(String pitemcod) {
        this.pitemcod = pitemcod;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof UpdateProcYm1311pk0Ym100insItemCodeRequest)) return false;
        final UpdateProcYm1311pk0Ym100insItemCodeRequest updateProcYm1311pk0ym100insItemCodeRequest = (UpdateProcYm1311pk0Ym100insItemCodeRequest) o;
        return Objects.equals(getPyrncod(), updateProcYm1311pk0ym100insItemCodeRequest.getPyrncod()) &&
                Objects.equals(getPfibdetseq(), updateProcYm1311pk0ym100insItemCodeRequest.getPfibdetseq()) &&
                Objects.equals(getPitemcod(), updateProcYm1311pk0ym100insItemCodeRequest.getPitemcod());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPyrncod(),
                getPfibdetseq(),
                getPitemcod());
    }
}