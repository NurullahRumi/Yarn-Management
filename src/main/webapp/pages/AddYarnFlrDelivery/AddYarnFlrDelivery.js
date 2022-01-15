Application.$controller("AddYarnFlrDeliveryPageController", ["$scope", function($scope) {
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


    $scope.pOrdnumClick = function($event, $isolateScope) {
        $scope.Widgets.dlgOpnOdrLst.open();
    };


    $scope.btnSavClick = function($event, $isolateScope) {
        var m_Wrhnum = $scope.Widgets.formAddYrnDel.formWidgets.pWrhnum.datavalue;
        var m_Delby = $scope.Widgets.formAddYrnDel.formWidgets.pDelby.datavalue;
        var m_Ordnum = $scope.Widgets.formAddYrnDel.formWidgets.pOrdnum.datavalue;
        var m_Condel = $scope.Widgets.formAddYrnDel.formWidgets.pCondel.datavalue;
        var m_Grosswgt = $scope.Widgets.formAddYrnDel.formWidgets.pGrossWgt.datavalue;

        if (!m_Wrhnum) {
            $scope.Variables.notifMsg.setMessage("Input Warehouse");
            $scope.Variables.notifMsg.notify();
            return false;
        }
        if (!m_Delby) {
            $scope.Variables.notifMsg.setMessage("Input operator");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        if (!m_Ordnum) {
            $scope.Variables.notifMsg.setMessage("Input order no. choose from the table");
            $scope.Variables.notifMsg.notify();
            return false;
        }
        if (!m_Condel) {
            $scope.Variables.notifMsg.setMessage("Input no of cones");
            $scope.Variables.notifMsg.notify();
            return false;
        }
        if (!m_Grosswgt) {
            $scope.Variables.notifMsg.setMessage("Input weight");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        $scope.Variables.svCreateProcYM1000WPK0_DELFLR_YM322AddYrnDel.invoke();
    };


    $scope.svCreateProcYM1000WPK0_DELFLR_YM322AddYrnDelonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            $scope.Widgets.txtUpdRSKUNO.datavalue = null;
        }
    };

    $scope.svCreateProcYM1000WPK0_DELFLR_YM322AddYrnDelonSuccess = function(variable, data) {
        $scope.Variables.notifMsg.setMessage("Del No" + ' ' + $scope.Variables.svCreateProcYM1000WPK0_DELFLR_YM322AddYrnDel.dataSet.ppalnum + ' ' + "is created");
        $scope.Variables.notifMsg.notify();
        $scope.Widgets.formAddYrnDel.reset();
        var utc = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
        $scope.Widgets.formAddYrnDel.formWidgets.pDateDel.datavalue = utc;
    };


    $scope.pCondelChange = function($event, $isolateScope, newVal, oldVal) {
        if ($scope.Widgets.formAddYrnDel.formWidgets.pCondel.datavalue <= 0) {
            $scope.Variables.notifMsg.setMessage("Number of cones must be greater than 0.");
            $scope.Variables.notifMsg.notify();
            $scope.Widgets.formAddYrnDel.formWidgets.pCondel.datavalue = null;
            return false;
        }
        $scope.Widgets.formAddYrnDel.formWidgets.pGrossWgt.datavalue = parseFloat($scope.Widgets.formAddYrnDel.formWidgets.pSTDCONWGT.datavalue * $scope.Widgets.formAddYrnDel.formWidgets.pCondel.datavalue);
    };


    $scope.svGetProcYM1000WPK0_DELFLR_YM322VldtOrdnumonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            $scope.Widgets.formAddYrnDel.formWidgets.pOrdnum.datavalue = null;
        }
    };

    $scope.pOrdnumChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Variables.svGetProcYM1000WPK0_DELFLR_YM322VldtOrdnum.invoke();
    };

}]);


Application.$controller("dlgOpnOdrLstController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.btnsaveOdrLstClick = function($event, $isolateScope) {
            $scope.Widgets.formAddYrnDel.formWidgets.pOrdnum.datavalue = $scope.Widgets.tableOrderList.selecteditem.ordnum;
            $scope.Widgets.formAddYrnDel.formWidgets.pKMCHFLRID.datavalue = $scope.Widgets.tableOrderList.selecteditem.kmchcod;
            $scope.Widgets.formAddYrnDel.formWidgets.pFabseq.datavalue = $scope.Widgets.tableOrderList.selecteditem.fabseq;
            $scope.Widgets.formAddYrnDel.formWidgets.pFabwgt.datavalue = $scope.Widgets.tableOrderList.selecteditem.fabwgt;
            $scope.Widgets.formAddYrnDel.formWidgets.pALCSEQ.datavalue = $scope.Widgets.tableOrderList.selecteditem.alcseq;
            $scope.Widgets.formAddYrnDel.formWidgets.pYRNID.datavalue = $scope.Widgets.tableOrderList.selecteditem.yrnid;
            $scope.Widgets.formAddYrnDel.formWidgets.pYRNCOD.datavalue = $scope.Widgets.tableOrderList.selecteditem.yrncod;
            $scope.Widgets.formAddYrnDel.formWidgets.pREQNUM.datavalue = $scope.Widgets.tableOrderList.selecteditem.reqnum;
            $scope.Widgets.formAddYrnDel.formWidgets.pREQNSEQ.datavalue = $scope.Widgets.tableOrderList.selecteditem.reqnseq;
            $scope.Widgets.dlgOpnOdrLst.close();
        };

    }
]);

Application.$controller("tableOrderListController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);