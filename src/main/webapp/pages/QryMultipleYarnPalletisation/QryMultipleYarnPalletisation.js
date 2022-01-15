Application.$controller("QryMultipleYarnPalletisationPageController", ["$scope", function($scope) {
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


    $scope.svGetProcYM1000WPK0_YNTRANSFRM_YM430SourceonBeforeUpdate = function(variable, inputData) {
        if (inputData.pPalmodnum == '???') {
            if (!$scope.Widgets.tableSource.dataset || $scope.Widgets.tableSource.dataset.length === 0) {
                return (false);
            }
        }
    };


    $scope.btnResetClick = function($event, $isolateScope) {
        $scope.Variables.svGetProcYM1000WPK0_YNTRANSFRM_YM430QryView.dataSet = null;
    };


    $scope.svGetProcYM1000WPK0_YNTRANSFRM_YM430ViewDestonBeforeUpdate = function(variable, inputData) {
        if (inputData.pPalmodnum == '???') {
            if (!$scope.Widgets.tableDest.dataset || $scope.Widgets.tableDest.dataset.length === 0) {
                return (false);
            }
        }
    };


    $scope.svGetProcYM1000WPK0_YNTRANSFRM_YM430DestDelonBeforeUpdate = function(variable, inputData) {
        if (inputData.pPalmodnum == '???') {
            if (!$scope.Widgets.tableDestDel.dataset || $scope.Widgets.tableDestDel.dataset.length === 0) {
                return (false);
            }
        }
    };


    $scope.svGetProcYM1000WPK0_YNTRANSFRM_YM430DestPalonBeforeUpdate = function(variable, inputData) {
        if (inputData.pPalmodnum == '???') {
            if (!$scope.Widgets.tableDestPal.dataset || $scope.Widgets.tableDestPal.dataset.length === 0) {
                return (false);
            }
        }
    };


    $scope.btnQryClick = function($event, $isolateScope) {
        debugger;
        var m_Palmodnum = $scope.Widgets.formFilter.formWidgets.pPalmodnum.datavalue;
        var m_Srcwrhnum = $scope.Widgets.formFilter.formWidgets.pSrcwrhnum.datavalue;

        if (!m_Palmodnum && !m_Srcwrhnum) {
            $scope.Variables.notifMsg.setMessage("Input A value");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        $scope.Variables.svGetProcYM1000WPK0_YNTRANSFRM_YM430QryView.invoke();
        $scope.Variables.statForBtnQry.dataSet.dataValue = "N";
    };

    $scope.svGetProcYM1000WPK0_YNTRANSFRM_YM430QryViewonError = function(variable, data, options) {
        $scope.Variables.statForBtnQry.dataSet.dataValue = "Y";
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
        }
    };


    $scope.svGetProcYM1000WPK0_YNTRANSFRM_YM430QryViewonSuccess = function(variable, data, options) {
        $scope.Variables.statForBtnQry.dataSet.dataValue = "Y";
    };

}]);




Application.$controller("tableSourceController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.vewYrnAction = function(selectedItemData) {
            $scope.Widgets.dialogYrncod.open();
        };

    }
]);

Application.$controller("dialogYrncodController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("tableDestController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("tableDestDelController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("tableDestPalController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);