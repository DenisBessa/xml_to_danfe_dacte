"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Duplicata = /** @class */ (function () {
    function Duplicata() {
    }
    Duplicata.prototype.getNumero = function () {
        return this._numero;
    };
    Duplicata.prototype.comNumero = function (_numero) {
        this._numero = _numero;
        return this;
    };
    Duplicata.prototype.getVencimento = function () {
        return this._vencimento;
    };
    Duplicata.prototype.getVencimentoFormatado = function () {
        if (this._vencimento) {
            return this._vencimento;
        }
        return "";
    };
    Duplicata.prototype.comVencimento = function (_vencimento) {
        this._vencimento = _vencimento;
        return this;
    };
    Duplicata.prototype.getValor = function () {
        return this._valor;
    };
    Duplicata.prototype.getValorFormatado = function () {
        return this._valor || 0;
    };
    Duplicata.prototype.comValor = function (_valor) {
        this._valor = _valor;
        return this;
    };
    return Duplicata;
}());
exports.default = Duplicata;
//# sourceMappingURL=duplicata.js.map