/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.service;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/

import java.io.OutputStream;
import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.wavemaker.runtime.data.dao.query.WMQueryExecutor;
import com.wavemaker.runtime.data.export.ExportOptions;
import com.wavemaker.runtime.data.model.QueryProcedureInput;

import com.mu.cmt.pfs.pfsdb.models.query.*;

@Service
public class PfsdbQueryExecutorServiceImpl implements PfsdbQueryExecutorService {

    private static final Logger LOGGER = LoggerFactory.getLogger(PfsdbQueryExecutorServiceImpl.class);

    @Autowired
    @Qualifier("pfsdbWMQueryExecutor")
    private WMQueryExecutor queryExecutor;

    @Transactional(value = "pfsdbTransactionManager", readOnly = true)
    @Override
    public Page<QryYm650WgtuomResponse> executeQryYM650_WGTUOM(Pageable pageable) {
        Map<String, Object> params = new HashMap<>(0);


        return queryExecutor.executeNamedQuery("qryYM650_WGTUOM", params, QryYm650WgtuomResponse.class, pageable);
    }

    @Transactional(value = "pfsdbTransactionManager", timeout = 300, readOnly = true)
    @Override
    public void exportQryYM650_WGTUOM(ExportOptions exportOptions, Pageable pageable, OutputStream outputStream) {
        Map<String, Object> params = new HashMap<>(0);


        QueryProcedureInput queryInput = new QueryProcedureInput("qryYM650_WGTUOM", params, QryYm650WgtuomResponse.class);

        queryExecutor.exportNamedQueryData(queryInput, exportOptions, pageable, outputStream);
    }

    @Transactional(value = "pfsdbTransactionManager", readOnly = true)
    @Override
    public Page<QryYm650MatdiameterUomResponse> executeQryYM650_MATDIAMETER_UOM(Pageable pageable) {
        Map<String, Object> params = new HashMap<>(0);


        return queryExecutor.executeNamedQuery("qryYM650_MATDIAMETER_UOM", params, QryYm650MatdiameterUomResponse.class, pageable);
    }

    @Transactional(value = "pfsdbTransactionManager", timeout = 300, readOnly = true)
    @Override
    public void exportQryYM650_MATDIAMETER_UOM(ExportOptions exportOptions, Pageable pageable, OutputStream outputStream) {
        Map<String, Object> params = new HashMap<>(0);


        QueryProcedureInput queryInput = new QueryProcedureInput("qryYM650_MATDIAMETER_UOM", params, QryYm650MatdiameterUomResponse.class);

        queryExecutor.exportNamedQueryData(queryInput, exportOptions, pageable, outputStream);
    }

    @Transactional(value = "pfsdbTransactionManager", readOnly = true)
    @Override
    public Page<QryYm650MatcpsResponse> executeQryYM650_MATCPS(Pageable pageable) {
        Map<String, Object> params = new HashMap<>(0);


        return queryExecutor.executeNamedQuery("qryYM650_MATCPS", params, QryYm650MatcpsResponse.class, pageable);
    }

    @Transactional(value = "pfsdbTransactionManager", timeout = 300, readOnly = true)
    @Override
    public void exportQryYM650_MATCPS(ExportOptions exportOptions, Pageable pageable, OutputStream outputStream) {
        Map<String, Object> params = new HashMap<>(0);


        QueryProcedureInput queryInput = new QueryProcedureInput("qryYM650_MATCPS", params, QryYm650MatcpsResponse.class);

        queryExecutor.exportNamedQueryData(queryInput, exportOptions, pageable, outputStream);
    }

    @Transactional(value = "pfsdbTransactionManager", readOnly = true)
    @Override
    public Page<QryYm650MatoriResponse> executeQryYM650_MATORI(Pageable pageable) {
        Map<String, Object> params = new HashMap<>(0);


        return queryExecutor.executeNamedQuery("qryYM650_MATORI", params, QryYm650MatoriResponse.class, pageable);
    }

    @Transactional(value = "pfsdbTransactionManager", timeout = 300, readOnly = true)
    @Override
    public void exportQryYM650_MATORI(ExportOptions exportOptions, Pageable pageable, OutputStream outputStream) {
        Map<String, Object> params = new HashMap<>(0);


        QueryProcedureInput queryInput = new QueryProcedureInput("qryYM650_MATORI", params, QryYm650MatoriResponse.class);

        queryExecutor.exportNamedQueryData(queryInput, exportOptions, pageable, outputStream);
    }

    @Transactional(value = "pfsdbTransactionManager", readOnly = true)
    @Override
    public Page<QryYm650ItemcodResponse> executeQryYM650_itemcod(Pageable pageable) {
        Map<String, Object> params = new HashMap<>(0);


        return queryExecutor.executeNamedQuery("qryYM650_itemcod", params, QryYm650ItemcodResponse.class, pageable);
    }

