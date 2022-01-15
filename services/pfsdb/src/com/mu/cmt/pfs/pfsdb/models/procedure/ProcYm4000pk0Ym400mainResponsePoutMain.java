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

public class ProcYm4000pk0Ym400mainResponsePoutMain implements Serializable {


    @ColumnAlias("CONTRACTDAT")
    private LocalDateTime contractdat;

    @ColumnAlias("RYRNORI")
    private String ryrnori;

    @ColumnAlias("CONTRACTSTS")
    private String contractsts;

    @ColumnAlias("W_CONTRACTSTS")
    private String wcontractsts;

    @ColumnAlias("CONTRACTID")
    private String contractid;

    @ColumnAlias("MODID")
    private String modid;

    @ColumnAlias("MODDAT")
    private LocalDateTime moddat;

    @ColumnAlias("CONTRACTNO")
    private String contractno;

    @ColumnAlias("CTYCOD")
    private String ctycod;

    @ColumnAlias("LCREDITNO")
    private String lcreditno;

    @ColumnAlias("CREATEDID")
    private String createdid;

    @ColumnAlias("CREATEDDAT")
    private LocalDateTime createddat;

    public LocalDateTime getContractdat() {
        return this.contractdat;
    }

    public void setContractdat(LocalDateTime contractdat) {
        this.contractdat = contractdat;
    }

    public String getRyrnori() {
        return this.ryrnori;
    }

    public void setRyrnori(String ryrnori) {
        this.ryrnori = ryrnori;
    }

    public String getContractsts() {
        return this.contractsts;
    }

    public void setContractsts(String contractsts) {
        this.contractsts = contractsts;
    }

    public String getWcontractsts() {
        return this.wcontractsts;
    }

    public void setWcontractsts(String wcontractsts) {
        this.wcontractsts = wcontractsts;
    }

    public String getContractid() {
        return this.contractid;
    }

    public void setContractid(String contractid) {
        this.contractid = contractid;
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

    public String getContractno() {
        return this.contractno;
    }

    public void setContractno(String contractno) {
        this.contractno = contractno;
    }

    public String getCtycod() {
        return this.ctycod;
    }

    public void setCtycod(String ctycod) {
        this.ctycod = ctycod;
    }

    public String getLcreditno() {
        return this.lcreditno;
    }

    public void setLcreditno(String lcreditno) {
        this.lcreditno = lcreditno;
    }

    public String getCreatedid() {
        return this.createdid;
    }

    public void setCreatedid(String createdid) {
        this.createdid = createdid;
    }

    public LocalDateTime getCreateddat() {
        return this.createddat;
    }

    public void setCreateddat(LocalDateTime createddat) {
        this.createddat = createddat;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcYm4000pk0Ym400mainResponsePoutMain)) return false;
        final ProcYm4000pk0Ym400mainResponsePoutMain procYm4000pk0ym400mainResponsePoutMain = (ProcYm4000pk0Ym400mainResponsePoutMain) o;
        return Objects.equals(getContractdat(), procYm4000pk0ym400mainResponsePoutMain.getContractdat()) &&
                Objects.equals(getRyrnori(), procYm4000pk0ym400mainResponsePoutMain.getRyrnori()) &&
                Objects.equals(getContractsts(), procYm4000pk0ym400mainResponsePoutMain.getContractsts()) &&
                Objects.equals(getWcontractsts(), procYm4000pk0ym400mainResponsePoutMain.getWcontractsts()) &&
                Objects.equals(getContractid(), procYm4000pk0ym400mainResponsePoutMain.getContractid()) &&
                Objects.equals(getModid(), procYm4000pk0ym400mainResponsePoutMain.getModid()) &&
                Objects.equals(getModdat(), procYm4000pk0ym400mainResponsePoutMain.getModdat()) &&
                Objects.equals(getContractno(), procYm4000pk0ym400mainResponsePoutMain.getContractno()) &&
                Objects.equals(getCtycod(), procYm4000pk0ym400mainResponsePoutMain.getCtycod()) &&
                Objects.equals(getLcreditno(), procYm4000pk0ym400mainResponsePoutMain.getLcreditno()) &&
                Objects.equals(getCreatedid(), procYm4000pk0ym400mainResponsePoutMain.getCreatedid()) &&
                Objects.equals(getCreateddat(), procYm4000pk0ym400mainResponsePoutMain.getCreateddat());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getContractdat(),
                getRyrnori(),
                getContractsts(),
                getWcontractsts(),
                getContractid(),
                getModid(),
                getModdat(),
                getContractno(),
                getCtycod(),
                getLcreditno(),
                getCreatedid(),
                getCreateddat());
    }
}