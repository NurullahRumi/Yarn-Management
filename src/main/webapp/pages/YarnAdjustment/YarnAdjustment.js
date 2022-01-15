Application.$controller("YarnAdjustmentPageController", ["$scope", function($scope) {
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
            $scope.Variables.svProcYM1000PKO_YM155Master.invoke();
        }
    };


    $scope.button3Click = function($event, $isolateScope) {

        var m_Yrncod = $scope.Widgets.formFilter.formWidgets.p_YRNCOD.datavalue;

        if (!m_Yrncod) {
            $scope.Variables.notifMsg.setMessage("Input a Value first");
            $scope.Variables.notifMsg.notify();
            return false;
        }
        $scope.Variables.svProcYM1000PKO_YM155Master.invoke();
        $scope.Variables.statForBtnQry.dataSet.dataValue = "N";
    };

    $scope.svProcYM1000PKO_YM155MasteronError = function(variable, data, options) {
        $scope.Variables.statForBtnQry.dataSet.dataValue = "Y";
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
        }
    };

    $scope.svProcYM1000PKO_YM155MasteronSuccess = function(variable, data) {
        $scope.Variables.statForBtnQry.dataSet.dataValue = "Y";
        $scope.Variables.svProcYM1000PKO_YM155DETAIL.invoke();
    };


    $scope.button6_1Click = function($event, $isolateScope) {
        if (!$scope.Widgets.lblYrncod.caption) {
            $scope.Variables.notifMsg.setMessage("Query First");
            $scope.Variables.notifMsg.notify();
            return false;
        }
        if ($scope.Widgets.lblStatus.caption == 'C') {
            $scope.Variables.notifMsg.setMessage("Yarn is already completed.");
            $scope.Variables.notifMsg.notify();
            return false;
        }
        var myarray = ["P", "A", "U", "R"];
        var test = $.inArray($scope.Widgets.lblStatus.caption, myarray);
        // returns index of 2 returns -1 if not in array

        if (test < 0) {
            $scope.Variables.notifMsg.setMessage("Yarn cannot be disabled.");
            $scope.Variables.notifMsg.notify();
            return false;
        }
        $scope.Widgets.dialogCmpltYrncod.open();
    };


    $scope.svProcYM1000PKO_YM155CpltYrnonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            $scope.Widgets.textareaCmpltCmt.datavalue = null;
        }
    };

    $scope.svProcYM1000PKO_YM155CpltYrnonSuccess = function(variable, data) {
        $scope.Widgets.dialogCmpltYrncod.close();
        $scope.Variables.svProcYM1000PKO_YM155Master.invoke();
        $scope.Widgets.textareaCmpltCmt.datavalue = null;
    };


    $scope.svProcYM1000PKO_YM155UpdDetailonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            $scope.Widgets.textareaUpdRemarks.datavalue = null;
        }
    };

    $scope.svProcYM1000PKO_YM155UpdDetailonSuccess = function(variable, data) {
        $scope.Widgets.dialogUpdDETAIL.close();
        $scope.Widgets.table1.refreshData();
        $scope.Widgets.txtUpdNEW_QTYPHYS.datavalue = null;
        $scope.Widgets.txtUpdNEW_QTYAVAIL.datavalue = null;
        $scope.Widgets.textareaUpdRemarks.datavalue = null;
    };


    $scope.p_YRNCODChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.p_YRNCOD.datavalue = newVal.toUpperCase();
    };


    $scope.p_YRNORIChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.p_YRNORI.datavalue = newVal.toUpperCase();
    };


    $scope.p_YRNLOTChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.formFilter.formWidgets.p_YRNLOT.datavalue = newVal.toUpperCase();
    };


    $scope.button1Click = function($event, $isolateScope) {
        $scope.Variables.svProcYM1000PKO_YM155Master.dataSet = null;
        $scope.Variables.svProcYM1000PKO_YM155DETAIL.dataSet = null;
    };


    $scope.btnViewYarnAllocationClick = function($event, $isolateScope) {
        var a = "1";
        window.open(window.location.origin + window.location.pathname + "#/ViewYarnAllocByYrncode?p_param1=" + a.concat($scope.Widgets.lblYrncod.caption), "View Yarn Allocation by Yarncode");
    };


    $scope.svQrySy9200pk0ProgurlonSuccess = function(variable, data) {
        if (data !== undefined) {
            window.open(data.progurl, "_blank");
        }
    };


    $scope.svQrySy9200pk0FormPathonSuccess = function(variable, data, options) {
        if (!!data.content[0].progurl) {
            window.open(data.content[0].progurl, '_blank');
        }
    };


    $scope.btnWHPlaceClick = function($event, $isolateScope) {
        if (!$scope.Widgets.lblYrncod.caption) {
            $scope.Variables.notifMsg.setMessage("Query First");
            $scope.Variables.notifMsg.notify();
            return false;
        }
        $scope.Variables.svQrySy9200pk0FormPath.setInput("pFmbpath", '/prod/pfs/wh/frm/wh140oc0.fmx');

        if (!!$scope.Widgets.lblYrncod.caption) {
            $scope.Variables.svQrySy9200pk0FormPath.setInput("pOtherParams", 'p_yrncod=' + $scope.Widgets.lblYrncod.caption);
        }

        $scope.Variables.svQrySy9200pk0FormPath.invoke();
    };

}]);

Application.$controller("table1Controller", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.customFieldAction = function(selectedItemData) {
            $scope.Widgets.dialogUpdDETAIL.open();
        };

    }
]);

Application.$controller("dialogCmpltYrncodController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.button8Click = function($event, $isolateScope) {
            if (!$scope.Widgets.textareaCmpltCmt.datavalue) {
                $scope.Variables.notifMsg.setMessage("Input a reason for completing yarn");
                $scope.Variables.notifMsg.notify();
                return false;
            }
            $scope.Variables.svProcYM1000PKO_YM155CpltYrn.invoke();
        };

    }
]);

Application.$controller("dialogUpdDETAILController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.button10Click = function($event, $isolateScope) {
            if (!$scope.Widgets.textareaUpdRemarks.datavalue) {
                $scope.Variables.notifMsg.setMessage("Input a reason for the adjustment.");
                $scope.Variables.notifMsg.notify();
                return false;
            }
            $scope.Variables.svProcYM1000PKO_YM155UpdDetail.invoke();
        };

    }
]);