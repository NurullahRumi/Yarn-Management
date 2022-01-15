/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.math.BigInteger;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcYm1311pk0Ym100masterResponsePoutYm100master implements Serializable {


    @ColumnAlias("YRNCOD")
    private String yrncod;

    @ColumnAlias("YRNORI")
    private String yrnori;

    @ColumnAlias("YRNLOT")
    private String yrnlot;

    @ColumnAlias("MANUDAT")
    private LocalDateTime manudat;

    @ColumnAlias("RYRNORI")
    private String ryrnori;

    @ColumnAlias("RYRNLOT")
    private String ryrnlot;

    @ColumnAlias("NMODID")
    private String nmodid;

    @ColumnAlias("NMODDAT")
    private LocalDateTime nmoddat;

    @ColumnAlias("YRNSTAT")
    private String yrnstat;

    @ColumnAlias("FIBDETUPDIND")
    private String fibdetupdind;

    @ColumnAlias("W_REFLOT")
    private String wreflot;

    @ColumnAlias("NFYRNCPS")
    private String nfyrncps;

    @ColumnAlias("NYRNCNT")
    private String nyrncnt;

    @ColumnAlias("NYRNTEX")
    private Float nyrntex;

    @ColumnAlias("NFCNTDES")
    private String nfcntdes;

    @ColumnAlias("W_NYRNSUBQLTYA_LBL")
    private String wnyrnsubqltyaLbl;

    @ColumnAlias("W_NYRNSUBQLTYB_LBL")
    private String wnyrnsubqltybLbl;

    @ColumnAlias("W_NYRNSUBQLTYC_LBL")
    private String wnyrnsubqltycLbl;

    @ColumnAlias("W_NYRNSUBQLTYD_LBL")
    private String wnyrnsubqltydLbl;

    @ColumnAlias("W_NYRNSUBQLTYE_LBL")
    private String wnyrnsubqltyeLbl;

    @ColumnAlias("W_NYRNQLTY_DES")
    private String wnyrnqltyDes;

    @ColumnAlias("NYRNQLTY")
    private String nyrnqlty;

    @ColumnAlias("NYRNSUBQLTYA")
    private String nyrnsubqltya;

    @ColumnAlias("NYRNSUBQLTYB")
    private String nyrnsubqltyb;

    @ColumnAlias("NYRNSUBQLTYC")
    private String nyrnsubqltyc;

    @ColumnAlias("NYRNSUBQLTYD")
    private String nyrnsubqltyd;

    @ColumnAlias("NYRNSUBQLTYE")
    private String nyrnsubqltye;

    @ColumnAlias("NYRNCLR")
    private String nyrnclr;

    @ColumnAlias("NYRNCDES")
    private String nyrncdes;

    @ColumnAlias("CLRREF")
    private String clrref;

    @ColumnAlias("RSKUNO")
    private String rskuno;

    @ColumnAlias("RPURCLRSEQ")
    private Byte rpurclrseq;

    @ColumnAlias("W_PURCLRDES")
    private String wpurclrdes;

    @ColumnAlias("BASE_YRNCLR")
    private String baseYrnclr;

    @ColumnAlias("BASE_YRNCDES")
    private String baseYrncdes;

    @ColumnAlias("BASE_CLRREF")
    private String baseClrref;

    @ColumnAlias("BASE_RSKUNO")
    private String baseRskuno;

    @ColumnAlias("BASE_RPURCLRSEQ")
    private Byte baseRpurclrseq;

    @ColumnAlias("W_BASE_PURCLRDES")
    private String wbasePurclrdes;

    @ColumnAlias("SURPLUSCAT")
    private String surpluscat;

    @ColumnAlias("W_SURPLUSCAT_DES")
    private String wsurpluscatDes;

    @ColumnAlias("MAXYRNFFCOD")
    private String maxyrnffcod;

    @ColumnAlias("YRNFF")
    private String yrnff;

    @ColumnAlias("REMARK")
    private String remark;

    @ColumnAlias("YRNQLTYCARE")
    private String yrnqltycare;

    @ColumnAlias("W_YRNQLTYCARE_DESC")
    private String wyrnqltycareDesc;

    @ColumnAlias("QTYPHYS")
    private Double qtyphys;

    @ColumnAlias("QTYAVAIL")
    private Double qtyavail;

    @ColumnAlias("QTYAVAILALC")
    private Double qtyavailalc;

    @ColumnAlias("QTYALC")
    private Double qtyalc;

    @ColumnAlias("QTYDEL")
    private Double qtydel;

    @ColumnAlias("QTYRET")
    private Float qtyret;

    @ColumnAlias("QTYREQN")
    private Double qtyreqn;

    @ColumnAlias("W_NETQTYDEL")
    private Double wnetqtydel;

    @ColumnAlias("W_QTYDELXS")
    private Double wqtydelxs;

    @ColumnAlias("W_NYRNSUBQLTYA_DES")
    private String wnyrnsubqltyaDes;

    @ColumnAlias("W_NYRNSUBQLTYB_DES")
    private String wnyrnsubqltybDes;

    @ColumnAlias("W_NYRNSUBQLTYC_DES")
    private String wnyrnsubqltycDes;

    @ColumnAlias("W_NYRNSUBQLTYD_DES")
    private String wnyrnsubqltydDes;

    @ColumnAlias("W_NYRNSUBQLTYE_DES")
    private String wnyrnsubqltyeDes;

    @ColumnAlias("CNTNUM")
    private String cntnum;

    @ColumnAlias("W_OTHER_CONTAINERNUM")
    private String wotherContainernum;

    @ColumnAlias("WRHNUM")
    private String wrhnum;

    @ColumnAlias("STRDES")
    private String strdes;

    @ColumnAlias("STKTYP")
    private String stktyp;

    @ColumnAlias("W_STKDESC")
    private String wstkdesc;

    @ColumnAlias("W_STKDESC2")
    private String wstkdesc2;

    @ColumnAlias("CARWGT")
    private Float carwgt;

    @ColumnAlias("W_STKDESC3")
    private String wstkdesc3;

    @ColumnAlias("CONCAR")
    private Short concar;

    @ColumnAlias("CONWGT")
    private Float conwgt;

    @ColumnAlias("CARPALL")
    private Short carpall;

    @ColumnAlias("W_STKDESC4")
    private String wstkdesc4;

    @ColumnAlias("SCONTYP")
    private String scontyp;

    @ColumnAlias("SPACKTYP")
    private String spacktyp;

    @ColumnAlias("QTYREC")
    private Double qtyrec;

    @ColumnAlias("QTYREJ")
    private Double qtyrej;

    @ColumnAlias("QTYSOLD")
    private Double qtysold;

    @ColumnAlias("SUPPALWGT")
    private Float suppalwgt;

    @ColumnAlias("EMPCON")
    private Float empcon;

    @ColumnAlias("DATEREC")
    private LocalDateTime daterec;

    @ColumnAlias("CARREC")
    private Integer carrec;

    @ColumnAlias("W_FIBRE_VIEW")
    private String wfibreView;

    @ColumnAlias("W_WH1")
    private BigInteger wwh1;

    @ColumnAlias("W_WH1LVL")
    private String wwh1lvl;

    @ColumnAlias("CAN_EDIT_FIBRE")
    private String canEditFibre;

    @ColumnAlias("CAN_EDIT_FINISH")
    private String canEditFinish;

    public String getYrncod() {
        return this.yrncod;
    }

    public void setYrncod(String yrncod) {
        this.yrncod = yrncod;
    }

    public String getYrnori() {
        return this.yrnori;
    }

    public void setYrnori(String yrnori) {
        this.yrnori = yrnori;
    }

    public String getYrnlot() {
        return this.yrnlot;
    }

    public void setYrnlot(String yrnlot) {
        this.yrnlot = yrnlot;
    }

    public LocalDateTime getManudat() {
        return this.manudat;
    }

    public void setManudat(LocalDateTime manudat) {
        this.manudat = manudat;
    }

    public String getRyrnori() {
        return this.ryrnori;
    }

    public void setRyrnori(String ryrnori) {
        this.ryrnori = ryrnori;
    }

    public String getRyrnlot() {
        return this.ryrnlot;
    }

    public void setRyrnlot(String ryrnlot) {
        this.ryrnlot = ryrnlot;
    }

    public String getNmodid() {
        return this.nmodid;
    }

    public void setNmodid(String nmodid) {
        this.nmodid = nmodid;
    }

    public LocalDateTime getNmoddat() {
        return this.nmoddat;
    }

    public void setNmoddat(LocalDateTime nmoddat) {
        this.nmoddat = nmoddat;
    }

    public String getYrnstat() {
        return this.yrnstat;
    }

    public void setYrnstat(String yrnstat) {
        this.yrnstat = yrnstat;
    }

    public String getFibdetupdind() {
        return this.fibdetupdind;
    }

    public void setFibdetupdind(String fibdetupdind) {
        this.fibdetupdind = fibdetupdind;
    }

    public String getWreflot() {
        return this.wreflot;
    }

    public void setWreflot(String wreflot) {
        this.wreflot = wreflot;
    }

    public String getNfyrncps() {
        return this.nfyrncps;
    }

    public void setNfyrncps(String nfyrncps) {
        this.nfyrncps = nfyrncps;
    }

    public String getNyrncnt() {
        return this.nyrncnt;
    }

    public void setNyrncnt(String nyrncnt) {
        this.nyrncnt = nyrncnt;
    }

    public Float getNyrntex() {
        return this.nyrntex;
    }

    public void setNyrntex(Float nyrntex) {
        this.nyrntex = nyrntex;
    }

    public String getNfcntdes() {
        return this.nfcntdes;
    }

    public void setNfcntdes(String nfcntdes) {
        this.nfcntdes = nfcntdes;
    }

    public String getWnyrnsubqltyaLbl() {
        return this.wnyrnsubqltyaLbl;
    }

    public void setWnyrnsubqltyaLbl(String wnyrnsubqltyaLbl) {
        this.wnyrnsubqltyaLbl = wnyrnsubqltyaLbl;
    }

    public String getWnyrnsubqltybLbl() {
        return this.wnyrnsubqltybLbl;
    }

    public void setWnyrnsubqltybLbl(String wnyrnsubqltybLbl) {
        this.wnyrnsubqltybLbl = wnyrnsubqltybLbl;
    }

    public String getWnyrnsubqltycLbl() {
        return this.wnyrnsubqltycLbl;
    }

    public void setWnyrnsubqltycLbl(String wnyrnsubqltycLbl) {
        this.wnyrnsubqltycLbl = wnyrnsubqltycLbl;
    }

    public String getWnyrnsubqltydLbl() {
        return this.wnyrnsubqltydLbl;
    }

    public void setWnyrnsubqltydLbl(String wnyrnsubqltydLbl) {
        this.wnyrnsubqltydLbl = wnyrnsubqltydLbl;
    }

    public String getWnyrnsubqltyeLbl() {
        return this.wnyrnsubqltyeLbl;
    }

    public void setWnyrnsubqltyeLbl(String wnyrnsubqltyeLbl) {
        this.wnyrnsubqltyeLbl = wnyrnsubqltyeLbl;
    }

    public String getWnyrnqltyDes() {
        return this.wnyrnqltyDes;
    }

    public void setWnyrnqltyDes(String wnyrnqltyDes) {
        this.wnyrnqltyDes = wnyrnqltyDes;
    }

    public String getNyrnqlty() {
        return this.nyrnqlty;
    }

    public void setNyrnqlty(String nyrnqlty) {
        this.nyrnqlty = nyrnqlty;
    }

    public String getNyrnsubqltya() {
        return this.nyrnsubqltya;
    }

    public void setNyrnsubqltya(String nyrnsubqltya) {
        this.nyrnsubqltya = nyrnsubqltya;
    }

    public String getNyrnsubqltyb() {
        return this.nyrnsubqltyb;
    }

    public void setNyrnsubqltyb(String nyrnsubqltyb) {
        this.nyrnsubqltyb = nyrnsubqltyb;
    }

    public String getNyrnsubqltyc() {
        return this.nyrnsubqltyc;
    }

    public void setNyrnsubqltyc(String nyrnsubqltyc) {
        this.nyrnsubqltyc = nyrnsubqltyc;
    }

    public String getNyrnsubqltyd() {
        return this.nyrnsubqltyd;
    }

    public void setNyrnsubqltyd(String nyrnsubqltyd) {
        this.nyrnsubqltyd = nyrnsubqltyd;
    }

    public String getNyrnsubqltye() {
        return this.nyrnsubqltye;
    }

    public void setNyrnsubqltye(String nyrnsubqltye) {
        this.nyrnsubqltye = nyrnsubqltye;
    }

    public String getNyrnclr() {
        return this.nyrnclr;
    }

    public void setNyrnclr(String nyrnclr) {
        this.nyrnclr = nyrnclr;
    }

    public String getNyrncdes() {
        return this.nyrncdes;
    }

    public void setNyrncdes(String nyrncdes) {
        this.nyrncdes = nyrncdes;
    }

    public String getClrref() {
        return this.clrref;
    }

    public void setClrref(String clrref) {
        this.clrref = clrref;
    }

    public String getRskuno() {
        return this.rskuno;
    }

    public void setRskuno(String rskuno) {
        this.rskuno = rskuno;
    }

    public Byte getRpurclrseq() {
        return this.rpurclrseq;
    }

    public void setRpurclrseq(Byte rpurclrseq) {
        this.rpurclrseq = rpurclrseq;
    }

    public String getWpurclrdes() {
        return this.wpurclrdes;
    }

    public void setWpurclrdes(String wpurclrdes) {
        this.wpurclrdes = wpurclrdes;
    }

    public String getBaseYrnclr() {
        return this.baseYrnclr;
    }

    public void setBaseYrnclr(String baseYrnclr) {
        this.baseYrnclr = baseYrnclr;
    }

    public String getBaseYrncdes() {
        return this.baseYrncdes;
    }

    public void setBaseYrncdes(String baseYrncdes) {
        this.baseYrncdes = baseYrncdes;
    }

    public String getBaseClrref() {
        return this.baseClrref;
    }

    public void setBaseClrref(String baseClrref) {
        this.baseClrref = baseClrref;
    }

    public String getBaseRskuno() {
        return this.baseRskuno;
    }

    public void setBaseRskuno(String baseRskuno) {
        this.baseRskuno = baseRskuno;
    }

    public Byte getBaseRpurclrseq() {
        return this.baseRpurclrseq;
    }

    public void setBaseRpurclrseq(Byte baseRpurclrseq) {
        this.baseRpurclrseq = baseRpurclrseq;
    }

    public String getWbasePurclrdes() {
        return this.wbasePurclrdes;
    }

    public void setWbasePurclrdes(String wbasePurclrdes) {
        this.wbasePurclrdes = wbasePurclrdes;
    }

    public String getSurpluscat() {
        return this.surpluscat;
    }

    public void setSurpluscat(String surpluscat) {
        this.surpluscat = surpluscat;
    }

    public String getWsurpluscatDes() {
        return this.wsurpluscatDes;
    }

    public void setWsurpluscatDes(String wsurpluscatDes) {
        this.wsurpluscatDes = wsurpluscatDes;
    }

    public String getMaxyrnffcod() {
        return this.maxyrnffcod;
    }

    public void setMaxyrnffcod(String maxyrnffcod) {
        this.maxyrnffcod = maxyrnffcod;
    }

    public String getYrnff() {
        return this.yrnff;
    }

    public void setYrnff(String yrnff) {
        this.yrnff = yrnff;
    }

    public String getRemark() {
        return this.remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    public String getYrnqltycare() {
        return this.yrnqltycare;
    }

    public void setYrnqltycare(String yrnqltycare) {
        this.yrnqltycare = yrnqltycare;
    }

    public String getWyrnqltycareDesc() {
        return this.wyrnqltycareDesc;
    }

    public void setWyrnqltycareDesc(String wyrnqltycareDesc) {
        this.wyrnqltycareDesc = wyrnqltycareDesc;
    }

    public Double getQtyphys() {
        return this.qtyphys;
    }

    public void setQtyphys(Double qtyphys) {
        this.qtyphys = qtyphys;
    }

    public Double getQtyavail() {
        return this.qtyavail;
    }

    public void setQtyavail(Double qtyavail) {
        this.qtyavail = qtyavail;
    }

    public Double getQtyavailalc() {
        return this.qtyavailalc;
    }

    public void setQtyavailalc(Double qtyavailalc) {
        this.qtyavailalc = qtyavailalc;
    }

    public Double getQtyalc() {
        return this.qtyalc;
    }

    public void setQtyalc(Double qtyalc) {
        this.qtyalc = qtyalc;
    }

    public Double getQtydel() {
        return this.qtydel;
    }

    public void setQtydel(Double qtydel) {
        this.qtydel = qtydel;
    }

    public Float getQtyret() {
        return this.qtyret;
    }

    public void setQtyret(Float qtyret) {
        this.qtyret = qtyret;
    }

    public Double getQtyreqn() {
        return this.qtyreqn;
    }

    public void setQtyreqn(Double qtyreqn) {
        this.qtyreqn = qtyreqn;
    }

    public Double getWnetqtydel() {
        return this.wnetqtydel;
    }

    public void setWnetqtydel(Double wnetqtydel) {
        this.wnetqtydel = wnetqtydel;
    }

    public Double getWqtydelxs() {
        return this.wqtydelxs;
    }

    public void setWqtydelxs(Double wqtydelxs) {
        this.wqtydelxs = wqtydelxs;
    }

    public String getWnyrnsubqltyaDes() {
        return this.wnyrnsubqltyaDes;
    }

    public void setWnyrnsubqltyaDes(String wnyrnsubqltyaDes) {
        this.wnyrnsubqltyaDes = wnyrnsubqltyaDes;
    }

    public String getWnyrnsubqltybDes() {
        return this.wnyrnsubqltybDes;
    }

    public void setWnyrnsubqltybDes(String wnyrnsubqltybDes) {
        this.wnyrnsubqltybDes = wnyrnsubqltybDes;
    }

    public String getWnyrnsubqltycDes() {
        return this.wnyrnsubqltycDes;
    }

    public void setWnyrnsubqltycDes(String wnyrnsubqltycDes) {
        this.wnyrnsubqltycDes = wnyrnsubqltycDes;
    }

    public String getWnyrnsubqltydDes() {
        return this.wnyrnsubqltydDes;
    }

    public void setWnyrnsubqltydDes(String wnyrnsubqltydDes) {
        this.wnyrnsubqltydDes = wnyrnsubqltydDes;
    }

    public String getWnyrnsubqltyeDes() {
        return this.wnyrnsubqltyeDes;
    }

    public void setWnyrnsubqltyeDes(String wnyrnsubqltyeDes) {
        this.wnyrnsubqltyeDes = wnyrnsubqltyeDes;
    }

    public String getCntnum() {
        return this.cntnum;
    }

    public void setCntnum(String cntnum) {
        this.cntnum = cntnum;
    }

    public String getWotherContainernum() {
        return this.wotherContainernum;
    }

    public void setWotherContainernum(String wotherContainernum) {
        this.wotherContainernum = wotherContainernum;
    }

    public String getWrhnum() {
        return this.wrhnum;
    }

    public void setWrhnum(String wrhnum) {
        this.wrhnum = wrhnum;
    }

    public String getStrdes() {
        return this.strdes;
    }

    public void setStrdes(String strdes) {
        this.strdes = strdes;
    }

    public String getStktyp() {
        return this.stktyp;
    }

    public void setStktyp(String stktyp) {
        this.stktyp = stktyp;
    }

    public String getWstkdesc() {
        return this.wstkdesc;
    }

    public void setWstkdesc(String wstkdesc) {
        this.wstkdesc = wstkdesc;
    }

    public String getWstkdesc2() {
        return this.wstkdesc2;
    }

    public void setWstkdesc2(String wstkdesc2) {
        this.wstkdesc2 = wstkdesc2;
    }

    public Float getCarwgt() {
        return this.carwgt;
    }

    public void setCarwgt(Float carwgt) {
        this.carwgt = carwgt;
    }

    public String getWstkdesc3() {
        return this.wstkdesc3;
    }

    public void setWstkdesc3(String wstkdesc3) {
        this.wstkdesc3 = wstkdesc3;
    }

    public Short getConcar() {
        return this.concar;
    }

    public void setConcar(Short concar) {
        this.concar = concar;
    }

    public Float getConwgt() {
        return this.conwgt;
    }

    public void setConwgt(Float conwgt) {
        this.conwgt = conwgt;
    }

    public Short getCarpall() {
        return this.carpall;
    }

    public void setCarpall(Short carpall) {
        this.carpall = carpall;
    }

    public String getWstkdesc4() {
        return this.wstkdesc4;
    }

    public void setWstkdesc4(String wstkdesc4) {
        this.wstkdesc4 = wstkdesc4;
    }

    public String getScontyp() {
        return this.scontyp;
    }

    public void setScontyp(String scontyp) {
        this.scontyp = scontyp;
    }

    public String getSpacktyp() {
        return this.spacktyp;
    }

    public void setSpacktyp(String spacktyp) {
        this.spacktyp = spacktyp;
    }

    public Double getQtyrec() {
        return this.qtyrec;
    }

    public void setQtyrec(Double qtyrec) {
        this.qtyrec = qtyrec;
    }

    public Double getQtyrej() {
        return this.qtyrej;
    }

    public void setQtyrej(Double qtyrej) {
        this.qtyrej = qtyrej;
    }

    public Double getQtysold() {
        return this.qtysold;
    }

    public void setQtysold(Double qtysold) {
        this.qtysold = qtysold;
    }

    public Float getSuppalwgt() {
        return this.suppalwgt;
    }

    public void setSuppalwgt(Float suppalwgt) {
        this.suppalwgt = suppalwgt;
    }

    public Float getEmpcon() {
        return this.empcon;
    }

    public void setEmpcon(Float empcon) {
        this.empcon = empcon;
    }

    public LocalDateTime getDaterec() {
        return this.daterec;
    }

    public void setDaterec(LocalDateTime daterec) {
        this.daterec = daterec;
    }

    public Integer getCarrec() {
        return this.carrec;
    }

    public void setCarrec(Integer carrec) {
        this.carrec = carrec;
    }

    public String getWfibreView() {
        return this.wfibreView;
    }

    public void setWfibreView(String wfibreView) {
        this.wfibreView = wfibreView;
    }

    public BigInteger getWwh1() {
        return this.wwh1;
    }

    public void setWwh1(BigInteger wwh1) {
        this.wwh1 = wwh1;
    }

    public String getWwh1lvl() {
        return this.wwh1lvl;
    }

    public void setWwh1lvl(String wwh1lvl) {
        this.wwh1lvl = wwh1lvl;
    }

    public String getCanEditFibre() {
        return this.canEditFibre;
    }

    public void setCanEditFibre(String canEditFibre) {
        this.canEditFibre = canEditFibre;
    }

    public String getCanEditFinish() {
        return this.canEditFinish;
    }

    public void setCanEditFinish(String canEditFinish) {
        this.canEditFinish = canEditFinish;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcYm1311pk0Ym100masterResponsePoutYm100master)) return false;
        final ProcYm1311pk0Ym100masterResponsePoutYm100master procYm1311pk0ym100masterResponsePoutYm100master = (ProcYm1311pk0Ym100masterResponsePoutYm100master) o;
        return Objects.equals(getYrncod(), procYm1311pk0ym100masterResponsePoutYm100master.getYrncod()) &&
                Objects.equals(getYrnori(), procYm1311pk0ym100masterResponsePoutYm100master.getYrnori()) &&
                Objects.equals(getYrnlot(), procYm1311pk0ym100masterResponsePoutYm100master.getYrnlot()) &&
                Objects.equals(getManudat(), procYm1311pk0ym100masterResponsePoutYm100master.getManudat()) &&
                Objects.equals(getRyrnori(), procYm1311pk0ym100masterResponsePoutYm100master.getRyrnori()) &&
                Objects.equals(getRyrnlot(), procYm1311pk0ym100masterResponsePoutYm100master.getRyrnlot()) &&
                Objects.equals(getNmodid(), procYm1311pk0ym100masterResponsePoutYm100master.getNmodid()) &&
                Objects.equals(getNmoddat(), procYm1311pk0ym100masterResponsePoutYm100master.getNmoddat()) &&
                Objects.equals(getYrnstat(), procYm1311pk0ym100masterResponsePoutYm100master.getYrnstat()) &&
                Objects.equals(getFibdetupdind(), procYm1311pk0ym100masterResponsePoutYm100master.getFibdetupdind()) &&
                Objects.equals(getWreflot(), procYm1311pk0ym100masterResponsePoutYm100master.getWreflot()) &&
                Objects.equals(getNfyrncps(), procYm1311pk0ym100masterResponsePoutYm100master.getNfyrncps()) &&
                Objects.equals(getNyrncnt(), procYm1311pk0ym100masterResponsePoutYm100master.getNyrncnt()) &&
                Objects.equals(getNyrntex(), procYm1311pk0ym100masterResponsePoutYm100master.getNyrntex()) &&
                Objects.equals(getNfcntdes(), procYm1311pk0ym100masterResponsePoutYm100master.getNfcntdes()) &&
                Objects.equals(getWnyrnsubqltyaLbl(), procYm1311pk0ym100masterResponsePoutYm100master.getWnyrnsubqltyaLbl()) &&
                Objects.equals(getWnyrnsubqltybLbl(), procYm1311pk0ym100masterResponsePoutYm100master.getWnyrnsubqltybLbl()) &&
                Objects.equals(getWnyrnsubqltycLbl(), procYm1311pk0ym100masterResponsePoutYm100master.getWnyrnsubqltycLbl()) &&
                Objects.equals(getWnyrnsubqltydLbl(), procYm1311pk0ym100masterResponsePoutYm100master.getWnyrnsubqltydLbl()) &&
                Objects.equals(getWnyrnsubqltyeLbl(), procYm1311pk0ym100masterResponsePoutYm100master.getWnyrnsubqltyeLbl()) &&
                Objects.equals(getWnyrnqltyDes(), procYm1311pk0ym100masterResponsePoutYm100master.getWnyrnqltyDes()) &&
                Objects.equals(getNyrnqlty(), procYm1311pk0ym100masterResponsePoutYm100master.getNyrnqlty()) &&
                Objects.equals(getNyrnsubqltya(), procYm1311pk0ym100masterResponsePoutYm100master.getNyrnsubqltya()) &&
                Objects.equals(getNyrnsubqltyb(), procYm1311pk0ym100masterResponsePoutYm100master.getNyrnsubqltyb()) &&
                Objects.equals(getNyrnsubqltyc(), procYm1311pk0ym100masterResponsePoutYm100master.getNyrnsubqltyc()) &&
                Objects.equals(getNyrnsubqltyd(), procYm1311pk0ym100masterResponsePoutYm100master.getNyrnsubqltyd()) &&
                Objects.equals(getNyrnsubqltye(), procYm1311pk0ym100masterResponsePoutYm100master.getNyrnsubqltye()) &&
                Objects.equals(getNyrnclr(), procYm1311pk0ym100masterResponsePoutYm100master.getNyrnclr()) &&
                Objects.equals(getNyrncdes(), procYm1311pk0ym100masterResponsePoutYm100master.getNyrncdes()) &&
                Objects.equals(getClrref(), procYm1311pk0ym100masterResponsePoutYm100master.getClrref()) &&
                Objects.equals(getRskuno(), procYm1311pk0ym100masterResponsePoutYm100master.getRskuno()) &&
                Objects.equals(getRpurclrseq(), procYm1311pk0ym100masterResponsePoutYm100master.getRpurclrseq()) &&
                Objects.equals(getWpurclrdes(), procYm1311pk0ym100masterResponsePoutYm100master.getWpurclrdes()) &&
                Objects.equals(getBaseYrnclr(), procYm1311pk0ym100masterResponsePoutYm100master.getBaseYrnclr()) &&
                Objects.equals(getBaseYrncdes(), procYm1311pk0ym100masterResponsePoutYm100master.getBaseYrncdes()) &&
                Objects.equals(getBaseClrref(), procYm1311pk0ym100masterResponsePoutYm100master.getBaseClrref()) &&
                Objects.equals(getBaseRskuno(), procYm1311pk0ym100masterResponsePoutYm100master.getBaseRskuno()) &&
                Objects.equals(getBaseRpurclrseq(), procYm1311pk0ym100masterResponsePoutYm100master.getBaseRpurclrseq()) &&
                Objects.equals(getWbasePurclrdes(), procYm1311pk0ym100masterResponsePoutYm100master.getWbasePurclrdes()) &&
                Objects.equals(getSurpluscat(), procYm1311pk0ym100masterResponsePoutYm100master.getSurpluscat()) &&
                Objects.equals(getWsurpluscatDes(), procYm1311pk0ym100masterResponsePoutYm100master.getWsurpluscatDes()) &&
                Objects.equals(getMaxyrnffcod(), procYm1311pk0ym100masterResponsePoutYm100master.getMaxyrnffcod()) &&
                Objects.equals(getYrnff(), procYm1311pk0ym100masterResponsePoutYm100master.getYrnff()) &&
                Objects.equals(getRemark(), procYm1311pk0ym100masterResponsePoutYm100master.getRemark()) &&
                Objects.equals(getYrnqltycare(), procYm1311pk0ym100masterResponsePoutYm100master.getYrnqltycare()) &&
                Objects.equals(getWyrnqltycareDesc(), procYm1311pk0ym100masterResponsePoutYm100master.getWyrnqltycareDesc()) &&
                Objects.equals(getQtyphys(), procYm1311pk0ym100masterResponsePoutYm100master.getQtyphys()) &&
                Objects.equals(getQtyavail(), procYm1311pk0ym100masterResponsePoutYm100master.getQtyavail()) &&
                Objects.equals(getQtyavailalc(), procYm1311pk0ym100masterResponsePoutYm100master.getQtyavailalc()) &&
                Objects.equals(getQtyalc(), procYm1311pk0ym100masterResponsePoutYm100master.getQtyalc()) &&
                Objects.equals(getQtydel(), procYm1311pk0ym100masterResponsePoutYm100master.getQtydel()) &&
                Objects.equals(getQtyret(), procYm1311pk0ym100masterResponsePoutYm100master.getQtyret()) &&
                Objects.equals(getQtyreqn(), procYm1311pk0ym100masterResponsePoutYm100master.getQtyreqn()) &&
                Objects.equals(getWnetqtydel(), procYm1311pk0ym100masterResponsePoutYm100master.getWnetqtydel()) &&
                Objects.equals(getWqtydelxs(), procYm1311pk0ym100masterResponsePoutYm100master.getWqtydelxs()) &&
                Objects.equals(getWnyrnsubqltyaDes(), procYm1311pk0ym100masterResponsePoutYm100master.getWnyrnsubqltyaDes()) &&
                Objects.equals(getWnyrnsubqltybDes(), procYm1311pk0ym100masterResponsePoutYm100master.getWnyrnsubqltybDes()) &&
                Objects.equals(getWnyrnsubqltycDes(), procYm1311pk0ym100masterResponsePoutYm100master.getWnyrnsubqltycDes()) &&
                Objects.equals(getWnyrnsubqltydDes(), procYm1311pk0ym100masterResponsePoutYm100master.getWnyrnsubqltydDes()) &&
                Objects.equals(getWnyrnsubqltyeDes(), procYm1311pk0ym100masterResponsePoutYm100master.getWnyrnsubqltyeDes()) &&
                Objects.equals(getCntnum(), procYm1311pk0ym100masterResponsePoutYm100master.getCntnum()) &&
                Objects.equals(getWotherContainernum(), procYm1311pk0ym100masterResponsePoutYm100master.getWotherContainernum()) &&
                Objects.equals(getWrhnum(), procYm1311pk0ym100masterResponsePoutYm100master.getWrhnum()) &&
                Objects.equals(getStrdes(), procYm1311pk0ym100masterResponsePoutYm100master.getStrdes()) &&
                Objects.equals(getStktyp(), procYm1311pk0ym100masterResponsePoutYm100master.getStktyp()) &&
                Objects.equals(getWstkdesc(), procYm1311pk0ym100masterResponsePoutYm100master.getWstkdesc()) &&
                Objects.equals(getWstkdesc2(), procYm1311pk0ym100masterResponsePoutYm100master.getWstkdesc2()) &&
                Objects.equals(getCarwgt(), procYm1311pk0ym100masterResponsePoutYm100master.getCarwgt()) &&
                Objects.equals(getWstkdesc3(), procYm1311pk0ym100masterResponsePoutYm100master.getWstkdesc3()) &&
                Objects.equals(getConcar(), procYm1311pk0ym100masterResponsePoutYm100master.getConcar()) &&
                Objects.equals(getConwgt(), procYm1311pk0ym100masterResponsePoutYm100master.getConwgt()) &&
                Objects.equals(getCarpall(), procYm1311pk0ym100masterResponsePoutYm100master.getCarpall()) &&
                Objects.equals(getWstkdesc4(), procYm1311pk0ym100masterResponsePoutYm100master.getWstkdesc4()) &&
                Objects.equals(getScontyp(), procYm1311pk0ym100masterResponsePoutYm100master.getScontyp()) &&
                Objects.equals(getSpacktyp(), procYm1311pk0ym100masterResponsePoutYm100master.getSpacktyp()) &&
                Objects.equals(getQtyrec(), procYm1311pk0ym100masterResponsePoutYm100master.getQtyrec()) &&
                Objects.equals(getQtyrej(), procYm1311pk0ym100masterResponsePoutYm100master.getQtyrej()) &&
                Objects.equals(getQtysold(), procYm1311pk0ym100masterResponsePoutYm100master.getQtysold()) &&
                Objects.equals(getSuppalwgt(), procYm1311pk0ym100masterResponsePoutYm100master.getSuppalwgt()) &&
                Objects.equals(getEmpcon(), procYm1311pk0ym100masterResponsePoutYm100master.getEmpcon()) &&
                Objects.equals(getDaterec(), procYm1311pk0ym100masterResponsePoutYm100master.getDaterec()) &&
                Objects.equals(getCarrec(), procYm1311pk0ym100masterResponsePoutYm100master.getCarrec()) &&
                Objects.equals(getWfibreView(), procYm1311pk0ym100masterResponsePoutYm100master.getWfibreView()) &&
                Objects.equals(getWwh1(), procYm1311pk0ym100masterResponsePoutYm100master.getWwh1()) &&
                Objects.equals(getWwh1lvl(), procYm1311pk0ym100masterResponsePoutYm100master.getWwh1lvl()) &&
                Objects.equals(getCanEditFibre(), procYm1311pk0ym100masterResponsePoutYm100master.getCanEditFibre()) &&
                Objects.equals(getCanEditFinish(), procYm1311pk0ym100masterResponsePoutYm100master.getCanEditFinish());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getYrncod(),
                getYrnori(),
                getYrnlot(),
                getManudat(),
                getRyrnori(),
                getRyrnlot(),
                getNmodid(),
                getNmoddat(),
                getYrnstat(),
                getFibdetupdind(),
                getWreflot(),
                getNfyrncps(),
                getNyrncnt(),
                getNyrntex(),
                getNfcntdes(),
                getWnyrnsubqltyaLbl(),
                getWnyrnsubqltybLbl(),
                getWnyrnsubqltycLbl(),
                getWnyrnsubqltydLbl(),
                getWnyrnsubqltyeLbl(),
                getWnyrnqltyDes(),
                getNyrnqlty(),
                getNyrnsubqltya(),
                getNyrnsubqltyb(),
                getNyrnsubqltyc(),
                getNyrnsubqltyd(),
                getNyrnsubqltye(),
                getNyrnclr(),
                getNyrncdes(),
                getClrref(),
                getRskuno(),
                getRpurclrseq(),
                getWpurclrdes(),
                getBaseYrnclr(),
                getBaseYrncdes(),
                getBaseClrref(),
                getBaseRskuno(),
                getBaseRpurclrseq(),
                getWbasePurclrdes(),
                getSurpluscat(),
                getWsurpluscatDes(),
                getMaxyrnffcod(),
                getYrnff(),
                getRemark(),
                getYrnqltycare(),
                getWyrnqltycareDesc(),
                getQtyphys(),
                getQtyavail(),
                getQtyavailalc(),
                getQtyalc(),
                getQtydel(),
                getQtyret(),
                getQtyreqn(),
                getWnetqtydel(),
                getWqtydelxs(),
                getWnyrnsubqltyaDes(),
                getWnyrnsubqltybDes(),
                getWnyrnsubqltycDes(),
                getWnyrnsubqltydDes(),
                getWnyrnsubqltyeDes(),
                getCntnum(),
                getWotherContainernum(),
                getWrhnum(),
                getStrdes(),
                getStktyp(),
                getWstkdesc(),
                getWstkdesc2(),
                getCarwgt(),
                getWstkdesc3(),
                getConcar(),
                getConwgt(),
                getCarpall(),
                getWstkdesc4(),
                getScontyp(),
                getSpacktyp(),
                getQtyrec(),
                getQtyrej(),
                getQtysold(),
                getSuppalwgt(),
                getEmpcon(),
                getDaterec(),
                getCarrec(),
                getWfibreView(),
                getWwh1(),
                getWwh1lvl(),
                getCanEditFibre(),
                getCanEditFinish());
    }
}