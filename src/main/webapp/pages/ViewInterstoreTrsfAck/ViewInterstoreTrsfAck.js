Application.$controller("ViewInterstoreTrsfAckPageController", ["$scope", function($scope) {
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
        var m_TrnNum = $scope.Widgets.formFilter.formWidgets.pTrnNum.datavalue;
        var m_TrnDateFrom = $scope.Widgets.formFilter.formWidgets.pTrnDateFrom.datavalue;
        var m_TrnDateTo = $scope.Widgets.formFilter.formWidgets.pTrnDateTo.datavalue;
        var m_ReqNum = $scope.Widgets.formFilter.formWidgets.pReqNum.datavalue;
        var m_FromWrh = $scope.Widgets.formFilter.formWidgets.pFromWrh.datavalue;
        var m_ToWrh = $scope.Widgets.formFilter.formWidgets.pToWrh.datavalue;

        if (!m_TrnNum && !m_TrnDateFrom && !m_TrnDateTo && !m_ReqNum && !m_FromWrh && !m_ToWrh) {
            $scope.Variables.notifMsg.setMessage("Input A value first.");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        if (!!m_TrnDateFrom) {
            if (!m_TrnDateFrom || !m_TrnDateTo) {
                $scope.Variables.notifMsg.setMessage("Input Date From/To both.");
                $scope.Variables.notifMsg.notify();
                return false;
            }
        }

        if (!!m_TrnDateTo) {
            if (!m_TrnDateFrom || !m_TrnDateTo) {
                $scope.Variables.notifMsg.setMessage("Input Date From/To both.");
                $scope.Variables.notifMsg.notify();
                return false;
            }
        }

        var date1 = new Date(m_TrnDateFrom);
        var date2 = new Date(m_TrnDateTo);
        var diffDays = (date2 - date1) / 86400000;
        if (diffDays > 370) {
            $scope.Variables.notifMsg.setMessage("Date range has to be within 1 year");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        if (date1 > date2) {
            $scope.Variables.notifMsg.setMessage("from date cannot be greater than to date");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        if (!!m_TrnDateFrom && !!m_TrnDateTo) {
            if (!m_FromWrh || !m_ToWrh) {
                $scope.Variables.notifMsg.setMessage("Input from/to warehouse");
                $scope.Variables.notifMsg.notify();
                return false;
            }
        }

        $scope.Variables.svGetProcYM311PK0_ACKIST_YM313ViewAck.invoke();
        $scope.Variables.statForBtnQry.dataSet.dataValue = "N";
    };

    $scope.svGetProcYM311PK0_ACKIST_YM313ViewAckonError = function(variable, data) {
        $scope.Variables.statForBtnQry.dataSet.dataValue = "Y";
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            return false;
        }
    };


    $scope.svGetProcYM311PK0_ACKIST_YM313ViewAckonSuccess = function(variable, data, options) {
        $scope.Variables.statForBtnQry.dataSet.dataValue = "Y";
    };


    $scope.btnResetClick = function($event, $isolateScope) {
        $scope.Variables.svGetProcYM311PK0_ACKIST_YM313ViewAck.dataSet = null;
    };

}]);

Application.$controller("tableViewAckController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);