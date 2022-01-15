Application.$controller("QueryYarnStockTransformationPageController", ["$scope", function($scope) {
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
        var m_Trnnum = $scope.Widgets.formFilter.formWidgets.pTrnnum.datavalue;
        var m_Reqno = $scope.Widgets.formFilter.formWidgets.pReqno.datavalue;
        var m_Wrhnum = $scope.Widgets.formFilter.formWidgets.pWrhnum.datavalue;
        var m_Fromdat = $scope.Widgets.formFilter.formWidgets.pFromdate.datavalue;
        var m_Todat = $scope.Widgets.formFilter.formWidgets.pTodate.datavalue;
        var m_Srcyrncod = $scope.Widgets.formFilter.formWidgets.pSrcYrncod.datavalue;
        var m_Desyrncod = $scope.Widgets.formFilter.formWidgets.pdesYrncod.datavalue;

        if (!m_Trnnum && !m_Reqno && !m_Wrhnum && !m_Fromdat && !m_Todat && !m_Srcyrncod && !m_Desyrncod) {
            $scope.Variables.notifMsg.setMessage("Input a value");
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

        $scope.Variables.svGetProcYM1000WPK0_YNTRANSFRM_YM560QryTrnNum.invoke();
        $scope.Variables.statForBtnQry.dataSet.dataValue = "N";
    };

    $scope.svGetProcYM1000WPK0_YNTRANSFRM_YM560QryTrnNumonError = function(variable, data) {
        $scope.Variables.statForBtnQry.dataSet.dataValue = "Y";
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            return false;
        }
    };

    $scope.svGetProcYM1000WPK0_YNTRANSFRM_YM560QryTrnNumonSuccess = function(variable, data, options) {
        $scope.Variables.statForBtnQry.dataSet.dataValue = "Y";
    };


    $scope.btnResetClick = function($event, $isolateScope) {
        $scope.Variables.svGetProcYM1000WPK0_YNTRANSFRM_YM560QryTrnNum.dataSet = null;
    };


    $scope.pTrnnumChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.pTrnnum.datavalue = newVal.toUpperCase();
    };


    $scope.pReqnoChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.pReqno.datavalue = newVal.toUpperCase();
    };


    $scope.pWrhnumChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.pWrhnum.datavalue = newVal.toUpperCase();
    };


    $scope.pSrcYrncodChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.pSrcYrncod.datavalue = newVal.toUpperCase();
    };


    $scope.pdesYrncodChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.pdesYrncod.datavalue = newVal.toUpperCase();
    };


    $scope.btnYrnStkTrnfrClick = function($event, $isolateScope) {
        window.open(window.location.origin + window.location.pathname + "#/TransformYarnStock?", "Yarn Stock Transformation");
    };

}]);


Application.$controller("tableTrnnumdelController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);