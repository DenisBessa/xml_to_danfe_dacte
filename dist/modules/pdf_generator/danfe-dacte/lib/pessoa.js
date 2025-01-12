"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var endereco_1 = __importDefault(require("../../../../modules/pdf_generator/danfe-dacte/lib/endereco"));
var Pessoa = (function () {
    function Pessoa() {
        this.comEndereco(new endereco_1.default());
    }
    Pessoa.prototype.getNome = function () {
        return this._nome || "";
    };
    Pessoa.prototype.comNome = function (_nome) {
        this._nome = _nome;
        return this;
    };
    Pessoa.prototype.getRegistroNacional = function () {
        return this._registroNacional || "";
    };
    Pessoa.prototype.getRegistroNacionalFormatado = function () {
        return this.getRegistroNacional();
    };
    Pessoa.prototype.comRegistroNacional = function (_registroNacional) {
        // if(!eRegistroNacional(_registroNacional)) {
        //     throw new Error('Não é um registro nacional válido');
        // }
        this._registroNacional = _registroNacional;
        return this._registroNacional;
    };
    Pessoa.prototype.getEndereco = function () {
        return this._endereco;
    };
    Pessoa.prototype.comEndereco = function (_endereco) {
        this._endereco = _endereco;
        return this;
    };
    Pessoa.prototype.getInscricaoEstadual = function () {
        return this._inscricaoEstadual || "";
    };
    Pessoa.prototype.comInscricaoEstadual = function (_inscricaoEstadual) {
        // if(!ie(_inscricaoEstadual)) {
        //     throw new Error('Inscrição estadual insválida');
        // }
        this._inscricaoEstadual = _inscricaoEstadual;
        return this._inscricaoEstadual;
    };
    Pessoa.prototype.getTelefone = function () {
        return this._telefone || "";
    };
    Pessoa.prototype.getTelefoneFormatado = function () {
        return this.getTelefone();
    };
    Pessoa.prototype.comTelefone = function (_telefone) {
        // if(!eTelefone(_telefone)) {
        //     throw new Error('Não é um telefone válido (o DDD também está sendo validado)');
        // }
        this._telefone = _telefone;
        return this._telefone;
    };
    Pessoa.prototype.getEmail = function () {
        return this._email || "";
    };
    Pessoa.prototype.comEmail = function (_email) {
        // if(!eEmail(_email)) {
        //     throw new Error('Não é um email válido');
        // }
        this._email = _email;
        return this;
    };
    return Pessoa;
})();
exports.default = Pessoa;
//# sourceMappingURL=pessoa.js.map