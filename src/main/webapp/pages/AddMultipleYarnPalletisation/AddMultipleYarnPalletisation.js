Application.$controller("AddMultipleYarnPalletisationPageController", ["$scope", function($scope) {
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
    var i;
    var j;
    var k;
    var m_Source;
    var m_Dest;
    var m_DestDel;
    var str1;
    var str2;
    var str3;
    var m_SrcPallet = "";


    $scope.TableSourceRowinsert = function($event, $isolateScope, $rowData) {
        i = 0;
        var m_length = $scope.Variables.statViewSource.dataSet.length - 1;

        $scope.Variables.statViewSource.dataSet[m_length].SRCPALLET_SEQ = m_length + 1;

        if ($rowData.SRCPALLETID == 'CARTONS') {
            m_SrcPallet = $scope.Variables.svGetProcYM1000WPK0_YNTRANSFRM_YM430ConcatPallet.dataSet.poutPallet;
        } else {
            m_SrcPallet = $rowData.SRCPALLETID;
        }
        if (!concatPallet) {
            concatPallet = m_SrcPallet;
        } else {
            concatPallet = concatPallet + ',' + m_SrcPallet;
        }

        $scope.Variables.svGetProcYM1000WPK0_YNTRANSFRM_YM430RGYrncod.invoke({
                "inputFields": {
                    "pPalletid": concatPallet
                }
            },
            function(data) {},
            function(error) {
                $scope.Variables.notifMsg.setAlertType("error");
                $scope.Variables.notifMsg.setMessage("Error: " + error);
                $scope.Variables.notifMsg.notify();
            });

    };


    $scope.TableSourceBeforerowupdate = function($event, $isolateScope, $rowData) {
        if (!$rowData.SRCPALLETID) {
            $scope.Variables.notifMsg.setMessage("Input Pallet Id");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        if ($rowData.SRCPALLETID == 'CARTONS') {
            if (!$rowData.SRCYRNMIXCODE) {
                $scope.Variables.notifMsg.setMessage("Input Yarnmixcode");
                $scope.Variables.notifMsg.notify();
                return false;
            }

            if (!$rowData.SRCKGS) {
                $scope.Variables.notifMsg.setMessage("Src kgs connot be blank or 0.");
                $scope.Variables.notifMsg.notify();
                return false;
            }
        }
    };


    $scope.BtnSavClick = function($event, $isolateScope) {
        i = 0;
        j = 0;
        k = 0;
        m_Source = "";
        m_Dest = "";
        m_DestDel = "";

        if (!$scope.Widgets.selectWrhnum.datavalue) {
            $scope.Variables.notifMsg.setMessage("Input Warehouse");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        if ($scope.Widgets.TableSource.dataset.length === 0) {
            $scope.Variables.notifMsg.setMessage("Input Source");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        if ($scope.Widgets.TableDest.dataset.length === 0 || $scope.Widgets.TableDestDel.dataset.length === 0) {
            $scope.Variables.notifMsg.setMessage("Input Destination");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        for (i = 0; i < $scope.Variables.statViewSource.dataSet.length; i++) {

            if (!$scope.Variables.statViewSource.dataSet[i].SRCPALLETID) {
                $scope.Variables.notifMsg.setMessage("Input Pallet Id");
                $scope.Variables.notifMsg.notify();
                return false;
            }

            if ($scope.Variables.statViewSource.dataSet[i].SRCPALLETID == 'CARTONS') {
                if (!$scope.Variables.statViewSource.dataSet[i].SRCYRNMIXCODE) {
                    $scope.Variables.notifMsg.setMessage("Input Yarnmixcode");
                    $scope.Variables.notifMsg.notify();
                    return false;
                }

                if (!$scope.Variables.statViewSource.dataSet[i].SRCKGS) {
                    $scope.Variables.notifMsg.setMessage("Src kgs connot be blank or 0.");
                    $scope.Variables.notifMsg.notify();
                    return false;
                }
            }

            m_Source = m_Source + $scope.Variables.statViewSource.dataSet[i].SRCPALLET_SEQ + ';' + $scope.Variables.statViewSource.dataSet[i].SRCPALLETID + ';' + $scope.Variables.statViewSource.dataSet[i].WPALLETTYPE + ';' + $scope.Variables.statViewSource.dataSet[i].SRCYRNMIXCODE + ';' + (!$scope.Variables.statViewSource.dataSet[i].SRCKGS ? null : $scope.Variables.statViewSource.dataSet[i].SRCKGS) + ',';

            str1 = m_Source;
            str1 = str1.substring(0, str1.length - 1);
        }

        for (j = 0; j < $scope.Variables.statViewDest.dataSet.length; j++) {

            if (!$scope.Variables.statViewDest.dataSet[j].PALLETTYPE) {
                $scope.Variables.notifMsg.setMessage("Pallet Type must be entered for pallet sequence " + $rowData.DESTPALLET_SEQ);
                $scope.Variables.notifMsg.notify();
                return false;
            }

            if ($scope.Variables.statViewDest.dataSet[j].PALLETTYPE == 'L' && !$scope.Variables.statViewDest.dataSet[j].PALWGT) {
                $scope.Variables.notifMsg.setMessage("Pallet wgt need to be entered for loose.");
                $scope.Variables.notifMsg.notify();
                return false;
            } else if ($scope.Variables.statViewDest.dataSet[j].PALLETTYPE !== 'L' && !$scope.Variables.statViewDest.dataSet[j].WNUMPAL) {
                $scope.Variables.notifMsg.setMessage("Number of Pallets cannot be 0.");
                $scope.Variables.notifMsg.notify();
                return false;
            }

            m_Dest = m_Dest + $scope.Variables.statViewDest.dataSet[j].DESTPALLETSEQ + ';' + $scope.Variables.statViewDest.dataSet[j].PALLETTYPE + ';' + $scope.Variables.statViewSource.dataSet[0].SRCYRNMIXCODE + ';' + (!$scope.Variables.statViewDest.dataSet[j].ORDNUM ? "" : $scope.Variables.statViewDest.dataSet[j].ORDNUM) + ';' + (!$scope.Variables.statViewDest.dataSet[j].FABSEQ ? null : $scope.Variables.statViewDest.dataSet[j].FABSEQ) + ';' + (!$scope.Variables.statViewDest.dataSet[j].PALMOD_REQNUM ? "" : $scope.Variables.statViewDest.dataSet[j].PALMOD_REQNUM) + ';' + (!$scope.Variables.statViewDest.dataSet[j].WNUMPAL ? null : $scope.Variables.statViewDest.dataSet[j].WNUMPAL) + ';' + (!$scope.Variables.statViewDest.dataSet[j].PALWGT ? null : $scope.Variables.statViewDest.dataSet[j].PALWGT) + ',';

            str2 = m_Dest;
            str2 = str2.substring(0, str2.length - 1);
        }

        for (k = 0; k < $scope.Variables.statDestDel.dataSet.length; k++) {

            if (!$scope.Variables.statDestDel.dataSet[k].YRNCOD) {
                $scope.Variables.notifMsg.setMessage("Input Yarn code");
                $scope.Variables.notifMsg.notify();
                return false;
            }

            m_DestDel = m_DestDel + $scope.Variables.statDestDel.dataSet[k].DESTPALLET_SEQ + ';' + $scope.Variables.statDestDel.dataSet[k].YRNCOD + ';' + (!$scope.Variables.statDestDel.dataSet[k].CONWGT ? 0 : $scope.Variables.statDestDel.dataSet[k].CONWGT) + ';' + (!$scope.Variables.statDestDel.dataSet[k].CONCAR ? 0 : $scope.Variables.statDestDel.dataSet[k].CONCAR) + ';' + (!$scope.Variables.statDestDel.dataSet[k].CARPALL ? 0 : $scope.Variables.statDestDel.dataSet[k].CARPALL) + ';' + (!$scope.Variables.statDestDel.dataSet[k].NUMCONES ? 0 : $scope.Variables.statDestDel.dataSet[k].NUMCONES) + ';' + (!$scope.Variables.statDestDel.dataSet[k].PALWGT ? 0 : $scope.Variables.statDestDel.dataSet[k].PALWGT) + ';' + (!$scope.Variables.statViewDest.dataSet[$scope.Variables.statDestDel.dataSet[k].DESTPALLET_SEQ - 1].PALLETTYPE ? "" : $scope.Variables.statViewDest.dataSet[$scope.Variables.statDestDel.dataSet[k].DESTPALLET_SEQ - 1].PALLETTYPE) + ';' + (!$scope.Variables.statViewDest.dataSet[$scope.Variables.statDestDel.dataSet[k].DESTPALLET_SEQ - 1].WNUMPAL ? null : $scope.Variables.statViewDest.dataSet[$scope.Variables.statDestDel.dataSet[k].DESTPALLET_SEQ - 1].WNUMPAL) + ';' + (!$scope.Variables.statViewSource.dataSet[0].SRCYRNMIXCODE ? "" : $scope.Variables.statViewSource.dataSet[0].SRCYRNMIXCODE) + ';' + (!$scope.Variables.statViewDest.dataSet[$scope.Variables.statDestDel.dataSet[k].DESTPALLET_SEQ - 1].PALWGT ? null : $scope.Variables.statViewDest.dataSet[$scope.Variables.statDestDel.dataSet[k].DESTPALLET_SEQ - 1].PALWGT) + ';' + (!$scope.Variables.statViewDest.dataSet[$scope.Variables.statDestDel.dataSet[k].DESTPALLET_SEQ - 1].ORDNUM ? "" : !$scope.Variables.statViewDest.dataSet[$scope.Variables.statDestDel.dataSet[k].DESTPALLET_SEQ - 1].ORDNUM) + ';' + (!$scope.Variables.statViewDest.dataSet[$scope.Variables.statDestDel.dataSet[k].DESTPALLET_SEQ - 1].FABSEQ ? null : $scope.Variables.statViewDest.dataSet[$scope.Variables.statDestDel.dataSet[k].DESTPALLET_SEQ - 1].FABSEQ) + ';' + (!$scope.Variables.statViewDest.dataSet[$scope.Variables.statDestDel.dataSet[k].DESTPALLET_SEQ - 1].PALMODREQNUM ? "" : $scope.Variables.statViewDest.dataSet[$scope.Variables.statDestDel.dataSet[k].DESTPALLET_SEQ - 1].PALMODREQNUM) + ',';

            str3 = m_DestDel;
            str3 = str3.substring(0, str3.length - 1);
        }

        $scope.Variables.svCreateProcYM1000WPK0_YNTRANSFRM_YM430AddMulYrn.invoke({
                "inputFields": {
                    "pPrgid": $scope.Variables.StatPrgid.dataSet.dataValue,
                    "pDestDel": str3,
                    "pDest": str2,
                    "pSrcWrhnum": $scope.Widgets.selectWrhnum.datavalue,
                    "pSource": str1
                }
            },
            function(data) {},
            function(error) {
                $scope.Variables.notifMsg.setAlertType("error");
                $scope.Variables.notifMsg.setMessage("Error: " + error);
                $scope.Variables.notifMsg.notify();
            });
    };


    $scope.TableDestBeforerowinsert = function($event, $isolateScope, $rowData) {
        if (!$scope.Widgets.selectWrhnum.datavalue) {
            $scope.Variables.notifMsg.setMessage("Input Warehouse");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        if (!$rowData.PALLETTYPE) {
            $scope.Variables.notifMsg.setMessage("Pallet Type must be entered for pallet sequence " + $rowData.DESTPALLET_SEQ);
            $scope.Variables.notifMsg.notify();
            return false;
        }

        if ($rowData.PALLETTYPE == 'L' && !$rowData.PALWGT) {
            $scope.Variables.notifMsg.setMessage("Pallet wgt need to be entered for loose.");
            $scope.Variables.notifMsg.notify();
            return false;
        } else if ($rowData.PALLETTYPE !== 'L' && !$rowData.WNUMPAL) {
            $scope.Variables.notifMsg.setMessage("Number of Pallets cannot be 0.");
            $scope.Variables.notifMsg.notify();
            return false;
        }
    };


    $scope.TableDestRowinsert = function($event, $isolateScope, $rowData) {
        var m_length = $scope.Variables.statViewDest.dataSet.length - 1;
        $scope.Variables.statViewDest.dataSet[m_length].DESTPALLETSEQ = m_length + 1;
        $scope.Widgets.TableDest.refreshData();
    };


    $scope.TableDestBeforerowupdate = function($event, $isolateScope, $rowData) {
        if (!$rowData.PALLETTYPE) {
            $scope.Variables.notifMsg.setMessage("Pallet Type must be entered for pallet sequence " + $rowData.DESTPALLET_SEQ);
            $scope.Variables.notifMsg.notify();
            return false;
        }

        if ($rowData.PALLETTYPE == 'L' && !$rowData.PALWGT) {
            $scope.Variables.notifMsg.setMessage("Pallet wgt need to be entered for loose.");
            $scope.Variables.notifMsg.notify();
            return false;
        } else if ($rowData.PALLETTYPE !== 'L' && !$rowData.WNUMPAL) {
            $scope.Variables.notifMsg.setMessage("Number of Pallets cannot be 0.");
            $scope.Variables.notifMsg.notify();
            return false;
        }
    };


    $scope.TableDestDelBeforerowinsert = function($event, $isolateScope, $rowData) {
        if (!$rowData.YRNCOD) {
            $scope.Variables.notifMsg.setMessage("Input Yarn code");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        if (!$rowData.DESTPALLET_SEQ) {
            $scope.Variables.notifMsg.setMessage("Input Pallet Seq");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        if ($rowData.DESTPALLET_SEQ <= 0) {
            $scope.Variables.notifMsg.setMessage("Invalid Pallet Sequence!!!");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        if ($rowData.DESTPALLET_SEQ > $scope.Widgets.TableDest.dataset.length) {
            $scope.Variables.notifMsg.setMessage("Invalid Pallet Sequence!!!");
            $scope.Variables.notifMsg.notify();
            return false;
        }
    };


    $scope.TableDestDelRowinsert = function($event, $isolateScope, $rowData) {
        for (var j = 0; j < $scope.Variables.statViewDest.dataSet.length; j++) {
            if ($scope.Variables.statViewDest.dataSet[j].DESTPALLETSEQ == $rowData.DESTPALLET_SEQ && $scope.Variables.statViewDest.dataSet[j].PALLETTYPE !== 'L') {
                $scope.Variables.statViewDest.dataSet[j].PALWGT = (!$scope.Variables.statViewDest.dataSet[j].PALWGT ? 0 : $scope.Variables.statViewDest.dataSet[j].PALWGT) + (!$rowData.PALWGT ? 0 : $rowData.PALWGT);
            }
        }
        $scope.Widgets.TableDest.refreshData();
    };


    $scope.TableDestDelBeforerowupdate = function($event, $isolateScope, $rowData) {
        if (!$rowData.YRNCOD) {
            $scope.Variables.notifMsg.setMessage("Input Yarn code");
            $scope.Variables.notifMsg.notify();
            return false;
        }
    };

    $scope.svGetProcYM1000WPK0_YNTRANSFRM_YM430ConcatPalletonSuccess = function(variable, data) {

    };

    $scope.svCreateProcYM1000WPK0_YNTRANSFRM_YM430AddMulYrnonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
        }
    };

    $scope.svCreateProcYM1000WPK0_YNTRANSFRM_YM430AddMulYrnonSuccess = function(variable, data) {
        $scope.Variables.notifMsg.setAlertType("information");
        $scope.Variables.notifMsg.setMessage("Transformation Id" + " " + $scope.Variables.svCreateProcYM1000WPK0_YNTRANSFRM_YM430AddMulYrn.dataSet.poutPalmodnum + " " + " is created");
        $scope.Variables.notifMsg.notify();
    };


    $scope.svGetProcYM1000WPK0_YNTRANSFRM_YM430VldSrcPalletidonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            $scope.Widgets.TableSource.formfields.SRCPALLETID.setProperty('value', '');
        }
    };


    $scope.svGetProcYM1000WPK0_YNTRANSFRM_YM430VldYrnmixonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            $scope.Widgets.TableSource.formfields.SRCYRNMIXCODE.setProperty('value', '');
        }
    };


    $scope.svGetProcYM1000WPK0_YNTRANSFRM_YM430VldSrckgsonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            $scope.Widgets.TableSource.formfields.SRCKGS.setProperty('value', '');
        }
    };


    $scope.svGetProcYM1000WPK0_YNTRANSFRM_YM430VldFabseqonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            $scope.Widgets.TableDest.formfields.FABSEQ.setProperty('value', '');
        }
    };


    $scope.svGetProcYM1000WPK0_YNTRANSFRM_YM430VldPalmodReqonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            $scope.Widgets.TableDest.formfields.PALMODREQNUM.setProperty('value', '');
        }
    };


    $scope.svGetProcYM1000WPK0_YNTRANSFRM_YM430VldYrncodonError = function(variable, data) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            $scope.Widgets.TableDestDel.formfields.YRNCOD.setProperty('value', '');
            $scope.Widgets.TableDestDel.formfields.CONWGT.setProperty('value', '');
        }
    };


    $scope.svGetProcYM1000WPK0_YNTRANSFRM_YM430PalletTyponSuccess = function(variable, data, options) {
        $scope.Widgets.TableSource.formfields.WPALLETTYPE.setProperty('value', data.poutPaltyp);
    };


    $scope.svGetProcYM1000WPK0_YNTRANSFRM_YM430SrcPalletIdonSuccess = function(variable, data, options) {
        if (data.poutpal.length > 0) {
            $scope.Widgets.TableSource.formfields.SRCYRNMIXCODE.setProperty('value', data.poutpal[0].yrnmixcode);
            $scope.Widgets.TableSource.formfields.SRCKGS.setProperty('value', data.poutpal[0].qtyphys);
        }
    };


    $scope.TableSourceBeforerowinsert = function($event, $isolateScope, $rowData, options) {
        if (!$rowData.SRCPALLETID) {
            $scope.Variables.notifMsg.setMessage("Input Pallet Id");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        if ($rowData.SRCPALLETID == 'CARTONS') {
            if (!$rowData.SRCYRNMIXCODE) {
                $scope.Variables.notifMsg.setMessage("Input Yarnmixcode");
                $scope.Variables.notifMsg.notify();
                return false;
            }

            if (!$rowData.SRCKGS) {
                $scope.Variables.notifMsg.setMessage("Src kgs connot be blank or 0.");
                $scope.Variables.notifMsg.notify();
                return false;
            }
        }
    };


    $scope.TableDestRowdelete = function($event, $isolateScope, $rowData) {
        /////////////Need to be done later///////////////////
        //$scope.Variables.statDestDel.setInput($rowData);
        //Delete the data by invoking the variable
        //$scope.Variables.statDestDel.invoke({}, function() {
        //On success, call the refreshData on method to get the refreshed data
        //     $isolateScope.refreshData();
        // });
    };


    $scope.btnCpYrnMixClick = function($event, $isolateScope) {
        if ($scope.Widgets.TableSource.dataset.length === 0) {
            $scope.Variables.notifMsg.setMessage("Input Source");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        $scope.Widgets.dialogCpyYrnmix.open();
    };


    $scope.svGetProcYM1000WPK0_YNTRANSFRM_YM430CpyYrnMixonError = function(variable, data, options) {
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
        }
    };

    var m_seq;
    $scope.svGetProcYM1000WPK0_YNTRANSFRM_YM430CpyYrnMixonSuccess = function(variable, data, options) {

        var m_empty_rowDest = {
            PALMODNUM: "",
            DESTPALLETSEQ: !$scope.Variables.statViewDest.dataSet.length ? 1 : $scope.Variables.statViewDest.dataSet.length + 1,
            PALLETTYPE: $scope.Variables.svGetProcYM1000WPK0_YNTRANSFRM_YM430CpyYrnMix.dataSet.poutDestPallettype,
            YRNMIXCODE: "",
            ORDNUM: "",
            FABSEQ: "",
            PALMODREQNUM: "",
            WNUMPAL: $scope.Variables.svGetProcYM1000WPK0_YNTRANSFRM_YM430CpyYrnMix.dataSet.poutDestNumpal,
            PALWGT: $scope.Variables.svGetProcYM1000WPK0_YNTRANSFRM_YM430CpyYrnMix.dataSet.poutDestPalwgt
        };

        $scope.Variables.statViewDest.dataSet.push(m_empty_rowDest);

        m_seq = !m_seq ? 1 : m_seq;

        for (var i = 0; i < $scope.Variables.svGetProcYM1000WPK0_YNTRANSFRM_YM430CpyYrnMix.dataSet.poutDestDel.length; i++) {
            var m_empty_rowDestDel = {
                PALMODNUM: "",
                DESTPALLET_SEQ: m_seq,
                YRNCOD: $scope.Variables.svGetProcYM1000WPK0_YNTRANSFRM_YM430CpyYrnMix.dataSet.poutDestDel[i].yrncod,
                CONWGT: $scope.Variables.svGetProcYM1000WPK0_YNTRANSFRM_YM430CpyYrnMix.dataSet.poutDestDel[i].conwgt,
                CONCAR: $scope.Variables.svGetProcYM1000WPK0_YNTRANSFRM_YM430CpyYrnMix.dataSet.poutDestDel[i].concar,
                CARPALL: $scope.Variables.svGetProcYM1000WPK0_YNTRANSFRM_YM430CpyYrnMix.dataSet.poutDestDel[i].carpall,
                NUMCONES: $scope.Variables.svGetProcYM1000WPK0_YNTRANSFRM_YM430CpyYrnMix.dataSet.poutDestDel[i].numcones,
                PALWGT: $scope.Variables.svGetProcYM1000WPK0_YNTRANSFRM_YM430CpyYrnMix.dataSet.poutDestDel[i].palwgt,
                PALLETCAT: $scope.Variables.svGetProcYM1000WPK0_YNTRANSFRM_YM430CpyYrnMix.dataSet.poutDestDel[i].palletcat,
                NUMPAL: $scope.Variables.svGetProcYM1000WPK0_YNTRANSFRM_YM430CpyYrnMix.dataSet.poutDestDel[i].numpal
            };

            $scope.Variables.statDestDel.dataSet.push(m_empty_rowDestDel);
        }

        m_seq++;
        $scope.Widgets.TableDest.refreshData();
        $scope.Widgets.TableDestDel.refreshData();
        $scope.Widgets.dialogCpyYrnmix.close();
    };

}]);

