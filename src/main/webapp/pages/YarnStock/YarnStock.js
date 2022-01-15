Application.$controller("YarnStockPageController", ["$scope", function($scope) {
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
        $scope.Widgets.panel10.expanded = false;
        $scope.Variables.svProcYM1311PK0_YM100YRNORI.invoke();
        $scope.Variables.svQryYM100_NYRNCLR.invoke();
        $scope.Variables.svQryYM100_SURPLUSCAT.invoke();
        $scope.Variables.svQryYM100_YRNQLTYCARE.invoke();
        $scope.Variables.svQryYM100_NYRNQLTY.invoke();
    };

    $scope.queryActivity = function($isolateScope) {
        $scope.Widgets.formFilter.formWidgets.p_YRNORI.datavalue = null;
        $scope.Variables.svProcYM1311PK0_YM100Master.dataBinding.p_YRNORI = null;
        $scope.Widgets.formFilter.formWidgets.p_YRNLOT.datavalue = null;
        $scope.Variables.svProcYM1311PK0_YM100Master.dataBinding.p_YRNLOT = null;
        $scope.Widgets.formFilter.formWidgets.p_MANUDAT.datavalue = null;
        $scope.Variables.svProcYM1311PK0_YM100Master.dataBinding.p_MANUDAT = null;
        $scope.Widgets.formFilter.formWidgets.p_RYRNORI.datavalue = null;
        $scope.Variables.svProcYM1311PK0_YM100Master.dataBinding.p_RYRNORI = null;
        $scope.Widgets.formFilter.formWidgets.p_RYRNLOT.datavalue = null;
        $scope.Variables.svProcYM1311PK0_YM100Master.dataBinding.p_RYRNLOT = null;
        $scope.Widgets.formFilter.formWidgets.p_YRNSTAT.datavalue = null;
        $scope.Variables.svProcYM1311PK0_YM100Master.dataBinding.p_YRNSTAT = null;
        $scope.Widgets.formFilter.formWidgets.p_NFYRNCPS.datavalue = null;
        $scope.Variables.svProcYM1311PK0_YM100Master.dataBinding.p_NFYRNCPS = null;
        $scope.Widgets.formFilter.formWidgets.p_NYRNCNT.datavalue = null;
        $scope.Variables.svProcYM1311PK0_YM100Master.dataBinding.p_NYRNCNT = null;
        $scope.Widgets.formFilter.formWidgets.p_NYRNTEX.datavalue = null;
        $scope.Variables.svProcYM1311PK0_YM100Master.dataBinding.p_NYRNTEX = null;
        $scope.Widgets.formFilter.formWidgets.p_NFCNTDES.datavalue = null;
        $scope.Variables.svProcYM1311PK0_YM100Master.dataBinding.p_NFCNTDES = null;
        $scope.Widgets.formFilter.formWidgets.p_NYRNQLTY.datavalue = null;
        $scope.Variables.svProcYM1311PK0_YM100Master.dataBinding.p_NYRNQLTY = null;
        $scope.Widgets.formFilter.formWidgets.p_NYRNSUBQLTYA.datavalue = null;
        $scope.Variables.svProcYM1311PK0_YM100Master.dataBinding.p_NYRNSUBQLTYA = null;
        $scope.Widgets.formFilter.formWidgets.p_NYRNSUBQLTYB.datavalue = null;
        $scope.Variables.svProcYM1311PK0_YM100Master.dataBinding.p_NYRNSUBQLTYB = null;
        $scope.Widgets.formFilter.formWidgets.p_NYRNSUBQLTYC.datavalue = null;
        $scope.Variables.svProcYM1311PK0_YM100Master.dataBinding.p_NYRNSUBQLTYC = null;
        $scope.Widgets.formFilter.formWidgets.p_NYRNSUBQLTYD.datavalue = null;
        $scope.Variables.svProcYM1311PK0_YM100Master.dataBinding.p_NYRNSUBQLTYD = null;
        $scope.Widgets.formFilter.formWidgets.p_NYRNSUBQLTYE.datavalue = null;
        $scope.Variables.svProcYM1311PK0_YM100Master.dataBinding.p_NYRNSUBQLTYE = null;
        $scope.Widgets.formFilter.formWidgets.p_NYRNCLR.datavalue = null;
        $scope.Variables.svProcYM1311PK0_YM100Master.dataBinding.p_NYRNCLR = null;
        $scope.Widgets.formFilter.formWidgets.p_NYRNCDES.datavalue = null;
        $scope.Variables.svProcYM1311PK0_YM100Master.dataBinding.p_NYRNCDES = null;
        $scope.Widgets.formFilter.formWidgets.p_CLRREF.datavalue = null;
        $scope.Variables.svProcYM1311PK0_YM100Master.dataBinding.p_CLRREF = null;
        $scope.Widgets.formFilter.formWidgets.p_RSKUNO.datavalue = null;
        $scope.Variables.svProcYM1311PK0_YM100Master.dataBinding.p_RSKUNO = null;
        $scope.Widgets.formFilter.formWidgets.p_RPURCLRSEQ.datavalue = null;
        $scope.Variables.svProcYM1311PK0_YM100Master.dataBinding.p_RPURCLRSEQ = null;
        $scope.Widgets.formFilter.formWidgets.p_BASE_YRNCLR.datavalue = null;
        $scope.Variables.svProcYM1311PK0_YM100Master.dataBinding.p_BASE_YRNCLR = null;
        $scope.Widgets.formFilter.formWidgets.p_BASE_YRNCDES.datavalue = null;
        $scope.Variables.svProcYM1311PK0_YM100Master.dataBinding.p_BASE_YRNCDES = null;
        $scope.Widgets.formFilter.formWidgets.p_BASE_CLRREF.datavalue = null;
        $scope.Variables.svProcYM1311PK0_YM100Master.dataBinding.p_BASE_CLRREF = null;
        $scope.Widgets.formFilter.formWidgets.p_BASE_RSKUNO.datavalue = null;
        $scope.Variables.svProcYM1311PK0_YM100Master.dataBinding.p_BASE_RSKUNO = null;
        $scope.Widgets.formFilter.formWidgets.p_BASE_RPURCLRSEQ.datavalue = null;
        $scope.Variables.svProcYM1311PK0_YM100Master.dataBinding.p_BASE_RPURCLRSEQ = null;
        $scope.Widgets.formFilter.formWidgets.p_SURPLUSCAT.datavalue = null;
        $scope.Variables.svProcYM1311PK0_YM100Master.dataBinding.p_SURPLUSCAT = null;
        $scope.Widgets.formFilter.formWidgets.p_YRNFF.datavalue = null;
        $scope.Variables.svProcYM1311PK0_YM100Master.dataBinding.p_YRNFF = null;
        $scope.Widgets.formFilter.formWidgets.p_MAXYRNFFCOD.datavalue = null;
        $scope.Variables.svProcYM1311PK0_YM100Master.dataBinding.p_MAXYRNFFCOD = null;
        $scope.Widgets.formFilter.formWidgets.p_YRNQLTYCARE.datavalue = null;
        $scope.Variables.svProcYM1311PK0_YM100Master.dataBinding.p_YRNQLTYCARE = null;
    };

    $scope.button6Click = function($event, $isolateScope) {
        $scope.Variables.svProcYM1311PK0_YM100Master.dataSet = null; // to refresh Yarn details 

        var v_Yrncod = $scope.Widgets.formFilter.formWidgets.p_YRNCOD.datavalue;
        var m_Yrnori = !$scope.Widgets.formFilter.formWidgets.p_YRNORI.datavalue ? $scope.Widgets.formFilter.formWidgets.p_YRNORI.query : $scope.Widgets.formFilter.formWidgets.p_YRNORI.datavalue;
        var m_Yrnlot = $scope.Widgets.formFilter.formWidgets.p_YRNLOT.datavalue;
        var m_ManuDat = $scope.Widgets.formFilter.formWidgets.p_MANUDAT.datavalue;
        var m_RYrnori = !$scope.Widgets.formFilter.formWidgets.p_RYRNORI.datavalue ? $scope.Widgets.formFilter.formWidgets.p_RYRNORI.query : $scope.Widgets.formFilter.formWidgets.p_RYRNORI.datavalue;
        var m_RYrnlot = $scope.Widgets.formFilter.formWidgets.p_RYRNLOT.datavalue;
        var m_Yrnstat = $scope.Widgets.formFilter.formWidgets.p_YRNSTAT.datavalue;
        var m_NfYrncps = $scope.Widgets.formFilter.formWidgets.p_NFYRNCPS.datavalue;
        var m_NYrncnt = $scope.Widgets.formFilter.formWidgets.p_NYRNCNT.datavalue;
        var m_NYrntex = $scope.Widgets.formFilter.formWidgets.p_NYRNTEX.datavalue;
        var m_NfCntDes = $scope.Widgets.formFilter.formWidgets.p_NFCNTDES.datavalue;
        var m_NYrnQlty = !$scope.Widgets.formFilter.formWidgets.p_NYRNQLTY.datavalue ? $scope.Widgets.formFilter.formWidgets.p_NYRNQLTY.query : $scope.Widgets.formFilter.formWidgets.p_NYRNQLTY.datavalue;
        var m_NYrnsubQltyA = !$scope.Widgets.formFilter.formWidgets.p_NYRNSUBQLTYA.datavalue ? $scope.Widgets.formFilter.formWidgets.p_NYRNSUBQLTYA.query : $scope.Widgets.formFilter.formWidgets.p_NYRNSUBQLTYA.datavalue;
        var m_NYrnsubQltyB = !$scope.Widgets.formFilter.formWidgets.p_NYRNSUBQLTYB.datavalue ? $scope.Widgets.formFilter.formWidgets.p_NYRNSUBQLTYB.query : $scope.Widgets.formFilter.formWidgets.p_NYRNSUBQLTYB.datavalue;
        var m_NYrnsubQltyC = !$scope.Widgets.formFilter.formWidgets.p_NYRNSUBQLTYC.datavalue ? $scope.Widgets.formFilter.formWidgets.p_NYRNSUBQLTYC.query : $scope.Widgets.formFilter.formWidgets.p_NYRNSUBQLTYC.datavalue;
        var m_NYrnsubQltyD = !$scope.Widgets.formFilter.formWidgets.p_NYRNSUBQLTYD.datavalue ? $scope.Widgets.formFilter.formWidgets.p_NYRNSUBQLTYD.query : $scope.Widgets.formFilter.formWidgets.p_NYRNSUBQLTYD.datavalue;
        var m_NYrnsubQltyE = !$scope.Widgets.formFilter.formWidgets.p_NYRNSUBQLTYE.datavalue ? $scope.Widgets.formFilter.formWidgets.p_NYRNSUBQLTYD.query : $scope.Widgets.formFilter.formWidgets.p_NYRNSUBQLTYD.datavalue;
        var m_NYrnClr = !$scope.Widgets.formFilter.formWidgets.p_NYRNCLR.datavalue ? $scope.Widgets.formFilter.formWidgets.p_NYRNCLR.query : $scope.Widgets.formFilter.formWidgets.p_NYRNCLR.datavalue;
        var m_NYrnCdes = !$scope.Widgets.formFilter.formWidgets.p_NYRNCDES.datavalue ? $scope.Widgets.formFilter.formWidgets.p_NYRNCDES.query : $scope.Widgets.formFilter.formWidgets.p_NYRNCDES.datavalue;
        var m_Clrref = $scope.Widgets.formFilter.formWidgets.p_CLRREF.datavalue;
        var m_RskuNo = $scope.Widgets.formFilter.formWidgets.p_RSKUNO.datavalue;
        var m_RpurClrSeq = $scope.Widgets.formFilter.formWidgets.p_RPURCLRSEQ.datavalue;
        var m_Base_YrnClr = !$scope.Widgets.formFilter.formWidgets.p_BASE_YRNCLR.datavalue ? $scope.Widgets.formFilter.formWidgets.p_BASE_YRNCLR.query : $scope.Widgets.formFilter.formWidgets.p_BASE_YRNCLR.datavalue;
        var m_Base_Yrn_Cdes = !$scope.Widgets.formFilter.formWidgets.p_BASE_YRNCDES.datavalue ? $scope.Widgets.formFilter.formWidgets.p_BASE_YRNCDES.query : $scope.Widgets.formFilter.formWidgets.p_BASE_YRNCDES.datavalue;
        var m_Base_ClrRef = $scope.Widgets.formFilter.formWidgets.p_BASE_CLRREF.datavalue;
        var m_Base_RSkuNo = $scope.Widgets.formFilter.formWidgets.p_BASE_RSKUNO.datavalue;
        var m_Base_RpurClrSeq = $scope.Widgets.formFilter.formWidgets.p_BASE_RPURCLRSEQ.datavalue;
        var m_Base_SurPlusCat = $scope.Widgets.formFilter.formWidgets.p_SURPLUSCAT.datavalue;
        var m_YrnFF = $scope.Widgets.formFilter.formWidgets.p_YRNFF.datavalue;
        var m_MaxYrnFFCod = $scope.Widgets.formFilter.formWidgets.p_MAXYRNFFCOD.datavalue;
        var m_YrnQltyCare = $scope.Widgets.formFilter.formWidgets.p_YRNQLTYCARE.datavalue;

        if (!v_Yrncod && !m_Yrnori && !m_Yrnlot && !m_ManuDat && !m_RYrnori && !m_RYrnlot && !m_Yrnstat && !m_NfYrncps && !m_NYrncnt && !m_NYrntex && !m_NfCntDes && !m_NYrnQlty && !m_NYrnsubQltyA && !m_NYrnsubQltyB && !m_NYrnsubQltyC && !m_NYrnsubQltyD && !m_NYrnsubQltyE && !m_NYrnClr && !m_NYrnCdes && !m_Clrref && !m_RskuNo && !m_RpurClrSeq && !m_Base_YrnClr && !m_Base_Yrn_Cdes && !m_Base_ClrRef && !m_Base_RSkuNo && !m_Base_RpurClrSeq && !m_Base_SurPlusCat && !m_YrnFF && !m_MaxYrnFFCod && !m_YrnQltyCare) {
            $scope.Variables.notifMsg.setMessage("Input value to query");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        if (m_Yrnstat == "ALL") {
            if (!v_Yrncod && !m_Yrnori && !m_Yrnlot && !m_ManuDat && !m_RYrnori && !m_RYrnlot && !m_NfYrncps && !m_NYrncnt && !m_NYrntex && !m_NfCntDes && !m_NYrnQlty && !m_NYrnsubQltyA && !m_NYrnsubQltyB && !m_NYrnsubQltyC && !m_NYrnsubQltyD && !m_NYrnsubQltyE && !m_NYrnClr && !m_NYrnCdes && !m_Clrref && !m_RskuNo && !m_RpurClrSeq && !m_Base_YrnClr && !m_Base_Yrn_Cdes && !m_Base_ClrRef && !m_Base_RSkuNo && !m_Base_RpurClrSeq && !m_Base_SurPlusCat && !m_YrnFF && !m_MaxYrnFFCod && !m_YrnQltyCare) {
                $scope.Variables.notifMsg.setMessage("Input Another field to filter.");
                $scope.Variables.notifMsg.notify();
                return false;
            }
        }

        $scope.Variables.svProcYM1311PK0_YM100Master.invoke();
        $scope.Variables.statForBtnQry.dataSet.dataValue = "N";
    };

    $scope.svProcYM1311PK0_YM100MasteronSuccess = function(variable, data, options) {
        $scope.Variables.statForBtnQry.dataSet.dataValue = "Y";
        if (data.poutYm100master.length <= 0) {
            $scope.Widgets.panel6.expanded = true;
            $scope.Widgets.panel10.expanded = false;
            $scope.Variables.notifMsg.setMessage("No record.");
            $scope.Variables.notifMsg.notify();
            return false;
        } else {
            $scope.Widgets.panel6.expanded = false;
            $scope.Widgets.panel10.expanded = true;
        }
    };

    $scope.button4_1Click = function($event, $isolateScope) {
        if (!$scope.Widgets.lblInputYarnCode.caption) {
            $scope.Variables.notifMsg.setMessage("Query first");
            $scope.Variables.notifMsg.notify();
            return false;
        }
        $scope.Widgets.dialogStdPalletWgt.open();
    };


    $scope.svProcYM1311PK0_YM100UpdCARWGTonSuccess = function(variable, data) {
        $scope.Widgets.dialogStdPalletWgt.close();
        $scope.Variables.svGetProcYM1311PK0_YM100MiscInfo.invoke();
    };


    $scope.button17Click = function($event, $isolateScope) {
        if (!$scope.Widgets.lblInputYarnCode.caption) {
            $scope.Variables.notifMsg.setMessage("Query first");
            $scope.Variables.notifMsg.notify();
            return false;
        }
        $scope.Widgets.dialogUpdMaster.open();
    };


    $scope.svProcYM1311PK0_YM100RSKUNOonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            $scope.Widgets.txtUpdRSKUNO.datavalue = null;
        }
    };


    $scope.svProcYM1311PK0_YM100UpdMasteronSuccess = function(variable, data) {
        $scope.Widgets.dialogUpdMaster.close();
        $scope.Variables.svProcYM1311PK0_YM100Master.invoke();
    };


    $scope.svProcYM1311PK0_YM100NYRNCDESonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            $scope.Widgets.txtUpdNYRNCDES.datavalue = null;
        }
    };

    $scope.svProcYM1311PK0_YM100UpdCPSTYPonSuccess = function(variable, data) {
        $scope.Widgets.dialogUpdCPSTYP.close();
        $scope.Widgets.gridCPSTYP.refreshData();
        $scope.Variables.svProcYM1311PK0_YM100Master.invoke();
    };

    $scope.svProcYM1311PK0_YM100UpdSUBCNTonSuccess = function(variable, data) {
        $scope.Widgets.dialogUpdSUBCNT.close();
        $scope.Widgets.gridSUBCNT.refreshData();
        $scope.Variables.svProcYM1311PK0_YM100Master.invoke();
    };


    $scope.svProcYM1311PK0_YM100UpdFIBREonSuccess = function(variable, data) {
        $scope.Widgets.dialogUpdFIBRE.close();
        $scope.Variables.svProcYM1311PK0_YM100Master.invoke();
        $scope.Widgets.gridFIBRE.refreshData();
    };


    $scope.p_YRNCODChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.p_YRNCOD.datavalue = newVal.toUpperCase();
    };


    $scope.p_YRNLOTChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.p_YRNLOT.datavalue = newVal.toUpperCase();
    };


    $scope.p_RYRNLOTChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.p_RYRNLOT.datavalue = newVal.toUpperCase();
    };


    $scope.p_YRNSTATChange = function($event, $isolateScope, newVal, oldVal) {};


    $scope.p_NFYRNCPSChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.p_NFYRNCPS.datavalue = newVal.toUpperCase();
    };


    $scope.p_NYRNCNTChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.p_NYRNCNT.datavalue = newVal.toUpperCase();
    };


    $scope.p_NFCNTDESChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.p_NFCNTDES.datavalue = newVal.toUpperCase();
    };


    $scope.p_NYRNQLTYChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.p_NYRNQLTY.datavalue = newVal.toUpperCase();
    };


    $scope.p_NYRNSUBQLTYAChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.p_NYRNSUBQLTYA.datavalue = newVal.toUpperCase();
    };


    $scope.p_NYRNSUBQLTYBChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.p_NYRNSUBQLTYB.datavalue = newVal.toUpperCase();
    };


    $scope.p_NYRNSUBQLTYCChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.p_NYRNSUBQLTYC.datavalue = newVal.toUpperCase();
    };


    $scope.p_NYRNSUBQLTYDChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.p_NYRNSUBQLTYD.datavalue = newVal.toUpperCase();
    };


    $scope.p_NYRNSUBQLTYEChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.p_NYRNSUBQLTYE.datavalue = newVal.toUpperCase();
    };


    $scope.p_NYRNCLRChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.p_NYRNCLR.datavalue = newVal.toUpperCase();
    };


    $scope.p_NYRNCDESChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.p_NYRNCDES.datavalue = newVal.toUpperCase();
    };


    $scope.p_CLRREFChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.p_CLRREF.datavalue = newVal.toUpperCase();
    };


    $scope.p_RSKUNOChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.p_RSKUNO.datavalue = newVal.toUpperCase();
    };


    $scope.p_BASE_YRNCLRChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.p_BASE_YRNCLR.datavalue = newVal.toUpperCase();
    };


    $scope.p_BASE_YRNCDESChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.p_BASE_YRNCDES.datavalue = newVal.toUpperCase();
    };


    $scope.p_BASE_CLRREFChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.p_BASE_CLRREF.datavalue = newVal.toUpperCase();
    };


    $scope.p_BASE_RSKUNOChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.p_BASE_RSKUNO.datavalue = newVal.toUpperCase();
    };


    $scope.p_SURPLUSCATChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.p_SURPLUSCAT.datavalue = newVal.toUpperCase();
    };


    $scope.p_YRNFFChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.p_YRNFF.datavalue = newVal.toUpperCase();
    };


    $scope.p_MAXYRNFFCODChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.p_MAXYRNFFCOD.datavalue = newVal.toUpperCase();
    };


    $scope.p_YRNQLTYCAREChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.p_YRNQLTYCARE.datavalue = newVal.toUpperCase();
    };


    $scope.p_REMARKChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.p_REMARK.datavalue = newVal.toUpperCase();
    };


    $scope.button31Click = function($event, $isolateScope) {
        if (!$scope.Widgets.lblInputYarnCode.caption) {
            $scope.Variables.notifMsg.setMessage("Query first");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        if ($scope.Variables.svGetProcYM1311PK0_Yrntextfld.dataSet.poutSts == "N") {
            $scope.Variables.notifMsg.setMessage("Warning: Yarn already in use in knt150. Support mode switched on");
            $scope.Variables.notifMsg.notify();
            return false;
        }
        $scope.Variables.svProcYM1311PK0_YM100SUBCNTCPS.invoke();
        $scope.Variables.svProcYM1311PK0_YM100SUBCNTSYS.invoke();
        $scope.Widgets.dialogInsSUBCNT.open();
    };


    $scope.svProcYM1311PK0_YM100InsSUBCNTonSuccess = function(variable, data) {
        $scope.Widgets.gridSUBCNT.refreshData();
        $scope.Widgets.dialogInsSUBCNT.close();
        $scope.Variables.svProcYM1311PK0_YM100Master.invoke();
    };

    $scope.svProcYM1311PK0_YM100DltSUBCNTonError = function(variable, data, options) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            return false;
        }
    };


    $scope.svProcYM1311PK0_YM100DltSUBCNTonSuccess = function(variable, data) {
        $scope.Widgets.gridSUBCNT.refreshData();
        $scope.Widgets.dialogDltSUBCNT.close();
        $scope.Variables.svProcYM1311PK0_YM100Master.invoke();
    };


    $scope.button47_1Click = function($event, $isolateScope) {
        $scope.Widgets.dialogInsMASTER.open();
    };


    $scope.svProcYM1311PKO_YM100InsMASTERonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            return false;
        }
    };


    $scope.svProcYM1311PKO_YM100InsMASTERonSuccess = function(variable, data) {
        $scope.Widgets.dialogInsMASTER.close();
        $scope.Widgets.formFilter.reset();
        $scope.Variables.svProcYM1311PK0_YM100Master.dataBinding.pYRNCOD = $scope.Variables.svProcYM1311PKO_YM100InsMASTER.dataSet.poutYrncod;
        $scope.Variables.svProcYM1311PK0_YM100Master.invoke();
        $scope.Variables.notifMsg.setAlertType("information");
        $scope.Variables.notifMsg.setMessage("Yarn code" + ' ' + $scope.Variables.svProcYM1311PKO_YM100InsMASTER.dataSet.poutYrncod + ' ' + "is generated. Add Yarn Composition,Count,Quality,Colour to proceed further");
        $scope.Variables.notifMsg.notify();
    };


    $scope.button48Click = function($event, $isolateScope) {
        if (!$scope.Widgets.lblInputYarnCode.caption) {
            $scope.Variables.notifMsg.setMessage("Query first");
            $scope.Variables.notifMsg.notify();
            return false;
        }
        if (!$scope.Widgets.gridCPSTYP.dataset[0]) {
            $scope.Variables.notifMsg.setMessage("Add yarn composition for this yarn code.");
            $scope.Variables.notifMsg.notify();
            return false;
        }
        if (!$scope.Widgets.gridSUBCNT.dataset[0]) {
            $scope.Variables.notifMsg.setMessage("Add yarn count for this yarn code.");
            $scope.Variables.notifMsg.notify();
            return false;
        }
        if (!$scope.Widgets.lblNYRNQLTY.caption) {
            $scope.Variables.notifMsg.setMessage("Add yarn quality for this yarn code.");
            $scope.Variables.notifMsg.notify();
            return false;
        }
        if (!$scope.Widgets.lblpreNYRNCLR.caption || !$scope.Widgets.lblpreNYRNCDES.caption) {
            $scope.Variables.notifMsg.setMessage("Add yarn colour for this yarn code.");
            $scope.Variables.notifMsg.notify();
            return false;
        }
        if ($scope.Variables.svGetProcYM1311PK0_Yrntextfld.dataSet.poutSts == "N") {
            $scope.Variables.notifMsg.setMessage("Warning: Yarn already in use in knt150. Support mode switched on");
            $scope.Variables.notifMsg.notify();
            return false;
        }
        $scope.Widgets.dialogRelYrncod.open();
    };


    $scope.svProcYM1311PKO_YM100relYrnCodonSuccess = function(variable, data) {
        $scope.Widgets.dialogRelYrncod.close();
        $scope.Variables.svProcYM1311PK0_YM100Master.invoke();
    };


    $scope.svProcYM1311PKO_YM100relYrnCodonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            return false;
        }
    };


    $scope.svProcYM1311PKO_YM100rejYrnCodonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            return false;
        }
    };


    $scope.svProcYM1311PKO_YM100rejYrnCodonSuccess = function(variable, data) {
        $scope.Widgets.dialogRejYrncod.close();
        $scope.Variables.svProcYM1311PK0_YM100Master.invoke();
    };


    $scope.button13Click = function($event, $isolateScope) {
        if ($scope.Widgets.lblStatus.caption == "R") {
            $scope.Variables.notifMsg.setMessage("Yarn already rejected.");
            $scope.Variables.notifMsg.notify();
            return false;
        }
        if ($scope.Widgets.lblStatus.caption !== "A" && $scope.Widgets.lblStatus.caption !== "U") {
            $scope.Variables.notifMsg.setMessage("Yarn cannot be rejected.");
            $scope.Variables.notifMsg.notify();
            return false;
        }
        if (!$scope.Widgets.lblInputYarnCode.caption) {
            $scope.Variables.notifMsg.setMessage("Query first");
            $scope.Variables.notifMsg.notify();
            return false;
        }
        $scope.Widgets.dialogRejYrncod.open();
    };


    $scope.button8Click = function($event, $isolateScope) {
        if (!$scope.Widgets.lblInputYarnCode.caption) {
            $scope.Variables.notifMsg.setMessage("Query first");
            $scope.Variables.notifMsg.notify();
            return false;
        }
        $scope.Widgets.dialogHUYarn.open();
    };


    $scope.svProcYM1311PKO_YM100holdYrnCodonSuccess = function(variable, data) {
        $scope.Variables.svProcYM1311PK0_YM100Master.invoke();
        $scope.Widgets.dialogHUYarn.close();
    };


    $scope.svProcYM1311PKO_YM100holdYrnCodonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            return false;
        }
    };


    $scope.button11Click = function($event, $isolateScope) {
        if (!$scope.Widgets.lblInputYarnCode.caption) {
            $scope.Variables.notifMsg.setMessage("Query first");
            $scope.Variables.notifMsg.notify();
            return false;
        }
        $scope.Widgets.dialogactYrnCod.open();
    };


    $scope.svProcYM1311PKO_YM100actYrnCodonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            return false;
        }
    };


    $scope.svProcYM1311PKO_YM100actYrnCodonSuccess = function(variable, data) {
        $scope.Widgets.dialogactYrnCod.close();
        $scope.Variables.svProcYM1311PK0_YM100Master.invoke();
    };


    $scope.button10Click = function($event, $isolateScope) {
        if (!$scope.Widgets.lblInputYarnCode.caption) {
            $scope.Variables.notifMsg.setMessage("Query first");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        $scope.Widgets.dialogCOPYYARN.open();
    };


    $scope.svProcYM1311PKO_YM100COPYYARNonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            return false;
        }
    };

    $scope.svProcYM1311PKO_YM100COPYYARNonSuccess = function(variable, data) {
        $scope.Widgets.dialogCOPYYARN.close();
        $scope.Variables.notifMsg.setMessage("New Yarn Code" + ' ' + $scope.Variables.svProcYM1311PKO_YM100COPYYARN.dataSet.poutcopyyrncod + ' ' + " successfully created.");
        $scope.Variables.notifMsg.notify();
        $scope.Widgets.formFilter.formWidgets.p_YRNCOD.datavalue = $scope.Variables.svProcYM1311PKO_YM100COPYYARN.dataSet.poutcopyyrncod;
        $scope.Variables.svProcYM1311PK0_YM100Master.dataBinding.pYRNCOD = $scope.Variables.svProcYM1311PKO_YM100COPYYARN.dataSet.poutcopyyrncod;
        $scope.Variables.svProcYM1311PK0_YM100Master.invoke();
    };


    $scope.button57Click = function($event, $isolateScope) {
        if (!$scope.Widgets.lblInputYarnCode.caption) {
            $scope.Variables.notifMsg.setMessage("Query first");
            $scope.Variables.notifMsg.notify();
            return false;
        }
        $scope.Variables.svProcYM1311PKO_YM100cpyFibreDel.invoke();
    };


    $scope.svProcYM1311PKO_YM100cpyFibreDelonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            return false;
        }
    };

    $scope.svProcYM1311PKO_YM100cpyFibreDelonSuccess = function(variable, data) {
        $scope.Variables.gridFIBREDET.refreshData();
    };


    $scope.button4Click = function($event, $isolateScope) {
        $scope.Variables.svProcYM1311PK0_YM100Master.dataSet = null;
    };

    $scope.btnYarnTestClick = function($event, $isolateScope) {
        if (!$scope.Widgets.lblInputYarnCode.caption) {
            $scope.Variables.notifMsg.setMessage("No Yarn code genrated or Query first.");
            $scope.Variables.notifMsg.notify();
            return false;
        }
        window.open(window.location.origin + window.location.pathname + "#/YarnTest?pParam1=" + $scope.Widgets.lblYRNCOD.caption, "Yarn Test");
    };

    $scope.svSY9200pk0FetchProgUrlonSuccess = function(variable, data) {};

    $scope.btnAddnlRcptClick = function($event, $isolateScope) {
        if (!$scope.Widgets.lblInputYarnCode.caption) {
            $scope.Variables.notifMsg.setMessage("No Yarn code genrated or Query first.");
            $scope.Variables.notifMsg.notify();
            return false;
        }
        window.open(window.location.origin + window.location.pathname + "#/AdditionalReceipt?p_param1=" + $scope.Widgets.lblYRNCOD.caption, "Additional Receipt");
    };

    $scope.btnAdjustStockClick = function($event, $isolateScope) {
        if (!$scope.Widgets.lblInputYarnCode.caption) {
            $scope.Variables.notifMsg.setMessage("No Yarn code genrated or Query first.");
            $scope.Variables.notifMsg.notify();
            return false;
        }
        window.open(window.location.origin + window.location.pathname + "#/YarnAdjustment?pParam1=" + $scope.Widgets.lblYRNCOD.caption, "Yarn Stock Adjustment");
    };


    $scope.svProcYM1311PK0_YM100InsSUBCNTonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            return false;
        }
    };


    $scope.svProcYM1311PK0_YM100UpdCPSTYPonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            return false;
        }
    };


    $scope.svProcYM1311PK0_YM100UpdSUBCNTonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            return false;
        }
    };


    $scope.panelYrnQltyActionsclick = function($item) {
        if (!$scope.Widgets.lblInputYarnCode.caption) {
            $scope.Variables.notifMsg.setMessage("Query first");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        if ($scope.Variables.svGetProcYM1311PK0_Yrntextfld.dataSet.poutSts == "N") {
            $scope.Variables.notifMsg.setMessage("Warning: Yarn already in use in knt150. Support mode switched on");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        $scope.Widgets.dialogUpdMaster.open();
    };


    $scope.panelYrnClrActionsclick = function($item) {
        if (!$scope.Widgets.lblInputYarnCode.caption) {
            $scope.Variables.notifMsg.setMessage("Query first");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        if ($scope.Variables.svGetProcYM1311PK0_Yrntextfld.dataSet.poutSts == "N") {
            $scope.Variables.notifMsg.setMessage("Warning: Yarn already in use in knt150. Support mode switched on");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        $scope.Widgets.dialogUpdMaster.open();
    };


    $scope.panel13Actionsclick = function($item) {
        if (!$scope.Widgets.lblInputYarnCode.caption) {
            $scope.Variables.notifMsg.setMessage("Query first");
            $scope.Variables.notifMsg.notify();
            return false;
        }
        $scope.Widgets.dialogUpdMaster.open();
    };


    $scope.svProcYM1311PK0_YM100RSKUNOonSuccess = function(variable, data) {
        $scope.Variables.svGetProcYM1311PK0_YM100RGRPURCLRSEQ.invoke();
    };


    $scope.panelFstRcptActionsclick = function($item, item, currentItemWidgets) {
        $scope.Widgets.dialogUpdMiscInfo.open();
    };


    $scope.panelTotQuanActionsclick = function($item, item, currentItemWidgets) {
        $scope.Widgets.dialogUpdMiscInfo.open();
    };


    $scope.svUpdateProcYM1311PK0_YM100UpdMiscInfoonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            return false;
        }
    };

    $scope.svUpdateProcYM1311PK0_YM100UpdMiscInfoonSuccess = function(variable, data) {
        $scope.Widgets.dialogUpdMiscInfo.close();
        $scope.Variables.svProcYM1311PK0_YM100Master.invoke();
        $scope.Variables.svGetProcYM1311PK0_YM100MiscInfo.invoke();
    };


    $scope.svProcYM1311PK0_YM100UpdMasteronError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            return false;
        }
    };


    $scope.svGetProcYM1311PK0_YM100CpySCntonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            return false;
        }
    };

    $scope.svGetProcYM1311PK0_YM100CpySCntonSuccess = function(variable, data) {
        $scope.Widgets.dialogSCnt.open();
    };


    $scope.btnSCntClick = function($event, $isolateScope) {
        if (!$scope.Widgets.lblInputYarnCode.caption) {
            $scope.Variables.notifMsg.setMessage("Query first");
            $scope.Variables.notifMsg.notify();
            return false;
        }
        $scope.Variables.svGetProcYM1311PK0_YM100CpySCnt.invoke();
    };


    $scope.svCreateProcYM1311PK0_YM100FetchScntonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            return false;
        }
    };

    $scope.svCreateProcYM1311PK0_YM100FetchScntonSuccess = function(variable, data) {
        $scope.Widgets.dialogSCnt.close();
        $scope.Variables.svProcYM1311PK0_YM100Master.invoke();
        $scope.Widgets.gridSUBCNT.refreshData();
    };


    $scope.svCreateProcYM1311PK0_YM100FibreDetailsonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            return false;
        }
    };

    $scope.svCreateProcYM1311PK0_YM100FibreDetailsonSuccess = function(variable, data) {
        $scope.Widgets.dialogEditFibreDetails.close();
        $scope.Variables.svProcYM1311PK0_YM100Master.invoke();
        $scope.Widgets.gridFIBREDET.refreshData();
        $scope.Widgets.gridCPSTYP.refreshData();
        $scope.Widgets.gridFIBRE.refreshData();
    };


    $scope.svCreateProcYM1311PK0_YM100EditSplFibreProponError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            return false;
        }
    };

    $scope.svCreateProcYM1311PK0_YM100EditSplFibreProponSuccess = function(variable, data) {
        $scope.Widgets.dialogSplFibreProp.close();
        $scope.Widgets.gridFIBREDET.refreshData();
        $scope.Widgets.gridFIBRE.refreshData();
    };


    $scope.svProcYM1311PK0_YM100CPSTYPonBeforeUpdate = function(variable, inputData) {
        if (inputData.pYrncod == '???') {
            if (!$scope.Widgets.gridCPSTYP.dataset || $scope.Widgets.gridCPSTYP.dataset.length === 0) {
                return (false);
            }
        }
    };


    $scope.svProcYM1311PK0_YM100SubCntonBeforeUpdate = function(variable, inputData) {
        if (inputData.pYrncod == '???') {
            if (!$scope.Widgets.gridSUBCNT.dataset || $scope.Widgets.gridSUBCNT.dataset.length === 0) {
                return (false);
            }
        }
    };


    $scope.svProcYM1311PK0_YM100FIBREonBeforeUpdate = function(variable, inputData) {
        if (inputData.pYrncod == '???') {
            if (!$scope.Widgets.gridFIBRE.dataset || $scope.Widgets.gridFIBRE.dataset.length === 0) {
                return (false);
            }
        }
    };


    $scope.svProcYM1311PK0_YM100FINISHonBeforeUpdate = function(variable, inputData) {
        if (inputData.pYrncod == '???') {
            if (!$scope.Widgets.gridFINISH.dataset || $scope.Widgets.gridFINISH.dataset.length === 0) {
                return (false);
            }
        }
    };


    $scope.svProcYM1311PK0_YM100DETAILonBeforeUpdate = function(variable, inputData) {
        if (inputData.pYrncod == '???') {
            if (!$scope.Widgets.gridDETAIL.dataset || $scope.Widgets.gridDETAIL.dataset.length === 0) {
                return (false);
            }
        }
    };


    $scope.svGetProcYM1311PK0_YM100MiscInfoonBeforeUpdate = function(variable, inputData) {
        if (inputData.pYrncod == '???') {
            if (!$scope.Widgets.listMasterMiscInfo.dataset || $scope.Widgets.listMasterMiscInfo.dataset.length === 0) {
                return (false);
            }
        }
    };


    $scope.svProcYM1311PK0_YM100FIBREDETonBeforeUpdate = function(variable, inputData) {
        if (inputData.pYrncod == '???') {
            if (!$scope.Widgets.gridFIBREDET.dataset || $scope.Widgets.gridFIBREDET.dataset.length === 0) {
                return (false);
            }
        }
    };


    $scope.svCreateProcYM1311PK0_YM100InsFibreonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            return false;
        }
    };

    $scope.svCreateProcYM1311PK0_YM100InsFibreonSuccess = function(variable, data) {
        $scope.Widgets.dialogUpdFIBRE.close();
        $scope.Variables.svProcYM1311PK0_YM100Master.invoke();
        $scope.Widgets.gridFIBRE.refreshData();
    };


    $scope.svProcYM1311PK0_YM100UpdFIBREonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            return false;
        }
    };


    $scope.svCreateProcYM1311PK0_YM100InsFinishonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            return false;
        }
    };

    $scope.svCreateProcYM1311PK0_YM100InsFinishonSuccess = function(variable, data) {
        $scope.Widgets.dialogUpdFINISH.close();
        $scope.Variables.svProcYM1311PK0_YM100Master.invoke();
        $scope.Widgets.gridFINISH.refreshData();
    };


    $scope.btnWHPlcMtClick = function($event, $isolateScope) {
        if (!$scope.Widgets.lblInputYarnCode.caption) {
            $scope.Variables.notifMsg.setMessage("Query first");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        $scope.Variables.svQrySy9200pk0FormPath.setInput("pFmbpath", '/prod/pfs/wh/frm/wh140oc0.fmx');

        if (!!$scope.Widgets.listMaster.selecteditem.yrncod) {
            $scope.Variables.svQrySy9200pk0FormPath.setInput("pOtherParams", 'p_yrncod=' + $scope.Widgets.listMaster.selecteditem.yrncod);
        }

        $scope.Variables.svQrySy9200pk0FormPath.invoke();
    };


    $scope.svQrySy9200pk0FormPathonSuccess = function(variable, data, options) {
        if (!!data.content[0].progurl) {
            window.open(data.content[0].progurl, '_blank');
        }
    };


    $scope.btnSupModClick = function($event, $isolateScope) {
        $scope.Widgets.btnSupMod.caption = "SUPPORT MODE ON";
        $scope.Widgets.lblSuptMode.caption = "ON";
    };


    $scope.svUpdateProcYM1311PK0_YM100InsItemCodeonError = function(variable, data, options) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            return false;
        }
    };

    $scope.svUpdateProcYM1311PK0_YM100InsItemCodeonSuccess = function(variable, data, options) {
        $scope.Variables.svProcYM1311PK0_YM100Master.invoke();
        $scope.Widgets.gridFIBREDET.refreshData();
        $scope.Widgets.dialogAddItemCod.close();
    };


    $scope.svGetProcYM1311PK0_YM100SplFibreProponSuccess = function(variable, data, options) {
        var i = 0;
        var j = 0;
        var m_found_index = 0;
        var m_found_index_array = [];
        var m_SpfibfDes = "";

        m_SpfibfDes = $scope.Widgets.gridFIBREDET.selecteditem.spfibfdes + ' ';
        m_SpfibfDes = m_SpfibfDes.substring(0, m_SpfibfDes.length - 1);
        var array_SpfibfDes = m_SpfibfDes.split(" ");

        for (i = 0; i <= array_SpfibfDes.length - 1; i++) {
            m_found_index = null;
            m_found_index = _.findIndex($scope.Widgets.tableSplFibreProp.dataset, {
                fibretyp: array_SpfibfDes[i]
            });
            if (!!m_found_index || m_found_index === 0) {
                m_found_index_array.push(m_found_index);

                $scope.Widgets.tableSplFibreProp.selectItem(m_found_index);
            }
        }
    };


    $scope.svDeleteProcYM1311PK0_YM100DltFibreonError = function(variable, data, options) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            return false;
        }
    };

    $scope.svDeleteProcYM1311PK0_YM100DltFibreonSuccess = function(variable, data, options) {
        $scope.Widgets.dialogDltFibreTyp.close();
        $scope.Variables.svProcYM1311PK0_YM100Master.invoke();
        $scope.Widgets.gridFIBRE.refreshData();
    };


    $scope.svDeleteProcYM1311PK0_YM100DltFinishonError = function(variable, data, options) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            return false;
        }
    };

    $scope.svDeleteProcYM1311PK0_YM100DltFinishonSuccess = function(variable, data, options) {
        $scope.Widgets.dialogDltFinish.close();
        $scope.Variables.svProcYM1311PK0_YM100Master.invoke();
        $scope.Widgets.gridFINISH.refreshData();
    };

}]);

