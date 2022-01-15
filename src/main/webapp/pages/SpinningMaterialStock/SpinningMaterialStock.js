Application.$controller("SpinningMaterialStockPageController", ["$scope", function($scope) {
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
        $scope.Variables.svProcYM1311PK0_YM650CtyCod.invoke();
        $scope.Variables.svProcYM1311PK0_YM650WMATUSERCODE.invoke();
        $scope.Variables.svProcYM1311PK0_YM650MATCTYCOD.invoke();
        $scope.Variables.svProcYM1311PK0_YM650UpdWMATUSERCODE.invoke();


        $scope.button3Click = function($event, $isolateScope) {
            var m_STRCOD = $scope.Widgets.formQueryStockDetails.formWidgets.p_STRCOD.datavalue;
            var m_MATERIALCODE = $scope.Widgets.formQueryStockDetails.formWidgets.p_MATERIALCODE.datavalue;
            var m_MATUSERCODE = $scope.Widgets.formQueryStockDetails.formWidgets.p_MATUSERCODE.datavalue;
            var m_USRDATEfrom = $scope.Widgets.formQueryStockDetails.formWidgets.p_USRDATEfrom.datavalue;
            var m_USRDATEto = $scope.Widgets.formQueryStockDetails.formWidgets.p_USRDATEto.datavalue;

            if (!m_STRCOD && !m_MATERIALCODE && !m_MATUSERCODE && !m_USRDATEfrom && !m_USRDATEto) {
                $scope.Variables.notifMsg.setMessage("Input A value to query");
                $scope.Variables.notifMsg.notify();
                return false;
            }
            if (m_USRDATEfrom !== "" && !m_USRDATEto) {
                $scope.Variables.notifMsg.setMessage("Input Modified Date To");
                $scope.Variables.notifMsg.notify();
                return false;
            }

            if (m_USRDATEto !== "" && !m_USRDATEfrom) {
                $scope.Variables.notifMsg.setMessage("Input Modified Date From");
                $scope.Variables.notifMsg.notify();
                return false;
            }

            $scope.Variables.svProcYM1311PK0_YM650QueryStockDetails.invoke();
        };


        $scope.button7Click = function($event, $isolateScope) {
            var m_STRCODE = $scope.Widgets.formClosedStockSummary.formWidgets.p_STRCODE.datavalue;
            var m_MATERIALCODE = $scope.Widgets.formClosedStockSummary.formWidgets.p_MATERIALCODE.datavalue;
            var m_FIBREREF = $scope.Widgets.formClosedStockSummary.formWidgets.p_FIBREREF.datavalue;
            var m_STKYEAR = $scope.Widgets.formClosedStockSummary.formWidgets.p_STKYEAR.datavalue;

            if (!m_STRCODE && !m_MATERIALCODE && !m_FIBREREF && !m_STKYEAR) {
                $scope.Variables.notifMsg.setMessage("Input A value to query");
                $scope.Variables.notifMsg.notify();
                return false;
            }

            $scope.Variables.svProcYM1311PK0_YM650ClosedStockSummary.invoke();
        };


        $scope.button9Click = function($event, $isolateScope) {
            var m_MATERIALCODE = $scope.Widgets.formTemplateMaterialRef.formWidgets.p_MATERIALCODE1.datavalue;
            var m_MATUSERCODE = $scope.Widgets.formTemplateMaterialRef.formWidgets.p_MATUSERCODE1.datavalue;
            var m_selectItemType = $scope.Widgets.formTemplateMaterialRef.formWidgets.selectItemType.datavalue;
            var m_selectMATCTYCOD = $scope.Widgets.formTemplateMaterialRef.formWidgets.selectMATCTYCOD.datavalue;
            var m_selectMATCPS = $scope.Widgets.formTemplateMaterialRef.formWidgets.selectMATCPS.datavalue;
            var m_selectMATCLR = $scope.Widgets.formTemplateMaterialRef.formWidgets.selectMATCLR.datavalue;
            var m_MATCLRREF = $scope.Widgets.formTemplateMaterialRef.formWidgets.p_MATCLRREF.datavalue;
            var m_STS = $scope.Widgets.formTemplateMaterialRef.formWidgets.p_STS.datavalue;

            if (!m_MATERIALCODE && !m_MATUSERCODE && !m_selectItemType && !m_selectMATCTYCOD && !m_selectMATCPS && !m_selectMATCLR && !m_MATCLRREF && !m_STS) {
                $scope.Variables.notifMsg.setMessage("Input A value to query");
                $scope.Variables.notifMsg.notify();
                return false;
            }

            $scope.Variables.svProcYM1311PK0_YM650TemplateMaterialRef.invoke();
        };


        $scope.button12Click = function($event, $isolateScope) {
            var m_TRNNUM = $scope.Widgets.formReceiptofMaterials.formWidgets.p_TRNNUM.datavalue;
            var m_selectTSTRCOD = $scope.Widgets.formReceiptofMaterials.formWidgets.selectTSTRCOD.datavalue;
            var m_SUPDN = $scope.Widgets.formReceiptofMaterials.formWidgets.p_SUPDN.datavalue;
            var m_STATUS = $scope.Widgets.formReceiptofMaterials.formWidgets.p_STATUS.datavalue;
            var m_TRNDATE = $scope.Widgets.formReceiptofMaterials.formWidgets.p_TRNDATE.datavalue;
            var m_USRDATE = $scope.Widgets.formReceiptofMaterials.formWidgets.p_USRDATE.datavalue;

            if (!m_TRNNUM && !m_selectTSTRCOD && !m_SUPDN && !m_STATUS && !m_TRNDATE && !m_USRDATE) {
                $scope.Variables.notifMsg.setMessage("Input A value to query");
                $scope.Variables.notifMsg.notify();
                return false;
            }

            $scope.Variables.svProcYM1311PK0_YM650ReceiptofMaterials.invoke();
        };


        $scope.button14Click = function($event, $isolateScope) {
            var m_TRNNUM = $scope.Widgets.formIssueofMaterials.formWidgets.p_TRNNUM1.datavalue;
            var m_selectFSTRCOD = $scope.Widgets.formIssueofMaterials.formWidgets.selectFSTRCOD.datavalue;
            var m_TSTRCOD = $scope.Widgets.formIssueofMaterials.formWidgets.p_TSTRCOD.datavalue;
            var m_STATUS = $scope.Widgets.formIssueofMaterials.formWidgets.p_STATUS1.datavalue;
            var m_TRNDATE = $scope.Widgets.formIssueofMaterials.formWidgets.p_TRNDATE.datavalue;
            var m_USRDATE = $scope.Widgets.formIssueofMaterials.formWidgets.p_USRDATE.datavalue;

            if (!m_TRNNUM && !m_selectFSTRCOD && !m_TSTRCOD && !m_STATUS && !m_TRNDATE && !m_USRDATE) {
                $scope.Variables.notifMsg.setMessage("Input A value to query");
                $scope.Variables.notifMsg.notify();
                return false;
            }
            $scope.Variables.svProcYM1311PK0_YM650IssueofMaterials.invoke();
        };



        $scope.button15Click = function($event, $isolateScope) {
            if (!$scope.Widgets.lblTrnnumIn.caption) {
                $scope.Variables.notifMsg.setMessage(" query first");
                $scope.Variables.notifMsg.notify();
                return false;
            }
            $scope.Widgets.dialogUpdReceipt.open();
        };


        $scope.svProcYM1311PK0_YM650UpdMaterialsDesonSuccess = function(variable, data) {
            $scope.Widgets.dialogMaterialsDes.close();
            $scope.Widgets.gridMaterialsDes.refreshData();
        };


        $scope.button18Click = function($event, $isolateScope) {
            $scope.Widgets.dialogInsReceipt.open();
        };


        $scope.svProcYM1311PK0_YM650INSRcptofMaterialsonSuccess = function(variable, data) {
            $scope.Widgets.dialogInsReceipt.close();
            $scope.Widgets.formReceiptofMaterials.formWidgets.p_TRNNUM.datavalue = $scope.Variables.svProcYM1311PK0_YM650INSRcptofMaterials.dataSet.poutTrnnum;
            $scope.Variables.svProcYM1311PK0_YM650ReceiptofMaterials.dataBinding.p_TRNNUM = $scope.Variables.svProcYM1311PK0_YM650INSRcptofMaterials.dataSet.poutTrnnum;
            $scope.Variables.svProcYM1311PK0_YM650ReceiptofMaterials.dataBinding.p_TSTRCOD = null;
            $scope.Variables.svProcYM1311PK0_YM650ReceiptofMaterials.dataBinding.p_STATUS = null;
            $scope.Variables.svProcYM1311PK0_YM650ReceiptofMaterials.dataBinding.p_SUPDN = null;
            $scope.Variables.svProcYM1311PK0_YM650ReceiptofMaterials.dataBinding.p_TRNDATE = null;
            $scope.Variables.svProcYM1311PK0_YM650ReceiptofMaterials.dataBinding.p_USRDATE = null;
            $scope.Variables.svProcYM1311PK0_YM650ReceiptofMaterials.invoke();
        };


        $scope.svProcYM1311PK0_YM650UPDRcptofMaterialsonSuccess = function(variable, data) {
            $scope.Widgets.dialogUpdReceipt.close();
            $scope.Variables.svProcYM1311PK0_YM650ReceiptofMaterials.invoke();
        };


        $scope.button23Click = function($event, $isolateScope) {
            if (!$scope.Widgets.lblTrnnumIn.caption) {
                $scope.Variables.notifMsg.setMessage(" query first");
                $scope.Variables.notifMsg.notify();
                return false;
            }
            $scope.Widgets.dialogInsMaterialsDes.open();
        };


        $scope.svProcYM1311PK0_YM650InsMaterialsDesonSuccess = function(variable, data) {
            $scope.Widgets.dialogInsMaterialsDes.close();
            $scope.Widgets.gridMaterialsDes.refreshData();
        };


        $scope.svProcYM1311PK0_YM650DltMaterialsDesonSuccess = function(variable, data) {
            $scope.Widgets.dialogDltMaterialsDes.close();
            $scope.Widgets.gridMaterialsDes.refreshData();
        };


        $scope.svProcYM1311PK0_YM650UpdTemplateMtralRefonSuccess = function(variable, data) {
            $scope.Widgets.dialogTemplateMaterialRef.close();
            $scope.Widgets.gridTemplateMaterialRef.refreshData();
        };


        $scope.button31Click = function($event, $isolateScope) {
            $scope.Widgets.dialogInsTemplateMaterialRef.open();
        };


        $scope.svProcYM1311PK0_YM650InsTemplateMtralRefonSuccess = function(variable, data) {
            $scope.Widgets.dialogInsTemplateMaterialRef.close();
            $scope.Widgets.gridTemplateMaterialRef.refreshData();
        };


        $scope.button14_1Click = function($event, $isolateScope) {
            $scope.Widgets.dialogInsIssueOfMaterials.open();
        };


        $scope.svProcYM1311PK0_Ym650InsIssueofMaterialsonSuccess = function(variable, data) {
            $scope.Widgets.dialogInsIssueOfMaterials.close();
            $scope.Widgets.formIssueofMaterials.formWidgets.p_TRNNUM.datavalue = $scope.Variables.svProcYM1311PK0_Ym650InsIssueofMaterials.dataSet.poutTrnNum;
            $scope.Variables.svProcYM1311PK0_YM650IssueofMaterials.dataBinding.p_TRNNUM = $scope.Variables.svProcYM1311PK0_Ym650InsIssueofMaterials.dataSet.poutTrnNum;
            $scope.Variables.svProcYM1311PK0_YM650IssueofMaterials.dataBinding.p_FSTRCOD = null;
            $scope.Variables.svProcYM1311PK0_YM650IssueofMaterials.dataBinding.p_TSTRCOD = null;
            $scope.Variables.svProcYM1311PK0_YM650IssueofMaterials.dataBinding.p_STATUS = null;
            $scope.Variables.svProcYM1311PK0_YM650IssueofMaterials.dataBinding.p_TRNDATE = null;
            $scope.Variables.svProcYM1311PK0_YM650IssueofMaterials.dataBinding.p_USRDATE = null;
            $scope.Variables.svProcYM1311PK0_YM650IssueofMaterials.invoke();
        };


        $scope.button35Click = function($event, $isolateScope) {
            if (!$scope.Widgets.lblTRNNUMOut.caption) {
                $scope.Variables.notifMsg.setMessage(" query first");
                $scope.Variables.notifMsg.notify();
                return false;
            }
            $scope.Widgets.dialogIssueMaterialsDes.open();
        };


        $scope.svProcYM1311PK0_YM650InsIssueMatrlDesonSuccess = function(variable, data) {
            $scope.Widgets.dialogIssueMaterialsDes.close();
            $scope.Widgets.gridMaterialsDescriptionOUT.refreshData();
        };


        $scope.svProcYM1311PK0_YM650DltIssueMatrlDesonSuccess = function(variable, data) {
            $scope.Widgets.dialogIssueDltMaterialsDes.close();
            $scope.Widgets.gridMaterialsDescriptionOUT.refreshData();
        };


        $scope.svProcYM1311PK0_YM650UpdIssueMatrlDesonSuccess = function(variable, data) {
            $scope.Widgets.dialogIssueUpdMaterialsDes.close();
            $scope.Widgets.gridMaterialsDescriptionOUT.refreshData();
        };


        $scope.button42Click = function($event, $isolateScope) {
            if (!$scope.Widgets.lblTRNNUMOut.caption) {
                $scope.Variables.notifMsg.setMessage("You must query the Transaction No");
                $scope.Variables.notifMsg.notify();
                return false;
            }
            if ($scope.Widgets.lblStsout.caption !== undefined && $scope.Widgets.lblStsout.caption !== 'WIP') {
                $scope.Variables.notifMsg.setMessage("Invalid Status - please check with IT dept");
                $scope.Variables.notifMsg.notify();
                return false;
            }
            if ($scope.Variables.svQryYM650_IssueTrnnum.dataSet.issuetrnnum === 0) {
                $scope.Variables.notifMsg.setMessage("You are not allowed to proceed - 'Weight' to transfer/issue cannot be blank.");
                $scope.Variables.notifMsg.notify();
                return false;
            }
            $scope.Widgets.dialogReleaseIssueofMaterials.open();
        };


        $scope.svProcYM1311PK0_YM650ReleaseIssueTrnnumonSuccess = function(variable, data) {
            $scope.Widgets.dialogReleaseIssueofMaterials.close();
            $scope.Variables.notifMsg.setMessage("The Material has been issued successfully.");
            $scope.Variables.notifMsg.notify();
        };


        $scope.button45Click = function($event, $isolateScope) {
            if (!$scope.Widgets.lblTrnnumIn.caption) {
                $scope.Variables.notifMsg.setMessage("You must query the Transaction No");
                $scope.Variables.notifMsg.notify();
                return false;
            }
            if ($scope.Widgets.lblStatus.caption !== undefined && $scope.Widgets.lblStatus.caption !== 'WIP') {
                $scope.Variables.notifMsg.setMessage("Invalid Status - please check with IT dept.");
                $scope.Variables.notifMsg.notify();
                return false;
            }
            if ($scope.Variables.svQryYM650_receiptTrnnum.dataSet.receipttrnnum === 0) {
                $scope.Variables.notifMsg.setMessage("You are not allowed to proceed - 'Weight received' cannot be blank.");
                $scope.Variables.notifMsg.notify();
                return false;
            }
            $scope.Widgets.dialogReleaseReceiptofMaterials.open();
        };


        $scope.svProcYM1311PK0_YM650ReleaseRecptTrnnumonSuccess = function(variable, data) {
            $scope.Widgets.dialogReleaseReceiptofMaterials.close();
            $scope.Variables.notifMsg.setMessage("Records have been uploaded successfully.");
            $scope.Variables.notifMsg.notify();
        };


        $scope.p_TRNNUMChange = function($event, $isolateScope, newVal, oldVal) {
            $scope.Widgets.formReceiptofMaterials.formWidgets.p_TRNNUM.datavalue = newVal.toUpperCase();
        };


        $scope.p_SUPDNChange = function($event, $isolateScope, newVal, oldVal) {
            $scope.Widgets.formReceiptofMaterials.formWidgets.p_SUPDN.datavalue = newVal.toUpperCase();
        };


        $scope.p_STATUSChange = function($event, $isolateScope, newVal, oldVal) {
            $scope.Widgets.formReceiptofMaterials.formWidgets.p_STATUS.datavalue = newVal.toUpperCase();
        };


        $scope.p_STRCODChange = function($event, $isolateScope, newVal, oldVal) {
            $scope.Widgets.formQueryStockDetails.formWidgets.p_STRCOD.datavalue = newVal.toUpperCase();
        };


        $scope.p_MATERIALCODEChange = function($event, $isolateScope, newVal, oldVal) {
            $scope.Widgets.formQueryStockDetails.formWidgets.p_MATERIALCODE.datavalue = newVal.toUpperCase();
        };


        $scope.p_MATUSERCODEChange = function($event, $isolateScope, newVal, oldVal) {
            $scope.Widgets.formQueryStockDetails.formWidgets.p_MATUSERCODE.datavalue = newVal.toUpperCase();
        };


        $scope.p_TRNNUM1Change = function($event, $isolateScope, newVal, oldVal) {
            $scope.Widgets.formIssueofMaterials.formWidgets.p_TRNNUM1.datavalue = newVal.toUpperCase();
        };


        $scope.p_TSTRCODChange = function($event, $isolateScope, newVal, oldVal) {
            $scope.Widgets.formIssueofMaterials.formWidgets.p_TSTRCOD.datavalue = newVal.toUpperCase();
        };


        $scope.p_STATUS1Change = function($event, $isolateScope, newVal, oldVal) {
            $scope.Widgets.formIssueofMaterials.formWidgets.p_STATUS1.datavalue = newVal.toUpperCase();
        };


        $scope.p_MATERIALCODE1Change = function($event, $isolateScope, newVal, oldVal) {
            $scope.Widgets.formTemplateMaterialRef.formWidgets.p_MATERIALCODE1.datavalue = newVal.toUpperCase();
        };


        $scope.p_MATUSERCODE1Change = function($event, $isolateScope, newVal, oldVal) {
            $scope.Widgets.formTemplateMaterialRef.formWidgets.p_MATUSERCODE1.datavalue = newVal.toUpperCase();
        };


        $scope.p_MATCLRREFChange = function($event, $isolateScope, newVal, oldVal) {
            $scope.Widgets.formTemplateMaterialRef.formWidgets.p_MATCLRREF.datavalue = newVal.toUpperCase();
        };


        $scope.p_STSChange = function($event, $isolateScope, newVal, oldVal) {
            $scope.Widgets.formTemplateMaterialRef.formWidgets.p_STS.datavalue = newVal.toUpperCase();
        };


        $scope.button10Click = function($event, $isolateScope) {
            $scope.Variables.svProcYM1311PK0_YM650ReceiptofMaterials.dataSet = null;
            $scope.Variables.svProcYM1311PK0_YM650MaterialsDesIN.dataSet = null;
        };


        $scope.button1Click = function($event, $isolateScope) {
            $scope.Variables.svProcYM1311PK0_YM650QueryStockDetails.dataSet = null;
        };


        $scope.button5Click = function($event, $isolateScope) {
            $scope.Variables.svProcYM1311PK0_YM650ClosedStockSummary.dataSet = null;
        };


        $scope.button12_1Click = function($event, $isolateScope) {
            $scope.Variables.svProcYM1311PK0_YM650IssueofMaterials.dataSet = null;
            $scope.Variables.svProcYM1311PK0_YM650MaterialsDesOUT.dataSet = null;
        };


        $scope.button7_1Click = function($event, $isolateScope) {
            $scope.Variables.svProcYM1311PK0_YM650TemplateMaterialRef.dataSet = null;
        };

    };
}]);


