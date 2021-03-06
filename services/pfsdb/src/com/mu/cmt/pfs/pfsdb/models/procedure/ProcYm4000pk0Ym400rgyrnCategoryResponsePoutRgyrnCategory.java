/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcYm4000pk0Ym400rgyrnCategoryResponsePoutRgyrnCategory implements Serializable {


    @ColumnAlias("ITEMCOD")
    private String itemcod;

    @ColumnAlias("MAINDES")
    private String maindes;

    public String getItemcod() {
        return this.itemcod;
    }

    public void setItemcod(String itemcod) {
        this.itemcod = itemcod;
    }

    public String getMaindes() {
        return this.maindes;
    }

    public void setMaindes(String maindes) {
        this.maindes = maindes;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcYm4000pk0Ym400rgyrnCategoryResponsePoutRgyrnCategory)) return false;
        final ProcYm4000pk0Ym400rgyrnCategoryResponsePoutRgyrnCategory procYm4000pk0ym400rgyrnCategoryResponsePoutRgyrnCategory = (ProcYm4000pk0Ym400rgyrnCategoryResponsePoutRgyrnCategory) o;
        return Objects.equals(getItemcod(), procYm4000pk0ym400rgyrnCategoryResponsePoutRgyrnCategory.getItemcod()) &&
                Objects.equals(getMaindes(), procYm4000pk0ym400rgyrnCategoryResponsePoutRgyrnCategory.getMaindes());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getItemcod(),
                getMaindes());
    }
}