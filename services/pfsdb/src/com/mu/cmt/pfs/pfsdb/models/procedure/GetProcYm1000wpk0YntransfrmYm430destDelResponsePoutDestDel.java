/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class GetProcYm1000wpk0YntransfrmYm430destDelResponsePoutDestDel implements Serializable {


    @ColumnAlias("PALMODNUM")
    private String palmodnum;

    @ColumnAlias("DESTPALLET_SEQ")
    private Short destpalletSeq;

    @ColumnAlias("YRNCOD")
    private String yrncod;

    @ColumnAlias("CONWGT")
    private Float conwgt;

    @ColumnAlias("CONCAR")
    private Short concar;

    @ColumnAlias("CARPALL")
    private Short carpall;

    @ColumnAlias("NUMCONES")
    private Short numcones;

    @ColumnAlias("PALWGT")
    private Double palwgt;

    @ColumnAlias("PALLETCAT")
    private String palletcat;

    @ColumnAlias("NUMPAL")
    private Short numpal;

    @ColumnAlias("W_YRNMIXCODE")
    private String wyrnmixcode;

    @ColumnAlias("W_ORDNUM")
    private String wordnum;

    @ColumnAlias("W_FABSEQ")
    private Byte wfabseq;

    @ColumnAlias("W_PALMOD_REQNUM")
    private String wpalmodReqnum;

    @ColumnAlias("W_QTY")
    private Double wqty;

    public String getPalmodnum() {
        return this.palmodnum;
    }

    public void setPalmodnum(String palmodnum) {
        this.palmodnum = palmodnum;
    }

    public Short getDestpalletSeq() {
        return this.destpalletSeq;
    }

    public void setDestpalletSeq(Short destpalletSeq) {
        this.destpalletSeq = destpalletSeq;
    }

    public String getYrncod() {
        return this.yrncod;
    }

    public void setYrncod(String yrncod) {
        this.yrncod = yrncod;
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

    public Short getNumcones() {
        return this.numcones;
    }

    public void setNumcones(Short numcones) {
        this.numcones = numcones;
    }

    public Double getPalwgt() {
        return this.palwgt;
    }

    public void setPalwgt(Double palwgt) {
        this.palwgt = palwgt;
    }

    public String getPalletcat() {
        return this.palletcat;
    }

    public void setPalletcat(String palletcat) {
        this.palletcat = palletcat;
    }

    public Short getNumpal() {
        return this.numpal;
    }

    public void setNumpal(Short numpal) {
        this.numpal = numpal;
    }

    public String getWyrnmixcode() {
        return this.wyrnmixcode;
    }

    public void setWyrnmixcode(String wyrnmixcode) {
        this.wyrnmixcode = wyrnmixcode;
    }

    public String getWordnum() {
        return this.wordnum;
    }

    public void setWordnum(String wordnum) {
        this.wordnum = wordnum;
    }

    public Byte getWfabseq() {
        return this.wfabseq;
    }

    public void setWfabseq(Byte wfabseq) {
        this.wfabseq = wfabseq;
    }

    public String getWpalmodReqnum() {
        return this.wpalmodReqnum;
    }

    public void setWpalmodReqnum(String wpalmodReqnum) {
        this.wpalmodReqnum = wpalmodReqnum;
    }

    public Double getWqty() {
        return this.wqty;
    }

    public void setWqty(Double wqty) {
        this.wqty = wqty;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof GetProcYm1000wpk0YntransfrmYm430destDelResponsePoutDestDel)) return false;
        final GetProcYm1000wpk0YntransfrmYm430destDelResponsePoutDestDel getProcYm1000wpk0yntransfrmYm430destDelResponsePoutDestDel = (GetProcYm1000wpk0YntransfrmYm430destDelResponsePoutDestDel) o;
        return Objects.equals(getPalmodnum(), getProcYm1000wpk0yntransfrmYm430destDelResponsePoutDestDel.getPalmodnum()) &&
                Objects.equals(getDestpalletSeq(), getProcYm1000wpk0yntransfrmYm430destDelResponsePoutDestDel.getDestpalletSeq()) &&
                Objects.equals(getYrncod(), getProcYm1000wpk0yntransfrmYm430destDelResponsePoutDestDel.getYrncod()) &&
                Objects.equals(getConwgt(), getProcYm1000wpk0yntransfrmYm430destDelResponsePoutDestDel.getConwgt()) &&
                Objects.equals(getConcar(), getProcYm1000wpk0yntransfrmYm430destDelResponsePoutDestDel.getConcar()) &&
                Objects.equals(getCarpall(), getProcYm1000wpk0yntransfrmYm430destDelResponsePoutDestDel.getCarpall()) &&
                Objects.equals(getNumcones(), getProcYm1000wpk0yntransfrmYm430destDelResponsePoutDestDel.getNumcones()) &&
                Objects.equals(getPalwgt(), getProcYm1000wpk0yntransfrmYm430destDelResponsePoutDestDel.getPalwgt()) &&
                Objects.equals(getPalletcat(), getProcYm1000wpk0yntransfrmYm430destDelResponsePoutDestDel.getPalletcat()) &&
                Objects.equals(getNumpal(), getProcYm1000wpk0yntransfrmYm430destDelResponsePoutDestDel.getNumpal()) &&
                Objects.equals(getWyrnmixcode(), getProcYm1000wpk0yntransfrmYm430destDelResponsePoutDestDel.getWyrnmixcode()) &&
                Objects.equals(getWordnum(), getProcYm1000wpk0yntransfrmYm430destDelResponsePoutDestDel.getWordnum()) &&
                Objects.equals(getWfabseq(), getProcYm1000wpk0yntransfrmYm430destDelResponsePoutDestDel.getWfabseq()) &&
                Objects.equals(getWpalmodReqnum(), getProcYm1000wpk0yntransfrmYm430destDelResponsePoutDestDel.getWpalmodReqnum()) &&
                Objects.equals(getWqty(), getProcYm1000wpk0yntransfrmYm430destDelResponsePoutDestDel.getWqty());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPalmodnum(),
                getDestpalletSeq(),
                getYrncod(),
                getConwgt(),
                getConcar(),
                getCarpall(),
                getNumcones(),
                getPalwgt(),
                getPalletcat(),
                getNumpal(),
                getWyrnmixcode(),
                getWordnum(),
                getWfabseq(),
                getWpalmodReqnum(),
                getWqty());
    }
}