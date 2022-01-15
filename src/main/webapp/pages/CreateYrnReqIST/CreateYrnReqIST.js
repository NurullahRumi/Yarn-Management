Application.$controller("CreateYrnReqISTPageController", ["$scope", function($scope) {
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
        $scope.Variables.svGetProcYM311PK0_REQIST_YM311RGFromWrh.invoke();
    };


    $scope.svCreateYM311PK0_REQIST_YM311RequestNoonError = function(variable, data) {
        debugger;
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            return false;
        }
    };

    $scope.svCreateYM311PK0_REQIST_YM311RequestNoonSuccess = function(variable, data) {
        debugger;
        $scope.Widgets.txtnewReqNo.datavalue = $scope.Variables.svCreateProcYM311PK0_REQIST_YM311RequestNo.dataSet.poutReqNo;
        $scope.Variables.notifMsg.setMessage("Request No" + " " + $scope.Variables.svCreateProcYM311PK0_REQIST_YM311RequestNo.dataSet.poutReqNo + " " + "is created.");
        $scope.Variables.notifMsg.notify();
        $scope.Widgets.formRequestNo.reset();
    };


    $scope.svGetProcYM311PK0_REQIST_YM311VldtYrnMixCodeonError = function(variable, data) {
        debugger;
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            $scope.Widgets.formRequestNo.formWidgets.pYRNMIXCODE.datavalue = null;
            return false;
        }
    };

    $scope.svGetProcYM311PK0_REQIST_YM311VldtYrnMixCodeonSuccess = function(variable, data, options) {
        debugger;
        $scope.Widgets.formRequestNo.formWidgets.NFCntDes.datavalue = data.poutCnt;
        $scope.Widgets.formRequestNo.formWidgets.NFYrnCps.datavalue = data.poutCps;
    };

    $scope.pPalWgtChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Variables.svGetProcYM311PK0_REQIST_YM311VldtPalWgt.invoke();
    };

    $scope.svGetProcYM311PK0_REQIST_YM311VldtPalWgtonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            return false;
        }
    };

    $scope.svGetProcYM311PK0_REQIST_YM311VldtPalWgtonSuccess = function(variable, data) {};

    $scope.pPALQTYChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Variables.svGetProcYM311PK0_REQIST_YM311VldtPalQty.invoke();
    };

    $scope.svGetProcYM311PK0_REQIST_YM311VldtPalQtyonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            $scope.Widgets.formRequestNo.formWidgets.pPALQTY.datavalue = null;
            return false;
        }

    };

    $scope.pNUMCONChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Variables.svGetProcYM311PK0_REQIST_YM311VldtNumCon.invoke();
    };


    $scope.btnSaveClick = function($event, $isolateScope) {
        debugger;
        if (!$scope.Widgets.formRequestNo.formWidgets.pFromwrh.datavalue || !$scope.Widgets.formRequestNo.formWidgets.pTowrh.datavalue) {
            $scope.Variables.notifMsg.setMessage("Input From/To warehouse");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        if (!$scope.Widgets.formRequestNo.formWidgets.pYRNMIXCODE.datavalue) {
            $scope.Variables.notifMsg.setMessage("Enter Yarn Mix Code");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        if (!$scope.Widgets.formRequestNo.formWidgets.pQTYREQN.datavalue) {
            $scope.Variables.notifMsg.setMessage("Kgs Req must be greater than 0!");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        $scope.Variables.svCreateProcYM311PK0_REQIST_YM311RequestNo.invoke();
    };

    $scope.pREQPALLETIDChange = function($event, $isolateScope, newVal, oldVal) {
        debugger;
        $scope.Variables.svGetProcYM311PK0_REQIST_YM311VldPalletID.invoke();
    };

    $scope.svGetProcYM311PK0_REQIST_YM311VldPalletIDonError = function(variable, data, options) {
        debugger;
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            $scope.Widgets.formRequestNo.formWidgets.pREQPALLETID.datavalue = null;
            return false;
        }
    };

    $scope.svGetProcYM311PK0_REQIST_YM311VldPalletIDonSuccess = function(variable, data, options) {
        debugger;
        if (!!data.poutNumcon && data.poutPalqty && data.pqtyreqn) {
            $scope.Widgets.formRequestNo.formWidgets.pNUMCON.datavalue = data.poutNumcon;
            $scope.Widgets.formRequestNo.formWidgets.pPALQTY.datavalue = data.poutPalqty;
            $scope.Widgets.formRequestNo.formWidgets.pQTYREQN.datavalue = data.pqtyreqn;
            $scope.Widgets.formRequestNo.formWidgets.pNUMCON.disabled = true;
            $scope.Widgets.formRequestNo.formWidgets.pPALQTY.disabled = true;
            $scope.Widgets.formRequestNo.formWidgets.pQTYREQN.disabled = true;
            $scope.Widgets.formRequestNo.formWidgets.pPalWgt.disabled = true;
        } else {
            $scope.Widgets.formRequestNo.formWidgets.pNUMCON.datavalue = null;
            $scope.Widgets.formRequestNo.formWidgets.pPALQTY.datavalue = null;
            $scope.Widgets.formRequestNo.formWidgets.pQTYREQN.datavalue = null;
            $scope.Widgets.formRequestNo.formWidgets.pNUMCON.disabled = false;
            $scope.Widgets.formRequestNo.formWidgets.pPALQTY.disabled = false;
            $scope.Widgets.formRequestNo.formWidgets.pQTYREQN.disabled = false;
            $scope.Widgets.formRequestNo.formWidgets.pPalWgt.disabled = false;
        }
    };


    $scope.svGetProcYM311PK0_REQIST_YM311VldOrdnumonError = function(variable, data, options) {
        debugger;
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            $scope.Widgets.formRequestNo.formWidgets.pORDNUM.datavalue = null;
            return false;
        }
    };

    $scope.svGetProcYM311PK0_REQIST_YM311VldOrdnumonSuccess = function(variable, data, options) {
        debugger;
    };


    $scope.pORDNUMChange = function($event, $isolateScope, newVal, oldVal) {
        debugger;
        $scope.Variables.svGetProcYM311PK0_REQIST_YM311VldOrdnum.invoke();
    };


    $scope.pYRNMIXCODEChange = function($event, $isolateScope, newVal, oldVal) {
        //debugger;
        //$scope.Variables.svGetProcYM311PK0_REQIST_YM311VldtYrnMixCode.invoke();
    };


    $scope.pYRNMIXCODEBlur = function($event, $isolateScope) {
        debugger;
        $scope.Variables.svGetProcYM311PK0_REQIST_YM311VldtYrnMixCode.invoke();
    };


    $scope.btnViewReqClick = function($event, $isolateScope) {
        debugger;
        if (!$scope.Widgets.txtnewReqNo.datavalue) {
            $scope.Variables.notifMsg.setMessage("Create A request first.");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        window.open(window.location.origin + window.location.pathname + "#/YarnReqForInterstoreTransfer?pParam1=" + $scope.Widgets.txtnewReqNo.datavalue, "Yarn Req For Interstore Transfer");
    };

}]);