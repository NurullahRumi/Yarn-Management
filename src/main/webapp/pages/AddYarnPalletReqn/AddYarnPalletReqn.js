Application.$controller("AddYarnPalletReqnPageController", ["$scope", function($scope) {
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
        $scope.Widgets.tableDlyreqnum.show = false;
    };


    $scope.pOrdnumClick = function($event, $isolateScope) {
        $scope.Widgets.dialogRGOrdnum.open();
    };


    $scope.svGetProcYM1000WPK0_YNREQN_YM144VldtOrdnumonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            $scope.Widgets.formAddMaster.formWidgets.pOrdnum.datavalue = null;
        }
    };


    $scope.pOrdnumChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Variables.svGetProcYM1000WPK0_YNREQN_YM144VldtOrdnum.invoke();
    };


    $scope.pFabseqClick = function($event, $isolateScope) {
        $scope.Widgets.dialogRGFabseq.open();
    };


    $scope.svGetProcYM1000WPK0_YNREQN_YM144VldtFabseqonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            $scope.Widgets.formAddMaster.formWidgets.pFabseq.datavalue = null;
            $scope.Widgets.formAddMaster.formWidgets.pFabtyp.datavalue = null;
            $scope.Widgets.formAddMaster.formWidgets.pFabwgt.datavalue = null;
            $scope.Widgets.formAddMaster.formWidgets.pYrnid.datavalue = null;
            $scope.Widgets.formAddMaster.formWidgets.pAlcseq.datavalue = null;
        }
    };


    $scope.pFabseqChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Variables.svGetProcYM1000WPK0_YNREQN_YM144VldtFabseq.invoke();
    };


    $scope.pYrnmixClick = function($event, $isolateScope) {
        $scope.Widgets.dialogRGYrnmix.open();
    };


    $scope.svGetProcYM1000WPK0_YNREQN_YM144VldtYrnmixonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            $scope.Widgets.formAddMaster.formWidgets.pYrnmix.datavalue = null;
            $scope.Widgets.formAddMaster.formWidgets.pQtyalc.datavalue = null;
        }
    };


    $scope.pYrnmixChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Variables.svGetProcYM1000WPK0_YNREQN_YM144VldtYrnmix.invoke();
    };


    $scope.pKmcflridClick = function($event, $isolateScope) {
        $scope.Widgets.dialogRGKmchcod.open();
    };


    $scope.svGetProcYM1000WPK0_YNREQN_YM144VldtKmchcodonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            $scope.Widgets.formAddMaster.formWidgets.pKmcflrid.datavalue = null;
            $scope.Widgets.formAddMaster.formWidgets.pKmchcod.datavalue = null;
        }
    };


    $scope.pKmcflridChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Variables.svGetProcYM1000WPK0_YNREQN_YM144VldtKmchcod.invoke();
    };


    $scope.svGetProcYM1000WPK0_YNREQN_YM144VldtNumfedonError = function(variable, data) {

        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            $scope.Widgets.formAddMaster.formWidgets.pExtotpal.datavalue = null;
            $scope.Widgets.formAddMaster.formWidgets.pPalwgt.datavalue = null;
            $scope.Widgets.formAddMaster.formWidgets.pNumfeed.datavalue = null;
        }
    };


    $scope.svGetProcYM1000WPK0_YNREQN_YM144RGTotpalonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            $scope.Widgets.formAddMaster.formWidgets.pQtyreqn.datavalue = null;
            $scope.Widgets.formAddMaster.formWidgets.pTotpal.datavalue = null;
        }
    };


    $scope.svCreateProcYM1000WPK0_YNREQN_YM144AddMasteronError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
        }
    };

    $scope.svCreateProcYM1000WPK0_YNREQN_YM144AddMasteronSuccess = function(variable, data) {
        $scope.Variables.notifMsg.setAlertType("information");
        $scope.Variables.notifMsg.setMessage("Request # " + "  " + $scope.Variables.svCreateProcYM1000WPK0_YNREQN_YM144AddMaster.dataSet.poutreqnum + "  " + "is created");;
        $scope.Variables.notifMsg.notify();

        $scope.Widgets.formAddMaster.formWidgets.pOrdnum.datavalue = null;
        $scope.Widgets.formAddMaster.formWidgets.pFabseq.datavalue = null;
        $scope.Widgets.formAddMaster.formWidgets.pFabtyp.datavalue = null;
        $scope.Widgets.formAddMaster.formWidgets.pFabwgt.datavalue = null;
        $scope.Widgets.formAddMaster.formWidgets.pYrnid.datavalue = null;
        $scope.Widgets.formAddMaster.formWidgets.pAlcseq.datavalue = null;
        $scope.Widgets.formAddMaster.formWidgets.pYrnmix.datavalue = null;
        $scope.Widgets.formAddMaster.formWidgets.pQtyalc.datavalue = null;
        $scope.Widgets.formAddMaster.formWidgets.pKmcflrid.datavalue = null;
        $scope.Widgets.formAddMaster.formWidgets.pKmchcod.datavalue = null;
        $scope.Widgets.formAddMaster.formWidgets.pNumfeed.datavalue = null;
        $scope.Widgets.formAddMaster.formWidgets.pExtotpal.datavalue = null;
        $scope.Widgets.formAddMaster.formWidgets.pPalwgt.datavalue = null;
        $scope.Widgets.formAddMaster.formWidgets.pTotpal.datavalue = null;
        $scope.Widgets.formAddMaster.formWidgets.pQtyreqn.datavalue = null;

        $scope.Variables.svGetProcYM1000WPK0_YNREQN_YM144DlyReqnum.invoke({
                "inputFields": {
                    "pReqnum": $scope.Variables.svCreateProcYM1000WPK0_YNREQN_YM144AddMaster.dataSet.poutreqnum
                }
            },
            function(data) {},
            function(error) {
                $scope.Variables.notifMsg.setAlertType("error");
                $scope.Variables.notifMsg.setMessage("Error: " + error);
                $scope.Variables.notifMsg.notify();
            });

        $scope.Widgets.formAddMaster.formWidgets.pWrhnum.show = false;
        $scope.Widgets.formAddMaster.formWidgets.pDatereq.show = false;
        $scope.Widgets.tableDlyreqnum.show = true;

    };


    $scope.btnSavClick = function($event, $isolateScope) {
        $scope.Variables.svCreateProcYM1000WPK0_YNREQN_YM144AddMaster.invoke();
    };


    $scope.btnCallYrnMixClick = function($event, $isolateScope) {
        if (!!$scope.Widgets.tableDlyreqnum.selecteditem.wrhnum) {
            window.open(window.location.origin + window.location.pathname + "#/ViewYarnMixDetails?pParam1=" + $scope.Widgets.tableDlyreqnum.selecteditem.yrnmixcode + "&pParam2=" + $scope.Widgets.tableDlyreqnum.selecteditem.wrhnum, "Yarn Mix Details");
        } else {
            window.open(window.location.origin + window.location.pathname + "#/ViewYarnMixDetails?pParam1=" + $scope.Widgets.tableDlyreqnum.selecteditem.yrnmixcode, "Yarn Mix Details");
        }
    };

}]);


