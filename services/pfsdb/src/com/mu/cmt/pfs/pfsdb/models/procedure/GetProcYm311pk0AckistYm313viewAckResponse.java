/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class GetProcYm311pk0AckistYm313viewAckResponse implements Serializable {


    @ColumnAlias("pOutViewAck")
    private List<GetProcYm311pk0AckistYm313viewAckResponsePoutViewAck> poutViewAck;

    public List<GetProcYm311pk0AckistYm313viewAckResponsePoutViewAck> getPoutViewAck() {
        return this.poutViewAck;
    }

    public void setPoutViewAck(List<GetProcYm311pk0AckistYm313viewAckResponsePoutViewAck> poutViewAck) {
        this.poutViewAck = poutViewAck;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof GetProcYm311pk0AckistYm313viewAckResponse)) return false;
        final GetProcYm311pk0AckistYm313viewAckResponse getProcYm311pk0ackistYm313viewAckResponse = (GetProcYm311pk0AckistYm313viewAckResponse) o;
        return Objects.equals(getPoutViewAck(), getProcYm311pk0ackistYm313viewAckResponse.getPoutViewAck());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutViewAck());
    }
}