Application.$controller("gridCPSTYPController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.addNewRowAction = function($event) {
            if ($scope.Variables.svGetProcYM1311PK0_Yrntextfld.dataSet.poutSts == "N") {
                $scope.Variables.notifMsg.setMessage("Warning: Yarn already in use in knt150. Support mode switched on");
                $scope.Variables.notifMsg.notify();
                return false;
            }

            var a = $scope.Widgets.listMaster.selecteditem.yrnori;
            if (a.match(/SML*/)) {
                $scope.Variables.notifMsg.setMessage("Go to fibre details");
                $scope.Variables.notifMsg.notify();
                return false;
            }
            $scope.Widgets.dialogUpdCPSTYP.open();
            $scope.Variables.statYrnCpsValues.dataSet = $scope.Variables.svProcYM1311PK0_YM100CPSTYP.dataSet.poutYm100cpstyp;
            $scope.Variables.svProcYM1311PK0_YM100SUBCPSTYP.invoke();

        };

    }
]);

Application.$controller("gridSUBCNTController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.customFieldAction = function(selectedItemData) {
            if ($scope.Variables.svGetProcYM1311PK0_Yrntextfld.dataSet.poutSts == "N") {
                $scope.Variables.notifMsg.setMessage("Warning: Yarn already in use in knt150. Support mode switched on");
                $scope.Variables.notifMsg.notify();
                return false;
            }
            $scope.Variables.svProcYM1311PK0_YM100SUBCNTSYS.invoke();
            $scope.Variables.svProcYM1311PK0_YM100SUBCNTCPS.invoke();
            $scope.Widgets.dialogUpdSUBCNT.open();
        };


        $scope.deleterowAction = function($event, $rowData) {
            if (!$scope.Variables.svProcYM1311PK0_YM100SubCnt.dataSet.poutYm100subCnt[1]) {
                $scope.Variables.notifMsg.setMessage("Cann't delete all count");
                $scope.Variables.notifMsg.notify();
                return false;
            }
            $scope.Widgets.dialogDltSUBCNT.open();
        };

    }
]);
var m_InsFibre;
Application.$controller("gridFIBREController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.customFieldAction = function(selectedItemData) {
            if ($scope.Variables.svGetProcYM1311PK0_Yrntextfld.dataSet.poutSts == "N") {
                $scope.Variables.notifMsg.setMessage("Warning: Yarn already in use in knt150. Support mode switched on");
                $scope.Variables.notifMsg.notify();
                return false;
            }

            m_InsFibre = 'Update';
            $scope.Widgets.dialogUpdFIBRE.open();
        };


        $scope.addNewRowAction = function($event) {
            if ($scope.Variables.svGetProcYM1311PK0_Yrntextfld.dataSet.poutSts == "N") {
                $scope.Variables.notifMsg.setMessage("Warning: Yarn already in use in knt150. Support mode switched on");
                $scope.Variables.notifMsg.notify();
                return false;
            }

            m_InsFibre = 'Insert';
            $scope.Widgets.dialogUpdFIBRE.open();
        };


        $scope.deleterowAction = function($event, $rowData) {
            if ($scope.Variables.svGetProcYM1311PK0_Yrntextfld.dataSet.poutSts == "N") {
                $scope.Variables.notifMsg.setMessage("Warning: Yarn already in use in knt150. Support mode switched on");
                $scope.Variables.notifMsg.notify();
                return false;
            }
            $scope.Widgets.dialogDltFibreTyp.open();
        };

    }
]);
var m_InsFinish;
Application.$controller("gridFINISHController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.addNewRowAction = function($event) {
            if ($scope.Variables.svGetProcYM1311PK0_Yrntextfld.dataSet.poutSts == "N") {
                $scope.Variables.notifMsg.setMessage("Warning: Yarn already in use in knt150. Support mode switched on");
                $scope.Variables.notifMsg.notify();
                return false;
            }
            m_InsFinish = 'Insert';
            $scope.Widgets.dialogUpdFINISH.open();
        };


        $scope.deleterowAction = function($event, $rowData) {
            if ($scope.Variables.svGetProcYM1311PK0_Yrntextfld.dataSet.poutSts == "N") {
                $scope.Variables.notifMsg.setMessage("Warning: Yarn already in use in knt150. Support mode switched on");
                $scope.Variables.notifMsg.notify();
                return false;
            }
            $scope.Widgets.dialogDltFinish.open();
        };

    }
]);

