/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.query;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class QrySy9200pk0formPathResponse implements Serializable {


    @ColumnAlias("PROGURL")
    private String progurl;

    public String getProgurl() {
        return this.progurl;
    }

    public void setProgurl(String progurl) {
        this.progurl = progurl;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof QrySy9200pk0formPathResponse)) return false;
        final QrySy9200pk0formPathResponse qrySy9200pk0formPathResponse = (QrySy9200pk0formPathResponse) o;
        return Objects.equals(getProgurl(), qrySy9200pk0formPathResponse.getProgurl());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getProgurl());
    }
}