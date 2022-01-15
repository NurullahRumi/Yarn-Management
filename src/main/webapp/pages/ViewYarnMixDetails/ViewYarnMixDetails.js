Application.$controller("ViewYarnMixDetailsPageController", ["$scope", function($scope) {
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
        if (!$scope.pageParams.pParam1) {
            return false;
        }
        $scope.Variables.svProcYM3600PKO_YM345Pallet.invoke();
        $scope.Variables.svProcYM3600PKO_YM345Main.invoke();
    };


    $scope.button3Click = function($event, $isolateScope) {
        var m_YrnMixCode = $scope.Widgets.formFilter.formWidgets.pYrnmixCode.datavalue;
        var m_WrhNum = $scope.Widgets.formFilter.formWidgets.pWrhNum.datavalue;

        if (!m_YrnMixCode && !m_WrhNum) {
            $scope.Variables.notifMsg.setMessage("Input A value first");
            $scope.Variables.notifMsg.notify();
            return false;
        }
        $scope.Variables.svProcYM3600PKO_YM345Main.invoke();
        $scope.Variables.statForBtnQry1.dataSet.dataValue = "N";
    };


    $scope.svProcYM3600PKO_YM345MainonError = function(variable, data) {
        $scope.Variables.statForBtnQry1.dataSet.dataValue = "Y";
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
        }
    };

    $scope.svProcYM3600PKO_YM345MainonSuccess = function(variable, data, options) {
        $scope.Variables.statForBtnQry1.dataSet.dataValue = "Y";
    };


    $scope.button5Click = function($event, $isolateScope) {
        var m_Yrnmixcode1 = $scope.Widgets.formPalletFilter.formWidgets.pYrnmixCode1.datavalue;
        var m_PalletID = $scope.Widgets.formPalletFilter.formWidgets.pPalletID.datavalue;
        var m_PalletTyp = $scope.Widgets.formPalletFilter.formWidgets.pPalletType.datavalue;
        var m_Wrhnum = $scope.Widgets.formPalletFilter.formWidgets.pWrhnum.datavalue;

        if (!m_Yrnmixcode1 && !m_PalletID && !m_PalletTyp && !m_Wrhnum) {
            $scope.Variables.notifMsg.setMessage("Input A value first");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        $scope.Variables.svProcYM3600PKO_YM345Pallet.invoke();
        $scope.Variables.statForBtnQry2.dataSet.dataValue = "N";
    };


    $scope.svProcYM3600PKO_YM345PalletonError = function(variable, data) {
        $scope.Variables.statForBtnQry2.dataSet.dataValue = "Y";
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
        }
    };


    $scope.svProcYM3600PKO_YM345PalletonSuccess = function(variable, data, options) {
        $scope.Variables.statForBtnQry2.dataSet.dataValue = "Y";
    };


    $scope.button5_1Click = function($event, $isolateScope) {
        if (!$scope.Widgets.lblPalletID.caption) {
            $scope.Variables.notifMsg.setMessage("Query First");
            $scope.Variables.notifMsg.notify();
            return false;
        }
        $scope.Variables.svProcYM3600PKO_YM345PallletToLoose.invoke();
    };


    $scope.svProcYM3600PKO_YM345PallletToLooseonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
        }
    };

    $scope.svProcYM3600PKO_YM345PallletToLooseonSuccess = function(variable, data) {
        if (data.poutResult == "Y") {
            $scope.Variables.notifMsg.setMessage("Pallet successfully converted to cartons.");
            $scope.Variables.notifMsg.notify();
        }
    };


    $scope.pYrnmixCodeChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.pYrnmixCode.datavalue = newVal.toUpperCase();
    };


    $scope.pWrhNumChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.pWrhNum.datavalue = newVal.toUpperCase();
    };


    $scope.pYrnmixCode1Change = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formPalletFilter.formWidgets.pYrnmixCode1.datavalue = newVal.toUpperCase();
    };


    $scope.pPalletIDChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formPalletFilter.formWidgets.pPalletID.datavalue = newVal.toUpperCase();
    };


    $scope.pPalletTypeChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formPalletFilter.formWidgets.pPalletType.datavalue = newVal.toUpperCase();
    };


    $scope.button1Click = function($event, $isolateScope) {
        $scope.Variables.svProcYM3600PKO_YM345Main.dataSet = null;
    };


    $scope.button3_1Click = function($event, $isolateScope) {
        $scope.Variables.svProcYM3600PKO_YM345Pallet.dataSet = null;
        $scope.Variables.svProcYM3600PKO_YM345PalletDetails.dataSet = null;
    };

}]);


Application.$controller("tableMainController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("tableYrnmixPalletController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("tableYrnmixPalletController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("tablePalletDetailsController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);