Application.$controller("gridDETAILController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);



Application.$controller("dialogStdPalletWgtController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.button6_1Click = function($event, $isolateScope) {
            if (!$scope.Widgets.selectUpdNEWSTDWGT.datavalue) {
                $scope.Variables.notifMsg.setMessage("New std wgt must be entered.");
                $scope.Variables.notifMsg.notify();
                return false;
            }
            $scope.Variables.svProcYM1311PK0_YM100UpdCARWGT.invoke();
        };
    }
]);

Application.$controller("dialogUpdMasterController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.dialogUpdMasterOpened = function($event, $isolateScope) {
            var m_YDStock = $scope.Variables.loggedInUser.getData().roles.indexOf("YRNDEF_UPDSURPLUSCAT");

            if (m_YDStock < 0) {
                $scope.Widgets.selectUpdSURPLUSCAT.disabled = true;
            } else {
                $scope.Widgets.selectUpdSURPLUSCAT.disabled = false;
            }

            var m_SupMod = $scope.Variables.loggedInUser.getData().roles.indexOf("YRNSTOCK_SUPPMOD");

            if (m_SupMod > 0) {
                if ($scope.Widgets.lblSuptMode.caption == "ON") {
                    $scope.Widgets.selectUpdYRNORI.disabled = false;
                    $scope.Widgets.txtUpdYRNLOT.disabled = false;
                    $scope.Widgets.selectUpdNYRNQLTY.disabled = false;
                    $scope.Widgets.selectUpdNYRNSUBQLTYA.disabled = false;
                    $scope.Widgets.selectUpdNYRNSUBQLTYB.disabled = false;
                    $scope.Widgets.selectUpdNYRNSUBQLTYC.disabled = false;
                    $scope.Widgets.selectUpdNYRNSUBQLTYD.disabled = false;
                    $scope.Widgets.selectUpdNYRNSUBQLTYE.disabled = false;
                    $scope.Widgets.selectUpdNYRNCLR.disabled = false;
                    $scope.Widgets.txtUpdNYRNCDES.disabled = false;
                } else {
                    if ($scope.Widgets.listMaster.selecteditem.canEditFinish == "Y") {
                        $scope.Widgets.selectUpdYRNORI.disabled = false;
                        $scope.Widgets.txtUpdYRNLOT.disabled = false;
                        $scope.Widgets.selectUpdNYRNQLTY.disabled = false;
                        $scope.Widgets.selectUpdNYRNSUBQLTYA.disabled = false;
                        $scope.Widgets.selectUpdNYRNSUBQLTYB.disabled = false;
                        $scope.Widgets.selectUpdNYRNSUBQLTYC.disabled = false;
                        $scope.Widgets.selectUpdNYRNSUBQLTYD.disabled = false;
                        $scope.Widgets.selectUpdNYRNSUBQLTYE.disabled = false;
                        $scope.Widgets.selectUpdNYRNCLR.disabled = false;
                        $scope.Widgets.txtUpdNYRNCDES.disabled = false;
                    } else {
                        $scope.Widgets.selectUpdYRNORI.disabled = true;
                        $scope.Widgets.txtUpdYRNLOT.disabled = true;
                        $scope.Widgets.selectUpdNYRNQLTY.disabled = true;
                        $scope.Widgets.selectUpdNYRNSUBQLTYA.disabled = true;
                        $scope.Widgets.selectUpdNYRNSUBQLTYB.disabled = true;
                        $scope.Widgets.selectUpdNYRNSUBQLTYC.disabled = true;
                        $scope.Widgets.selectUpdNYRNSUBQLTYD.disabled = true;
                        $scope.Widgets.selectUpdNYRNSUBQLTYE.disabled = true;
                        $scope.Widgets.selectUpdNYRNCLR.disabled = true;
                        $scope.Widgets.txtUpdNYRNCDES.disabled = true;
                    }
                }
            }

            $scope.Variables.svQryYM100_NYRNQLTY.invoke();
        };

        $scope.button16Click = function($event, $isolateScope) {
            if (!$scope.Widgets.dateUpdMANUDAT.datavalue) {
                $scope.Variables.notifMsg.setMessage("Man. dat is required");
                $scope.Variables.notifMsg.notify();
                return false;
            }
            var m_lblpreYrnori = $scope.Widgets.selectUpdYRNORI.datavalue;
            var m_lblpreYrnlot = $scope.Widgets.txtUpdYRNLOT.datavalue;
            var m_dateManuDat = $scope.Widgets.dateUpdMANUDAT.datavalue;
            var m_lblnyrnqlty = $scope.Widgets.selectUpdNYRNQLTY.datavalue;
            var m_lblpreNyrnclr = $scope.Widgets.selectUpdNYRNCLR.datavalue;
            var m_lblpreNyrncdes = $scope.Widgets.txtUpdNYRNCDES.datavalue;
            if (!m_lblpreYrnori || !m_lblpreYrnlot || !m_dateManuDat || !m_lblnyrnqlty || !m_lblpreNyrnclr || !m_lblpreNyrncdes) {
                $scope.Variables.notifMsg.setMessage("Origin,Lot#,Man. date,N Yrn Qlty,Yran Clr,Colour Des is required to update");
                $scope.Variables.notifMsg.notify();
                return false;
            }
            $scope.Variables.svProcYM1311PK0_YM100UpdMaster.invoke();
        };

        $scope.txtUpdNYRNCDESChange = function($event, $isolateScope, newVal, oldVal) {
            $scope.Variables.svProcYM1311PK0_YM100NYRNCDES.invoke();
        };


        $scope.txtUpdRSKUNOChange = function($event, $isolateScope, newVal, oldVal) {
            $scope.Variables.svProcYM1311PK0_YM100RSKUNO.invoke();
        };

    }
]);

