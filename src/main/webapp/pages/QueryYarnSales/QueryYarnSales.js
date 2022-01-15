Application.$controller("QueryYarnSalesPageController", ["$scope", function($scope) {
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


    $scope.btnResetClick = function($event, $isolateScope) {
        $scope.Variables.svGetYM250PK0_YNSALES_YM340QryYrnSold.dataSet = null;
    };


    $scope.BtnQryClick = function($event, $isolateScope) {
        var m_Delnum = $scope.Widgets.formFilter.formWidgets.pDelnum.datavalue;
        var m_Datesld = $scope.Widgets.formFilter.formWidgets.pDatesld.datavalue;
        var m_Wrhnum = $scope.Widgets.formFilter.formWidgets.pWrhnum.datavalue;
        var m_Buyer = $scope.Widgets.formFilter.formWidgets.pBuyer.datavalue;
        var m_Yrncod = $scope.Widgets.formFilter.formWidgets.pYrncod.datavalue;
        var m_Invnum = $scope.Widgets.formFilter.formWidgets.pInvnum.datavalue;
        var m_PALLETID = $scope.Widgets.formFilter.formWidgets.pPALLETID.datavalue;
        var m_REQNUM = $scope.Widgets.formFilter.formWidgets.pREQNUM.datavalue;

        if (!m_Delnum && !m_Datesld && !m_Wrhnum && !m_Buyer && !m_Yrncod && !m_Invnum && !m_PALLETID && !m_REQNUM) {
            $scope.Variables.notifMsg.setMessage("Input A value first.");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        $scope.Variables.svGetYM250PK0_YNSALES_YM340QryYrnSold.invoke();
        $scope.Variables.statForBtnQry.dataSet.dataValue = "N";
    };


    $scope.svGetYM250PK0_YNSALES_YM340QryYrnSoldonError = function(variable, data, options) {
        $scope.Variables.statForBtnQry.dataSet.dataValue = "Y";
        if (!!data) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
        }
    };

    $scope.svGetYM250PK0_YNSALES_YM340QryYrnSoldonSuccess = function(variable, data, options) {
        $scope.Variables.statForBtnQry.dataSet.dataValue = "Y";
    };

}]);


Application.$controller("tableYrnSalesController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);