Application.$controller("dialogRGOrdnumController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.btnSavRGOrdnumClick = function($event, $isolateScope) {
            $scope.Widgets.formAddMaster.formWidgets.pOrdnum.datavalue = $scope.Widgets.tableRGOrdnum.selecteditem.ordnum;
            $scope.Widgets.dialogRGOrdnum.close();
        };

    }
]);

Application.$controller("tableRGOrdnumController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("dialogRGFabseqController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.btnSavFabseqClick = function($event, $isolateScope) {
            $scope.Widgets.formAddMaster.formWidgets.pFabseq.datavalue = $scope.Widgets.tableRGFabseq.selecteditem.fabseq;
            $scope.Widgets.formAddMaster.formWidgets.pFabtyp.datavalue = $scope.Widgets.tableRGFabseq.selecteditem.fabtyp;
            $scope.Widgets.formAddMaster.formWidgets.pFabwgt.datavalue = $scope.Widgets.tableRGFabseq.selecteditem.fabwgt;
            $scope.Widgets.formAddMaster.formWidgets.pYrnid.datavalue = $scope.Widgets.tableRGFabseq.selecteditem.yrnid;
            $scope.Widgets.formAddMaster.formWidgets.pAlcseq.datavalue = $scope.Widgets.tableRGFabseq.selecteditem.alcseq;
            $scope.Widgets.dialogRGFabseq.close();
        };

    }
]);

Application.$controller("tableRGFabseqController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("dialogRGYrnmixController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.btnSavYrnmixClick = function($event, $isolateScope) {
            $scope.Widgets.formAddMaster.formWidgets.pYrnmix.datavalue = $scope.Widgets.tableRGYrnmix.selecteditem.yrnmixcode;
            $scope.Widgets.formAddMaster.formWidgets.pQtyalc.datavalue = $scope.Widgets.tableRGYrnmix.selecteditem.qtyalc;
            $scope.Widgets.dialogRGYrnmix.close();
        };

    }
]);

Application.$controller("tableRGYrnmixController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("dialogRGKmchcodController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.btnSavKmchcodClick = function($event, $isolateScope) {
            $scope.Widgets.formAddMaster.formWidgets.pKmcflrid.datavalue = $scope.Widgets.tableRGKmchcod.selecteditem.kmchflrid;
            $scope.Widgets.formAddMaster.formWidgets.pKmchcod.datavalue = $scope.Widgets.tableRGKmchcod.selecteditem.kmchcod;
            $scope.Widgets.formAddMaster.formWidgets.pNumfeed.datavalue = $scope.Widgets.tableRGKmchcod.selecteditem.feeders;
            $scope.Widgets.dialogRGKmchcod.close();
        };

    }
]);

Application.$controller("tableRGKmchcodController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("tableDlyreqnumController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);