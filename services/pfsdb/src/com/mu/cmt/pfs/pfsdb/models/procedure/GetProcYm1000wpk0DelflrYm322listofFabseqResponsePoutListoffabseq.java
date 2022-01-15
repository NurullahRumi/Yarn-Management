/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class GetProcYm1000wpk0DelflrYm322listofFabseqResponsePoutListoffabseq implements Serializable {


    @ColumnAlias("FABSEQ")
    private Byte fabseq;

    @ColumnAlias("KMCHFLRID")
    private String kmchflrid;

    @ColumnAlias("YRNID")
    private Short yrnid;

    @ColumnAlias("YRNMIXCODE")
    private String yrnmixcode;

    @ColumnAlias("ALCSEQ")
    private Short alcseq;

    @ColumnAlias("REQNUM")
    private Integer reqnum;

    @ColumnAlias("REQNSEQ")
    private Byte reqnseq;

    @ColumnAlias("FABTYP")
    private String fabtyp;

    @ColumnAlias("FABWGT")
    private Short fabwgt;

    @ColumnAlias("KMCHCOD")
    private String kmchcod;

    @ColumnAlias("YRNCOD")
    private String yrncod;

    public Byte getFabseq() {
        return this.fabseq;
    }

    public void setFabseq(Byte fabseq) {
        this.fabseq = fabseq;
    }

    public String getKmchflrid() {
        return this.kmchflrid;
    }

    public void setKmchflrid(String kmchflrid) {
        this.kmchflrid = kmchflrid;
    }

    public Short getYrnid() {
        return this.yrnid;
    }

    public void setYrnid(Short yrnid) {
        this.yrnid = yrnid;
    }

    public String getYrnmixcode() {
        return this.yrnmixcode;
    }

    public void setYrnmixcode(String yrnmixcode) {
        this.yrnmixcode = yrnmixcode;
    }

    public Short getAlcseq() {
        return this.alcseq;
    }

    public void setAlcseq(Short alcseq) {
        this.alcseq = alcseq;
    }

    public Integer getReqnum() {
        return this.reqnum;
    }

    public void setReqnum(Integer reqnum) {
        this.reqnum = reqnum;
    }

    public Byte getReqnseq() {
        return this.reqnseq;
    }

    public void setReqnseq(Byte reqnseq) {
        this.reqnseq = reqnseq;
    }

    public String getFabtyp() {
        return this.fabtyp;
    }

    public void setFabtyp(String fabtyp) {
        this.fabtyp = fabtyp;
    }

    public Short getFabwgt() {
        return this.fabwgt;
    }

    public void setFabwgt(Short fabwgt) {
        this.fabwgt = fabwgt;
    }

    public String getKmchcod() {
        return this.kmchcod;
    }

    public void setKmchcod(String kmchcod) {
        this.kmchcod = kmchcod;
    }

    public String getYrncod() {
        return this.yrncod;
    }

    public void setYrncod(String yrncod) {
        this.yrncod = yrncod;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof GetProcYm1000wpk0DelflrYm322listofFabseqResponsePoutListoffabseq)) return false;
        final GetProcYm1000wpk0DelflrYm322listofFabseqResponsePoutListoffabseq getProcYm1000wpk0delflrYm322listofFabseqResponsePoutListoffabseq = (GetProcYm1000wpk0DelflrYm322listofFabseqResponsePoutListoffabseq) o;
        return Objects.equals(getFabseq(), getProcYm1000wpk0delflrYm322listofFabseqResponsePoutListoffabseq.getFabseq()) &&
                Objects.equals(getKmchflrid(), getProcYm1000wpk0delflrYm322listofFabseqResponsePoutListoffabseq.getKmchflrid()) &&
                Objects.equals(getYrnid(), getProcYm1000wpk0delflrYm322listofFabseqResponsePoutListoffabseq.getYrnid()) &&
                Objects.equals(getYrnmixcode(), getProcYm1000wpk0delflrYm322listofFabseqResponsePoutListoffabseq.getYrnmixcode()) &&
                Objects.equals(getAlcseq(), getProcYm1000wpk0delflrYm322listofFabseqResponsePoutListoffabseq.getAlcseq()) &&
                Objects.equals(getReqnum(), getProcYm1000wpk0delflrYm322listofFabseqResponsePoutListoffabseq.getReqnum()) &&
                Objects.equals(getReqnseq(), getProcYm1000wpk0delflrYm322listofFabseqResponsePoutListoffabseq.getReqnseq()) &&
                Objects.equals(getFabtyp(), getProcYm1000wpk0delflrYm322listofFabseqResponsePoutListoffabseq.getFabtyp()) &&
                Objects.equals(getFabwgt(), getProcYm1000wpk0delflrYm322listofFabseqResponsePoutListoffabseq.getFabwgt()) &&
                Objects.equals(getKmchcod(), getProcYm1000wpk0delflrYm322listofFabseqResponsePoutListoffabseq.getKmchcod()) &&
                Objects.equals(getYrncod(), getProcYm1000wpk0delflrYm322listofFabseqResponsePoutListoffabseq.getYrncod());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getFabseq(),
                getKmchflrid(),
                getYrnid(),
                getYrnmixcode(),
                getAlcseq(),
                getReqnum(),
                getReqnseq(),
                getFabtyp(),
                getFabwgt(),
                getKmchcod(),
                getYrncod());
    }
}