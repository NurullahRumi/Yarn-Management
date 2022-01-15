Application.$controller("AddReqYarnTransformationPageController", ["$scope", function($scope) {
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
        $scope.Widgets.tableDplyReqno.show = false;
        $scope.Widgets.panelHeader.show = false;
    };


    $scope.svCreateProcYM1000WPK0_YNTRANSFRM_YM550AddReqTrnsonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
        }
    };

    $scope.svCreateProcYM1000WPK0_YNTRANSFRM_YM550AddReqTrnsonSuccess = function(variable, data) {
        $scope.Widgets.tableDplyReqno.show = true;
        $scope.Widgets.panelHeader.show = true;
        $scope.Variables.notifMsg.setAlertType("information");
        $scope.Variables.notifMsg.setMessage("Request No" + "  " + $scope.Variables.svCreateProcYM1000WPK0_YNTRANSFRM_YM550AddReqTrns.dataSet.poutTrnnum + "  " + "is created");
        $scope.Variables.notifMsg.notify();
        $scope.Widgets.formAddReqTrns.formWidgets.pSrcYrncod.datavalue = null;
        $scope.Widgets.formAddReqTrns.formWidgets.pDestYrncod.datavalue = null;
        $scope.Widgets.formAddReqTrns.formWidgets.pPalwgt.datavalue = null;
        $scope.Widgets.formAddReqTrns.formWidgets.pNumpal.datavalue = null;
        $scope.Widgets.formAddReqTrns.formWidgets.pQtyres.datavalue = null;
        $scope.Widgets.formAddReqTrns.formWidgets.pRemarks.datavalue = null;
        $scope.Variables.svGetProcYM1000WPK0_YNTRANSFRM_YM550DplyReqno.invoke({
                "inputFields": {
                    "pReqno": $scope.Variables.svCreateProcYM1000WPK0_YNTRANSFRM_YM550AddReqTrns.dataSet.poutTrnnum
                }
            },
            function(data) {},
            function(error) {
                $scope.Variables.notifMsg.setAlertType("error");
                $scope.Variables.notifMsg.setMessage("Error: " + error);
                $scope.Variables.notifMsg.notify();
            });
        $scope.Widgets.formAddReqTrns.formWidgets.pTrntyp.show = false;
        $scope.Widgets.formAddReqTrns.formWidgets.pWrhnum.show = false;
    };


    $scope.btnSavClick = function($event, $isolateScope) {
        var m_Trntyp = $scope.Widgets.formAddReqTrns.formWidgets.pTrntyp.datavalue;
        var m_Wrhnum = $scope.Widgets.formAddReqTrns.formWidgets.pWrhnum.datavalue;
        var m_SrcYrn = $scope.Widgets.formAddReqTrns.formWidgets.pSrcYrncod.datavalue;
        var m_DestYrn = $scope.Widgets.formAddReqTrns.formWidgets.pDestYrncod.datavalue;
        var m_Qty = $scope.Widgets.formAddReqTrns.formWidgets.pQtyres.datavalue;

        if (!m_Trntyp) {
            $scope.Variables.notifMsg.setMessage("Input Transaction Type");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        if (!m_Wrhnum) {
            $scope.Variables.notifMsg.setMessage("Input Warehouse");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        if (!m_SrcYrn) {
            $scope.Variables.notifMsg.setMessage("Input Src Yarn Code");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        if (!m_DestYrn) {
            $scope.Variables.notifMsg.setMessage("Input Dest Yarn Code");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        if (!m_Qty) {
            $scope.Variables.notifMsg.setMessage("Input Qty");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        $scope.Variables.svCreateProcYM1000WPK0_YNTRANSFRM_YM550AddReqTrns.invoke();
    };


    $scope.svGetProcYM1000WPK0_YNTRANSFRM_YM550VldtSrcYrnonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            $scope.Widgets.formAddReqTrns.formWidgets.pSrcYrncod.datavalue = null;
        }
    };


    $scope.pSrcYrncodChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Variables.svGetProcYM1000WPK0_YNTRANSFRM_YM550VldtSrcYrn.invoke();
    };


    $scope.svGetProcYM1000WPK0_YNTRANSFRM_YM550VldtDestYrnonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            $scope.Widgets.formAddReqTrns.formWidgets.pDestYrncod.datavalue = null;
        }
    };


    $scope.pDestYrncodChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Variables.svGetProcYM1000WPK0_YNTRANSFRM_YM550VldtDestYrn.invoke();
    };

}]);

Application.$controller("tableDplyReqnoController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);