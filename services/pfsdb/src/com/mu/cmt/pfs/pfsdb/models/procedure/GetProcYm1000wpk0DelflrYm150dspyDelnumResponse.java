/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class GetProcYm1000wpk0DelflrYm150dspyDelnumResponse implements Serializable {


    @ColumnAlias("pOutdelnum")
    private List<GetProcYm1000wpk0DelflrYm150dspyDelnumResponsePoutdelnum> poutdelnum;

    public List<GetProcYm1000wpk0DelflrYm150dspyDelnumResponsePoutdelnum> getPoutdelnum() {
        return this.poutdelnum;
    }

    public void setPoutdelnum(List<GetProcYm1000wpk0DelflrYm150dspyDelnumResponsePoutdelnum> poutdelnum) {
        this.poutdelnum = poutdelnum;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof GetProcYm1000wpk0DelflrYm150dspyDelnumResponse)) return false;
        final GetProcYm1000wpk0DelflrYm150dspyDelnumResponse getProcYm1000wpk0delflrYm150dspyDelnumResponse = (GetProcYm1000wpk0DelflrYm150dspyDelnumResponse) o;
        return Objects.equals(getPoutdelnum(), getProcYm1000wpk0delflrYm150dspyDelnumResponse.getPoutdelnum());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutdelnum());
    }
}