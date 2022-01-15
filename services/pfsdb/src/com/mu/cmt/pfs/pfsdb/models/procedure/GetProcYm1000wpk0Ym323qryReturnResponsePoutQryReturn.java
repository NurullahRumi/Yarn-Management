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

public class GetProcYm1000wpk0Ym323qryReturnResponsePoutQryReturn implements Serializable {


    @ColumnAlias("RETNUM")
    private String retnum;

    @ColumnAlias("W_YRNCOD")
    private String wyrncod;

    @ColumnAlias("YRNMIXCODE")
    private String yrnmixcode;

    @ColumnAlias("WRHNUM")
    private String wrhnum;

    @ColumnAlias("KGSRET")
    private Double kgsret;

    @ColumnAlias("RETBY")
    private String retby;

    @ColumnAlias("RETDAT")
    private LocalDateTime retdat;

    @ColumnAlias("RET_ORDNUM")
    private String retOrdnum;

    @ColumnAlias("RET_FABSEQ")
    private Byte retFabseq;

    @ColumnAlias("W_FABTYP")
    private String wfabtyp;

    @ColumnAlias("RET_YRNID")
    private Byte retYrnid;

    public String getRetnum() {
        return this.retnum;
    }

    public void setRetnum(String retnum) {
        this.retnum = retnum;
    }

    public String getWyrncod() {
        return this.wyrncod;
    }

    public void setWyrncod(String wyrncod) {
        this.wyrncod = wyrncod;
    }

    public String getYrnmixcode() {
        return this.yrnmixcode;
    }

    public void setYrnmixcode(String yrnmixcode) {
        this.yrnmixcode = yrnmixcode;
    }

    public String getWrhnum() {
        return this.wrhnum;
    }

    public void setWrhnum(String wrhnum) {
        this.wrhnum = wrhnum;
    }

    public Double getKgsret() {
        return this.kgsret;
    }

    public void setKgsret(Double kgsret) {
        this.kgsret = kgsret;
    }

    public String getRetby() {
        return this.retby;
    }

    public void setRetby(String retby) {
        this.retby = retby;
    }

    public LocalDateTime getRetdat() {
        return this.retdat;
    }

    public void setRetdat(LocalDateTime retdat) {
        this.retdat = retdat;
    }

    public String getRetOrdnum() {
        return this.retOrdnum;
    }

    public void setRetOrdnum(String retOrdnum) {
        this.retOrdnum = retOrdnum;
    }

    public Byte getRetFabseq() {
        return this.retFabseq;
    }

    public void setRetFabseq(Byte retFabseq) {
        this.retFabseq = retFabseq;
    }

    public String getWfabtyp() {
        return this.wfabtyp;
    }

    public void setWfabtyp(String wfabtyp) {
        this.wfabtyp = wfabtyp;
    }

    public Byte getRetYrnid() {
        return this.retYrnid;
    }

    public void setRetYrnid(Byte retYrnid) {
        this.retYrnid = retYrnid;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof GetProcYm1000wpk0Ym323qryReturnResponsePoutQryReturn)) return false;
        final GetProcYm1000wpk0Ym323qryReturnResponsePoutQryReturn getProcYm1000wpk0ym323qryReturnResponsePoutQryReturn = (GetProcYm1000wpk0Ym323qryReturnResponsePoutQryReturn) o;
        return Objects.equals(getRetnum(), getProcYm1000wpk0ym323qryReturnResponsePoutQryReturn.getRetnum()) &&
                Objects.equals(getWyrncod(), getProcYm1000wpk0ym323qryReturnResponsePoutQryReturn.getWyrncod()) &&
                Objects.equals(getYrnmixcode(), getProcYm1000wpk0ym323qryReturnResponsePoutQryReturn.getYrnmixcode()) &&
                Objects.equals(getWrhnum(), getProcYm1000wpk0ym323qryReturnResponsePoutQryReturn.getWrhnum()) &&
                Objects.equals(getKgsret(), getProcYm1000wpk0ym323qryReturnResponsePoutQryReturn.getKgsret()) &&
                Objects.equals(getRetby(), getProcYm1000wpk0ym323qryReturnResponsePoutQryReturn.getRetby()) &&
                Objects.equals(getRetdat(), getProcYm1000wpk0ym323qryReturnResponsePoutQryReturn.getRetdat()) &&
                Objects.equals(getRetOrdnum(), getProcYm1000wpk0ym323qryReturnResponsePoutQryReturn.getRetOrdnum()) &&
                Objects.equals(getRetFabseq(), getProcYm1000wpk0ym323qryReturnResponsePoutQryReturn.getRetFabseq()) &&
                Objects.equals(getWfabtyp(), getProcYm1000wpk0ym323qryReturnResponsePoutQryReturn.getWfabtyp()) &&
                Objects.equals(getRetYrnid(), getProcYm1000wpk0ym323qryReturnResponsePoutQryReturn.getRetYrnid());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getRetnum(),
                getWyrncod(),
                getYrnmixcode(),
                getWrhnum(),
                getKgsret(),
                getRetby(),
                getRetdat(),
                getRetOrdnum(),
                getRetFabseq(),
                getWfabtyp(),
                getRetYrnid());
    }
}