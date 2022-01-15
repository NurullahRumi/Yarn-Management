Application.$controller("YarnTestPageController", ["$scope", function($scope) {
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

        if (!$scope.pageParams.pParam1) {
            return false;
        } else {
            $scope.Variables.svProcYM1311PK0_YM360QueryYrncod.dataBinding.pYRNCOD = $scope.pageParams.pParam1;
            $scope.Variables.svProcYM1311PK0_YM360QueryYrncod.invoke();
        }
    };


    $scope.button3Click = function($event, $isolateScope) {
        var m_YRNCOD = $scope.Widgets.formFilter.formWidgets.pYRNCOD.datavalue;
        var m_YRNCNT = $scope.Widgets.formFilter.formWidgets.pYrnCnt.datavalue;
        var m_YRNCLR = $scope.Widgets.formFilter.formWidgets.pYRNCLR.datavalue;
        var m_YRNLOT = $scope.Widgets.formFilter.formWidgets.pYRNLOT.datavalue;
        var m_YRNCPS = $scope.Widgets.formFilter.formWidgets.pYRNCPS.datavalue;
        var m_YRNQLTY = $scope.Widgets.formFilter.formWidgets.pYRNQLTY.datavalue;
        var m_YRNORI = $scope.Widgets.formFilter.formWidgets.pYrnOri.datavalue;
        var m_CNTNUM = $scope.Widgets.formFilter.formWidgets.pCntNum.datavalue;

        if ((!m_YRNCOD) && (!m_YRNCNT) && (!m_YRNCLR) && (!m_YRNLOT) && (!m_YRNCPS) && (!m_YRNQLTY) && (!m_YRNORI) && (!m_CNTNUM)) {
            $scope.Variables.notifMsg.setMessage("Input one value to query");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        $scope.Variables.svProcYM1311PK0_YM360QueryYrncod.invoke();
        $scope.Variables.statForBtnQry.dataSet.dataValue = "N";
    };

    $scope.svProcYM1311PK0_YM360QueryYrncodonSuccess = function(variable, data) {
        $scope.Variables.statForBtnQry.dataSet.dataValue = "Y";
    };

    $scope.svProcYM1311PK0_YM360QueryYrncodonError = function(variable, data, options) {
        $scope.Variables.statForBtnQry.dataSet.dataValue = "Y";
    };

    $scope.svProcYM1311PK0_YM360QueryDetailsonSuccess = function(variable, data) {};


    $scope.button5Click = function($event, $isolateScope) {
        DlgOpn = 'Update';
        if (!$scope.Widgets.lblYrnCode.caption) {
            $scope.Variables.notifMsg.setMessage("Query first");
            $scope.Variables.notifMsg.notify();
            return false;
        }
        if (!$scope.Widgets.lblTestDat.caption) {
            $scope.Variables.notifMsg.setMessage("Add The Test first.");
            $scope.Variables.notifMsg.notify();
            return false;
        }
        $scope.Widgets.dialogYM360Details.open();
    };


    $scope.svProcYM1311PK0_YM360UpdQueryDetailsonSuccess = function(variable, data) {
        $scope.Widgets.dialogYM360Details.close();
        $scope.Variables.svProcYM1311PK0_YM360QueryDetails.invoke();
    };

    $scope.svProcYM1311PK0_YM360UpdQueryDetailsonError = function(variable, data, options) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            return false;
        }
    };


    $scope.button6Click = function($event, $isolateScope) {
        DlgOpn = 'Insert';
        if ($scope.Widgets.listYrnCod.selecteditem.yrnstat == 'P') {
            $scope.Variables.notifMsg.setMessage("Have to release the yrncod to add test.");
            $scope.Variables.notifMsg.notify();
            return false;
        }
        if (!$scope.Widgets.lblCheck.caption) {
            $scope.Variables.notifMsg.setMessage("Query first");
            $scope.Variables.notifMsg.notify();
            return false;
        }
        $scope.Widgets.dialogYM360Details.open();
    };


    $scope.svProcYM1311PK0_YM360InsQueryDetailsonSuccess = function(variable, data) {
        $scope.Widgets.dialogYM360Details.close();
        $scope.Variables.svGetProcYM1311PK0_YM360NumOfTstNum.invoke();
        $scope.Variables.svProcYM1311PK0_YM360QueryDetails.dataBinding.pTSTNUM = $scope.Variables.svProcYM1311PK0_YM360InsQueryDetails.dataSet.poutTstnum;
        $scope.Variables.svProcYM1311PK0_YM360QueryDetails.dataBinding.pYRNCOD = $scope.Widgets.lblUpdYRNCOD.caption;
        $scope.Variables.svProcYM1311PK0_YM360QueryDetails.invoke();
    };


    $scope.p_YRNCODChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.p_YRNCOD.datavalue = newVal.toUpperCase();
    };


    $scope.p_YRNLOTChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.p_YRNLOT.datavalue = newVal.toUpperCase();
    };


    $scope.p_CNTNUMChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.p_CNTNUM.datavalue = newVal.toUpperCase();
    };


    $scope.p_YRNCPSChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.p_YRNCPS.datavalue = newVal.toUpperCase();
    };


    $scope.p_YRNCLRChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.p_YRNCLR.datavalue = newVal.toUpperCase();
    };


    $scope.p_YRNQLTYChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.p_YRNQLTY.datavalue = newVal.toUpperCase();
    };


    $scope.button1Click = function($event, $isolateScope) {
        $scope.Variables.svProcYM1311PK0_YM360QueryYrncod.dataSet = null;
        $scope.Variables.svGetProcYM1311PK0_YM360NumOfTstNum.dataSet = null;
        $scope.Variables.svProcYM1311PK0_YM360QueryDetails.dataSet = null;
    };


    $scope.sliderTstNumChange = function($event, $isolateScope, newVal, oldVal) {};

    $scope.btnApprovedClick = function($event, $isolateScope) {
        $scope.Widgets.dialogApprbTst.open();
    };

    $scope.svUpdateProcYM1311PK0_YM360ApprbTstonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            return false;
        }
    };

    $scope.svUpdateProcYM1311PK0_YM360ApprbTstonSuccess = function(variable, data) {
        $scope.Widgets.dialogApprbTst.close();
        $scope.Variables.svProcYM1311PK0_YM360QueryYrncod.invoke();
        $scope.Variables.svProcYM1311PK0_YM360QueryDetails.invoke();
    };

    $scope.svProcYM1311PK0_YM360InsQueryDetailsonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            return false;
        }
    };

}]);

