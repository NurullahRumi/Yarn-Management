/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.math.BigDecimal;
import java.sql.Date;
import java.util.Objects;

import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateProcYm311pk0ReqistYm311cxlRequestTransferRequest implements Serializable {


    @JsonProperty("pPrgid")
    private String pprgid;

    @JsonProperty("pReqNum")
    private String preqNum;

    @JsonProperty("pYrnMixCode")
    private String pyrnMixCode;

    public String getPprgid() {
        return this.pprgid;
    }

    public void setPprgid(String pprgid) {
        this.pprgid = pprgid;
    }

    public String getPreqNum() {
        return this.preqNum;
    }

    public void setPreqNum(String preqNum) {
        this.preqNum = preqNum;
    }

    public String getPyrnMixCode() {
        return this.pyrnMixCode;
    }

    public void setPyrnMixCode(String pyrnMixCode) {
        this.pyrnMixCode = pyrnMixCode;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof CreateProcYm311pk0ReqistYm311cxlRequestTransferRequest)) return false;
        final CreateProcYm311pk0ReqistYm311cxlRequestTransferRequest createProcYm311pk0reqistYm311cxlRequestTransferRequest = (CreateProcYm311pk0ReqistYm311cxlRequestTransferRequest) o;
        return Objects.equals(getPprgid(), createProcYm311pk0reqistYm311cxlRequestTransferRequest.getPprgid()) &&
                Objects.equals(getPreqNum(), createProcYm311pk0reqistYm311cxlRequestTransferRequest.getPreqNum()) &&
                Objects.equals(getPyrnMixCode(), createProcYm311pk0reqistYm311cxlRequestTransferRequest.getPyrnMixCode());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPprgid(),
                getPreqNum(),
                getPyrnMixCode());
    }
}