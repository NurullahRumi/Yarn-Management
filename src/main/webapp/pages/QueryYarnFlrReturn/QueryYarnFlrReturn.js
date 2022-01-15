Application.$controller("QueryYarnFlrReturnPageController", ["$scope", function($scope) {
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


    $scope.btnQryClick = function($event, $isolateScope) {
        var m_Ordnum = $scope.Widgets.formFilter.formWidgets.pOrdnum.datavalue;
        var m_Retnum = $scope.Widgets.formFilter.formWidgets.pRetnum.datavalue;
        var m_Yrncod = $scope.Widgets.formFilter.formWidgets.pYrncod.datavalue;
        var m_Wrhnum = $scope.Widgets.formFilter.formWidgets.pWrhnum.datavalue;
        var m_Fromdat = $scope.Widgets.formFilter.formWidgets.pFromDATERet.datavalue;
        var m_Todat = $scope.Widgets.formFilter.formWidgets.pToDATERet.datavalue;

        if (!m_Ordnum && !m_Retnum && !m_Yrncod && !m_Wrhnum && !m_Fromdat && !m_Todat) {
            $scope.Variables.notifMsg.setMessage("Input a value first");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        if (!!m_Wrhnum && (!m_Fromdat || !m_Todat)) {
            $scope.Variables.notifMsg.setMessage("Input From and To date");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        if (m_Fromdat > m_Todat) {
            $scope.Variables.notifMsg.setMessage("from date cannot be greater than to date");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        var date1 = new Date(m_Fromdat);
        var date2 = new Date(m_Todat);
        var diffDays = (date2 - date1) / 86400000;
        if (diffDays > 60) {
            $scope.Variables.notifMsg.setMessage("Date range has to be within 60 days");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        $scope.Variables.svGetProcYM1000WPK0_YM323QryReturn.invoke();
        $scope.Variables.statForBtnQry.dataSet.dataValue = "N";
    };


    $scope.svGetProcYM1000WPK0_YM323QryReturnonError = function(variable, data) {
        $scope.Variables.statForBtnQry.dataSet.dataValue = "Y";
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            return false;
        }
    };

    $scope.svGetProcYM1000WPK0_YM323QryReturnonSuccess = function(variable, data, options) {
        $scope.Variables.statForBtnQry.dataSet.dataValue = "Y";
    };


    $scope.btnResetClick = function($event, $isolateScope) {
        $scope.Variables.svGetProcYM1000WPK0_YM323QryReturn.dataSet = null;
    };


    $scope.btnYrnReturnClick = function($event, $isolateScope) {
        window.open(window.location.origin + window.location.pathname + "#/AddYarnFlrReturn?", "Yarn Return from Floor");
    };


    $scope.pOrdnumChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.pOrdnum.datavalue = newVal.toUpperCase();
    };


    $scope.pRetnumChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.pRetnum.datavalue = newVal.toUpperCase();
    };


    $scope.pYrncodChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.pYrncod.datavalue = newVal.toUpperCase();
    };


    $scope.pWrhnumChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.pWrhnum.datavalue = newVal.toUpperCase();
    };

}]);


Application.$controller("tableQryReturnController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);