var DlgOpn;

Application.$controller("dialogYM360DetailsController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.button4Click = function($event, $isolateScope) {
            if (!$scope.Widgets.dateUpdTESTDAT.datavalue) {
                $scope.Variables.notifMsg.setMessage("Test Date is required");
                $scope.Variables.notifMsg.notify();
                return false;
            }

            if (DlgOpn == 'Update') {
                $scope.Variables.svProcYM1311PK0_YM360UpdQueryDetails.invoke();
            } else {
                $scope.Variables.svProcYM1311PK0_YM360InsQueryDetails.invoke();
            }
        };


        $scope.dialogYM360DetailsOpened = function($event, $isolateScope) {
            if (DlgOpn == 'Insert') {
                $scope.Widgets.lblUpdYRNCOD.caption = $scope.Widgets.listYrnCod.selecteditem.yrncod;
                $scope.Widgets.lblUpdTSTNUM.caption = undefined;
                $scope.Widgets.lblUpdTSTNUM.show = false;
                $scope.Widgets.label198_1.show = false;
                $scope.Widgets.dateUpdTESTDAT.datavalue = "CURRENT_DATE";
                $scope.Widgets.selectUpdRATING.datavalue = null;
                $scope.Widgets.txtUpdCNT.datavalue = null;
                $scope.Widgets.txtUpdCVCNT.datavalue = null;
                $scope.Widgets.txtUpdTPI.datavalue = null;
                $scope.Widgets.txtUpdCVTPI.datavalue = null;
                $scope.Widgets.txtUpdU.datavalue = null;
                $scope.Widgets.txtUpdYETHIN.datavalue = null;
                $scope.Widgets.txtUpdYETHICK.datavalue = null;
                $scope.Widgets.txtUpdYENEPS.datavalue = null;
                $scope.Widgets.txtUpdHAIRINESS.datavalue = null;
                $scope.Widgets.txtUpdPERCSH.datavalue = null;
                $scope.Widgets.txtUpdSTRNGTH.datavalue = null;
                $scope.Widgets.txtUpdCVSTRNGTH.datavalue = null;
                $scope.Widgets.txtUpdELONG.datavalue = null;
                $scope.Widgets.txtUpdCVELONG.datavalue = null;
                $scope.Widgets.txtUpdA1B1C1D1.datavalue = null;
                $scope.Widgets.txtUpdA3B3C2D2.datavalue = null;
                $scope.Widgets.txtUpdEFG.datavalue = null;
                $scope.Widgets.txtUpdH1I1.datavalue = null;
                $scope.Widgets.txtUpdH2I2.datavalue = null;
                $scope.Widgets.txtUpdS3VALUE.datavalue = null;
                $scope.Widgets.txtUpdFRICTION.datavalue = null;
                $scope.Widgets.txtUpdMOISTURE.datavalue = null;
                $scope.Widgets.txtUpdRemarks.datavalue = null;
            }
        };

        $scope.txtUpdCNTBlur = function($event, $isolateScope) {
            cgen.WM.ValidateTextNumber($scope, $event, $isolateScope, 2);
        };

        $scope.txtUpdCVCNTBlur = function($event, $isolateScope) {
            cgen.WM.ValidateTextNumber($scope, $event, $isolateScope, 2);
        };

        $scope.txtUpdTPIBlur = function($event, $isolateScope) {
            cgen.WM.ValidateTextNumber($scope, $event, $isolateScope, 2);
        };

        $scope.txtUpdCVTPIBlur = function($event, $isolateScope) {
            cgen.WM.ValidateTextNumber($scope, $event, $isolateScope, 2);
        };

        $scope.txtUpdUBlur = function($event, $isolateScope) {
            cgen.WM.ValidateTextNumber($scope, $event, $isolateScope, 2);
        };

        $scope.txtUpdYETHINBlur = function($event, $isolateScope) {
            cgen.WM.ValidateTextNumber($scope, $event, $isolateScope, 1);
        };

        $scope.txtUpdYETHICKBlur = function($event, $isolateScope) {
            cgen.WM.ValidateTextNumber($scope, $event, $isolateScope, 1);
        };

        $scope.txtUpdYENEPSBlur = function($event, $isolateScope) {
            cgen.WM.ValidateTextNumber($scope, $event, $isolateScope, 1);
        };

        $scope.txtUpdHAIRINESSBlur = function($event, $isolateScope) {
            cgen.WM.ValidateTextNumber($scope, $event, $isolateScope, 2);
        };

        $scope.txtUpdPERCSHBlur = function($event, $isolateScope) {
            cgen.WM.ValidateTextNumber($scope, $event, $isolateScope, 2);
        };

        $scope.txtUpdSTRNGTHBlur = function($event, $isolateScope) {
            cgen.WM.ValidateTextNumber($scope, $event, $isolateScope, 2);
        };

        $scope.txtUpdCVSTRNGTHBlur = function($event, $isolateScope) {
            cgen.WM.ValidateTextNumber($scope, $event, $isolateScope, 2);
        };

        $scope.txtUpdELONGBlur = function($event, $isolateScope) {
            cgen.WM.ValidateTextNumber($scope, $event, $isolateScope, 3);
        };

        $scope.txtUpdCVELONGBlur = function($event, $isolateScope) {
            cgen.WM.ValidateTextNumber($scope, $event, $isolateScope, 2);
        };

        $scope.txtUpdA1B1C1D1Blur = function($event, $isolateScope) {
            cgen.WM.ValidateTextNumber($scope, $event, $isolateScope, 1);
        };

        $scope.txtUpdA3B3C2D2Blur = function($event, $isolateScope) {
            cgen.WM.ValidateTextNumber($scope, $event, $isolateScope, 1);
        };

        $scope.txtUpdEFGBlur = function($event, $isolateScope) {
            cgen.WM.ValidateTextNumber($scope, $event, $isolateScope, 1);
        };

        $scope.txtUpdH1I1Blur = function($event, $isolateScope) {
            cgen.WM.ValidateTextNumber($scope, $event, $isolateScope, 1);
        };

        $scope.txtUpdH2I2Blur = function($event, $isolateScope) {
            cgen.WM.ValidateTextNumber($scope, $event, $isolateScope, 1);
        };

        $scope.txtUpdS3VALUEBlur = function($event, $isolateScope) {
            cgen.WM.ValidateTextNumber($scope, $event, $isolateScope, 0);
        };

        $scope.txtUpdFRICTIONBlur = function($event, $isolateScope) {
            cgen.WM.ValidateTextNumber($scope, $event, $isolateScope, 2);
        };

        $scope.txtUpdMOISTUREBlur = function($event, $isolateScope) {
            cgen.WM.ValidateTextNumber($scope, $event, $isolateScope, 1);
        };

    }
]);

