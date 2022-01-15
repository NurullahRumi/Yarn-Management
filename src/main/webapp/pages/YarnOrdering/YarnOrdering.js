Application.$controller("YarnOrderingPageController", ["$scope", function($scope) {
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
        $scope.Variables.svProcYM4000PK0_YM400RgYrnClr.invoke();
        $scope.Variables.svProcYM4000PK0_YM400RgYrnQlty.invoke();
        $scope.Variables.svProcYM4000PK0_YM400RgSupFreightTerm.invoke();
        $scope.Variables.svProcYM4000PK0_YM400RgSupCcyCod.invoke();
        $scope.Variables.svProcYM4000PK0_YM400RgPriceTyp.invoke();
    };

    $scope.btnQryClick = function($event, $isolateScope) {
        var m_DateFrom = $scope.Widgets.formFilter.formWidgets.pContractdatFrom.datavalue;
        var m_DateTo = $scope.Widgets.formFilter.formWidgets.pContractdatTo.datavalue;
        var m_RyrnOri = $scope.Widgets.formFilter.formWidgets.pRyrnOri.datavalue;
        var m_Ctycod = $scope.Widgets.formFilter.formWidgets.pCtycod.datavalue;
        var m_ContracID = $scope.Widgets.formFilter.formWidgets.pContractID.datavalue;
        var m_ContractNo = $scope.Widgets.formFilter.formWidgets.pContractNO.datavalue;

        if (!m_DateFrom && !m_DateTo && !m_RyrnOri && !m_Ctycod && !m_ContracID && !m_ContractNo) {
            $scope.Variables.notifMsg.setMessage("Input a value");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        if (!!m_DateFrom) {
            if (!m_DateFrom || !m_DateTo) {
                $scope.Variables.notifMsg.setMessage("Input From and To date both");
                $scope.Variables.notifMsg.notify();
                return false;
            }
        } else if (!!m_DateTo) {
            if (!m_DateFrom || !m_DateTo) {
                $scope.Variables.notifMsg.setMessage("Input From and To date both");
                $scope.Variables.notifMsg.notify();
                return false;
            }
        }

        var date1 = new Date(m_DateFrom);
        var date2 = new Date(m_DateTo);

        var diffDays = (date2 - date1) / 86400000;

        if (diffDays > 370) {
            $scope.Variables.notifMsg.setMessage("Date range has to be within 1 year");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        if (date1 > date2) {
            $scope.Variables.notifMsg.setMessage("From date can't be greater than To date");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        $scope.Variables.svProcYM4000PK0_YM400Main.invoke();
        $scope.Variables.statForBtnQry.dataSet.dataValue = "N";
    };

    $scope.svProcYM4000PK0_YM400MainonSuccess = function(variable, data, options) {
        $scope.Variables.statForBtnQry.dataSet.dataValue = "Y";
    };

    $scope.svProcYM4000PK0_YM400MainonError = function(variable, data, options) {
        $scope.Variables.statForBtnQry.dataSet.dataValue = "Y";
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            return false;
        }

    };

    $scope.pRyrnOriChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.pRyrnOri.datavalue = newVal.toUpperCase();
    };


    $scope.pCtycodChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.pCtycod.datavalue = newVal.toUpperCase();
    };

    $scope.pContractNOChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.pContractNO.datavalue = newVal.toUpperCase();
    };

    $scope.btnPacListClick = function($event, $isolateScope) {
        $scope.Widgets.dialogPList.open();
    };


    $scope.btnResetClick = function($event, $isolateScope) {
        $scope.Variables.svProcYM4000PK0_YM400Main.dataSet = null;
        $scope.Variables.svProcYM4000PK0_YM400YNDET.dataSet = null;
    };


    $scope.btnUpdDlgClick = function($event, $isolateScope) {
        if (!$scope.Widgets.lblForvalidation.caption) {
            $scope.Variables.notifMsg.setMessage("Query first");
            $scope.Variables.notifMsg.notify();
            return false;
        }
        $scope.Widgets.dialogUpdMain.open();
        $scope.Variables.svProcYM4000PK0_YM400RgRYRNORI.invoke();
        $scope.Variables.svProcYM4000PK0_YM400RgCONTRACTSTS.invoke();
        $scope.Variables.svProcYM4000PK0_YM400RgCTYCOD.invoke();
        btnMain = 'Update';
    };


    $scope.svProcYM4000PK0_YM400UpdMainonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            return false;
        }
    };


    $scope.svProcYM4000PK0_YM400UpdMainonSuccess = function(variable, data) {
        $scope.Widgets.dialogUpdMain.close();
        $scope.Variables.svProcYM4000PK0_YM400Main.invoke();
    };


    $scope.svProcYM4000PK0_YM400UpdYnDetonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            return false;
        }
    };


    $scope.svProcYM4000PK0_YM400UpdYnDetonSuccess = function(variable, data) {
        $scope.Widgets.tableYNDET.refreshData();
        $scope.Widgets.dialogUpdYNDET.close();
    };


    $scope.svProcYM4000PK0_YM400UpdSubCntonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            return false;
        }
    };


    $scope.svProcYM4000PK0_YM400UpdSubCntonSuccess = function(variable, data) {
        $scope.Widgets.dialogUpdSubCnt.close();
        $scope.Widgets.tableSubCnt.refreshData();
        $scope.Widgets.tableYNDET.refreshData();
    };


    $scope.svProcYM4000PK0_YM400UpdContDetonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            return false;
        }
    };


    $scope.svProcYM4000PK0_YM400UpdContDetonSuccess = function(variable, data) {
        $scope.Widgets.dialogUpdContDet.close();
        $scope.Widgets.tableContdet.refreshData();
    };


    $scope.svProcYM4000PK0_YM400InsMainonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            return false;
        }
    };

    $scope.svProcYM4000PK0_YM400InsMainonSuccess = function(variable, data) {
        $scope.Widgets.formFilter.formWidgets.pContractID.datavalue = $scope.Variables.svProcYM4000PK0_YM400InsMain.dataSet.poutContractid;
        $scope.Variables.svProcYM4000PK0_YM400Main.dataBinding.pContractID = $scope.Variables.svProcYM4000PK0_YM400InsMain.dataSet.poutContractid;
        $scope.Variables.svProcYM4000PK0_YM400Main.invoke();
        $scope.Widgets.dialogUpdMain.close();
        $scope.Variables.svProcYM4000PKO_YM400SUBCNT.dataSet = null;
        $scope.Variables.svProcYM4000PK0_YM400CPSTYP.dataSet = null;
        $scope.Variables.svProcYM4000PK0_YM400FIBRE.dataSet = null;
        $scope.Variables.svProcYM4000PK0_YM400FINISH.dataSet = null;
        $scope.Variables.svProcYM4000PK0_YM400CONTDET.dataSet = null;
        $scope.Variables.notifMsg.setMessage("Contract" + ' ' + $scope.Variables.svProcYM4000PK0_YM400InsMain.dataSet.poutContractid + ' ' + "is created");
        $scope.Variables.notifMsg.notify();
    };


    $scope.btnCrtDlgClick = function($event, $isolateScope) {
        $scope.Variables.svProcYM4000PK0_YM400RgRYRNORI.invoke();
        $scope.Variables.svProcYM4000PK0_YM400RgCTYCOD.invoke();
        $scope.Widgets.dialogUpdMain.open();
        btnMain = 'Others';
    };


    $scope.btnInsYnDetDlgClick = function($event, $isolateScope) {
        if (!$scope.Widgets.lblForvalidation.caption) {
            $scope.Variables.notifMsg.setMessage("Query first");
            $scope.Variables.notifMsg.notify();
            return false;
        }
        $scope.Variables.svProcYM4000PK0_YM400RgPriceTyp.invoke();
        $scope.Widgets.dialogInsYnDet.open();
    };


    $scope.svProcYM4000PK0_YM400InsYnDetonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            return false;
        }
    };

    $scope.svProcYM4000PK0_YM400InsYnDetonSuccess = function(variable, data) {
        $scope.Widgets.dialogInsYnDet.close();
        $scope.Widgets.tableYNDET.refreshData();
    };


    $scope.svProcYM4000PK0_YM400InsSubCntonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            return false;
        }
    };

    $scope.svProcYM4000PK0_YM400InsSubCntonSuccess = function(variable, data) {
        $scope.Widgets.dialogInsSubCnt.close();
        $scope.Widgets.tableSubCnt.refreshData();
        $scope.Widgets.tableYNDET.refreshData();
    };


    $scope.svProcYM4000PK0_Ym400RgShpModonSuccess = function(variable, data) {

        if (!$scope.Widgets.selectUpdSHPMOD.datavalue || $scope.Widgets.selectUpdSHPMOD.datavalue !== 'S') {
            $scope.Widgets.panelHide.show = false;
        } else {
            $scope.Widgets.panelHide.show = true;
        }
    };



    $scope.btnOpndlgInsContDetClick = function($event, $isolateScope) {

        if (!$scope.Widgets.lblForvalidation.caption) {
            $scope.Variables.notifMsg.setMessage("Query first");
            $scope.Variables.notifMsg.notify();
            return false;
        }
        $scope.Widgets.dialogUpdContDet.open();
        btnCondt = 'Others';
    };


    $scope.svProcYM4000PK0_YM400InsContDetonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            return false;
        }
    };

    $scope.svProcYM4000PK0_YM400InsContDetonSuccess = function(variable, data) {
        $scope.Widgets.dialogUpdContDet.close();
        $scope.Widgets.tableContdet.refreshData();
    };


    $scope.svProcYM4000PK0_YM400InsFinishonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            return false;
        }
    };

    $scope.svProcYM4000PK0_YM400InsFinishonSuccess = function(variable, data) {
        $scope.Widgets.dialogUpdFinish.close();
        $scope.Widgets.tableFinish.refreshData();
    };


    $scope.svProcYM4000PK0_YM400DltContDetonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            return false;
        }
    };

    $scope.svProcYM4000PK0_YM400DltContDetonSuccess = function(variable, data) {
        $scope.Widgets.dialogDltContDet.close();
        $scope.Widgets.tableContdet.refreshData();
    };


    $scope.svProcYM4000PK0_YM400DltFinishonSuccess = function(variable, data) {
        $scope.Widgets.dialogDltFinish.close();
        $scope.Widgets.tableFinish.refreshData();
    };


    $scope.svProcYM4000PK0_YM400UpdFibreonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            return false;
        }
    };

    $scope.svProcYM4000PK0_YM400UpdFibreonSuccess = function(variable, data) {
        $scope.Widgets.dialogUpdFibre.close();
        $scope.Widgets.tableFibre.refreshData();
    };


    $scope.svProcYM4000PK0_YM400InsFibreonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            return false;
        }
    };

    $scope.svProcYM4000PK0_YM400InsFibreonSuccess = function(variable, data) {
        $scope.Widgets.dialogUpdFibre.close();
        $scope.Widgets.tableFibre.refreshData();
    };


    $scope.svProcYM4000PK0_YM400DltFibreonSuccess = function(variable, data) {
        $scope.Widgets.dialogDltFibre.close();
        $scope.Widgets.tableFibre.refreshData();
    };



    $scope.svProcYM4000PK0_YM400DltSubCntonSuccess = function(variable, data) {
        $scope.Widgets.dialogDltSubCnt.close();
        $scope.Widgets.tableYNDET.refreshData();
        $scope.Widgets.tableSubCnt.refreshData();
    };


    $scope.svProcYM4000PK0_YM400DltYnDetonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            return false;
        }
    };

    $scope.svProcYM4000PK0_YM400DltYnDetonSuccess = function(variable, data) {
        $scope.Widgets.dialogDltYnDet.close();
        $scope.Widgets.tableYNDET.refreshData();
    };


    $scope.btnDltPfsIDClick = function($event, $isolateScope) {
        if (!$scope.Widgets.lblForvalidation.caption) {
            $scope.Variables.notifMsg.setMessage("Query first");
            $scope.Variables.notifMsg.notify();
            return false;
        }
        $scope.Widgets.dialogDltMain.open();
    };


    $scope.svProcYM4000PK0_YM400DltMainonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            return false;
        }
    };

    $scope.svProcYM4000PK0_YM400DltMainonSuccess = function(variable, data) {
        $scope.Widgets.dialogDltMain.close();
        $scope.Variables.svProcYM4000PK0_YM400Main.invoke();
    };


    $scope.svProcYM4000PK0_YM400UpdCpsTyponSuccess = function(variable, data) {
        $scope.Widgets.dialogUpdCpsTyp.close();
        $scope.Widgets.tableCpsTyp.refreshData();
        $scope.Widgets.tableYNDET.refreshData();
    };


    $scope.svProcYM4000PK0_YM400UpdCpsTyponError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            return false;
        }
    };


    $scope.svUpdateProcYM4000PK0_YM400LnkYrnCodonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            return false;
        }
    };

    $scope.svUpdateProcYM4000PK0_YM400LnkYrnCodonSuccess = function(variable, data) {
        $scope.Widgets.dialogYrnLink.close();
        $scope.Widgets.tableContdet.refreshData();
    };


    $scope.svGetProcYM4000PK0_YM400BtnCrtYrnonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            return false;
        }
    };

    $scope.svGetProcYM4000PK0_YM400BtnCrtYrnonSuccess = function(variable, data) {
        $scope.Variables.svProcYM4000PK0_YM400RGYrnSource.invoke();
        $scope.Variables.svProcYM4000PK0_YM400RGYrnCategory.invoke();
        $scope.Variables.svProcYM4000PK0_YM400RGYrnTyp.invoke();
        $scope.Variables.svProcYM4000PK0_YM400RGRawMat.invoke();
        $scope.Widgets.dialogCrtYrnCod.open();
    };


    $scope.svCreateProcYM4000Pk0_YM400CrtYrnCodonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            return false;
        }
    };

    $scope.svCreateProcYM4000Pk0_YM400CrtYrnCodonSuccess = function(variable, data) {
        $scope.Widgets.dialogCrtYrnCod.close();
        $scope.Widgets.tableContdet.refreshData();
    };


    $scope.svCreateProcYM4000PK0_YM400InsCpsTyponError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            return false;
        }
    };

    $scope.svCreateProcYM4000PK0_YM400InsCpsTyponSuccess = function(variable, data) {
        $scope.Widgets.dialogCpsTyp.close();
        $scope.Widgets.tableYNDET.refreshData();
        $scope.Variables.svProcYM4000PK0_YM400CPSTYP.invoke();
    };


    $scope.panelYrnQltyActionsclick = function($item) {
        if (!$scope.Widgets.lblForvalidation.caption) {
            $scope.Variables.notifMsg.setMessage("Query first");
            $scope.Variables.notifMsg.notify();
            return false;
        }
        $scope.Widgets.dialogUpdYNDET.open();
    };


    $scope.panelFritDelActionsclick = function($item) {
        if (!$scope.Widgets.lblForvalidation.caption) {
            $scope.Variables.notifMsg.setMessage("Query first");
            $scope.Variables.notifMsg.notify();
            return false;
        }
        $scope.Widgets.dialogUpdYNDET.open();
    };


    $scope.panelPriceTypActionsclick = function($item) {

        if (!$scope.Widgets.lblForvalidation.caption) {
            $scope.Variables.notifMsg.setMessage("Query first");
            $scope.Variables.notifMsg.notify();
            return false;
        }
        $scope.Widgets.dialogUpdYNDET.open();
    };


    $scope.panelCifDelActionsclick = function($item) {

        if (!$scope.Widgets.lblForvalidation.caption) {
            $scope.Variables.notifMsg.setMessage("Query first");
            $scope.Variables.notifMsg.notify();
            return false;
        }
        $scope.Widgets.dialogUpdYNDET.open();
    };



    $scope.svProcYM4000PKO_YM400SUBCNTonBeforeUpdate = function(variable, inputData) {
        if (inputData.pContractid == '???') {
            if (!$scope.Widgets.tableSubCnt.dataset || $scope.Widgets.tableSubCnt.dataset.length === 0) {
                return (false);
            }
        }
    };


    $scope.svProcYM4000PK0_YM400YNDETonBeforeUpdate = function(variable, inputData) {
        if (inputData.pContractid == '???') {
            if (!$scope.Widgets.tableYNDET.dataset || $scope.Widgets.tableYNDET.dataset.length === 0) {
                return (false);
            }
        }
    };


    $scope.svProcYM4000PK0_YM400CPSTYPonBeforeUpdate = function(variable, inputData) {
        if (inputData.pContractid == '???') {
            if (!$scope.Widgets.tableCpsTyp.dataset || $scope.Widgets.tableCpsTyp.dataset.length === 0) {
                return (false);
            }
        }
    };


    $scope.svProcYM4000PK0_YM400FIBREonBeforeUpdate = function(variable, inputData) {
        if (inputData.pContractid == '???') {
            if (!$scope.Widgets.tableFibre.dataset || $scope.Widgets.tableFibre.dataset.length === 0) {
                return (false);
            }
        }
    };


    $scope.svProcYM4000PK0_YM400FINISHonBeforeUpdate = function(variable, inputData) {
        if (inputData.pContractid == '???') {
            if (!$scope.Widgets.tableFinish.dataset || $scope.Widgets.tableFinish.dataset.length === 0) {
                return (false);
            }
        }
    };


    $scope.svProcYM4000PK0_YM400CONTDETonBeforeUpdate = function(variable, inputData) {
        if (inputData.pContractid == '???') {
            if (!$scope.Widgets.tableContdet.dataset || $scope.Widgets.tableContdet.dataset.length === 0) {
                return (false);
            }
        }
    };

}]);

