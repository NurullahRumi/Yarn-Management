/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.query;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class QryYm100NewstdwgtResponse implements Serializable {


    @ColumnAlias("QTYPHYS")
    private Double qtyphys;

    public Double getQtyphys() {
        return this.qtyphys;
    }

    public void setQtyphys(Double qtyphys) {
        this.qtyphys = qtyphys;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof QryYm100NewstdwgtResponse)) return false;
        final QryYm100NewstdwgtResponse qryYm100newstdwgtResponse = (QryYm100NewstdwgtResponse) o;
        return Objects.equals(getQtyphys(), qryYm100newstdwgtResponse.getQtyphys());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getQtyphys());
    }
}