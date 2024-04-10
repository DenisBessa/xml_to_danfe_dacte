"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CteInfo = /** @class */ (function () {
    function CteInfo() {
    }
    // TIPO CTE
    CteInfo.prototype.comTpCte = function (_tpCte) {
        this._tpCte = _tpCte;
        return this;
    };
    CteInfo.prototype.getCodTpCte = function () {
        return this._tpCte;
    };
    CteInfo.prototype.getTpCte = function () {
        return ({
            0: "Normal",
            1: "Complemento",
            2: "Anulação",
            3: "Substituto",
        }[this.getCodTpCte()] || "");
    };
    // TIPO CTE
    //TIPO SERVIÇO
    CteInfo.prototype.comTpServ = function (_tpServ) {
        this._tpServ = _tpServ;
        return this;
    };
    CteInfo.prototype.getCodTpServ = function () {
        return this._tpServ;
    };
    CteInfo.prototype.getTpServ = function () {
        return ({
            0: "Normal",
            1: "Subcontratação",
            2: "Redespacho",
            3: "Redespacho Intermediário",
            4: "Multimodal",
        }[this.getCodTpServ()] || "");
    };
    CteInfo.prototype.getTipoServ = function () {
        return ({
            6: "Transporte de Pessoas",
            7: "Transporte de Valores",
            8: "Excesso de Bagagem",
        }[this.getCodTpServ()] || "");
    };
    //TIPO SERVIÇO
    //TOMADOR DO SERVIÇO -- tag 'toma' no xml
    CteInfo.prototype.comToma = function (_toma) {
        this._toma = _toma;
        return this;
    };
    CteInfo.prototype.getCodToma = function () {
        return this._toma;
    };
    CteInfo.prototype.getToma = function () {
        return ({
            0: "Remetente",
            1: "Expeditor",
            2: "Recebedor",
            3: "Destinatario",
        }[this.getCodToma()] || "");
    };
    //TOMADOR DO SERVIÇO -- tag 'toma' no xml
    //MODAL DE FRETE
    CteInfo.prototype.comModalFrete = function (_modalidadeDoFrete) {
        this._modalidadeDoFrete = _modalidadeDoFrete;
        return this;
    };
    CteInfo.prototype.getModalCodFrete = function () {
        return this._modalidadeDoFrete;
    };
    CteInfo.prototype.getModalFrete = function () {
        return ({
            "01": "Rodoviario",
            "02": "Aéreo",
            "03": "Aquaviário",
            "04": "Ferroviário",
            "05": "Dutoviário",
            "06": "Multimodal",
        }[this.getModalCodFrete()] || "");
    };
    //MODAL DE FRETE
    //CFOP FRETE
    CteInfo.prototype.comCfopFrete = function (_cfopFrete) {
        this._cfopFrete = _cfopFrete;
        return this;
    };
    CteInfo.prototype.getCfopFrete = function () {
        return this._cfopFrete;
    };
    //CFOP FRETE
    CteInfo.prototype.comNatOp = function (_natOp) {
        this._natOp = _natOp;
        return this;
    };
    CteInfo.prototype.getNatOp = function () {
        return this._natOp;
    };
    CteInfo.prototype.comCFOP = function (_cfop) {
        this._cfop = _cfop;
        return this;
    };
    CteInfo.prototype.getCFOP = function () {
        return this._cfop;
    };
    //INICIO DA PRESTAÇÃO -- Enviar concatenado municipio e uf
    CteInfo.prototype.comInicioPrestacao = function (_inicioPrestacao) {
        this._inicioPrestacao = _inicioPrestacao;
        return this;
    };
    CteInfo.prototype.getInicioPrestacao = function () {
        return this._inicioPrestacao;
    };
    //INICIO DA PRESTAÇÃO
    // FINAL DA PRESTAÇÃO -- Enviar concatenado municipio e uf
    CteInfo.prototype.comFinalDaPrestacao = function (_finalPrestacao) {
        this._finalPrestacao = _finalPrestacao;
        return this;
    };
    CteInfo.prototype.getFinalDaPrestacao = function () {
        return this._finalPrestacao;
    };
    // FINAL DA PRESTAÇÃO
    //MODELO
    CteInfo.prototype.comModelo = function (_modelo) {
        this._modelo = _modelo;
        return this;
    };
    CteInfo.prototype.getModelo = function () {
        return this._modelo;
    };
    //MODELO
    //PRODUTO PREDOMINANTE
    CteInfo.prototype.comProdPred = function (_prodPred) {
        if (_prodPred) {
            this._prodPred = String(_prodPred).toUpperCase();
        }
        return this;
    };
    CteInfo.prototype.getProdPred = function () {
        return this._prodPred;
    };
    //PRODUTO PREDOMINANTE
    //MANIPULAÇAO DE SERVIÇO CTEOS
    CteInfo.prototype.getPrestServ = function (_prestServ) {
        if (_prestServ) {
            this._prodPred = String(_prestServ).toUpperCase();
        }
        return this;
    };
    //CteInfo.prototype.
    //MANIPULAÇÃO DO ARRAY DE CARGA
    CteInfo.prototype.retornaUnidadeMedida = function (_codUniMed) {
        return ({
            "00": "M3",
            "01": "KG",
            "02": "TON",
            "03": "UN",
            "04": "L",
            "05": "MMBTU",
        }[_codUniMed] || "");
    };
    CteInfo.prototype.comCarga = function (_arrayCarga) {
        if (Array.isArray(_arrayCarga) && _arrayCarga) {
            var cubagem = _arrayCarga.filter(function (carga) {
                return carga.tpMed._text === "M3";
            });
            if (cubagem.length > 0) {
                this._cubagem = "".concat(cubagem[0].qCarga._text, " / ").concat(this.retornaUnidadeMedida(cubagem[0].cUnid._text));
            }
            var volume = _arrayCarga.filter(function (carga) {
                return carga.tpMed._text === "VOLUMES";
            });
            if (volume.length > 0) {
                this._volume = "".concat(volume[0].qCarga._text, " / ").concat(this.retornaUnidadeMedida(volume[0].cUnid._text));
            }
            var _medidas = _arrayCarga.filter(function (carga) {
                return !["M3", "VOLUMES"].includes(carga.tpMed._text);
            });
            if (_medidas.length > 0) {
                this._medidas = _medidas;
            }
        }
        else if (_arrayCarga) {
            switch (_arrayCarga.tpMed._text) {
                case "VOLUMES":
                    this._volume = "".concat(_arrayCarga.qCarga._text, " ").concat(this.retornaUnidadeMedida(_arrayCarga.cUnid._text));
                    break;
                case "M3":
                    this._cubagem = "".concat(_arrayCarga.qCarga._text, " ").concat(this.retornaUnidadeMedida(_arrayCarga.cUnid._text));
                    break;
                default:
                    this._medidas = _arrayCarga;
            }
        }
        return this;
    };
    CteInfo.prototype.getMedidas = function () {
        return this._medidas;
    };
    CteInfo.prototype.getCubagem = function () {
        return this._cubagem;
    };
    CteInfo.prototype.getVolume = function () {
        return this._volume;
    };
    //MANIPULAÇÃO DO ARRAY DE CARGA
    //TAG OBSERVAÇÃO
    CteInfo.prototype.comObservacao = function (_observacao) {
        this._observacao = _observacao;
        return this;
    };
    CteInfo.prototype.getObservacao = function () {
        return this._observacao;
    };
    //TAG OBSERVAÇÃO
    //DADOS MODAL RODOVIÁROP
    //RNTRC
    CteInfo.prototype.comRNTRC = function (_RNTRC) {
        this._RNTRC = _RNTRC;
        return this;
    };
    CteInfo.prototype.getRNTRC = function () {
        return this._RNTRC;
    };
    //RNTRC
    //CIOT
    CteInfo.prototype.comCIOT = function (_CIOT) {
        this._CIOT = _CIOT;
        return this;
    };
    CteInfo.prototype.getCIOT = function () {
        return this._CIOT;
    };
    //CIOT
    //DATA DE ENTREGA
    CteInfo.prototype.comDataEntrega = function (_dataEntrega) {
        this._dataEntrega = _dataEntrega;
        return this;
    };
    CteInfo.prototype.getDataEntrega = function () {
        return this._dataEntrega;
    };
    //DATA DE ENTREGA
    //COMPONENTE PRESTAÇÃO DE SERVIÇO
    CteInfo.prototype.comComponenteServico = function (_compServ) {
        this._compServ = _compServ;
        return this;
    };
    CteInfo.prototype.getComponenteServico = function () {
        return this._compServ;
    };
    //COMPONENTE PRESTAÇÃO DE SERVIÇO
    //Outras caracteristicas da carga
    CteInfo.prototype.comOutrasCaracCarga = function (_caracCarga) {
        this._caracCarga = _caracCarga;
        return this;
    };
    CteInfo.prototype.getCaracCarga = function () {
        return this._caracCarga;
    };
    //Outras caracteristicas da carga
    CteInfo.prototype.comDescServico = function (_comDescServico) {
        this._comDescServico = _comDescServico;
        return this;
    };
    CteInfo.prototype.getDescServico = function () {
        return this._comDescServico;
    };
    CteInfo.prototype.comNumeroRegEstadual = function (_comNumEstadual) {
        this._comNumEstadual = _comNumEstadual;
        return this;
    };
    CteInfo.prototype.getNumeroRegEstadual = function () {
        return this._comNumEstadual;
    };
    CteInfo.prototype.comPlaca = function (_comPlaca) {
        this._comPlaca = _comPlaca;
        return this;
    };
    CteInfo.prototype.getPlaca = function () {
        return this._comPlaca;
    };
    CteInfo.prototype.comRenavam = function (_comRenavam) {
        this._comRenavam = _comRenavam;
        return this;
    };
    CteInfo.prototype.getRenavam = function () {
        return this._comRenavam;
    };
    CteInfo.prototype.comUFveiculo = function (_comUF) {
        this._comUF = _comUF;
        return this;
    };
    CteInfo.prototype.getUFveiculo = function () {
        return this._comUF;
    };
    // SEGURO DA CARGA
    CteInfo.prototype.comNomeSeg = function (_xSeg) {
        this._xSeg = _xSeg;
        return this._xSeg;
    };
    CteInfo.prototype.getNomeSeg = function () {
        return this._xSeg;
    };
    CteInfo.prototype.comRespSeg = function (_xResp) {
        this._xResp = _xResp;
        return this._xResp;
    };
    CteInfo.prototype.getRespSeg = function () {
        return this._xResp;
    };
    CteInfo.prototype.comApol = function (_nApol) {
        this._nApol = _nApol;
        return this._nApol;
    };
    CteInfo.prototype.getApol = function () {
        return this._nApol;
    };
    // Modal rodoviário
    CteInfo.prototype.getRodo = function () {
        return this._rodoTaf;
    };
    CteInfo.prototype.comRodo = function (_rodoTaf) {
        this._rodoTaf = _rodoTaf;
        return this._rodoTaf;
    };
    // Carga OS
    CteInfo.prototype.getCargaOS = function () {
        return this._cargaOS;
    };
    CteInfo.prototype.comCargaOS = function (_cargaOS) {
        this._cargaOS = _cargaOS;
        return this._cargaOS;
    };
    return CteInfo;
}());
exports.default = CteInfo;
//# sourceMappingURL=cteInfo.js.map