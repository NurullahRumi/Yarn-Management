Application.$controller("partYrncodesOfYrnMixPageController", ["$scope", function($scope) {
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


    $scope.svGetProcYM1000WPK0_YNTRANSFRM_YM430ViewYrnonBeforeUpdate = function(variable, inputData) {
        if (inputData.pSrcyrnmixcode == '???') {
            if (!$scope.Widgets.tableYrncod.dataset || $scope.Widgets.tableYrncod.dataset.length === 0) {
                return (false);
            }
        }
    };
}]);

Application.$controller("tableYrncodController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);