/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class GetProcYm1311pk0Ym100yrnQltyDesResponsePoutYrnQltyDes implements Serializable {


    @ColumnAlias("NYRNQLTYDES")
    private String nyrnqltydes;

    @ColumnAlias("LABELSUBQLTYA")
    private String labelsubqltya;

    @ColumnAlias("LABELSUBQLTYB")
    private String labelsubqltyb;

    @ColumnAlias("LABELSUBQLTYC")
    private String labelsubqltyc;

    @ColumnAlias("LABELSUBQLTYD")
    private String labelsubqltyd;

    @ColumnAlias("LABELSUBQLTYE")
    private String labelsubqltye;

    public String getNyrnqltydes() {
        return this.nyrnqltydes;
    }

    public void setNyrnqltydes(String nyrnqltydes) {
        this.nyrnqltydes = nyrnqltydes;
    }

    public String getLabelsubqltya() {
        return this.labelsubqltya;
    }

    public void setLabelsubqltya(String labelsubqltya) {
        this.labelsubqltya = labelsubqltya;
    }

    public String getLabelsubqltyb() {
        return this.labelsubqltyb;
    }

    public void setLabelsubqltyb(String labelsubqltyb) {
        this.labelsubqltyb = labelsubqltyb;
    }

    public String getLabelsubqltyc() {
        return this.labelsubqltyc;
    }

    public void setLabelsubqltyc(String labelsubqltyc) {
        this.labelsubqltyc = labelsubqltyc;
    }

    public String getLabelsubqltyd() {
        return this.labelsubqltyd;
    }

    public void setLabelsubqltyd(String labelsubqltyd) {
        this.labelsubqltyd = labelsubqltyd;
    }

    public String getLabelsubqltye() {
        return this.labelsubqltye;
    }

    public void setLabelsubqltye(String labelsubqltye) {
        this.labelsubqltye = labelsubqltye;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof GetProcYm1311pk0Ym100yrnQltyDesResponsePoutYrnQltyDes)) return false;
        final GetProcYm1311pk0Ym100yrnQltyDesResponsePoutYrnQltyDes getProcYm1311pk0ym100yrnQltyDesResponsePoutYrnQltyDes = (GetProcYm1311pk0Ym100yrnQltyDesResponsePoutYrnQltyDes) o;
        return Objects.equals(getNyrnqltydes(), getProcYm1311pk0ym100yrnQltyDesResponsePoutYrnQltyDes.getNyrnqltydes()) &&
                Objects.equals(getLabelsubqltya(), getProcYm1311pk0ym100yrnQltyDesResponsePoutYrnQltyDes.getLabelsubqltya()) &&
                Objects.equals(getLabelsubqltyb(), getProcYm1311pk0ym100yrnQltyDesResponsePoutYrnQltyDes.getLabelsubqltyb()) &&
                Objects.equals(getLabelsubqltyc(), getProcYm1311pk0ym100yrnQltyDesResponsePoutYrnQltyDes.getLabelsubqltyc()) &&
                Objects.equals(getLabelsubqltyd(), getProcYm1311pk0ym100yrnQltyDesResponsePoutYrnQltyDes.getLabelsubqltyd()) &&
                Objects.equals(getLabelsubqltye(), getProcYm1311pk0ym100yrnQltyDesResponsePoutYrnQltyDes.getLabelsubqltye());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getNyrnqltydes(),
                getLabelsubqltya(),
                getLabelsubqltyb(),
                getLabelsubqltyc(),
                getLabelsubqltyd(),
                getLabelsubqltye());
    }
}