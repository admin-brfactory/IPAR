sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/Fragment",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageBox",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/m/Token"

], function(Controller, Fragment, MessageToast, JSONModel, MessageBox, Filter, FilterOperator, Token) {
	"use strict";

	return Controller.extend("com.arcelormittal.ipar.controller.View1", {
		onInit: function() {
			var oView1 = new JSONModel({
				tableDadosDasAtividades: [],
				tableDadosDasAtividades2: [],
				probabilidade: "",
				tabelaGravidade: [],
				itemEditClassRisc: [],
				itemEditCargArea: [],
				itemClassRisc: [],
				itemCargArea: [],
				unidadeValue: "",
				areaValue: "",
				localInstValue: "",
				localInstValue2: "",
				dtLocalValue: "",
				atividadeValue: "",
				tpAtividadeValue: "",
				efetivoValue: "",
				empresaValue: "",
				areaValueInput: "",
				unidadeValueTitle: "",
				filtroUnidadeValue: [],
				filtroUnidadeValue2: [],
				filtroLocalInstalValue: [],
				filtroLocalInstalValue2: [],
				filtroAreaValue: [],
				filtroAreaValue2: [],
				localInstEnabled: false,
				areaEnabled: false,
				buscaAtividadeEnabled: false,
				empresaInputEnabled: true,
				editBtnClcikLocalInst: false,
				editBtnClcikArea: false,
				unidadeValueLocalIst: "",
				unidadeValueArea: "",
				wrapping: false,
				dtLocalPopover: "",
				dtLocalInst: [],
				dtLocalInst2: [],
				editLocalInstDtClick: false,
				gravidade: "",
				segundaTabela: [],
				tipoPerigoValue: "",
				perigoValue: "",
				riscoValue: "",
				descriRiscValue: "",
				fonteCircValue: "",
				descriFonteValue: "",
				descriDanoPotencialValue: "",
				cargExpostosValue: "",
				gravidadeValue: "",
				numPessoasEnvValue: "",
				tempDuracaoValue: "",
				freqRealizaValue: "",
				probabilidadeValue: "",
				riscoPotencValue: "",
				riscoRealValue: "",
				tabelaRiscoPotencialEditvalue: [],
				tabelaRiscoPotencial: [],
				tipoPerigoListValue: [],
				perigoListValue: [],
				riscoListValue: [],
				fonteListValue: [],
				danoPotencialValue: [],
				tipoPerigoValueTabela: [],
				perigoListValueTabela: [],
				riscoListValueTabela: [],
				fonteListValueTabela: [],
				danoPotencialValueTabela: [],
				pessoasEnvValueTabela: [],
				danosPotenciaisValueTabela: [],
				tempoDuracaoValueTabela: [],
				frequenciaValueTabela: [],
				tabelaMatrizCalc: [],
				segundaTabelaAUX: []

			});
			this.getView().setModel(oView1, "oView1");
			this.filtroAtividade();
			this.buscarEfetivo();
			this.selecTipoPerigo();
			this.selecPerigoList();
			this.selecRiscoList();
			this.selecFonteList();
			this.selecDanoPotencial();
			this.selecPessoasEnvList();
			this.selecTempoDuracaoList();
			this.selecFrequenciaList();
			this.getTabMatriz();
			this.danosPotencaisValor();
		},

		getTabMatriz: function() {
			var oModel = this.getOwnerComponent().getModel();
			var opcao = "1";
			var sUrl = "/CalcDanoPotencialSet(opcao='" + opcao + "')";
			var oViewModel = this.getView().getModel("oView1");

			sap.ui.core.BusyIndicator.show();
			oModel.read(sUrl, {
				success: function(oData) {
					sap.ui.core.BusyIndicator.hide();
					if (oData.calcDanoPotencial) {
						var oPerigo = JSON.parse(oData.calcDanoPotencial)
						oViewModel.setProperty("/tabelaMatrizCalc", oPerigo);
					}
				},

				error: function(error) {
					sap.ui.core.BusyIndicator.hide();
				}
			});

		},

		selecTipoPerigo: function() {

			var oModel = this.getOwnerComponent().getModel();
			var opcao = "1";
			var sUrl = "/TipoPerigoListSet(opcao='" + opcao + "')";
			var oViewModel = this.getView().getModel("oView1");

			sap.ui.core.BusyIndicator.show();
			oModel.read(sUrl, {
				success: function(oData) {
					sap.ui.core.BusyIndicator.hide();
					if (oData.tipoPerigoList) {
						var oPerigo = JSON.parse(oData.tipoPerigoList)
						oViewModel.setProperty("/tipoPerigoListValue", oPerigo);
					}
				},

				error: function(error) {
					sap.ui.core.BusyIndicator.hide();
				}
			});

		},

		selecPerigoList: function() {

			var oModel = this.getOwnerComponent().getModel();
			var opcao = "1";
			var sUrl = "/PerigoListSet(opcao='" + opcao + "')";
			var oViewModel = this.getView().getModel("oView1");

			sap.ui.core.BusyIndicator.show();
			oModel.read(sUrl, {
				success: function(oData) {
					sap.ui.core.BusyIndicator.hide();
					if (oData.perigoList) {
						var oPerigo = JSON.parse(oData.perigoList)
						oViewModel.setProperty("/perigoListValue", oPerigo);
					}
				},

				error: function(error) {
					sap.ui.core.BusyIndicator.hide();
				}
			});

		},

		selecRiscoList: function() {

			var oModel = this.getOwnerComponent().getModel();
			var opcao = "1";
			var sUrl = "/RiscoListSet(opcao='" + opcao + "')";
			var oViewModel = this.getView().getModel("oView1");

			sap.ui.core.BusyIndicator.show();
			oModel.read(sUrl, {
				success: function(oData) {
					sap.ui.core.BusyIndicator.hide();
					if (oData.riscoList) {
						var oPerigo = JSON.parse(oData.riscoList)
						oViewModel.setProperty("/riscoListValue", oPerigo);
					}
				},

				error: function(error) {
					sap.ui.core.BusyIndicator.hide();
				}
			});

		},

		selecFonteList: function() {

			var oModel = this.getOwnerComponent().getModel();
			var opcao = "1";
			var sUrl = "/FonteListSet(opcao='" + opcao + "')";
			var oViewModel = this.getView().getModel("oView1");

			sap.ui.core.BusyIndicator.show();
			oModel.read(sUrl, {
				success: function(oData) {
					sap.ui.core.BusyIndicator.hide();
					if (oData.fonteList) {
						var oPerigo = JSON.parse(oData.fonteList)
						oViewModel.setProperty("/fonteListValue", oPerigo);
					}
				},

				error: function(error) {
					sap.ui.core.BusyIndicator.hide();
				}
			});

		},

		selecDanoPotencial: function() {

			var oModel = this.getOwnerComponent().getModel();
			var opcao = "1";
			var sUrl = "/DanoPotencialListSet(opcao='" + opcao + "')";
			var oViewModel = this.getView().getModel("oView1");

			sap.ui.core.BusyIndicator.show();
			oModel.read(sUrl, {
				success: function(oData) {
					sap.ui.core.BusyIndicator.hide();
					if (oData.danoPotencialList) {
						var oPerigo = JSON.parse(oData.danoPotencialList)
						oViewModel.setProperty("/danoPotencialValue", oPerigo);
					}
				},

				error: function(error) {
					sap.ui.core.BusyIndicator.hide();
				}
			});

		},

		selecPessoasEnvList: function() {

			var oModel = this.getOwnerComponent().getModel();
			var opcao = "1";
			var sUrl = "/PessoasEnvListSet(opcao='" + opcao + "')";
			var oViewModel = this.getView().getModel("oView1");

			sap.ui.core.BusyIndicator.show();
			oModel.read(sUrl, {
				success: function(oData) {
					sap.ui.core.BusyIndicator.hide();
					if (oData.pessoasEnvList) {
						var oPerigo = JSON.parse(oData.pessoasEnvList)
						oViewModel.setProperty("/pessoasEnvValueTabela", oPerigo);
					}
				},

				error: function(error) {
					sap.ui.core.BusyIndicator.hide();
				}
			});

		},

		selecTempoDuracaoList: function() {

			var oModel = this.getOwnerComponent().getModel();
			var opcao = "1";
			var sUrl = "/TempoDuracaoListSet(opcao='" + opcao + "')";
			var oViewModel = this.getView().getModel("oView1");

			sap.ui.core.BusyIndicator.show();
			oModel.read(sUrl, {
				success: function(oData) {
					sap.ui.core.BusyIndicator.hide();
					if (oData.tempoDuracaoList) {
						var oPerigo = JSON.parse(oData.tempoDuracaoList)
						oViewModel.setProperty("/tempoDuracaoValueTabela", oPerigo);
					}
				},

				error: function(error) {
					sap.ui.core.BusyIndicator.hide();
				}
			});

		},

		selecFrequenciaList: function() {

			var oModel = this.getOwnerComponent().getModel();
			var opcao = "1";
			var sUrl = "/FrequenciaListSet(opcao='" + opcao + "')";
			var oViewModel = this.getView().getModel("oView1");

			sap.ui.core.BusyIndicator.show();
			oModel.read(sUrl, {
				success: function(oData) {
					sap.ui.core.BusyIndicator.hide();
					if (oData.frequenciaList) {
						var oPerigo = JSON.parse(oData.frequenciaList)
						oViewModel.setProperty("/frequenciaValueTabela", oPerigo);
					}
				},

				error: function(error) {
					sap.ui.core.BusyIndicator.hide();
				}
			});

		},

		danosPotencaisValor: function() {

			var oModel = this.getOwnerComponent().getModel();
			var opcao = "1";
			var sUrl = "/CalcRiscoPotencialSet(opcao='" + opcao + "')";
			var oViewModel = this.getView().getModel("oView1");

			sap.ui.core.BusyIndicator.show();
			oModel.read(sUrl, {
				success: function(oData) {
					sap.ui.core.BusyIndicator.hide();
					if (oData.calcRiscoPotencial) {
						var oPerigo = JSON.parse(oData.calcRiscoPotencial)
						oViewModel.setProperty("/danosPotenciaisValueTabela", oPerigo);
					}
				},

				error: function(error) {
					sap.ui.core.BusyIndicator.hide();
				}
			});

		},

		linhaSelecionada: function(oEvent) {
			var sPath = oEvent.getParameter('listItem').getBindingContextPath();
			var oViewModel = this.getView().getModel("oView1");
			var segundaTabela = oViewModel.getProperty("/segundaTabela");
			var selectedRow = oViewModel.getProperty(sPath);
			var oModel = this.getOwnerComponent().getModel();
			var sUrl = "/CargosAreaListSet(areaId='" + selectedRow.areaid + "')";

			var oTable = this.getView().byId("segundaParteTela");
			var dadosSegundaTabela = segundaTabela.filter(val => val.link_id == selectedRow.link_id);
			oViewModel.setProperty("/segundaTabelaAUX", dadosSegundaTabela);

			if (oEvent.getParameter('listItem').getProperty('selected')) {
				var oEntry = {
					opcao: "R",
					link_id: selectedRow.link_id.toString()
				};

				oModel.read(sUrl, {
					success: function(oData) {
						sap.ui.core.BusyIndicator.hide();
						oViewModel.setProperty("/itemCargArea", JSON.parse(oData.dataRetorn));
						oViewModel.setProperty("/itemEditCargArea", JSON.parse(oData.dataRetorn));

					},

					error: function(error) {
						sap.ui.core.BusyIndicator.hide();
					}
				});

				oModel.create("/riscosOcupacionaisSet", oEntry, {
					success: function(oData) {
						sap.ui.core.BusyIndicator.hide();
						oViewModel.setProperty("/segundaTabelaAUX", JSON.parse(oData.riscosOcupacionais))

					},

					error: function(error) {
						sap.ui.core.BusyIndicator.hide();
					}
				})
				oTable.setVisible(true);
			} else {
				oTable.setVisible(false);
			}

		},

		moverParaClassDeRisco: function(oEvent) {
			var oDraggedItem = oEvent.getParameter("draggedControl");
			var oDraggedItemContext = oDraggedItem.getBindingContext("oView1").sPath;
			var oViewModel = this.getView().getModel("oView1");
			var selectedRow = oViewModel.getProperty(oDraggedItemContext);
			var itemClassRisc = oViewModel.getProperty("/itemClassRisc");
			var itemCargArea = oViewModel.getProperty("/itemCargArea");

			var filteredColumns = itemClassRisc.filter(val => val.SOBID != selectedRow.SOBID)
			var columnsAvailable2 = {
				SOBID: selectedRow.SOBID,
			}
			itemCargArea.splice(selectedRow.index, 0, columnsAvailable2) // Pertime adicionar de volta a coluna em seu index inicial
			oViewModel.setProperty("/itemClassRisc", filteredColumns);
			oViewModel.setProperty("/itemCargArea", itemCargArea);
		},

		moverParaCargosArea: function(oEvent) {
			var oDraggedItem = oEvent.getParameter("draggedControl");
			var oDraggedItemContext = oDraggedItem.getBindingContext("oView1").sPath;
			var oViewModel = this.getView().getModel("oView1");
			var selectedRow = oViewModel.getProperty(oDraggedItemContext);
			var itemClassRisc = oViewModel.getProperty("/itemClassRisc");
			var itemCargArea = oViewModel.getProperty("/itemCargArea");

			var filteredColumns = itemCargArea.filter(val => val.SOBID != selectedRow.SOBID)
			var columnsAvailable2 = {
				SOBID: selectedRow.SOBID,
			}
			itemCargArea.push(columnsAvailable2);
			itemClassRisc.splice(selectedRow.index, 0, columnsAvailable2) // Pertime adicionar de volta a coluna em seu index inicial
			oViewModel.setProperty("/itemClassRisc", itemClassRisc);
			oViewModel.setProperty("/itemCargArea", filteredColumns);
		},

		moveParaCargosExpostosEdit: function(oEvent) {
			var oTable = this.getView().byId("tabEditCargArea");
			var selectedPath = oTable._aSelectedPaths[0];
			var oViewModel = this.getView().getModel("oView1");
			var selectedRow = oViewModel.getProperty(selectedPath);
			var itemClassRisc = oViewModel.getProperty("/itemEditClassRisc");
			var itemCargArea = oViewModel.getProperty("/itemEditCargArea");

			var filteredColumns = itemCargArea.filter(val => val.SOBID != selectedRow.SOBID)
			var columnsAvailable2 = {
				SOBID: selectedRow.SOBID,
			}
			itemCargArea.push(columnsAvailable2);
			itemClassRisc.splice(selectedRow.index, 0, columnsAvailable2) // Pertime adicionar de volta a coluna em seu index inicial
			oViewModel.setProperty("/itemEditClassRisc", itemClassRisc);
			oViewModel.setProperty("/itemEditCargArea", filteredColumns);
			oTable.removeSelections();

		},

		moveParaCargosDaAreaEdit: function(oEvent) {
			var oTable = this.getView().byId("tabEditRiscPotenc");
			var selectedPath = oTable._aSelectedPaths[0];
			var oViewModel = this.getView().getModel("oView1");
			var selectedRow = oViewModel.getProperty(selectedPath);
			var itemClassRisc = oViewModel.getProperty("/itemEditClassRisc");
			var itemCargArea = oViewModel.getProperty("/itemEditCargArea");

			var filteredColumns = itemClassRisc.filter(val => val.SOBID != selectedRow.SOBID)
			var columnsAvailable2 = {
				SOBID: selectedRow.SOBID,
			}
			itemCargArea.splice(selectedRow.index, 0, columnsAvailable2) // Pertime adicionar de volta a coluna em seu index inicial
			oViewModel.setProperty("/itemEditClassRisc", filteredColumns);
			oViewModel.setProperty("/itemEditCargArea", itemCargArea);
			oTable.removeSelections();

		},

		moveParaCargosExpostos: function(oEvent) {
			var oTable = this.getView().byId("tabCargArea");
			var selectedPath = oTable._aSelectedPaths[0];
			var oViewModel = this.getView().getModel("oView1");
			var selectedRow = oViewModel.getProperty(selectedPath);
			var itemClassRisc = oViewModel.getProperty("/itemClassRisc");
			var itemCargArea = oViewModel.getProperty("/itemCargArea");

			var filteredColumns = itemCargArea.filter(val => val.SOBID != selectedRow.SOBID)
			var columnsAvailable2 = {
				SOBID: selectedRow.SOBID,
			}
			itemCargArea.push(columnsAvailable2);
			itemClassRisc.splice(selectedRow.index, 0, columnsAvailable2) // Pertime adicionar de volta a coluna em seu index inicial
			oViewModel.setProperty("/itemClassRisc", itemClassRisc);
			oViewModel.setProperty("/itemCargArea", filteredColumns);
			oTable.removeSelections();
		},

		moveParaCargosDaArea: function(oEvent) {
			var oTable = this.getView().byId("tabRiscPotenc");
			var selectedPath = oTable._aSelectedPaths[0];
			var oViewModel = this.getView().getModel("oView1");
			var selectedRow = oViewModel.getProperty(selectedPath);
			var itemClassRisc = oViewModel.getProperty("/itemClassRisc");
			var itemCargArea = oViewModel.getProperty("/itemCargArea");

			var filteredColumns = itemClassRisc.filter(val => val.SOBID != selectedRow.SOBID)
			var columnsAvailable2 = {
				SOBID: selectedRow.SOBID,
			}
			itemCargArea.splice(selectedRow.index, 0, columnsAvailable2) // Pertime adicionar de volta a coluna em seu index inicial
			oViewModel.setProperty("/itemClassRisc", filteredColumns);
			oViewModel.setProperty("/itemCargArea", itemCargArea);
			oTable.removeSelections();
		},

		dialogInserAreaDataSegTabClose: function() {
			var oModelView = this.getView().getModel("oView1");
			var cargosExpostos = oModelView.getProperty("/itemClassRisc");
			var itemEditCargArea = oModelView.getProperty("/itemEditCargArea");
			var cargosDaArea = oModelView.getProperty("/itemCargArea");
			for (var i = 0; i < cargosExpostos.length; i++) {
				cargosDaArea.push(cargosExpostos[i]);
			}
			var cargosExportosMap = cargosExpostos.map(val => val.SOBID);
			var itemCargaAreaFilter = itemEditCargArea.filter(val => !cargosExportosMap.includes(val.SOBID));

			oModelView.setProperty("/itemClassRisc", []);
			oModelView.setProperty("/itemEditCargArea", []);
			oModelView.setProperty("/itemCargArea", cargosDaArea);

			this._openDialogInserDadosRiscOcupacionais().close();
			this.limparDadosTabelaDois();
		},
		limparDadosTabelaDois: function() {
			var oModelView = this.getView().getModel("oView1");
			this.getView().byId("tipoPerigoSelect").setSelectedKey("");
			this.getView().byId("perigoSelect").setSelectedKey("");
			this.getView().byId("RiscoSelect").setSelectedKey("");
			this.getView().byId("descRisco").setValue("");
			this.getView().byId("fontCircSelect").setSelectedKey("");
			this.getView().byId("desFontCirc").setValue("");
			this.getView().byId("danPotencSelect").setSelectedKey("");
			this.getView().byId("numPessoEnvolSelect").setSelectedKey("");
			this.getView().byId("tempDuraAtivSelect").setSelectedKey("");
			this.getView().byId("freqRealAtivSelect").setSelectedKey("");
			this.getView().byId("riscPotencial").setValue("");
			this.getView().byId("probabil").setValue("");
			this.getView().byId("gravidade").setValue("");

			oModelView.setProperty('/probabilidade', "");
			oModelView.setProperty('/gravidadeValue', "");
			oModelView.setProperty('/tabelaRiscoPotencial', []);
			oModelView.setProperty('/tabelaRiscoPotencialEditvalue', []);

		},

		dialogEditarAreaDataSegTabClose: function() {
			var oModelView = this.getView().getModel("oView1");
			var itemEditCargArea = oModelView.getProperty("/itemEditCargArea")
			var itemEditClassRisc = oModelView.getProperty("/itemEditClassRisc")

			this._openDialogEditarDadosDaArea().close();
			this.limparDadosTabelaDois();
		},

		freqRealAtivChange: function(oEvent) {
			var oModelView = this.getView().getModel("oView1");
			oModelView.setProperty('/tabelaRiscoPotencial', [])

			var numPessEnvol = Number(this.getView().byId("numPessoEnvolSelect").getSelectedKey());
			var tempoDuracaoAtv = Number(this.getView().byId("tempDuraAtivSelect").getSelectedKey());
			var freqRealAtvd = Number(this.getView().byId("freqRealAtivSelect").getSelectedKey());
			var probabilidadeCount;
			var tableRiscoPotencial = oModelView.getProperty("/tabelaMatrizCalc");
			probabilidadeCount = numPessEnvol * tempoDuracaoAtv * freqRealAtvd;

			var probabilidade = tableRiscoPotencial.filter(val => val.RESULTANTE == probabilidadeCount);
			if (probabilidade.length != 0) {
				this.getView().byId("probabil").setValue(probabilidade[0].PROBABILIDADE);

				var gravidade = Number(this.getView().byId("danPotencSelect").getSelectedKey())
				var gravidadeResultante = gravidade * probabilidadeCount;
				var resultante = gravidadeResultante;
				var probabilidadeTeste = probabilidade[0].PROBABILIDADE;

				var linhaIndex = tableRiscoPotencial.findIndex(value => value.PROBABILIDADE == probabilidadeTeste && value.VALGRAVIDADE1 ==
					resultante ||
					value.VALGRAVIDADE2 == resultante || value.VALGRAVIDADE3 == resultante || value.VALGRAVIDADE4 == resultante || value.VALGRAVIDADE5 ==
					resultante ||
					value.VALGRAVIDADE6 == resultante || value.VALGRAVIDADE7 == resultante ||
					value.VALGRAVIDADE8 == resultante);
				var linhaSelecionada = tableRiscoPotencial.find(value => value.RESULTANTE == tableRiscoPotencial[linhaIndex].RESULTANTE);
				var anteriorArray = [];
				var anterior;

				for (var i = 0; i < tableRiscoPotencial.length; i++) {
					linhaIndex = linhaIndex - 1;
					anterior = tableRiscoPotencial[linhaIndex];
					if (anterior != undefined) {
						if (anterior.Probabilidade != linhaSelecionada.Probabilidade) {
							anteriorArray.push(tableRiscoPotencial.find(arrayValue => arrayValue.Probabilidade == anterior.Probabilidade && arrayValue.Resultante ==
								anterior.Resultante))
						}
					}

				};
				anteriorArray.sort((a, b) => a.Resultante - b.Resultante)
				var ultimaLinhaAnterior = []
				var findLastIndex = (array, searchKey, searchValue) => {
					var index = array.slice().reverse().find(x => x[searchKey] === searchValue);
					var count = array.length - 1
					var finalIndex = index >= 0 ? count - index : index;
					return finalIndex;
				}

				for (var k = 0; k < anteriorArray.length; k++) {
					switch (anteriorArray[k].Probabilidade) {
						case "Pouquíssimo provável":
							ultimaLinhaAnterior.push(findLastIndex(anteriorArray, "Probabilidade", "Pouquíssimo provável"))
							break;
						case "Pouco provável":
							ultimaLinhaAnterior.push(findLastIndex(anteriorArray, "Probabilidade", "Pouco provável"))
							break;
						case "Provável":
							ultimaLinhaAnterior.push(findLastIndex(anteriorArray, "Probabilidade", "Provável"))
							break;
						case "Bem provável":
							ultimaLinhaAnterior.push(findLastIndex(anteriorArray, "Probabilidade", "Bem provável"))
							break;
						case "Muito provável":
							ultimaLinhaAnterior.push(findLastIndex(anteriorArray, "Probabilidade", "Muito provável"))
							break;
					}

				}

				var linhaSelecionadaArray = [linhaSelecionada]
				var newUltimaLinhaAnterior = [...new Set(ultimaLinhaAnterior)]
				var ultimaLinhaAnteriorMap = ultimaLinhaAnterior.map(val => val.PROBABILIDADE)
				var tableRiscoPotencialFilter = tableRiscoPotencial.filter(val => !ultimaLinhaAnteriorMap.includes(val.PROBABILIDADE))
				var linhaSelecionadaMap = linhaSelecionadaArray.map(val => val.PROBABILIDADE)
				var tableRiscoPotencialFilter2 = tableRiscoPotencialFilter.filter(val => !linhaSelecionadaMap.includes(val.PROBABILIDADE))
				var dadosFilterArray = []
				for (var j = 0; j < tableRiscoPotencialFilter2.length; j++) {
					if (!dadosFilterArray.includes(tableRiscoPotencialFilter2[j].PROBABILIDADE)) {
						dadosFilterArray.push(tableRiscoPotencialFilter2[j].PROBABILIDADE)
					}
				}
				var dadosFilterArray2 = []
				for (var l = 0; l < dadosFilterArray.length; l++) {
					dadosFilterArray2.push(tableRiscoPotencialFilter2.find(val => val.PROBABILIDADE == dadosFilterArray[l]))
				}

				var pouquissimoProvavel = []
				var poucoProvavel = []
				var provavel = []
				var bemProvavel = []
				var muitoProvavel = []

				var dadosTabelaMatrizFilterArray = []
				dadosTabelaMatrizFilterArray.push(dadosFilterArray2)
				dadosTabelaMatrizFilterArray.push(newUltimaLinhaAnterior)
				dadosTabelaMatrizFilterArray.push(linhaSelecionada)

				for (var m = 0; m < dadosTabelaMatrizFilterArray.length; m++) {
					for (var teste in dadosTabelaMatrizFilterArray[m]) {
						if (dadosTabelaMatrizFilterArray[m][teste].PROBABILIDADE != undefined) {
							switch (dadosTabelaMatrizFilterArray[m][teste].PROBABILIDADE) {
								case "Pouquíssimo provável":
									pouquissimoProvavel.push(dadosTabelaMatrizFilterArray[m][teste]);
									break;
								case "Pouco provável":
									poucoProvavel.push(dadosTabelaMatrizFilterArray[m][teste]);
									break;
								case "Provável":
									provavel.push(dadosTabelaMatrizFilterArray[m][teste]);
									break;
								case "Bem provável":
									bemProvavel.push(dadosTabelaMatrizFilterArray[m][teste]);
									break;
								case "Muito provável":
									muitoProvavel.push(dadosTabelaMatrizFilterArray[m][teste]);
									break;

							}
						} else {
							if (dadosTabelaMatrizFilterArray[m].PROBABILIDADE == dadosTabelaMatrizFilterArray[m][teste]) {
								switch (dadosTabelaMatrizFilterArray[m].PROBABILIDADE) {
									case "Pouquíssimo provável":
										pouquissimoProvavel.push(dadosTabelaMatrizFilterArray[m]);
										break;
									case "Pouco provável":
										poucoProvavel.push(dadosTabelaMatrizFilterArray[m]);
										break;
									case "Provável":
										provavel.push(dadosTabelaMatrizFilterArray[m]);
										break;
									case "Bem provável":
										bemProvavel.push(dadosTabelaMatrizFilterArray[m]);
										break;
									case "Muito provável":
										muitoProvavel.push(dadosTabelaMatrizFilterArray[m]);
										break;

								}
							}
						}
					}
				}

				var probabilidadesMatriz = [{
					"Resultante": pouquissimoProvavel[0].RESULTANTE,
					"Probabilidade": "Pouquíssimo provável",
					"ValCelula1": pouquissimoProvavel[0].VALGRAVIDADE1,
					"CorCelula1": pouquissimoProvavel[0].CORGRAVIDADE1,
					"ValCelula2": pouquissimoProvavel[0].VALGRAVIDADE2,
					"CorCelula2": pouquissimoProvavel[0].CORGRAVIDADE2,
					"ValCelula3": pouquissimoProvavel[0].VALGRAVIDADE3,
					"CorCelula3": pouquissimoProvavel[0].CORGRAVIDADE3,
					"ValCelula4": pouquissimoProvavel[0].VALGRAVIDADE4,
					"CorCelula4": pouquissimoProvavel[0].CORGRAVIDADE4,
					"ValCelula5": pouquissimoProvavel[0].VALGRAVIDADE5,
					"CorCelula5": pouquissimoProvavel[0].CORGRAVIDADE5,
					"ValCelula6": pouquissimoProvavel[0].VALGRAVIDADE6,
					"CorCelula6": pouquissimoProvavel[0].CORGRAVIDADE6,
					"ValCelula7": pouquissimoProvavel[0].VALGRAVIDADE7,
					"CorCelula7": pouquissimoProvavel[0].CORGRAVIDADE7,
					"ValCelula8": pouquissimoProvavel[0].VALGRAVIDADE8,
					"CorCelula8": pouquissimoProvavel[0].CORGRAVIDADE8
				}, {
					"Resultante": poucoProvavel[0].RESULTANTE,
					"Probabilidade": "Pouco provável",
					"ValCelula1": poucoProvavel[0].VALGRAVIDADE1,
					"CorCelula1": poucoProvavel[0].CORGRAVIDADE1,
					"ValCelula2": poucoProvavel[0].VALGRAVIDADE2,
					"CorCelula2": poucoProvavel[0].CORGRAVIDADE2,
					"ValCelula3": poucoProvavel[0].VALGRAVIDADE3,
					"CorCelula3": poucoProvavel[0].CORGRAVIDADE3,
					"ValCelula4": poucoProvavel[0].VALGRAVIDADE4,
					"CorCelula4": poucoProvavel[0].CORGRAVIDADE4,
					"ValCelula5": poucoProvavel[0].VALGRAVIDADE5,
					"CorCelula5": poucoProvavel[0].CORGRAVIDADE5,
					"ValCelula6": poucoProvavel[0].VALGRAVIDADE6,
					"CorCelula6": poucoProvavel[0].CORGRAVIDADE6,
					"ValCelula7": poucoProvavel[0].VALGRAVIDADE7,
					"CorCelula7": poucoProvavel[0].CORGRAVIDADE7,
					"ValCelula8": poucoProvavel[0].VALGRAVIDADE8,
					"CorCelula8": poucoProvavel[0].CORGRAVIDADE8
				}, {
					"Resultante": provavel[0].RESULTANTE,
					"Probabilidade": "Provável",
					"ValCelula1": provavel[0].VALGRAVIDADE1,
					"CorCelula1": provavel[0].CORGRAVIDADE1,
					"ValCelula2": provavel[0].VALGRAVIDADE2,
					"CorCelula2": provavel[0].CORGRAVIDADE2,
					"ValCelula3": provavel[0].VALGRAVIDADE3,
					"CorCelula3": provavel[0].CORGRAVIDADE3,
					"ValCelula4": provavel[0].VALGRAVIDADE4,
					"CorCelula4": provavel[0].CORGRAVIDADE4,
					"ValCelula5": provavel[0].VALGRAVIDADE5,
					"CorCelula5": provavel[0].CORGRAVIDADE5,
					"ValCelula6": provavel[0].VALGRAVIDADE6,
					"CorCelula6": provavel[0].CORGRAVIDADE6,
					"ValCelula7": provavel[0].VALGRAVIDADE7,
					"CorCelula7": provavel[0].CORGRAVIDADE7,
					"ValCelula8": provavel[0].VALGRAVIDADE8,
					"CorCelula8": provavel[0].CORGRAVIDADE8
				}, {
					"Resultante": bemProvavel[0].RESULTANTE,
					"Probabilidade": "Bem provável",
					"ValCelula1": bemProvavel[0].VALGRAVIDADE1,
					"CorCelula1": bemProvavel[0].CORGRAVIDADE1,
					"ValCelula2": bemProvavel[0].VALGRAVIDADE2,
					"CorCelula2": bemProvavel[0].CORGRAVIDADE2,
					"ValCelula3": bemProvavel[0].VALGRAVIDADE3,
					"CorCelula3": bemProvavel[0].CORGRAVIDADE3,
					"ValCelula4": bemProvavel[0].VALGRAVIDADE4,
					"CorCelula4": bemProvavel[0].CORGRAVIDADE4,
					"ValCelula5": bemProvavel[0].VALGRAVIDADE5,
					"CorCelula5": bemProvavel[0].CORGRAVIDADE5,
					"ValCelula6": bemProvavel[0].VALGRAVIDADE6,
					"CorCelula6": bemProvavel[0].CORGRAVIDADE6,
					"ValCelula7": bemProvavel[0].VALGRAVIDADE7,
					"CorCelula7": bemProvavel[0].CORGRAVIDADE7,
					"ValCelula8": bemProvavel[0].VALGRAVIDADE8,
					"CorCelula8": bemProvavel[0].CORGRAVIDADE8
				}, {
					"Resultante": muitoProvavel[0].RESULTANTE,
					"Probabilidade": "Muito provável",
					"ValCelula1": muitoProvavel[0].VALGRAVIDADE1,
					"CorCelula1": muitoProvavel[0].CORGRAVIDADE1,
					"ValCelula2": muitoProvavel[0].VALGRAVIDADE2,
					"CorCelula2": muitoProvavel[0].CORGRAVIDADE2,
					"ValCelula3": muitoProvavel[0].VALGRAVIDADE3,
					"CorCelula3": muitoProvavel[0].CORGRAVIDADE3,
					"ValCelula4": muitoProvavel[0].VALGRAVIDADE4,
					"CorCelula4": muitoProvavel[0].CORGRAVIDADE4,
					"ValCelula5": muitoProvavel[0].VALGRAVIDADE5,
					"CorCelula5": muitoProvavel[0].CORGRAVIDADE5,
					"ValCelula6": muitoProvavel[0].VALGRAVIDADE6,
					"CorCelula6": muitoProvavel[0].CORGRAVIDADE6,
					"ValCelula7": muitoProvavel[0].VALGRAVIDADE7,
					"CorCelula7": muitoProvavel[0].CORGRAVIDADE7,
					"ValCelula8": muitoProvavel[0].VALGRAVIDADE8,
					"CorCelula8": muitoProvavel[0].CORGRAVIDADE8
				}]

				oModelView.setProperty("/tabelaRiscoPotencial", probabilidadesMatriz)

				setTimeout(() => {
					var index = 0
					var count = 0
					var corCelula = "CorCelula"
					var estruturaNome = this.byId("tabelaGravidade").mAggregations.items[0].mAggregations.cells[0].oParent.sId
					var complementoNome = "_cell"
					var celulaId = "#" + estruturaNome + complementoNome
					var cellCount = 0
					var countIndex = 0
					do {
						count = count + 1
						corCelula = corCelula + count
						celulaId = celulaId + count

						switch (probabilidadesMatriz[countIndex].Probabilidade) {
							case "Pouquíssimo provável":
								if (probabilidadesMatriz[countIndex][corCelula] == "green") {
									document.querySelector(celulaId).style.backgroundColor = "#51b551"
								}
								if (probabilidadesMatriz[countIndex][corCelula] == "lightgreen") {
									document.querySelector(celulaId).style.backgroundColor = "#90ee9082"

								}
								if (probabilidadesMatriz[countIndex][corCelula] == "yellow") {
									document.querySelector(celulaId).style.backgroundColor = "#ffbc006b"

								}
								if (probabilidadesMatriz[countIndex][corCelula] == "red") {
									document.querySelector(celulaId).style.backgroundColor = "#ff6e296e"

								}
								if (probabilidadesMatriz[countIndex][corCelula] == "orange") {
									document.querySelector(celulaId).style.backgroundColor = "#e77e12"

								}
								if (linhaSelecionada.PROBABILIDADE == probabilidadesMatriz[countIndex].Probabilidade) {
									if (document.querySelector(celulaId).innerText == gravidadeResultante) {
										document.querySelector(celulaId).style.border = "1px solid blue"
									}

								}
								break;
							case "Pouco provável":
								if (probabilidadesMatriz[countIndex][corCelula] == "green") {
									document.querySelector(celulaId).style.backgroundColor = "#51b551"

								}
								if (probabilidadesMatriz[countIndex][corCelula] == "lightgreen") {
									document.querySelector(celulaId).style.backgroundColor = "#90ee9082"

								}
								if (probabilidadesMatriz[countIndex][corCelula] == "yellow") {
									document.querySelector(celulaId).style.backgroundColor = "#ffbc006b"

								}
								if (probabilidadesMatriz[countIndex][corCelula] == "red") {
									document.querySelector(celulaId).style.backgroundColor = "#ff6e296e"

								}
								if (probabilidadesMatriz[countIndex][corCelula] == "orange") {
									document.querySelector(celulaId).style.backgroundColor = "#e77e12"

								}
								if (linhaSelecionada.PROBABILIDADE == probabilidadesMatriz[countIndex].Probabilidade) {
									if (document.querySelector(celulaId).innerText == gravidadeResultante) {
										document.querySelector(celulaId).style.border = "1px solid blue"
									}

								}
								break;
							case "Provável":
								if (probabilidadesMatriz[countIndex][corCelula] == "green") {
									document.querySelector(celulaId).style.backgroundColor = "#51b551"

								}
								if (probabilidadesMatriz[countIndex][corCelula] == "lightgreen") {
									document.querySelector(celulaId).style.backgroundColor = "#90ee9082"

								}
								if (probabilidadesMatriz[countIndex][corCelula] == "yellow") {
									document.querySelector(celulaId).style.backgroundColor = "#ffbc006b"

								}
								if (probabilidadesMatriz[countIndex][corCelula] == "red") {
									document.querySelector(celulaId).style.backgroundColor = "#ff6e296e"

								}
								if (probabilidadesMatriz[countIndex][corCelula] == "orange") {
									document.querySelector(celulaId).style.backgroundColor = "#e77e12"

								}
								if (linhaSelecionada.PROBABILIDADE == probabilidadesMatriz[countIndex].Probabilidade) {
									if (document.querySelector(celulaId).innerText == gravidadeResultante) {
										document.querySelector(celulaId).style.border = "1px solid blue"
									}

								}
								break;
							case "Bem provável":
								if (probabilidadesMatriz[countIndex][corCelula] == "green") {
									document.querySelector(celulaId).style.backgroundColor = "#51b551"

								}
								if (probabilidadesMatriz[countIndex][corCelula] == "lightgreen") {
									document.querySelector(celulaId).style.backgroundColor = "#90ee9082"

								}
								if (probabilidadesMatriz[countIndex][corCelula] == "yellow") {
									document.querySelector(celulaId).style.backgroundColor = "#ffbc006b"

								}
								if (probabilidadesMatriz[countIndex][corCelula] == "red") {
									document.querySelector(celulaId).style.backgroundColor = "#ff6e296e"

								}
								if (probabilidadesMatriz[countIndex][corCelula] == "orange") {
									document.querySelector(celulaId).style.backgroundColor = "#e77e12"

								}
								if (linhaSelecionada.PROBABILIDADE == probabilidadesMatriz[countIndex].Probabilidade) {
									if (document.querySelector(celulaId).innerText == gravidadeResultante) {
										document.querySelector(celulaId).style.border = "1px solid blue"
									}

								}
								break;
							case "Muito provável":
								if (probabilidadesMatriz[countIndex][corCelula] == "green") {
									document.querySelector(celulaId).style.backgroundColor = "#51b551"

								}
								if (probabilidadesMatriz[countIndex][corCelula] == "lightgreen") {
									document.querySelector(celulaId).style.backgroundColor = "#90ee9082"

								}
								if (probabilidadesMatriz[countIndex][corCelula] == "yellow") {
									document.querySelector(celulaId).style.backgroundColor = "#ffbc006b"

								}
								if (probabilidadesMatriz[countIndex][corCelula] == "red") {
									document.querySelector(celulaId).style.backgroundColor = "#ff6e296e"

								}
								if (probabilidadesMatriz[countIndex][corCelula] == "orange") {
									document.querySelector(celulaId).style.backgroundColor = "#e77e12"

								}
								if (linhaSelecionada.PROBABILIDADE == probabilidadesMatriz[countIndex].Probabilidade) {
									if (document.querySelector(celulaId).innerText == gravidadeResultante) {
										document.querySelector(celulaId).style.border = "1px solid blue"
									}

								}
								break;

						}

						this.getView().byId("riscPotencial").setValue(probabilidade[0].PROBABILIDADE);

						corCelula = corCelula.slice(0, -1)
						celulaId = celulaId.slice(0, -1)
						index = index + 1
						if (count >= 8) {
							var valor = "$1"
							countIndex = countIndex + 1
							count = count = 0
							cellCount = cellCount + 1
							valor = valor + cellCount
							celulaId = celulaId.replace(/(.{71}).{1}/, `${valor}`)
						}

					} while (index < 40)
				}, 20)
				this.getView().byId("riscPotencial").setValue(probabilidade[0].descricao);
			}
		},

		freqRealAtivChangeEdit: function() {
			var oModelView = this.getView().getModel("oView1");
			oModelView.setProperty('/tabelaRiscoPotencialEditvalue', [])

			var numPessEnvol = Number(this.getView().byId("editNumPessoasEnvSelect").getSelectedKey());
			var tempoDuracaoAtv = Number(this.getView().byId("editTempDuracaoSelect").getSelectedKey());
			var freqRealAtvd = Number(this.getView().byId("editFreqRealizaSelect").getSelectedKey());
			var probabilidadeCount;
			var tableRiscoPotencial = oModelView.getProperty("/tabelaMatrizCalc");
			probabilidadeCount = numPessEnvol * tempoDuracaoAtv * freqRealAtvd;

			var probabilidade = tableRiscoPotencial.filter(val => val.RESULTANTE == probabilidadeCount);
			if (probabilidade.length != 0) {
				this.getView().byId("probabil").setValue(probabilidade[0].PROBABILIDADE);

				var gravidade = Number(this.getView().byId("danoPotencialChangeEdit").getSelectedKey())
				var gravidadeResultante = gravidade * probabilidadeCount;
				var resultante = gravidadeResultante;
				var probabilidadeTeste = probabilidade[0].PROBABILIDADE;

				var linhaIndex = tableRiscoPotencial.findIndex(value => value.PROBABILIDADE == probabilidadeTeste && value.VALGRAVIDADE1 ==
					resultante ||
					value.VALGRAVIDADE2 == resultante || value.VALGRAVIDADE3 == resultante || value.VALGRAVIDADE4 == resultante || value.VALGRAVIDADE5 ==
					resultante ||
					value.VALGRAVIDADE6 == resultante || value.VALGRAVIDADE7 == resultante ||
					value.VALGRAVIDADE8 == resultante);
				var linhaSelecionada = tableRiscoPotencial.find(value => value.RESULTANTE == tableRiscoPotencial[linhaIndex].RESULTANTE);
				var anteriorArray = [];
				var anterior;

				for (var i = 0; i < tableRiscoPotencial.length; i++) {
					linhaIndex = linhaIndex - 1;
					anterior = tableRiscoPotencial[linhaIndex];
					if (anterior != undefined) {
						if (anterior.Probabilidade != linhaSelecionada.Probabilidade) {
							anteriorArray.push(tableRiscoPotencial.find(arrayValue => arrayValue.Probabilidade == anterior.Probabilidade && arrayValue.Resultante ==
								anterior.Resultante))
						}
					}

				};
				anteriorArray.sort((a, b) => a.Resultante - b.Resultante)
				var ultimaLinhaAnterior = []
				var findLastIndex = (array, searchKey, searchValue) => {
					var index = array.slice().reverse().find(x => x[searchKey] === searchValue);
					var count = array.length - 1
					var finalIndex = index >= 0 ? count - index : index;
					return finalIndex;
				}

				for (var k = 0; k < anteriorArray.length; k++) {
					switch (anteriorArray[k].Probabilidade) {
						case "Pouquíssimo provável":
							ultimaLinhaAnterior.push(findLastIndex(anteriorArray, "Probabilidade", "Pouquíssimo provável"))
							break;
						case "Pouco provável":
							ultimaLinhaAnterior.push(findLastIndex(anteriorArray, "Probabilidade", "Pouco provável"))
							break;
						case "Provável":
							ultimaLinhaAnterior.push(findLastIndex(anteriorArray, "Probabilidade", "Provável"))
							break;
						case "Bem provável":
							ultimaLinhaAnterior.push(findLastIndex(anteriorArray, "Probabilidade", "Bem provável"))
							break;
						case "Muito provável":
							ultimaLinhaAnterior.push(findLastIndex(anteriorArray, "Probabilidade", "Muito provável"))
							break;
					}

				}

				var linhaSelecionadaArray = [linhaSelecionada]
				var newUltimaLinhaAnterior = [...new Set(ultimaLinhaAnterior)]
				var ultimaLinhaAnteriorMap = ultimaLinhaAnterior.map(val => val.PROBABILIDADE)
				var tableRiscoPotencialFilter = tableRiscoPotencial.filter(val => !ultimaLinhaAnteriorMap.includes(val.PROBABILIDADE))
				var linhaSelecionadaMap = linhaSelecionadaArray.map(val => val.PROBABILIDADE)
				var tableRiscoPotencialFilter2 = tableRiscoPotencialFilter.filter(val => !linhaSelecionadaMap.includes(val.PROBABILIDADE))
				var dadosFilterArray = []
				for (var j = 0; j < tableRiscoPotencialFilter2.length; j++) {
					if (!dadosFilterArray.includes(tableRiscoPotencialFilter2[j].PROBABILIDADE)) {
						dadosFilterArray.push(tableRiscoPotencialFilter2[j].PROBABILIDADE)
					}
				}
				var dadosFilterArray2 = []
				for (var l = 0; l < dadosFilterArray.length; l++) {
					dadosFilterArray2.push(tableRiscoPotencialFilter2.find(val => val.PROBABILIDADE == dadosFilterArray[l]))
				}

				var pouquissimoProvavel = []
				var poucoProvavel = []
				var provavel = []
				var bemProvavel = []
				var muitoProvavel = []

				var dadosTabelaMatrizFilterArray = []
				dadosTabelaMatrizFilterArray.push(dadosFilterArray2)
				dadosTabelaMatrizFilterArray.push(newUltimaLinhaAnterior)
				dadosTabelaMatrizFilterArray.push(linhaSelecionada)

				for (var m = 0; m < dadosTabelaMatrizFilterArray.length; m++) {
					for (var teste in dadosTabelaMatrizFilterArray[m]) {
						if (dadosTabelaMatrizFilterArray[m][teste].PROBABILIDADE != undefined) {
							switch (dadosTabelaMatrizFilterArray[m][teste].PROBABILIDADE) {
								case "Pouquíssimo provável":
									pouquissimoProvavel.push(dadosTabelaMatrizFilterArray[m][teste]);
									break;
								case "Pouco provável":
									poucoProvavel.push(dadosTabelaMatrizFilterArray[m][teste]);
									break;
								case "Provável":
									provavel.push(dadosTabelaMatrizFilterArray[m][teste]);
									break;
								case "Bem provável":
									bemProvavel.push(dadosTabelaMatrizFilterArray[m][teste]);
									break;
								case "Muito provável":
									muitoProvavel.push(dadosTabelaMatrizFilterArray[m][teste]);
									break;

							}
						} else {
							if (dadosTabelaMatrizFilterArray[m].PROBABILIDADE == dadosTabelaMatrizFilterArray[m][teste]) {
								switch (dadosTabelaMatrizFilterArray[m].PROBABILIDADE) {
									case "Pouquíssimo provável":
										pouquissimoProvavel.push(dadosTabelaMatrizFilterArray[m]);
										break;
									case "Pouco provável":
										poucoProvavel.push(dadosTabelaMatrizFilterArray[m]);
										break;
									case "Provável":
										provavel.push(dadosTabelaMatrizFilterArray[m]);
										break;
									case "Bem provável":
										bemProvavel.push(dadosTabelaMatrizFilterArray[m]);
										break;
									case "Muito provável":
										muitoProvavel.push(dadosTabelaMatrizFilterArray[m]);
										break;

								}
							}
						}
					}
				}

				var probabilidadesMatriz = [{
					"Resultante": pouquissimoProvavel[0].RESULTANTE,
					"Probabilidade": "Pouquíssimo provável",
					"ValCelula1": pouquissimoProvavel[0].VALGRAVIDADE1,
					"CorCelula1": pouquissimoProvavel[0].CORGRAVIDADE1,
					"ValCelula2": pouquissimoProvavel[0].VALGRAVIDADE2,
					"CorCelula2": pouquissimoProvavel[0].CORGRAVIDADE2,
					"ValCelula3": pouquissimoProvavel[0].VALGRAVIDADE3,
					"CorCelula3": pouquissimoProvavel[0].CORGRAVIDADE3,
					"ValCelula4": pouquissimoProvavel[0].VALGRAVIDADE4,
					"CorCelula4": pouquissimoProvavel[0].CORGRAVIDADE4,
					"ValCelula5": pouquissimoProvavel[0].VALGRAVIDADE5,
					"CorCelula5": pouquissimoProvavel[0].CORGRAVIDADE5,
					"ValCelula6": pouquissimoProvavel[0].VALGRAVIDADE6,
					"CorCelula6": pouquissimoProvavel[0].CORGRAVIDADE6,
					"ValCelula7": pouquissimoProvavel[0].VALGRAVIDADE7,
					"CorCelula7": pouquissimoProvavel[0].CORGRAVIDADE7,
					"ValCelula8": pouquissimoProvavel[0].VALGRAVIDADE8,
					"CorCelula8": pouquissimoProvavel[0].CORGRAVIDADE8
				}, {
					"Resultante": poucoProvavel[0].RESULTANTE,
					"Probabilidade": "Pouco provável",
					"ValCelula1": poucoProvavel[0].VALGRAVIDADE1,
					"CorCelula1": poucoProvavel[0].CORGRAVIDADE1,
					"ValCelula2": poucoProvavel[0].VALGRAVIDADE2,
					"CorCelula2": poucoProvavel[0].CORGRAVIDADE2,
					"ValCelula3": poucoProvavel[0].VALGRAVIDADE3,
					"CorCelula3": poucoProvavel[0].CORGRAVIDADE3,
					"ValCelula4": poucoProvavel[0].VALGRAVIDADE4,
					"CorCelula4": poucoProvavel[0].CORGRAVIDADE4,
					"ValCelula5": poucoProvavel[0].VALGRAVIDADE5,
					"CorCelula5": poucoProvavel[0].CORGRAVIDADE5,
					"ValCelula6": poucoProvavel[0].VALGRAVIDADE6,
					"CorCelula6": poucoProvavel[0].CORGRAVIDADE6,
					"ValCelula7": poucoProvavel[0].VALGRAVIDADE7,
					"CorCelula7": poucoProvavel[0].CORGRAVIDADE7,
					"ValCelula8": poucoProvavel[0].VALGRAVIDADE8,
					"CorCelula8": poucoProvavel[0].CORGRAVIDADE8
				}, {
					"Resultante": provavel[0].RESULTANTE,
					"Probabilidade": "Provável",
					"ValCelula1": provavel[0].VALGRAVIDADE1,
					"CorCelula1": provavel[0].CORGRAVIDADE1,
					"ValCelula2": provavel[0].VALGRAVIDADE2,
					"CorCelula2": provavel[0].CORGRAVIDADE2,
					"ValCelula3": provavel[0].VALGRAVIDADE3,
					"CorCelula3": provavel[0].CORGRAVIDADE3,
					"ValCelula4": provavel[0].VALGRAVIDADE4,
					"CorCelula4": provavel[0].CORGRAVIDADE4,
					"ValCelula5": provavel[0].VALGRAVIDADE5,
					"CorCelula5": provavel[0].CORGRAVIDADE5,
					"ValCelula6": provavel[0].VALGRAVIDADE6,
					"CorCelula6": provavel[0].CORGRAVIDADE6,
					"ValCelula7": provavel[0].VALGRAVIDADE7,
					"CorCelula7": provavel[0].CORGRAVIDADE7,
					"ValCelula8": provavel[0].VALGRAVIDADE8,
					"CorCelula8": provavel[0].CORGRAVIDADE8
				}, {
					"Resultante": bemProvavel[0].RESULTANTE,
					"Probabilidade": "Bem provável",
					"ValCelula1": bemProvavel[0].VALGRAVIDADE1,
					"CorCelula1": bemProvavel[0].CORGRAVIDADE1,
					"ValCelula2": bemProvavel[0].VALGRAVIDADE2,
					"CorCelula2": bemProvavel[0].CORGRAVIDADE2,
					"ValCelula3": bemProvavel[0].VALGRAVIDADE3,
					"CorCelula3": bemProvavel[0].CORGRAVIDADE3,
					"ValCelula4": bemProvavel[0].VALGRAVIDADE4,
					"CorCelula4": bemProvavel[0].CORGRAVIDADE4,
					"ValCelula5": bemProvavel[0].VALGRAVIDADE5,
					"CorCelula5": bemProvavel[0].CORGRAVIDADE5,
					"ValCelula6": bemProvavel[0].VALGRAVIDADE6,
					"CorCelula6": bemProvavel[0].CORGRAVIDADE6,
					"ValCelula7": bemProvavel[0].VALGRAVIDADE7,
					"CorCelula7": bemProvavel[0].CORGRAVIDADE7,
					"ValCelula8": bemProvavel[0].VALGRAVIDADE8,
					"CorCelula8": bemProvavel[0].CORGRAVIDADE8
				}, {
					"Resultante": muitoProvavel[0].RESULTANTE,
					"Probabilidade": "Muito provável",
					"ValCelula1": muitoProvavel[0].VALGRAVIDADE1,
					"CorCelula1": muitoProvavel[0].CORGRAVIDADE1,
					"ValCelula2": muitoProvavel[0].VALGRAVIDADE2,
					"CorCelula2": muitoProvavel[0].CORGRAVIDADE2,
					"ValCelula3": muitoProvavel[0].VALGRAVIDADE3,
					"CorCelula3": muitoProvavel[0].CORGRAVIDADE3,
					"ValCelula4": muitoProvavel[0].VALGRAVIDADE4,
					"CorCelula4": muitoProvavel[0].CORGRAVIDADE4,
					"ValCelula5": muitoProvavel[0].VALGRAVIDADE5,
					"CorCelula5": muitoProvavel[0].CORGRAVIDADE5,
					"ValCelula6": muitoProvavel[0].VALGRAVIDADE6,
					"CorCelula6": muitoProvavel[0].CORGRAVIDADE6,
					"ValCelula7": muitoProvavel[0].VALGRAVIDADE7,
					"CorCelula7": muitoProvavel[0].CORGRAVIDADE7,
					"ValCelula8": muitoProvavel[0].VALGRAVIDADE8,
					"CorCelula8": muitoProvavel[0].CORGRAVIDADE8
				}]

				oModelView.setProperty("/tabelaRiscoPotencialEditvalue", probabilidadesMatriz)

				setTimeout(() => {
					var index = 0
					var count = 0
					var corCelula = "CorCelula"
					var estruturaNome = this.byId("tabelaGravidadeEdit").mAggregations.items[0].mAggregations.cells[0].oParent.sId
					var complementoNome = "_cell"
					var celulaId = "#" + estruturaNome + complementoNome
					var cellCount = 0
					var countIndex = 0
					do {
						count = count + 1
						corCelula = corCelula + count
						celulaId = celulaId + count

						switch (probabilidadesMatriz[countIndex].Probabilidade) {
							case "Pouquíssimo provável":
								if (probabilidadesMatriz[countIndex][corCelula] == "green") {
									document.querySelector(celulaId).style.backgroundColor = "#51b551"
								}
								if (probabilidadesMatriz[countIndex][corCelula] == "lightgreen") {
									document.querySelector(celulaId).style.backgroundColor = "#90ee9082"

								}
								if (probabilidadesMatriz[countIndex][corCelula] == "yellow") {
									document.querySelector(celulaId).style.backgroundColor = "#ffbc006b"

								}
								if (probabilidadesMatriz[countIndex][corCelula] == "red") {
									document.querySelector(celulaId).style.backgroundColor = "#ff6e296e"

								}
								if (probabilidadesMatriz[countIndex][corCelula] == "orange") {
									document.querySelector(celulaId).style.backgroundColor = "#e77e12"

								}
								if (linhaSelecionada.PROBABILIDADE == probabilidadesMatriz[countIndex].Probabilidade) {
									if (document.querySelector(celulaId).innerText == gravidadeResultante) {
										document.querySelector(celulaId).style.border = "1px solid blue"
									}

								}
								break;
							case "Pouco provável":
								if (probabilidadesMatriz[countIndex][corCelula] == "green") {
									document.querySelector(celulaId).style.backgroundColor = "#51b551"

								}
								if (probabilidadesMatriz[countIndex][corCelula] == "lightgreen") {
									document.querySelector(celulaId).style.backgroundColor = "#90ee9082"

								}
								if (probabilidadesMatriz[countIndex][corCelula] == "yellow") {
									document.querySelector(celulaId).style.backgroundColor = "#ffbc006b"

								}
								if (probabilidadesMatriz[countIndex][corCelula] == "red") {
									document.querySelector(celulaId).style.backgroundColor = "#ff6e296e"

								}
								if (probabilidadesMatriz[countIndex][corCelula] == "orange") {
									document.querySelector(celulaId).style.backgroundColor = "#e77e12"

								}
								if (linhaSelecionada.PROBABILIDADE == probabilidadesMatriz[countIndex].Probabilidade) {
									if (document.querySelector(celulaId).innerText == gravidadeResultante) {
										document.querySelector(celulaId).style.border = "1px solid blue"
									}

								}
								break;
							case "Provável":
								if (probabilidadesMatriz[countIndex][corCelula] == "green") {
									document.querySelector(celulaId).style.backgroundColor = "#51b551"

								}
								if (probabilidadesMatriz[countIndex][corCelula] == "lightgreen") {
									document.querySelector(celulaId).style.backgroundColor = "#90ee9082"

								}
								if (probabilidadesMatriz[countIndex][corCelula] == "yellow") {
									document.querySelector(celulaId).style.backgroundColor = "#ffbc006b"

								}
								if (probabilidadesMatriz[countIndex][corCelula] == "red") {
									document.querySelector(celulaId).style.backgroundColor = "#ff6e296e"

								}
								if (probabilidadesMatriz[countIndex][corCelula] == "orange") {
									document.querySelector(celulaId).style.backgroundColor = "#e77e12"

								}
								if (linhaSelecionada.PROBABILIDADE == probabilidadesMatriz[countIndex].Probabilidade) {
									if (document.querySelector(celulaId).innerText == gravidadeResultante) {
										document.querySelector(celulaId).style.border = "1px solid blue"
									}

								}
								break;
							case "Bem provável":
								if (probabilidadesMatriz[countIndex][corCelula] == "green") {
									document.querySelector(celulaId).style.backgroundColor = "#51b551"

								}
								if (probabilidadesMatriz[countIndex][corCelula] == "lightgreen") {
									document.querySelector(celulaId).style.backgroundColor = "#90ee9082"

								}
								if (probabilidadesMatriz[countIndex][corCelula] == "yellow") {
									document.querySelector(celulaId).style.backgroundColor = "#ffbc006b"

								}
								if (probabilidadesMatriz[countIndex][corCelula] == "red") {
									document.querySelector(celulaId).style.backgroundColor = "#ff6e296e"

								}
								if (probabilidadesMatriz[countIndex][corCelula] == "orange") {
									document.querySelector(celulaId).style.backgroundColor = "#e77e12"

								}
								if (linhaSelecionada.PROBABILIDADE == probabilidadesMatriz[countIndex].Probabilidade) {
									if (document.querySelector(celulaId).innerText == gravidadeResultante) {
										document.querySelector(celulaId).style.border = "1px solid blue"
									}

								}
								break;
							case "Muito provável":
								if (probabilidadesMatriz[countIndex][corCelula] == "green") {
									document.querySelector(celulaId).style.backgroundColor = "#51b551"

								}
								if (probabilidadesMatriz[countIndex][corCelula] == "lightgreen") {
									document.querySelector(celulaId).style.backgroundColor = "#90ee9082"

								}
								if (probabilidadesMatriz[countIndex][corCelula] == "yellow") {
									document.querySelector(celulaId).style.backgroundColor = "#ffbc006b"

								}
								if (probabilidadesMatriz[countIndex][corCelula] == "red") {
									document.querySelector(celulaId).style.backgroundColor = "#ff6e296e"

								}
								if (probabilidadesMatriz[countIndex][corCelula] == "orange") {
									document.querySelector(celulaId).style.backgroundColor = "#e77e12"

								}
								if (linhaSelecionada.PROBABILIDADE == probabilidadesMatriz[countIndex].Probabilidade) {
									if (document.querySelector(celulaId).innerText == gravidadeResultante) {
										document.querySelector(celulaId).style.border = "1px solid blue"
									}

								}
								break;

						}

						this.getView().byId("riscPotencial").setValue(probabilidade[0].PROBABILIDADE);

						corCelula = corCelula.slice(0, -1)
						celulaId = celulaId.slice(0, -1)
						index = index + 1
						if (count >= 8) {
							var valor = "$1"
							countIndex = countIndex + 1
							count = count = 0
							cellCount = cellCount + 1
							valor = valor + cellCount
							celulaId = celulaId.replace(/(.{75}).{1}/, `${valor}`)
						}

					} while (index < 40)
				}, 20)
				this.getView().byId("riscPotencial").setValue(probabilidade[0].probabilidade);
			}
		},

		danoPotencialChange: function(oEvent) {

			var oModelView = this.getView().getModel("oView1");
			var gravidade = "";
			var danPotenc = oEvent.getParameters("selectedItem").selectedItem.getProperty("additionalText");
			gravidade = "Potencial De " + danPotenc;
			oModelView.setProperty('/gravidade', gravidade);
			oModelView.setProperty('/gravidadeValue', gravidade);
		},

		array_move: function(input, from, to) {
			let numberOfDeletedElm = 1;

			const elm = input.splice(from, numberOfDeletedElm)[0];

			numberOfDeletedElm = 0;

			input.splice(to, numberOfDeletedElm, elm);
			return input;
		},

		danoPotencialChangeEdit: function(oEvent) {
			var oModelView = this.getView().getModel("oView1");
			var gravidade = "";
			var danPotenc = oEvent.getParameters("selectedItem").selectedItem.getProperty("additionalText");
			gravidade = "Potencial De " + danPotenc;
			oModelView.setProperty('/gravidadeValue', gravidade);

		},

		dialogInserAreaDataSegTabConfirm: function() {
			var oModelView = this.getView().getModel("oView1");
			var dadosSegundaTabela = oModelView.getProperty("/segundaTabela");
			var dadosSegundaTabelaAUX = oModelView.getProperty("/segundaTabelaAUX");
			var valDanoPotencial = oModelView.getProperty("/danosPotenciaisValueTabela");
			var tipoPerigo = this.getView().byId("tipoPerigoSelect")._getSelectedItemText();
			var perigo = this.getView().byId("perigoSelect")._getSelectedItemText();
			var risco = this.getView().byId("RiscoSelect")._getSelectedItemText();
			var descRisco = this.getView().byId("descRisco").getValue();
			var fontCirc = this.getView().byId("fontCircSelect")._getSelectedItemText();
			var desFontCirc = this.getView().byId("desFontCirc").getValue();
			var danPotenc = this.getView().byId("danPotencSelect").getSelectedItem().getProperty('additionalText');
			var cargosExpostos = "";
			var numPessoEnvol = this.getView().byId("numPessoEnvolSelect")._getSelectedItemText();
			var tempDuraAtiv = this.getView().byId("tempDuraAtivSelect")._getSelectedItemText();
			var freqRealAtiv = this.getView().byId("freqRealAtivSelect")._getSelectedItemText();
			var gravidade = "";
			var probabil = "";
			var riscPotencial = "";
			var tipoPerigoKey = this.getView().byId("tipoPerigoSelect").getSelectedKey();
			var perigoKey = this.getView().byId("perigoSelect").getSelectedKey();
			var riscoKey = this.getView().byId("RiscoSelect").getSelectedKey();
			var descRiscoKey = this.getView().byId("descRisco").getValue();
			var fontCircKey = this.getView().byId("fontCircSelect").getSelectedKey();
			var desFontCircKey = this.getView().byId("desFontCirc").getValue();
			var danPotencKey = this.getView().byId("danPotencSelect").getSelectedKey();
			var cargosExpostosKey = "";
			var numPessoEnvolKey = this.getView().byId("numPessoEnvolSelect").getSelectedKey();
			var tempDuraAtivKey = this.getView().byId("tempDuraAtivSelect").getSelectedKey();
			var freqRealAtivKey = this.getView().byId("freqRealAtivSelect").getSelectedKey();
			var cargosExpostos = oModelView.getProperty("/itemClassRisc");
			var primeiraTabela = this.getView().byId("dadosDasAtividadesTable");
			var sPath = primeiraTabela.getSelectedItems()[0].getBindingContextPath();
			var primeiraTabelaDados = oModelView.getProperty(sPath);

			var itemEditCargArea = oModelView.getProperty("/itemEditCargArea");
			var cargosDaArea = oModelView.getProperty("/itemCargArea");
			for (var c = 0; c < cargosExpostos.length; c++) {
				cargosDaArea.push(cargosExpostos[c])
			}

			var numPessEnvol = Number(this.getView().byId("numPessoEnvolSelect").getSelectedKey());
			var tempoDuracaoAtv = Number(this.getView().byId("tempDuraAtivSelect").getSelectedKey());
			var freqRealAtvd = Number(this.getView().byId("freqRealAtivSelect").getSelectedKey());
			var gravidade = Number(this.getView().byId("danPotencSelect").getSelectedKey())
			var probabilidadeCount;
			probabilidadeCount = numPessEnvol * tempoDuracaoAtv * freqRealAtvd;

			var gravidadeResultante = gravidade * probabilidadeCount;

			gravidade = "Potencial De " + danPotenc;
			probabil = numPessoEnvolKey * tempDuraAtivKey * freqRealAtivKey;
			riscPotencial = gravidadeResultante;

			oModelView.setProperty('/probabilidade', probabil);

			var vazio = ""
			for (var i = 0; i < cargosExpostos.length; i++) {
				vazio += cargosExpostos[i].SOBID + ", ";
			}
			vazio = vazio.slice(0, -2);
			oModelView.setProperty("/segundaTabelaAUX", []);

			var tempRandomId = this.getRandomArbitrary(1, 10000000000000000);

			var linhaIndex = valDanoPotencial.findIndex(val => val.TIPO_PERIGO == tipoPerigoKey && val.RISCO == riscoKey && val.FONTE ==
				fontCircKey)
			var valorDanoPotenc = valDanoPotencial[linhaIndex].DANOS_POTENC;

			var dadosSegundaTabelaObjeto = {
				"TIPO_PERIGO": tipoPerigo,
				"PERIGO": perigo,
				"RISCO": risco,
				"DESC_RISCO": descRisco,
				"FONTE_CIRC": fontCirc,
				"DESC_FONTE": desFontCirc,
				"DESC_DANO": valorDanoPotenc,
				"CARG_EXPOSTOS": vazio,
				"NUM_PESS_ENV": numPessoEnvol,
				"DURAC_ATIVIDADE": tempDuraAtiv,
				"FREQ_REAL_ATIV": freqRealAtiv,
				"GRAVIDADE": gravidade,
				"PROBABILIDADE": probabil,
				"RISC_POTENCIAL": riscPotencial,
				"TIPO_PERIGO_KEY": tipoPerigoKey,
				"PERIGO_KEY": perigoKey,
				"RISCO_KEY": riscoKey,
				"DESC_RISCO_KEY": descRiscoKey,
				"FONT_CIRC_KEY": fontCircKey,
				"DES_FONT_CIRC_KEY": desFontCircKey,
				"DAN_POTENC_KEY": danPotencKey,
				"CARGOS_EXPOSTOS_KEY": cargosExpostosKey,
				"NUM_PESS_ENV_KEY": numPessoEnvolKey,
				"TEMP_DURA_ATIV_KEY": tempDuraAtivKey,
				"FREQ_REAL_ATIV_KEY": freqRealAtivKey,
				"TEMP_ID": tempRandomId,
				"opcao": "C",
				"link_id": primeiraTabelaDados.link_id,
				"USR_MODIFI": "",
				"DTMODIFI": "",
				"DEL": ""

			}
			var cargosExportosMap = cargosExpostos.map(val => val.SOBID);
			var itemCargaAreaFilter = itemEditCargArea.filter(val => !cargosExportosMap.includes(val.SOBID));

			var dadosSegundaTabelaAUXFilter = dadosSegundaTabelaAUX.filter(val => val.link_id == primeiraTabelaDados.link_id)
			dadosSegundaTabela.push(dadosSegundaTabelaObjeto);
			dadosSegundaTabelaAUXFilter.push(dadosSegundaTabelaObjeto);
			oModelView.setProperty("/segundaTabelaAUX", dadosSegundaTabelaAUXFilter);
			oModelView.setProperty("/segundaTabela", dadosSegundaTabela);
			oModelView.setProperty("/itemCargArea", cargosDaArea);
			oModelView.setProperty("/itemClassRisc", []);
			oModelView.setProperty("/riscoPotencValue", "");

			oModelView.setProperty('/editRiscoPotencSelect', "")

			var oModel = this.getOwnerComponent().getModel();
			var oEntry = {
				deleteTableRow: "",
				opcao: "C",
				revalidar: "",
				riscosOcupacionais: JSON.stringify(dadosSegundaTabelaObjeto),
			}

			sap.ui.core.BusyIndicator.show();
			oModel.create("/riscosOcupacionaisSet", oEntry, {
				success: function(oData) {
					sap.ui.core.BusyIndicator.hide();
					MessageToast.show(this.getOwnerComponent().getModel("i18n").getResourceBundle().getText("msgRetornSucess"))
				},

				error: function(error) {
					sap.ui.core.BusyIndicator.hide();
					MessageToast.show(this.getOwnerComponent().getModel("i18n").getResourceBundle().getText("msgRetornError"))
				}
			});

			this._openDialogInserDadosRiscOcupacionais().close();
			this.limparDadosTabelaDois();

		},

		onColumColapse: function(oEvent) {
			var oModelView = this.getView().getModel("oView1");
			var row = oEvent.getSource().getBindingContextPath();
			var oTable = this.getView().byId("dadosDasAtividadesTable");
			var oTableData = oModelView.getProperty(row);
			var oButton = oEvent.getSource();
			var oView = this.getView();

			var charCount = oTableData.atividade.length;

			if (charCount > 10) {
				// create popover
				if (!this._pPopover) {
					this._pPopover = Fragment.load({
						id: oView.getId(),
						name: "com.arcelormittal.ipar.view.fragments.popoverDetalhamentoLocal",
						controller: this
					}).then(function(oPopover) {
						oView.addDependent(oPopover);
						return oPopover;
					});
				}
				oModelView.setProperty("/dtLocalPopover", oTableData.atividade);
				this._pPopover.then(function(oPopover) {
					oPopover.openBy(oButton);
				});

			}

		},

		fecharPopOver: function() {
			this.byId("dtLocalPopover").close();
		},

		// Busca se o usuário logado é efetivo ou contratado, e preencher automaticamente os campos
		buscarEfetivo: function() {
			var oModelView = this.getView().getModel("oView1");
			var oModel = this.getOwnerComponent().getModel();

			var sURL = "/BuscaContratadoSet";
			sap.ui.core.BusyIndicator.show();
			oModel.read(sURL, {
				success: function(oData) {
					sap.ui.core.BusyIndicator.hide();
					if (oData.results[0].NomeFornecedor == "") {
						oModelView.setProperty("/efetivoValue", "Próprio");
						oModelView.setProperty("/empresaValue", "ArcelorMittal");
					} else {
						oModelView.setProperty("/efetivoValue", "Contratado");
						oModelView.setProperty("/empresaValue", oData.results[0].NomeFornecedor);

					}
				},

				error: function(error) {
					sap.ui.core.BusyIndicator.hide();
				}
			});
		},

		// Função para gerar id's aleatórios para manipular as linhas das tabelas no Fiori
		getRandomArbitrary: function(min, max) {
			return Math.floor(Math.random() * (max - min) + min);
		},

		// Seção: Inserir Dados Tabela da 1
		_openDialogInserAreaData: function() {
			var oModelView = this.getView().getModel("oView1");
			oModelView.setProperty("/unidadeValueTitle", "");
			oModelView.setProperty("/areaValue", "");
			oModelView.setProperty("/localInstValue", "");
			oModelView.setProperty("/dtLocalValue", "");
			oModelView.setProperty("/atividadeValue", "");
			oModelView.setProperty("/tpAtividadeValue", "");
			if (!this.dialogInserAreaData) {
				this.dialogInserAreaData = sap.ui.xmlfragment(this.getView().getId(), "com.arcelormittal.ipar.view.fragments.insertAreaData", this);
				this.getView().addDependent(this.dialogInserAreaData);
			}
			return this.dialogInserAreaData;
		},

		// Seção: Inserir Dados Da Tabela 2
		_openDialogInserDadosRiscOcupacionais: function() {

			if (!this.dialogInserRiscOcupacionais) {
				this.dialogInserRiscOcupacionais = sap.ui.xmlfragment(this.getView().getId(),
					"com.arcelormittal.ipar.view.fragments.inserirDadosRiscosOcupacionais", this);
				this.getView().addDependent(this.dialogInserRiscOcupacionais);
			}
			return this.dialogInserRiscOcupacionais;
		},

		_openDialogRevalidacaoAtiv: function() {

			if (!this.dialogRevalidacaoAtiv) {
				this.dialogRevalidacaoAtiv = sap.ui.xmlfragment(this.getView().getId(),
					"com.arcelormittal.ipar.view.fragments.revalidacaoDaAtividade", this);
				this.getView().addDependent(this.dialogRevalidacaoAtiv);
			}
			return this.dialogRevalidacaoAtiv;

		},
		_openDialogEditarDadosDaArea: function() {

			if (!this.dialogEditarDadosDaArea) {
				this.dialogEditarDadosDaArea = sap.ui.xmlfragment(this.getView().getId(),
					"com.arcelormittal.ipar.view.fragments.editarDadosDaArea", this);
				this.getView().addDependent(this.dialogEditarDadosDaArea);
			}

			var oTable = this.getView().byId("dadosDosRiscosOcupacionaisTable");
			var oModelView = this.getView().getModel("oView1");
			var selectedItems = oTable.getSelectedItems()[0].getBindingContext("oView1").sPath;
			var oTableData = oModelView.getProperty(selectedItems);

			oModelView.setProperty("/tipoPerigoValue", oTableData.TIPO_PERIGO_KEY);
			oModelView.setProperty("/perigoValue", oTableData.PERIGO_KEY);
			oModelView.setProperty("/riscoValue", oTableData.RISCO_KEY);
			oModelView.setProperty("/descriRiscValue", oTableData.DESC_RISCO_KEY);
			oModelView.setProperty("/fonteCircValue", oTableData.FONT_CIRC_KEY);
			oModelView.setProperty("/descriFonteValue", oTableData.DES_FONT_CIRC_KEY);
			oModelView.setProperty("/descriDanoPotencialValue", oTableData.DAN_POTENC_KEY);
			oModelView.setProperty("/cargExpostosValue", oTableData.CARGOS_EXPOSTOS_KEY);
			oModelView.setProperty("/gravidadeValue", oTableData.GRAVIDADE + " de " + oTableData.DESC_DANO);
			oModelView.setProperty("/numPessoasEnvValue", oTableData.NUM_PESS_ENV_KEY);
			oModelView.setProperty("/tempDuracaoValue", oTableData.TEMP_DURA_ATIV_KEY);
			oModelView.setProperty("/freqRealizaValue", oTableData.FREQ_REAL_ATIV_KEY);
			oModelView.setProperty("/probabilidadeValue", oTableData.probabil);
			oModelView.setProperty("/riscoPotencValue", oTableData.riscPotencial);
			oModelView.setProperty("/riscoRealValue", oTableData.RISCO_REAL);

			var dadosCargArea = oModelView.getProperty("/itemCargArea");
			var dadosCargAreaFilter = dadosCargArea.filter(val => oTableData.CARG_EXPOSTOS.includes(val.SOBID))
			var dadosCargAreaFilter2 = dadosCargArea.filter(val => !oTableData.CARG_EXPOSTOS.includes(val.SOBID))
			oModelView.setProperty("/itemEditCargArea", dadosCargAreaFilter2);
			oModelView.setProperty("/itemEditClassRisc", dadosCargAreaFilter);

			var probabilidadeCount;
			probabilidadeCount = Number(oTableData.FREQ_REAL_ATIV_KEY) * Number(oTableData.TEMP_DURA_ATIV_KEY) * Number(oTableData.NUM_PESS_ENV_KEY)
			var gravidade = Number(oTableData.DAN_POTENC_KEY)

			var tableRiscoPotencial = oModelView.getProperty("/tabelaMatrizCalc");
			var probabilidade = tableRiscoPotencial.filter(val => val.RESULTANTE == probabilidadeCount);

			if (probabilidade.length != 0) {
				this.getView().byId("editProbabilidadeSelect").setValue(probabilidade[0].PROBABILIDADE);

				var gravidadeResultante = gravidade * probabilidadeCount;
				var resultante = gravidadeResultante;
				var probabilidadeTeste = probabilidade[0].PROBABILIDADE;

				var linhaIndex = tableRiscoPotencial.findIndex(value => value.PROBABILIDADE == probabilidadeTeste && value.VALGRAVIDADE1 ==
					resultante ||
					value.VALGRAVIDADE2 == resultante || value.VALGRAVIDADE3 == resultante || value.VALGRAVIDADE4 == resultante || value.VALGRAVIDADE5 ==
					resultante ||
					value.VALGRAVIDADE6 == resultante || value.VALGRAVIDADE7 == resultante ||
					value.VALGRAVIDADE8 == resultante);
				var linhaSelecionada = tableRiscoPotencial.find(value => value.RESULTANTE == tableRiscoPotencial[linhaIndex].RESULTANTE);
				var anteriorArray = [];
				var anterior;

				for (var i = 0; i < tableRiscoPotencial.length; i++) {
					linhaIndex = linhaIndex - 1;
					anterior = tableRiscoPotencial[linhaIndex];
					if (anterior != undefined) {
						if (anterior.Probabilidade != linhaSelecionada.Probabilidade) {
							anteriorArray.push(tableRiscoPotencial.find(arrayValue => arrayValue.Probabilidade == anterior.Probabilidade && arrayValue.Resultante ==
								anterior.Resultante))
						}
					}

				};
				anteriorArray.sort((a, b) => a.Resultante - b.Resultante)
				var ultimaLinhaAnterior = []
				var findLastIndex = (array, searchKey, searchValue) => {
					var index = array.slice().reverse().find(x => x[searchKey] === searchValue);
					var count = array.length - 1
					var finalIndex = index >= 0 ? count - index : index;
					return finalIndex;
				}

				for (var k = 0; k < anteriorArray.length; k++) {
					switch (anteriorArray[k].Probabilidade) {
						case "Pouquíssimo provável":
							ultimaLinhaAnterior.push(findLastIndex(anteriorArray, "Probabilidade", "Pouquíssimo provável"))
							break;
						case "Pouco provável":
							ultimaLinhaAnterior.push(findLastIndex(anteriorArray, "Probabilidade", "Pouco provável"))
							break;
						case "Provável":
							ultimaLinhaAnterior.push(findLastIndex(anteriorArray, "Probabilidade", "Provável"))
							break;
						case "Bem provável":
							ultimaLinhaAnterior.push(findLastIndex(anteriorArray, "Probabilidade", "Bem provável"))
							break;
						case "Muito provável":
							ultimaLinhaAnterior.push(findLastIndex(anteriorArray, "Probabilidade", "Muito provável"))
							break;
					}

				}

				var linhaSelecionadaArray = [linhaSelecionada]
				var newUltimaLinhaAnterior = [...new Set(ultimaLinhaAnterior)]
				var ultimaLinhaAnteriorMap = ultimaLinhaAnterior.map(val => val.PROBABILIDADE)
				var tableRiscoPotencialFilter = tableRiscoPotencial.filter(val => !ultimaLinhaAnteriorMap.includes(val.PROBABILIDADE))
				var linhaSelecionadaMap = linhaSelecionadaArray.map(val => val.PROBABILIDADE)
				var tableRiscoPotencialFilter2 = tableRiscoPotencialFilter.filter(val => !linhaSelecionadaMap.includes(val.PROBABILIDADE))
				var dadosFilterArray = []
				for (var j = 0; j < tableRiscoPotencialFilter2.length; j++) {
					if (!dadosFilterArray.includes(tableRiscoPotencialFilter2[j].PROBABILIDADE)) {
						dadosFilterArray.push(tableRiscoPotencialFilter2[j].PROBABILIDADE)
					}
				}
				var dadosFilterArray2 = []
				for (var l = 0; l < dadosFilterArray.length; l++) {
					dadosFilterArray2.push(tableRiscoPotencialFilter2.find(val => val.PROBABILIDADE == dadosFilterArray[l]))
				}

				var pouquissimoProvavel = []
				var poucoProvavel = []
				var provavel = []
				var bemProvavel = []
				var muitoProvavel = []

				var dadosTabelaMatrizFilterArray = []
				dadosTabelaMatrizFilterArray.push(dadosFilterArray2)
				dadosTabelaMatrizFilterArray.push(newUltimaLinhaAnterior)
				dadosTabelaMatrizFilterArray.push(linhaSelecionada)

				for (var m = 0; m < dadosTabelaMatrizFilterArray.length; m++) {
					for (var teste in dadosTabelaMatrizFilterArray[m]) {
						if (dadosTabelaMatrizFilterArray[m][teste].PROBABILIDADE != undefined) {
							switch (dadosTabelaMatrizFilterArray[m][teste].PROBABILIDADE) {
								case "Pouquíssimo provável":
									pouquissimoProvavel.push(dadosTabelaMatrizFilterArray[m][teste]);
									break;
								case "Pouco provável":
									poucoProvavel.push(dadosTabelaMatrizFilterArray[m][teste]);
									break;
								case "Provável":
									provavel.push(dadosTabelaMatrizFilterArray[m][teste]);
									break;
								case "Bem provável":
									bemProvavel.push(dadosTabelaMatrizFilterArray[m][teste]);
									break;
								case "Muito provável":
									muitoProvavel.push(dadosTabelaMatrizFilterArray[m][teste]);
									break;

							}
						} else {
							if (dadosTabelaMatrizFilterArray[m].PROBABILIDADE == dadosTabelaMatrizFilterArray[m][teste]) {
								switch (dadosTabelaMatrizFilterArray[m].PROBABILIDADE) {
									case "Pouquíssimo provável":
										pouquissimoProvavel.push(dadosTabelaMatrizFilterArray[m]);
										break;
									case "Pouco provável":
										poucoProvavel.push(dadosTabelaMatrizFilterArray[m]);
										break;
									case "Provável":
										provavel.push(dadosTabelaMatrizFilterArray[m]);
										break;
									case "Bem provável":
										bemProvavel.push(dadosTabelaMatrizFilterArray[m]);
										break;
									case "Muito provável":
										muitoProvavel.push(dadosTabelaMatrizFilterArray[m]);
										break;

								}
							}
						}
					}
				}

				var probabilidadesMatriz = [{
					"Resultante": pouquissimoProvavel[0].RESULTANTE,
					"Probabilidade": "Pouquíssimo provável",
					"ValCelula1": pouquissimoProvavel[0].VALGRAVIDADE1,
					"CorCelula1": pouquissimoProvavel[0].CORGRAVIDADE1,
					"ValCelula2": pouquissimoProvavel[0].VALGRAVIDADE2,
					"CorCelula2": pouquissimoProvavel[0].CORGRAVIDADE2,
					"ValCelula3": pouquissimoProvavel[0].VALGRAVIDADE3,
					"CorCelula3": pouquissimoProvavel[0].CORGRAVIDADE3,
					"ValCelula4": pouquissimoProvavel[0].VALGRAVIDADE4,
					"CorCelula4": pouquissimoProvavel[0].CORGRAVIDADE4,
					"ValCelula5": pouquissimoProvavel[0].VALGRAVIDADE5,
					"CorCelula5": pouquissimoProvavel[0].CORGRAVIDADE5,
					"ValCelula6": pouquissimoProvavel[0].VALGRAVIDADE6,
					"CorCelula6": pouquissimoProvavel[0].CORGRAVIDADE6,
					"ValCelula7": pouquissimoProvavel[0].VALGRAVIDADE7,
					"CorCelula7": pouquissimoProvavel[0].CORGRAVIDADE7,
					"ValCelula8": pouquissimoProvavel[0].VALGRAVIDADE8,
					"CorCelula8": pouquissimoProvavel[0].CORGRAVIDADE8
				}, {
					"Resultante": poucoProvavel[0].RESULTANTE,
					"Probabilidade": "Pouco provável",
					"ValCelula1": poucoProvavel[0].VALGRAVIDADE1,
					"CorCelula1": poucoProvavel[0].CORGRAVIDADE1,
					"ValCelula2": poucoProvavel[0].VALGRAVIDADE2,
					"CorCelula2": poucoProvavel[0].CORGRAVIDADE2,
					"ValCelula3": poucoProvavel[0].VALGRAVIDADE3,
					"CorCelula3": poucoProvavel[0].CORGRAVIDADE3,
					"ValCelula4": poucoProvavel[0].VALGRAVIDADE4,
					"CorCelula4": poucoProvavel[0].CORGRAVIDADE4,
					"ValCelula5": poucoProvavel[0].VALGRAVIDADE5,
					"CorCelula5": poucoProvavel[0].CORGRAVIDADE5,
					"ValCelula6": poucoProvavel[0].VALGRAVIDADE6,
					"CorCelula6": poucoProvavel[0].CORGRAVIDADE6,
					"ValCelula7": poucoProvavel[0].VALGRAVIDADE7,
					"CorCelula7": poucoProvavel[0].CORGRAVIDADE7,
					"ValCelula8": poucoProvavel[0].VALGRAVIDADE8,
					"CorCelula8": poucoProvavel[0].CORGRAVIDADE8
				}, {
					"Resultante": provavel[0].RESULTANTE,
					"Probabilidade": "Provável",
					"ValCelula1": provavel[0].VALGRAVIDADE1,
					"CorCelula1": provavel[0].CORGRAVIDADE1,
					"ValCelula2": provavel[0].VALGRAVIDADE2,
					"CorCelula2": provavel[0].CORGRAVIDADE2,
					"ValCelula3": provavel[0].VALGRAVIDADE3,
					"CorCelula3": provavel[0].CORGRAVIDADE3,
					"ValCelula4": provavel[0].VALGRAVIDADE4,
					"CorCelula4": provavel[0].CORGRAVIDADE4,
					"ValCelula5": provavel[0].VALGRAVIDADE5,
					"CorCelula5": provavel[0].CORGRAVIDADE5,
					"ValCelula6": provavel[0].VALGRAVIDADE6,
					"CorCelula6": provavel[0].CORGRAVIDADE6,
					"ValCelula7": provavel[0].VALGRAVIDADE7,
					"CorCelula7": provavel[0].CORGRAVIDADE7,
					"ValCelula8": provavel[0].VALGRAVIDADE8,
					"CorCelula8": provavel[0].CORGRAVIDADE8
				}, {
					"Resultante": bemProvavel[0].RESULTANTE,
					"Probabilidade": "Bem provável",
					"ValCelula1": bemProvavel[0].VALGRAVIDADE1,
					"CorCelula1": bemProvavel[0].CORGRAVIDADE1,
					"ValCelula2": bemProvavel[0].VALGRAVIDADE2,
					"CorCelula2": bemProvavel[0].CORGRAVIDADE2,
					"ValCelula3": bemProvavel[0].VALGRAVIDADE3,
					"CorCelula3": bemProvavel[0].CORGRAVIDADE3,
					"ValCelula4": bemProvavel[0].VALGRAVIDADE4,
					"CorCelula4": bemProvavel[0].CORGRAVIDADE4,
					"ValCelula5": bemProvavel[0].VALGRAVIDADE5,
					"CorCelula5": bemProvavel[0].CORGRAVIDADE5,
					"ValCelula6": bemProvavel[0].VALGRAVIDADE6,
					"CorCelula6": bemProvavel[0].CORGRAVIDADE6,
					"ValCelula7": bemProvavel[0].VALGRAVIDADE7,
					"CorCelula7": bemProvavel[0].CORGRAVIDADE7,
					"ValCelula8": bemProvavel[0].VALGRAVIDADE8,
					"CorCelula8": bemProvavel[0].CORGRAVIDADE8
				}, {
					"Resultante": muitoProvavel[0].RESULTANTE,
					"Probabilidade": "Muito provável",
					"ValCelula1": muitoProvavel[0].VALGRAVIDADE1,
					"CorCelula1": muitoProvavel[0].CORGRAVIDADE1,
					"ValCelula2": muitoProvavel[0].VALGRAVIDADE2,
					"CorCelula2": muitoProvavel[0].CORGRAVIDADE2,
					"ValCelula3": muitoProvavel[0].VALGRAVIDADE3,
					"CorCelula3": muitoProvavel[0].CORGRAVIDADE3,
					"ValCelula4": muitoProvavel[0].VALGRAVIDADE4,
					"CorCelula4": muitoProvavel[0].CORGRAVIDADE4,
					"ValCelula5": muitoProvavel[0].VALGRAVIDADE5,
					"CorCelula5": muitoProvavel[0].CORGRAVIDADE5,
					"ValCelula6": muitoProvavel[0].VALGRAVIDADE6,
					"CorCelula6": muitoProvavel[0].CORGRAVIDADE6,
					"ValCelula7": muitoProvavel[0].VALGRAVIDADE7,
					"CorCelula7": muitoProvavel[0].CORGRAVIDADE7,
					"ValCelula8": muitoProvavel[0].VALGRAVIDADE8,
					"CorCelula8": muitoProvavel[0].CORGRAVIDADE8
				}]

				oModelView.setProperty("/tabelaRiscoPotencialEditvalue", probabilidadesMatriz);

				setTimeout(() => {
					var index = 0
					var count = 0
					var corCelula = "CorCelula"
					var estruturaNome = this.byId("tabelaGravidadeEdit").mAggregations.items[0].mAggregations.cells[0].oParent.sId
					var complementoNome = "_cell"
					var celulaId = "#" + estruturaNome + complementoNome
					var cellCount = 0
					var countIndex = 0
					do {
						count = count + 1
						corCelula = corCelula + count
						celulaId = celulaId + count

						switch (probabilidadesMatriz[countIndex].Probabilidade) {
							case "Pouquíssimo provável":
								if (probabilidadesMatriz[countIndex][corCelula] == "green") {
									document.querySelector(celulaId).style.backgroundColor = "#51b551"
								}
								if (probabilidadesMatriz[countIndex][corCelula] == "lightgreen") {
									document.querySelector(celulaId).style.backgroundColor = "#90ee9082"

								}
								if (probabilidadesMatriz[countIndex][corCelula] == "yellow") {
									document.querySelector(celulaId).style.backgroundColor = "#ffbc006b"

								}
								if (probabilidadesMatriz[countIndex][corCelula] == "red") {
									document.querySelector(celulaId).style.backgroundColor = "#ff6e296e"

								}
								if (probabilidadesMatriz[countIndex][corCelula] == "orange") {
									document.querySelector(celulaId).style.backgroundColor = "#e77e12"

								}
								if (linhaSelecionada.PROBABILIDADE == probabilidadesMatriz[countIndex].Probabilidade) {
									if (document.querySelector(celulaId).innerText == gravidadeResultante) {
										document.querySelector(celulaId).style.border = "1px solid blue"
									}

								}
								break;
							case "Pouco provável":
								if (probabilidadesMatriz[countIndex][corCelula] == "green") {
									document.querySelector(celulaId).style.backgroundColor = "#51b551"

								}
								if (probabilidadesMatriz[countIndex][corCelula] == "lightgreen") {
									document.querySelector(celulaId).style.backgroundColor = "#90ee9082"

								}
								if (probabilidadesMatriz[countIndex][corCelula] == "yellow") {
									document.querySelector(celulaId).style.backgroundColor = "#ffbc006b"

								}
								if (probabilidadesMatriz[countIndex][corCelula] == "red") {
									document.querySelector(celulaId).style.backgroundColor = "#ff6e296e"

								}
								if (probabilidadesMatriz[countIndex][corCelula] == "orange") {
									document.querySelector(celulaId).style.backgroundColor = "#e77e12"

								}
								if (linhaSelecionada.PROBABILIDADE == probabilidadesMatriz[countIndex].Probabilidade) {
									if (document.querySelector(celulaId).innerText == gravidadeResultante) {
										document.querySelector(celulaId).style.border = "1px solid blue"
									}

								}
								break;
							case "Provável":
								if (probabilidadesMatriz[countIndex][corCelula] == "green") {
									document.querySelector(celulaId).style.backgroundColor = "#51b551"

								}
								if (probabilidadesMatriz[countIndex][corCelula] == "lightgreen") {
									document.querySelector(celulaId).style.backgroundColor = "#90ee9082"

								}
								if (probabilidadesMatriz[countIndex][corCelula] == "yellow") {
									document.querySelector(celulaId).style.backgroundColor = "#ffbc006b"

								}
								if (probabilidadesMatriz[countIndex][corCelula] == "red") {
									document.querySelector(celulaId).style.backgroundColor = "#ff6e296e"

								}
								if (probabilidadesMatriz[countIndex][corCelula] == "orange") {
									document.querySelector(celulaId).style.backgroundColor = "#e77e12"

								}
								if (linhaSelecionada.PROBABILIDADE == probabilidadesMatriz[countIndex].Probabilidade) {
									if (document.querySelector(celulaId).innerText == gravidadeResultante) {
										document.querySelector(celulaId).style.border = "1px solid blue"
									}

								}
								break;
							case "Bem provável":
								if (probabilidadesMatriz[countIndex][corCelula] == "green") {
									document.querySelector(celulaId).style.backgroundColor = "#51b551"

								}
								if (probabilidadesMatriz[countIndex][corCelula] == "lightgreen") {
									document.querySelector(celulaId).style.backgroundColor = "#90ee9082"

								}
								if (probabilidadesMatriz[countIndex][corCelula] == "yellow") {
									document.querySelector(celulaId).style.backgroundColor = "#ffbc006b"

								}
								if (probabilidadesMatriz[countIndex][corCelula] == "red") {
									document.querySelector(celulaId).style.backgroundColor = "#ff6e296e"

								}
								if (probabilidadesMatriz[countIndex][corCelula] == "orange") {
									document.querySelector(celulaId).style.backgroundColor = "#e77e12"

								}
								if (linhaSelecionada.PROBABILIDADE == probabilidadesMatriz[countIndex].Probabilidade) {
									if (document.querySelector(celulaId).innerText == gravidadeResultante) {
										document.querySelector(celulaId).style.border = "1px solid blue"
									}

								}
								break;
							case "Muito provável":
								if (probabilidadesMatriz[countIndex][corCelula] == "green") {
									document.querySelector(celulaId).style.backgroundColor = "#51b551"

								}
								if (probabilidadesMatriz[countIndex][corCelula] == "lightgreen") {
									document.querySelector(celulaId).style.backgroundColor = "#90ee9082"

								}
								if (probabilidadesMatriz[countIndex][corCelula] == "yellow") {
									document.querySelector(celulaId).style.backgroundColor = "#ffbc006b"

								}
								if (probabilidadesMatriz[countIndex][corCelula] == "red") {
									document.querySelector(celulaId).style.backgroundColor = "#ff6e296e"

								}
								if (probabilidadesMatriz[countIndex][corCelula] == "orange") {
									document.querySelector(celulaId).style.backgroundColor = "#e77e12"

								}
								if (linhaSelecionada.PROBABILIDADE == probabilidadesMatriz[countIndex].Probabilidade) {
									if (document.querySelector(celulaId).innerText == gravidadeResultante) {
										document.querySelector(celulaId).style.border = "1px solid blue"
									}

								}
								break;

						}

						this.getView().byId("riscPotencial").setValue(probabilidade[0].PROBABILIDADE);

						corCelula = corCelula.slice(0, -1)
						celulaId = celulaId.slice(0, -1)
						index = index + 1
						if (count >= 8) {
							var valor = "$1"
							countIndex = countIndex + 1
							count = count = 0
							cellCount = cellCount + 1
							valor = valor + cellCount
							celulaId = celulaId.replace(/(.{75}).{1}/, `${valor}`)
						}

					} while (index < 40)
				}, 20)
				this.getView().byId("riscPotencial").setValue(probabilidade[0].PROBABILIDADE);

				return this.dialogEditarDadosDaArea;
			}
		},

		// Abre popoup para inserir dados na tabela
		onInserAreaData: function(oEvent) {
			if (oEvent === "dadosAtividades") {
				this._openDialogInserAreaData().open();
			}
			if (oEvent === "inserirDadosRiscosOcupacionais") {
				this._openDialogInserDadosRiscOcupacionais().open();
			}
		},

		dialogInserAreaDataClose: function() {
			var oModelView = this.getView().getModel("oView1");
			oModelView.setProperty("/unidadeValueTitle", "");
			oModelView.setProperty("/areaValue", "");
			oModelView.setProperty("/localInstValue", "");
			oModelView.setProperty("/dtLocalValue", "");
			oModelView.setProperty("/atividadeValue", "");
			oModelView.setProperty("/tpAtividadeValue", "");
			// oModelView.setProperty("/efetivoValue", "");
			// oModelView.setProperty("/empresaValue", "");
			this._openDialogInserAreaData().close();
		},

		// Confirmação da inserção de dados na tabela
		dialogInserAreaDataConfirm: function() {
			var oModelView = this.getView().getModel("oView1");
			var oModel = this.getOwnerComponent().getModel();
			var dadosDasAtividades = oModelView.getProperty("/tableDadosDasAtividades");
			// Get input values
			var unidadeValueText = oModelView.getProperty("/unidadeValueTitle");
			var unidadeValue = oModelView.getProperty("/unidadeValue");
			var areaValue = oModelView.getProperty("/areaValue");
			var areaValueId = oModelView.getProperty("/areaValueInput");
			var localInstValue = oModelView.getProperty("/localInstValue2");
			var dtLocalValue = oModelView.getProperty("/dtLocalValue");
			var atividadeValue = oModelView.getProperty("/atividadeValue");
			var tpAtividadeValue = oModelView.getProperty("/tpAtividadeValue");
			var efetivoValue = oModelView.getProperty("/efetivoValue");
			var empresaValue = oModelView.getProperty("/empresaValue");

			var tempRandomId = this.getRandomArbitrary(1, 10000000000000000);
			var idLink = this.getRandomArbitrary(1, 10000000000000000);

			if (!unidadeValue || !areaValue || !areaValueId || !localInstValue || !dtLocalValue || !atividadeValue || !tpAtividadeValue || !
				efetivoValue || !empresaValue) {
				return MessageToast.show("Preencha todos os campos.")
			}

			var that = this;

			// Adicionar as linhas preenchidas na tabela sem precisar fazer uma pesquisa no banco de dados
			dadosDasAtividades.push({
				unidadetitle: unidadeValueText,
				area: areaValue,
				localInst: localInstValue,
				dtLocal: dtLocalValue,
				atividade: atividadeValue,
				tpAtividade: tpAtividadeValue,
				efetivo: efetivoValue,
				empresa: empresaValue,
				tempid: tempRandomId,
				areaid: areaValueId,
				link_id: idLink
			})

			oModelView.setProperty("/tableDadosDasAtividades", dadosDasAtividades);

			var newData = {
				unidade: unidadeValue,
				area: areaValue,
				localInst: localInstValue,
				dtLocal: dtLocalValue,
				atividade: atividadeValue,
				tpAtividade: tpAtividadeValue,
				efetivo: efetivoValue,
				empresa: empresaValue,
				codigoRegistro: "",
				dtRegistro: "",
				dtVencimento: "",
				opcao: "C",
				areaid: areaValueId,
				usr_modifi: "",
				dtmodifi: "",
				del: "",
				tempid: tempRandomId,
				unidadetitle: unidadeValueText,
				link_id: idLink
			}

			var newDataString = JSON.stringify(newData)

			var oEntry = {
				deleteTableRow: "",
				tableData: newDataString,
				opcao: "C",
				revalidar: ""
			}

			sap.ui.core.BusyIndicator.show();
			var sURL = "/CamposDaAreaSet";
			oModel.create(sURL, oEntry, {
				success: function(oData) {
					sap.ui.core.BusyIndicator.hide();
					that._openDialogInserAreaData().close();
					oModelView.setProperty("/unidadeValueTitle", "");
					oModelView.setProperty("/areaValue", "");
					oModelView.setProperty("/localInstValue", "");
					oModelView.setProperty("/dtLocalValue", "");
					oModelView.setProperty("/atividadeValue", "");
					oModelView.setProperty("/tpAtividadeValue", "");
					oModelView.setProperty("/localInstValue2", "");
					//	that.onFilter();
				},

				error: function(error) {
					sap.ui.core.BusyIndicator.hide();
					that._openDialogInserAreaData().close();
					var erro = JSON.parse(error.responseText)
					MessageBox.error(erro.error.message.value)
				}
			});
		},

		// Pega o valor da unidade inserido pelo usuário e faz a busca no banco de dados para trazer a área e o local de instalação referetes.
		itemSelectedAreaChange: function(oEvent) {
			var oModelView = this.getView().getModel("oView1");
			var oSelectedItem = oEvent.getParameter("selectedItem");
			var sDescription = oSelectedItem.getProperty("text");

			if (!oSelectedItem) {
				return;
			}

			oModelView.setProperty("/unidadeValue", sDescription);
			this.filtroArea();
			this.filtroLocalInstal();
		},

		onSubmitAreaChange: function(oEvent) {
			var oModelView = this.getView().getModel("oView1");
			var sDescription = oEvent.getParameter("value");

			if (!sDescription == "") {
				return;
			}
			oModelView.setProperty("/unidadeValue", sDescription);
			this.filtroArea();
			this.filtroLocalInstal();
		},

		// Seção: Revalidar
		_openDialogRevalidar: function() {
			if (!this.dialogRevalidar) {
				this.dialogRevalidar = sap.ui.xmlfragment("com.arcelormittal.ipar.view.fragments.revalidar", this);
				this.getView().addDependent(this.dialogRevalidar);
			}
			return this.dialogRevalidar;
		},

		onRevalidar: function(oEvent) {
			// Valida se há algum registro selecionado na tabela
			var oTableDadosDasAtividades = this.getView().byId("dadosDasAtividadesTable");
			var oTableDadosDosExecutantes = this.getView().byId("dadosDosExecutantesTable");
			var selectedRowDadosDasAtividades = oTableDadosDasAtividades.getSelectedItems();

			var oTableDadosRiscosOperacionais = this.getView().byId("dadosDosRiscosOcupacionaisTable");
			var oTableDadosClassificacaoRiscosOcupacionais = this.getView().byId("dadosDosRiscosOcupacionaisTable");
			var selectedRowDadosRiscosOperacionais = oTableDadosRiscosOperacionais.getSelectedItems();
			var selectedRowClassificacaoRiscosOcupacionais = oTableDadosClassificacaoRiscosOcupacionais.getSelectedItems();

			var oTableDadosControlesOperacionais = this.getView().byId("controlesOperacionaisTable");
			var selectedRowControlesOperacionais = oTableDadosControlesOperacionais.getSelectedItems();

			var oTableDadosPlanoDeAcao = this.getView().byId("planoDeAcaoTable");
			var selectedRowPlanoDeAcao = oTableDadosPlanoDeAcao.getSelectedItems();

			if (oEvent === "dadosAtividades") {
				if (selectedRowDadosDasAtividades.length === 0) {
					return MessageToast.show("É necessário selecionar um registro da tabela.");
				} else {
					return this._openDialogRevalidar().open();
				}
			}

			if (oEvent === "riscosOcupacionais") {
				if (selectedRowDadosRiscosOperacionais.length === 0 && selectedRowClassificacaoRiscosOcupacionais.length === 0) {
					return MessageToast.show("É necessário selecionar um registro da tabela.");
				} else {
					return this._openDialogRevalidacaoAtiv().open();
				}

			}

			// if (oEvent === "controlesOperacionais") {
			// 	if (selectedRowControlesOperacionais.length === 0) {
			// 		return MessageToast.show("É necessário selecionar um registro da tabela.");
			// 	} else {
			// 		return this._openDialogRevalidar().open();
			// 	}
			// }

			// if (oEvent === "planoDeAcao") {
			// 	if (selectedRowPlanoDeAcao.length === 0) {
			// 		return MessageToast.show("É necessário selecionar um registro da tabela.");
			// 	} else {
			// 		return this._openDialogRevalidar().open();
			// 	}
			// }
		},

		onRevalidarAtividade: function(oEvent) {
			var oModelView = this.getView().getModel("oView1");
			var oModel = this.getOwnerComponent().getModel();
			var oTable = this.getView().byId("dadosDasAtividadesTable");
			var tableIndex = oTable._aSelectedPaths[0].replace("/tableDadosDasAtividades/", "");
			var oTable = this.getView().byId("dadosDasAtividadesTable");
			var oModelView = this.getView().getModel("oView1");
			var selectedItems = oTable.getSelectedItems()[0].getBindingContext("oView1").sPath;
			var oTableData = oModelView.getProperty(selectedItems);

			// Get input values
			var unidadeValue = oModelView.getProperty("/unidadeValueTitle");
			var areaValue = oModelView.getProperty("/areaValue");
			var localInstValue = oModelView.getProperty("/localInstValue");
			var dtLocalValue = oModelView.getProperty("/dtLocalValue");
			var atividadeValue = oModelView.getProperty("/atividadeValue");
			var tpAtividadeValue = oModelView.getProperty("/tpAtividadeValue");
			var efetivoValue = oModelView.getProperty("/efetivoValue");
			var empresaValue = oModelView.getProperty("/empresaValue");

			var tableDadosDasAtividades = oModelView.getProperty("/tableDadosDasAtividades");
			var that = this;

			// Adiciona um ano a mais na data de vencimento
			var newDate = new Date();
			var getYear = newDate.getUTCFullYear() + 1;
			var getMonth = newDate.getUTCMonth() + 1;
			var getDay = newDate.getUTCDate();
			var month = "";
			var day = "";

			if (getMonth <= 9) {
				month = "" + 0 + getMonth + "";
			} else {
				month = getMonth;
			}

			if (getDay <= 9) {
				day = "" + 0 + getDay + "";
			} else {
				day = getDay;
			}

			var dateConc = "" + getYear + month + day + "";

			var editedData = {
				unidade: oTableData.unidade,
				area: oTableData.area,
				localInst: oTableData.localInst,
				dtLocal: oTableData.dtLocal,
				atividade: oTableData.atividade,
				tpAtividade: oTableData.tpAtividade,
				efetivo: oTableData.efetivo,
				empresa: oTableData.empresa,
				codigoRegistro: oTableData.codigoRegistro,
				dtRegistro: oTableData.dtRegistro,
				dtVencimento: dateConc,
				opcao: "E",
				areaid: oTableData.areaid,
				tempid: oTableData.tempid,
				unidadetitle: oTableData.unidadeValueText
			}

			var editedDataString = JSON.stringify(editedData)

			var oEntry = {
				deleteTableRow: "",
				tableData: editedDataString,
				opcao: "E",
				revalidar: "X"
			}
			sap.ui.core.BusyIndicator.show();
			var sURL = "/CamposDaAreaSet";
			oModel.create(sURL, oEntry, {
				success: function(oData) {
					sap.ui.core.BusyIndicator.hide();
					MessageBox.information("A data de vencimento foi revalidada com sucesso.", {
						onClose: function(sAction) {
							if (sAction == "OK") {
								that._openDialogRevalidar().close();
							}
						}
					})
				},

				error: function(error) {
					sap.ui.core.BusyIndicator.hide();
					MessageBox.error("Ocorreu um erro ao revalidar a data, teste novamente em instantes.", {
						onClose: function(sAction) {
							if (sAction == "CLOSE") {
								that._openDialogRevalidar().close();
							}
						}
					})
				}
			});
		},

		dialogRevalidarSegTabClose: function() {

			var oModelView = this.getView().getModel("oView1");
			var oModel = this.getOwnerComponent().getModel();
			var oTable = this.getView().byId("dadosDosRiscosOcupacionaisTable");
			var tableIndex = oTable._aSelectedPaths[0].replace("/segundaTabelaAUX/", "");
			var oTable = this.getView().byId("dadosDosRiscosOcupacionaisTable");
			var oModelView = this.getView().getModel("oView1");
			var selectedItems = oTable.getSelectedItems()[0].getBindingContext("oView1").sPath;
			var oTableData = oModelView.getProperty(selectedItems);

			// Adiciona um ano a mais na data de vencimento
			var newDate = new Date();
			var getYear = newDate.getUTCFullYear() + 1;
			var getMonth = newDate.getUTCMonth() + 1;
			var getDay = newDate.getUTCDate();
			var month = "";
			var day = "";

			if (getMonth <= 9) {
				month = "" + 0 + getMonth + "";
			} else {
				month = getMonth;
			}

			if (getDay <= 9) {
				day = "" + 0 + getDay + "";
			} else {
				day = getDay;
			}

			var dateConc = "" + getYear + month + day + "";

			// Data Atual

			var diaAtual = newDate.getUTCDate();
			var mesAtual = newDate.getUTCMonth() + 1;
			var anoAtual = newDate.getUTCFullYear();
			var dia = "";
			var mes = "";

			if (diaAtual <= 9) {
				dia = "" + 0 + diaAtual + "";
			} else {
				dia = diaAtual;
			};

			if (mesAtual <= 9) {
				mes = "" + 0 + mesAtual + "";
			} else {
				mes = mesAtual
			}

			var dataModif = "" + anoAtual + mes + dia + "";

			var editedData = {
				opcao: "E",
				CARGOS_EXPOSTOS_KEY: oTableData.CARGOS_EXPOSTOS_KEY,
				CARG_EXPOSTOS: oTableData.CARG_EXPOSTOS,
				DAN_POTENC_KEY: oTableData.DAN_POTENC_KEY,
				DEL: oTableData.DEL,
				DESC_DANO: oTableData.DESC_DANO,
				DESC_FONTE: oTableData.DESC_FONTE,
				DESC_RISCO: oTableData.DESC_RISCO,
				DESC_RISCO_KEY: oTableData.DESC_RISCO_KEY,
				DES_FONT_CIRC_KEY: oTableData.DES_FONT_CIRC_KEY,
				DTMODIFI: dataModif,
				DT_REGISTRO: oTableData.DT_REGISTRO,
				DT_VENCIMENTO: dateConc,
				DURAC_ATIVIDADE: oTableData.DURAC_ATIVIDADE,
				FONTE_CIRC: oTableData.FONTE_CIRC,
				FONT_CIRC_KEY: oTableData.FONT_CIRC_KEY,
				FREQ_REAL_ATIV: oTableData.FREQ_REAL_ATIV,
				FREQ_REAL_ATIV_KEY: oTableData.FREQ_REAL_ATIV_KEY,
				GRAVIDADE: oTableData.GRAVIDADE,
				LINK_ID: oTableData.LINK_ID,
				NUM_PESS_ENV: oTableData.NUM_PESS_ENV,
				NUM_PESS_ENV_KEY: oTableData.NUM_PESS_ENV_KEY,
				PERIGO: oTableData.PERIGO,
				PERIGO_KEY: oTableData.PERIGO_KEY,
				PROBABILIDADE: oTableData.PROBABILIDADE,
				RISCO: oTableData.RISCO,
				RISCO_KEY: oTableData.RISCO_KEY,
				RISCO_REAL: oTableData.RISCO_REAL,
				RISC_POTENCIAL: oTableData.RISC_POTENCIAL,
				TABLE_ID: oTableData.TABLE_ID,
				TEMP_DURA_ATIV_KEY: oTableData.TEMP_DURA_ATIV_KEY,
				TEMP_ID: oTableData.TEMP_ID,
				TIPO_PERIGO: oTableData.TIPO_PERIGO,
				TIPO_PERIGO_KEY: oTableData.TIPO_PERIGO_KEY,
				USR_CREATE: oTableData.USR_CREATE,
				USR_MODIFI: oTableData.USR_MODIFI
			}

			var editedDataString = JSON.stringify(editedData)

			var oEntry = {
				deleteTableRow: "",
				opcao: "E",
				revalidar: "",
				riscosOcupacionais: editedDataString,
			}
			sap.ui.core.BusyIndicator.show();
			oModel.create("/riscosOcupacionaisSet", oEntry, {
				success: function(oData) {
					sap.ui.core.BusyIndicator.hide();
					MessageToast.show(this.getOwnerComponent().getModel("i18n").getResourceBundle().getText("msgRevalidarSucess"))
				},

				error: function(error) {
					sap.ui.core.BusyIndicator.hide();
					MessageToast.show(this.getOwnerComponent().getModel("i18n").getResourceBundle().getText("msgErrorRevalidarSucess"))
				}
			});

			this._openDialogRevalidacaoAtiv().close();

		},

		dialogRevalidarClose: function() {
			this._openDialogRevalidar().close();
		},

		// Seção: Editar Dados Da Área
		_openDialogEditarDadosAtividade: function() {

			// Abre o popup de edição com os inputs já preenchidos com as informações da tabela, podendo o usuário editar quais ele quiser
			var oTable = this.getView().byId("dadosDasAtividadesTable");
			var oModelView = this.getView().getModel("oView1");
			var selectedItems = oTable.getSelectedItems()[0].getBindingContext("oView1").sPath;
			var oTableData = oModelView.getProperty(selectedItems);
			oModelView.setProperty("/unidadeValueTitle", oTableData.unidadetitle);
			oModelView.setProperty("/areaValue", oTableData.area);
			oModelView.setProperty("/localInstValue", oTableData.localInst);
			oModelView.setProperty("/dtLocalValue", oTableData.dtLocal);
			oModelView.setProperty("/atividadeValue", oTableData.atividade);
			oModelView.setProperty("/tpAtividadeValue", oTableData.tpAtividade);
			oModelView.setProperty("/efetivoValue", oTableData.efetivo);
			oModelView.setProperty("/empresaValue", oTableData.empresa);
			if (oTableData.efetivo == "Próprio") {
				oModelView.setProperty("/empresaInputEnabled", false);
			}
			return this.dialogEditarDadosAtividade;
		},

		_openDialogEditarDadosExecutante: function() {
			if (!this.dialogEditarDadosExecutante) {
				this.dialogEditarDadosExecutante = sap.ui.xmlfragment("com.arcelormittal.ipar.view.fragments.editarDadosExecutantes", this);
				this.getView().addDependent(this.dialogEditarDadosExecutante);
			}
			return this.dialogEditarDadosExecutante;
		},

		_openDialogEditarIdentificacaoRiscos: function() {
			if (!this.dialogEditarIdentificacaoRiscos) {
				this.dialogEditarIdentificacaoRiscos = sap.ui.xmlfragment("com.arcelormittal.ipar.view.fragments.editarIdentificacaoDoRisco", this);
				this.getView().addDependent(this.dialogEditarIdentificacaoRiscos);
			}
			return this.dialogEditarIdentificacaoRiscos;
		},

		_openDialogEditarClassificacaoRiscos: function() {
			if (!this.dialogEditarClassificacaoRiscos) {
				this.dialogEditarClassificacaoRiscos = sap.ui.xmlfragment("com.arcelormittal.ipar.view.fragments.editarClassificacaoRiscos", this);
				this.getView().addDependent(this.dialogEditarClassificacaoRiscos);
			}
			return this.dialogEditarClassificacaoRiscos;
		},

		_openDialogEditarControlesOperacionais: function() {
			if (!this.dialogEditarControlesOperacionais) {
				this.dialogEditarControlesOperacionais = sap.ui.xmlfragment("com.arcelormittal.ipar.view.fragments.editarControlesOperacionais",
					this);
				this.getView().addDependent(this.dialogEditarControlesOperacionais);
			}
			return this.dialogEditarControlesOperacionais;
		},

		_openDialogEditarPlanoDeAcao: function() {
			if (!this.dialogEditarPlanoDeAcao) {
				this.dialogEditarPlanoDeAcao = sap.ui.xmlfragment("com.arcelormittal.ipar.view.fragments.editarPlanoDeAcao", this);
				this.getView().addDependent(this.dialogEditarPlanoDeAcao);
			}
			return this.dialogEditarPlanoDeAcao;
		},

		dialogEditarAreaDataSegTabConfirm: function() {
			var oModelView = this.getView().getModel("oView1");
			var oTable = this.getView().byId("dadosDosRiscosOcupacionaisTable");
			var tableIndex = oTable._aSelectedPaths[0].replace("/segundaTabelaAUX/", "");
			var segundaTabela = oModelView.getProperty("/segundaTabelaAUX");
			var selectedItems = oTable.getSelectedItems()[0].getBindingContext("oView1").sPath;
			var oTableData = oModelView.getProperty(selectedItems);
			var tipoPerigo = this.getView().byId("editTipoPerigoSelect")._getSelectedItemText();
			var perigo = this.getView().byId("editPerigoSelect")._getSelectedItemText();
			var risco = this.getView().byId("editRiscoSelect")._getSelectedItemText();
			var descRisco = this.getView().byId("editDescriRiscSelect").getValue();
			var fontCirc = this.getView().byId("editFontCircSelect")._getSelectedItemText();
			var desFontCirc = this.getView().byId("editDescriFonteSelect").getValue();
			var danPotenc = this.getView().byId("danoPotencialChangeEdit").getSelectedItem().getProperty('additionalText');
			var cargosExpostos = "";
			var numPessoEnvol = this.getView().byId("editNumPessoasEnvSelect")._getSelectedItemText();
			var tempDuraAtiv = this.getView().byId("editTempDuracaoSelect")._getSelectedItemText();
			var freqRealAtiv = this.getView().byId("editFreqRealizaSelect")._getSelectedItemText();
			var gravidade = "";
			var probabil = "";
			var riscPotencial = this.getView().byId("editRiscoPotencSelect").getValue();
			var tipoPerigoKey = this.getView().byId("editTipoPerigoSelect").getSelectedKey();
			var perigoKey = this.getView().byId("editPerigoSelect").getSelectedKey();
			var riscoKey = this.getView().byId("editRiscoSelect").getSelectedKey();
			var descRiscoKey = this.getView().byId("editDescriRiscSelect").getValue();
			var fontCircKey = this.getView().byId("editFontCircSelect").getSelectedKey();
			var desFontCircKey = this.getView().byId("editDescriFonteSelect").getValue();
			var danPotencKey = this.getView().byId("danoPotencialChangeEdit").getSelectedKey();
			var cargosExpostosKey = "";
			var numPessoEnvolKey = this.getView().byId("editNumPessoasEnvSelect").getSelectedKey();
			var tempDuraAtivKey = this.getView().byId("editTempDuracaoSelect").getSelectedKey();
			var freqRealAtivKey = this.getView().byId("editFreqRealizaSelect").getSelectedKey();
			var cargosExpostos = oModelView.getProperty("/itemEditClassRisc");
			var valDanoPotencial = oModelView.getProperty("/danosPotenciaisValueTabela");

			var numPessEnvol = Number(this.getView().byId("editNumPessoasEnvSelect").getSelectedKey());
			var tempoDuracaoAtv = Number(this.getView().byId("editTempDuracaoSelect").getSelectedKey());
			var freqRealAtvd = Number(this.getView().byId("editFreqRealizaSelect").getSelectedKey());
			var gravidade = Number(this.getView().byId("danoPotencialChangeEdit").getSelectedKey())
			var probabilidadeCount;
			probabilidadeCount = numPessEnvol * tempoDuracaoAtv * freqRealAtvd;

			var gravidadeResultante = gravidade * probabilidadeCount;

			gravidade = "Potencial De " + danPotenc;
			probabil = numPessoEnvolKey * tempDuraAtivKey * freqRealAtivKey;
			riscPotencial = gravidadeResultante;

			oModelView.setProperty('/probabilidade', probabil);

			var vazio = ""
			for (var i = 0; i < cargosExpostos.length; i++) {
				vazio += cargosExpostos[i].SOBID + ", ";
			}
			vazio = vazio.slice(0, -2);

			var itemEditCargArea = oModelView.getProperty("/itemEditCargArea");

			var linhaIndex = valDanoPotencial.findIndex(val => val.TIPO_PERIGO == tipoPerigoKey && val.RISCO == riscoKey && val.FONTE ==
				fontCircKey)
			var valorDanoPotenc = valDanoPotencial[linhaIndex].DANOS_POTENC;

			var dadosSegundaTabelaObjeto = {
				"TIPO_PERIGO": tipoPerigo,
				"PERIGO": perigo,
				"RISCO": risco,
				"DESC_RISCO": descRisco,
				"FONTE_CIRC": fontCirc,
				"DESC_FONTE": desFontCirc,
				"DESC_DANO": valorDanoPotenc,
				"CARG_EXPOSTOS": vazio,
				"NUM_PESS_ENV": numPessoEnvol,
				"DURAC_ATIVIDADE": tempDuraAtiv,
				"FREQ_REAL_ATIV": freqRealAtiv,
				"GRAVIDADE": gravidade,
				"PROBABILIDADE": probabil,
				"RISC_POTENCIAL": riscPotencial,
				"TEMP_ID": oTableData.TEMP_ID,
				"opcao": "E",
				"TIPO_PERIGO_KEY": tipoPerigoKey,
				"PERIGO_KEY": perigoKey,
				"RISCO_KEY": riscoKey,
				"DESC_RISCO_KEY": descRiscoKey,
				"FONT_CIRC_KEY": fontCircKey,
				"DES_FONT_CIRC_KEY": desFontCircKey,
				"DAN_POTENC_KEY": danPotencKey,
				"CARGOS_EXPOSTOS_KEY": cargosExpostosKey,
				"NUM_PESS_ENV_KEY": numPessoEnvolKey,
				"TEMP_DURA_ATIV_KEY": tempDuraAtivKey,
				"FREQ_REAL_ATIV_KEY": freqRealAtivKey,
				"USR_MODIFI": "",
				"DTMODIFI": "",
				"DEL": ""

			}

			var cargosExportosMap = cargosExpostos.map(val => val.SOBID);
			var itemCargaAreaFilter = itemEditCargArea.filter(val => !cargosExportosMap.includes(val.SOBID));

			segundaTabela[tableIndex] = dadosSegundaTabelaObjeto;

			oModelView.setProperty("/segundaTabelaAUX", segundaTabela);
			oModelView.setProperty("/itemEditCargArea", itemCargaAreaFilter);
			oModelView.setProperty("/itemEditClassRisc", cargosExpostos);
			oModelView.setProperty("/riscoPotencValue", "");

			oModelView.setProperty('/dadosDosRiscosOcupacionaisTable', [])

			oModelView.setProperty('/editRiscoPotencSelect', "")

			var oModel = this.getOwnerComponent().getModel();
			var oEntry = {
				deleteTableRow: "",
				opcao: "E",
				revalidar: "",
				riscosOcupacionais: JSON.stringify(dadosSegundaTabelaObjeto),
			}

			sap.ui.core.BusyIndicator.show();
			oModel.create("/riscosOcupacionaisSet", oEntry, {
				success: function(oData) {
					sap.ui.core.BusyIndicator.hide();
					MessageToast.show(this.getOwnerComponent().getModel("i18n").getResourceBundle().getText("msgEditRetornSucess"))
				},

				error: function(error) {
					sap.ui.core.BusyIndicator.hide();
					MessageToast.show(this.getOwnerComponent().getModel("i18n").getResourceBundle().getText("msgEditRetornError"))
				}
			});

			this._openDialogEditarDadosDaArea().close();
			this.limparDadosTabelaDois();

		},

		onEditarDados: function(oEvent) {

			var oModelView = this.getView().getModel("oView1");
			// Valida se há algum registro selecionado na tabela
			var oTableDadosDasAtividades = this.getView().byId("dadosDasAtividadesTable");
			var oTableDadosDosExecutantes = this.getView().byId("dadosDosExecutantesTable");
			var selectedRowDadosDasAtividades = oTableDadosDasAtividades.getSelectedItems();

			var oTableDadosRiscosOperacionais = this.getView().byId("dadosDosRiscosOcupacionaisTable");
			var oTableDadosClassificacaoRiscosOcupacionais = this.getView().byId("dadosDosRiscosOcupacionaisTable");
			var selectedRowDadosRiscosOperacionais = oTableDadosRiscosOperacionais.getSelectedItems();
			var selectedRowClassificacaoRiscosOcupacionais = oTableDadosClassificacaoRiscosOcupacionais.getSelectedItems();

			var oTableDadosControlesOperacionais = this.getView().byId("controlesOperacionaisTable");
			var selectedRowControlesOperacionais = oTableDadosControlesOperacionais.getSelectedItems();

			var oTableDadosPlanoDeAcao = this.getView().byId("planoDeAcaoTable");
			var selectedRowPlanoDeAcao = oTableDadosPlanoDeAcao.getSelectedItems();

			if (oEvent === "dadosAtividades") {
				if (selectedRowDadosDasAtividades.length === 0) {
					return MessageToast.show("É necessário selecionar um registro da tabela.");
				} else {
					oModelView.setProperty("/editBtnClcikLocalInst", true)
					oModelView.setProperty("/editBtnClcikArea", true)
					oModelView.setProperty("/editLocalInstDtClick", true)
					this.filtroArea();
					this.filtroLocalInstal();
					this.getLocalInstDetalhe();
					return this._openDialogEditarDadosAtividade().open();
				}
			}

			if (oEvent === "riscosOcupacionais") {
				if (selectedRowDadosRiscosOperacionais.length === 0) {
					return MessageToast.show("É necessário selecionar um registro da tabela.");
				} else {
					if (oEvent === "riscosOcupacionais") {
						this._openDialogInserDadosRiscOcupacionais().open();
						this._openDialogInserDadosRiscOcupacionais().close();
					}
					this._openDialogEditarDadosDaArea().open();
				}
			}

			// if (oEvent === "riscosOcupacionais" && selectedRowDadosRiscosOperacionais.length === 0) {
			// 	if (selectedRowClassificacaoRiscosOcupacionais.length === 0) {
			// 		return MessageToast.show("É necessário selecionar um registro da tabela.");
			// 	} else {
			// 		return this._openDialogEditarClassificacaoRiscos().open();
			// 	}
			// }

			// if (oEvent === "controlesOperacionais") {
			// 	if (selectedRowControlesOperacionais.length === 0) {
			// 		return MessageToast.show("É necessário selecionar um registro da tabela.");
			// 	} else {
			// 		return this._openDialogEditarControlesOperacionais().open();
			// 	}
			// }

			// if (oEvent === "planoDeAcao") {
			// 	if (selectedRowPlanoDeAcao.length === 0) {
			// 		return MessageToast.show("É necessário selecionar um registro da tabela.");
			// 	} else {
			// 		return this._openDialogEditarPlanoDeAcao().open();
			// 	}
			// }
		},

		dialogEditarAtividadeClose: function() {
			var oModelView = this.getView().getModel("oView1");
			oModelView.setProperty("/unidadeValueTitle", "");
			oModelView.setProperty("/areaValue", "");
			oModelView.setProperty("/localInstValue", "");
			oModelView.setProperty("/dtLocalValue", "");
			oModelView.setProperty("/atividadeValue", "");
			oModelView.setProperty("/tpAtividadeValue", "");
			oModelView.setProperty("/efetivoValue", "");
			oModelView.setProperty("/empresaValue", "");
			this._openDialogEditarDadosAtividade().close();
		},

		dialogEditarAtividadeConfirm: function() {
			var oModelView = this.getView().getModel("oView1");
			var oModel = this.getOwnerComponent().getModel();
			var oTable = this.getView().byId("dadosDasAtividadesTable");
			var tableIndex = oTable._aSelectedPaths[0].replace("/tableDadosDasAtividades/", "");
			var oModelView = this.getView().getModel("oView1");
			var selectedItems = oTable.getSelectedItems()[0].getBindingContext("oView1").sPath;
			var oTableData = oModelView.getProperty(selectedItems);

			// Get input values
			var unidadeValue = oModelView.getProperty("/unidadeValue");
			var unidadeValueText = oModelView.getProperty("/unidadeValueTitle");
			var areaValue = oModelView.getProperty("/areaValue");
			var localInstValue = oModelView.getProperty("/localInstValue");
			var dtLocalValue = oModelView.getProperty("/dtLocalValue");
			var atividadeValue = oModelView.getProperty("/atividadeValue");
			var tpAtividadeValue = oModelView.getProperty("/tpAtividadeValue");
			var efetivoValue = oModelView.getProperty("/efetivoValue");
			var empresaValue = oModelView.getProperty("/empresaValue");
			var areaValueId = oModelView.getProperty("/areaValueInput");

			if (areaValueId == "") {
				areaValueId = oTableData.areaid
			}

			var tableDadosDasAtividades = oModelView.getProperty("/tableDadosDasAtividades");
			if (!unidadeValueText || !areaValue || !areaValueId || !localInstValue || !dtLocalValue || !atividadeValue || !tpAtividadeValue ||
				!
				efetivoValue || !empresaValue) {
				return MessageToast.show("Preencha todos os campos.")
			}
			var that = this;

			// Preenche a tabela com os dados sem precisar buscar no banco de dados
			var dadosModificados = {
				unidadetitle: unidadeValueText,
				area: areaValue,
				localInst: localInstValue,
				dtLocal: dtLocalValue,
				atividade: atividadeValue,
				tpAtividade: tpAtividadeValue,
				efetivo: efetivoValue,
				empresa: empresaValue,
				tempid: oTableData.tempid,
				areaid: oTableData.areaid
			}

			// Modifica os dados do model local pelo index
			tableDadosDasAtividades[tableIndex] = dadosModificados

			oModelView.setProperty("/tableDadosDasAtividades", tableDadosDasAtividades);

			var editedData = {
				unidade: unidadeValue,
				area: areaValue,
				localInst: localInstValue,
				dtLocal: dtLocalValue,
				atividade: atividadeValue,
				tpAtividade: tpAtividadeValue,
				efetivo: oTableData.efetivo,
				empresa: oTableData.empresa,
				codigoRegistro: oTableData.codigoRegistro,
				dtRegistro: oTableData.dtRegistro,
				dtVencimento: oTableData.dtVencimento,
				opcao: "E",
				areaid: areaValueId,
				tempid: oTableData.tempid,
				unidadetitle: unidadeValueText
			}

			var editedDataString = JSON.stringify(editedData)

			var oEntry = {
				deleteTableRow: "",
				tableData: editedDataString,
				opcao: "E",
				revalidar: ""
			}
			sap.ui.core.BusyIndicator.show();
			var sURL = "/CamposDaAreaSet";
			oModel.create(sURL, oEntry, {
				success: function(oData) {
					sap.ui.core.BusyIndicator.hide();
					that._openDialogEditarDadosAtividade().close();
					oModelView.setProperty("/unidadeValueTitle", "");
					oModelView.setProperty("/areaValue", "");
					oModelView.setProperty("/localInstValue", "");
					oModelView.setProperty("/dtLocalValue", "");
					oModelView.setProperty("/atividadeValue", "");
					oModelView.setProperty("/tpAtividadeValue", "");
				},

				error: function(error) {
					sap.ui.core.BusyIndicator.hide();
					MessageBox.error("Ocorreu um erro ao editar a atividade, tente novamente em instantes.", {
						onClose: function(sAction) {
							if (sAction == "CLOSE") {
								that._openDialogEditarDadosAtividade().close();
							}
						}
					})
				}
			});
		},

		dialogEditarExecutanteClose: function() {
			this._openDialogEditarDadosExecutante().close();
		},

		dialogEditarIdentificacaoClose: function() {
			this._openDialogEditarIdentificacaoRiscos().close();
		},

		dialogEditarClassificacaoClose: function() {
			this._openDialogEditarClassificacaoRiscos().close();
		},

		dialogEditarControlesClose: function() {
			this._openDialogEditarControlesOperacionais().close();
		},

		dialogEditarPlanoClose: function() {
			this._openDialogEditarPlanoDeAcao().close();
		},

		// Seção: Excluir registro
		onExluirDados: function(oEvent) {
			var oModelView = this.getView().getModel("oView1");
			var oModel = this.getOwnerComponent().getModel();
			var oTableDadosDasAtividades = this.getView().byId("dadosDasAtividadesTable");
			var oTableDadosDosExecutantes = this.getView().byId("dadosDosExecutantesTable");
			var selectedRowDadosDasAtividades = oTableDadosDasAtividades.getSelectedItems();
			var dadosDasAtividades = oModelView.getProperty("/tableDadosDasAtividades");
			var that = this;

			if (selectedRowDadosDasAtividades.length === 0) {
				return MessageToast.show("É necessário selecionar um registro da tabela.");
			} else {
				if (oEvent) {
					MessageBox.confirm("Deseja excluir esses itens da tabela?", {
						actions: [MessageBox.Action.YES, MessageBox.Action.NO],
						emphasizedAction: MessageBox.Action.YES,
						onClose: function(oAction) {
							if (oAction === "YES") {
								var oTable = that.getView().byId("dadosDasAtividadesTable");
								var selectedItems = oTable.getSelectedItems();
								var aContexts = oTable.getSelectedContexts();

								var oTableRows = [];

								for (var i = 0; i < selectedItems.length; i++) {
									var selectedItemsPath = selectedItems[i].getBindingContext("oView1").sPath;
									var oTableData = oModelView.getProperty(selectedItemsPath);
									oTableRows.push({
										unidade: oTableData.unidade,
										area: oTableData.area,
										localInst: oTableData.localInst,
										dtLocal: oTableData.dtLocal,
										atividade: oTableData.atividade,
										tpAtividade: oTableData.tpAtividade,
										efetivo: oTableData.efetivo,
										empresa: oTableData.empresa,
										codigoRegistro: oTableData.codigoRegistro,
										dtRegistro: oTableData.dtRegistro,
										dtVencimento: oTableData.dtVencimento,
										opcao: "D",
										areaid: oTableData.areaid,
										tempid: oTableData.tempid,
										unidadetitle: oTableData.unidadeValueText
									});
								}

								var oEntryString = JSON.stringify(oTableRows)

								var oEntry = {
									opcao: "D",
									deleteTableRow: oEntryString,
									tableData: "",
									revalidar: ""
								}
								sap.ui.core.BusyIndicator.show();
								var sURL = "/CamposDaAreaSet";
								oModel.create(sURL, oEntry, {
									success: function(oData) {
										sap.ui.core.BusyIndicator.hide();
										oTable.removeSelections(true);

										// Remover linha da tabela do model local, caso tenha sucesso ao eliminar no banco de dados, sem precisar fazer um filtro novamente
										for (var i = aContexts.length - 1; i >= 0; i--) {
											var oThisObj = aContexts[i].getObject();
											var index = $.map(dadosDasAtividades, function(obj, index) {
												if (obj === oThisObj) {
													return index;
												}
											})
											dadosDasAtividades.splice(index, 1);
										}
										oModelView.setProperty("/tableDadosDasAtividades", dadosDasAtividades);
									},

									error: function(error) {
										sap.ui.core.BusyIndicator.hide();
										var erro = JSON.parse(error.responseText)
										MessageBox.error(erro.error.message.value)
									}
								});
							}
						}
					});
				}
			}
		},
		onExluirDadosTab2: function(oEvent) {
			var oModelView = this.getView().getModel("oView1");
			var oModel = this.getOwnerComponent().getModel();
			var oTableDadosDasAtividades = this.getView().byId("dadosDosRiscosOcupacionaisTable");
			var oTableDadosDosExecutantes = this.getView().byId("dadosDosExecutantesTable");
			var selectedRowDadosDasAtividades = oTableDadosDasAtividades.getSelectedItems();
			var dadosDasAtividades = oModelView.getProperty("/segundaTabela");
			var that = this;

			if (selectedRowDadosDasAtividades.length === 0) {
				return MessageToast.show("É necessário selecionar um registro da tabela.");
			} else {
				if (oEvent) {
					MessageBox.confirm("Deseja excluir esses itens da tabela?", {
						actions: [MessageBox.Action.YES, MessageBox.Action.NO],
						emphasizedAction: MessageBox.Action.YES,
						onClose: function(oAction) {
							if (oAction === "YES") {
								var oTable = that.getView().byId("dadosDosRiscosOcupacionaisTable");
								var selectedItems = oTable.getSelectedItems();
								var aContexts = oTable.getSelectedContexts();

								var oTableRows = [];

								for (var i = 0; i < selectedItems.length; i++) {
									var selectedItemsPath = selectedItems[i].getBindingContext("oView1").sPath;
									var oTableData = oModelView.getProperty(selectedItemsPath);
									oTableRows.push({
										CARGOS_EXPOSTOS_KEY: oTableData.CARGOS_EXPOSTOS_KEY,
										CARG_EXPOSTOS: oTableData.CARG_EXPOSTOS,
										DAN_POTENC_KEY: oTableData.DAN_POTENC_KEY,
										DESC_DANO: oTableData.DESC_DANO,
										DESC_FONTE: oTableData.DESC_FONTE,
										DESC_RISCO: oTableData.DESC_RISCO,
										DESC_RISCO_KEY: oTableData.DESC_RISCO_KEY,
										DES_FONT_CIRC_KEY: oTableData.DES_FONT_CIRC_KEY,
										DURAC_ATIVIDADE: oTableData.DURAC_ATIVIDADE,
										FONTE_CIRC: oTableData.FONTE_CIRC,
										FONT_CIRC_KEY: oTableData.FONT_CIRC_KEY,
										opcao: "D",
										FREQ_REAL_ATIV: oTableData.FREQ_REAL_ATIV,
										FREQ_REAL_ATIV_KEY: oTableData.FREQ_REAL_ATIV_KEY,
										GRAVIDADE: oTableData.GRAVIDADE,
										NUM_PESS_ENV: oTableData.NUM_PESS_ENV,
										NUM_PESS_ENV_KEY: oTableData.NUM_PESS_ENV_KEY,
										PERIGO: oTableData.PERIGO,
										PERIGO_KEY: oTableData.PERIGO_KEY,
										PROBABILIDADE: oTableData.PROBABILIDADE,
										RISCO: oTableData.RISCO,
										RISCO_KEY: oTableData.RISCO_KEY,
										RISC_POTENCIAL: oTableData.RISC_POTENCIAL,
										TEMP_DURA_ATIV_KEY: oTableData.TEMP_DURA_ATIV_KEY,
										TEMP_ID: oTableData.TEMP_ID,
										TIPO_PERIGO: oTableData.TIPO_PERIGO,
										TIPO_PERIGO_KEY: oTableData.TIPO_PERIGO_KEY,
										link_id: oTableData.link_id,
										USR_MODIFI: "",
										DTMODIFI: "",
										DEL: ""
									});
								}

								var oEntryString = JSON.stringify(oTableRows)

								var oEntry = {
									opcao: "D",
									deleteTableRow: oEntryString,
									riscosOcupacionais: "",
									revalidar: ""
								}
								sap.ui.core.BusyIndicator.show();
								var sURL = "/riscosOcupacionaisSet";
								oModel.create(sURL, oEntry, {
									success: function(oData) {
										sap.ui.core.BusyIndicator.hide();
										oTable.removeSelections(true);

										// Remover linha da tabela do model local, caso tenha sucesso ao eliminar no banco de dados, sem precisar fazer um filtro novamente
										for (var i = aContexts.length - 1; i >= 0; i--) {
											var oThisObj = aContexts[i].getObject();
											var index = $.map(dadosDasAtividades, function(obj, index) {
												if (obj === oThisObj) {
													return index;
												}
											})
											dadosDasAtividades.splice(index, 1);
										}
										oModelView.setProperty("/segundaTabelaAUX", dadosDasAtividades);
										MessageToast.show(this.getOwnerComponent().getModel("i18n").getResourceBundle().getText("msgRetornDeletSucess"))
									},

									error: function(error) {
										sap.ui.core.BusyIndicator.hide();
										var erro = JSON.parse(error.responseText)
										MessageBox.error(MessageToast.show(this.getOwnerComponent().getModel("i18n").getResourceBundle().getText(
											"msgRetornDeletError")))
									}
								});
							}
						}
					});
				}
			}
		},

		// Filtro unidade Help Value
		_dialogHelpValueUnidade: function() {
			if (!this._helpValueUnidade) {
				this._helpValueUnidade = sap.ui.xmlfragment("com.arcelormittal.ipar.view.fragments.filtroUnidadeDialogHelpValue", this);
				this.getView().addDependent(this._helpValueUnidade);
			}
			return this._helpValueUnidade;
		},

		_dialogHelpValueInserirDadosAreaUnidade: function() {
			if (!this._helpValueUnidade2) {
				this._helpValueUnidade2 = sap.ui.xmlfragment("com.arcelormittal.ipar.view.fragments.iserirDadosAreaUnidade", this);
				this.getView().addDependent(this._helpValueUnidade2);
			}
			return this._helpValueUnidade2;
		},

		_dialogHelpValueTipoPerigoList: function() {
			if (!this._helpValueTipoPerigoList) {
				this._helpValueTipoPerigoList = sap.ui.xmlfragment("com.arcelormittal.ipar.view.fragments.tipoPerigoList", this);
				this.getView().addDependent(this._helpValueTipoPerigoList);
			}
			return this._helpValueTipoPerigoList;
		},

		_dialogHelpValueTipoPerigoListEdit: function() {
			if (!this._helpValueTipoPerigoListEdit) {
				this._helpValueTipoPerigoListEdit = sap.ui.xmlfragment("com.arcelormittal.ipar.view.fragments.tipoPerigoListEdit", this);
				this.getView().addDependent(this._helpValueTipoPerigoListEdit);
			}
			return this._helpValueTipoPerigoListEdit;
		},

		_dialogHelpValuePerigoList: function() {
			if (!this._helpValuePerigoList) {
				this._helpValuePerigoList = sap.ui.xmlfragment("com.arcelormittal.ipar.view.fragments.perigoList", this);
				this.getView().addDependent(this._helpValuePerigoList);
			}
			return this._helpValuePerigoList;

		},

		_dialogHelpValuePerigoListEdit: function() {
			if (!this._helpValuePerigoListEdit) {
				this._helpValuePerigoListEdit = sap.ui.xmlfragment("com.arcelormittal.ipar.view.fragments.perigoListEdit", this);
				this.getView().addDependent(this._helpValuePerigoListEdit);
			}
			return this._helpValuePerigoListEdit;

		},

		_dialogHelpValueRiscoList: function() {
			if (!this._helpValueRiscoList) {
				this._helpValueRiscoList = sap.ui.xmlfragment("com.arcelormittal.ipar.view.fragments.riscoList", this);
				this.getView().addDependent(this._helpValueRiscoList);
			}
			return this._helpValueRiscoList;

		},

		_dialogHelpValueRiscoListEdit: function() {
			if (!this._helpValueRiscoListEdit) {
				this._helpValueRiscoListEdit = sap.ui.xmlfragment("com.arcelormittal.ipar.view.fragments.riscoListEdit", this);
				this.getView().addDependent(this._helpValueRiscoListEdit);
			}
			return this._helpValueRiscoListEdit;

		},

		_dialogHelpValueFonteList: function() {
			if (!this._helpValueFonteList) {
				this._helpValueFonteList = sap.ui.xmlfragment("com.arcelormittal.ipar.view.fragments.fonteList", this);
				this.getView().addDependent(this._helpValueFonteList);
			}
			return this._helpValueFonteList;

		},

		_dialogHelpValueFonteListEdit: function() {
			if (!this._helpValueFonteListEdit) {
				this._helpValueFonteListEdit = sap.ui.xmlfragment("com.arcelormittal.ipar.view.fragments.fonteListEdit", this);
				this.getView().addDependent(this._helpValueFonteListEdit);
			}
			return this._helpValueFonteListEdit;

		},

		_dialogHelpValueDanoPotencialList: function() {
			if (!this._helpValueDanoPotencial) {
				this._helpValueDanoPotencial = sap.ui.xmlfragment("com.arcelormittal.ipar.view.fragments.danoPotencialList", this);
				this.getView().addDependent(this._helpValueDanoPotencial);
			}
			return this._helpValueDanoPotencial;

		},

		onButExcluir: function(oEvent) {
			MessageBox.confirm("Deseja excluir os dados selecionados", {
				onClose: function(oAction) {
					if (oAction == "OK") {
						this.onExcluir();
					}
				}.bind(this)
			});
		},

		onExcluir: function(oEvent) {

			var oViewModel = this.getView().getModel("oView1");
			var planoDeAcaoTable = this.getView().byId("dadosDosRiscosOcupacionaisTable");
			var linhTab = planoDeAcaoTable.getSelectedItems();
			var tabinc = oViewModel.getProperty("/segundaTabela");

			for (var i = linhTab.length - 1; i >= 0; i--) {

				tabinc.splice(linhTab[i], 1);
			}
			oViewModel.setProperty("/segundaTabela", tabinc);

			planoDeAcaoTable.removeSelections();

		},

		onUnidadeValueHelp: function() {
			this._dialogHelpValueUnidade().open();
		},

		onInserirDadosAreaUnidade: function() {
			this._dialogHelpValueInserirDadosAreaUnidade().open();
		},

		_filtroUnidadeDialogHelpConfirm: function(oEvent) {
			var aSelectedItems = oEvent.getParameter("selectedItems"),
				oMultiInput = this.byId("unidadeMultiInput"),
				oModelView = this.getView().getModel("oView1");
			var unidadeValueTokens = this.getView().byId("unidadeMultiInput").getTokens();

			// Pega a unidade selecionada pelo usuário e adiona no multinput
			if (aSelectedItems && aSelectedItems.length > 0) {
				aSelectedItems.forEach(function(oItem) {
					oMultiInput.addToken(new Token({
						text: oItem.getDescription(),
						key: oItem.getDescription()
					}));
				});
				this.filtroLocalInstal();
				this.filtroArea();
				oModelView.setProperty("/localInstEnabled", true);
				oModelView.setProperty("/areaEnabled", true);
			}
		},

		// Pega a unidade selecionada pelo usuário dos botões "Inserir dados da Área" e "Editar", 
		// para fazer uma busca no banco de dados e buscar as áreas e locais de instalação referentes
		_inserirDadosAreaUnidadeDialogHelpConfirm: function(oEvent) {
			var sDescription,
				oSelectedItem = oEvent.getParameter("selectedItem");
			var oModelView = this.getView().getModel("oView1");

			if (!oSelectedItem) {
				return;
			}

			sDescription = oSelectedItem.getDescription();
			var title = oSelectedItem.getTitle().substr(0, 3);

			oModelView.setProperty("/unidadeValueLocalIst", sDescription);
			oModelView.setProperty("/unidadeValueArea", sDescription);
			oModelView.setProperty("/unidadeValue", sDescription);
			oModelView.setProperty("/unidadeValueTitle", title);
			oModelView.setProperty("/areaValue", "");
			oModelView.setProperty("/localInstValue", "");

			this.filtroArea();
			this.filtroLocalInstal();

		},

		_inserirDadosTipoPerigoeDialogHelpConfirm: function(oEvent) {
			var sDescription,
				oSelectedItem = oEvent.getParameter("selectedItem");
			var oModelView = this.getView().getModel("oView1");

			if (!oSelectedItem) {
				return;
			}

			sDescription = oSelectedItem.getDescription();
			var title = oSelectedItem.getTitle().substr(0, 50);

			oModelView.setProperty("/danoPotencialValueTabela", title);

			this.filtroArea();
			this.filtroLocalInstal();

		},

		_inserirDadosTipoPerigoeDialogHelpConfirm: function(oEvent) {
			var sDescription,
				oSelectedItem = oEvent.getParameter("selectedItem");
			var oModelView = this.getView().getModel("oView1");

			if (!oSelectedItem) {
				return;
			}

			sDescription = oSelectedItem.getDescription();
			var title = oSelectedItem.getTitle().substr(0, 50);

			oModelView.setProperty("/tipoPerigoValueTabela", title);

			this.filtroArea();
			this.filtroLocalInstal();

		},

		_inserirDadosPerigoListeDialogHelpConfirm: function(oEvent) {
			var sDescription,
				oSelectedItem = oEvent.getParameter("selectedItem");
			var oModelView = this.getView().getModel("oView1");

			if (!oSelectedItem) {
				return;
			}

			sDescription = oSelectedItem.getDescription();
			var title = oSelectedItem.getTitle().substr(0, 50);

			oModelView.setProperty("/perigoListValueTabela", title);

		},

		_inserirDadosRiscoListDialogHelpConfirm: function(oEvent) {
			var sDescription,
				oSelectedItem = oEvent.getParameter("selectedItem");
			var oModelView = this.getView().getModel("oView1");

			if (!oSelectedItem) {
				return;
			}

			sDescription = oSelectedItem.getDescription();
			var title = oSelectedItem.getTitle().substr(0, 50);

			oModelView.setProperty("/riscoListValueTabela", title);

		},

		_inserirDadosFonteListDialogHelpConfirm: function(oEvent) {
			var sDescription,
				oSelectedItem = oEvent.getParameter("selectedItem");
			var oModelView = this.getView().getModel("oView1");

			if (!oSelectedItem) {
				return;
			}

			sDescription = oSelectedItem.getDescription();
			var title = oSelectedItem.getTitle().substr(0, 50);

			oModelView.setProperty("/fonteListValueTabela", title);

		},

		_inserirDadosDanoPotencialDialogHelpConfirm: function(oEvent) {
			var sDescription,
				oSelectedItem = oEvent.getParameter("selectedItem");
			var oModelView = this.getView().getModel("oView1");
			var key = this.getView().byId("danoPotencialListSelec");

			if (!oSelectedItem) {
				return;
			}

			sDescription = oSelectedItem.getDescription();
			var description = oSelectedItem.getDescription().substr(0, 50);

			oModelView.setProperty("/danoPotencialValueTabela", description);

		},

		onTokenRemoveUnidade: function(oEvent) {
			var oModelView = this.getView().getModel("oView1");
			var aSelectedTokens = this.getView().byId("unidadeMultiInput").getTokens();
			var evt = oEvent.getParameters().removedTokens[0].getId();

			if (aSelectedTokens.length <= 1) {
				oModelView.setProperty("/localInstEnabled", false);
				oModelView.setProperty("/areaEnabled", false);
				this.getView().byId("localInstMultiInput").removeAllTokens();
				this.getView().byId("areaMultiInput").removeAllTokens();
			} else {
				var removedTokens = aSelectedTokens.findIndex(value => value.sId == evt);
				this.getView().byId("unidadeMultiInput").removeToken(removedTokens);
				this.filtroLocalInstal();
				this.filtroArea();
			}
		},

		_searchUnidade: function(oEvent) {
			var oModelView = this.getView().getModel("oView1");
			var searchedValue = oEvent.getParameter("value");
			var oldList = oModelView.getProperty("/filtroUnidadeValue");
			var dados = oModelView.getProperty("/filtroUnidadeValue2");

			var newList = oldList.filter(value => value.Text.includes(searchedValue) || value.Werks.includes(searchedValue) || value.Text
				.toLowerCase().includes(searchedValue.toLowerCase()) || value.Werks.toLowerCase().includes(searchedValue.toLowerCase()));

			oModelView.setProperty("/filtroUnidadeValue", newList)

			if (newList.length === 0) {
				newList = dados;
				oModelView.setProperty("/filtroUnidadeValue", newList)
			}
			if (searchedValue == "") {
				newList = dados;
				oModelView.setProperty("/filtroUnidadeValue", newList)
			}
		},

		// Filtro Local Instalação Help Value
		_dialogHelpValueLocalInst: function() {
			if (!this._helpValueLocalInst) {
				this._helpValueLocalInst = sap.ui.xmlfragment("com.arcelormittal.ipar.view.fragments.filtroLocalInstDialogHelpValue", this);
				this.getView().addDependent(this._helpValueLocalInst);
			}
			return this._helpValueLocalInst;
		},

		// Search field do popup
		_searchLocalInst: function(oEvent) {
			var oModelView = this.getView().getModel("oView1");
			var searchedValue = oEvent.getParameter("value");
			var oldList = oModelView.getProperty("/filtroLocalInstalValue");
			var dados = oModelView.getProperty("/filtroLocalInstalValue2");

			var newList = oldList.filter(value => value.LocInstal.includes(searchedValue) || value.Descr.includes(searchedValue) || value.LocInstal
				.toLowerCase().includes(searchedValue.toLowerCase()) || value.Descr.toLowerCase().includes(searchedValue.toLowerCase()));

			oModelView.setProperty("/filtroLocalInstalValue", newList)

			if (newList.length === 0) {
				newList = dados;
				oModelView.setProperty("/filtroLocalInstalValue", newList)
			}
			if (searchedValue == "") {
				newList = dados;
				oModelView.setProperty("/filtroLocalInstalValue", newList)
			}
		},

		_dialogHelpLocalInst: function() {
			if (!this._valueLocalInst) {
				this._valueLocalInst = sap.ui.xmlfragment("com.arcelormittal.ipar.view.fragments.inserirLocalInst", this);
				this.getView().addDependent(this._valueLocalInst);
			}
			return this._valueLocalInst;
		},

		_dialogHelpDtLocalInst: function() {
			if (!this._valueDtLocalInst) {
				this._valueDtLocalInst = sap.ui.xmlfragment("com.arcelormittal.ipar.view.fragments.inserirDtLocalInst", this);
				this.getView().addDependent(this._valueDtLocalInst);
			}
			return this._valueDtLocalInst;
		},

		onAbrirLocalInstValueHelp: function() {
			this._dialogHelpLocalInst().open();
		},

		onLocalInst: function() {
			this._dialogHelpValueLocalInst().open();
		},

		onAbriDtLocalInstValueHelp: function() {
			this._dialogHelpDtLocalInst().open();
		},

		_filtroLocalInstDialogHelpConfirm: function(oEvent) {
			var aSelectedItems = oEvent.getParameter("selectedItems"),
				oMultiInput = this.byId("localInstMultiInput");

			if (aSelectedItems && aSelectedItems.length > 0) {
				aSelectedItems.forEach(function(oItem) {
					oMultiInput.addToken(new Token({
						text: oItem.getDescription(),
						key: oItem.getTitle()
					}));
				});
			}
		},

		_inserirLocalInstDialogHelpConfirm: function(oEvent) {
			var sDescription,
				oSelectedItem = oEvent.getParameter("selectedItem");
			var oModelView = this.getView().getModel("oView1");
			var row = oSelectedItem.getBindingContextPath();
			var oTableData = oModelView.getProperty(row);

			if (!oSelectedItem) {
				return;
			}
			sDescription = oSelectedItem.getTitle();

			oModelView.setProperty("/localInstValue", sDescription);
			oModelView.setProperty("/localInstValue2", oTableData.Descr);
			this.getLocalInstDetalhe();
		},

		_inserirDtLocalInstDialogHelpConfirm: function(oEvent) {
			var sDescription,
				oSelectedItem = oEvent.getParameter("selectedItem");
			var oModelView = this.getView().getModel("oView1");

			if (!oSelectedItem) {
				return;
			}
			sDescription = oSelectedItem.getDescription();

			oModelView.setProperty("/dtLocalValue", sDescription);
		},

		// Filro Area Help Value
		_dialogHelpValueArea: function() {
			if (!this._helpValueArea) {
				this._helpValueArea = sap.ui.xmlfragment("com.arcelormittal.ipar.view.fragments.filtroAreaDialogHelpValue", this);
				this.getView().addDependent(this._helpValueArea);
			}
			return this._helpValueArea;
		},

		_dialogHelpValueInserirDadosArea: function() {
			if (!this._helpValueArea2) {
				this._helpValueArea2 = sap.ui.xmlfragment("com.arcelormittal.ipar.view.fragments.inserirDadosDaArea", this);
				this.getView().addDependent(this._helpValueArea2);
			}
			return this._helpValueArea2;
		},

		// Search field
		_searchArea: function(oEvent) {
			var oModelView = this.getView().getModel("oView1");
			var searchedValue = oEvent.getParameter("value");
			var oldList = oModelView.getProperty("/filtroAreaValue");
			var dados = oModelView.getProperty("/filtroAreaValue2");

			var newList = oldList.filter(value => value.Orgtx.includes(searchedValue) || value.Orgeh.includes(searchedValue) || value.Orgtx.toLowerCase()
				.includes(searchedValue.toLowerCase()) || value.Orgeh.toLowerCase().includes(searchedValue.toLowerCase()));

			oModelView.setProperty("/filtroAreaValue", newList)

			if (newList.length === 0) {
				newList = dados;
				oModelView.setProperty("/filtroAreaValue", newList)
			}
			if (searchedValue == "") {
				newList = dados;
				oModelView.setProperty("/filtroAreaValue", newList)
			}
		},

		_searchTipoPerigoList: function(oEvent) {
			var oModelView = this.getView().getModel("oView1");
			var searchedValue = oEvent.getParameter("value");
			var oldList = oModelView.getProperty("/tipoPerigoListValue" [0]);
			var dados = oModelView.getProperty("/filtroAreaValue2");

			var newList = oldList.filter(value => value.Orgtx.includes(searchedValue) || value.Orgeh.includes(searchedValue) || value.Orgtx.toLowerCase()
				.includes(searchedValue.toLowerCase()) || value.Orgeh.toLowerCase().includes(searchedValue.toLowerCase()));

			oModelView.setProperty("/filtroAreaValue", newList)

			if (newList.length === 0) {
				newList = dados;
				oModelView.setProperty("/filtroAreaValue", newList)
			}
			if (searchedValue == "") {
				newList = dados;
				oModelView.setProperty("/filtroAreaValue", newList)
			}
		},

		_dtLocalInst: function(oEvent) {
			var oModelView = this.getView().getModel("oView1");
			var searchedValue = oEvent.getParameter("value");
			var oldList = oModelView.getProperty("/dtLocalInst");
			var dados = oModelView.getProperty("/dtLocalInst2");

			var newList = oldList.filter(value => value.LocInstal.includes(searchedValue) || value.Descr.includes(searchedValue) || value.LocInstal
				.toLowerCase()
				.includes(searchedValue.toLowerCase()) || value.Descr.toLowerCase().includes(searchedValue.toLowerCase()));

			oModelView.setProperty("/dtLocalInst", newList)

			if (newList.length === 0) {
				newList = dados;
				oModelView.setProperty("/dtLocalInst", newList)
			}
			if (searchedValue == "") {
				newList = dados;
				oModelView.setProperty("/dtLocalInst", newList)
			}
		},

		onAreaHelpValue: function() {
			this._dialogHelpValueArea().open();
		},

		onAbrirInserirDadosDaArea: function() {
			this._dialogHelpValueInserirDadosArea().open();
		},

		onAbrirTipoPerigoList: function() {
			this._dialogHelpValueTipoPerigoList().open();
		},

		onAbrirTipoPerigoListEdit: function() {
			this._dialogHelpValueTipoPerigoListEdit().open();
		},

		onAbrirPerigoList: function() {
			this._dialogHelpValuePerigoList().open();
		},

		onAbrirPerigoListEdit: function() {
			this._dialogHelpValuePerigoListEdit().open();
		},

		onAbrirRiscoList: function() {
			this._dialogHelpValueRiscoList().open();
		},

		onAbrirRiscoListEdit: function() {
			this._dialogHelpValueRiscoListEdit().open();
		},

		onAbrirFonteList: function() {
			this._dialogHelpValueFonteList().open();
		},

		onAbrirFonteListEdit: function() {
			this._dialogHelpValueFonteListEdit().open();
		},

		onAbrirDanoPotencialList: function() {
			this._dialogHelpValueDanoPotencialList().open();
		},

		_inserirDadosAreaDialogHelpConfirm: function(oEvent) {
			var sDescription,
				oSelectedItem = oEvent.getParameter("selectedItem");
			var oModelView = this.getView().getModel("oView1");

			if (!oSelectedItem) {
				return;
			}

			sDescription = oSelectedItem.getTitle();

			oModelView.setProperty("/areaValue", sDescription);
			oModelView.setProperty("/areaValueInput", oSelectedItem.getDescription());
		},

		_filtroAreaDialogHelpConfirm: function(oEvent) {
			var aSelectedItems = oEvent.getParameter("selectedItems"),
				oMultiInput = this.byId("areaMultiInput");

			if (aSelectedItems && aSelectedItems.length > 0) {
				aSelectedItems.forEach(function(oItem) {
					oMultiInput.addToken(new Token({
						text: oItem.getTitle(),
						key: oItem.getDescription()
					}));
				});
			}
		},

		// Filter Section
		filtroAtividade: function() {
			var oModelView = this.getView().getModel("oView1");
			var oModel = this.getOwnerComponent().getModel();

			sap.ui.core.BusyIndicator.show();
			var sURL = "/UnidadeSet";
			oModel.read(sURL, {
				success: function(oData) {
					sap.ui.core.BusyIndicator.hide();
					oModelView.setProperty("/filtroUnidadeValue", oData.results);
					oModelView.setProperty("/filtroUnidadeValue2", oData.results);
				},
				error: function(error) {
					sap.ui.core.BusyIndicator.hide();
					var erro = JSON.parse(error.responseText)
					MessageBox.error(erro.error.message.value)
				}
			});
		},

		filtroLocalInstal: function() {
			var oModelView = this.getView().getModel("oView1");
			var oModel = this.getOwnerComponent().getModel();
			var unidadeValue = this.getView().byId("unidadeMultiInput").getTokens();
			var unidadeAreValue = oModelView.getProperty("/unidadeValueLocalIst");
			var editBtnClicked = oModelView.getProperty("/editBtnClcikLocalInst");

			sap.ui.core.BusyIndicator.show();
			var sURL = "/LocalInstalacaoSet";
			var aFilters = [];

			// Se for uma edição, busca os dados dessa forma
			if (editBtnClicked) {
				var oTable = this.getView().byId("dadosDasAtividadesTable");
				var selectedItems = oTable.getSelectedItems()[0].getBindingContext("oView1").sPath;
				var oTableData = oModelView.getProperty(selectedItems);
				aFilters.push(new Filter("Werks", FilterOperator.EQ, oTableData.unidade));
				oModelView.setProperty("/editBtnClcikLocalInst", false);
			} else if (unidadeAreValue != "") {
				// Se for feito pelo botão "Inserir dados da área"
				aFilters.push(new Filter("Werks", FilterOperator.EQ, unidadeAreValue));
				oModelView.setProperty("/unidadeValueLocalIst", "");
			} else {
				// Caso seja feito pelo campo de filtros na Header
				this.getDataMultiInput(unidadeValue, "Werks", aFilters);
			}

			oModel.read(sURL, {
				filters: aFilters,
				success: function(oData) {
					sap.ui.core.BusyIndicator.hide();
					// var tUnidade = JSON.parse(oData.results[0].TUnidade)
					oModelView.setProperty("/filtroLocalInstalValue", oData.results);
					oModelView.setProperty("/filtroLocalInstalValue2", oData.results);
				},

				error: function(error) {
					sap.ui.core.BusyIndicator.hide();
					var erro = JSON.parse(error.responseText)
					MessageBox.error(erro.error.message.value)
				}
			});
		},

		filtroArea: function() {
			var oModelView = this.getView().getModel("oView1");
			var oModel = this.getOwnerComponent().getModel();
			var unidadeValue = this.getView().byId("unidadeMultiInput").getTokens();
			var unidadeAreValue = oModelView.getProperty("/unidadeValueArea");
			var editBtnClicked = oModelView.getProperty("/editBtnClcikArea");

			sap.ui.core.BusyIndicator.show();
			var sURL = "/AreaSet";
			var aFilters = [];

			// Mesma lógica descrita no filtro de local da instalação
			if (editBtnClicked) {
				var oTable = this.getView().byId("dadosDasAtividadesTable");
				var selectedItems = oTable.getSelectedItems()[0].getBindingContext("oView1").sPath;
				var oTableData = oModelView.getProperty(selectedItems);
				aFilters.push(new Filter("Werks", FilterOperator.EQ, oTableData.unidade));
				oModelView.setProperty("/editBtnClcikArea", false);
			} else if (unidadeAreValue != "") {
				aFilters.push(new Filter("Werks", FilterOperator.EQ, unidadeAreValue));
				oModelView.setProperty("/unidadeValueArea", "");
			} else {
				this.getDataMultiInput(unidadeValue, "Werks", aFilters);
			}

			oModel.read(sURL, {
				filters: aFilters,
				success: function(oData) {
					sap.ui.core.BusyIndicator.hide();
					// var tUnidade = JSON.parse(oData.results[0].TUnidade)
					oModelView.setProperty("/filtroAreaValue", oData.results);
					oModelView.setProperty("/filtroAreaValue2", oData.results);
				},

				error: function(error) {
					sap.ui.core.BusyIndicator.hide();
					var erro = JSON.parse(error.responseText)
					MessageBox.error(erro.error.message.value)
				}
			});
		},

		// Search field para pesquisar na tabela
		buscaAtividadeChange: function(oEvent) {
			var oModelView = this.getView().getModel("oView1");
			var searchedValue = oEvent.getParameter("newValue");
			var oldList = oModelView.getProperty("/tableDadosDasAtividades");
			var dados = oModelView.getProperty("/tableDadosDasAtividades2");

			var newList = oldList.filter(value => value.area.includes(searchedValue) || value.localInst.includes(searchedValue) || value.empresa
				.includes(searchedValue) || value.efetivo
				.includes(searchedValue) || value.dtLocal.includes(searchedValue) || value.atividade.includes(searchedValue) || value.unidade.includes(
					searchedValue) || value.tpAtividade.includes(searchedValue) || value.atividade.toLowerCase().includes(searchedValue.toLowerCase()) ||
				value.dtLocal.toLowerCase().includes(searchedValue.toLowerCase()) || value.efetivo.toLowerCase()
				.includes(searchedValue.toLowerCase()) || value.empresa.toLowerCase().includes(searchedValue.toLowerCase()) || value.localInst.toLowerCase()
				.includes(searchedValue.toLowerCase()) || value.area.toLowerCase().includes(searchedValue.toLowerCase()) || value.unidade
				.toLowerCase().includes(searchedValue.toLowerCase()) || value.tpAtividade.toLowerCase().includes(searchedValue.toLowerCase()));

			oModelView.setProperty("/tableDadosDasAtividades", newList)

			if (newList.length === 0) {
				newList = dados;
				oModelView.setProperty("/tableDadosDasAtividades", newList)
			}
			if (searchedValue == "") {
				newList = dados;
				oModelView.setProperty("/tableDadosDasAtividades", newList)
			}
		},

		getDataMultiInput: function(Val, Ent, pFilter) {
			for (var index in Val) {
				var filters = Val[index].getKey();

				pFilter.push(new Filter(Ent, FilterOperator.EQ, filters));
			}

		},

		getLocalInstDetalhe: function() {
			var oModelView = this.getView().getModel("oView1");
			var oModel = this.getOwnerComponent().getModel();
			var localInst = oModelView.getProperty("/localInstValue");
			var editBtnClicked = oModelView.getProperty("/editLocalInstDtClick");
			var aFilters = [];

			if (editBtnClicked) {
				var oTable = this.getView().byId("dadosDasAtividadesTable");
				var selectedItems = oTable.getSelectedItems()[0].getBindingContext("oView1").sPath;
				var oTableData = oModelView.getProperty(selectedItems);
				aFilters.push(new Filter("LocInstal", FilterOperator.EQ, oTableData.localInst));
				oModelView.setProperty("/editLocalInstDtClick", false);
			} else {
				aFilters.push(new Filter("LocInstal", FilterOperator.EQ, localInst))
				oModelView.setProperty("/dtLocalValue", "");
			}

			var sURL = "/DetalhamentoLocalSet";

			oModel.read(sURL, {
				filters: aFilters,
				success: function(oData) {
					oModelView.setProperty("/dtLocalInst", oData.results)
					oModelView.setProperty("/dtLocalInst2", oData.results)
				},

				error: function(error) {
					sap.ui.core.BusyIndicator.hide();
					var erro = JSON.parse(error.responseText)
					MessageBox.error(erro.error.message.value)
				}
			});

		},

		onFilter: function() {
			var oModelView = this.getView().getModel("oView1");
			var unidadeValue = this.getView().byId("unidadeMultiInput").getTokens();
			var localInstValue = this.getView().byId("localInstMultiInput").getTokens();
			var areaValue = this.getView().byId("areaMultiInput").getTokens();
			var oModel = this.getOwnerComponent().getModel();
			var oDateFrom = this.getView().byId("dataVencimento").getDateValue();
			var oDateTo = this.getView().byId("dataVencimento").getTo();

			var dateToConc = "";
			var dateFromConc = ""

			if (oDateFrom && oDateTo != null) {
				// Formating date for oData
				var dateFrom = new Date(oDateFrom);
				var getYearFrom = dateFrom.getUTCFullYear();
				var getMonthFrom = dateFrom.getUTCMonth() + 1;
				var getDayFrom = dateFrom.getUTCDate();
				var monthFrom = "";
				var dayFrom = "";

				if (getMonthFrom <= 9) {
					monthFrom = "" + 0 + getMonthFrom + "";
				} else {
					monthFrom = getMonthFrom;
				}

				if (getDayFrom <= 9) {
					dayFrom = "" + 0 + getDayFrom + "";
				} else {
					dayFrom = getDayFrom;
				}

				dateFromConc = "" + getYearFrom + monthFrom + dayFrom + "";

				var dateTo = new Date(oDateTo);
				var getYearTo = dateTo.getUTCFullYear();
				var getMonthTo = dateTo.getUTCMonth() + 1;
				var getDayTo = dateTo.getUTCDate();
				var monthTo = "";
				var dayTo = "";

				if (getMonthTo <= 9) {
					monthTo = "" + 0 + getMonthTo + "";
				} else {
					monthTo = getMonthTo;
				}

				if (getDayTo <= 9) {
					dayTo = "" + 0 + getDayTo + "";
				} else {
					dayTo = getDayTo;
				}
				dateToConc = "" + getYearTo + monthTo + dayTo + "";
			}

			var sURL = "/FiltrarDadosSet";
			var aFilters = [
				new Filter("dtVencimento", FilterOperator.BT, dateFromConc, dateToConc),
			];

			this.getDataMultiInput(unidadeValue, "unidade", aFilters);
			this.getDataMultiInput(localInstValue, "localInst", aFilters);
			this.getDataMultiInput(areaValue, "area", aFilters);

			sap.ui.core.BusyIndicator.show();
			oModel.read(sURL, {
				filters: aFilters,
				success: function(oData) {
					sap.ui.core.BusyIndicator.hide();
					oModelView.setProperty("/tableDadosDasAtividades", oData.results)
					oModelView.setProperty("/tableDadosDasAtividades2", oData.results);
					oModelView.setProperty("/buscaAtividadeEnabled", true);
					if (oData.results.length == 0) {
						MessageBox.information("Não há resultados para os parâmetros de pesquisa.");
						oModelView.setProperty("/buscaAtividadeEnabled", false);
					}
				},

				error: function(error) {
					sap.ui.core.BusyIndicator.hide();
					var erro = JSON.parse(error.responseText)
					MessageBox.error(erro.error.message.value)
				}
			});
		}
	});
});