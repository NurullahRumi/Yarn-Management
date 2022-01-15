/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class GetProcYm1000pk0Ym285recptSeqResponsePoutRecptSeq implements Serializable {


    @ColumnAlias("RECPNUM")
    private String recpnum;

    @ColumnAlias("CNTNUM")
    private String cntnum;

    @ColumnAlias("RCVDAT")
    private LocalDateTime rcvdat;

    @ColumnAlias("WRHNUM")
    private String wrhnum;

    @ColumnAlias("PALLETTYPE")
    private String pallettype;

    @ColumnAlias("TOTPALCREATED")
    private Short totpalcreated;

    @ColumnAlias("PALLETDESC")
    private String palletdesc;

    @ColumnAlias("MODID")
    private String modid;

    @ColumnAlias("MODDAT")
    private LocalDateTime moddat;

    @ColumnAlias("CONWGT")
    private Float conwgt;

    @ColumnAlias("CONCAR")
    private Short concar;

    @ColumnAlias("CARPALL")
    private Short carpall;

    @ColumnAlias("NUMCON")
    private Short numcon;

    @ColumnAlias("QTYREC")
    private Double qtyrec;

    public String getRecpnum() {
        return this.recpnum;
    }

    public void setRecpnum(String recpnum) {
        this.recpnum = recpnum;
    }

    public String getCntnum() {
        return this.cntnum;
    }

    public void setCntnum(String cntnum) {
        this.cntnum = cntnum;
    }

    public LocalDateTime getRcvdat() {
        return this.rcvdat;
    }

    public void setRcvdat(LocalDateTime rcvdat) {
        this.rcvdat = rcvdat;
    }

    public String getWrhnum() {
        return this.wrhnum;
    }

    public void setWrhnum(String wrhnum) {
        this.wrhnum = wrhnum;
    }

    public String getPallettype() {
        return this.pallettype;
    }

    public void setPallettype(String pallettype) {
        this.pallettype = pallettype;
    }

    public Short getTotpalcreated() {
        return this.totpalcreated;
    }

    public void setTotpalcreated(Short totpalcreated) {
        this.totpalcreated = totpalcreated;
    }

    public String getPalletdesc() {
        return this.palletdesc;
    }

    public void setPalletdesc(String palletdesc) {
        this.palletdesc = palletdesc;
    }

    public String getModid() {
        return this.modid;
    }

    public void setModid(String modid) {
        this.modid = modid;
    }

    public LocalDateTime getModdat() {
        return this.moddat;
    }

    public void setModdat(LocalDateTime moddat) {
        this.moddat = moddat;
    }

    public Float getConwgt() {
        return this.conwgt;
    }

    public void setConwgt(Float conwgt) {
        this.conwgt = conwgt;
    }

    public Short getConcar() {
        return this.concar;
    }

    public void setConcar(Short concar) {
        this.concar = concar;
    }

    public Short getCarpall() {
        return this.carpall;
    }

    public void setCarpall(Short carpall) {
        this.carpall = carpall;
    }

    public Short getNumcon() {
        return this.numcon;
    }

    public void setNumcon(Short numcon) {
        this.numcon = numcon;
    }

    public Double getQtyrec() {
        return this.qtyrec;
    }

    public void setQtyrec(Double qtyrec) {
        this.qtyrec = qtyrec;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof GetProcYm1000pk0Ym285recptSeqResponsePoutRecptSeq)) return false;
        final GetProcYm1000pk0Ym285recptSeqResponsePoutRecptSeq getProcYm1000pk0ym285recptSeqResponsePoutRecptSeq = (GetProcYm1000pk0Ym285recptSeqResponsePoutRecptSeq) o;
        return Objects.equals(getRecpnum(), getProcYm1000pk0ym285recptSeqResponsePoutRecptSeq.getRecpnum()) &&
                Objects.equals(getCntnum(), getProcYm1000pk0ym285recptSeqResponsePoutRecptSeq.getCntnum()) &&
                Objects.equals(getRcvdat(), getProcYm1000pk0ym285recptSeqResponsePoutRecptSeq.getRcvdat()) &&
                Objects.equals(getWrhnum(), getProcYm1000pk0ym285recptSeqResponsePoutRecptSeq.getWrhnum()) &&
                Objects.equals(getPallettype(), getProcYm1000pk0ym285recptSeqResponsePoutRecptSeq.getPallettype()) &&
                Objects.equals(getTotpalcreated(), getProcYm1000pk0ym285recptSeqResponsePoutRecptSeq.getTotpalcreated()) &&
                Objects.equals(getPalletdesc(), getProcYm1000pk0ym285recptSeqResponsePoutRecptSeq.getPalletdesc()) &&
                Objects.equals(getModid(), getProcYm1000pk0ym285recptSeqResponsePoutRecptSeq.getModid()) &&
                Objects.equals(getModdat(), getProcYm1000pk0ym285recptSeqResponsePoutRecptSeq.getModdat()) &&
                Objects.equals(getConwgt(), getProcYm1000pk0ym285recptSeqResponsePoutRecptSeq.getConwgt()) &&
                Objects.equals(getConcar(), getProcYm1000pk0ym285recptSeqResponsePoutRecptSeq.getConcar()) &&
                Objects.equals(getCarpall(), getProcYm1000pk0ym285recptSeqResponsePoutRecptSeq.getCarpall()) &&
                Objects.equals(getNumcon(), getProcYm1000pk0ym285recptSeqResponsePoutRecptSeq.getNumcon()) &&
                Objects.equals(getQtyrec(), getProcYm1000pk0ym285recptSeqResponsePoutRecptSeq.getQtyrec());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getRecpnum(),
                getCntnum(),
                getRcvdat(),
                getWrhnum(),
                getPallettype(),
                getTotpalcreated(),
                getPalletdesc(),
                getModid(),
                getModdat(),
                getConwgt(),
                getConcar(),
                getCarpall(),
                getNumcon(),
                getQtyrec());
    }
}