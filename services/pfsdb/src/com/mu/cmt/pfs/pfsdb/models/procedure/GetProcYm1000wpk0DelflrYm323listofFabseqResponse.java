/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class GetProcYm1000wpk0DelflrYm323listofFabseqResponse implements Serializable {


    @ColumnAlias("pFabtyp")
    private String pfabtyp;

    @ColumnAlias("pFabind")
    private String pfabind;

    @ColumnAlias("pFabdesc")
    private String pfabdesc;

    @ColumnAlias("pClinam")
    private String pclinam;

    public String getPfabtyp() {
        return this.pfabtyp;
    }

    public void setPfabtyp(String pfabtyp) {
        this.pfabtyp = pfabtyp;
    }

    public String getPfabind() {
        return this.pfabind;
    }

    public void setPfabind(String pfabind) {
        this.pfabind = pfabind;
    }

    public String getPfabdesc() {
        return this.pfabdesc;
    }

    public void setPfabdesc(String pfabdesc) {
        this.pfabdesc = pfabdesc;
    }

    public String getPclinam() {
        return this.pclinam;
    }

    public void setPclinam(String pclinam) {
        this.pclinam = pclinam;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof GetProcYm1000wpk0DelflrYm323listofFabseqResponse)) return false;
        final GetProcYm1000wpk0DelflrYm323listofFabseqResponse getProcYm1000wpk0delflrYm323listofFabseqResponse = (GetProcYm1000wpk0DelflrYm323listofFabseqResponse) o;
        return Objects.equals(getPfabtyp(), getProcYm1000wpk0delflrYm323listofFabseqResponse.getPfabtyp()) &&
                Objects.equals(getPfabind(), getProcYm1000wpk0delflrYm323listofFabseqResponse.getPfabind()) &&
                Objects.equals(getPfabdesc(), getProcYm1000wpk0delflrYm323listofFabseqResponse.getPfabdesc()) &&
                Objects.equals(getPclinam(), getProcYm1000wpk0delflrYm323listofFabseqResponse.getPclinam());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPfabtyp(),
                getPfabind(),
                getPfabdesc(),
                getPclinam());
    }
}