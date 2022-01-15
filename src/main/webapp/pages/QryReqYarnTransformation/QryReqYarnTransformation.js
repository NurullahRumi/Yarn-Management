Application.$controller("QryReqYarnTransformationPageController", ["$scope", function($scope) {
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
        var m_Trnreqno = $scope.Widgets.formFilter.formWidgets.pTrnReqno.datavalue;
        var m_Wrhnum = $scope.Widgets.formFilter.formWidgets.pWrhnum.datavalue;
        var m_Fromreqdat = $scope.Widgets.formFilter.formWidgets.pFromReqDat.datavalue;
        var m_Toreqdat = $scope.Widgets.formFilter.formWidgets.pToReqDat.datavalue;
        var m_Srcyrncod = $scope.Widgets.formFilter.formWidgets.pSrcYrncod.datavalue;
        var m_Destyrncod = $scope.Widgets.formFilter.formWidgets.pDestYrncod.datavalue;
        var m_Sts = $scope.Widgets.formFilter.formWidgets.pSts.datavalue;

        if (!m_Trnreqno && !m_Wrhnum && !m_Fromreqdat && !m_Toreqdat && !m_Srcyrncod && !m_Destyrncod && !m_Sts) {
            $scope.Variables.notifMsg.setMessage("Input a value");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        if (!!m_Wrhnum && (!m_Fromreqdat || !m_Toreqdat)) {
            $scope.Variables.notifMsg.setMessage("Input From/To date");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        if (!!m_Sts) {
            if (m_Sts == "COM" && (!m_Fromreqdat || !m_Toreqdat)) {
                $scope.Variables.notifMsg.setMessage("Input From/To date");
                $scope.Variables.notifMsg.notify();
                return false;
            } else if (m_Sts == "PLN" && !m_Wrhnum) {
                $scope.Variables.notifMsg.setMessage("Input warehouse");
                $scope.Variables.notifMsg.notify();
                return false;
            }
        }

        var date1 = new Date(m_Fromreqdat);
        var date2 = new Date(m_Toreqdat);

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

        $scope.Variables.svGetProcYM1000WPK0_YNTRANSFRM_YM550ViewReq.invoke();
        $scope.Variables.statForBtnQry.dataSet.dataValue = "N";
    };

    $scope.svGetProcYM1000WPK0_YNTRANSFRM_YM550ViewReqonError = function(variable, data) {
        $scope.Variables.statForBtnQry.dataSet.dataValue = "Y";
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
        }
    };

    $scope.svGetProcYM1000WPK0_YNTRANSFRM_YM550ViewReqonSuccess = function(variable, data, options) {
        $scope.Variables.statForBtnQry.dataSet.dataValue = "Y";
    };


    $scope.btnResetClick = function($event, $isolateScope) {
        $scope.Variables.svGetProcYM1000WPK0_YNTRANSFRM_YM550ViewReq.dataSet = null;
    };


    $scope.btnAddReqyrnTrnClick = function($event, $isolateScope) {
        window.open(window.location.origin + window.location.pathname + "#/AddReqYarnTransformation?", "Request for Yarn Transformation");
    };


    $scope.btnCnslReqClick = function($event, $isolateScope) {
        if (!$scope.Widgets.lblVld.caption) {
            $scope.Variables.notifMsg.setMessage("Query a request first.");
            $scope.Variables.notifMsg.notify();
            return false;
        }
        $scope.Variables.svUpdateProcYM1000WPK0_YNTRANSFRM_YM550CnlReq.invoke();
    };


    $scope.svUpdateProcYM1000WPK0_YNTRANSFRM_YM550CnlReqonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
        }
    };

    $scope.svUpdateProcYM1000WPK0_YNTRANSFRM_YM550CnlReqonSuccess = function(variable, data) {
        $scope.Variables.notifMsg.setAlertType("information");
        $scope.Variables.notifMsg.setMessage("Request has been cancelled.");
        $scope.Variables.notifMsg.notify();
        $scope.Widgets.tableViewReq.refreshData();
    };


    $scope.pTrnReqnoChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.pTrnReqno.datavalue = newVal.toUpperCase();
    };


    $scope.pWrhnumChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.pWrhnum.datavalue = newVal.toUpperCase();
    };


    $scope.pSrcYrncodChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.pSrcYrncod.datavalue = newVal.toUpperCase();
    };


    $scope.pDestYrncodChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.pDestYrncod.datavalue = newVal.toUpperCase();
    };


    $scope.pStsChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.pSts.datavalue = newVal.toUpperCase();
    };

}]);


Application.$controller("tableViewReqController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);