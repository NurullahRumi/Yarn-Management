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

public class ProcYm1311pk0Ym284yarnCartonStickerResponsePoutYarnCartonSticker implements Serializable {


    @ColumnAlias("CARTONID")
    private String cartonid;

    @ColumnAlias("WRHNUM")
    private String wrhnum;

    @ColumnAlias("YRNCOD")
    private String yrncod;

    @ColumnAlias("IST_REQNUM")
    private String istReqnum;

    @ColumnAlias("GROSSWGT")
    private Double grosswgt;

    @ColumnAlias("TAREWGT")
    private Double tarewgt;

    @ColumnAlias("NETWGT")
    private Double netwgt;

    @ColumnAlias("NUMCON")
    private Short numcon;

    @ColumnAlias("CONWGT")
    private Float conwgt;

    @ColumnAlias("CARTONLEN")
    private Float cartonlen;

    @ColumnAlias("CARTONWID")
    private Float cartonwid;

    @ColumnAlias("CARTONHGT")
    private Float cartonhgt;

    @ColumnAlias("CARTONDIMUOM")
    private String cartondimuom;

    @ColumnAlias("CONECLR")
    private String coneclr;

    @ColumnAlias("TAPECLR")
    private String tapeclr;

    @ColumnAlias("CARTONSTS")
    private String cartonsts;

    @ColumnAlias("USRID")
    private String usrid;

    @ColumnAlias("USRDAT")
    private LocalDateTime usrdat;

    @ColumnAlias("MODID")
    private String modid;

    @ColumnAlias("MODDAT")
    private LocalDateTime moddat;

    @ColumnAlias("W_SUM_NETWGT")
    private Double wsumNetwgt;

    @ColumnAlias("W_FCARTONID")
    private String wfcartonid;

    @ColumnAlias("W_TCARTONID")
    private String wtcartonid;

    @ColumnAlias("W_PRINDES")
    private String wprindes;

    public String getCartonid() {
        return this.cartonid;
    }

    public void setCartonid(String cartonid) {
        this.cartonid = cartonid;
    }

    public String getWrhnum() {
        return this.wrhnum;
    }

    public void setWrhnum(String wrhnum) {
        this.wrhnum = wrhnum;
    }

    public String getYrncod() {
        return this.yrncod;
    }

    public void setYrncod(String yrncod) {
        this.yrncod = yrncod;
    }

    public String getIstReqnum() {
        return this.istReqnum;
    }

    public void setIstReqnum(String istReqnum) {
        this.istReqnum = istReqnum;
    }

    public Double getGrosswgt() {
        return this.grosswgt;
    }

    public void setGrosswgt(Double grosswgt) {
        this.grosswgt = grosswgt;
    }

    public Double getTarewgt() {
        return this.tarewgt;
    }

    public void setTarewgt(Double tarewgt) {
        this.tarewgt = tarewgt;
    }

    public Double getNetwgt() {
        return this.netwgt;
    }

    public void setNetwgt(Double netwgt) {
        this.netwgt = netwgt;
    }

    public Short getNumcon() {
        return this.numcon;
    }

    public void setNumcon(Short numcon) {
        this.numcon = numcon;
    }

    public Float getConwgt() {
        return this.conwgt;
    }

    public void setConwgt(Float conwgt) {
        this.conwgt = conwgt;
    }

    public Float getCartonlen() {
        return this.cartonlen;
    }

    public void setCartonlen(Float cartonlen) {
        this.cartonlen = cartonlen;
    }

    public Float getCartonwid() {
        return this.cartonwid;
    }

    public void setCartonwid(Float cartonwid) {
        this.cartonwid = cartonwid;
    }

    public Float getCartonhgt() {
        return this.cartonhgt;
    }

    public void setCartonhgt(Float cartonhgt) {
        this.cartonhgt = cartonhgt;
    }

    public String getCartondimuom() {
        return this.cartondimuom;
    }

    public void setCartondimuom(String cartondimuom) {
        this.cartondimuom = cartondimuom;
    }

    public String getConeclr() {
        return this.coneclr;
    }

    public void setConeclr(String coneclr) {
        this.coneclr = coneclr;
    }

    public String getTapeclr() {
        return this.tapeclr;
    }

    public void setTapeclr(String tapeclr) {
        this.tapeclr = tapeclr;
    }

    public String getCartonsts() {
        return this.cartonsts;
    }

    public void setCartonsts(String cartonsts) {
        this.cartonsts = cartonsts;
    }

    public String getUsrid() {
        return this.usrid;
    }

    public void setUsrid(String usrid) {
        this.usrid = usrid;
    }

    public LocalDateTime getUsrdat() {
        return this.usrdat;
    }

