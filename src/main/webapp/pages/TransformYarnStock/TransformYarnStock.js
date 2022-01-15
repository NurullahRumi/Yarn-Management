Application.$controller("TransformYarnStockPageController", ["$scope", function($scope) {
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
        $scope.Widgets.tableDplyTrnnum.show = false;
    };


    $scope.pReqnoClick = function($event, $isolateScope) {
        $scope.Widgets.dialogListofReqno.open();
    };


    $scope.svGetProcYM1000WPK0_YNTRANSFRM_YM560VldtReqnoonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            $scope.Widgets.formSavStk.formWidgets.pReqno.datavalue = null;
        }
    };


    $scope.pReqnoChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Variables.svGetProcYM1000WPK0_YNTRANSFRM_YM560VldtReqno.invoke();
    };


    $scope.btnSavStkClick = function($event, $isolateScope) {
        var m_Reqno = $scope.Widgets.formSavStk.formWidgets.pReqno.datavalue;
        var m_SrcPalId = $scope.Widgets.formSavStk.formWidgets.pSrcPalletid.datavalue;
        var m_SrcYrn = $scope.Widgets.formSavStk.formWidgets.pSrcYrncod.datavalue;
        var m_DestYrn = $scope.Widgets.formSavStk.formWidgets.pDestyrncod.datavalue;
        var m_Qty = $scope.Widgets.formSavStk.formWidgets.pQty.datavalue;
        var m_Remarks = $scope.Widgets.formSavStk.formWidgets.pRemarks.datavalue;

        if (!m_Reqno) {
            $scope.Variables.notifMsg.setMessage("Click on Request No to choose from the list.");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        if (!m_SrcPalId) {
            $scope.Variables.notifMsg.setMessage("Click on Src Pallet Id to choose from the list.");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        if (!m_SrcYrn) {
            $scope.Variables.notifMsg.setMessage("Input Src Yarn Code.");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        if (!m_DestYrn) {
            $scope.Variables.notifMsg.setMessage("Input Dest Yarn Code.");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        $scope.Variables.svCreateProcYM1000WPK0_YNTRANSFRM_YM560TrnsYrnStk.invoke();

    };


    $scope.pSrcPalletidClick = function($event, $isolateScope) {
        $scope.Widgets.dialogListofSrcPalletid.open();
    };


    $scope.svGetProcYM1000WPK0_YNTRANSFRM_YM560VldtSrcPalletonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            $scope.Widgets.formSavStk.formWidgets.pSrcPalletid.datavalue = null;
        }
    };


    $scope.pSrcPalletidChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Variables.svGetProcYM1000WPK0_YNTRANSFRM_YM560VldtSrcPallet.invoke();
    };


    $scope.svCreateProcYM1000WPK0_YNTRANSFRM_YM560TrnsYrnStkonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            return false;
        }
    };

    $scope.svCreateProcYM1000WPK0_YNTRANSFRM_YM560TrnsYrnStkonSuccess = function(variable, data) {
        $scope.Widgets.tableDplyTrnnum.show = true;
        $scope.Variables.notifMsg.setAlertType("information");
        $scope.Variables.notifMsg.setMessage("Transaction No" + " " + $scope.Variables.svCreateProcYM1000WPK0_YNTRANSFRM_YM560TrnsYrnStk.dataSet.poutTrnnum + " " + "is created");
        $scope.Variables.notifMsg.notify();
        $scope.Variables.svGetProcYM1000WPK0_YNTRANSFRM_YM560DplyTrnnum.invoke({
                "inputFields": {
                    "pTrnnum": $scope.Variables.svCreateProcYM1000WPK0_YNTRANSFRM_YM560TrnsYrnStk.dataSet.poutTrnnum
                }
            },
            function(data) {},
            function(error) {
                $scope.Variables.notifMsg.setAlertType("error");
                $scope.Variables.notifMsg.setMessage("Error: " + error);
                $scope.Variables.notifMsg.notify();
            });
        $scope.Widgets.formSavStk.reset();
    };


    $scope.svGetProcYM1000WPK0_YNTRANSFRM_YM560VldtSrcYrncodonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            $scope.Widgets.formSavStk.formWidgets.pSrcYrncod.datavalue = null;
        }
    };


    $scope.pSrcYrncodChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Variables.svGetProcYM1000WPK0_YNTRANSFRM_YM560VldtSrcYrncod.invoke();
    };


    $scope.btnConCarClick = function($event, $isolateScope) {
        if (!$scope.Widgets.txtConCar.datavalue) {
            $scope.Variables.notifMsg.setMessage("Input the pallet");
            $scope.Variables.notifMsg.notify();
            return false;
        }
        $scope.Variables.svCreateProcYM1000WPK0_YNTRANSFRM_YM560ConCar.invoke();
    };


    $scope.svCreateProcYM1000WPK0_YNTRANSFRM_YM560ConCaronError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            return false;
        }
    };

    $scope.svCreateProcYM1000WPK0_YNTRANSFRM_YM560ConCaronSuccess = function(variable, data) {
        $scope.Variables.notifMsg.setAlertType("information");
        $scope.Variables.notifMsg.setMessage("Pallet successfully converted to cartons.");
        $scope.Variables.notifMsg.notify();
        $scope.Widgets.txtConCar.datavalue = null;
    };


    $scope.btnConPalClick = function($event, $isolateScope) {
        if (!$scope.Widgets.lblvldt.caption) {
            $scope.Variables.notifMsg.setMessage("Create a Transaction No first");
            $scope.Variables.notifMsg.notify();
            return false;
        }
        $scope.Variables.svGetProcYM1000WPK0_YNTRANSFRM_YM560DlgOpn.invoke();
    };


    $scope.svGetProcYM1000WPK0_YNTRANSFRM_YM560DlgOpnonSuccess = function(variable, data) {
        $scope.Widgets.dialogConPal.open();
    };


    $scope.svCreateProcYM1000WPK0_YNTRANSFRM_YM560SavPalonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            return false;
        }
    };

    $scope.svCreateProcYM1000WPK0_YNTRANSFRM_YM560SavPalonSuccess = function(variable, data) {
        $scope.Variables.notifMsg.setAlertType("information");
        $scope.Variables.notifMsg.setMessage("Pallet" + " " + $scope.Variables.svCreateProcYM1000WPK0_YNTRANSFRM_YM560SavPal.dataSet.poutPalletid + " " + "successfully created. ");
        $scope.Variables.notifMsg.notify();
        $scope.Widgets.dialogConPal.close();
    };


    $scope.svGetProcYM1000WPK0_YNTRANSFRM_YM560DlgOpnonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            return false;
        }
    };

}]);


