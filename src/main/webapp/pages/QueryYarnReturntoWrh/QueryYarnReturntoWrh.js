Application.$controller("QueryYarnReturntoWrhPageController", ["$scope", function($scope) {
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
        var m_Retnum = $scope.Widgets.formFilter.formWidgets.pRetnum.datavalue;
        var m_Ynretid = $scope.Widgets.formFilter.formWidgets.pYnretid.datavalue;
        var m_Retordnum = $scope.Widgets.formFilter.formWidgets.pRetordnum.datavalue;
        var m_Wrhnum = $scope.Widgets.formFilter.formWidgets.pWrhnum.datavalue;
        var m_Fromdat = $scope.Widgets.formFilter.formWidgets.pFromdat.datavalue;
        var m_Todat = $scope.Widgets.formFilter.formWidgets.pTodate.datavalue;

        if (!m_Retnum && !m_Ynretid && !m_Retordnum && !m_Wrhnum && !m_Fromdat && !m_Todat) {
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

        $scope.Variables.svGetProcYM1000WPK0_YNRET_YM160YrnRet.invoke();
        $scope.Variables.statForBtnQry.dataSet.dataValue = "N";
    };

    $scope.svGetProcYM1000WPK0_YNRET_YM160YrnRetonError = function(variable, data) {
        $scope.Variables.statForBtnQry.dataSet.dataValue = "Y";
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
        }
    };

    $scope.svGetProcYM1000WPK0_YNRET_YM160YrnRetonSuccess = function(variable, data, options) {
        $scope.Variables.statForBtnQry.dataSet.dataValue = "Y";
    };


    $scope.pRetnumChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.pRetnum.datavalue = newVal.toUpperCase();
    };


    $scope.pYnretidChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.pYnretid.datavalue = newVal.toUpperCase();
    };


    $scope.pRetordnumChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.pRetordnum.datavalue = newVal.toUpperCase();
    };


    $scope.pWrhnumChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.pWrhnum.datavalue = newVal.toUpperCase();
    };


    $scope.btnResetClick = function($event, $isolateScope) {
        $scope.Variables.svGetProcYM1000WPK0_YNRET_YM160YrnRet.dataSet = null;
    };


    $scope.svUpdateProcYM1000WPK0_YNRET_YM165KgsAvlonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
        }
    };

    $scope.svUpdateProcYM1000WPK0_YNRET_YM165KgsAvlonSuccess = function(variable, data) {
        $scope.Widgets.dialogKgsAvl.close();
        $scope.Widgets.tableYrnret.refreshData();
    };


    $scope.svUpdateProcYM1000WPK0_YNRET_YM165DiscardonSuccess = function(variable, data) {
        $scope.Widgets.dialogDiscard.close();
        $scope.Widgets.tableYrnret.refreshData();
    };


    $scope.btnVwAllocClick = function($event, $isolateScope) {
        window.open(window.location.origin + window.location.pathname + "#/ViewYarnAllocByYrncode?p_param1=" + $scope.Widgets.tableYrnret.selecteditem.yrnmixcode, "View Yarn Allocation by Yarncode");
    };

}]);


Application.$controller("tableYrnretController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.MakeAvailableAction = function(selectedItemData) {
            $scope.Widgets.dialogKgsAvl.open();
        };


        $scope.DiscardAction = function(selectedItemData) {
            $scope.Widgets.dialogDiscard.open();
        };

    }
]);

Application.$controller("dialogKgsAvlController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.btnKgsAvlClick = function($event, $isolateScope) {
            $scope.Variables.svUpdateProcYM1000WPK0_YNRET_YM165KgsAvl.invoke();
        };

    }
]);

Application.$controller("dialogDiscardController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.btnDrdClick = function($event, $isolateScope) {
            $scope.Variables.svUpdateProcYM1000WPK0_YNRET_YM165Discard.invoke();
        };

    }
]);