Application.$controller("dialogApprbTstController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.btnApprbTstClick = function($event, $isolateScope) {
            $scope.Variables.svUpdateProcYM1311PK0_YM360ApprbTst.invoke(

                {
                    "inputFields": {
                        "pprgid": $scope.Variables.statPrgid.dataSet.dataValue,
                        "pYRNCOD": $scope.Widgets.lblApprvTstYrnCod.caption,
                        "pAPPROVIND": 'Y',
                        "pTSTNUM": $scope.Widgets.lblApprvTstTstNum.caption
                    }
                },
                function(data) {},
                function(error) {
                    $scope.Variables.notifMsg.setAlertType("error");
                    $scope.Variables.notifMsg.setMessage("Error: " + error);
                    $scope.Variables.notifMsg.notify();
                });
        };

        $scope.btnRjctTstClick = function($event, $isolateScope) {
            $scope.Variables.svUpdateProcYM1311PK0_YM360ApprbTst.invoke(

                {
                    "inputFields": {
                        "pprgid": $scope.Variables.statPrgid.dataSet.dataValue,
                        "pYRNCOD": $scope.Widgets.lblApprvTstYrnCod.caption,
                        "pAPPROVIND": 'N',
                        "pTSTNUM": $scope.Widgets.lblApprvTstTstNum.caption
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