Application.$controller("tableYNDETController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.cfUpdYndetAction = function(selectedItemData) {
            $scope.Widgets.dialogUpdYNDET.open();
        };


        $scope.cfDltYndetAction = function(selectedItemData) {
            $scope.Widgets.dialogDltYnDet.open();
        };


        $scope.addCompositionAction = function(selectedItemData) {
            $scope.Widgets.dialogUpdCpsTyp.open();
            $scope.Variables.svGetProcYM4000PK0_YM400RGSubCpsTyp.invoke();
        };


        $scope.addCountAction = function(selectedItemData) {
            $scope.Variables.svProcYM4000PK0_YM400RgSubCntSys.invoke();
            $scope.Variables.svProcYM4000PK0_YM400RgSubCntCps.invoke();
            $scope.Widgets.dialogInsSubCnt.open();
        };

    }
]);

Application.$controller("tableFibreController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.cfUpdFibreAction = function(selectedItemData) {
            $scope.Widgets.dialogUpdFibre.open();
            $scope.Variables.svProcYM4000PK0_YM400RGFibreTyp.invoke();
            btnFibre = 'Update';
        };


        $scope.cfDltFibreAction = function(selectedItemData) {
            $scope.Widgets.dialogDltFibre.open();
        };


        $scope.addNewRowAction = function($event) {
            if (!$scope.Widgets.lblForvalidation.caption) {
                $scope.Variables.notifMsg.setMessage("Query first");
                $scope.Variables.notifMsg.notify();
                return false;
            }
            $scope.Variables.svProcYM4000PK0_YM400RGFibreTyp.invoke();
            $scope.Widgets.dialogUpdFibre.open();
            btnFibre = 'Others';
        };

    }
]);