Application.$controller("dialogUpdCPSTYPController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
        var i;
        var m_TotString;
        var str;

        $scope.button21Click = function($event, $isolateScope) {
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

            $scope.Variables.svProcYM1311PK0_YM100UpdCPSTYP.invoke(

                {
                    "inputFields": {
                        "pprgid": $scope.Variables.statPrgid.dataSet.dataValue,
                        "pYrncod": $scope.Widgets.listMaster.selecteditem.yrncod,
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


        $scope.TableEditCpsTypBeforerowinsert = function($event, $isolateScope, $rowData) {
            if (!$rowData.subcpstyp) {
                $scope.Variables.notifMsg.setMessage("Input cps type");
                $scope.Variables.notifMsg.notify();
                return false;
            }
            if (!$rowData.yrnfrac) {
                $scope.Variables.notifMsg.setMessage("Input a yarn fraction value");
                $scope.Variables.notifMsg.notify();
                return false;
            }
        };


        $scope.TableEditCpsTypRowinsert = function($event, $isolateScope, $rowData) {
            i = 0;
            var m_length = $scope.Variables.statYrnCpsValues.dataSet.length - 1;

            $scope.Variables.statYrnCpsValues.dataSet[m_length].yrncod = $scope.Widgets.TableEditCpsTyp.dataset[0].yrncod;
            $scope.Variables.statYrnCpsValues.dataSet[m_length].subcpsseq = m_length + 1;
            $scope.Variables.statYrnCpsValues.dataSet[m_length].subcpstyp = $rowData.subcpstyp;
            $scope.Variables.statYrnCpsValues.dataSet[m_length].yrnfrac = $rowData.yrnfrac;
        };


        $scope.TableEditCpsTypBeforerowupdate = function($event, $isolateScope, $rowData) {
            if (!$rowData.subcpstyp) {
                $scope.Variables.notifMsg.setMessage("Input cps type");
                $scope.Variables.notifMsg.notify();
                return false;
            }
            if (!$rowData.yrnfrac) {
                $scope.Variables.notifMsg.setMessage("Input a yarn fraction value");
                $scope.Variables.notifMsg.notify();
                return false;
            }
        };

        $scope.button20Click = function($event, $isolateScope) {
            $scope.Variables.svProcYM1311PK0_YM100CPSTYP.invoke();
        };

    }
]);

Application.$controller("dialogUpdSUBCNTController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.button23Click = function($event, $isolateScope) {
            var m_SUBCNTSYS = $scope.Widgets.selectUpdSUBCNTSYS.datavalue;
            var m_UpdPLY = $scope.Widgets.txtUpdPLY.datavalue;
            var m_SUBCNT = $scope.Widgets.txtUpdSUBCNT.datavalue;

            if (!m_SUBCNTSYS) {
                $scope.Variables.notifMsg.setMessage("Input Cnt Sys.");
                $scope.Variables.notifMsg.notify();
                return false;
            }

            if (!m_UpdPLY) {
                $scope.Variables.notifMsg.setMessage("Input Ply.");
                $scope.Variables.notifMsg.notify();
                return false;
            }

            if (!m_SUBCNT) {
                $scope.Variables.notifMsg.setMessage("Input Cnt.");
                $scope.Variables.notifMsg.notify();
                return false;
            }

            if ($scope.Widgets.gridSUBCNT.dataset.length > 1 && !$scope.Widgets.txtUpdYrntex.datavalue) {
                $scope.Variables.notifMsg.setMessage("Enter Yarn Tex.");
                $scope.Variables.notifMsg.notify();
                return false;
            }

            $scope.Variables.svProcYM1311PK0_YM100UpdSUBCNT.invoke();
        };
    }
]);

