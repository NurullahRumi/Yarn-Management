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

public class GetProcYm1000wpk0DelflrYm150dspyDelnumResponsePoutdelnum implements Serializable {


    @ColumnAlias("DELNUM")
    private Integer delnum;

    @ColumnAlias("DATEDEL")
    private LocalDateTime datedel;

    @ColumnAlias("MANUALDN")
    private String manualdn;

    @ColumnAlias("FROMWRH")
    private String fromwrh;

    @ColumnAlias("TOWRH")
    private String towrh;

    @ColumnAlias("REQNUM")
    private Integer reqnum;

    @ColumnAlias("REQNSEQ")
    private Byte reqnseq;

    @ColumnAlias("PALLETID")
    private String palletid;

    @ColumnAlias("TOWHDES")
    private String towhdes;

    @ColumnAlias("FROMWHDES")
    private String fromwhdes;

    public Integer getDelnum() {
        return this.delnum;
    }

    public void setDelnum(Integer delnum) {
        this.delnum = delnum;
    }

    public LocalDateTime getDatedel() {
        return this.datedel;
    }

    public void setDatedel(LocalDateTime datedel) {
        this.datedel = datedel;
    }

    public String getManualdn() {
        return this.manualdn;
    }

    public void setManualdn(String manualdn) {
        this.manualdn = manualdn;
    }

    public String getFromwrh() {
        return this.fromwrh;
    }

    public void setFromwrh(String fromwrh) {
        this.fromwrh = fromwrh;
    }

    public String getTowrh() {
        return this.towrh;
    }

    public void setTowrh(String towrh) {
        this.towrh = towrh;
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

    public String getPalletid() {
        return this.palletid;
    }

    public void setPalletid(String palletid) {
        this.palletid = palletid;
    }

    public String getTowhdes() {
        return this.towhdes;
    }

    public void setTowhdes(String towhdes) {
        this.towhdes = towhdes;
    }

    public String getFromwhdes() {
        return this.fromwhdes;
    }

    public void setFromwhdes(String fromwhdes) {
        this.fromwhdes = fromwhdes;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof GetProcYm1000wpk0DelflrYm150dspyDelnumResponsePoutdelnum)) return false;
        final GetProcYm1000wpk0DelflrYm150dspyDelnumResponsePoutdelnum getProcYm1000wpk0delflrYm150dspyDelnumResponsePoutdelnum = (GetProcYm1000wpk0DelflrYm150dspyDelnumResponsePoutdelnum) o;
        return Objects.equals(getDelnum(), getProcYm1000wpk0delflrYm150dspyDelnumResponsePoutdelnum.getDelnum()) &&
                Objects.equals(getDatedel(), getProcYm1000wpk0delflrYm150dspyDelnumResponsePoutdelnum.getDatedel()) &&
                Objects.equals(getManualdn(), getProcYm1000wpk0delflrYm150dspyDelnumResponsePoutdelnum.getManualdn()) &&
                Objects.equals(getFromwrh(), getProcYm1000wpk0delflrYm150dspyDelnumResponsePoutdelnum.getFromwrh()) &&
                Objects.equals(getTowrh(), getProcYm1000wpk0delflrYm150dspyDelnumResponsePoutdelnum.getTowrh()) &&
                Objects.equals(getReqnum(), getProcYm1000wpk0delflrYm150dspyDelnumResponsePoutdelnum.getReqnum()) &&
                Objects.equals(getReqnseq(), getProcYm1000wpk0delflrYm150dspyDelnumResponsePoutdelnum.getReqnseq()) &&
                Objects.equals(getPalletid(), getProcYm1000wpk0delflrYm150dspyDelnumResponsePoutdelnum.getPalletid()) &&
                Objects.equals(getTowhdes(), getProcYm1000wpk0delflrYm150dspyDelnumResponsePoutdelnum.getTowhdes()) &&
                Objects.equals(getFromwhdes(), getProcYm1000wpk0delflrYm150dspyDelnumResponsePoutdelnum.getFromwhdes());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getDelnum(),
                getDatedel(),
                getManualdn(),
                getFromwrh(),
                getTowrh(),
                getReqnum(),
                getReqnseq(),
                getPalletid(),
                getTowhdes(),
                getFromwhdes());
    }
}