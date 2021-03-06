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

public class CreateProcYm1000wpk0YnreqnYm144addMasterRequest implements Serializable {


    @JsonProperty("pPrgid")
    private String pprgid;

    @JsonProperty("pReqnum")
    private BigDecimal preqnum;

    @JsonProperty("pWrhnum")
    private String pwrhnum;

    @JsonProperty("pDatereq")
    private Date pdatereq;

    @JsonProperty("pOrdnum")
    private String pordnum;

    @JsonProperty("pFabseq")
    private Integer pfabseq;

    @JsonProperty("pYrnid")
    private Integer pyrnid;

    @JsonProperty("pAlcseq")
    private Integer palcseq;

    @JsonProperty("pYrnmix")
    private String pyrnmix;

    @JsonProperty("pNumfeed")
    private Integer pnumfeed;

    @JsonProperty("pTotpal")
    private Integer ptotpal;

    @JsonProperty("pKmchcod")
    private String pkmchcod;

    public String getPprgid() {
        return this.pprgid;
    }

    public void setPprgid(String pprgid) {
        this.pprgid = pprgid;
    }

    public BigDecimal getPreqnum() {
        return this.preqnum;
    }

    public void setPreqnum(BigDecimal preqnum) {
        this.preqnum = preqnum;
    }

    public String getPwrhnum() {
        return this.pwrhnum;
    }

    public void setPwrhnum(String pwrhnum) {
        this.pwrhnum = pwrhnum;
    }

    public Date getPdatereq() {
        return this.pdatereq;
    }

    public void setPdatereq(Date pdatereq) {
        this.pdatereq = pdatereq;
    }

    public String getPordnum() {
        return this.pordnum;
    }

    public void setPordnum(String pordnum) {
        this.pordnum = pordnum;
    }

    public Integer getPfabseq() {
        return this.pfabseq;
    }

    public void setPfabseq(Integer pfabseq) {
        this.pfabseq = pfabseq;
    }

    public Integer getPyrnid() {
        return this.pyrnid;
    }

    public void setPyrnid(Integer pyrnid) {
        this.pyrnid = pyrnid;
    }

    public Integer getPalcseq() {
        return this.palcseq;
    }

    public void setPalcseq(Integer palcseq) {
        this.palcseq = palcseq;
    }

    public String getPyrnmix() {
        return this.pyrnmix;
    }

    public void setPyrnmix(String pyrnmix) {
        this.pyrnmix = pyrnmix;
    }

    public Integer getPnumfeed() {
        return this.pnumfeed;
    }

    public void setPnumfeed(Integer pnumfeed) {
        this.pnumfeed = pnumfeed;
    }

    public Integer getPtotpal() {
        return this.ptotpal;
    }

    public void setPtotpal(Integer ptotpal) {
        this.ptotpal = ptotpal;
    }

    public String getPkmchcod() {
        return this.pkmchcod;
    }

    public void setPkmchcod(String pkmchcod) {
        this.pkmchcod = pkmchcod;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof CreateProcYm1000wpk0YnreqnYm144addMasterRequest)) return false;
        final CreateProcYm1000wpk0YnreqnYm144addMasterRequest createProcYm1000wpk0ynreqnYm144addMasterRequest = (CreateProcYm1000wpk0YnreqnYm144addMasterRequest) o;
        return Objects.equals(getPprgid(), createProcYm1000wpk0ynreqnYm144addMasterRequest.getPprgid()) &&
                Objects.equals(getPreqnum(), createProcYm1000wpk0ynreqnYm144addMasterRequest.getPreqnum()) &&
                Objects.equals(getPwrhnum(), createProcYm1000wpk0ynreqnYm144addMasterRequest.getPwrhnum()) &&
                Objects.equals(getPdatereq(), createProcYm1000wpk0ynreqnYm144addMasterRequest.getPdatereq()) &&
                Objects.equals(getPordnum(), createProcYm1000wpk0ynreqnYm144addMasterRequest.getPordnum()) &&
                Objects.equals(getPfabseq(), createProcYm1000wpk0ynreqnYm144addMasterRequest.getPfabseq()) &&
                Objects.equals(getPyrnid(), createProcYm1000wpk0ynreqnYm144addMasterRequest.getPyrnid()) &&
                Objects.equals(getPalcseq(), createProcYm1000wpk0ynreqnYm144addMasterRequest.getPalcseq()) &&
                Objects.equals(getPyrnmix(), createProcYm1000wpk0ynreqnYm144addMasterRequest.getPyrnmix()) &&
                Objects.equals(getPnumfeed(), createProcYm1000wpk0ynreqnYm144addMasterRequest.getPnumfeed()) &&
                Objects.equals(getPtotpal(), createProcYm1000wpk0ynreqnYm144addMasterRequest.getPtotpal()) &&
                Objects.equals(getPkmchcod(), createProcYm1000wpk0ynreqnYm144addMasterRequest.getPkmchcod());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPprgid(),
                getPreqnum(),
                getPwrhnum(),
                getPdatereq(),
                getPordnum(),
                getPfabseq(),
                getPyrnid(),
                getPalcseq(),
                getPyrnmix(),
                getPnumfeed(),
                getPtotpal(),
                getPkmchcod());
    }
}