Application.$controller("tableFinishController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;


        $scope.cfDltFinishAction = function(selectedItemData) {
            $scope.Widgets.dialogDltFinish.open();
        };


        $scope.addNewRowAction = function($event) {
            if (!$scope.Widgets.lblForvalidation.caption) {
                $scope.Variables.notifMsg.setMessage("Query first");
                $scope.Variables.notifMsg.notify();
                return false;
            }
            $scope.Variables.svProcYM4000PK0_YM400RGYrnFinish.invoke();
            $scope.Widgets.dialogUpdFinish.open();
            btnFinish = 'Others';
        };

    }
]);

Application.$controller("dialogPListController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("tableSubCntController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.cfUpdSubCntAction = function(selectedItemData) {

            $scope.Variables.svProcYM4000PK0_YM400RgSubCntSys.invoke();
            $scope.Variables.svProcYM4000PK0_YM400RgSubCntCps.invoke();
            $scope.Widgets.dialogUpdSubCnt.open();
        };

        $scope.cfDltSubCntAction = function(selectedItemData) {
            if (!$scope.Widgets.tableSubCnt.dataset[1]) {
                $scope.Variables.notifMsg.setMessage("Cann't delete all count");
                $scope.Variables.notifMsg.notify();
                return false;
            }
            $scope.Widgets.dialogDltSubCnt.open();
        };


        $scope.addNewRowAction = function($event) {
            $scope.Variables.svProcYM4000PK0_YM400RgSubCntSys.invoke();
            $scope.Variables.svProcYM4000PK0_YM400RgSubCntCps.invoke();
            $scope.Widgets.dialogInsSubCnt.open();
        };

    }
]);

