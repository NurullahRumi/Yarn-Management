/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.query;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class GetqrymindateResponse implements Serializable {


    @ColumnAlias("MINDATE")
    private LocalDateTime mindate;

    public LocalDateTime getMindate() {
        return this.mindate;
    }

    public void setMindate(LocalDateTime mindate) {
        this.mindate = mindate;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof GetqrymindateResponse)) return false;
        final GetqrymindateResponse getqrymindateResponse = (GetqrymindateResponse) o;
        return Objects.equals(getMindate(), getqrymindateResponse.getMindate());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getMindate());
    }
}