Application.$controller("dialogUpdFIBREController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.button25Click = function($event, $isolateScope) {
            if (!$scope.Widgets.selectUpdFIBRETYP.datavalue) {
                $scope.Variables.notifMsg.setMessage("Fibre type can not be null");
                $scope.Variables.notifMsg.notify();
                return false;
            }

            if (m_InsFibre == 'Update') {
                $scope.Variables.svProcYM1311PK0_YM100UpdFIBRE.invoke();
            } else {
                $scope.Variables.svCreateProcYM1311PK0_YM100InsFibre.invoke();
            }
        };


        $scope.dialogUpdFIBREOpened = function($event, $isolateScope) {
            $scope.Variables.svProcYM1311PK0_YM100FIBRETYP.invoke();

            if (m_InsFibre == 'Insert') {
                $scope.Widgets.selectUpdFIBRETYP.datavalue = null;
                $scope.Widgets.txtUpdFIBREFRAC.datavalue = null;
            } else {
                $scope.Widgets.selectUpdFIBRETYP.show = false;
                $scope.Widgets.label172.show = false;
            }
        };

    }
]);

Application.$controller("dialogUpdFINISHController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.button27Click = function($event, $isolateScope) {
            if (!$scope.Widgets.selectUpdYRNFINISH.datavalue) {
                $scope.Variables.notifMsg.setMessage("Input a value");
                $scope.Variables.notifMsg.notify();
                return false;
            }
            $scope.Variables.svCreateProcYM1311PK0_YM100InsFinish.invoke();
        };


        $scope.dialogUpdFINISHOpened = function($event, $isolateScope) {
            $scope.Variables.svProcYM1311PK0_YM100YRNFINISH.invoke();
            if (m_InsFinish == 'Insert') {
                $scope.Widgets.selectUpdYRNFINISH.datavalue = null;
            }
        };

    }
]);

