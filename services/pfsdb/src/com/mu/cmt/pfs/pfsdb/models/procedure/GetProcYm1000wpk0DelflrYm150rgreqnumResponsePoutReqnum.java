/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class GetProcYm1000wpk0DelflrYm150rgreqnumResponsePoutReqnum implements Serializable {


    @ColumnAlias("REQNUM")
    private Integer reqnum;

    @ColumnAlias("FABSEQ")
    private Byte fabseq;

    @ColumnAlias("YRNID")
    private Short yrnid;

    @ColumnAlias("ALCSEQ")
    private Short alcseq;

    @ColumnAlias("KMCHCOD")
    private String kmchcod;

    @ColumnAlias("KMCHFLRID")
    private String kmchflrid;

    @ColumnAlias("ORDNUM")
    private String ordnum;

    @ColumnAlias("QTYREQN")
    private Double qtyreqn;

    @ColumnAlias("REQNSEQ")
    private Byte reqnseq;

    @ColumnAlias("YRNMIXCODE")
    private String yrnmixcode;

    public Integer getReqnum() {
        return this.reqnum;
    }

    public void setReqnum(Integer reqnum) {
        this.reqnum = reqnum;
    }

    public Byte getFabseq() {
        return this.fabseq;
    }

    public void setFabseq(Byte fabseq) {
        this.fabseq = fabseq;
    }

    public Short getYrnid() {
        return this.yrnid;
    }

    public void setYrnid(Short yrnid) {
        this.yrnid = yrnid;
    }

    public Short getAlcseq() {
        return this.alcseq;
    }

    public void setAlcseq(Short alcseq) {
        this.alcseq = alcseq;
    }

    public String getKmchcod() {
        return this.kmchcod;
    }

    public void setKmchcod(String kmchcod) {
        this.kmchcod = kmchcod;
    }

    public String getKmchflrid() {
        return this.kmchflrid;
    }

    public void setKmchflrid(String kmchflrid) {
        this.kmchflrid = kmchflrid;
    }

    public String getOrdnum() {
        return this.ordnum;
    }

    public void setOrdnum(String ordnum) {
        this.ordnum = ordnum;
    }

    public Double getQtyreqn() {
        return this.qtyreqn;
    }

    public void setQtyreqn(Double qtyreqn) {
        this.qtyreqn = qtyreqn;
    }

    public Byte getReqnseq() {
        return this.reqnseq;
    }

    public void setReqnseq(Byte reqnseq) {
        this.reqnseq = reqnseq;
    }

    public String getYrnmixcode() {
        return this.yrnmixcode;
    }

    public void setYrnmixcode(String yrnmixcode) {
        this.yrnmixcode = yrnmixcode;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof GetProcYm1000wpk0DelflrYm150rgreqnumResponsePoutReqnum)) return false;
        final GetProcYm1000wpk0DelflrYm150rgreqnumResponsePoutReqnum getProcYm1000wpk0delflrYm150rgreqnumResponsePoutReqnum = (GetProcYm1000wpk0DelflrYm150rgreqnumResponsePoutReqnum) o;
        return Objects.equals(getReqnum(), getProcYm1000wpk0delflrYm150rgreqnumResponsePoutReqnum.getReqnum()) &&
                Objects.equals(getFabseq(), getProcYm1000wpk0delflrYm150rgreqnumResponsePoutReqnum.getFabseq()) &&
                Objects.equals(getYrnid(), getProcYm1000wpk0delflrYm150rgreqnumResponsePoutReqnum.getYrnid()) &&
                Objects.equals(getAlcseq(), getProcYm1000wpk0delflrYm150rgreqnumResponsePoutReqnum.getAlcseq()) &&
                Objects.equals(getKmchcod(), getProcYm1000wpk0delflrYm150rgreqnumResponsePoutReqnum.getKmchcod()) &&
                Objects.equals(getKmchflrid(), getProcYm1000wpk0delflrYm150rgreqnumResponsePoutReqnum.getKmchflrid()) &&
                Objects.equals(getOrdnum(), getProcYm1000wpk0delflrYm150rgreqnumResponsePoutReqnum.getOrdnum()) &&
                Objects.equals(getQtyreqn(), getProcYm1000wpk0delflrYm150rgreqnumResponsePoutReqnum.getQtyreqn()) &&
                Objects.equals(getReqnseq(), getProcYm1000wpk0delflrYm150rgreqnumResponsePoutReqnum.getReqnseq()) &&
                Objects.equals(getYrnmixcode(), getProcYm1000wpk0delflrYm150rgreqnumResponsePoutReqnum.getYrnmixcode());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getReqnum(),
                getFabseq(),
                getYrnid(),
                getAlcseq(),
                getKmchcod(),
                getKmchflrid(),
                getOrdnum(),
                getQtyreqn(),
                getReqnseq(),
                getYrnmixcode());
    }
}