Application.$controller("AcknowladgePackingListPageController", ["$scope", function($scope) {
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
        $scope.Variables.svGetProcYM4000PK0_YM400RGWrhNum.invoke();
    };


    $scope.btnQryClick = function($event, $isolateScope) {
        var m_Yrncod = $scope.Widgets.formFilter.formWidgets.pYrnCod.datavalue;
        var m_ContainerNum = $scope.Widgets.formFilter.formWidgets.pContainerNum.datavalue;
        var m_YnItemNo = $scope.Widgets.formFilter.formWidgets.pYnItemNo.datavalue;
        var m_ContainerSeq = $scope.Widgets.formFilter.formWidgets.pContainerSeq.datavalue;
        var m_RLotNum = $scope.Widgets.formFilter.formWidgets.pRLotNum.datavalue;

        if (!m_Yrncod && !m_ContainerNum && !m_YnItemNo && !m_ContainerSeq && !m_RLotNum) {
            $scope.Variables.notifMsg.setMessage("Input A value.");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        if (!!m_YnItemNo || !!m_ContainerSeq) {
            if (!m_Yrncod) {
                $scope.Variables.notifMsg.setMessage("Input Yarncode to query");
                $scope.Variables.notifMsg.notify();
                return false;
            }
        }

        $scope.Variables.svGetProcYM4000PK0_YM410Master.invoke();
        $scope.Variables.statForBtnQry.dataSet.dataValue = "N";
    };

    $scope.svGetProcYM4000PK0_YM410MasteronSuccess = function(variable, data) {
        $scope.Variables.statForBtnQry.dataSet.dataValue = "Y";
    };

    $scope.svGetProcYM4000PK0_YM410MasteronError = function(variable, data, options) {
        $scope.Variables.statForBtnQry.dataSet.dataValue = "Y";
    };


    $scope.btnResetClick = function($event, $isolateScope) {
        $scope.Variables.svGetProcYM4000PK0_YM410Master.dataSet = null;
        $scope.Widgets.lblTotAck.caption = undefined;
        $scope.Widgets.selectWareHouse.datavalue = null;
        $scope.Widgets.dateRec.datavalue = "";
    };


    $scope.btnSaveClick = function($event, $isolateScope) {
        if (!$scope.Widgets.lblVelidateMaster.caption) {
            $scope.Variables.notifMsg.setMessage("Query First");
            $scope.Variables.notifMsg.notify();
            return false;
        }
        if (!$scope.Widgets.selectWareHouse.datavalue) {
            $scope.Variables.notifMsg.setMessage("You Must Enter Warehouse");
            $scope.Variables.notifMsg.notify();
            return false;
        }
        if (!$scope.Widgets.dateRec.datavalue) {
            $scope.Variables.notifMsg.setMessage("You Must Enter Date Received");
            $scope.Variables.notifMsg.notify();
            return false;
        }
        if (!$scope.Widgets.lblVlidateDetail.caption) {
            $scope.Variables.notifMsg.setMessage("No pallets acknowledged ");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        var m_ContractIdVar = "";
        var m_YnItemNoVar = "";
        var m_ContainerSeqVar = "";
        var m_PalletSeqVar = "";
        var m_PalletCatVar = "";
        var m_ConWgtVar = "";
        var m_NumConVar = "";
        var m_ConCarVar = "";
        var m_CarPallVar = "";
        var m_PalletIdVar = "";

        for (var i = 0; i < m_ContractId.length; i++) {
            if (!m_ContractIdVar) {
                m_ContractIdVar = m_ContractId[i];
            } else {
                m_ContractIdVar = m_ContractIdVar + ';' + m_ContractId[i];
            }

            if (!m_YnItemNoVar) {
                m_YnItemNoVar = m_YnItemNo[i];
            } else {
                m_YnItemNoVar = m_YnItemNoVar + ';' + m_YnItemNo[i];
            }
            if (!m_ContainerSeqVar) {
                m_ContainerSeqVar = m_ContainerSeq[i];
            } else {
                m_ContainerSeqVar = m_ContainerSeqVar + ';' + m_ContainerSeq[i];
            }
            if (!m_PalletSeqVar) {
                m_PalletSeqVar = m_PalletSeq[i];
            } else {
                m_PalletSeqVar = m_PalletSeqVar + ';' + m_PalletSeq[i];
            }
            if (!m_PalletCatVar) {
                m_PalletCatVar = m_PalletCat[i];
            } else {
                m_PalletCatVar = m_PalletCatVar + ';' + m_PalletCat[i];
            }
            if (!m_ConWgtVar) {
                m_ConWgtVar = m_ConWgt[i];
            } else {
                m_ConWgtVar = m_ConWgtVar + ';' + m_ConWgt[i];
            }
            if (!m_NumConVar) {
                m_NumConVar = m_NumCon[i];
            } else {
                m_NumConVar = m_NumConVar + ';' + m_NumCon[i];
            }
            if (!m_ConCarVar) {
                m_ConCarVar = m_ConCar[i];
            } else {
                m_ConCarVar = m_ConCarVar + ';' + m_ConCar[i];
            }
            if (!m_CarPallVar) {
                m_CarPallVar = m_CarPall[i];
            } else {
                m_CarPallVar = m_CarPallVar + ';' + m_CarPall[i];
            }
            if (!m_PalletIdVar) {
                m_PalletIdVar = m_PalletId[i];
            } else {
                m_PalletIdVar = m_PalletIdVar + ';' + m_PalletId[i];
            }
        }

        $scope.Variables.svUpdateProcYM4000PK0_YM410AckPallet.invoke(

            {
                "inputFields": {
                    "pPrgid": $scope.Variables.StatPrgid.dataSet.dataValue,
                    "pWrhNum": $scope.Widgets.selectWareHouse.datavalue,
                    "pDateRec": $scope.Widgets.dateRec.datavalue,
                    "pYrnCod": $scope.Widgets.listMaster.dataset[0].yrncod,
                    "pContractid": m_ContractIdVar,
                    "pYnItemNo": m_YnItemNoVar,
                    "pContainerSeq": m_ContainerSeqVar,
                    "pPalletSeq": m_PalletSeqVar,
                    "pPalletCat": m_PalletCatVar,
                    "pConWgt": m_ConWgtVar,
                    "pNumCon": m_NumConVar,
                    "pConcar": m_ConCarVar,
                    "pCarpall": m_CarPallVar,
                    "pPalletId": m_PalletIdVar,
                    "pTotact": $scope.Widgets.lblTotAck.caption
                }
            },
            function(data) {},
            function(error) {
                $scope.Variables.notifMsg.setAlertType("error");
                $scope.Variables.notifMsg.setMessage("Error: " + error);
                $scope.Variables.notifMsg.notify();
            });

    };

    var m_ContractId = [];
    var m_YnItemNo = [];
    var m_ContainerSeq = [];
    var m_PalletSeq = [];
    var m_PalletCat = [];
    var m_ConWgt = [];
    var m_NumCon = [];
    var m_ConCar = [];
    var m_CarPall = [];
    var m_PalletId = [];
    var m_TotAck = 0;

    $scope.tableDetailSelect = function($event, $isolateScope, $rowData) {

        m_ContractId.push($rowData.contractid);
        m_YnItemNo.push($rowData.ynitemno);
        m_ContainerSeq.push($rowData.containerSeq);
        m_PalletSeq.push($rowData.palletSeq);
        m_PalletCat.push($rowData.palletcat);
        m_ConWgt.push($rowData.conwgt);
        m_NumCon.push($rowData.numcones);
        m_ConCar.push($rowData.concar);
        m_CarPall.push($rowData.carpall);
        m_PalletId.push($rowData.palletid);

        m_TotAck = m_TotAck + 1;
        $scope.Widgets.lblTotAck.caption = m_TotAck;
    };


    $scope.tableDetailDeselect = function($event, $isolateScope, $rowData) {

        var index1 = m_ContractId.indexOf($rowData.contractid);
        m_ContractId.splice(index1, 1);

        var index2 = m_YnItemNo.indexOf($rowData.ynitemno);
        m_YnItemNo.splice(index2, 1);

        var index3 = m_ContainerSeq.indexOf($rowData.containerSeq);
        m_ContainerSeq.splice(index3, 1);

        var index4 = m_PalletSeq.indexOf($rowData.palletSeq);
        m_PalletSeq.splice(index4, 1);

        var index5 = m_PalletCat.indexOf($rowData.palletcat);
        m_PalletCat.splice(index5, 1);

        var index6 = m_ConWgt.indexOf($rowData.conwgt);
        m_ConWgt.splice(index6, 1);

        var index7 = m_NumCon.indexOf($rowData.numcones);
        m_NumCon.splice(index7, 1);

        var index8 = m_ConCar.indexOf($rowData.concar);
        m_ConCar.splice(index8, 1);

        var index9 = m_CarPall.indexOf($rowData.carpall);
        m_CarPall.splice(index9, 1);

        var index10 = m_PalletId.indexOf($rowData.palletid);
        m_PalletId.splice(index10, 1);

        m_TotAck = m_TotAck - 1;
        $scope.Widgets.lblTotAck.caption = m_TotAck;
    };


    $scope.svUpdateProcYM4000PK0_YM410AckPalletonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            return false;
        }
    };

    $scope.svUpdateProcYM4000PK0_YM410AckPalletonSuccess = function(variable, data, options) {
        $scope.Variables.notifMsg.setMessage("Number of pallets acknowledged :" + " " + data.packPallet);
        $scope.Variables.notifMsg.notify();
        $scope.Widgets.tableDetail.refreshData();
    };


    $scope.svGetProcYM4000PK0_YM410DetailonBeforeUpdate = function(variable, inputData, options) {
        if (inputData.pContractID == '???') {
            if (!$scope.Widgets.tableDetail.dataset || $scope.Widgets.tableDetail.dataset.length === 0) {
                return (false);
            }
        }
    };

}]);

Application.$controller("tableDetailController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);