/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcYm4000pk0Ym400rgFlrYrnOriResponsePoutRgFlrYrnOri implements Serializable {


    @ColumnAlias("YRNORI")
    private String yrnori;

    @ColumnAlias("YRNSUP")
    private String yrnsup;

    public String getYrnori() {
        return this.yrnori;
    }

    public void setYrnori(String yrnori) {
        this.yrnori = yrnori;
    }

    public String getYrnsup() {
        return this.yrnsup;
    }

    public void setYrnsup(String yrnsup) {
        this.yrnsup = yrnsup;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcYm4000pk0Ym400rgFlrYrnOriResponsePoutRgFlrYrnOri)) return false;
        final ProcYm4000pk0Ym400rgFlrYrnOriResponsePoutRgFlrYrnOri procYm4000pk0ym400rgFlrYrnOriResponsePoutRgFlrYrnOri = (ProcYm4000pk0Ym400rgFlrYrnOriResponsePoutRgFlrYrnOri) o;
        return Objects.equals(getYrnori(), procYm4000pk0ym400rgFlrYrnOriResponsePoutRgFlrYrnOri.getYrnori()) &&
                Objects.equals(getYrnsup(), procYm4000pk0ym400rgFlrYrnOriResponsePoutRgFlrYrnOri.getYrnsup());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getYrnori(),
                getYrnsup());
    }
}