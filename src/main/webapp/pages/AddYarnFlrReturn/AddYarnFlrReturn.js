Application.$controller("AddYarnFlrReturnPageController", ["$scope", function($scope) {
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
        $scope.Widgets.dialoglistofOrder.open();
    };

    $scope.resetFrom = function($isolateScope) {
        $scope.Widgets.formAddreturn.formWidgets.pWrhnum.datavalue = null;
        $scope.Widgets.formAddreturn.formWidgets.pRetby.datavalue = null;
        $scope.Widgets.formAddreturn.formWidgets.pOrdnum.datavalue = null;
        $scope.Widgets.formAddreturn.formWidgets.pGrosswgt.datavalue = null;
        $scope.Widgets.formAddreturn.formWidgets.pClinam.datavalue = null;
        $scope.Widgets.formAddreturn.formWidgets.pFabseq.datavalue = null;
        $scope.Widgets.formAddreturn.formWidgets.pFabtyp.datavalue = null;
        $scope.Widgets.formAddreturn.formWidgets.pFabdesc.datavalue = null;
        $scope.Widgets.formAddreturn.formWidgets.pFabind.datavalue = null;
        $scope.Widgets.formAddreturn.formWidgets.pFabwgt.datavalue = null;
        $scope.Widgets.formAddreturn.formWidgets.pKMCHFLRID.datavalue = null;
        $scope.Widgets.formAddreturn.formWidgets.pYrncod.datavalue = null;
        $scope.Widgets.formAddreturn.formWidgets.pYrnlot.datavalue = null;
        $scope.Widgets.formAddreturn.formWidgets.pYrncnt.datavalue = null;
        $scope.Widgets.formAddreturn.formWidgets.pYrncps.datavalue = null;
        $scope.Widgets.formAddreturn.formWidgets.pYrnori.datavalue = null;
        $scope.Widgets.formAddreturn.formWidgets.pReqnum.datavalue = null;
        $scope.Widgets.formAddreturn.formWidgets.pReqnseq.datavalue = null;
        $scope.Widgets.formAddreturn.formWidgets.pYrnBalance.datavalue = null;
    };

    $scope.btnSvereturnClick = function($event, $isolateScope) {
        var m_Wrhnum = $scope.Widgets.formAddreturn.formWidgets.pWrhnum.datavalue;
        var m_Retby = $scope.Widgets.formAddreturn.formWidgets.pRetby.datavalue;
        var m_Ordnum = $scope.Widgets.formAddreturn.formWidgets.pOrdnum.datavalue;
        var m_grosswgt = $scope.Widgets.formAddreturn.formWidgets.pGrosswgt.datavalue;

        if (!m_Wrhnum) {
            $scope.Variables.notifMsg.setMessage("Input warehouse");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        if (!m_Retby) {
            $scope.Variables.notifMsg.setMessage("Input operator");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        if (!m_Ordnum) {
            $scope.Variables.notifMsg.setMessage("Input order no. Click on order no to choose from the list.");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        if (!m_grosswgt) {
            $scope.Variables.notifMsg.setMessage("Input weight");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        $scope.Variables.svCreateProcYM1000WPK0_DELFLR_YM323AddReturnYrn.invoke();
    };


    $scope.svCreateProcYM1000WPK0_DELFLR_YM323AddReturnYrnonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
        }
    };

    $scope.svCreateProcYM1000WPK0_DELFLR_YM323AddReturnYrnonSuccess = function(variable, data) {
        debugger;
        $scope.Variables.notifMsg.setMessage("Return No" + ' ' + $scope.Variables.svCreateProcYM1000WPK0_DELFLR_YM323AddReturnYrn.dataSet.poutretnum + ' ' + "is created");
        $scope.Variables.notifMsg.notify();
        $scope.resetFrom($scope);
    };


    $scope.svGetProcYM1000WPK0_DELFLR_YM323VldtOrdnumonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            $scope.Widgets.formAddreturn.formWidgets.pOrdnum.datavalue = null;
        }
    };

    $scope.pOrdnumChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Variables.svGetProcYM1000WPK0_DELFLR_YM323VldtOrdnum.invoke();
    };


    $scope.pGrosswgtChange = function($event, $isolateScope, newVal, oldVal) {
        if (newVal <= 0) {
            $scope.Variables.notifMsg.setMessage("Weight must be greater than 0.");
            $scope.Variables.notifMsg.notify();
            $scope.Widgets.formAddreturn.formWidgets.pGrosswgt.datavalue = null;
            return false;
        }
    };


    $scope.btnResetClick = function($event, $isolateScope) {
        $scope.resetFrom($scope);
    };


    $scope.svGetProcYM1000WPK0_DELFLR_YM323ListofFabseqonSuccess = function(variable, data, options) {
        debugger;
        $scope.Widgets.formAddreturn.formWidgets.pClinam.datavalue = data.pclinam;
        $scope.Widgets.formAddreturn.formWidgets.pFabtyp.datavalue = data.pfabtyp;
        $scope.Widgets.formAddreturn.formWidgets.pFabdesc.datavalue = data.pfabdesc;
        $scope.Widgets.formAddreturn.formWidgets.pFabind.datavalue = data.pfabind;
    };


    $scope.svGetProcYM1000WPK0_DELFLR_YM323NonbaseonSuccess = function(variable, data, options) {
        debugger;
        if (data.poutYrn.length > 0) {
            $scope.Widgets.formAddreturn.formWidgets.pYrnlot.datavalue = data.poutYrn[0].yrnlot;
            $scope.Widgets.formAddreturn.formWidgets.pYrncnt.datavalue = data.poutYrn[0].nyrncnt;
            $scope.Widgets.formAddreturn.formWidgets.pYrncps.datavalue = data.poutYrn[0].nfyrncps;
            $scope.Widgets.formAddreturn.formWidgets.pYrnori.datavalue = data.poutYrn[0].yrnori;
        }
        if (data.poutblnce.length > 0) {
            $scope.Widgets.formAddreturn.formWidgets.pYrnBalance.datavalue = data.poutblnce[0].balance;
        }
    };

}]);


