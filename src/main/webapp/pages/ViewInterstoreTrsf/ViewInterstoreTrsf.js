Application.$controller("ViewInterstoreTrsfPageController", ["$scope", function($scope) {
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


    $scope.svGetProcYM311PK0_IST_YM312ViewTrnsfrHisonError = function(variable, data, options) {
        $scope.Variables.statForBtnQry.dataSet.dataValue = "Y";
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
        }
    };

    $scope.svGetProcYM311PK0_IST_YM312ViewTrnsfrHisonSuccess = function(variable, data, options) {
        $scope.Variables.statForBtnQry.dataSet.dataValue = "Y";
    };


    $scope.btnQryClick = function($event, $isolateScope) {
        var m_Trnnum = $scope.Widgets.formFilter.formWidgets.pTrnnum.datavalue;
        var m_Reqnum = $scope.Widgets.formFilter.formWidgets.pReqnum.datavalue;
        var m_Yrnmixcod = $scope.Widgets.formFilter.formWidgets.pYrnmixcode.datavalue;
        var m_TrnDatFrom = $scope.Widgets.formFilter.formWidgets.pTrnDatFrom.datavalue;
        var m_TrnDatTo = $scope.Widgets.formFilter.formWidgets.pTrnDatTo.datavalue;
        var m_FromWrh = $scope.Widgets.formFilter.formWidgets.pFromWrh.datavalue;
        var m_ToWrh = $scope.Widgets.formFilter.formWidgets.pToWrh.datavalue;

        if (!m_Trnnum && !m_Reqnum && !m_Yrnmixcod && !m_TrnDatFrom && !m_TrnDatTo && !m_FromWrh && !m_ToWrh) {
            $scope.Variables.notifMsg.setMessage("Input A value.");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        if (!!m_Reqnum) {
            if (m_Reqnum.length <= 6) {
                $scope.Variables.notifMsg.setMessage("Input at least 6 digit for Request #");
                $scope.Variables.notifMsg.notify();
                return false;
            }
        }

        if (!!m_TrnDatFrom) {
            if (!m_TrnDatFrom || !m_TrnDatTo) {
                $scope.Variables.notifMsg.setMessage("Input From/To Date both.");
                $scope.Variables.notifMsg.notify();
                return false;
            }
        }

        if (!!m_TrnDatTo) {
            if (!m_TrnDatFrom || !m_TrnDatTo) {
                $scope.Variables.notifMsg.setMessage("Input From/To Date both.");
                $scope.Variables.notifMsg.notify();
                return false;
            }
        }

        var date1 = new Date(m_TrnDatFrom);
        var date2 = new Date(m_TrnDatTo);

        var diffDays = (date2 - date1) / 86400000;

        if (diffDays > 15) {
            $scope.Variables.notifMsg.setMessage("Date range has to be within 15 days.");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        if (date1 > date2) {
            $scope.Variables.notifMsg.setMessage("Form date can't be greater than To date.");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        $scope.Variables.svGetProcYM311PK0_IST_YM312ViewTrnsfrHis.invoke();
        $scope.Variables.statForBtnQry.dataSet.dataValue = "N";
    };


    $scope.btnResetClick = function($event, $isolateScope) {
        $scope.Variables.svGetProcYM311PK0_IST_YM312ViewTrnsfrHis.dataSet = null;
    };


    $scope.pTrnnumChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.pTrnnum.datavalue = newVal.toUpperCase();
    };


    $scope.pReqnumChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.pReqnum.datavalue = newVal.toUpperCase();
    };


    $scope.pYrnmixcodeChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.pYrnmixcode.datavalue = newVal.toUpperCase();
    };


    $scope.pFromWrhChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.pFromWrh.datavalue = newVal.toUpperCase();
    };


    $scope.pToWrhChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.pToWrh.datavalue = newVal.toUpperCase();
    };


    $scope.btnCanTranfrClick = function($event, $isolateScope) {
        if (!$scope.Widgets.lblForVelidation.caption) {
            $scope.Variables.notifMsg.setMessage("Select a row first.");
            $scope.Variables.notifMsg.notify();
            return false;
        }
        $scope.Widgets.dialogCanTrnsfr.open();
    };


    $scope.svUpdateProcYM311PK0_IST_YM312CancelTrnfronError = function(variable, data, options) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
        }
    };

    $scope.svUpdateProcYM311PK0_IST_YM312CancelTrnfronSuccess = function(variable, data, options) {
        $scope.Variables.notifMsg.setMessage("Transfer cancelled and committed.");
        $scope.Variables.notifMsg.notify();
        return false;
    };

}]);


Application.$controller("tableTrnHisController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("dialogCanTrnsfrController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;


        $scope.btnCantrnsfrClick = function($event, $isolateScope) {
            $scope.Variables.svUpdateProcYM311PK0_IST_YM312CancelTrnfr.invoke();
        };

    }
]);