Application.$controller("tableCpsTypController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.addNewRowAction = function($event) {
            $scope.Widgets.dialogUpdCpsTyp.open();
            $scope.Variables.statYrnCpsValues.dataSet = $scope.Variables.svProcYM4000PK0_YM400CPSTYP.dataSet.poutCpstyp;
            $scope.Variables.svGetProcYM4000PK0_YM400RGSubCpsTyp.invoke();
        };

    }
]);

Application.$controller("tableContdetController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;


        $scope.crtYrnCodAction = function(selectedItemData) {
            if (!selectedItemData.manudat) {
                $scope.Variables.notifMsg.setMessage("Enter manufacturing date");
                $scope.Variables.notifMsg.notify();
                return false;
            }
            $scope.Variables.svGetProcYM4000PK0_YM400BtnCrtYrn.invoke(

                {
                    "inputFields": {
                        "pPrgid": $scope.Variables.statPrgid.dataSet.dataValue,
                        "pContractID": selectedItemData.contractid,
                        "pYnItemNo": selectedItemData.ynitemno,
                        "pContaierSeq": selectedItemData.containerSeq
                    }
                },
                function(data) {},
                function(error) {
                    $scope.Variables.notifMsg.setAlertType("error");
                    $scope.Variables.notifMsg.setMessage("Error: " + error);
                    $scope.Variables.notifMsg.notify();
                });
        };


        $scope.updaterowAction = function($event, $rowData) {
            $scope.Widgets.dialogUpdContDet.open();
            btnCondt = 'Update';
        };


        $scope.deleterowAction = function($event, $rowData) {
            $scope.Widgets.dialogDltContDet.open();
        };


        $scope.LnkEstgYrnCodAction = function(selectedItemData) {
            if (!!$scope.Widgets.tableContdet.selecteditem.yrncod) {
                $scope.Variables.notifMsg.setMessage("Yarn code already selected.");
                $scope.Variables.notifMsg.notify();
                return false;
            }
            $scope.Widgets.dialogYrnLink.open();
        };

    }
]);