    @Transactional(value = "pfsdbTransactionManager", timeout = 300, readOnly = true)
    @Override
    public void exportQryYM650_itemcod(ExportOptions exportOptions, Pageable pageable, OutputStream outputStream) {
        Map<String, Object> params = new HashMap<>(0);


        QueryProcedureInput queryInput = new QueryProcedureInput("qryYM650_itemcod", params, QryYm650ItemcodResponse.class);

        queryExecutor.exportNamedQueryData(queryInput, exportOptions, pageable, outputStream);
    }

    @Transactional(value = "pfsdbTransactionManager", readOnly = true)
    @Override
    public Page<GetqrymindateResponse> executeGetqrymindate(Pageable pageable) {
        Map<String, Object> params = new HashMap<>(0);


        return queryExecutor.executeNamedQuery("getqrymindate", params, GetqrymindateResponse.class, pageable);
    }

    @Transactional(value = "pfsdbTransactionManager", timeout = 300, readOnly = true)
    @Override
    public void exportGetqrymindate(ExportOptions exportOptions, Pageable pageable, OutputStream outputStream) {
        Map<String, Object> params = new HashMap<>(0);


        QueryProcedureInput queryInput = new QueryProcedureInput("getqrymindate", params, GetqrymindateResponse.class);

        queryExecutor.exportNamedQueryData(queryInput, exportOptions, pageable, outputStream);
    }

    @Transactional(value = "pfsdbTransactionManager", readOnly = true)
    @Override
    public QrySy9200pk0progurlResponse executeQrySy9200pk0Progurl(String pwmprogid, String pparamList) {
        Map<String, Object> params = new HashMap<>(2);

        params.put("pWmprogid", pwmprogid);
        params.put("pParamList", pparamList);

        return queryExecutor.executeNamedQuery("qrySy9200pk0Progurl", params, QrySy9200pk0progurlResponse.class);
    }

    @Transactional(value = "pfsdbTransactionManager", readOnly = true)
    @Override
    public Page<QryYm100NewstdwgtResponse> executeQryYM100_NEWSTDWGT(String yrncod, Pageable pageable) {
        Map<String, Object> params = new HashMap<>(1);

        params.put("yrncod", yrncod);

        return queryExecutor.executeNamedQuery("qryYM100_NEWSTDWGT", params, QryYm100NewstdwgtResponse.class, pageable);
    }

    @Transactional(value = "pfsdbTransactionManager", timeout = 300, readOnly = true)
    @Override
    public void exportQryYM100_NEWSTDWGT(String yrncod, ExportOptions exportOptions, Pageable pageable, OutputStream outputStream) {
        Map<String, Object> params = new HashMap<>(1);

        params.put("yrncod", yrncod);

        QueryProcedureInput queryInput = new QueryProcedureInput("qryYM100_NEWSTDWGT", params, QryYm100NewstdwgtResponse.class);

        queryExecutor.exportNamedQueryData(queryInput, exportOptions, pageable, outputStream);
    }

    @Transactional(value = "pfsdbTransactionManager", readOnly = true)
    @Override
    public Page<QryYm100NyrnclrResponse> executeQryYM100_NYRNCLR(Pageable pageable) {
        Map<String, Object> params = new HashMap<>(0);


        return queryExecutor.executeNamedQuery("qryYM100_NYRNCLR", params, QryYm100NyrnclrResponse.class, pageable);
    }

    @Transactional(value = "pfsdbTransactionManager", timeout = 300, readOnly = true)
    @Override
    public void exportQryYM100_NYRNCLR(ExportOptions exportOptions, Pageable pageable, OutputStream outputStream) {
        Map<String, Object> params = new HashMap<>(0);


        QueryProcedureInput queryInput = new QueryProcedureInput("qryYM100_NYRNCLR", params, QryYm100NyrnclrResponse.class);

        queryExecutor.exportNamedQueryData(queryInput, exportOptions, pageable, outputStream);
    }

    @Transactional(value = "pfsdbTransactionManager", readOnly = true)
    @Override
    public Page<QryYm650MaterialcodeResponse> executeQryYM650_MATERIALCODE(String pwmatusercode, Pageable pageable) {
        Map<String, Object> params = new HashMap<>(1);

        params.put("pWMATUSERCODE", pwmatusercode);

        return queryExecutor.executeNamedQuery("qryYM650_MATERIALCODE", params, QryYm650MaterialcodeResponse.class, pageable);
    }