Application.$controller("dialogInsSUBCNTController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.button38Click = function($event, $isolateScope) {
            var m_SubCntSys = $scope.Widgets.selectInsSUBCNTSYS.datavalue;
            var m_Ply = $scope.Widgets.txtInsPLY.datavalue;
            var m_SubCnt = $scope.Widgets.txtInsSUBCNT.datavalue;

            if (!m_SubCntSys) {
                $scope.Variables.notifMsg.setMessage("Enter Cnt Sys.");
                $scope.Variables.notifMsg.notify();
                return false;
            }

            if (!m_Ply) {
                $scope.Variables.notifMsg.setMessage("Enter Ply.");
                $scope.Variables.notifMsg.notify();
                return false;
            }

            if (!m_SubCnt) {
                $scope.Variables.notifMsg.setMessage("Enter Cnt.");
                $scope.Variables.notifMsg.notify();
                return false;
            }

            if ($scope.Widgets.gridSUBCNT.dataset.length > 0 && !$scope.Widgets.txtInsYrntex.datavalue) {
                $scope.Variables.notifMsg.setMessage("Enter Yarn Tex.");
                $scope.Variables.notifMsg.notify();
                return false;
            }

            $scope.Variables.svProcYM1311PK0_YM100InsSUBCNT.invoke();
        };
    }
]);