Application.$controller("gridSTOCKDETController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("gridClosedStockSummaryController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("gridTemplateMaterialRefController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.customFieldAction = function(selectedItemData) {
            $scope.Widgets.dialogTemplateMaterialRef.open();
        };

    }
]);

Application.$controller("gridMaterialsDesController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.customFieldAction = function(selectedItemData) {
            $scope.Widgets.dialogMaterialsDes.open();
        };


        $scope.deleterowAction = function($event, $rowData) {
            if ($scope.Widgets.lblStatus.caption == 'REL') {
                $scope.Variables.notifMsg.setMessage("You are not allowed to delete record - already Released");
                $scope.Variables.notifMsg.notify();
                return false;
            }
            $scope.Widgets.dialogDltMaterialsDes.open();
        };

    }
]);

Application.$controller("gridMaterials DescriptionController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("gridMaterialsDescriptionOUTController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.deleterowAction = function($event, $rowData) {
            $scope.Widgets.dialogIssueDltMaterialsDes.open();
        };


        $scope.customFieldAction = function(selectedItemData) {
            $scope.Widgets.dialogIssueUpdMaterialsDes.open();
        };

    }
]);

Application.$controller("dialogUpdReceiptController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.button17Click = function($event, $isolateScope) {
            $scope.Variables.svProcYM1311PK0_YM650UPDRcptofMaterials.invoke();
        };

    }
]);

