Application.$controller("QueryYarnFlrDeliveryPageController", ["$scope", function($scope) {
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
        var m_Wrhnum = $scope.Widgets.formFilter.formWidgets.pWrhNum.datavalue;
        var m_Palnum = $scope.Widgets.formFilter.formWidgets.pPalNum.datavalue;
        var m_Ordnum = $scope.Widgets.formFilter.formWidgets.pOrdNum.datavalue;
        var m_Yrncod = $scope.Widgets.formFilter.formWidgets.pYrncod.datavalue;
        var m_FromDate = $scope.Widgets.formFilter.formWidgets.pFromDATEDEL.datavalue;
        var m_tODate = $scope.Widgets.formFilter.formWidgets.pToDATEDEL.datavalue;

        if (!m_Wrhnum && !m_Palnum && !m_Ordnum && !m_Yrncod && !m_FromDate && !m_tODate) {
            $scope.Variables.notifMsg.setMessage("Input a value first");
            $scope.Variables.notifMsg.notify();
            return false;
        }
        if (!!m_Wrhnum && (!m_FromDate || !m_tODate)) {
            $scope.Variables.notifMsg.setMessage("Input From and To date");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        var date1 = new Date(m_FromDate);
        var date2 = new Date(m_tODate);
        var diffDays = (date2 - date1) / 86400000;
        if (diffDays > 60) {
            $scope.Variables.notifMsg.setMessage("Date range has to be within 60 days");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        if (date1 > date2) {
            $scope.Variables.notifMsg.setMessage("from date cannot be greater than to date");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        $scope.Variables.svGetProcYM1000WPK0_DDELFLR_YM322QryDel.invoke();
        $scope.Variables.statForBtnQry.dataSet.dataValue = "N";
    };

    $scope.svGetProcYM1000WPK0_DDELFLR_YM322QryDelonError = function(variable, data) {
        $scope.Variables.statForBtnQry.dataSet.dataValue = "Y";
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            return false;
        }
    };

    $scope.svGetProcYM1000WPK0_DDELFLR_YM322QryDelonSuccess = function(variable, data, options) {
        $scope.Variables.statForBtnQry.dataSet.dataValue = "Y";
    };


    $scope.btnRstClick = function($event, $isolateScope) {
        $scope.Variables.svGetProcYM1000WPK0_DDELFLR_YM322QryDel.dataSet = null;
    };


    $scope.btnAddYrnDelClick = function($event, $isolateScope) {
        window.open(window.location.origin + window.location.pathname + "#/AddYarnFlrDelivery?", "Yarn Delivery to Floor");
    };


    $scope.pWrhNumChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.pWrhNum.datavalue = newVal.toUpperCase();
    };


    $scope.pPalNumChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.pPalNum.datavalue = newVal.toUpperCase();
    };


    $scope.pOrdNumChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.pOrdNum.datavalue = newVal.toUpperCase();
    };


    $scope.pYrncodChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.pYrncod.datavalue = newVal.toUpperCase();
    };

}]);


Application.$controller("tableQryDelController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);