    public void setUsrdat(LocalDateTime usrdat) {
        this.usrdat = usrdat;
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

    public Double getWsumNetwgt() {
        return this.wsumNetwgt;
    }

    public void setWsumNetwgt(Double wsumNetwgt) {
        this.wsumNetwgt = wsumNetwgt;
    }

    public String getWfcartonid() {
        return this.wfcartonid;
    }

    public void setWfcartonid(String wfcartonid) {
        this.wfcartonid = wfcartonid;
    }

    public String getWtcartonid() {
        return this.wtcartonid;
    }

    public void setWtcartonid(String wtcartonid) {
        this.wtcartonid = wtcartonid;
    }

    public String getWprindes() {
        return this.wprindes;
    }

    public void setWprindes(String wprindes) {
        this.wprindes = wprindes;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcYm1311pk0Ym284yarnCartonStickerResponsePoutYarnCartonSticker)) return false;
        final ProcYm1311pk0Ym284yarnCartonStickerResponsePoutYarnCartonSticker procYm1311pk0ym284yarnCartonStickerResponsePoutYarnCartonSticker = (ProcYm1311pk0Ym284yarnCartonStickerResponsePoutYarnCartonSticker) o;
        return Objects.equals(getCartonid(), procYm1311pk0ym284yarnCartonStickerResponsePoutYarnCartonSticker.getCartonid()) &&
                Objects.equals(getWrhnum(), procYm1311pk0ym284yarnCartonStickerResponsePoutYarnCartonSticker.getWrhnum()) &&
                Objects.equals(getYrncod(), procYm1311pk0ym284yarnCartonStickerResponsePoutYarnCartonSticker.getYrncod()) &&
                Objects.equals(getIstReqnum(), procYm1311pk0ym284yarnCartonStickerResponsePoutYarnCartonSticker.getIstReqnum()) &&
                Objects.equals(getGrosswgt(), procYm1311pk0ym284yarnCartonStickerResponsePoutYarnCartonSticker.getGrosswgt()) &&
                Objects.equals(getTarewgt(), procYm1311pk0ym284yarnCartonStickerResponsePoutYarnCartonSticker.getTarewgt()) &&
                Objects.equals(getNetwgt(), procYm1311pk0ym284yarnCartonStickerResponsePoutYarnCartonSticker.getNetwgt()) &&
                Objects.equals(getNumcon(), procYm1311pk0ym284yarnCartonStickerResponsePoutYarnCartonSticker.getNumcon()) &&
                Objects.equals(getConwgt(), procYm1311pk0ym284yarnCartonStickerResponsePoutYarnCartonSticker.getConwgt()) &&
                Objects.equals(getCartonlen(), procYm1311pk0ym284yarnCartonStickerResponsePoutYarnCartonSticker.getCartonlen()) &&
                Objects.equals(getCartonwid(), procYm1311pk0ym284yarnCartonStickerResponsePoutYarnCartonSticker.getCartonwid()) &&
                Objects.equals(getCartonhgt(), procYm1311pk0ym284yarnCartonStickerResponsePoutYarnCartonSticker.getCartonhgt()) &&
                Objects.equals(getCartondimuom(), procYm1311pk0ym284yarnCartonStickerResponsePoutYarnCartonSticker.getCartondimuom()) &&
                Objects.equals(getConeclr(), procYm1311pk0ym284yarnCartonStickerResponsePoutYarnCartonSticker.getConeclr()) &&
                Objects.equals(getTapeclr(), procYm1311pk0ym284yarnCartonStickerResponsePoutYarnCartonSticker.getTapeclr()) &&
                Objects.equals(getCartonsts(), procYm1311pk0ym284yarnCartonStickerResponsePoutYarnCartonSticker.getCartonsts()) &&
                Objects.equals(getUsrid(), procYm1311pk0ym284yarnCartonStickerResponsePoutYarnCartonSticker.getUsrid()) &&
                Objects.equals(getUsrdat(), procYm1311pk0ym284yarnCartonStickerResponsePoutYarnCartonSticker.getUsrdat()) &&
                Objects.equals(getModid(), procYm1311pk0ym284yarnCartonStickerResponsePoutYarnCartonSticker.getModid()) &&
                Objects.equals(getModdat(), procYm1311pk0ym284yarnCartonStickerResponsePoutYarnCartonSticker.getModdat()) &&
                Objects.equals(getWsumNetwgt(), procYm1311pk0ym284yarnCartonStickerResponsePoutYarnCartonSticker.getWsumNetwgt()) &&
                Objects.equals(getWfcartonid(), procYm1311pk0ym284yarnCartonStickerResponsePoutYarnCartonSticker.getWfcartonid()) &&
                Objects.equals(getWtcartonid(), procYm1311pk0ym284yarnCartonStickerResponsePoutYarnCartonSticker.getWtcartonid()) &&
                Objects.equals(getWprindes(), procYm1311pk0ym284yarnCartonStickerResponsePoutYarnCartonSticker.getWprindes());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getCartonid(),
                getWrhnum(),
                getYrncod(),
                getIstReqnum(),
                getGrosswgt(),
                getTarewgt(),
                getNetwgt(),
                getNumcon(),
                getConwgt(),
                getCartonlen(),
                getCartonwid(),
                getCartonhgt(),
                getCartondimuom(),
                getConeclr(),
                getTapeclr(),
                getCartonsts(),
                getUsrid(),
                getUsrdat(),
                getModid(),
                getModdat(),
                getWsumNetwgt(),
                getWfcartonid(),
                getWtcartonid(),
                getWprindes());
    }
}