var btnMain;

Application.$controller("dialogUpdMainController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.btnUpdMainClick = function($event, $isolateScope) {
            if (btnMain == 'Update') {
                $scope.Variables.svProcYM4000PK0_YM400UpdMain.invoke();
            } else {
                $scope.Variables.svProcYM4000PK0_YM400InsMain.invoke();
            }
        };


        $scope.dialogUpdMainOpened = function($event, $isolateScope) {
            if (btnMain == 'Update') {
                $scope.Widgets.lblUpdCONTRACTID.caption = $scope.Widgets.listMain.selecteditem.contractid;
                $scope.Widgets.dateUpdCONTRACTDAT.datavalue = $scope.Widgets.listMain.selecteditem.contractdat;
                $scope.Widgets.selectUpdRYRNORI.datavalue = $scope.Widgets.listMain.selecteditem.ryrnori;
                $scope.Widgets.selectUpdCONTRACTSTS.datavalue = $scope.Widgets.listMain.selecteditem.contractsts;
                $scope.Widgets.txtUpdCONTRACTNO.datavalue = $scope.Widgets.listMain.selecteditem.contractno;
                $scope.Widgets.selectUpdCTYCOD.datavalue = $scope.Widgets.listMain.selecteditem.ctycod;
                $scope.Widgets.txtUpdLCREDITNO.datavalue = $scope.Widgets.listMain.selecteditem.lcreditno;
            } else {
                $scope.Widgets.lblUpdCONTRACTID.caption = undefined;
                $scope.Widgets.dateUpdCONTRACTDAT.datavalue = "";
                $scope.Widgets.selectUpdRYRNORI.datavalue = null;
                $scope.Widgets.selectUpdCONTRACTSTS.datavalue = null;
                $scope.Widgets.selectUpdCONTRACTSTS.show = false;
                $scope.Widgets.label71.show = false;
                $scope.Widgets.lblUpdCONTRACTID.show = false;
                $scope.Widgets.label70_1.show = false;
                $scope.Widgets.txtUpdCONTRACTNO.datavalue = null;
                $scope.Widgets.selectUpdCTYCOD.datavalue = null;
                $scope.Widgets.txtUpdLCREDITNO.datavalue = null;
            }
        };


        $scope.selectUpdRYRNORIBlur = function($event, $isolateScope) {
            cgen.WM.ValidateAutocomplete($scope.Widgets.selectUpdRYRNORI);
        };

    }
]);

