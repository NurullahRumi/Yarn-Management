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

public class CreateProcYm250pk0YnsalesYm340addyrnslsRequest implements Serializable {


    @JsonProperty("pPrgid")
    private String pprgid;

    @JsonProperty("pDelnum")
    private Integer pdelnum;

    @JsonProperty("pDATESLD")
    private Date pdatesld;

    @JsonProperty("pBUYER")
    private String pbuyer;

    @JsonProperty("pWRHNUM")
    private String pwrhnum;

    @JsonProperty("pREQNUM")
    private String preqnum;

    @JsonProperty("pINVNUM")
    private String pinvnum;

    @JsonProperty("pPALLETID")
    private String ppalletid;

    @JsonProperty("pYRNCOD")
    private String pyrncod;

    @JsonProperty("pNUMCON")
    private Integer pnumcon;

    @JsonProperty("pNUMCAR")
    private Integer pnumcar;

    @JsonProperty("pQTYPHYS")
    private Float pqtyphys;

    @JsonProperty("pKGPRICE")
    private Float pkgprice;

    @JsonProperty("pREMARKS")
    private String premarks;

    public String getPprgid() {
        return this.pprgid;
    }

    public void setPprgid(String pprgid) {
        this.pprgid = pprgid;
    }

    public Integer getPdelnum() {
        return this.pdelnum;
    }

    public void setPdelnum(Integer pdelnum) {
        this.pdelnum = pdelnum;
    }

    public Date getPdatesld() {
        return this.pdatesld;
    }

    public void setPdatesld(Date pdatesld) {
        this.pdatesld = pdatesld;
    }

    public String getPbuyer() {
        return this.pbuyer;
    }

    public void setPbuyer(String pbuyer) {
        this.pbuyer = pbuyer;
    }

    public String getPwrhnum() {
        return this.pwrhnum;
    }

    public void setPwrhnum(String pwrhnum) {
        this.pwrhnum = pwrhnum;
    }

    public String getPreqnum() {
        return this.preqnum;
    }

    public void setPreqnum(String preqnum) {
        this.preqnum = preqnum;
    }

    public String getPinvnum() {
        return this.pinvnum;
    }

    public void setPinvnum(String pinvnum) {
        this.pinvnum = pinvnum;
    }

    public String getPpalletid() {
        return this.ppalletid;
    }

    public void setPpalletid(String ppalletid) {
        this.ppalletid = ppalletid;
    }

    public String getPyrncod() {
        return this.pyrncod;
    }

    public void setPyrncod(String pyrncod) {
        this.pyrncod = pyrncod;
    }

    public Integer getPnumcon() {
        return this.pnumcon;
    }

    public void setPnumcon(Integer pnumcon) {
        this.pnumcon = pnumcon;
    }

    public Integer getPnumcar() {
        return this.pnumcar;
    }

    public void setPnumcar(Integer pnumcar) {
        this.pnumcar = pnumcar;
    }

    public Float getPqtyphys() {
        return this.pqtyphys;
    }

    public void setPqtyphys(Float pqtyphys) {
        this.pqtyphys = pqtyphys;
    }

    public Float getPkgprice() {
        return this.pkgprice;
    }

    public void setPkgprice(Float pkgprice) {
        this.pkgprice = pkgprice;
    }

    public String getPremarks() {
        return this.premarks;
    }

    public void setPremarks(String premarks) {
        this.premarks = premarks;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof CreateProcYm250pk0YnsalesYm340addyrnslsRequest)) return false;
        final CreateProcYm250pk0YnsalesYm340addyrnslsRequest createProcYm250pk0ynsalesYm340addyrnslsRequest = (CreateProcYm250pk0YnsalesYm340addyrnslsRequest) o;
        return Objects.equals(getPprgid(), createProcYm250pk0ynsalesYm340addyrnslsRequest.getPprgid()) &&
                Objects.equals(getPdelnum(), createProcYm250pk0ynsalesYm340addyrnslsRequest.getPdelnum()) &&
                Objects.equals(getPdatesld(), createProcYm250pk0ynsalesYm340addyrnslsRequest.getPdatesld()) &&
                Objects.equals(getPbuyer(), createProcYm250pk0ynsalesYm340addyrnslsRequest.getPbuyer()) &&
                Objects.equals(getPwrhnum(), createProcYm250pk0ynsalesYm340addyrnslsRequest.getPwrhnum()) &&
                Objects.equals(getPreqnum(), createProcYm250pk0ynsalesYm340addyrnslsRequest.getPreqnum()) &&
                Objects.equals(getPinvnum(), createProcYm250pk0ynsalesYm340addyrnslsRequest.getPinvnum()) &&
                Objects.equals(getPpalletid(), createProcYm250pk0ynsalesYm340addyrnslsRequest.getPpalletid()) &&
                Objects.equals(getPyrncod(), createProcYm250pk0ynsalesYm340addyrnslsRequest.getPyrncod()) &&
                Objects.equals(getPnumcon(), createProcYm250pk0ynsalesYm340addyrnslsRequest.getPnumcon()) &&
                Objects.equals(getPnumcar(), createProcYm250pk0ynsalesYm340addyrnslsRequest.getPnumcar()) &&
                Objects.equals(getPqtyphys(), createProcYm250pk0ynsalesYm340addyrnslsRequest.getPqtyphys()) &&
                Objects.equals(getPkgprice(), createProcYm250pk0ynsalesYm340addyrnslsRequest.getPkgprice()) &&
                Objects.equals(getPremarks(), createProcYm250pk0ynsalesYm340addyrnslsRequest.getPremarks());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPprgid(),
                getPdelnum(),
                getPdatesld(),
                getPbuyer(),
                getPwrhnum(),
                getPreqnum(),
                getPinvnum(),
                getPpalletid(),
                getPyrncod(),
                getPnumcon(),
                getPnumcar(),
                getPqtyphys(),
                getPkgprice(),
                getPremarks());
    }
}