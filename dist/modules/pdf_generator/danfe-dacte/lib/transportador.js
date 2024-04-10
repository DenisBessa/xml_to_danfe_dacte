"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var pessoa_1 = __importDefault(require("../../../../modules/pdf_generator/danfe-dacte/lib/pessoa"));
var Transportador = /** @class */ (function (_super) {
    __extends(Transportador, _super);
    function Transportador() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Transportador.prototype.getCodigoAntt = function () {
        return this._codigoAntt || "";
    };
    Transportador.prototype.comCodigoAntt = function (_codigoAntt) {
        if (_codigoAntt) {
            this._codigoAntt = _codigoAntt;
        }
        return this;
    };
    Transportador.prototype.getPlacaDoVeiculoFormatada = function () {
        return this.getPlacaDoVeiculo();
    };
    Transportador.prototype.getPlacaDoVeiculo = function () {
        return this._placaDoVeiculo || "";
    };
    Transportador.prototype.comPlacaDoVeiculo = function (_placaDoVeiculo) {
        return this._placaDoVeiculo;
    };
    Transportador.prototype.getUfDaPlacaDoVeiculo = function () {
        return this._ufDaPlacaDoVeiculo || "";
    };
    Transportador.prototype.comUfDaPlacaDoVeiculo = function (_ufDaPlacaDoVeiculo) {
        // if(siglasDosEstados.indexOf(_ufDaPlacaDoVeiculo) === -1) {
        //     throw new Error('Não é um estado válido');
        // }
        return this._ufDaPlacaDoVeiculo;
    };
    return Transportador;
}(pessoa_1.default));
exports.default = Transportador;
//# sourceMappingURL=transportador.js.map