Application.$controller("AddYarnRettoWrhPageController", ["$scope", function($scope) {
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
        $scope.Widgets.tableDplyRetnum.show = false;
    };


    $scope.svCreateProcYM1000WPK0_YNRET_YM160AddYrnRettoWrhonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
        }
    };

    $scope.svCreateProcYM1000WPK0_YNRET_YM160AddYrnRettoWrhonSuccess = function(variable, data) {
        $scope.Widgets.tableDplyRetnum.show = true;
        $scope.Variables.notifMsg.setAlertType("information");
        $scope.Variables.notifMsg.setMessage("Return No" + "  " + $scope.Variables.svCreateProcYM1000WPK0_YNRET_YM160AddYrnRettoWrh.dataSet.poutretnum + "  " + "is created");
        $scope.Variables.notifMsg.notify();
        $scope.Widgets.formAddYarnRettoWrh.formWidgets.pYnretID.datavalue = null;
        $scope.Widgets.formAddYarnRettoWrh.formWidgets.pRetOrdnum.datavalue = null;
        $scope.Widgets.formAddYarnRettoWrh.formWidgets.pRetFabseq.datavalue = null;
        $scope.Widgets.formAddYarnRettoWrh.formWidgets.pRetYrnid.datavalue = null;
        $scope.Widgets.formAddYarnRettoWrh.formWidgets.pRetKmchcod.datavalue = null;
        $scope.Widgets.formAddYarnRettoWrh.formWidgets.pPalletid.datavalue = null;
        $scope.Widgets.formAddYarnRettoWrh.formWidgets.pYrnmixcode.datavalue = null;
        $scope.Widgets.formAddYarnRettoWrh.formWidgets.pNumcar.datavalue = null;
        $scope.Widgets.formAddYarnRettoWrh.formWidgets.pNumcon.datavalue = null;
        $scope.Widgets.formAddYarnRettoWrh.formWidgets.pKgsret.datavalue = null;
        $scope.Widgets.formAddYarnRettoWrh.formWidgets.pRemarks.datavalue = null;

        $scope.Variables.svGetProcYM1000WPK0_YNRET_YM160DplyRetnum.invoke({
                "inputFields": {
                    "pPrgid": $scope.Variables.StatPrgid.dataSet.dataValue,
                    "pRetnum": $scope.Variables.svCreateProcYM1000WPK0_YNRET_YM160AddYrnRettoWrh.dataSet.poutretnum
                }
            },
            function(data) {},
            function(error) {
                $scope.Variables.notifMsg.setAlertType("error");
                $scope.Variables.notifMsg.setMessage("Error: " + error);
                $scope.Variables.notifMsg.notify();
            });

        $scope.Widgets.formAddYarnRettoWrh.formWidgets.pWrhnum.show = false;
    };


    $scope.btnSveRetClick = function($event, $isolateScope) {
        var m_Ynretid = $scope.Widgets.formAddYarnRettoWrh.formWidgets.pYnretID.datavalue;
        var m_Ordnum = $scope.Widgets.formAddYarnRettoWrh.formWidgets.pRetOrdnum.datavalue;
        var m_Wrhnum = $scope.Widgets.formAddYarnRettoWrh.formWidgets.pWrhnum.datavalue;
        var m_Fabseq = $scope.Widgets.formAddYarnRettoWrh.formWidgets.pRetFabseq.datavalue;
        var m_Yrnid = $scope.Widgets.formAddYarnRettoWrh.formWidgets.pRetYrnid.datavalue;
        var m_Kmchcod = $scope.Widgets.formAddYarnRettoWrh.formWidgets.pRetKmchcod.datavalue;
        var m_Palletid = $scope.Widgets.formAddYarnRettoWrh.formWidgets.pPalletid.datavalue;
        var m_Yrnmix = $scope.Widgets.formAddYarnRettoWrh.formWidgets.pYrnmixcode.datavalue;
        var m_Numcar = $scope.Widgets.formAddYarnRettoWrh.formWidgets.pNumcar.datavalue;
        var m_Numcon = $scope.Widgets.formAddYarnRettoWrh.formWidgets.pNumcon.datavalue;
        var m_Kgsret = $scope.Widgets.formAddYarnRettoWrh.formWidgets.pKgsret.datavalue;
        var m_Remarks = $scope.Widgets.formAddYarnRettoWrh.formWidgets.pRemarks.datavalue;

        if (!m_Wrhnum) {
            $scope.Variables.notifMsg.setMessage("Input Warehouse");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        if (!m_Palletid) {
            $scope.Variables.notifMsg.setMessage("Input Palletid");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        if (!m_Yrnmix) {
            $scope.Variables.notifMsg.setMessage("Input Yrnmixcode");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        if (!m_Kgsret) {
            $scope.Variables.notifMsg.setMessage("Input Kgs Ret");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        $scope.Variables.svCreateProcYM1000WPK0_YNRET_YM160AddYrnRettoWrh.invoke();
    };


    $scope.svGetProcYM1000WPK0_YNRET_YM160VldtYNretidonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            $scope.Widgets.formAddYarnRettoWrh.formWidgets.pYnretID.datavalue = null;
        }
    };


    $scope.svGetProcYM1000WPK0_YNRET_YM160VldtRetOrdnumonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            $scope.Widgets.formAddYarnRettoWrh.formWidgets.pRetOrdnum.datavalue = null;
        }
    };


    $scope.svGetProcYM1000WPK0_YNRET_YM160VldtFabseqonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            $scope.Widgets.formAddYarnRettoWrh.formWidgets.pRetFabseq.datavalue = null;
        }
    };


    $scope.svGetProcYM1000WPK0_YNRET_YM160VldtYrnidonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            $scope.Widgets.formAddYarnRettoWrh.formWidgets.pRetYrnid.datavalue = null;
        }
    };


    $scope.svGetProcYM1000WPK0_YNRET_YM160VldtKmchcodonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            $scope.Widgets.formAddYarnRettoWrh.formWidgets.pRetKmchcod.datavalue = null;
        }
    };


    $scope.svGetProcYM1000WPK0_YNRET_YM160VldtPalletidonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            $scope.Widgets.formAddYarnRettoWrh.formWidgets.pPalletid.datavalue = null;
        }
    };


    $scope.svGetProcYM1000WPK0_YNRET_YM160VldtYrnmixonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            $scope.Widgets.formAddYarnRettoWrh.formWidgets.pYrnmixcode.datavalue = null;
        }
    };


    $scope.pYrnmixcodeChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Variables.svGetProcYM1000WPK0_YNRET_YM160VldtYrnmix.invoke();
    };

}]);

Application.$controller("tableDplyRetnumController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);