Application.$controller("dialogUpdYNDETController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.btnUpdYnDetClick = function($event, $isolateScope) {
            if (!$scope.Widgets.selectUpdPRICETYP.datavalue) {
                $scope.Variables.notifMsg.setMessage("Input the price type");
                $scope.Variables.notifMsg.notify();
                return false;
            }
            $scope.Variables.svProcYM4000PK0_YM400UpdYnDet.invoke();
        };


        $scope.selectUpdYRNCDESBlur = function($event, $isolateScope) {
            cgen.WM.ValidateAutocomplete($scope.Widgets.selectUpdYRNCDES);
        };


        $scope.selectUpdYRNCLRChange = function($event, $isolateScope, newVal, oldVal) {
            $scope.Widgets.selectUpdYRNCDES.datavalue = null;
        };


        $scope.selectUpdYRNQLTYChange = function($event, $isolateScope, newVal, oldVal) {
            $scope.Widgets.selectUpdYRNSUBQLTYA.datavalue = null;
            $scope.Widgets.selectUpdYRNSUBQLTYB.datavalue = null;
            $scope.Widgets.selectUpdYRNSUBQLTYC.datavalue = null;
            $scope.Widgets.selectUpdYRNSUBQLTYD.datavalue = null;
            $scope.Widgets.selectUpdYRNSUBQLTYE.datavalue = null;
        };


        $scope.selectUpdYRNSUBQLTYABlur = function($event, $isolateScope) {
            cgen.WM.ValidateAutocomplete($scope.Widgets.selectUpdYRNSUBQLTYA);
        };


        $scope.selectUpdYRNSUBQLTYBBlur = function($event, $isolateScope) {
            cgen.WM.ValidateAutocomplete($scope.Widgets.selectUpdYRNSUBQLTYB);
        };


        $scope.selectUpdYRNSUBQLTYCBlur = function($event, $isolateScope) {
            cgen.WM.ValidateAutocomplete($scope.Widgets.selectUpdYRNSUBQLTYC);
        };


        $scope.dialogUpdYNDETOpened = function($event, $isolateScope) {
            if ($scope.Widgets.tableSubCnt.dataset.length > 1) {
                $scope.Widgets.txtUpdYRNTEX.show = true;
                $scope.Widgets.label85.show = true;
            } else {
                $scope.Widgets.txtUpdYRNTEX.show = false;
                $scope.Widgets.label85.show = false;
            }
        };

    }
]);

Application.$controller("dialogUpdSubCntController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.btnUpdSubCntClick = function($event, $isolateScope) {
            if (!$scope.Widgets.txtUpdSUBCNT.datavalue) {
                $scope.Variables.notifMsg.setMessage("Enter cnt");
                $scope.Variables.notifMsg.notify();
                return false;
            }
            $scope.Variables.svProcYM4000PK0_YM400UpdSubCnt.invoke();
        };

    }
]);
var btnCondt;

Application.$controller("dialogUpdContDetController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.btnUpdContDetClick = function($event, $isolateScope) {
            if (!$scope.Widgets.selectUpdSHPMOD.datavalue || !$scope.Widgets.txtUpdCONTAINERQTY.datavalue) {
                $scope.Variables.notifMsg.setMessage("Shipmode and # of cntainrs is required");
                $scope.Variables.notifMsg.notify();
                return false;
            }

            if (!!$scope.Widgets.txtUpdCONTAINERQTY.datavalue && $scope.Widgets.txtUpdCONTAINERQTY.datavalue < 1) {
                $scope.Variables.notifMsg.setMessage("Minimum number of containers required is 1!");
                $scope.Variables.notifMsg.notify();
                return false;
            }

            if (btnCondt == 'Update') {
                $scope.Variables.svProcYM4000PK0_YM400UpdContDet.invoke();
            } else {
                $scope.Variables.svProcYM4000PK0_YM400InsContDet.invoke();
            }
        };


        $scope.selectUpdSHPMODChange = function($event, $isolateScope, newVal, oldVal) {
            if (!$scope.Widgets.selectUpdSHPMOD.datavalue || $scope.Widgets.selectUpdSHPMOD.datavalue !== 'S') {
                $scope.Widgets.panelHide.show = false;
            } else {
                $scope.Widgets.panelHide.show = true;
            }
        };


        $scope.dialogUpdContDetOpened = function($event, $isolateScope) {
            if (btnCondt == 'Others') {
                $scope.Widgets.lblUpdContDetContractId.caption = $scope.Widgets.tableYNDET.selecteditem.contractid;
                $scope.Widgets.lblUpdContDetYnItemNo.caption = $scope.Widgets.tableYNDET.selecteditem.ynitemno;
                $scope.Widgets.lblUpdContDetContainerSeq.caption = undefined;
                $scope.Widgets.dateUpdEXPRECDAT.datavalue = "";
                $scope.Widgets.txtUpdPLNKGS.datavalue = null;
                $scope.Widgets.selectUpdSHPMOD.datavalue = null;
                $scope.Widgets.txtUpdCONTAINERQTY.datavalue = null;
                $scope.Widgets.selectCONTAINERTYPE.datavalue = null;
                $scope.Widgets.selectUpdSHIPLINE.datavalue = null;
                $scope.Widgets.txtUpdCONTAINERNUM.datavalue = null;
                $scope.Widgets.txtUpdLADINGBILL.datavalue = null;
                $scope.Widgets.selectUpdVESSNAME.datavalue = null;
                $scope.Widgets.txtUpdVOYAGE.datavalue = null;
                $scope.Widgets.dateUpdEXPDEPARTUREDAT.datavalue = "";
                $scope.Widgets.dateUpdEXPARRIVALDAT.datavalue = "";
                $scope.Widgets.dateUpdACTARRIVALDAT.datavalue = "";
                $scope.Widgets.txtUpdQTYREC.datavalue = null;
                $scope.Widgets.dateUpdMANUDAT.datavalue = "";
                $scope.Widgets.txtUpdRLOTNUM.datavalue = null;
                $scope.Widgets.txtUpdFLRLOTNUM.datavalue = null;
                $scope.Widgets.selectUpdFLRYRNORI.datavalue = null;
                $scope.Widgets.dateUpdLCDat.datavalue = null;
                $scope.Widgets.txtUpdLCNo.datavalue = null;
                $scope.Widgets.selectUpdLCSTS.datavalue = null;
            }
            $scope.Variables.svProcYM4000PK0_Ym400RgShpMod.invoke();
            $scope.Variables.svProcYM4000PK0_YM400RgContainerType.invoke();
            $scope.Variables.svProcYM4000PK0_YM400RgShipLine.invoke();
            $scope.Variables.svProcYM4000PK0_YM400RgVessName.invoke();
            $scope.Variables.svProcYM4000PK0_YM400RgFlrYrnOri.invoke();

        };


        $scope.selectUpdVESSNAMEBlur = function($event, $isolateScope) {
            cgen.WM.ValidateAutocomplete($scope.Widgets.selectUpdVESSNAME);
        };


        $scope.selectUpdFLRYRNORIBlur = function($event, $isolateScope) {
            cgen.WM.ValidateAutocomplete($scope.Widgets.selectUpdFLRYRNORI);
        };

    }
]);

