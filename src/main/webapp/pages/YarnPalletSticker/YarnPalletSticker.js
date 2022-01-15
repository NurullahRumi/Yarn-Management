Application.$controller("YarnPalletStickerPageController", ["$scope", function($scope) {
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
    };


    $scope.button5Click = function($event, $isolateScope) {
        var m_PalletId = $scope.Widgets.formFilter.formWidgets.p_PALLETID.datavalue;
        var m_PalletNo = $scope.Widgets.formFilter.formWidgets.p_LOTWISE.datavalue;
        if (!m_PalletId && !m_PalletNo) {
            $scope.Variables.notifMsg.setMessage("Input A Palletid or Lotwise Pallet No");
            $scope.Variables.notifMsg.notify();
            return false;
        }
        $scope.Variables.svProcYM1311PK0_YM284YarnPalletSticker.invoke();
        $scope.Variables.statForBtnQry.dataSet.dataValue = "N";
    };


    $scope.svProcYM1311PK0_YM284YarnPalletStickeronError = function(variable, data, options) {
        $scope.Variables.statForBtnQry.dataSet.dataValue = "Y";
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
        }
    };


    $scope.svProcYM1311PK0_YM284YarnPalletStickeronSuccess = function(variable, data, options) {
        $scope.Variables.statForBtnQry.dataSet.dataValue = "Y";
    };

    $scope.button3Click = function($event, $isolateScope) {
        $scope.Variables.svProcYM1311PK0_YM284YarnPalletSticker.dataSet = null;
    };

    $scope.svProcYM1311PK0_YM284UpdYarnPalletStkronSuccess = function(variable, data) {
        $scope.Widgets.dialogUpdPalletId.close();
        $scope.Widgets.gridPalletID.refreshData();
    };

    $scope.button6Click = function($event, $isolateScope) {
        $scope.Widgets.dialogInsPalletId.open();
    };

    $scope.svProcYM1311PK0_YM284InsYarnPalletStkronSuccess = function(variable, data) {
        $scope.Widgets.dialogInsPalletId.close();
        $scope.Widgets.formFilter.formWidgets.p_PALLETID.datavalue = data.poutPalletId;
        $scope.Variables.svProcYM1311PK0_YM284YarnPalletSticker.invoke({
                "inputFields": {
                    "pprgid": $scope.Variables.statPrgid.dataSet.dataValue,
                    "pLOTWISE": null,
                    "pPALLETID": data.poutPalletId
                }
            },
            function(data) {},
            function(error) {
                $scope.Variables.notifMsg.setAlertType("error");
                $scope.Variables.notifMsg.setMessage("Error: " + error);
                $scope.Variables.notifMsg.notify();
            });
        $scope.Variables.svProcYM1311PK0_YM284YMT100YarnPltStkr.dataSet = null;
    };


    $scope.svProcYM1311PK0_YM284YMT100YarnPltStkronSuccess = function(variable, data) {
        if (!$scope.Variables.svProcYM1311PK0_YM284YMT100YarnPltStkr.dataSet.pyrnstat) {
            $scope.Variables.notifMsg.setMessage("Yarncode does not exists");
            $scope.Variables.notifMsg.notify();
            $scope.Widgets.txtInInsYRNCOD.datavalue = null;
            $scope.Variables.svProcYM1311PK0_YM284YMT100YarnPltStkr.dataSet = null;
            return false;
        } else if ($scope.Variables.svProcYM1311PK0_YM284YMT100YarnPltStkr.dataSet.pyrnstat !== null && $scope.Variables.svProcYM1311PK0_YM284YMT100YarnPltStkr.dataSet.pyrnstat == 'C') {
            $scope.Variables.notifMsg.setMessage("Yarncode completed/cancelled");
            $scope.Variables.notifMsg.notify();
            $scope.Widgets.txtInInsYRNCOD.datavalue = null;
            $scope.Variables.svProcYM1311PK0_YM284YMT100YarnPltStkr.dataSet = null;
            return false;
        } else if ($scope.Variables.svProcYM1311PK0_YM284YMT100YarnPltStkr.dataSet.pvldYrnori !== 'SML') {
            $scope.Variables.notifMsg.setMessage("Yarn origin is not SML");
            $scope.Variables.notifMsg.notify();
            $scope.Widgets.txtInInsYRNCOD.datavalue = null;
            $scope.Variables.svProcYM1311PK0_YM284YMT100YarnPltStkr.dataSet = null;
            return false;
        }
    };

    $scope.svProcYM1311PK0_YM284VlidtPalletIDonSuccess = function(variable, data) {};

    $scope.svProcYM1311PK0_YM284VlidtPalletIDonError = function(variable, data, options) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            $scope.Widgets.txtInsPALLETID.datavalue = null;
        }
    };


    $scope.p_PALLETIDChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.p_PALLETID.datavalue = newVal.toUpperCase();
    };


    $scope.p_LOTWISEChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.p_LOTWISE.datavalue = newVal.toUpperCase();
    };

}]);

Application.$controller("gridPalletIDController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.customFieldAction = function(selectedItemData) {
            $scope.Widgets.dialogUpdPalletId.open();
        };

    }
]);

Application.$controller("dialogUpdPalletIdController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.button5_1Click = function($event, $isolateScope) {
            $scope.Variables.svProcYM1311PK0_YM284UpdYarnPalletStkr.invoke();
        };

    }
]);

Application.$controller("dialogInsPalletIdController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;


        $scope.button8Click = function($event, $isolateScope) {
            if (!$scope.Widgets.txtInInsYRNCOD.datavalue) {
                $scope.Variables.notifMsg.setMessage("Input A Yarn Code First");
                $scope.Variables.notifMsg.notify();
                return false;
            }
            if (!$scope.Widgets.txtInsPALLETID.datavalue) {
                $scope.Variables.notifMsg.setMessage("Input A PalletID");
                $scope.Variables.notifMsg.notify();
                return false;
            }
            $scope.Variables.svProcYM1311PK0_YM284InsYarnPalletStkr.invoke();
        };


        $scope.txtInsPALLETIDChange = function($event, $isolateScope, newVal, oldVal) {
            if ($scope.Widgets.txtInsPALLETID.datavalue.length !== 9) {
                $scope.Variables.notifMsg.setMessage("Wrong palletid length, should be 9 char");
                $scope.Variables.notifMsg.notify();
                $scope.Widgets.txtInsPALLETID.datavalue = null;
                return false;
            }
            $scope.Variables.svProcYM1311PK0_YM284VlidtPalletID.invoke();
        };


        $scope.txtInInsYRNCODChange = function($event, $isolateScope, newVal, oldVal) {
            $scope.Variables.svProcYM1311PK0_YM284YMT100YarnPltStkr.invoke();
        };

    }
]);