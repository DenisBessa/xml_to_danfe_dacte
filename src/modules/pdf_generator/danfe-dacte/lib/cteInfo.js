export default class CteInfo {
	// TIPO CTE
	comTpCte(_tpCte) {
		this._tpCte = _tpCte;
		return this;
	}
	getCodTpCte() {
		return this._tpCte;
	}
	getTpCte() {
		return (
			{
				0: "Normal",
				1: "Complemento",
				2: "Anulação",
				3: "Substituto",
			}[this.getCodTpCte()] || ""
		);
	}
	// TIPO CTE
	//TIPO SERVIÇO
	comTpServ(_tpServ) {
		this._tpServ = _tpServ;
		return this;
	}
	getCodTpServ() {
		return this._tpServ;
	}
	getTpServ() {
		return (
			{
				0: "Normal",
				1: "Subcontratação",
				2: "Redespacho",
				3: "Redespacho Intermediário",
				4: "Multimodal",
			}[this.getCodTpServ()] || ""
		);
	}
	getTipoServ() {
		return (
			{
				6: "Transporte de Pessoas",
				7: "Transporte de Valores",
				8: "Excesso de Bagagem",
			}[this.getCodTpServ()] || ""
		);
	}
	//TIPO SERVIÇO
	//TOMADOR DO SERVIÇO -- tag 'toma' no xml
	comToma(_toma) {
		this._toma = _toma;
		return this;
	}
	getCodToma() {
		return this._toma;
	}
	getToma() {
		return (
			{
				0: "Remetente",
				1: "Expeditor",
				2: "Recebedor",
				3: "Destinatario",
			}[this.getCodToma()] || ""
		);
	}
	//TOMADOR DO SERVIÇO -- tag 'toma' no xml
	//MODAL DE FRETE
	comModalFrete(_modalidadeDoFrete) {
		this._modalidadeDoFrete = _modalidadeDoFrete;
		return this;
	}
	getModalCodFrete() {
		return this._modalidadeDoFrete;
	}
	getModalFrete() {
		return (
			{
				"01": "Rodoviario",
				"02": "Aéreo",
				"03": "Aquaviário",
				"04": "Ferroviário",
				"05": "Dutoviário",
				"06": "Multimodal",
			}[this.getModalCodFrete()] || ""
		);
	}
	//MODAL DE FRETE
	//CFOP FRETE
	comCfopFrete(_cfopFrete) {
		this._cfopFrete = _cfopFrete;
		return this;
	}
	getCfopFrete() {
		return this._cfopFrete;
	}
	//CFOP FRETE
	comNatOp(_natOp) {
		this._natOp = _natOp;
		return this;
	}
	getNatOp() {
		return this._natOp;
	}
	comCFOP(_cfop) {
		this._cfop = _cfop;
		return this;
	}
	getCFOP() {
		return this._cfop;
	}
	//INICIO DA PRESTAÇÃO -- Enviar concatenado municipio e uf
	comInicioPrestacao(_inicioPrestacao) {
		this._inicioPrestacao = _inicioPrestacao;
		return this;
	}
	getInicioPrestacao() {
		return this._inicioPrestacao;
	}
	//INICIO DA PRESTAÇÃO
	// FINAL DA PRESTAÇÃO -- Enviar concatenado municipio e uf
	comFinalDaPrestacao(_finalPrestacao) {
		this._finalPrestacao = _finalPrestacao;
		return this;
	}
	getFinalDaPrestacao() {
		return this._finalPrestacao;
	}
	// FINAL DA PRESTAÇÃO
	//MODELO
	comModelo(_modelo) {
		this._modelo = _modelo;
		return this;
	}
	getModelo() {
		return this._modelo;
	}
	//MODELO
	//PRODUTO PREDOMINANTE
	comProdPred(_prodPred) {
		if (_prodPred) {
			this._prodPred = String(_prodPred).toUpperCase();
		}
		return this;
	}
	getProdPred() {
		return this._prodPred;
	}
	//PRODUTO PREDOMINANTE
	//MANIPULAÇAO DE SERVIÇO CTEOS
	getPrestServ(_prestServ) {
		if (_prestServ) {
			this._prodPred = String(_prestServ).toUpperCase();
		}
		return this;
	}
	//CteInfo.prototype.
	//MANIPULAÇÃO DO ARRAY DE CARGA
	retornaUnidadeMedida(_codUniMed) {
		return (
			{
				"00": "M3",
				"01": "KG",
				"02": "TON",
				"03": "UN",
				"04": "L",
				"05": "MMBTU",
			}[_codUniMed] || ""
		);
	}
	comCarga(_arrayCarga) {
		if (Array.isArray(_arrayCarga) && _arrayCarga) {
			const cubagem = _arrayCarga.filter((carga) => {
				return carga.tpMed._text === "M3";
			});

			if (cubagem.length > 0) {
				this._cubagem = `${cubagem[0].qCarga._text} / ${this.retornaUnidadeMedida(cubagem[0].cUnid._text)}`;
			}

			const volume = _arrayCarga.filter((carga) => {
				return carga.tpMed._text === "VOLUMES";
			});

			if (volume.length > 0) {
				this._volume = `${volume[0].qCarga._text} / ${this.retornaUnidadeMedida(volume[0].cUnid._text)}`;
			}

			const _medidas = _arrayCarga.filter((carga) => {
				return !["M3", "VOLUMES"].includes(carga.tpMed._text);
			});

			if (_medidas.length > 0) {
				this._medidas = _medidas;
			}
		} else if (_arrayCarga) {
			switch (_arrayCarga.tpMed._text) {
				case "VOLUMES":
					this._volume = `${_arrayCarga.qCarga._text} ${this.retornaUnidadeMedida(_arrayCarga.cUnid._text)}`;
					break;
				case "M3":
					this._cubagem = `${_arrayCarga.qCarga._text} ${this.retornaUnidadeMedida(_arrayCarga.cUnid._text)}`;
					break;
				default:
					this._medidas = _arrayCarga;
			}
		}

		return this;
	}
	getMedidas() {
		return this._medidas;
	}
	getCubagem() {
		return this._cubagem;
	}
	getVolume() {
		return this._volume;
	}
	//MANIPULAÇÃO DO ARRAY DE CARGA
	//TAG OBSERVAÇÃO
	comObservacao(_observacao) {
		this._observacao = _observacao;
		return this;
	}
	getObservacao() {
		return this._observacao;
	}
	//TAG OBSERVAÇÃO
	//DADOS MODAL RODOVIÁROP
	//RNTRC
	comRNTRC(_RNTRC) {
		this._RNTRC = _RNTRC;
		return this;
	}
	getRNTRC() {
		return this._RNTRC;
	}
	//RNTRC
	//CIOT
	comCIOT(_CIOT) {
		this._CIOT = _CIOT;
		return this;
	}
	getCIOT() {
		return this._CIOT;
	}
	//CIOT
	//DATA DE ENTREGA
	comDataEntrega(_dataEntrega) {
		this._dataEntrega = _dataEntrega;
		return this;
	}
	getDataEntrega() {
		return this._dataEntrega;
	}
	//DATA DE ENTREGA
	//COMPONENTE PRESTAÇÃO DE SERVIÇO
	comComponenteServico(_compServ) {
		this._compServ = _compServ;
		return this;
	}
	getComponenteServico() {
		return this._compServ;
	}
	//COMPONENTE PRESTAÇÃO DE SERVIÇO
	//Outras caracteristicas da carga
	comOutrasCaracCarga(_caracCarga) {
		this._caracCarga = _caracCarga;
		return this;
	}
	getCaracCarga() {
		return this._caracCarga;
	}
	//Outras caracteristicas da carga
	comDescServico(_comDescServico) {
		this._comDescServico = _comDescServico;
		return this;
	}
	getDescServico() {
		return this._comDescServico;
	}
	comNumeroRegEstadual(_comNumEstadual) {
		this._comNumEstadual = _comNumEstadual;
		return this;
	}
	getNumeroRegEstadual() {
		return this._comNumEstadual;
	}
	comPlaca(_comPlaca) {
		this._comPlaca = _comPlaca;
		return this;
	}
	getPlaca() {
		return this._comPlaca;
	}
	comRenavam(_comRenavam) {
		this._comRenavam = _comRenavam;
		return this;
	}
	getRenavam() {
		return this._comRenavam;
	}
	comUFveiculo(_comUF) {
		this._comUF = _comUF;
		return this;
	}
	getUFveiculo() {
		return this._comUF;
	}
	// SEGURO DA CARGA
	comNomeSeg(_xSeg) {
		this._xSeg = _xSeg;
		return this._xSeg;
	}
	getNomeSeg() {
		return this._xSeg;
	}
	comRespSeg(_xResp) {
		this._xResp = _xResp;
		return this._xResp;
	}
	getRespSeg() {
		return this._xResp;
	}
	comApol(_nApol) {
		this._nApol = _nApol;
		return this._nApol;
	}
	getApol() {
		return this._nApol;
	}
	// Modal rodoviário
	getRodo() {
		return this._rodoTaf;
	}
	comRodo(_rodoTaf) {
		this._rodoTaf = _rodoTaf;
		return this._rodoTaf;
	}
	// Carga OS
	getCargaOS() {
		return this._cargaOS;
	}
	comCargaOS(_cargaOS) {
		this._cargaOS = _cargaOS;
		return this._cargaOS;
	}
}
