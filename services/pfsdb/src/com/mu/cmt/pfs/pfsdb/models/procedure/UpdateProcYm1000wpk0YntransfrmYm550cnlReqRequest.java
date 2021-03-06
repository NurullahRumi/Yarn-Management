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

public class UpdateProcYm1000wpk0YntransfrmYm550cnlReqRequest implements Serializable {


    @JsonProperty("pPrgid")
    private String pprgid;

    @JsonProperty("pNet")
    private BigDecimal pnet;

    @JsonProperty("pTrnreqno")
    private String ptrnreqno;

    @JsonProperty("pTrnreqseq")
    private Integer ptrnreqseq;

    @JsonProperty("pQtytransformed")
    private BigDecimal pqtytransformed;

    @JsonProperty("pSrcYrncod")
    private String psrcYrncod;

    @JsonProperty("pWrhnum")
    private String pwrhnum;

    public String getPprgid() {
        return this.pprgid;
    }

    public void setPprgid(String pprgid) {
        this.pprgid = pprgid;
    }

    public BigDecimal getPnet() {
        return this.pnet;
    }

    public void setPnet(BigDecimal pnet) {
        this.pnet = pnet;
    }

    public String getPtrnreqno() {
        return this.ptrnreqno;
    }

    public void setPtrnreqno(String ptrnreqno) {
        this.ptrnreqno = ptrnreqno;
    }

    public Integer getPtrnreqseq() {
        return this.ptrnreqseq;
    }

    public void setPtrnreqseq(Integer ptrnreqseq) {
        this.ptrnreqseq = ptrnreqseq;
    }

    public BigDecimal getPqtytransformed() {
        return this.pqtytransformed;
    }

    public void setPqtytransformed(BigDecimal pqtytransformed) {
        this.pqtytransformed = pqtytransformed;
    }

    public String getPsrcYrncod() {
        return this.psrcYrncod;
    }

    public void setPsrcYrncod(String psrcYrncod) {
        this.psrcYrncod = psrcYrncod;
    }

    public String getPwrhnum() {
        return this.pwrhnum;
    }

    public void setPwrhnum(String pwrhnum) {
        this.pwrhnum = pwrhnum;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof UpdateProcYm1000wpk0YntransfrmYm550cnlReqRequest)) return false;
        final UpdateProcYm1000wpk0YntransfrmYm550cnlReqRequest updateProcYm1000wpk0yntransfrmYm550cnlReqRequest = (UpdateProcYm1000wpk0YntransfrmYm550cnlReqRequest) o;
        return Objects.equals(getPprgid(), updateProcYm1000wpk0yntransfrmYm550cnlReqRequest.getPprgid()) &&
                Objects.equals(getPnet(), updateProcYm1000wpk0yntransfrmYm550cnlReqRequest.getPnet()) &&
                Objects.equals(getPtrnreqno(), updateProcYm1000wpk0yntransfrmYm550cnlReqRequest.getPtrnreqno()) &&
                Objects.equals(getPtrnreqseq(), updateProcYm1000wpk0yntransfrmYm550cnlReqRequest.getPtrnreqseq()) &&
                Objects.equals(getPqtytransformed(), updateProcYm1000wpk0yntransfrmYm550cnlReqRequest.getPqtytransformed()) &&
                Objects.equals(getPsrcYrncod(), updateProcYm1000wpk0yntransfrmYm550cnlReqRequest.getPsrcYrncod()) &&
                Objects.equals(getPwrhnum(), updateProcYm1000wpk0yntransfrmYm550cnlReqRequest.getPwrhnum());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPprgid(),
                getPnet(),
                getPtrnreqno(),
                getPtrnreqseq(),
                getPqtytransformed(),
                getPsrcYrncod(),
                getPwrhnum());
    }
}