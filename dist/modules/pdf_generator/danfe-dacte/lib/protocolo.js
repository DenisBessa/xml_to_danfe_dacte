"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Protocolo = /** @class */ (function () {
    function Protocolo() {
    }
    Protocolo.prototype.getCodigo = function () {
        return this._codigo || "";
    };
    Protocolo.prototype.comCodigo = function (_codigo) {
        this._codigo = _codigo;
        return this;
    };
    Protocolo.prototype.getData = function () {
        return this._data;
    };
    Protocolo.prototype.getDataFormatada = function () {
        if (this.getData()) {
            return this.getData();
        }
        return "";
    };
    Protocolo.prototype.comData = function (_data) {
        this._data = _data;
        return this;
    };
    Protocolo.prototype.getFormatacao = function () {
        var resultado = "";
        if (this.getCodigo()) {
            resultado += this.getCodigo();
        }
        if (this.getCodigo() && this.getData()) {
            resultado += " - ";
        }
        if (this.getData()) {
            resultado += this.getDataFormatada();
        }
        return resultado;
    };
    return Protocolo;
}());
exports.default = Protocolo;
//# sourceMappingURL=protocolo.js.map