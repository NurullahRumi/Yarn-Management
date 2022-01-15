Application.$controller("AckInterstoreTrsfPageController", ["$scope", function($scope) {
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
        $scope.Variables.svGetYM311PK0_ACKIST_YM313RGTrnNum.invoke();
    };


    $scope.btnAckClick = function($event, $isolateScope) {
        $scope.Variables.svUpdateProcYM311PK0_ACKIST_YM313SaveAck.invoke();
    };


    $scope.svUpdateProcYM311PK0_ACKIST_YM313SaveAckonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            return false;
        }
    };

    $scope.svUpdateProcYM311PK0_ACKIST_YM313SaveAckonSuccess = function(variable, data) {
        $scope.Variables.notifMsg.setMessage("successfully saved");
        $scope.Variables.notifMsg.notify();
    };

}]);