Application.$controller("dialogDltSUBCNTController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.button44Click = function($event, $isolateScope) {
            $scope.Variables.svProcYM1311PK0_YM100DltSUBCNT.invoke();
        };

    }
]);

Application.$controller("dialogInsMASTERController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.dialogInsMASTEROpened = function($event, $isolateScope) {
            $scope.Variables.svQryYM100_NYRNQLTY.invoke();
            $scope.Variables.svProcYM1311PK0_YM100YRNCAT.invoke();
            $scope.Variables.svProcYM1311PK0_YM100YRNTYP.invoke();
            $scope.Variables.svProcYM1311PK0_YM100RAWMAT.invoke();
            $scope.Widgets.txtInsCOUNT.show = false;
            $scope.Widgets.txtInsPly.show = false;
            $scope.Widgets.label223.show = false;
            $scope.Widgets.label228.show = false;
        };


        $scope.button46_1Click = function($event, $isolateScope) {
            var m_Manudat = $scope.Widgets.dateInsMANUDAT.datavalue;
            var m_YarnOri = $scope.Widgets.selectInsYRNORI.datavalue;
            var m_Source = $scope.Widgets.selectInsSOURCE.datavalue;
            var m_SubcntSys = $scope.Widgets.selectSubCntSys.datavalue;
            var m_Count = $scope.Widgets.txtInsCOUNT.datavalue;
            var m_Ply = $scope.Widgets.txtInsPly.datavalue;
            var m_Yrncnt = $scope.Widgets.selectInsYRNCAT.datavalue;
            var m_Yrntyp = $scope.Widgets.selectInsYRNTYP.datavalue;
            var m_Rawmat = $scope.Widgets.selectInsRAWMAT.datavalue;
            var m_Sample = $scope.Widgets.checkboxSample.datavalue;
            var m_Yrnlot = $scope.Widgets.txtInsYRNLOT.datavalue;

            if (!m_Manudat || !m_YarnOri || !m_Source || !m_Yrncnt || !m_Yrntyp || !m_SubcntSys || !m_Rawmat) {
                $scope.Variables.notifMsg.setMessage("Fill in all fields in order to generate yrncod !");
                $scope.Variables.notifMsg.notify();
                return false;
            }

            if (m_Source == "8" && !m_Yrnlot) {
                $scope.Variables.notifMsg.setMessage("Enter lot#");
                $scope.Variables.notifMsg.notify();
                return false;
            }
            $scope.Variables.svProcYM1311PKO_YM100InsMASTER.invoke();
        };

        $scope.selectSubCntSysChange = function($event, $isolateScope, newVal, oldVal) {
            if ($scope.Widgets.selectSubCntSys.datavalue == 'NE') {
                $scope.Widgets.txtInsCOUNT.show = true;
                $scope.Widgets.txtInsPly.show = true;
                $scope.Widgets.label223.show = true;
                $scope.Widgets.label228.show = true;
            } else {
                $scope.Widgets.txtInsCOUNT.show = false;
                $scope.Widgets.txtInsPly.show = false;
                $scope.Widgets.label223.show = false;
                $scope.Widgets.label228.show = false;
            }
        };


        $scope.txtInsPlyBlur = function($event, $isolateScope) {
            cgen.WM.ValidateTextNumber($scope, $event, $isolateScope, 1);
        };
    }
]);

Application.$controller("gridFIBREDETController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.editSplFibrePropAction = function(selectedItemData) {
            if ($scope.Variables.svGetProcYM1311PK0_Yrntextfld.dataSet.poutSts == "N") {
                $scope.Variables.notifMsg.setMessage("Warning: Yarn already in use in knt150. Support mode switched on");
                $scope.Variables.notifMsg.notify();
                return false;
            }
            $scope.Widgets.dialogSplFibreProp.open();
        };

        $scope.addNewRowAction1 = function($event) {
            var a = $scope.Widgets.listMaster.selecteditem.yrnori;
            if (!a.match(/SML*/)) {
                $scope.Variables.notifMsg.setMessage("You can not edit yarn from here");
                $scope.Variables.notifMsg.notify();
                return false;
            }

            if ($scope.Variables.svGetProcYM1311PK0_Yrntextfld.dataSet.poutSts == "N") {
                $scope.Variables.notifMsg.setMessage("Warning: Yarn already in use in knt150. Support mode switched on");
                $scope.Variables.notifMsg.notify();
                return false;
            }

            $scope.Variables.statValuesofGridFIBREDET.dataSet = $scope.Variables.svProcYM1311PK0_YM100FIBREDET.dataSet.poutYm100fibredet;
            $scope.Widgets.dialogEditFibreDetails.open();
        };


        $scope.editMaterialCodAction = function(selectedItemData) {
            if ($scope.Variables.svGetProcYM1311PK0_Yrntextfld.dataSet.poutSts == "N") {
                $scope.Variables.notifMsg.setMessage("Warning: Yarn already in use in knt150. Support mode switched on");
                $scope.Variables.notifMsg.notify();
                return false;
            }
            $scope.Widgets.dialogAddItemCod.open();
        };
    }
]);

Application.$controller("dialogRelYrncodController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.button51Click = function($event, $isolateScope) {
            $scope.Variables.svProcYM1311PKO_YM100relYrnCod.invoke();
        };

    }
]);

Application.$controller("dialogRejYrncodController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.button52Click = function($event, $isolateScope) {
            $scope.Variables.svProcYM1311PKO_YM100rejYrnCod.invoke();
        };

    }
]);

Application.$controller("dialogHoldYrnCodController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("dialogactYrnCodController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
        $scope.button54Click = function($event, $isolateScope) {
            $scope.Variables.svProcYM1311PKO_YM100actYrnCod.invoke();
        };
    }
]);

Application.$controller("dialogCOPYYARNController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.dialogCOPYYARNOpened = function($event, $isolateScope) {
            $scope.Variables.svProcYM1311PK0_YM100YRNCAT.invoke();
            $scope.Variables.svProcYM1311PK0_YM100YRNTYP.invoke();
            $scope.Variables.svProcYM1311PK0_YM100RAWMAT.invoke();
        };

        $scope.button56Click = function($event, $isolateScope) {
            var m_YrnCod = $scope.Widgets.lblcpyyrnYrnCod.caption;
            var m_Manudate = $scope.Widgets.datecpyyrnManudate.datavalue;
            var m_ORIGIN = $scope.Widgets.selectcpyyrnORIGIN.datavalue;
            var m_SOURCE = $scope.Widgets.selectcpyyrnSOURCE.datavalue;
            var m_YRNCAT = $scope.Widgets.selectcpyyrnYRNCAT.datavalue;
            var m_YRNTYPE = $scope.Widgets.selectcpyyrnYRNTYPE.datavalue;
            var m_yrnPLY = $scope.Widgets.lblcpyyrnPLY.caption;
            var m_RAWMATERIAL = $scope.Widgets.selectcpyyrnRAWMATERIAL.datavalue;
            var m_Yrncnt = $scope.Widgets.lblcpyyrnYRNCNT.datavalue;

            if (!m_YrnCod || !m_ORIGIN || !m_SOURCE) {
                $scope.Variables.notifMsg.setMessage("Source Yarn code/Origin/source must be entered.");
                $scope.Variables.notifMsg.notify();
                return false;
            }

            if (m_Yrncnt.length < 2) {
                $scope.Variables.notifMsg.setMessage("Count should be at least 2 digit.");
                $scope.Variables.notifMsg.notify();
                return false;
            }

            if (m_Yrncnt < 0 || m_Yrncnt > 5000) {
                $scope.Variables.notifMsg.setMessage("Invalid count.");
                $scope.Variables.notifMsg.notify();
                return false;
            }

            $scope.Variables.svProcYM1311PKO_YM100COPYYARN.invoke();
        };

    }
]);



Application.$controller("TableEditCpsTypController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

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

Application.$controller("dialogUpdMiscInfoController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.btnUpdMiscInfoClick = function($event, $isolateScope) {
            $scope.Variables.svUpdateProcYM1311PK0_YM100UpdMiscInfo.invoke();
        };

    }
]);

Application.$controller("dialogSCntController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.btnFetchScntClick = function($event, $isolateScope) {
            if (!$scope.Widgets.selectSCnt.datavalue) {
                $scope.Variables.notifMsg.setMessage("Enter a value");
                $scope.Variables.notifMsg.notify();
                return false;
            }
            $scope.Variables.svCreateProcYM1311PK0_YM100FetchScnt.invoke();
        };

    }
]);

