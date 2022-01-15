Application.$controller("AddYrnDeltoKNBufPageController", ["$scope", function($scope) {
    "use strict";

    /* perform any action on widgets/variables within this block */
    $scope.onPageReady = function() {
        /*
         * variables can be accessed through '$scope.Variables' property here
         * e.g. to get dataSet in a staticVariable named 'loggedInUser' use following script
         * $scope.Variables.loggedInUser.getData()
         *
         * widgets can be accessed through '$scope.Widgets' property here
         * e.g. to get value of text widget named 'username' use following script
         * '$scope.Widgets.username.datavalue'
         */
        $scope.Widgets.tableDspyDelnum.show = false;
    };


    $scope.svCreateProcYM1000WPK0_DELFLR_YM150YrnDelbufonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
        }
    };

    $scope.svCreateProcYM1000WPK0_DELFLR_YM150YrnDelbufonSuccess = function(variable, data) {
        $scope.Variables.notifMsg.setAlertType("information");
        $scope.Variables.notifMsg.setMessage("Return No" + "  " + $scope.Variables.svCreateProcYM1000WPK0_DELFLR_YM150YrnDelbuf.dataSet.poutDelnum + "  " + "is created");
        $scope.Variables.notifMsg.notify();

        $scope.Widgets.formYrnDelBuf.formWidgets.pREQNUM.datavalue = null;
        $scope.Widgets.formYrnDelBuf.formWidgets.pREQNSEQ.datavalue = null;
        $scope.Widgets.formYrnDelBuf.formWidgets.pPALLETID.datavalue = null;
        $scope.Widgets.formYrnDelBuf.formWidgets.pYRNMIXCODE.datavalue = null;
        $scope.Widgets.formYrnDelBuf.formWidgets.pOrdnum.datavalue = null;
        $scope.Widgets.formYrnDelBuf.formWidgets.pNUMCON.datavalue = null;
        $scope.Widgets.formYrnDelBuf.formWidgets.pPALWGT.datavalue = null;
        $scope.Widgets.formYrnDelBuf.formWidgets.pKmchflrid.datavalue = null;
        $scope.Widgets.formYrnDelBuf.formWidgets.pKgsReq.datavalue = null;
        $scope.Widgets.formYrnDelBuf.formWidgets.pAlcseq.datavalue = null;
        $scope.Widgets.formYrnDelBuf.formWidgets.pYrnid.datavalue = null;
        $scope.Widgets.formYrnDelBuf.formWidgets.pKmchcod.datavalue = null;
        $scope.Widgets.formYrnDelBuf.formWidgets.pKgsleft.datavalue = null;
        $scope.Widgets.formYrnDelBuf.formWidgets.pFabseq.datavalue = null;

        $scope.Variables.svGetProcYM1000WPK0_DELFLR_YM150DspyDelnum.invoke({
                "inputFields": {
                    "pPrgid": $scope.Variables.StatPrgid.dataSet.dataValue,
                    "pDelnum": $scope.Variables.svCreateProcYM1000WPK0_DELFLR_YM150YrnDelbuf.dataSet.poutDelnum
                }
            },
            function(data) {},
            function(error) {
                $scope.Variables.notifMsg.setAlertType("error");
                $scope.Variables.notifMsg.setMessage("Error: " + error);
                $scope.Variables.notifMsg.notify();
            });

        $scope.Widgets.formYrnDelBuf.formWidgets.pMANUALDN.show = false;
        $scope.Widgets.formYrnDelBuf.formWidgets.pFROMWRH.show = false;
        $scope.Widgets.formYrnDelBuf.formWidgets.pTOWRH.show = false;
        $scope.Widgets.tableDspyDelnum.show = true;
    };


    $scope.pREQNUMClick = function($event, $isolateScope) {
        $scope.Widgets.dialogRGReqnum.open();
    };


    $scope.svGetProcYM1000WPK0_DELFLR_YM150VldtReqnumonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            $scope.Widgets.formYrnDelBuf.formWidgets.pREQNUM.datavalue = null;
        }
    };


    $scope.BtnSavClick = function($event, $isolateScope) {
        var m_Reqnum = $scope.Widgets.formYrnDelBuf.formWidgets.pREQNUM.datavalue;
        var m_Reqnseq = $scope.Widgets.formYrnDelBuf.formWidgets.pREQNSEQ.datavalue;
        var m_Palletid = $scope.Widgets.formYrnDelBuf.formWidgets.pPALLETID.datavalue;

        if (!m_Reqnum) {
            $scope.Variables.notifMsg.setMessage("Enter Request number");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        if (!m_Reqnseq) {
            $scope.Variables.notifMsg.setMessage("Enter Request Seq");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        if (!m_Palletid) {
            $scope.Variables.notifMsg.setMessage("Enter Pallet Id");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        $scope.Variables.svCreateProcYM1000WPK0_DELFLR_YM150YrnDelbuf.invoke();
    };


    $scope.pPALLETIDClick = function($event, $isolateScope) {
        $scope.Widgets.dialogRGPalletid.open();
    };


    $scope.pPALLETIDChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Variables.svGetProcYM1000WPK0_DELFLR_YM150ValtPalletid.invoke();
    };


    $scope.svGetProcYM1000WPK0_DELFLR_YM150ValtPalletidonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            $scope.Widgets.formYrnDelBuf.formWidgets.pPALLETID.datavalue = null;
        }
    };

}]);


