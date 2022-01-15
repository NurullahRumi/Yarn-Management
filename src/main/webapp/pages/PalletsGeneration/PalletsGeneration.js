Application.$controller("PalletsGenerationPageController", ["$scope", function($scope) {
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
        $scope.Variables.svGetProcYM4000PK0_YM405PrnDes.invoke();
    };


    $scope.btnQueryClick = function($event, $isolateScope) {
        var m_Yrncod = $scope.Widgets.formFilter.formWidgets.pYrnCod.datavalue;
        var m_Voyage = $scope.Widgets.formFilter.formWidgets.pVoyage.datavalue;
        var m_RLotNum = $scope.Widgets.formFilter.formWidgets.pRLotNum.datavalue;
        var m_VessName = $scope.Widgets.formFilter.formWidgets.pVessName.datavalue;
        var m_ContainerNum = $scope.Widgets.formFilter.formWidgets.pContainerNum.datavalue;

        if (!m_Yrncod && !m_Voyage && !m_RLotNum && !m_VessName && !m_ContainerNum) {
            $scope.Variables.notifMsg.setMessage("Input A value.");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        $scope.Variables.svProcYM4000PK0_YM405Master.invoke();
        $scope.Variables.statForBtnQry.dataSet.dataValue = "N";
    };

    $scope.svProcYM4000PK0_YM405MasteronSuccess = function(variable, data, options) {
        $scope.Variables.statForBtnQry.dataSet.dataValue = "Y";
    };


    $scope.svProcYM4000PK0_YM405MasteronError = function(variable, data, options) {
        $scope.Variables.statForBtnQry.dataSet.dataValue = "Y";
    };

    $scope.btnResetClick = function($event, $isolateScope) {
        $scope.Variables.svProcYM4000PK0_YM405Master.dataSet = null;
        $scope.Variables.svProcYM4000PK0_YM405PList.dataSet = null;
    };


    $scope.svProcYM4000PK0_YM405PListonSuccess = function(variable, data) {};


    $scope.btnGnrtPltClick = function($event, $isolateScope) {
        if (!$scope.Widgets.lblVldTablePList.caption) {
            $scope.Variables.notifMsg.setMessage("Select at least One row to generate");
            $scope.Variables.notifMsg.notify();
            return false;
        }
        $scope.Variables.svCreateProcYM4000PK0_YM405GeneratePallets.invoke(

            {
                "inputFields": {
                    "pPrgid": $scope.Variables.statPrgid.dataSet.dataValue,
                    "pContractId": ContractId,
                    "pYnItemNo": YnItemNo,
                    "pContainerSeq": ContainerSeq,
                    "pPalletSeq": PalletSeq,
                    "pPalletCat": Palletcat
                }
            },
            function(data) {},
            function(error) {
                $scope.Variables.notifMsg.setAlertType("error");
                $scope.Variables.notifMsg.setMessage("Error: " + error);
                $scope.Variables.notifMsg.notify();
            }
        );
    };
    var i;
    var ContractId;
    var YnItemNo;
    var ContainerSeq;
    var PalletSeq;
    var Palletcat;
    var Newpallets;

    $scope.tablePListSelect = function($event, $isolateScope, $rowData) {
        i = 0;
        ContractId = "";
        YnItemNo = "";
        ContainerSeq = "";
        PalletSeq = "";
        Palletcat = "";
        Newpallets = "";

        for (i = 0; i < $scope.Widgets.tablePList.selectedItems.length; i++) {
            ContractId = ContractId + $scope.Widgets.tablePList.selectedItems[i].contractid + ";";
            YnItemNo = YnItemNo + $scope.Widgets.tablePList.selectedItems[i].ynitemno.toString() + ";";
            ContainerSeq = ContainerSeq + $scope.Widgets.tablePList.selectedItems[i].containerSeq.toString() + ";";
            PalletSeq = PalletSeq + $scope.Widgets.tablePList.selectedItems[i].palletSeq.toString() + ";";
            Palletcat = Palletcat + $scope.Widgets.tablePList.selectedItems[i].palletcat + ";";
        }
    };


    $scope.svCreateProcYM4000PK0_YM405GeneratePalletsonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            return false;
        }
    };

    $scope.svCreateProcYM4000PK0_YM405GeneratePalletsonSuccess = function(variable, data, options) {
        $scope.Variables.notifMsg.setMessage("Number of pallets generated :" + " " + data.ptotPalGen);
        $scope.Variables.notifMsg.notify();
        $scope.Variables.svProcYM4000PK0_YM405PList.invoke();
    };


    $scope.pYrnCodChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.pYrnCod.datavalue = newVal.toUpperCase();
    };


    $scope.pVoyageChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.pVoyage.datavalue = newVal.toUpperCase();
    };


    $scope.pRLotNumChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.pRLotNum.datavalue = newVal.toUpperCase();
    };


    $scope.pVessNameChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.pVessName.datavalue = newVal.toUpperCase();
    };


    $scope.pContainerNumChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.pContainerNum.datavalue = newVal.toUpperCase();
    };

}]);

Application.$controller("tablePListController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

    }
]);