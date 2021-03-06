/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.service;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/

import java.io.OutputStream;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.wavemaker.runtime.data.export.ExportOptions;

import com.mu.cmt.pfs.pfsdb.models.query.*;

public interface PfsdbQueryExecutorService {

    Page<QryYm650WgtuomResponse> executeQryYM650_WGTUOM(Pageable pageable);

    void exportQryYM650_WGTUOM(ExportOptions exportOptions, Pageable pageable, OutputStream outputStream);

    Page<QryYm650MatdiameterUomResponse> executeQryYM650_MATDIAMETER_UOM(Pageable pageable);

    void exportQryYM650_MATDIAMETER_UOM(ExportOptions exportOptions, Pageable pageable, OutputStream outputStream);

    Page<QryYm650MatcpsResponse> executeQryYM650_MATCPS(Pageable pageable);

    void exportQryYM650_MATCPS(ExportOptions exportOptions, Pageable pageable, OutputStream outputStream);

    Page<QryYm650MatoriResponse> executeQryYM650_MATORI(Pageable pageable);

    void exportQryYM650_MATORI(ExportOptions exportOptions, Pageable pageable, OutputStream outputStream);

    Page<QryYm650ItemcodResponse> executeQryYM650_itemcod(Pageable pageable);

    void exportQryYM650_itemcod(ExportOptions exportOptions, Pageable pageable, OutputStream outputStream);

    Page<GetqrymindateResponse> executeGetqrymindate(Pageable pageable);

    void exportGetqrymindate(ExportOptions exportOptions, Pageable pageable, OutputStream outputStream);

    QrySy9200pk0progurlResponse executeQrySy9200pk0Progurl(String pwmprogid, String pparamList);

    Page<QryYm100NewstdwgtResponse> executeQryYM100_NEWSTDWGT(String yrncod, Pageable pageable);

    void exportQryYM100_NEWSTDWGT(String yrncod, ExportOptions exportOptions, Pageable pageable, OutputStream outputStream);

    Page<QryYm100NyrnclrResponse> executeQryYM100_NYRNCLR(Pageable pageable);

    void exportQryYM100_NYRNCLR(ExportOptions exportOptions, Pageable pageable, OutputStream outputStream);

    Page<QryYm650MaterialcodeResponse> executeQryYM650_MATERIALCODE(String pwmatusercode, Pageable pageable);

    void exportQryYM650_MATERIALCODE(String pwmatusercode, ExportOptions exportOptions, Pageable pageable, OutputStream outputStream);

    QryYm650IssueTrnnumResponse executeQryYM650_IssueTrnnum(String ptrnnum);

    Page<QryYm650IssueMaterialcodeResponse> executeQryYM650_IssueMATERIALCODE(String pwmatusercode, Pageable pageable);

    void exportQryYM650_IssueMATERIALCODE(String pwmatusercode, ExportOptions exportOptions, Pageable pageable, OutputStream outputStream);

    Page<QryYm650TstrcodResponse> executeQryYM650_TSTRCOD(Pageable pageable);

    void exportQryYM650_TSTRCOD(ExportOptions exportOptions, Pageable pageable, OutputStream outputStream);

    Page<QryYm100YrnqltycareResponse> executeQryYM100_YRNQLTYCARE(Pageable pageable);

    void exportQryYM100_YRNQLTYCARE(ExportOptions exportOptions, Pageable pageable, OutputStream outputStream);

    QryYm650ReceiptTrnnumResponse executeQryYM650_receiptTrnnum(String ptrnnum);

    Page<QrySy9200pk0formPathResponse> executeQrySy9200pk0FormPath(String pfmbpath, String potherParams, Pageable pageable);

    void exportQrySy9200pk0FormPath(String pfmbpath, String potherParams, ExportOptions exportOptions, Pageable pageable, OutputStream outputStream);

    Page<QryYm100NyrnqltyResponse> executeQryYM100_NYRNQLTY(Pageable pageable);

    void exportQryYM100_NYRNQLTY(ExportOptions exportOptions, Pageable pageable, OutputStream outputStream);

    Page<QryYm100SurpluscatResponse> executeQryYM100_SURPLUSCAT(Pageable pageable);

    void exportQryYM100_SURPLUSCAT(ExportOptions exportOptions, Pageable pageable, OutputStream outputStream);

    Page<QryYm650IssueTstrcodResponse> executeQryYM650_IssueTSTRCOD(String fstrcod, Pageable pageable);

    void exportQryYM650_IssueTSTRCOD(String fstrcod, ExportOptions exportOptions, Pageable pageable, OutputStream outputStream);

    Page<QryYym650MatclrResponse> executeQryYYM650_MATCLR(Pageable pageable);

    void exportQryYYM650_MATCLR(ExportOptions exportOptions, Pageable pageable, OutputStream outputStream);

}