Application.$controller("dialogRGReqnumController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.btnReqnumClick = function($event, $isolateScope) {
            $scope.Widgets.formYrnDelBuf.formWidgets.pREQNUM.datavalue = $scope.Widgets.tableRGReqnum.selecteditem.reqnum;
            $scope.Widgets.formYrnDelBuf.formWidgets.pREQNSEQ.datavalue = $scope.Widgets.tableRGReqnum.selecteditem.reqnseq;
            $scope.Widgets.formYrnDelBuf.formWidgets.pYRNMIXCODE.datavalue = $scope.Widgets.tableRGReqnum.selecteditem.yrnmixcode;
            $scope.Widgets.formYrnDelBuf.formWidgets.pKmchflrid.datavalue = $scope.Widgets.tableRGReqnum.selecteditem.kmchflrid;
            $scope.Widgets.formYrnDelBuf.formWidgets.pKmchcod.datavalue = $scope.Widgets.tableRGReqnum.selecteditem.kmchcod;
            $scope.Widgets.formYrnDelBuf.formWidgets.pOrdnum.datavalue = $scope.Widgets.tableRGReqnum.selecteditem.ordnum;
            $scope.Widgets.formYrnDelBuf.formWidgets.pKgsReq.datavalue = $scope.Widgets.tableRGReqnum.selecteditem.qtyreqn;
            $scope.Widgets.formYrnDelBuf.formWidgets.pAlcseq.datavalue = $scope.Widgets.tableRGReqnum.selecteditem.alcseq;
            $scope.Widgets.formYrnDelBuf.formWidgets.pFabseq.datavalue = $scope.Widgets.tableRGReqnum.selecteditem.fabseq;
            $scope.Widgets.formYrnDelBuf.formWidgets.pYrnid.datavalue = $scope.Widgets.tableRGReqnum.selecteditem.yrnid;
            $scope.Widgets.dialogRGReqnum.close();
        };

    }
]);

Application.$controller("tableRGReqnumController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("dialogRGPalletidController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.btnSltPalletClick = function($event, $isolateScope) {
            $scope.Widgets.formYrnDelBuf.formWidgets.pPALLETID.datavalue = $scope.Widgets.tablePalletID.selecteditem.palletid;
            $scope.Widgets.formYrnDelBuf.formWidgets.pNUMCON.datavalue = $scope.Widgets.tablePalletID.selecteditem.numcon;
            $scope.Widgets.formYrnDelBuf.formWidgets.pPALWGT.datavalue = $scope.Widgets.tablePalletID.selecteditem.palwgt;
            $scope.Widgets.dialogRGPalletid.close();
        };
    }
]);

Application.$controller("tablePalletIDController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("tableDspyDelnumController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);