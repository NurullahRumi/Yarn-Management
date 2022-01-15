Application.$controller("AdditionalReceiptPageController", ["$scope", function($scope) {
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

        if (!$scope.pageParams.p_param1) {
            return false;
        } else {
            $scope.Variables.svProcYM1000PK0_YM285MASTER.dataBinding.pyrncod = $scope.pageParams.p_param1;
            $scope.Variables.svProcYM1000PK0_YM285MASTER.invoke();
        }
    };


    $scope.button3Click = function($event, $isolateScope) {
        var m_yrncod = $scope.Widgets.formFilter.formWidgets.p_yrncod.datavalue;
        var m_RECPNUM = $scope.Widgets.formFilter.formWidgets.p_RECPNUM.datavalue;
        var m_CNTNUM = $scope.Widgets.formFilter.formWidgets.p_CNTNUM.datavalue;
        var m_RCVDAT = $scope.Widgets.formFilter.formWidgets.p_RCVDAT.datavalue;
        var m_WRHNUM = $scope.Widgets.formFilter.formWidgets.p_WRHNUM.datavalue;

        if (!m_yrncod && !m_RECPNUM && !m_CNTNUM && !m_RCVDAT && !m_WRHNUM) {
            $scope.Variables.notifMsg.setMessage("Input one value to query");
            $scope.Variables.notifMsg.notify();
            return false;
        }
        $scope.Variables.svProcYM1000PK0_YM285MASTER.invoke();
        $scope.Variables.statCheckSts.dataSet.dataValue = "N";
    };

    $scope.svProcYM1000PK0_YM285MASTERonError = function(variable, data, options) {
        $scope.Variables.statCheckSts.dataSet.dataValue = "Y";
    };

    $scope.svProcYM1000PK0_YM285MASTERonSuccess = function(variable, data, options) {
        $scope.Variables.statCheckSts.dataSet.dataValue = "Y";
    };


    $scope.button3_1Click = function($event, $isolateScope) {
        $scope.Widgets.dialogInsMASTER.open();
        $scope.Variables.svProcYM1000PKO_YM285WRHNUM.invoke();
        $scope.Variables.svProcYM1000PKO_YM285PALLETTYPE.invoke();
    };


    $scope.svProcYM1000PKO_YM285InsMASTERonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            return false;
        }
    };

    $scope.svProcYM1000PKO_YM285InsMASTERonSuccess = function(variable, data) {
        $scope.Widgets.dialogInsMASTER.close();
        $scope.Variables.svProcYM1000PK0_YM285MASTER.invoke({
            "inputFields": {
                "pprgid": $scope.Variables.statPrgid.dataSet.dataValue,
                "pyrncod": data.poutyrncod,
                "pRECPNUM": "",
                "pCNTNUM": "",
                "pRCVDAT": "",
                "pWRHNUM": ""
            }
        });
        $scope.Variables.svGetProcYM1000PK0_YM285RecptSeq.invoke(

            {
                "inputFields": {
                    "pYrncod": $scope.Variables.svProcYM1000PKO_YM285InsMASTER.dataSet.poutyrncod,
                    "pRecpNum": $scope.Variables.svProcYM1000PKO_YM285InsMASTER.dataSet.poutRecpNum
                }
            },
            function(data) {},
            function(error) {
                $scope.Variables.notifMsg.setAlertType("error");
                $scope.Variables.notifMsg.setMessage("Error: " + error);
                $scope.Variables.notifMsg.notify();
            });
    };

    $scope.svProcYM1000PKO_YM285YrncodonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            $scope.Widgets.txtInsYRNCOD.datavalue = null;
        }
    };


    $scope.p_yrncodChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.p_yrncod.datavalue = newVal.toUpperCase();
    };


    $scope.p_RECPNUMChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.p_RECPNUM.datavalue = newVal.toUpperCase();
    };


    $scope.p_CNTNUMChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.p_CNTNUM.datavalue = newVal.toUpperCase();
    };


    $scope.p_WRHNUMChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.p_WRHNUM.datavalue = newVal.toUpperCase();
    };


    $scope.p_PALLETTYPEChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.p_PALLETTYPE.datavalue = newVal.toUpperCase();
    };


    $scope.button1Click = function($event, $isolateScope) {
        $scope.Variables.svProcYM1000PK0_YM285MASTER.dataSet = null;
    };


    $scope.btnPntStkrClick = function($event, $isolateScope) {
        if (!$scope.Widgets.lblYrncod.caption) {
            $scope.Variables.notifMsg.setMessage("Don't have pallets to print");
            $scope.Variables.notifMsg.notify();
            return false;
        }
        var m_Length = $scope.Widgets.tablePrtPallet.selectedItems.length;
        var i = 0;
        if (!m_Length) {
            $scope.Variables.notifMsg.setMessage("Select pallet ID first");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        for (i = 0; i < m_Length; i++) {
            $scope.Variables.svGetProcYM1311PK0_YM285prntPalletId.invoke(

                {
                    "inputFields": {
                        "pPalletID": $scope.Widgets.tablePrtPallet.selectedItems[i].palletid
                    }
                },
                function(data) {},
                function(error) {
                    $scope.Variables.notifMsg.setAlertType("error");
                    $scope.Variables.notifMsg.setMessage("Error: " + error);
                    $scope.Variables.notifMsg.notify();
                });
        }
    };


    $scope.svGetProcYM1000PK0_YM285RecptSeqonBeforeUpdate = function(variable, inputData) {
        if (inputData.pYrncod == '???') {
            if (!$scope.Widgets.listRecptSeq.dataset || $scope.Widgets.listRecptSeq.dataset.length === 0) {
                return (false);
            }
        }
    };


    $scope.svProcYM1000PK0_YM286DETPALLETonBeforeUpdate = function(variable, inputData) {
        if (inputData.pYrncod == '???') {
            if (!$scope.Widgets.tablePrtPallet.dataset || $scope.Widgets.tablePrtPallet.dataset.length === 0) {
                return (false);
            }
        }
    };

}]);

