/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class PorcYm1311pk0Ym100nyrnsubqltyeResponsePoutNyrnsubqltye implements Serializable {


    @ColumnAlias("SUBQLTYCOD")
    private String subqltycod;

    @ColumnAlias("SUBQLTYDES")
    private String subqltydes;

    public String getSubqltycod() {
        return this.subqltycod;
    }

    public void setSubqltycod(String subqltycod) {
        this.subqltycod = subqltycod;
    }

    public String getSubqltydes() {
        return this.subqltydes;
    }

    public void setSubqltydes(String subqltydes) {
        this.subqltydes = subqltydes;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof PorcYm1311pk0Ym100nyrnsubqltyeResponsePoutNyrnsubqltye)) return false;
        final PorcYm1311pk0Ym100nyrnsubqltyeResponsePoutNyrnsubqltye porcYm1311pk0ym100nyrnsubqltyeResponsePoutNyrnsubqltye = (PorcYm1311pk0Ym100nyrnsubqltyeResponsePoutNyrnsubqltye) o;
        return Objects.equals(getSubqltycod(), porcYm1311pk0ym100nyrnsubqltyeResponsePoutNyrnsubqltye.getSubqltycod()) &&
                Objects.equals(getSubqltydes(), porcYm1311pk0ym100nyrnsubqltyeResponsePoutNyrnsubqltye.getSubqltydes());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getSubqltycod(),
                getSubqltydes());
    }
}