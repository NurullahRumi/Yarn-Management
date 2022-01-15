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

public class UpdateProcym100testRequest implements Serializable {


    @JsonProperty("pprgid")
    @NotNull
    private String pprgid;

    @JsonProperty("pYrncod")
    @NotNull
    private String pyrncod;

    @JsonProperty("pWRHNUM")
    @NotNull
    private String pwrhnum;

    @JsonProperty("pNEWQTYPHYS")
    @NotNull
    private String pnewqtyphys;

    @JsonProperty("pNEWQTYAVAIL")
    @NotNull
    private String pnewqtyavail;

    @JsonProperty("pcomments")
    @NotNull
    private String pcomments;

    public String getPprgid() {
        return this.pprgid;
    }

    public void setPprgid(String pprgid) {
        this.pprgid = pprgid;
    }

    public String getPyrncod() {
        return this.pyrncod;
    }

    public void setPyrncod(String pyrncod) {
        this.pyrncod = pyrncod;
    }

    public String getPwrhnum() {
        return this.pwrhnum;
    }

    public void setPwrhnum(String pwrhnum) {
        this.pwrhnum = pwrhnum;
    }

    public String getPnewqtyphys() {
        return this.pnewqtyphys;
    }

    public void setPnewqtyphys(String pnewqtyphys) {
        this.pnewqtyphys = pnewqtyphys;
    }

    public String getPnewqtyavail() {
        return this.pnewqtyavail;
    }

    public void setPnewqtyavail(String pnewqtyavail) {
        this.pnewqtyavail = pnewqtyavail;
    }

    public String getPcomments() {
        return this.pcomments;
    }

    public void setPcomments(String pcomments) {
        this.pcomments = pcomments;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof UpdateProcym100testRequest)) return false;
        final UpdateProcym100testRequest updateProcym100testRequest = (UpdateProcym100testRequest) o;
        return Objects.equals(getPprgid(), updateProcym100testRequest.getPprgid()) &&
                Objects.equals(getPyrncod(), updateProcym100testRequest.getPyrncod()) &&
                Objects.equals(getPwrhnum(), updateProcym100testRequest.getPwrhnum()) &&
                Objects.equals(getPnewqtyphys(), updateProcym100testRequest.getPnewqtyphys()) &&
                Objects.equals(getPnewqtyavail(), updateProcym100testRequest.getPnewqtyavail()) &&
                Objects.equals(getPcomments(), updateProcym100testRequest.getPcomments());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPprgid(),
                getPyrncod(),
                getPwrhnum(),
                getPnewqtyphys(),
                getPnewqtyavail(),
                getPcomments());
    }
}