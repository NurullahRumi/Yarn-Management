Application.$controller("YarnReqForInterstoreTransferPageController", ["$scope", function($scope) {
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
        if (!$scope.pageParams.pParam1) {
            return null;
        } else {
            $scope.Variables.svGetProcYM311PK0_REQIST_YM311ViewRequest.invoke();
        }
    };


    $scope.btnQryClick = function($event, $isolateScope) {
        var m_Fromdate = $scope.Widgets.formFilter.formWidgets.pFromDate.datavalue;
        var m_Todate = $scope.Widgets.formFilter.formWidgets.pToDate.datavalue;
        var m_ReqNum = $scope.Widgets.formFilter.formWidgets.pReqNum.datavalue;
        var m_OrdNum = $scope.Widgets.formFilter.formWidgets.pOrdNum.datavalue;
        var m_YrnMixCode = $scope.Widgets.formFilter.formWidgets.pYrnMixCode.datavalue;
        var m_FromWrh = $scope.Widgets.formFilter.formWidgets.pFromWrh.datavalue;
        var m_ToWrh = $scope.Widgets.formFilter.formWidgets.pToWrh.datavalue;

        if (!m_Fromdate && !m_Todate && !m_ReqNum && !m_OrdNum && !m_YrnMixCode && !m_FromWrh && !m_ToWrh) {
            $scope.Variables.notifMsg.setMessage("Input a value.");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        if (!!m_Fromdate) {
            if (!m_Fromdate || !m_Todate) {
                $scope.Variables.notifMsg.setMessage("Input From and To date both");
                $scope.Variables.notifMsg.notify();
                return false;
            }
        }

        if (!!m_Todate) {
            if (!m_Fromdate || !m_Todate) {
                $scope.Variables.notifMsg.setMessage("Input From and To date both");
                $scope.Variables.notifMsg.notify();
                return false;
            }
        }

        var date1 = new Date(m_Fromdate);
        var date2 = new Date(m_Todate);
        var diffDays = (date2 - date1) / 86400000;

        if (diffDays > 370) {
            $scope.Variables.notifMsg.setMessage("Date range has to be within 1 year");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        if (date1 > date2) {
            $scope.Variables.notifMsg.setMessage("From date cannot be greater than To date");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        $scope.Variables.svGetProcYM311PK0_REQIST_YM311ViewRequest.invoke();
        $scope.Variables.statForBtnQry.dataSet.dataValue = "N";
    };

    $scope.svGetProcYM311PK0_REQIST_YM311ViewRequestonError = function(variable, data, options) {
        $scope.Variables.statForBtnQry.dataSet.dataValue = "Y";
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
        }
    };

    $scope.svGetProcYM311PK0_REQIST_YM311ViewRequestonSuccess = function(variable, data, options) {
        $scope.Variables.statForBtnQry.dataSet.dataValue = "Y";
    };


    $scope.btnCslReqClick = function($event, $isolateScope) {
        if (!$scope.Widgets.lblvelidation.caption) {
            $scope.Variables.notifMsg.setMessage("Query First");
            $scope.Variables.notifMsg.notify();
            return false;
        }
        $scope.Widgets.dialogCslReq.open();
    };


    $scope.svCreateProcYM311PK0_REQIST_YM311CxlRequestTransfeonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            return false;
        }
    };

    $scope.svCreateProcYM311PK0_REQIST_YM311CxlRequestTransfeonSuccess = function(variable, data) {
        $scope.Widgets.dialogCslReq.close();
        $scope.Widgets.tableViewRequest.refreshData();
    };


    $scope.btnViewMixClick = function($event, $isolateScope) {
        if (!$scope.Widgets.lblvelidation.caption) {
            $scope.Variables.notifMsg.setMessage("Query First");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        if (!!$scope.Widgets.tableViewRequest.selecteditem.fromwrh) {
            window.open(window.location.origin + window.location.pathname + "#/ViewYarnMixDetails?pParam1=" + $scope.Widgets.tableViewRequest.selecteditem.yrnmixcode + "&pParam2=" + $scope.Widgets.tableViewRequest.selecteditem.fromwrh, "Yarn Mix Details");
        } else {
            window.open(window.location.origin + window.location.pathname + "#/ViewYarnMixDetails?pParam1=" + $scope.Widgets.tableViewRequest.selecteditem.yrnmixcode, "Yarn Mix Details");
        }
    };

}]);

Application.$controller("tableViewRequestController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("dialogCslReqController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;



        $scope.btnCslreqClick = function($event, $isolateScope) {
            $scope.Variables.svCreateProcYM311PK0_REQIST_YM311CxlRequestTransfe.invoke();
        };

    }
]);