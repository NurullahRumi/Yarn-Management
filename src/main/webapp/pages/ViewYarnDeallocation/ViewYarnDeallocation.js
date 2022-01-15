Application.$controller("ViewYarnDeallocationPageController", ["$scope", function($scope) {
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
        var m_Febseq = $scope.Widgets.formFilter.formWidgets.pFabseq.datavalue;
        var m_YrnMixCode = $scope.Widgets.formFilter.formWidgets.pYrnMixCode.datavalue;
        var m_DateAlcFrom = $scope.Widgets.formFilter.formWidgets.pDateAlcFrom.datavalue;
        var m_DateAlcTo = $scope.Widgets.formFilter.formWidgets.pDateAlcTo.datavalue;

        if (!m_Ordnum && !m_Febseq && !m_YrnMixCode && !m_DateAlcFrom && !m_DateAlcTo) {
            $scope.Variables.notifMsg.setMessage("Input a value");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        if (!!m_Febseq && !m_Ordnum) {
            $scope.Variables.notifMsg.setMessage("Input a order number");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        if (!!m_DateAlcFrom) {
            if (!m_DateAlcFrom || !m_DateAlcTo) {
                $scope.Variables.notifMsg.setMessage("Input Date From/To both.");
                $scope.Variables.notifMsg.notify();
                return false;
            }
        }

        if (!!m_DateAlcTo) {
            if (!m_DateAlcFrom || !m_DateAlcTo) {
                $scope.Variables.notifMsg.setMessage("Input Date From/To both.");
                $scope.Variables.notifMsg.notify();
                return false;
            }
        }

        var date1 = new Date(m_DateAlcFrom);
        var date2 = new Date(m_DateAlcTo);
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

        $scope.Variables.svProcYM1000PKO_YM130QryYrnDeallocation.invoke();
        $scope.Variables.statForBtnQry.dataSet.dataValue = "N";
    };

    $scope.btnResetClick = function($event, $isolateScope) {
        $scope.Variables.svProcYM1000PKO_YM130QryYrnDeallocation.dataSet = null;
    };


    $scope.svProcYM1000PKO_YM130QryYrnDeallocationonError = function(variable, data) {
        $scope.Variables.statForBtnQry.dataSet.dataValue = "Y";
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            return false;
        }
    };


    $scope.svProcYM1000PKO_YM130QryYrnDeallocationonSuccess = function(variable, data, options) {
        $scope.Variables.statForBtnQry.dataSet.dataValue = "Y";
    };


    $scope.pOrdnumChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.pOrdnum.datavalue = newVal.toUpperCase();
    };


    $scope.pYrnMixCodeChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.pYrnMixCode.datavalue = newVal.toUpperCase();
    };

}]);

Application.$controller("tableMasterController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);