    @Transactional(value = "pfsdbTransactionManager", timeout = 300, readOnly = true)
    @Override
    public void exportQryYM650_MATERIALCODE(String pwmatusercode, ExportOptions exportOptions, Pageable pageable, OutputStream outputStream) {
        Map<String, Object> params = new HashMap<>(1);

        params.put("pWMATUSERCODE", pwmatusercode);

        QueryProcedureInput queryInput = new QueryProcedureInput("qryYM650_MATERIALCODE", params, QryYm650MaterialcodeResponse.class);

        queryExecutor.exportNamedQueryData(queryInput, exportOptions, pageable, outputStream);
    }

    @Transactional(value = "pfsdbTransactionManager", readOnly = true)
    @Override
    public QryYm650IssueTrnnumResponse executeQryYM650_IssueTrnnum(String ptrnnum) {
        Map<String, Object> params = new HashMap<>(1);

        params.put("ptrnnum", ptrnnum);

        return queryExecutor.executeNamedQuery("qryYM650_IssueTrnnum", params, QryYm650IssueTrnnumResponse.class);
    }

    @Transactional(value = "pfsdbTransactionManager", readOnly = true)
    @Override
    public Page<QryYm650IssueMaterialcodeResponse> executeQryYM650_IssueMATERIALCODE(String pwmatusercode, Pageable pageable) {
        Map<String, Object> params = new HashMap<>(1);

        params.put("pWMATUSERCODE", pwmatusercode);

        return queryExecutor.executeNamedQuery("qryYM650_IssueMATERIALCODE", params, QryYm650IssueMaterialcodeResponse.class, pageable);
    }

    @Transactional(value = "pfsdbTransactionManager", timeout = 300, readOnly = true)
    @Override
    public void exportQryYM650_IssueMATERIALCODE(String pwmatusercode, ExportOptions exportOptions, Pageable pageable, OutputStream outputStream) {
        Map<String, Object> params = new HashMap<>(1);

        params.put("pWMATUSERCODE", pwmatusercode);

        QueryProcedureInput queryInput = new QueryProcedureInput("qryYM650_IssueMATERIALCODE", params, QryYm650IssueMaterialcodeResponse.class);

        queryExecutor.exportNamedQueryData(queryInput, exportOptions, pageable, outputStream);
    }

    @Transactional(value = "pfsdbTransactionManager", readOnly = true)
    @Override
    public Page<QryYm650TstrcodResponse> executeQryYM650_TSTRCOD(Pageable pageable) {
        Map<String, Object> params = new HashMap<>(0);


        return queryExecutor.executeNamedQuery("qryYM650_TSTRCOD", params, QryYm650TstrcodResponse.class, pageable);
    }

    @Transactional(value = "pfsdbTransactionManager", timeout = 300, readOnly = true)
    @Override
    public void exportQryYM650_TSTRCOD(ExportOptions exportOptions, Pageable pageable, OutputStream outputStream) {
        Map<String, Object> params = new HashMap<>(0);


        QueryProcedureInput queryInput = new QueryProcedureInput("qryYM650_TSTRCOD", params, QryYm650TstrcodResponse.class);

        queryExecutor.exportNamedQueryData(queryInput, exportOptions, pageable, outputStream);
    }

    @Transactional(value = "pfsdbTransactionManager", readOnly = true)
    @Override
    public Page<QryYm100YrnqltycareResponse> executeQryYM100_YRNQLTYCARE(Pageable pageable) {
        Map<String, Object> params = new HashMap<>(0);


        return queryExecutor.executeNamedQuery("qryYM100_YRNQLTYCARE", params, QryYm100YrnqltycareResponse.class, pageable);
    }

    @Transactional(value = "pfsdbTransactionManager", timeout = 300, readOnly = true)
    @Override
    public void exportQryYM100_YRNQLTYCARE(ExportOptions exportOptions, Pageable pageable, OutputStream outputStream) {
        Map<String, Object> params = new HashMap<>(0);


        QueryProcedureInput queryInput = new QueryProcedureInput("qryYM100_YRNQLTYCARE", params, QryYm100YrnqltycareResponse.class);

        queryExecutor.exportNamedQueryData(queryInput, exportOptions, pageable, outputStream);
    }

    @Transactional(value = "pfsdbTransactionManager", readOnly = true)
    @Override
    public QryYm650ReceiptTrnnumResponse executeQryYM650_receiptTrnnum(String ptrnnum) {
        Map<String, Object> params = new HashMap<>(1);

        params.put("ptrnnum", ptrnnum);

        return queryExecutor.executeNamedQuery("qryYM650_receiptTrnnum", params, QryYm650ReceiptTrnnumResponse.class);
    }

    @Transactional(value = "pfsdbTransactionManager", readOnly = true)
    @Override
    public Page<QrySy9200pk0formPathResponse> executeQrySy9200pk0FormPath(String pfmbpath, String potherParams, Pageable pageable) {
        Map<String, Object> params = new HashMap<>(2);

        params.put("pFmbpath", pfmbpath);
        params.put("pOtherParams", potherParams);

        return queryExecutor.executeNamedQuery("qrySy9200pk0FormPath", params, QrySy9200pk0formPathResponse.class, pageable);
    }

