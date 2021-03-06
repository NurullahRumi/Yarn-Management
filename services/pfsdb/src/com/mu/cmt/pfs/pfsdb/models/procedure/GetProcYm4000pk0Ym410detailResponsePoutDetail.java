/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class GetProcYm4000pk0Ym410detailResponsePoutDetail implements Serializable {


    @ColumnAlias("CONTRACTID")
    private String contractid;

    @ColumnAlias("YNITEMNO")
    private Byte ynitemno;

    @ColumnAlias("CONTAINER_SEQ")
    private Short containerSeq;

    @ColumnAlias("PALLET_SEQ")
    private Short palletSeq;

    @ColumnAlias("PALLETID")
    private String palletid;

    @ColumnAlias("CONWGT")
    private Float conwgt;

    @ColumnAlias("NUMCONES")
    private Integer numcones;

    @ColumnAlias("PALLETCAT")
    private String palletcat;

    @ColumnAlias("CONCAR")
    private Short concar;

    @ColumnAlias("CARPALL")
    private Short carpall;

    @ColumnAlias("W_PALLETDESC")
    private String wpalletdesc;

    public String getContractid() {
        return this.contractid;
    }

    public void setContractid(String contractid) {
        this.contractid = contractid;
    }

    public Byte getYnitemno() {
        return this.ynitemno;
    }

    public void setYnitemno(Byte ynitemno) {
        this.ynitemno = ynitemno;
    }

    public Short getContainerSeq() {
        return this.containerSeq;
    }

    public void setContainerSeq(Short containerSeq) {
        this.containerSeq = containerSeq;
    }

    public Short getPalletSeq() {
        return this.palletSeq;
    }

    public void setPalletSeq(Short palletSeq) {
        this.palletSeq = palletSeq;
    }

    public String getPalletid() {
        return this.palletid;
    }

    public void setPalletid(String palletid) {
        this.palletid = palletid;
    }

    public Float getConwgt() {
        return this.conwgt;
    }

    public void setConwgt(Float conwgt) {
        this.conwgt = conwgt;
    }

    public Integer getNumcones() {
        return this.numcones;
    }

    public void setNumcones(Integer numcones) {
        this.numcones = numcones;
    }

    public String getPalletcat() {
        return this.palletcat;
    }

    public void setPalletcat(String palletcat) {
        this.palletcat = palletcat;
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

    public String getWpalletdesc() {
        return this.wpalletdesc;
    }

    public void setWpalletdesc(String wpalletdesc) {
        this.wpalletdesc = wpalletdesc;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof GetProcYm4000pk0Ym410detailResponsePoutDetail)) return false;
        final GetProcYm4000pk0Ym410detailResponsePoutDetail getProcYm4000pk0ym410detailResponsePoutDetail = (GetProcYm4000pk0Ym410detailResponsePoutDetail) o;
        return Objects.equals(getContractid(), getProcYm4000pk0ym410detailResponsePoutDetail.getContractid()) &&
                Objects.equals(getYnitemno(), getProcYm4000pk0ym410detailResponsePoutDetail.getYnitemno()) &&
                Objects.equals(getContainerSeq(), getProcYm4000pk0ym410detailResponsePoutDetail.getContainerSeq()) &&
                Objects.equals(getPalletSeq(), getProcYm4000pk0ym410detailResponsePoutDetail.getPalletSeq()) &&
                Objects.equals(getPalletid(), getProcYm4000pk0ym410detailResponsePoutDetail.getPalletid()) &&
                Objects.equals(getConwgt(), getProcYm4000pk0ym410detailResponsePoutDetail.getConwgt()) &&
                Objects.equals(getNumcones(), getProcYm4000pk0ym410detailResponsePoutDetail.getNumcones()) &&
                Objects.equals(getPalletcat(), getProcYm4000pk0ym410detailResponsePoutDetail.getPalletcat()) &&
                Objects.equals(getConcar(), getProcYm4000pk0ym410detailResponsePoutDetail.getConcar()) &&
                Objects.equals(getCarpall(), getProcYm4000pk0ym410detailResponsePoutDetail.getCarpall()) &&
                Objects.equals(getWpalletdesc(), getProcYm4000pk0ym410detailResponsePoutDetail.getWpalletdesc());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getContractid(),
                getYnitemno(),
                getContainerSeq(),
                getPalletSeq(),
                getPalletid(),
                getConwgt(),
                getNumcones(),
                getPalletcat(),
                getConcar(),
                getCarpall(),
                getWpalletdesc());
    }
}