Application.$controller("dialogMaterialsDesController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.button20Click = function($event, $isolateScope) {
            $scope.Variables.svProcYM1311PK0_YM650UpdMaterialsDes.invoke();
        };

    }
]);

Application.$controller("dialogInsReceiptController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.button22Click = function($event, $isolateScope) {
            if (!$scope.Widgets.selectInsTSTRCOD.datavalue) {
                $scope.Variables.notifMsg.setMessage("You must specify destination store first");
                $scope.Variables.notifMsg.notify();
                return false;
            }
            $scope.Variables.svProcYM1311PK0_YM650INSRcptofMaterials.invoke();
        };

    }
]);

Application.$controller("dialogInsMaterialsDesController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.button25Click = function($event, $isolateScope) {
            $scope.Variables.svProcYM1311PK0_YM650InsMaterialsDes.invoke();
        };


        $scope.selectInsWMATUSERCODEChange = function($event, $isolateScope, newVal, oldVal) {
            $scope.Variables.svProcYM1311PK0_YM650InsMATERIALCODE.invoke();
        };

    }
]);

Application.$controller("dialogDltMaterialsDesController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.button27Click = function($event, $isolateScope) {
            $scope.Variables.svProcYM1311PK0_YM650DltMaterialsDes.invoke();
        };

    }
]);

