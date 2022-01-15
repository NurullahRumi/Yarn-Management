Application.$controller("partialPackingListPageController", ["$scope", function($scope) {
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
        if ($scope.pageParams.pContractid !== undefined && $scope.pageParams.pContractid !== null && $scope.pageParams.pContractid !== "") {
            $scope.Variables.svProcYM40000PK0_YM400PList.dataBinding.pContractid = $scope.pageParams.pContractid;
        }

        if ($scope.pageParams.pYnitemno !== undefined && $scope.pageParams.pYnitemno !== null && $scope.pageParams.pYnitemno !== "") {
            $scope.Variables.svProcYM40000PK0_YM400PList.dataBinding.pYnitemno = $scope.pageParams.pYnitemno;
        }


        if ($scope.pageParams.pContainerSeq !== undefined && $scope.pageParams.pContainerSeq !== null && $scope.pageParams.pContainerSeq !== "") {
            $scope.Variables.svProcYM40000PK0_YM400PList.dataBinding.pContainerSeq = $scope.pageParams.pContainerSeq;
        }


        if ($scope.Variables.svProcYM40000PK0_YM400PList.dataBinding.pContractid !== undefined || $scope.Variables.svProcYM40000PK0_YM400PList.dataBinding.pYnitemno !== undefined || $scope.Variables.svProcYM40000PK0_YM400PList.dataBinding.pContainerSeq !== undefined) {

            $scope.Variables.svProcYM40000PK0_YM400PList.invoke(

                {
                    "inputFields": {
                        "pContractid": $scope.pageParams.pContractid,
                        "pYnitemno": $scope.pageParams.pYnitemno,
                        "pContainerSeq": $scope.pageParams.pContainerSeq
                    }
                },
                function(data) {},
                function(error) {
                    $scope.Variables.notifMsg.setAlertType("error");
                    $scope.Variables.notifMsg.setMessage("Error: " + error);
                    $scope.Variables.notifMsg.notify();
                });
        }
    };


    $scope.svProcYM4000PK0_YM400UpdPListonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            return false;
        }
    };

    $scope.svProcYM4000PK0_YM400UpdPListonSuccess = function(variable, data) {
        $scope.Widgets.dialogUpdPList.close();
        $scope.Widgets.tablePList.refreshData();
    };


    $scope.svProcYM4000PK0_YM400RgPalletCatonSuccess = function(variable, data) {
        if ($scope.Widgets.selectUpdPalletCat.datavalue == 'C') {
            $scope.Widgets.txtUpdNumCones.readonly = true;
        } else if ($scope.Widgets.selectUpdPalletCat.datavalue == 'N') {
            $scope.Widgets.txtUpdConCar.readonly = true;
            $scope.Widgets.txtUpdCarPall.readonly = true;
        } else {
            $scope.Widgets.txtUpdNumPal.readonly = true;
            $scope.Widgets.txtUpdNumCones.readonly = true;
        }
    };


    $scope.btnOpndlgInsPListClick = function($event, $isolateScope) {
        if ($scope.pageParams.pContractid == undefined) {
            $scope.Variables.notifMsg.setMessage("Query First");
            $scope.Variables.notifMsg.notify();
            return false;
        }
        $scope.Variables.svProcYM4000PK0_YM400RgPalletCat.invoke();
        $scope.Widgets.dialogUpdPList.open();
        SlctBtn = 'Others';
    };


    $scope.svProcYM4000PK0_YM400InsPListonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            return false;
        }
    };

    $scope.svProcYM4000PK0_YM400InsPListonSuccess = function(variable, data) {
        $scope.Widgets.dialogUpdPList.close();
        $scope.Widgets.tablePList.refreshData();
    };


    $scope.svProcYM4000PK0_YM400DltPListonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            return false;
        }
    };

    $scope.svProcYM4000PK0_YM400DltPListonSuccess = function(variable, data) {
        $scope.Widgets.dialogDltPList.close();
        $scope.Widgets.tablePList.refreshData();
    };

}]);

var SlctBtn;
Application.$controller("tablePListController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.cfUpdPListAction = function(selectedItemData) {
            $scope.Variables.svProcYM4000PK0_YM400RgPalletCat.invoke();
            $scope.Widgets.dialogUpdPList.open();
            SlctBtn = 'Update';
        };


        $scope.cfDltPListAction = function(selectedItemData) {
            $scope.Widgets.dialogDltPList.open();
        };
    }
]);

