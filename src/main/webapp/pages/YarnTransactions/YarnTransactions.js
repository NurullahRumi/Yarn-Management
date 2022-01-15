Application.$controller("YarnTransactionsPageController", ["$scope", function($scope) {
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


    $scope.button3Click = function($event, $isolateScope) {
        if (!$scope.Widgets.formFilter.formWidgets.pYrncod.datavalue) {
            $scope.Variables.notifMsg.setMessage("Input A value");
            $scope.Variables.notifMsg.notify();
            return false;
        }
        $scope.Variables.svProcYM1000PKO_YM122Master.invoke();
        $scope.Variables.statForBtnQry.dataSet.dataValue = "N";
    };


    $scope.svProcYM1000PKO_YM122MasteronError = function(variable, data) {
        $scope.Variables.statForBtnQry.dataSet.dataValue = "Y";
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
        }
    };

    $scope.svProcYM1000PKO_YM122MasteronSuccess = function(variable, data) {
        $scope.Variables.statForBtnQry.dataSet.dataValue = "Y";
    };


    $scope.button1Click = function($event, $isolateScope) {
        $scope.Variables.svProcYM1000PKO_YM122Master.dataSet = null;
        $scope.Variables.svProcYM1000PKO_YM122Detail.dataSet = null;
    };


    $scope.pYrncodChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.pYrncod.datavalue = newVal.toUpperCase();
    };

}]);

Application.$controller("tableDetailController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);