Application.$controller("dialogListofReqnoController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.btnSltReqnoClick = function($event, $isolateScope) {
            $scope.Widgets.formSavStk.formWidgets.pReqno.datavalue = $scope.Widgets.tableListofReqno.selecteditem.trnreqno;
            $scope.Widgets.formSavStk.formWidgets.pSrcYrncod.datavalue = $scope.Widgets.tableListofReqno.selecteditem.srcyrncod;
            $scope.Widgets.formSavStk.formWidgets.pDestyrncod.datavalue = $scope.Widgets.tableListofReqno.selecteditem.destyrncod;
            $scope.Widgets.formSavStk.formWidgets.pWrhnum.datavalue = $scope.Widgets.tableListofReqno.selecteditem.wrhnum;
            $scope.Widgets.formSavStk.formWidgets.pReqseq.datavalue = $scope.Widgets.tableListofReqno.selecteditem.trnreqseq;
            $scope.Widgets.formSavStk.formWidgets.pTrntyp.datavalue = $scope.Widgets.tableListofReqno.selecteditem.trntyp;
            $scope.Widgets.dialogListofReqno.close();

        };

    }
]);


Application.$controller("tableListofReqnoController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("dialogListofSrcPalletidController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.btnSrcPalletidClick = function($event, $isolateScope) {
            $scope.Widgets.formSavStk.formWidgets.pSrcPalletid.datavalue = $scope.Widgets.tableListofSrcPalletid.selecteditem.palletid;
            $scope.Widgets.dialogListofSrcPalletid.close();
        };

    }
]);

Application.$controller("tableListofSrcPalletidController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("tableDplyTrnnumController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("dialogConPalController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.btnSavPalClick = function($event, $isolateScope) {
            var m_Paltyp = $scope.Widgets.selectPalTyp.datavalue;
            var m_Conwgt = $scope.Widgets.txtConwgt.datavalue;

            if (!m_Paltyp) {
                $scope.Variables.notifMsg.setMessage("Input Pallet Type");
                $scope.Variables.notifMsg.notify();
                return false;
            }

            $scope.Variables.svCreateProcYM1000WPK0_YNTRANSFRM_YM560SavPal.invoke();
        };

    }
]);