Application.$controller("table1Controller", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("dialogInsMASTERController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.button7Click = function($event, $isolateScope) {
            if (!$scope.Widgets.dateInsRCVDAT.datavalue || !$scope.Widgets.selectInsWRHNUM.datavalue || !$scope.Widgets.selectInsPALLETTYPE.datavalue || !$scope.Widgets.txtInsYRNCOD.datavalue) {
                $scope.Variables.notifMsg.setMessage("Yarn Code/Warehouse/Date received/Pallet type are required!");
                $scope.Variables.notifMsg.notify();
                return false;
            }

            if ($scope.Widgets.selectInsPALLETTYPE.datavalue == 'C' || $scope.Widgets.selectInsPALLETTYPE.datavalue == 'L') {
                if (!$scope.Widgets.txtInsCONCAR.datavalue || !$scope.Widgets.txtInsCARPALL.datavalue || !$scope.Widgets.txtInsCONWGT.datavalue) {
                    $scope.Variables.notifMsg.setMessage("Please check weights are missing. Cannot save!");
                    $scope.Variables.notifMsg.notify();
                    return false;
                } else if ($scope.Widgets.selectInsPALLETTYPE.datavalue == 'N') {
                    if (!$scope.Widgets.txtInsCONWGT.datavalue || !$scope.Widgets.txtInsNUMCON.datavalue) {
                        $scope.Variables.notifMsg.setMessage("Please check weights are missing for normal Pallet. Cannot save!");
                        $scope.Variables.notifMsg.notify();
                        return false;
                    }
                }

            }
            if ($scope.Widgets.selectInsPALLETTYPE.datavalue !== 'L') {
                if (!$scope.Widgets.txtInsTOTPALCREATED.datavalue) {
                    $scope.Variables.notifMsg.setMessage("No of pallets must be entered!");
                    $scope.Variables.notifMsg.notify();
                    return false;
                }
            }

            $scope.Variables.svProcYM1000PKO_YM285InsMASTER.invoke();
        };

        $scope.selectInsPALLETTYPEChange = function($event, $isolateScope, newVal, oldVal) {
            if ($scope.Widgets.selectInsPALLETTYPE.datavalue == 'N') {
                $scope.Widgets.txtInsCONCAR.disabled = true;
                $scope.Widgets.txtInsCARPALL.disabled = true;
                $scope.Widgets.txtInsNUMCON.readonly = false;
                $scope.Widgets.txtInsTOTPALCREATED.disabled = false;
            } else if ($scope.Widgets.selectInsPALLETTYPE.datavalue == 'L') {
                $scope.Widgets.txtInsTOTPALCREATED.disabled = true;
                $scope.Widgets.txtInsCONCAR.disabled = false;
                $scope.Widgets.txtInsCARPALL.disabled = false;
                $scope.Widgets.txtInsNUMCON.readonly = true;
            } else {
                $scope.Widgets.txtInsCONCAR.disabled = false;
                $scope.Widgets.txtInsCARPALL.disabled = false;
                $scope.Widgets.txtInsNUMCON.readonly = true;
                $scope.Widgets.txtInsTOTPALCREATED.disabled = false;
            }
        };

        $scope.calcQtyRec = function($isolateScope) {
            var m_palletTyp = $scope.Widgets.selectInsPALLETTYPE.datavalue;
            var m_totPalCreated = $scope.Widgets.txtInsTOTPALCREATED.datavalue;
            var m_conWgt = $scope.Widgets.txtInsCONWGT.datavalue;
            var m_conCar = $scope.Widgets.txtInsCONCAR.datavalue;
            var m_carPall = $scope.Widgets.txtInsCARPALL.datavalue;
            var m_numCon = $scope.Widgets.txtInsNUMCON.datavalue;

            if (m_palletTyp == "C") {
                $scope.Widgets.txtInsNUMCON.datavalue = (!m_conCar ? 1 : m_conCar) * (!m_carPall ? 1 : m_carPall);
            } else if (m_palletTyp == "N") {
                null;
            } else if (m_palletTyp == "L") {
                $scope.Widgets.txtInsNUMCON.datavalue = (!m_conCar ? 1 : m_conCar) * (!m_carPall ? 1 : m_carPall);
            }

        };


        $scope.txtInsTOTPALCREATEDChange = function($event, $isolateScope, newVal, oldVal) {
            $scope.calcQtyRec($scope);
        };


        $scope.txtInsCONWGTChange = function($event, $isolateScope, newVal, oldVal) {
            $scope.calcQtyRec($scope);
        };


        $scope.txtInsCONCARChange = function($event, $isolateScope, newVal, oldVal) {
            $scope.calcQtyRec($scope);
        };

        $scope.txtInsCARPALLChange = function($event, $isolateScope, newVal, oldVal) {
            $scope.calcQtyRec($scope);
        };

        $scope.txtInsNUMCONChange = function($event, $isolateScope, newVal, oldVal) {
            $scope.calcQtyRec($scope);
        };

    }
]);

Application.$controller("tablePrtPalletController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

    }
]);

Application.$controller("tableYarnController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);