Application.$controller("dialogUpdCpsTypController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
        var i;
        var m_TotString;
        var str;

        $scope.btnUpdCpsTypClick = function($event, $isolateScope) {

            i = 0;
            m_TotString = "";

            for (i = 0; i < $scope.Variables.statYrnCpsValues.dataSet.length; i++) {
                if (!$scope.Variables.statYrnCpsValues.dataSet[i].yrnfrac) {
                    $scope.Variables.notifMsg.setMessage("Input a yarn fraction value");
                    $scope.Variables.notifMsg.notify();
                    return false;
                }

                if (!$scope.Variables.statYrnCpsValues.dataSet[i].subcpstyp) {
                    $scope.Variables.notifMsg.setMessage("Input cps type");
                    $scope.Variables.notifMsg.notify();
                    return false;
                }

                m_TotString = m_TotString + $scope.Variables.statYrnCpsValues.dataSet[i].subcpsseq + ';' + $scope.Variables.statYrnCpsValues.dataSet[i].subcpstyp + ';' + $scope.Variables.statYrnCpsValues.dataSet[i].yrnfrac + ',';

                str = m_TotString;
                str = str.substring(0, str.length - 1);
            }

            $scope.Variables.svProcYM4000PK0_YM400UpdCpsTyp.invoke(

                {
                    "inputFields": {
                        "pPrgid": $scope.Variables.statPrgid.dataSet.dataValue,
                        "pContractID": $scope.Variables.svProcYM4000PK0_YM400YNDET.dataSet.poutYndet[0].contractid,
                        "pYnItemNO": $scope.Variables.svProcYM4000PK0_YM400YNDET.dataSet.poutYndet[0].ynitemno,
                        "pTotString": str
                    }
                },
                function(data) {},
                function(error) {
                    $scope.Variables.notifMsg.setAlertType("error");
                    $scope.Variables.notifMsg.setMessage("Error: " + error);
                    $scope.Variables.notifMsg.notify();
                });

        };


        $scope.TablestatYrnCps1Rowinsert = function($event, $isolateScope, $rowData) {

            i = 0;
            var m_length = $scope.Variables.statYrnCpsValues.dataSet.length - 1;

            $scope.Variables.statYrnCpsValues.dataSet[m_length].contractid = $scope.Widgets.TablestatYrnCps1.dataset[0].contractid;
            $scope.Variables.statYrnCpsValues.dataSet[m_length].ynitemno = $scope.Variables.statYrnCpsValues.dataSet[0].ynitemno;
            $scope.Variables.statYrnCpsValues.dataSet[m_length].subcpsseq = m_length + 1;
            $scope.Variables.statYrnCpsValues.dataSet[m_length].subcpstyp = $rowData.subcpstyp;
            $scope.Variables.statYrnCpsValues.dataSet[m_length].yrnfrac = $rowData.yrnfrac;
        };


        $scope.TablestatYrnCps1Beforerowupdate = function($event, $isolateScope, $rowData) {
            if (!$rowData.yrnfrac) {
                $scope.Variables.notifMsg.setMessage("Input a yarn fraction value");
                $scope.Variables.notifMsg.notify();
                return false;
            }

            if (!$rowData.subcpstyp) {
                $scope.Variables.notifMsg.setMessage("Input cps type");
                $scope.Variables.notifMsg.notify();
                return false;
            }

        };


        $scope.TablestatYrnCps1Beforerowinsert = function($event, $isolateScope, $rowData) {
            if (!$rowData.yrnfrac) {
                $scope.Variables.notifMsg.setMessage("Input a yarn fraction value");
                $scope.Variables.notifMsg.notify();
                return false;
            }

            if (!$rowData.subcpstyp) {
                $scope.Variables.notifMsg.setMessage("Input cps type");
                $scope.Variables.notifMsg.notify();
                return false;
            }

        };


        $scope.btnUpdCpsTypExitClick = function($event, $isolateScope) {
            $scope.Variables.svProcYM4000PK0_YM400CPSTYP.invoke();
        };

    }
]);

