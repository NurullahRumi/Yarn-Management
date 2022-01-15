/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class GetProcYm1000wpk0YnreqnYm142detmixResponse implements Serializable {


    @ColumnAlias("pOutDetmix")
    private List<GetProcYm1000wpk0YnreqnYm142detmixResponsePoutDetmix> poutDetmix;

    public List<GetProcYm1000wpk0YnreqnYm142detmixResponsePoutDetmix> getPoutDetmix() {
        return this.poutDetmix;
    }

    public void setPoutDetmix(List<GetProcYm1000wpk0YnreqnYm142detmixResponsePoutDetmix> poutDetmix) {
        this.poutDetmix = poutDetmix;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof GetProcYm1000wpk0YnreqnYm142detmixResponse)) return false;
        final GetProcYm1000wpk0YnreqnYm142detmixResponse getProcYm1000wpk0ynreqnYm142detmixResponse = (GetProcYm1000wpk0YnreqnYm142detmixResponse) o;
        return Objects.equals(getPoutDetmix(), getProcYm1000wpk0ynreqnYm142detmixResponse.getPoutDetmix());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutDetmix());
    }
}