Application.$controller("dialogTemplateMaterialRefController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.button29Click = function($event, $isolateScope) {
            if ($scope.Widgets.txtUpdMATLENGTH.datavalue !== undefined && !$scope.Widgets.txtUpdMATLENGTH_UOM.datavalue) {
                $scope.Variables.notifMsg.setMessage("Uom for Material Length is required");
                $scope.Variables.notifMsg.notify();
                return false;
            }
            $scope.Variables.svProcYM1311PK0_YM650UpdTemplateMtralRef.invoke();
        };

    }
]);

Application.$controller("dialogInsTemplateMaterialRefController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.button32Click = function($event, $isolateScope) {
            if (!$scope.Widgets.txtInsMATUSERCODE.datavalue && !$scope.Widgets.selectInsITEMTYPE.datavalue) {
                $scope.Variables.notifMsg.setMessage("You have to input Fibre Reference And Item Type");
                $scope.Variables.notifMsg.notify();
                return false;
            }
            $scope.Variables.svProcYM1311PK0_YM650InsTemplateMtralRef.invoke();
        };

    }
]);

Application.$controller("dialogInsIssueOfMaterialsController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;


        $scope.button34Click = function($event, $isolateScope) {
            $scope.Variables.svProcYM1311PK0_Ym650InsIssueofMaterials.invoke();
        };

    }
]);

