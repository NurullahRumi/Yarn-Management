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

public class GetProcYm1000wpk0YnreqnYm144dlyReqnumResponsePoutreqnum implements Serializable {


    @ColumnAlias("REQNUM")
    private Integer reqnum;

    @ColumnAlias("REQNSEQ")
    private Byte reqnseq;

    @ColumnAlias("WRHNUM")
    private String wrhnum;

    @ColumnAlias("W_WRHDES")
    private String wwrhdes;

    @ColumnAlias("DATEREQ")
    private LocalDateTime datereq;

    @ColumnAlias("ORDNUM")
    private String ordnum;

    @ColumnAlias("FABSEQ")
    private Byte fabseq;

    @ColumnAlias("YRNID")
    private Short yrnid;

    @ColumnAlias("ALCSEQ")
    private Short alcseq;

    @ColumnAlias("YRNMIXCODE")
    private String yrnmixcode;

    @ColumnAlias("W_KMCHFLRID")
    private String wkmchflrid;

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

    public String getWrhnum() {
        return this.wrhnum;
    }

    public void setWrhnum(String wrhnum) {
        this.wrhnum = wrhnum;
    }

    public String getWwrhdes() {
        return this.wwrhdes;
    }

    public void setWwrhdes(String wwrhdes) {
        this.wwrhdes = wwrhdes;
    }

    public LocalDateTime getDatereq() {
        return this.datereq;
    }

    public void setDatereq(LocalDateTime datereq) {
        this.datereq = datereq;
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

    public String getYrnmixcode() {
        return this.yrnmixcode;
    }

    public void setYrnmixcode(String yrnmixcode) {
        this.yrnmixcode = yrnmixcode;
    }

    public String getWkmchflrid() {
        return this.wkmchflrid;
    }

    public void setWkmchflrid(String wkmchflrid) {
        this.wkmchflrid = wkmchflrid;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof GetProcYm1000wpk0YnreqnYm144dlyReqnumResponsePoutreqnum)) return false;
        final GetProcYm1000wpk0YnreqnYm144dlyReqnumResponsePoutreqnum getProcYm1000wpk0ynreqnYm144dlyReqnumResponsePoutreqnum = (GetProcYm1000wpk0YnreqnYm144dlyReqnumResponsePoutreqnum) o;
        return Objects.equals(getReqnum(), getProcYm1000wpk0ynreqnYm144dlyReqnumResponsePoutreqnum.getReqnum()) &&
                Objects.equals(getReqnseq(), getProcYm1000wpk0ynreqnYm144dlyReqnumResponsePoutreqnum.getReqnseq()) &&
                Objects.equals(getWrhnum(), getProcYm1000wpk0ynreqnYm144dlyReqnumResponsePoutreqnum.getWrhnum()) &&
                Objects.equals(getWwrhdes(), getProcYm1000wpk0ynreqnYm144dlyReqnumResponsePoutreqnum.getWwrhdes()) &&
                Objects.equals(getDatereq(), getProcYm1000wpk0ynreqnYm144dlyReqnumResponsePoutreqnum.getDatereq()) &&
                Objects.equals(getOrdnum(), getProcYm1000wpk0ynreqnYm144dlyReqnumResponsePoutreqnum.getOrdnum()) &&
                Objects.equals(getFabseq(), getProcYm1000wpk0ynreqnYm144dlyReqnumResponsePoutreqnum.getFabseq()) &&
                Objects.equals(getYrnid(), getProcYm1000wpk0ynreqnYm144dlyReqnumResponsePoutreqnum.getYrnid()) &&
                Objects.equals(getAlcseq(), getProcYm1000wpk0ynreqnYm144dlyReqnumResponsePoutreqnum.getAlcseq()) &&
                Objects.equals(getYrnmixcode(), getProcYm1000wpk0ynreqnYm144dlyReqnumResponsePoutreqnum.getYrnmixcode()) &&
                Objects.equals(getWkmchflrid(), getProcYm1000wpk0ynreqnYm144dlyReqnumResponsePoutreqnum.getWkmchflrid());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getReqnum(),
                getReqnseq(),
                getWrhnum(),
                getWwrhdes(),
                getDatereq(),
                getOrdnum(),
                getFabseq(),
                getYrnid(),
                getAlcseq(),
                getYrnmixcode(),
                getWkmchflrid());
    }
}