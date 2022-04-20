function initModel() {
	var sUrl = "/ARCELOR_MB1/sap/opu/odata/sap/ZSTEHS002_SRV/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}