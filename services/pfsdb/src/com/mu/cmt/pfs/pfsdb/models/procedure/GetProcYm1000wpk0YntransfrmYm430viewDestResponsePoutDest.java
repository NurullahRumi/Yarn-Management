/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.math.BigInteger;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class GetProcYm1000wpk0YntransfrmYm430viewDestResponsePoutDest implements Serializable {


    @ColumnAlias("PALMODNUM")
    private String palmodnum;

    @ColumnAlias("DESTPALLET_SEQ")
    private Short destpalletSeq;

    @ColumnAlias("PALLETTYPE")
    private String pallettype;

    @ColumnAlias("YRNMIXCODE")
    private String yrnmixcode;

    @ColumnAlias("ORDNUM")
    private String ordnum;

    @ColumnAlias("FABSEQ")
    private Byte fabseq;

    @ColumnAlias("PALMOD_REQNUM")
    private String palmodReqnum;

    @ColumnAlias("W_NUMPAL")
    private BigInteger wnumpal;

    @ColumnAlias("PALWGT")
    private Double palwgt;

    @ColumnAlias("W_TOTAL_DEST")
    private BigInteger wtotalDest;

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

    public String getPallettype() {
        return this.pallettype;
    }

    public void setPallettype(String pallettype) {
        this.pallettype = pallettype;
    }

    public String getYrnmixcode() {
        return this.yrnmixcode;
    }

    public void setYrnmixcode(String yrnmixcode) {
        this.yrnmixcode = yrnmixcode;
    }

    public String getOrdnum() {
        return this.ordnum;
    }

    public void setOrdnum(String ordnum) {
        this.ordnum = ordnum;
    }

    public Byte getFabseq() {
        return this.fabseq;
    }

    public void setFabseq(Byte fabseq) {
        this.fabseq = fabseq;
    }

    public String getPalmodReqnum() {
        return this.palmodReqnum;
    }

    public void setPalmodReqnum(String palmodReqnum) {
        this.palmodReqnum = palmodReqnum;
    }

    public BigInteger getWnumpal() {
        return this.wnumpal;
    }

    public void setWnumpal(BigInteger wnumpal) {
        this.wnumpal = wnumpal;
    }

    public Double getPalwgt() {
        return this.palwgt;
    }

    public void setPalwgt(Double palwgt) {
        this.palwgt = palwgt;
    }

    public BigInteger getWtotalDest() {
        return this.wtotalDest;
    }

    public void setWtotalDest(BigInteger wtotalDest) {
        this.wtotalDest = wtotalDest;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof GetProcYm1000wpk0YntransfrmYm430viewDestResponsePoutDest)) return false;
        final GetProcYm1000wpk0YntransfrmYm430viewDestResponsePoutDest getProcYm1000wpk0yntransfrmYm430viewDestResponsePoutDest = (GetProcYm1000wpk0YntransfrmYm430viewDestResponsePoutDest) o;
        return Objects.equals(getPalmodnum(), getProcYm1000wpk0yntransfrmYm430viewDestResponsePoutDest.getPalmodnum()) &&
                Objects.equals(getDestpalletSeq(), getProcYm1000wpk0yntransfrmYm430viewDestResponsePoutDest.getDestpalletSeq()) &&
                Objects.equals(getPallettype(), getProcYm1000wpk0yntransfrmYm430viewDestResponsePoutDest.getPallettype()) &&
                Objects.equals(getYrnmixcode(), getProcYm1000wpk0yntransfrmYm430viewDestResponsePoutDest.getYrnmixcode()) &&
                Objects.equals(getOrdnum(), getProcYm1000wpk0yntransfrmYm430viewDestResponsePoutDest.getOrdnum()) &&
                Objects.equals(getFabseq(), getProcYm1000wpk0yntransfrmYm430viewDestResponsePoutDest.getFabseq()) &&
                Objects.equals(getPalmodReqnum(), getProcYm1000wpk0yntransfrmYm430viewDestResponsePoutDest.getPalmodReqnum()) &&
                Objects.equals(getWnumpal(), getProcYm1000wpk0yntransfrmYm430viewDestResponsePoutDest.getWnumpal()) &&
                Objects.equals(getPalwgt(), getProcYm1000wpk0yntransfrmYm430viewDestResponsePoutDest.getPalwgt()) &&
                Objects.equals(getWtotalDest(), getProcYm1000wpk0yntransfrmYm430viewDestResponsePoutDest.getWtotalDest());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPalmodnum(),
                getDestpalletSeq(),
                getPallettype(),
                getYrnmixcode(),
                getOrdnum(),
                getFabseq(),
                getPalmodReqnum(),
                getWnumpal(),
                getPalwgt(),
                getWtotalDest());
    }
}