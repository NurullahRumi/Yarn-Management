Application.$controller("AddYarnSalesPageController", ["$scope", function($scope) {
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
        $scope.Widgets.tableAllYrn.show = false;
        $scope.Widgets.panelHeader.show = false;
    };


    $scope.svGetProcYM250PK0_YNSALES_YM340VldYrnCodonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            $scope.Widgets.formAddSales.formWidgets.pYRNCOD.datavalue = null;
        }
    };


    $scope.pYRNCODChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Variables.svGetProcYM250PK0_YNSALES_YM340VldYrnCod.invoke();
    };


    $scope.svCreateProcYM250PK0_YNSALES_YM340AddyrnslsonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
        }
    };

    $scope.svCreateProcYM250PK0_YNSALES_YM340AddyrnslsonSuccess = function(variable, data) {
        $scope.Widgets.tableAllYrn.show = true;
        $scope.Widgets.panelHeader.show = true;
        $scope.Variables.notifMsg.setAlertType("information");
        $scope.Variables.notifMsg.setMessage("D Number" + "  " + $scope.Variables.svCreateProcYM250PK0_YNSALES_YM340Addyrnsls.dataSet.poutDn + "  " + "is created");
        $scope.Variables.notifMsg.notify();
        $scope.Widgets.formAddSales.reset();
        $scope.Variables.svGetProcYM250PK0_YM340YarnDisplay.invoke({
                "inputFields": {
                    "pPrgid": $scope.Variables.statPrgid.dataSet.dataValue,
                    "pDelnum": $scope.Variables.svCreateProcYM250PK0_YNSALES_YM340Addyrnsls.dataSet.poutDn
                }
            },
            function(data) {},
            function(error) {
                $scope.Variables.notifMsg.setAlertType("error");
                $scope.Variables.notifMsg.setMessage("Error: " + error);
                $scope.Variables.notifMsg.notify();
            });

        $scope.Widgets.formAddSales.formWidgets.pDATESLD.show = false;
        $scope.Widgets.formAddSales.formWidgets.pBUYER.show = false;
        $scope.Widgets.formAddSales.formWidgets.pWRHNUM.show = false;
        $scope.Widgets.formAddSales.formWidgets.pREQNUM.show = false;
        $scope.Widgets.formAddSales.formWidgets.pINVNUM.show = false;
    };


    $scope.btnqryslesClick = function($event, $isolateScope) {
        window.open(window.location.origin + window.location.pathname + "#/QueryYarnSales?", "Query Yarn Sales");
    };


    $scope.svCreateProcYM250PK0_YNSALES_YM340AddyrnslsonBeforeUpdate = function(variable, inputData) {
        if (!inputData.pYRNCOD) {
            $scope.Variables.notifMsg.setMessage("Yarn Code is required");
            $scope.Variables.notifMsg.notify();
            return false;
        }
        if (!inputData.pWRHNUM) {
            $scope.Variables.notifMsg.setMessage("Warehouse is required");
            $scope.Variables.notifMsg.notify();
            return false;
        }
        if (!inputData.pBUYER) {
            $scope.Variables.notifMsg.setMessage("Buyer is required");
            $scope.Variables.notifMsg.notify();
            return false;
        }
        if (inputData.pQTYPHYS === undefined || inputData.pQTYPHYS === null) {
            $scope.Variables.notifMsg.setMessage("Qty kgs is required");
            $scope.Variables.notifMsg.notify();
            return false;
        }
        if (inputData.pKGPRICE === undefined || inputData.pKGPRICE === null) {
            $scope.Variables.notifMsg.setMessage("Price/kg is required");
            $scope.Variables.notifMsg.notify();
            return false;
        }
    };


    $scope.btnSaveClick = function($event, $isolateScope) {
        $scope.Variables.svCreateProcYM250PK0_YNSALES_YM340Addyrnsls.invoke({
                "inputFields": {
                    "pPrgid": $scope.Variables.statPrgid.dataSet.dataValue,
                    "pDelnum": $scope.Widgets.lblDelnum.caption,
                    "pDATESLD": $scope.Widgets.formAddSales.formWidgets.pDATESLD.datavalue,
                    "pBUYER": $scope.Widgets.formAddSales.formWidgets.pBUYER.datavalue,
                    "pWRHNUM": $scope.Widgets.formAddSales.formWidgets.pWRHNUM.datavalue,
                    "pREQNUM": $scope.Widgets.formAddSales.formWidgets.pREQNUM.datavalue,
                    "pINVNUM": $scope.Widgets.formAddSales.formWidgets.pINVNUM.datavalue,
                    "pPALLETID": $scope.Widgets.formAddSales.formWidgets.pPALLETID.datavalue,
                    "pYRNCOD": $scope.Widgets.formAddSales.formWidgets.pYRNCOD.datavalue,
                    "pNUMCON": $scope.Widgets.formAddSales.formWidgets.pNUMCON.datavalue,
                    "pNUMCAR": $scope.Widgets.formAddSales.formWidgets.pNUMCAR.datavalue,
                    "pQTYPHYS": $scope.Widgets.formAddSales.formWidgets.pQTYPHYS.datavalue,
                    "pKGPRICE": $scope.Widgets.formAddSales.formWidgets.pKGPRICE.datavalue,
                    "pREMARKS": $scope.Widgets.formAddSales.formWidgets.pREMARKS.datavalue
                }
            },
            function(data) {},
            function(error) {
                $scope.Variables.notifMsg.setAlertType("error");
                $scope.Variables.notifMsg.setMessage("Error: " + error);
                $scope.Variables.notifMsg.notify();
            });
    };

}]);

Application.$controller("tableAllYrnController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);