Application.$controller("dialogInsYnDetController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.btnInsYnDetClick = function($event, $isolateScope) {

            if (!$scope.Widgets.selectInsPriceTyp.datavalue) {
                $scope.Variables.notifMsg.setMessage("Input the price type");
                $scope.Variables.notifMsg.notify();
                return false;
            }
            $scope.Variables.svProcYM4000PK0_YM400InsYnDet.invoke();
        };


        $scope.selectInsYrnClrChange = function($event, $isolateScope, newVal, oldVal) {
            $scope.Widgets.selectInsYrnCdes.datavalue = null;
        };


        $scope.selectInsYrnCdesBlur = function($event, $isolateScope) {
            cgen.WM.ValidateAutocomplete($scope.Widgets.selectInsYrnCdes);
        };

    }
]);

Application.$controller("dialogInsSubCntController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.btnInsSubCntClick = function($event, $isolateScope) {
            if (!$scope.Widgets.txtInsSUBCNT.datavalue) {
                $scope.Variables.notifMsg.setMessage("Enter Cnt");
                $scope.Variables.notifMsg.notify();
                return false;
            }
            $scope.Variables.svProcYM4000PK0_YM400InsSubCnt.invoke();
        };

    }
]);

var btnFinish;
Application.$controller("dialogUpdFinishController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.btnUpdFinishClick = function($event, $isolateScope) {
            $scope.Variables.svProcYM4000PK0_YM400InsFinish.invoke();
        };


        $scope.dialogUpdFinishOpened = function($event, $isolateScope) {
            if (btnFinish == 'Others') {
                $scope.Widgets.selectUpdYrnFinish.datavalue = null;
                $scope.Widgets.lblFinish.caption = null;
            }
        };

    }
]);

Application.$controller("dialogDltContDetController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.btnDltContDetClick = function($event, $isolateScope) {
            $scope.Variables.svProcYM4000PK0_YM400DltContDet.invoke();
        };

    }
]);

Application.$controller("dialogDltFinishController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.btnDltFinishClick = function($event, $isolateScope) {
            $scope.Variables.svProcYM4000PK0_YM400DltFinish.invoke();
        };

    }
]);
var btnFibre;
Application.$controller("dialogUpdFibreController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.btnUpdFibreClick = function($event, $isolateScope) {
            if (!$scope.Widgets.selectUpdFIBRETYP.datavalue) {
                $scope.Variables.notifMsg.setMessage("Enter fibre type");
                $scope.Variables.notifMsg.notify();
                return false;
            }
            if (btnFibre == 'Update') {
                $scope.Variables.svProcYM4000PK0_YM400UpdFibre.invoke();
            } else {
                $scope.Variables.svProcYM4000PK0_YM400InsFibre.invoke();
            }
        };


        $scope.dialogUpdFibreOpened = function($event, $isolateScope) {
            if (btnFibre == 'Others') {
                $scope.Widgets.selectUpdFIBRETYP.datavalue = null;
                $scope.Widgets.txtUpdFIBREFRAC.datavalue = null;
                $scope.Widgets.lblFibreTyp.caption = null;
            } else {
                $scope.Widgets.selectUpdFIBRETYP.show = false;
                $scope.Widgets.label154.show = false;
            }
        };

    }
]);

Application.$controller("dialogDltFibreController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.btnDltFibreClick = function($event, $isolateScope) {
            $scope.Variables.svProcYM4000PK0_YM400DltFibre.invoke();
        };

    }
]);

Application.$controller("dialogDltSubCntController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.btnDltSubCntClick = function($event, $isolateScope) {
            $scope.Variables.svProcYM4000PK0_YM400DltSubCnt.invoke();
        };

    }
]);

Application.$controller("dialogDltYnDetController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.btnDltYnDetClick = function($event, $isolateScope) {
            $scope.Variables.svProcYM4000PK0_YM400DltYnDet.invoke();
        };

    }
]);

Application.$controller("dialogDltMainController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.btnDltMainClick = function($event, $isolateScope) {
            $scope.Variables.svProcYM4000PK0_YM400DltMain.invoke();
        };

    }
]);

Application.$controller("dialogCrtYrnCodController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.btncrtYrnCod1Click = function($event, $isolateScope) {
            $scope.Variables.svCreateProcYM4000Pk0_YM400CrtYrnCod.invoke();
        };

    }
]);

Application.$controller("dialogYrnLinkController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.btnLnkYrnClick = function($event, $isolateScope) {
            if (!$scope.Widgets.txtYrnCod.datavalue) {
                $scope.Variables.notifMsg.setMessage("Enter yarn code");
                $scope.Variables.notifMsg.notify();
                return false;
            }
            $scope.Variables.svUpdateProcYM4000PK0_YM400LnkYrnCod.invoke();
        };

    }
]);

Application.$controller("statYrnCpsValuesTableController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("statYrnCpsValuesTableController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("TablestatYrnCps1Controller", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.addNewRowAction = function($event) {
            addNewRowAction();
        };


        $scope.deleterowAction = function($event, $rowData) {
            if (!$scope.Variables.statYrnCpsValues.dataSet[1]) {
                $scope.Variables.notifMsg.setMessage("Cann't delete all composition");
                $scope.Variables.notifMsg.notify();
                return false;
            } else {
                $scope.deleteRow();
            }
        };

    }
]);

Application.$controller("dialogCpsTypController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.btnCpsTypClick = function($event, $isolateScope) {
            $scope.Variables.svCreateProcYM4000PK0_YM400InsCpsTyp.invoke();
        };

    }
]);