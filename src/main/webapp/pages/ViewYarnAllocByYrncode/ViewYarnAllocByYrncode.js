Application.$controller("ViewYarnAllocByYrncodePageController", ["$scope", function($scope) {
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
            $scope.Variables.svProcYM3600PKO_YM360MASTER.invoke();
        }
    };


    $scope.button3Click = function($event, $isolateScope) {

        var m_YRNMIXCODE = $scope.Widgets.formFilter.formWidgets.p_yrnmixcode.datavalue;
        var m_WRHNUM = $scope.Widgets.formFilter.formWidgets.p_WRHNUM.datavalue;

        if (!m_YRNMIXCODE && !m_WRHNUM) {
            $scope.Variables.notifMsg.setMessage("Input A value First.");
            $scope.Variables.notifMsg.notify();
            return false;
        }
        $scope.Variables.svProcYM3600PKO_YM360MASTER.invoke();
        $scope.Variables.statForBtnQry.dataSet.dataValue = "N";
    };

    $scope.svProcYM3600PKO_YM360MASTERonError = function(variable, data, options) {
        $scope.Variables.statForBtnQry.dataSet.dataValue = "Y";
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
        }
    };


    $scope.svProcYM3600PKO_YM360MASTERonSuccess = function(variable, data) {
        $scope.Variables.statForBtnQry.dataSet.dataValue = "Y";
    };


    $scope.button3_1Click = function($event, $isolateScope) {
        $scope.Widgets.dialogMACHINE.open();
    };


    $scope.svProcYM3600PK0_YM360DETAILonSuccess = function(variable, data) {};


    $scope.p_yrnmixcodeChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.p_yrnmixcode.datavalue = newVal.toUpperCase();
    };


    $scope.p_WRHNUMChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.p_WRHNUM.datavalue = newVal.toUpperCase();
    };


    $scope.button1Click = function($event, $isolateScope) {
        $scope.Variables.svProcYM3600PKO_YM360MASTER.dataSet = null;
        $scope.Variables.svProcYM3600PK0_YM360DETAIL.dataSet = null;
    };


    $scope.btnViewDelClick = function($event, $isolateScope) {
        if (!$scope.Widgets.lblYrnmixcode.caption) {
            $scope.Variables.notifMsg.setMessage("Please select a yarnmixcode.");
            $scope.Variables.notifMsg.notify();
            return false;
        }
        window.open(window.location.origin + window.location.pathname + "#/ViewYarnMixDetails?pParam1=" + $scope.Widgets.tableMaster.selecteditem.yrnmixcode + "&pParam2=" + $scope.Widgets.tableMaster.selecteditem.wrhnum, "Yarn Mix Details");
    };

}]);

Application.$controller("tableDetailController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("tableMasterController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("dialogMACHINEController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.dialogMACHINEOpened = function($event, $isolateScope) {
            if (!$scope.Widgets.tableDetail.dataset[0]) {
                $scope.Widgets.tableMACHINE.dataset = null;
            }
        };

    }
]);

Application.$controller("tableMACHINEController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);