var m_ConcatPal = "";
var m_ConcatPallet;
var countSrc = 1;
var concatPallet = "";
var countDest = 1;

Application.$controller("dialogRGYrncodController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.btnRGYrncodSveClick = function($event, $isolateScope) {
            $scope.Widgets.TableDestDel.formfields.YRNCOD.setProperty('value', $scope.Widgets.tableRGYrncod.selecteditem.yrncod);
            $scope.Widgets.TableDestDel.formfields.CONWGT.setProperty('value', $scope.Widgets.tableRGYrncod.selecteditem.conwgt);
            $scope.Widgets.dialogRGYrncod.close();
        };

    }
]);

Application.$controller("tableRGYrncodController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("TableSourceController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.SRCPALLETIDOnChange = function($event, $isolateScope, $rowData, newVal) {
            $scope.Variables.svGetProcYM1000WPK0_YNTRANSFRM_YM430VldSrcPalletid.invoke({
                    "inputFields": {
                        "pWrhnum": $scope.Widgets.selectWrhnum.datavalue,
                        "pSrcPalletid": newVal
                    }
                },
                function(data) {},
                function(error) {
                    $scope.Variables.notifMsg.setAlertType("error");
                    $scope.Variables.notifMsg.setMessage("Error: " + error);
                    $scope.Variables.notifMsg.notify();
                });

            $scope.Variables.svGetProcYM1000WPK0_YNTRANSFRM_YM430PalletTyp.invoke({
                    "inputFields": {
                        "pPrgid": $scope.Variables.StatPrgid.dataSet.dataValue,
                        "pPalletId": newVal
                    }
                },
                function(data) {},
                function(error) {
                    $scope.Variables.notifMsg.setAlertType("error");
                    $scope.Variables.notifMsg.setMessage("Error: " + error);
                    $scope.Variables.notifMsg.notify();
                });

            $scope.Variables.svGetProcYM1000WPK0_YNTRANSFRM_YM430SrcPalletId.invoke({
                    "inputFields": {
                        "pPalletid": newVal,
                        "pWrhnum": $scope.Widgets.selectWrhnum.datavalue
                    }
                },
                function(data) {},
                function(error) {
                    $scope.Variables.notifMsg.setAlertType("error");
                    $scope.Variables.notifMsg.setMessage("Error: " + error);
                    $scope.Variables.notifMsg.notify();
                });

            if (newVal !== 'CARTONS') {
                $scope.Widgets.txtForPalletId.datavalue = 'Y';
            } else {
                $scope.Widgets.txtForPalletId.datavalue = 'N';
            }
        };


        $scope.addNewRowAction = function($event) {
            if (!$scope.Widgets.selectWrhnum.datavalue) {
                $scope.Variables.notifMsg.setMessage("Input Warehouse");
                $scope.Variables.notifMsg.notify();
                return false;
            }

            $scope.Widgets.TableSource.addNewRow();
        };


        $scope.SRCYRNMIXCODEOnChange = function($event, $isolateScope, rowData) {
            $scope.Variables.svGetProcYM1000WPK0_YNTRANSFRM_YM430VldYrnmix.invoke({
                    "inputFields": {
                        "pSrcPalletid": $scope.Widgets.TableSource.formfields.SRCPALLETID.getProperty('value'),
                        "pSrcYrnmix": $scope.Widgets.TableSource.formfields.SRCYRNMIXCODE.getProperty('value'),
                        "pWrhnum": $scope.Widgets.selectWrhnum.datavalue
                    }
                },
                function(data) {},
                function(error) {
                    $scope.Variables.notifMsg.setAlertType("error");
                    $scope.Variables.notifMsg.setMessage("Error: " + error);
                    $scope.Variables.notifMsg.notify();
                });
        };


        $scope.SRCKGSOnChange = function($event, $isolateScope, rowData) {
            $scope.Variables.svGetProcYM1000WPK0_YNTRANSFRM_YM430VldSrckgs.invoke({
                    "inputFields": {
                        "pSrcPalletid": $scope.Widgets.TableSource.formfields.SRCPALLETID.getProperty('value'),
                        "pSrcYrnmix": $scope.Widgets.TableSource.formfields.SRCYRNMIXCODE.getProperty('value'),
                        "pWrhnum": $scope.Widgets.selectWrhnum.datavalue,
                        "pSrckgs": $scope.Widgets.TableSource.formfields.SRCKGS.getProperty('value'),
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

Application.$controller("TableDestController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.addNewRowAction = function($event) {
            if (!$scope.Widgets.selectWrhnum.datavalue) {
                $scope.Variables.notifMsg.setMessage("Input Warehouse");
                $scope.Variables.notifMsg.notify();
                return false;
            }

            $scope.Widgets.TableDest.addNewRow();
        };

        $scope.ORDNUMOnChange = function($event, $isolateScope, $rowData, newVal) {
            $scope.Variables.svGetProcYM1000WPK0_YNTRANSFRM_YM430RGFabseq.invoke({
                    "inputFields": {
                        "pOrdnum": newVal
                    }
                },
                function(data) {},
                function(error) {
                    $scope.Variables.notifMsg.setAlertType("error");
                    $scope.Variables.notifMsg.setMessage("Error: " + error);
                    $scope.Variables.notifMsg.notify();
                });
        };

        $scope.FABSEQOnChange = function($event, $isolateScope, $rowData, newVal) {
            $scope.Variables.svGetProcYM1000WPK0_YNTRANSFRM_YM430RGReqnum.invoke({
                    "inputFields": {
                        "pWrhnum": $scope.Widgets.selectWrhnum.datavalue,
                        "pOrdnum": $scope.Widgets.TableDest.formfields.ORDNUM.getProperty('value'),
                        "pFabseq": newVal
                    }
                },
                function(data) {},
                function(error) {
                    $scope.Variables.notifMsg.setAlertType("error");
                    $scope.Variables.notifMsg.setMessage("Error: " + error);
                    $scope.Variables.notifMsg.notify();
                });

            $scope.Variables.svGetProcYM1000WPK0_YNTRANSFRM_YM430VldFabseq.invoke({
                    "inputFields": {
                        "pOrdnum": $scope.Widgets.TableDest.formfields.ORDNUM.getProperty('value'),
                        "pFabseq": newVal
                    }
                },
                function(data) {},
                function(error) {
                    $scope.Variables.notifMsg.setAlertType("error");
                    $scope.Variables.notifMsg.setMessage("Error: " + error);
                    $scope.Variables.notifMsg.notify();
                });
        };


        $scope.PALLETTYPEOnChange = function($event, $isolateScope, $rowData, newVal) {
            if (newVal == 'L') {
                $scope.Widgets.txtForPalTyp.datavalue = 'Y';
            } else {
                $scope.Widgets.txtForPalTyp.datavalue = 'N';
            }
        };

        $scope.PALMODREQNUMOnChange = function($event, $isolateScope, rowData) {
            $scope.Variables.svGetProcYM1000WPK0_YNTRANSFRM_YM430VldPalmodReq.invoke({
                    "inputFields": {
                        "pPalmodreq": $scope.Widgets.TableDest.formfields.PALMODREQNUM.getProperty('value'),
                        "pOrdnum": $scope.Widgets.TableDest.formfields.ORDNUM.getProperty('value'),
                        "pFabseq": $scope.Widgets.TableDest.formfields.FABSEQ.getProperty('value'),
                        "pWrhnum": $scope.Widgets.selectWrhnum.datavalue
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

Application.$controller("TableDestDelController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.addNewRowAction = function($event) {
            if (!$scope.Widgets.selectWrhnum.datavalue) {
                $scope.Variables.notifMsg.setMessage("Input Warehouse");
                $scope.Variables.notifMsg.notify();
                return false;
            }

            $scope.Widgets.TableDestDel.addNewRow();
        };

        $scope.CalFields = function(data) {
            data.CONWGT = (!data.CONWGT ? 0 : data.CONWGT);
            data.CONCAR = (!data.CONCAR ? 0 : data.CONCAR);
            data.CARPALL = (!data.CARPALL ? 0 : data.CARPALL);
            data.NUMCONES = (!data.NUMCONES ? 0 : data.NUMCONES);
            data.NUMPAL = (!data.NUMPAL ? 1 : data.NUMPAL);
            data.PALWGT = 0;

            if (data.PALLETYP == 'C') {
                data.NUMCONES = data.CONCAR * data.CARPALL * data.NUMPAL;
                data.PALWGT = (Math.round(100 * (data.CONWGT * data.NUMCONES)) / 100) * data.NUMPAL;
            } else {
                if (data.PALLETYP !== 'L') {
                    data.PALWGT = (Math.round(100 * (data.CONWGT * data.NUMCONES)) / 100) * data.NUMPAL;
                } else {
                    if (data.CONCAR === 0 && data.CARPALL === 0) {
                        null;
                    } else {
                        data.NUMCONES = data.CONCAR * data.CARPALL * data.NUMPAL;
                        data.PALWGT = (Math.round(100 * (data.CONWGT * data.NUMCONES)) / 100) * data.NUMPAL;
                    }
                }
            }
            return data;
        };

        $scope.CalFunc = function($isolateScope) {
            var data = {
                PALLETYP: $scope.Variables.statViewDest.dataSet[$scope.Widgets.TableDestDel.formfields.DESTPALLET_SEQ.getProperty('value') - 1].PALLETTYPE,
                CONWGT: $scope.Widgets.TableDestDel.formfields.CONWGT.getProperty('value'),
                CONCAR: $scope.Widgets.TableDestDel.formfields.CONCAR.getProperty('value'),
                CARPALL: $scope.Widgets.TableDestDel.formfields.CARPALL.getProperty('value'),
                NUMCONES: $scope.Widgets.TableDestDel.formfields.NUMCONES.getProperty('value'),
                NUMPAL: $scope.Variables.statViewDest.dataSet[$scope.Widgets.TableDestDel.formfields.DESTPALLET_SEQ.getProperty('value') - 1].WNUMPAL,
                PALWGT: 0
            };
            data = $scope.CalFields(data);

            $scope.Widgets.TableDestDel.formfields.NUMCONES.setProperty('value', data.NUMCONES);
            $scope.Widgets.TableDestDel.formfields.PALWGT.setProperty('value', data.PALWGT);
        };

        $scope.YRNCODOnClick = function($event, $isolateScope, rowData) {
            $scope.Widgets.dialogRGYrncod.open();
        };

        $scope.CONCAROnChange = function($event, $isolateScope, rowData) {
            $scope.CalFunc($scope);
        };


        $scope.CARPALLOnChange = function($event, $isolateScope, rowData) {
            $scope.CalFunc($scope);
        };


        $scope.NUMCONESOnChange = function($event, $isolateScope, rowData) {
            $scope.CalFunc($scope);
        };

        $scope.DESTPALLET_SEQOnChange = function($event, $isolateScope, $rowData, newVal) {
            if (newVal <= 0) {
                $scope.Variables.notifMsg.setMessage("Invalid Pallet Sequence!!!");
                $scope.Variables.notifMsg.notify();
                $scope.Widgets.TableDestDel.formfields.DESTPALLET_SEQ.setProperty('value', '');
                return false;
            }

            if (newVal > $scope.Variables.statViewDest.dataSet.length) {
                $scope.Variables.notifMsg.setMessage("Invalid Pallet Sequence!!!");
                $scope.Variables.notifMsg.notify();
                $scope.Widgets.TableDestDel.formfields.DESTPALLET_SEQ.setProperty('value', '');
                return false;
            }
            if ($scope.Variables.statViewDest.dataSet[$scope.Widgets.TableDestDel.formfields.DESTPALLET_SEQ.getProperty('value') - 1].PALLETTYPE == 'L' || $scope.Variables.statViewDest.dataSet[$scope.Widgets.TableDestDel.formfields.DESTPALLET_SEQ.getProperty('value') - 1].PALLETTYPE == 'C') {
                $scope.Widgets.txtforDestDel.datavalue = 'Y';
            } else {
                $scope.Widgets.txtforDestDel.datavalue = 'N';
            }
        };

        $scope.YRNCODOnChange = function($event, $isolateScope, $rowData, newVal) {
            $scope.Variables.svGetProcYM1000WPK0_YNTRANSFRM_YM430VldYrncod.invoke({
                    "inputFields": {
                        "pYrncod": newVal,
                        "pPalletid": concatPallet
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

Application.$controller("dialogCpyYrnmixController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.btnCpyYrnMixClick = function($event, $isolateScope) {
            if (!$scope.Widgets.txtCpyYrnMix.datavalue) {
                $scope.Variables.notifMsg.setMessage("Yarnmixcode not found !!!");
                $scope.Variables.notifMsg.notify();
                return false;
            }

            if (!$scope.Widgets.txtCpyQty.datavalue) {
                $scope.Variables.notifMsg.setMessage("Qty for pallets must be entered !!!");
                $scope.Variables.notifMsg.notify();
                return false;
            }

            if (!$scope.Widgets.txtCpyNumpal.datavalue) {
                $scope.Variables.notifMsg.setMessage("Number of pallets !!!");
                $scope.Variables.notifMsg.notify();
                return false;
            }

            $scope.Variables.svGetProcYM1000WPK0_YNTRANSFRM_YM430CpyYrnMix.invoke({
                    "inputFields": {
                        "pCpyYrnMix": $scope.Widgets.txtCpyYrnMix.datavalue,
                        "pQty": $scope.Widgets.txtCpyQty.datavalue,
                        "pNumpal": $scope.Widgets.txtCpyNumpal.datavalue,
                        "pConcatPallet": concatPallet
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