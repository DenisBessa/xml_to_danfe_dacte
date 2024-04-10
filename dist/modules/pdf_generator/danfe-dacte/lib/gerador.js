"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var geradorDePdf_1 = __importDefault(require("../../../../modules/pdf_generator/danfe-dacte/lib/geradores/geradorDePdf"));
var geradorPdfCteOs_1 = __importDefault(require("../../../../modules/pdf_generator/danfe-dacte/lib/geradores/geradorPdfCteOs"));
var gerarPdfCTE_1 = __importDefault(require("../../../../modules/pdf_generator/danfe-dacte/lib/geradores/gerarPdfCTE"));
var Gerador = /** @class */ (function () {
    function Gerador(danfe) {
        this._danfe = danfe;
    }
    Gerador.prototype.gerarPDF = function (opcoes, callback) {
        if (typeof opcoes === "function") {
            callback = opcoes;
            opcoes = {};
        }
        (0, geradorDePdf_1.default)(this._danfe, opcoes, callback);
    };
    Gerador.prototype.gerarCTE = function (opcoes, callback) {
        if (typeof opcoes === "function") {
            callback = opcoes;
            opcoes = {};
        }
        (0, gerarPdfCTE_1.default)(this._danfe, opcoes, callback);
    };
    Gerador.prototype.gerarCTEOS = function (opcoes, callback) {
        if (typeof opcoes === "function") {
            callback = opcoes;
            opcoes = {};
        }
        (0, geradorPdfCteOs_1.default)(this._danfe, opcoes, callback);
    };
    return Gerador;
}());
exports.default = Gerador;
//# sourceMappingURL=gerador.js.map