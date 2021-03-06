/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.math.BigDecimal;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcYm3600pkoYm345palletDetailsResponsePoutYm345palletDetails implements Serializable {


    @ColumnAlias("YRNCOD")
    private String yrncod;

    @ColumnAlias("CONWGT")
    private Float conwgt;

    @ColumnAlias("NUMCON")
    private Integer numcon;

    @ColumnAlias("YRNPHYS")
    private Double yrnphys;

    @ColumnAlias("W_QTYACHIEVABLE")
    private BigDecimal wqtyachievable;

    @ColumnAlias("W_CLRREF")
    private String wclrref;

    @ColumnAlias("W_NYRNCDES")
    private String wnyrncdes;

    @ColumnAlias("W_NYRNCNT")
    private String wnyrncnt;

    @ColumnAlias("W_NFYRNCPS")
    private String wnfyrncps;

    @ColumnAlias("W_YRNORI")
    private String wyrnori;

    @ColumnAlias("W_YRNLOT")
    private String wyrnlot;

    @ColumnAlias("W_NYRNQLTY")
    private String wnyrnqlty;

    @ColumnAlias("W_NYRNSUBQLTYA")
    private String wnyrnsubqltya;

    @ColumnAlias("W_NYRNSUBQLTYB")
    private String wnyrnsubqltyb;

    @ColumnAlias("W_BCHSEQ")
    private String wbchseq;

    @ColumnAlias("W_DMCHCOD")
    private String wdmchcod;

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

    public Integer getNumcon() {
        return this.numcon;
    }

    public void setNumcon(Integer numcon) {
        this.numcon = numcon;
    }

    public Double getYrnphys() {
        return this.yrnphys;
    }

    public void setYrnphys(Double yrnphys) {
        this.yrnphys = yrnphys;
    }

    public BigDecimal getWqtyachievable() {
        return this.wqtyachievable;
    }

    public void setWqtyachievable(BigDecimal wqtyachievable) {
        this.wqtyachievable = wqtyachievable;
    }

    public String getWclrref() {
        return this.wclrref;
    }

    public void setWclrref(String wclrref) {
        this.wclrref = wclrref;
    }

    public String getWnyrncdes() {
        return this.wnyrncdes;
    }

    public void setWnyrncdes(String wnyrncdes) {
        this.wnyrncdes = wnyrncdes;
    }

    public String getWnyrncnt() {
        return this.wnyrncnt;
    }

    public void setWnyrncnt(String wnyrncnt) {
        this.wnyrncnt = wnyrncnt;
    }

    public String getWnfyrncps() {
        return this.wnfyrncps;
    }

    public void setWnfyrncps(String wnfyrncps) {
        this.wnfyrncps = wnfyrncps;
    }

    public String getWyrnori() {
        return this.wyrnori;
    }

    public void setWyrnori(String wyrnori) {
        this.wyrnori = wyrnori;
    }

    public String getWyrnlot() {
        return this.wyrnlot;
    }

    public void setWyrnlot(String wyrnlot) {
        this.wyrnlot = wyrnlot;
    }

    public String getWnyrnqlty() {
        return this.wnyrnqlty;
    }

    public void setWnyrnqlty(String wnyrnqlty) {
        this.wnyrnqlty = wnyrnqlty;
    }

    public String getWnyrnsubqltya() {
        return this.wnyrnsubqltya;
    }

    public void setWnyrnsubqltya(String wnyrnsubqltya) {
        this.wnyrnsubqltya = wnyrnsubqltya;
    }

    public String getWnyrnsubqltyb() {
        return this.wnyrnsubqltyb;
    }

    public void setWnyrnsubqltyb(String wnyrnsubqltyb) {
        this.wnyrnsubqltyb = wnyrnsubqltyb;
    }

    public String getWbchseq() {
        return this.wbchseq;
    }

    public void setWbchseq(String wbchseq) {
        this.wbchseq = wbchseq;
    }

    public String getWdmchcod() {
        return this.wdmchcod;
    }

    public void setWdmchcod(String wdmchcod) {
        this.wdmchcod = wdmchcod;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcYm3600pkoYm345palletDetailsResponsePoutYm345palletDetails)) return false;
        final ProcYm3600pkoYm345palletDetailsResponsePoutYm345palletDetails procYm3600pkoYm345palletDetailsResponsePoutYm345palletDetails = (ProcYm3600pkoYm345palletDetailsResponsePoutYm345palletDetails) o;
        return Objects.equals(getYrncod(), procYm3600pkoYm345palletDetailsResponsePoutYm345palletDetails.getYrncod()) &&
                Objects.equals(getConwgt(), procYm3600pkoYm345palletDetailsResponsePoutYm345palletDetails.getConwgt()) &&
                Objects.equals(getNumcon(), procYm3600pkoYm345palletDetailsResponsePoutYm345palletDetails.getNumcon()) &&
                Objects.equals(getYrnphys(), procYm3600pkoYm345palletDetailsResponsePoutYm345palletDetails.getYrnphys()) &&
                Objects.equals(getWqtyachievable(), procYm3600pkoYm345palletDetailsResponsePoutYm345palletDetails.getWqtyachievable()) &&
                Objects.equals(getWclrref(), procYm3600pkoYm345palletDetailsResponsePoutYm345palletDetails.getWclrref()) &&
                Objects.equals(getWnyrncdes(), procYm3600pkoYm345palletDetailsResponsePoutYm345palletDetails.getWnyrncdes()) &&
                Objects.equals(getWnyrncnt(), procYm3600pkoYm345palletDetailsResponsePoutYm345palletDetails.getWnyrncnt()) &&
                Objects.equals(getWnfyrncps(), procYm3600pkoYm345palletDetailsResponsePoutYm345palletDetails.getWnfyrncps()) &&
                Objects.equals(getWyrnori(), procYm3600pkoYm345palletDetailsResponsePoutYm345palletDetails.getWyrnori()) &&
                Objects.equals(getWyrnlot(), procYm3600pkoYm345palletDetailsResponsePoutYm345palletDetails.getWyrnlot()) &&
                Objects.equals(getWnyrnqlty(), procYm3600pkoYm345palletDetailsResponsePoutYm345palletDetails.getWnyrnqlty()) &&
                Objects.equals(getWnyrnsubqltya(), procYm3600pkoYm345palletDetailsResponsePoutYm345palletDetails.getWnyrnsubqltya()) &&
                Objects.equals(getWnyrnsubqltyb(), procYm3600pkoYm345palletDetailsResponsePoutYm345palletDetails.getWnyrnsubqltyb()) &&
                Objects.equals(getWbchseq(), procYm3600pkoYm345palletDetailsResponsePoutYm345palletDetails.getWbchseq()) &&
                Objects.equals(getWdmchcod(), procYm3600pkoYm345palletDetailsResponsePoutYm345palletDetails.getWdmchcod());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getYrncod(),
                getConwgt(),
                getNumcon(),
                getYrnphys(),
                getWqtyachievable(),
                getWclrref(),
                getWnyrncdes(),
                getWnyrncnt(),
                getWnfyrncps(),
                getWyrnori(),
                getWyrnlot(),
                getWnyrnqlty(),
                getWnyrnsubqltya(),
                getWnyrnsubqltyb(),
                getWbchseq(),
                getWdmchcod());
    }
}