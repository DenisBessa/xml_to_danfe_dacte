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
var Emitente = /** @class */ (function (_super) {
    __extends(Emitente, _super);
    function Emitente() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Emitente.prototype.getLogotipo = function () {
        return this._logotipo || "";
    };
    Emitente.prototype.comLogotipo = function (_logotipo) {
        this._logotipo = _logotipo;
        return this;
    };
    Emitente.prototype.getInscricaoMunicipal = function () {
        return this._inscricaoMunicipal || "";
    };
    Emitente.prototype.comInscricaoMunicipal = function (_inscricaoMunicipal) {
        this._inscricaoMunicipal = _inscricaoMunicipal;
        return this;
    };
    return Emitente;
}(pessoa_1.default));
exports.default = Emitente;
//# sourceMappingURL=emitente.js.map