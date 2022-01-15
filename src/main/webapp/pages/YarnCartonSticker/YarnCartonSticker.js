Application.$controller("YarnCartonStickerPageController", ["$scope", function($scope) {
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


    $scope.button3Click = function($event, $isolateScope) {
        var m_CARTONID = $scope.Widgets.formFilter.formWidgets.p_CARTONID.datavalue;
        var m_YRNCOD = $scope.Widgets.formFilter.formWidgets.p_YRNCOD.datavalue;
        var m_IST_REQNUM = $scope.Widgets.formFilter.formWidgets.p_IST_REQNUM.datavalue;

        if (!m_CARTONID && !m_YRNCOD && !m_IST_REQNUM) {
            $scope.Variables.notifMsg.setMessage("Input A value.");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        $scope.Variables.svProcYM1311PK0_YM284YarnCartonSticker.invoke();
        $scope.Variables.statForBtnQry.dataSet.dataValue = "N";
    };


    $scope.svProcYM1311PK0_YM284YarnCartonStickeronError = function(variable, data, options) {
        $scope.Variables.statForBtnQry.dataSet.dataValue = "Y";
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
        }
    };

    $scope.svProcYM1311PK0_YM284YarnCartonStickeronSuccess = function(variable, data, options) {
        $scope.Variables.statForBtnQry.dataSet.dataValue = "Y";
    };


    $scope.svProcYM1311PK0_YM284UpdYarnCrtnStickeronSuccess = function(variable, data) {
        $scope.Widgets.dialogUpdYarnCartonSticker.close();
        $scope.Widgets.gridCartonSticker.refreshData();
    };


    $scope.button3_1Click = function($event, $isolateScope) {
        $scope.Widgets.dialogInsYarnCartonSticker.open();
    };


    $scope.svProcYM1311PK0_YM284InsYarnCrtnStickeronSuccess = function(variable, data) {
        $scope.Widgets.dialogInsYarnCartonSticker.close();
        $scope.Widgets.formFilter.formWidgets.p_CARTONID.datavalue = data.pcartonid;
        $scope.Variables.svProcYM1311PK0_YM284YarnCartonSticker.invoke({
                "inputFields": {
                    "pprgid": $scope.Variables.statPrgid.dataSet.dataValue,
                    "pCARTONID": data.pcartonid,
                    "pYRNCOD": "",
                    "pISTREQNUM": ""
                }
            },
            function(data) {},
            function(error) {
                $scope.Variables.notifMsg.setAlertType("error");
                $scope.Variables.notifMsg.setMessage("Error: " + error);
                $scope.Variables.notifMsg.notify();
            }
        );
        $scope.Variables.svProcYM1311PK0_YM284validate_reqnum.dataSet = null;
        $scope.Widgets.txtFCARTONID.datavalue = $scope.Variables.svProcYM1311PK0_YM284InsYarnCrtnSticker.dataSet.pcartonid;
        $scope.Widgets.txtTCARTONID.datavalue = $scope.Variables.svProcYM1311PK0_YM284InsYarnCrtnSticker.dataSet.pcartonid;
        $scope.Variables.notifMsg.setMessage("Carton ID" + " " + data.pcartonid + " " + "is created.");
        $scope.Variables.notifMsg.notify();
    };

    $scope.svProcYM1311PK0_YM284InsYarnCrtnStickeronError = function(variable, data, options) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
        }
    };


    $scope.button1Click = function($event, $isolateScope) {
        $scope.Variables.svProcYM1311PK0_YM284YarnCartonSticker.dataSet = null;
        $scope.Widgets.txtFCARTONID.datavalue = null;
        $scope.Widgets.txtTCARTONID.datavalue = null;
    };


    $scope.svProcYM1311PK0_YM284validate_reqnumonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            $scope.Widgets.txtInsIST_REQNUM.datavalue = null;
        }

    };


    $scope.svProcYM1311PK0_YM284validate_yrncodonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            $scope.Widgets.txtInsYRNCOD.datavalue = null;
        }
    };


    $scope.p_CARTONIDChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.p_CARTONID.datavalue = newVal.toUpperCase();
    };


    $scope.p_YRNCODChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.p_YRNCOD.datavalue = newVal.toUpperCase();
    };


    $scope.p_IST_REQNUMChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.p_IST_REQNUM.datavalue = newVal.toUpperCase();
    };


    $scope.svProcYM1311PK0_YM284UpdYarnCrtnStickeronError = function(variable, data, options) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
        }
    };

}]);


Application.$controller("gridCartonStickerController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;


        $scope.customFieldAction = function(selectedItemData) {
            $scope.Widgets.dialogUpdYarnCartonSticker.open();
        };

    }
]);