Application.$controller("dialogIssueMaterialsDesController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.button37Click = function($event, $isolateScope) {
            if (!$scope.Widgets.txtIssueInsTOTALWGT.datavalue) {
                $scope.Variables.notifMsg.setMessage("Delete the record - Qty cannot be blank/zero");
                $scope.Variables.notifMsg.notify();
                return false;
            }
            $scope.Variables.svProcYM1311PK0_YM650InsIssueMatrlDes.invoke();
        };

    }
]);

Application.$controller("dialogIssueDltMaterialsDesController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.button39Click = function($event, $isolateScope) {
            $scope.Variables.svProcYM1311PK0_YM650DltIssueMatrlDes.invoke();
        };

    }
]);

Application.$controller("dialogIssueUpdMaterialsDesController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.button41Click = function($event, $isolateScope) {
            if (!$scope.Widgets.txtIssueUpdTOTALWGT.datavalue) {
                $scope.Variables.notifMsg.setMessage("Delete the record - Qty cannot be blank/zero");
                $scope.Variables.notifMsg.notify();
                return false;
            }
            $scope.Variables.svProcYM1311PK0_YM650UpdIssueMatrlDes.invoke();
        };

    }
]);

Application.$controller("dialogReleaseIssueofMaterialsController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.button44Click = function($event, $isolateScope) {
            $scope.Variables.svProcYM1311PK0_YM650ReleaseIssueTrnnum.invoke();
        };

    }
]);

Application.$controller("dialogReleaseReceiptofMaterialsController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.button47Click = function($event, $isolateScope) {
            $scope.Variables.svProcYM1311PK0_YM650ReleaseRecptTrnnum.invoke();
        };

    }
]);