Application.$controller("dialogEditFibreDetailsController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        var i;
        var m_FullString;
        var strForFibreDel;
        var m_Spfibdes;
        var str_Spfibdes;

        $scope.TableEditFibreDetailsRowinsert = function($event, $isolateScope, $rowData) {
            var m_Idx = $scope.Variables.statValuesofGridFIBREDET.dataSet.length - 1;

            $scope.Variables.statValuesofGridFIBREDET.dataSet[m_Idx].yrncod = $scope.Widgets.listMaster.selecteditem.yrncod;
            $scope.Variables.statValuesofGridFIBREDET.dataSet[m_Idx].fibdetseq = m_Idx + 1; //(!$scope.Variables.statValuesofGridFIBREDET.dataSet[m_Idx - 1].fibdetseq ? 0 : $scope.Variables.statValuesofGridFIBREDET.dataSet[m_Idx].fibdetseq) + 1;
            $scope.Variables.statValuesofGridFIBREDET.dataSet[m_Idx].fibcps = $rowData.fibcps;
            $scope.Variables.statValuesofGridFIBREDET.dataSet[m_Idx].fibfrac = $rowData.fibfrac;
            $scope.Variables.statValuesofGridFIBREDET.dataSet[m_Idx].fibclr = $rowData.fibclr;
            $scope.Variables.statValuesofGridFIBREDET.dataSet[m_Idx].fibcdes = $rowData.fibcdes;
            $scope.Variables.statValuesofGridFIBREDET.dataSet[m_Idx].fibclrref = $rowData.fibclrref;
            $scope.Variables.statValuesofGridFIBREDET.dataSet[m_Idx].fiborigin = $rowData.fiborigin;
            $scope.Variables.statValuesofGridFIBREDET.dataSet[m_Idx].ctycod = $rowData.ctycod;
            $scope.Variables.statValuesofGridFIBREDET.dataSet[m_Idx].fibdiameter = $rowData.fibdiameter;
            $scope.Variables.statValuesofGridFIBREDET.dataSet[m_Idx].fibdiameterUom = $rowData.fibdiameterUom;
            $scope.Variables.statValuesofGridFIBREDET.dataSet[m_Idx].fiblengthMm = $rowData.fiblengthMm;
        };


        $scope.TableEditFibreDetailsBeforerowinsert = function($event, $isolateScope, $rowData) {
            if (!$rowData.fibcps || !$rowData.fibfrac || !$rowData.fibclr) {
                $scope.Variables.notifMsg.setMessage("Input cps, clr and fraction used for fibres");
                $scope.Variables.notifMsg.notify();
                return false;
            }
        };


        $scope.TableEditFibreDetailsBeforerowupdate = function($event, $isolateScope, $rowData) {
            if (!$rowData.fibcps || !$rowData.fibfrac || !$rowData.fibclr) {
                $scope.Variables.notifMsg.setMessage("Input cps, clr and fraction used for fibres");
                $scope.Variables.notifMsg.notify();
                return false;
            }
        };


        $scope.dialogEditFibreDetailsOpened = function($event, $isolateScope) {
            $scope.Variables.svProcYM1311PK0_YM100SUBCPSTYP.invoke();
            $scope.Variables.svProcYM1311PK0_YM100FIBCLR.invoke();
            $scope.Variables.svProcYM1311PK0_YM100FIBORIGIN.invoke();
            $scope.Variables.svProcYM1311PK0_YM100CTYCOD.invoke();
            $scope.Variables.svProcYM1311PK0_YM100FIBDIAMETER_UOM.invoke();
        };


        $scope.btnEditFibreDetailsClick = function($event, $isolateScope) {
            i = 0;
            m_FullString = "";
            m_Spfibdes = "";

            for (i = 0; i < $scope.Variables.statValuesofGridFIBREDET.dataSet.length; i++) {
                if (!$scope.Variables.statValuesofGridFIBREDET.dataSet[i].fibfrac || !$scope.Variables.statValuesofGridFIBREDET.dataSet[i].fibcps || !$scope.Variables.statValuesofGridFIBREDET.dataSet[i].fibclr) {
                    $scope.Variables.notifMsg.setMessage("Input cps, clr, fraction  for fibres");
                    $scope.Variables.notifMsg.notify();
                    return false;
                }
                m_FullString = m_FullString + (!$scope.Variables.statValuesofGridFIBREDET.dataSet[i].fibdetseq ? null : $scope.Variables.statValuesofGridFIBREDET.dataSet[i].fibdetseq) + ';' + (!$scope.Variables.statValuesofGridFIBREDET.dataSet[i].fibcps ? null : $scope.Variables.statValuesofGridFIBREDET.dataSet[i].fibcps) + ';' + (!$scope.Variables.statValuesofGridFIBREDET.dataSet[i].fibclr ? null : $scope.Variables.statValuesofGridFIBREDET.dataSet[i].fibclr) + ';' + (!$scope.Variables.statValuesofGridFIBREDET.dataSet[i].fibcdes ? null : $scope.Variables.statValuesofGridFIBREDET.dataSet[i].fibcdes) + ';' + (!$scope.Variables.statValuesofGridFIBREDET.dataSet[i].fibclrref ? null : $scope.Variables.statValuesofGridFIBREDET.dataSet[i].fibclrref) + ';' + (!$scope.Variables.statValuesofGridFIBREDET.dataSet[i].fibfrac ? null : $scope.Variables.statValuesofGridFIBREDET.dataSet[i].fibfrac) + ';' + (!$scope.Variables.statValuesofGridFIBREDET.dataSet[i].fiborigin ? null : $scope.Variables.statValuesofGridFIBREDET.dataSet[i].fiborigin) + ';' + (!$scope.Variables.statValuesofGridFIBREDET.dataSet[i].ctycod ? null : $scope.Variables.statValuesofGridFIBREDET.dataSet[i].ctycod) + ';' + (!$scope.Variables.statValuesofGridFIBREDET.dataSet[i].fibdiameter ? null : $scope.Variables.statValuesofGridFIBREDET.dataSet[i].fibdiameter) + ';' + (!$scope.Variables.statValuesofGridFIBREDET.dataSet[i].fibdiameterUom ? null : $scope.Variables.statValuesofGridFIBREDET.dataSet[i].fibdiameterUom) + ';' + (!$scope.Variables.statValuesofGridFIBREDET.dataSet[i].fiblengthMm ? null : $scope.Variables.statValuesofGridFIBREDET.dataSet[i].fiblengthMm) + ';' + (!$scope.Variables.statValuesofGridFIBREDET.dataSet[i].spfibfdes ? null : $scope.Variables.statValuesofGridFIBREDET.dataSet[i].spfibfdes) + ';' + (!$scope.Variables.statValuesofGridFIBREDET.dataSet[i].remarks ? null : $scope.Variables.statValuesofGridFIBREDET.dataSet[i].remarks) + ",";

                strForFibreDel = m_FullString;
                strForFibreDel = strForFibreDel.substring(0, strForFibreDel.length - 1);

                m_Spfibdes = m_Spfibdes + $scope.Variables.statValuesofGridFIBREDET.dataSet[i].spfibfdes + ';';

                str_Spfibdes = m_Spfibdes;
                str_Spfibdes = str_Spfibdes.substring(0, str_Spfibdes.length - 1);
            }

            $scope.Variables.svCreateProcYM1311PK0_YM100FibreDetails.invoke(

                {
                    "inputFields": {
                        "pPrgid": $scope.Variables.statPrgid.dataSet.dataValue,
                        "pYRNCOD": $scope.Widgets.listMaster.selecteditem.yrncod,
                        "pTotString": strForFibreDel
                    }
                },
                function(data) {},
                function(error) {
                    $scope.Variables.notifMsg.setAlertType("error");
                    $scope.Variables.notifMsg.setMessage("Error: " + error);
                    $scope.Variables.notifMsg.notify();
                });

        };

        $scope.button53_2Click = function($event, $isolateScope) {
            $scope.Variables.svProcYM1311PK0_YM100FIBREDET.invoke();
        };

    }
]);

Application.$controller("TableEditFibreDetailsController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.fibclrOnChange = function($event, $isolateScope, rowData) {
            $scope.Variables.svGetProcYM1311PK0_YM100FibCdes.dataBinding.pFibClr = $isolateScope.datavalue;
            $scope.Variables.svGetProcYM1311PK0_YM100FibCdes.invoke();
        };

        $scope.addNewRowAction = function($event) {};

    }
]);

Application.$controller("dialogSplFibrePropController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
        var m_length;
        var m_FibreTyp;
        var m_FibFrac;
        var m_FibdetSeq;
        var m_YrnCod;
        var str;

        $scope.dialogSplFibrePropOpened = function($event, $isolateScope) {
            $scope.Variables.svGetProcYM1311PK0_YM100SplFibreProp.invoke();
        };


        $scope.btnEdtSplFibreClick = function($event, $isolateScope) {
            m_length = 0;
            m_FibreTyp = "";
            m_FibFrac = 0;
            m_FibdetSeq = 0;
            m_YrnCod = "";

            m_length = $scope.Widgets.tableSplFibreProp.selectedItems.length;

            for (var i = 0; i < m_length; i++) {
                m_FibreTyp = m_FibreTyp + $scope.Widgets.tableSplFibreProp.selectedItems[i].fibretyp + " ";
            }

            str = m_FibreTyp;
            str = str.substring(0, str.length - 1);

            m_FibFrac = $scope.Widgets.gridFIBREDET.selecteditem.fibfrac;
            m_YrnCod = $scope.Widgets.gridFIBREDET.selecteditem.yrncod;
            m_FibdetSeq = $scope.Widgets.gridFIBREDET.selecteditem.fibdetseq;

            $scope.Variables.svCreateProcYM1311PK0_YM100EditSplFibreProp.invoke(

                {
                    "inputFields": {
                        "pPrgid": $scope.Variables.statPrgid.dataSet.dataValue,
                        "pYrncod": m_YrnCod,
                        "pFibdetSeq": m_FibdetSeq,
                        "pFibreTyp": str,
                        "pFibreFrac": m_FibFrac
                    }
                },
                function(data) {},
                function(error) {
                    $scope.Variables.notifMsg.setAlertType("error");
                    $scope.Variables.notifMsg.setMessage("Error: " + error);
                    $scope.Variables.notifMsg.notify();
                });
        };

    }
]);

Application.$controller("tableSplFibrePropController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("dialogHUYarnController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.btnHUYrnClick = function($event, $isolateScope) {
            $scope.Variables.svProcYM1311PKO_YM100holdYrnCod.invoke();
        };

    }
]);

Application.$controller("dialogEditFibreDetController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("TableEditFibreDetController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("dialogAddItemCodController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.btnAddItemCodClick = function($event, $isolateScope) {
            if (!$scope.Widgets.selectItemcod.datavalue) {
                $scope.Variables.notifMsg.setMessage("Input Item Code.");
                $scope.Variables.notifMsg.notify();
                return false;
            }
            $scope.Variables.svUpdateProcYM1311PK0_YM100InsItemCode.invoke();
        };

    }
]);

Application.$controller("dialogDltFibreTypController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.btnDltFibreClick = function($event, $isolateScope) {
            $scope.Variables.svDeleteProcYM1311PK0_YM100DltFibre.invoke();
        };

    }
]);

Application.$controller("dialogDltFinishController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.btnDltFinishClick = function($event, $isolateScope) {
            $scope.Variables.svDeleteProcYM1311PK0_YM100DltFinish.invoke();
        };

    }
]);