Application.$controller("dialogInsYarnCartonStickerController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;


        $scope.txtInsIST_REQNUMChange = function($event, $isolateScope, newVal, oldVal) {
            if (!$scope.Widgets.txtInsYRNCOD.datavalue && $scope.Widgets.txtInsIST_REQNUM.datavalue !== undefined) {
                $scope.Variables.notifMsg.setMessage("Input the Yarn Code");
                $scope.Variables.notifMsg.notify();
                $scope.Widgets.txtInsIST_REQNUM.datavalue = null;
                return false;
            }
            if ($scope.Widgets.txtInsYRNCOD.datavalue !== undefined && $scope.Widgets.txtInsIST_REQNUM.datavalue !== undefined) {
                $scope.Variables.svProcYM1311PK0_YM284validate_reqnum.invoke();
            }
        };

        $scope.txtInsNUMCONChange = function($event, $isolateScope, newVal, oldVal) {
            if ($scope.Widgets.txtInsNUMCON.datavalue > 0) {
                if ($scope.Widgets.lblInsNETWGT.caption > 0) {
                    $scope.Widgets.txtInsCONWGT.datavalue = $scope.Widgets.lblInsNETWGT.caption / $scope.Widgets.txtInsNUMCON.datavalue;
                }
            }
        };


        $scope.button7Click = function($event, $isolateScope) {
            if (!$scope.Widgets.txtInsYRNCOD.datavalue || !$scope.Widgets.txtInsIST_REQNUM.datavalue || !$scope.Widgets.txtInsCARTONLEN.datavalue || !$scope.Widgets.txtInsCARTONWID.datavalue || !$scope.Widgets.txtInsCARTONHGT.datavalue || !$scope.Widgets.selectInsCARTONDIMUOM.datavalue || !$scope.Widgets.txtInsGROSSWGT.datavalue || !$scope.Widgets.txtInsNUMCON.datavalue || !$scope.Widgets.txtInsCONWGT.datavalue) {
                $scope.Variables.notifMsg.setMessage("Yarn code, Request #, carton dimension, carton weight, cones per carton and cone weight are required");
                $scope.Variables.notifMsg.notify();
                return false;
            }
            if ($scope.Widgets.txtInsGROSSWGT.datavalue > 0 && $scope.Widgets.txtInsTAREWGT.datavalue > 0 && $scope.Widgets.txtInsTAREWGT.datavalue >= $scope.Widgets.txtInsGROSSWGT.datavalue) {
                $scope.Variables.notifMsg.setMessage("Tare wgt cannot be greater than or equal to gross wgt");
                $scope.Variables.notifMsg.notify();
                return false;
            }
            if ($scope.Widgets.txtInsNUMCARTONS.datavalue * $scope.Widgets.lblInsNETWGT.caption > $scope.Widgets.lblInsCARTONQTY_AVAIL.caption) {
                $scope.Variables.notifMsg.setMessage("Not enough qty in warehouse to create cartons.Qty available for carton is" + " " + $scope.Widgets.lblInsCARTONQTY_AVAIL.caption);
                $scope.Variables.notifMsg.notify();
                return false;
            }
            if ($scope.Widgets.lblInsNETWGT.caption > $scope.Widgets.lblInsCARTONQTY_AVAIL.caption) {
                $scope.Variables.notifMsg.setMessage("There is not enough qty available to create cartons. Available=" + " " + $scope.Widgets.lblInsCARTONQTY_AVAIL.caption);
                $scope.Variables.notifMsg.notify();
                return false;
            }
            if (!$scope.Widgets.lblInsNETWGT.caption) {
                $scope.Variables.notifMsg.setMessage("Net wgt cannot be zero. Enter gross and tare wgt");
                $scope.Variables.notifMsg.notify();
                return false;
            }
            if (!$scope.Widgets.lblInsCARTONQTY_AVAIL.caption) {
                $scope.Variables.notifMsg.setMessage("There is no qty available to create cartons");
                $scope.Variables.notifMsg.notify();
                return false;
            }
            if (!$scope.Widgets.txtInsNUMCARTONS.datavalue) {
                $scope.Variables.notifMsg.setMessage("Number of cartons to create should be greater than zero");
                $scope.Variables.notifMsg.notify();
                return false;
            }
            $scope.Variables.svProcYM1311PK0_YM284InsYarnCrtnSticker.invoke();
        };

    }
]);

Application.$controller("dialogUpdYarnCartonStickerController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.button6Click = function($event, $isolateScope) {
            var m_CARTONDIMUOM = $scope.Widgets.txtUpdCARTONDIMUOM.datavalue;

            if (m_CARTONDIMUOM !== "CM" && m_CARTONDIMUOM !== "M") {
                $scope.Variables.notifMsg.setMessage("Only M or CM is allowed");
                $scope.Variables.notifMsg.notify();
                return false;
            }

            $scope.Variables.svProcYM1311PK0_YM284UpdYarnCrtnSticker.invoke();
        };

        $scope.getConWgt = function($isolateScope) {
            var m_GROSSWGT = $scope.Widgets.txtUpdGROSSWGT.datavalue;
            var m_TAREWGT = $scope.Widgets.txtUpdTAREWGT.datavalue;
            var m_NUMCON = $scope.Widgets.txtUpdNUMCON.datavalue;

            if (!!m_NUMCON) {
                if (!!m_GROSSWGT) {
                    $scope.Widgets.txtUpdCONWGT.datavalue = (m_GROSSWGT - m_TAREWGT) / m_NUMCON;
                }
            }
        };

        $scope.txtUpdNUMCONChange = function($event, $isolateScope, newVal, oldVal) {
            $scope.getConWgt($scope);
        };


        $scope.txtUpdGROSSWGTChange = function($event, $isolateScope, newVal, oldVal) {
            $scope.getConWgt($scope);
        };


        $scope.txtUpdTAREWGTChange = function($event, $isolateScope, newVal, oldVal) {
            $scope.getConWgt($scope);
        };

    }
]);