Application.$controller("dialogUpdPListController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.btnUpdPListClick = function($event, $isolateScope) {
            debugger;
            var m_PalletCat = $scope.Widgets.selectUpdPalletCat.datavalue;
            var m_NumPal = $scope.Widgets.txtUpdNumPal.datavalue;
            var m_ConCar = $scope.Widgets.txtUpdConCar.datavalue;
            var m_CarPall = $scope.Widgets.txtUpdCarPall.datavalue;
            var m_ConWgt = $scope.Widgets.txtUpdConWgt.datavalue;

            if (!m_PalletCat) {
                $scope.Variables.notifMsg.setMessage("Input pallet type");
                $scope.Variables.notifMsg.notify();
                return false;
            }

            if (!m_ConWgt || m_ConWgt <= 0) {
                $scope.Variables.notifMsg.setMessage("Cone Weight must be greater than 0.");
                $scope.Variables.notifMsg.notify();
                return false;
            }

            if (m_PalletCat !== "L") {
                if (!m_NumPal || m_NumPal <= 0) {
                    $scope.Variables.notifMsg.setMessage("Number of pallets must be greater than 0");
                    $scope.Variables.notifMsg.notify();
                    return false;
                }

            }

            if (m_PalletCat == "C") {
                if ((!m_ConCar ? 0 : m_CarPall) <= 0 || (!m_CarPall ? 0 : m_CarPall) <= 0) {
                    $scope.Variables.notifMsg.setMessage("Cones per cartons/ No of Cartons must be greater than 0.");
                    $scope.Variables.notifMsg.notify();
                    return false;
                }
            }

            if ((!m_ConCar ? 0 : m_ConCar) <= 0 && (m_PalletCat !== "N")) {
                $scope.Variables.notifMsg.setMessage("Cones per Carton must be greater than 0.");
                $scope.Variables.notifMsg.notify();
                return false;
            }

            if ((!m_CarPall ? 0 : m_CarPall) <= 0 && (m_PalletCat !== "N")) {
                $scope.Variables.notifMsg.setMessage("No of Cartons must be greater than 0.");
                $scope.Variables.notifMsg.notify();
                return false;
            }

            if (SlctBtn == 'Update') {
                $scope.Variables.svProcYM4000PK0_YM400UpdPList.invoke();
            } else {
                $scope.Variables.svProcYM4000PK0_YM400InsPList.invoke();
            }
        };


        $scope.selectUpdPalletCatClick = function($event, $isolateScope) {
            if ($scope.Widgets.selectUpdPalletCat.datavalue == 'C') {
                $scope.Widgets.txtUpdNumCones.readonly = true;
                $scope.Widgets.txtUpdNumCones.datavalue = null;
            } else {
                $scope.Widgets.txtUpdNumCones.readonly = false;
            }
            if ($scope.Widgets.selectUpdPalletCat.datavalue == 'N') {
                $scope.Widgets.txtUpdConCar.readonly = true;
                $scope.Widgets.txtUpdConCar.datavalue = null;
                $scope.Widgets.txtUpdCarPall.readonly = true;
                $scope.Widgets.txtUpdCarPall.datavalue = null;
            } else {
                $scope.Widgets.txtUpdConCar.readonly = false;
                $scope.Widgets.txtUpdCarPall.readonly = false;
            }
            if ($scope.Widgets.selectUpdPalletCat.datavalue == 'L') {
                $scope.Widgets.txtUpdNumPal.readonly = true;
                $scope.Widgets.txtUpdNumPal.datavalue = null;
                $scope.Widgets.txtUpdNumCones.readonly = true;
                $scope.Widgets.txtUpdNumCones.datavalue = null;
            } else {
                $scope.Widgets.txtUpdNumPal.readonly = false;
            }
        };


        $scope.dialogUpdPListOpened = function($event, $isolateScope) {
            if (SlctBtn == 'Others') {
                $scope.Widgets.lblUpdPListContractID.caption = $scope.pageParams.pContractid;
                $scope.Widgets.lblUpdPListYnItemNo.caption = $scope.pageParams.pYnitemno;
                $scope.Widgets.lblUpdPListContainerSeq.caption = $scope.pageParams.pContainerSeq;
                $scope.Widgets.lblUpdPListPalletSeq.caption = undefined;
                $scope.Widgets.selectUpdPalletCat.datavalue = null;
                $scope.Widgets.txtUpdNumPal.datavalue = null;
                $scope.Widgets.txtUpdConWgt.datavalue = null;
                $scope.Widgets.txtUpdConCar.datavalue = null;
                $scope.Widgets.txtUpdCarPall.datavalue = null;
                $scope.Widgets.txtUpdNumCones.datavalue = null;
            }
        };

        $scope.CalPlistQty = function($isolateScope) {

            var m_PalletCat = $scope.Widgets.selectUpdPalletCat.datavalue;
            var m_NumPal = $scope.Widgets.txtUpdNumPal.datavalue;
            var m_ConWgt = $scope.Widgets.txtUpdConWgt.datavalue;
            var m_ConCar = $scope.Widgets.txtUpdConCar.datavalue;
            var m_CarPall = $scope.Widgets.txtUpdCarPall.datavalue;
            var m_NumCones = $scope.Widgets.txtUpdNumCones.datavalue;

            if (m_PalletCat == "C") {
                $scope.Widgets.txtUpdNumCones.datavalue = (!m_ConCar ? 1 : m_ConCar) * (!m_CarPall ? 1 : m_CarPall);
            } else if (m_PalletCat == "N") {
                null;
            } else if (m_PalletCat == "L") {
                $scope.Widgets.txtUpdNumCones.datavalue = (!m_ConCar ? 1 : m_ConCar) * (!m_CarPall ? 1 : m_CarPall);
            }
        };

        $scope.txtUpdNumPalChange = function($event, $isolateScope, newVal, oldVal) {
            debugger;
            $scope.CalPlistQty($scope);
        };


        $scope.txtUpdConWgtChange = function($event, $isolateScope, newVal, oldVal) {
            $scope.CalPlistQty($scope);
        };


        $scope.txtUpdConCarChange = function($event, $isolateScope, newVal, oldVal) {
            $scope.CalPlistQty($scope);
        };


        $scope.txtUpdCarPallChange = function($event, $isolateScope, newVal, oldVal) {
            $scope.CalPlistQty($scope);
        };


        $scope.txtUpdNumConesChange = function($event, $isolateScope, newVal, oldVal) {
            $scope.CalPlistQty($scope);
        };

    }
]);

Application.$controller("dialogDltPListController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.btnDltPListClick = function($event, $isolateScope) {
            $scope.Variables.svProcYM4000PK0_YM400DltPList.invoke();
        };

    }
]);