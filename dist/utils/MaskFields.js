"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaskFields = void 0;
var MaskFields = /** @class */ (function () {
    function MaskFields() {
    }
    MaskFields.prototype.maskCnpj = function (cnpj) {
        if (cnpj) {
            return cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
        }
        return "";
    };
    MaskFields.prototype.maskIE = function (ie) {
        if (ie) {
            return ie.replace(/(\d{3})?(\d{3})?(\d{3})?(\d{4})/, "$1.$2.$3-$4");
        }
        return "";
    };
    MaskFields.prototype.maskCEP = function (cep) {
        if (cep) {
            return cep.replace(/^([\d]{2})\.*([\d]{3})-*([\d]{3})/, "$1.$2-$3");
        }
        return "";
    };
    MaskFields.prototype.maskNumber = function (number) {
        if (number) {
            return String(new Intl.NumberFormat("pt-BR", { minimumFractionDigits: 2 }).format(Number(number)));
        }
        return "0,00";
    };
    MaskFields.prototype.maskDate = function (data) {
        if (data) {
            if (data.length > 10)
                return String(new Intl.DateTimeFormat("pt-br").format(new Date(data)));
            return String(new Intl.DateTimeFormat("pt-br").format(new Date(data.replace(/-/g, "/"))));
        }
        return "";
    };
    MaskFields.prototype.maskTime = function (data) {
        if (data) {
            if (data.length > 19)
                data = data.slice(0, 19);
            return String(new Intl.DateTimeFormat("pt-br", {
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
            }).format(new Date(data)));
        }
        return "";
    };
    MaskFields.prototype.maskDateTime = function (data) {
        if (data) {
            return String("".concat(this.maskDate(data), " ").concat(this.maskTime(data)));
        }
        return "";
    };
    MaskFields.prototype.maskTelefone = function (telefone) {
        if (telefone) {
            return telefone.replace(/^(\d{2})(\d{5})(\d{4})/, "($1)$2-$3");
        }
        return "";
    };
    return MaskFields;
}());
exports.MaskFields = MaskFields;
//# sourceMappingURL=MaskFields.js.map