    @Transactional(value = "pfsdbTransactionManager", timeout = 300, readOnly = true)
    @Override
    public void exportQrySy9200pk0FormPath(String pfmbpath, String potherParams, ExportOptions exportOptions, Pageable pageable, OutputStream outputStream) {
        Map<String, Object> params = new HashMap<>(2);

        params.put("pFmbpath", pfmbpath);
        params.put("pOtherParams", potherParams);

        QueryProcedureInput queryInput = new QueryProcedureInput("qrySy9200pk0FormPath", params, QrySy9200pk0formPathResponse.class);

        queryExecutor.exportNamedQueryData(queryInput, exportOptions, pageable, outputStream);
    }

    @Transactional(value = "pfsdbTransactionManager", readOnly = true)
    @Override
    public Page<QryYm100NyrnqltyResponse> executeQryYM100_NYRNQLTY(Pageable pageable) {
        Map<String, Object> params = new HashMap<>(0);


        return queryExecutor.executeNamedQuery("qryYM100_NYRNQLTY", params, QryYm100NyrnqltyResponse.class, pageable);
    }

    @Transactional(value = "pfsdbTransactionManager", timeout = 300, readOnly = true)
    @Override
    public void exportQryYM100_NYRNQLTY(ExportOptions exportOptions, Pageable pageable, OutputStream outputStream) {
        Map<String, Object> params = new HashMap<>(0);


        QueryProcedureInput queryInput = new QueryProcedureInput("qryYM100_NYRNQLTY", params, QryYm100NyrnqltyResponse.class);

        queryExecutor.exportNamedQueryData(queryInput, exportOptions, pageable, outputStream);
    }

    @Transactional(value = "pfsdbTransactionManager", readOnly = true)
    @Override
    public Page<QryYm100SurpluscatResponse> executeQryYM100_SURPLUSCAT(Pageable pageable) {
        Map<String, Object> params = new HashMap<>(0);


        return queryExecutor.executeNamedQuery("qryYM100_SURPLUSCAT", params, QryYm100SurpluscatResponse.class, pageable);
    }

    @Transactional(value = "pfsdbTransactionManager", timeout = 300, readOnly = true)
    @Override
    public void exportQryYM100_SURPLUSCAT(ExportOptions exportOptions, Pageable pageable, OutputStream outputStream) {
        Map<String, Object> params = new HashMap<>(0);


        QueryProcedureInput queryInput = new QueryProcedureInput("qryYM100_SURPLUSCAT", params, QryYm100SurpluscatResponse.class);

        queryExecutor.exportNamedQueryData(queryInput, exportOptions, pageable, outputStream);
    }

    @Transactional(value = "pfsdbTransactionManager", readOnly = true)
    @Override
    public Page<QryYm650IssueTstrcodResponse> executeQryYM650_IssueTSTRCOD(String fstrcod, Pageable pageable) {
        Map<String, Object> params = new HashMap<>(1);

        params.put("fstrcod", fstrcod);

        return queryExecutor.executeNamedQuery("qryYM650_IssueTSTRCOD", params, QryYm650IssueTstrcodResponse.class, pageable);
    }

    @Transactional(value = "pfsdbTransactionManager", timeout = 300, readOnly = true)
    @Override
    public void exportQryYM650_IssueTSTRCOD(String fstrcod, ExportOptions exportOptions, Pageable pageable, OutputStream outputStream) {
        Map<String, Object> params = new HashMap<>(1);

        params.put("fstrcod", fstrcod);

        QueryProcedureInput queryInput = new QueryProcedureInput("qryYM650_IssueTSTRCOD", params, QryYm650IssueTstrcodResponse.class);

        queryExecutor.exportNamedQueryData(queryInput, exportOptions, pageable, outputStream);
    }

    @Transactional(value = "pfsdbTransactionManager", readOnly = true)
    @Override
    public Page<QryYym650MatclrResponse> executeQryYYM650_MATCLR(Pageable pageable) {
        Map<String, Object> params = new HashMap<>(0);


        return queryExecutor.executeNamedQuery("qryYYM650_MATCLR", params, QryYym650MatclrResponse.class, pageable);
    }

    @Transactional(value = "pfsdbTransactionManager", timeout = 300, readOnly = true)
    @Override
    public void exportQryYYM650_MATCLR(ExportOptions exportOptions, Pageable pageable, OutputStream outputStream) {
        Map<String, Object> params = new HashMap<>(0);


        QueryProcedureInput queryInput = new QueryProcedureInput("qryYYM650_MATCLR", params, QryYym650MatclrResponse.class);

        queryExecutor.exportNamedQueryData(queryInput, exportOptions, pageable, outputStream);
    }

}