Application.$controller("QryYarnPalletReqnPageController", ["$scope", function($scope) {
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


    $scope.svGetProcYM1000WPK0_YNREQN_YM142MasteronError = function(variable, data) {
        $scope.Variables.statForBtnQry.dataSet.dataValue = "Y";
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
        }
    };

    $scope.svGetProcYM1000WPK0_YNREQN_YM142MasteronSuccess = function(variable, data, options) {
        $scope.Variables.statForBtnQry.dataSet.dataValue = "Y";
    };


    $scope.btnQryClick = function($event, $isolateScope) {
        var m_Reqnum = $scope.Widgets.formFilter.formWidgets.pReqnum.datavalue;
        var m_Ordnum = $scope.Widgets.formFilter.formWidgets.pOrdnum.datavalue;
        var m_Fabseq = $scope.Widgets.formFilter.formWidgets.pFabseq.datavalue;

        if (!m_Reqnum && !m_Ordnum && !m_Fabseq) {
            $scope.Variables.notifMsg.setMessage("Input a value");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        if (!!m_Fabseq && !m_Ordnum) {
            $scope.Variables.notifMsg.setMessage("Input Order number");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        $scope.Variables.svGetProcYM1000WPK0_YNREQN_YM142Master.invoke();
        $scope.Variables.statForBtnQry.dataSet.dataValue = "N";
    };


    $scope.svGetProcYM1000WPK0_YNREQN_YM142DetmixonBeforeUpdate = function(variable, inputData) {
        if (inputData.pYrnmix == '???') {
            if (!$scope.Widgets.tableDetmix.dataset || $scope.Widgets.tableDetmix.dataset.length === 0) {
                return (false);
            }
        }
    };


    $scope.btnResetClick = function($event, $isolateScope) {
        $scope.Variables.svGetProcYM1000WPK0_YNREQN_YM142Master.dataSet = null;
    };


    $scope.svDeleteProcYM1000WPK0_YNREQN_YM142CanreqonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
        }
    };

    $scope.svDeleteProcYM1000WPK0_YNREQN_YM142CanreqonSuccess = function(variable, data) {
        $scope.Widgets.dialogDelReq.close();
        $scope.Widgets.tableMaster.refreshData();
        $scope.Widgets.tableDetmix.refreshData();
    };


    $scope.svUpdateProcYM1000WPK0_YNREQN_YM142CancelonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
        }
    };

    $scope.svUpdateProcYM1000WPK0_YNREQN_YM142CancelonSuccess = function(variable, data) {
        $scope.Widgets.dialogCancel.close();
        $scope.Widgets.tableMaster.refreshData();
        $scope.Widgets.tableDetmix.refreshData();
    };


    $scope.pOrdnumChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.pOrdnum.datavalue = newVal.toUpperCase();
    };

}]);

Application.$controller("tableMasterController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.CanreqAction = function(selectedItemData) {
            $scope.Widgets.dialogDelReq.open();
        };


        $scope.CanUndelAmtAction = function(selectedItemData) {
            $scope.Widgets.dialogCancel.open();
        };

    }
]);

Application.$controller("tableDetmixController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("dialogDelReqController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.btnDelReqClick = function($event, $isolateScope) {
            $scope.Variables.svDeleteProcYM1000WPK0_YNREQN_YM142Canreq.invoke();
        };

    }
]);

Application.$controller("dialogCancelController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.btnCancelClick = function($event, $isolateScope) {
            $scope.Variables.svUpdateProcYM1000WPK0_YNREQN_YM142Cancel.invoke();
        };

    }
]);