Application.$controller("dialoglistofOrderController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.btnsaveOdrLstClick = function($event, $isolateScope) {
            debugger;
            $scope.Variables.svGetProcYM1000WPK0_DELFLR_YM323ListofFabseq.invoke({
                    "inputFields": {
                        "pOrdnum": $scope.Widgets.tableOrdlist.selecteditem.ordnum,
                        "pFabseq": $scope.Widgets.tableOrdlist.selecteditem.fabseq
                    }
                },
                function(data) {},
                function(error) {
                    $scope.Variables.notifMsg.setAlertType("error");
                    $scope.Variables.notifMsg.setMessage("Error: " + error);
                    $scope.Variables.notifMsg.notify();
                });

            $scope.Variables.svGetProcYM1000WPK0_DELFLR_YM323Nonbase.invoke({
                    "inputFields": {
                        "pYrncod": $scope.Widgets.tableOrdlist.selecteditem.yrncod,
                        "pReqnum": $scope.Widgets.tableOrdlist.selecteditem.reqnum,
                        "pReqnseq": $scope.Widgets.tableOrdlist.selecteditem.reqnseq,
                        "pYrnid": $scope.Widgets.tableOrdlist.selecteditem.yrnid
                    }
                },
                function(data) {},
                function(error) {
                    $scope.Variables.notifMsg.setAlertType("error");
                    $scope.Variables.notifMsg.setMessage("Error: " + error);
                    $scope.Variables.notifMsg.notify();
                }
            );

            $scope.Widgets.formAddreturn.formWidgets.pOrdnum.datavalue = $scope.Widgets.tableOrdlist.selecteditem.ordnum;
            $scope.Widgets.formAddreturn.formWidgets.pFabseq.datavalue = $scope.Widgets.tableOrdlist.selecteditem.fabseq;
            $scope.Widgets.formAddreturn.formWidgets.pFabwgt.datavalue = $scope.Widgets.tableOrdlist.selecteditem.fabwgt;
            $scope.Widgets.formAddreturn.formWidgets.pReqnum.datavalue = $scope.Widgets.tableOrdlist.selecteditem.reqnum;
            $scope.Widgets.formAddreturn.formWidgets.pReqnseq.datavalue = $scope.Widgets.tableOrdlist.selecteditem.reqnseq;
            $scope.Widgets.formAddreturn.formWidgets.pKMCHFLRID.datavalue = $scope.Widgets.tableOrdlist.selecteditem.kmchcod;
            $scope.Widgets.formAddreturn.formWidgets.pYrncod.datavalue = $scope.Widgets.tableOrdlist.selecteditem.yrncod;
            $scope.Widgets.dialoglistofOrder.close();

        };

    }
]);

Application.$controller("tableOrdlistController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);