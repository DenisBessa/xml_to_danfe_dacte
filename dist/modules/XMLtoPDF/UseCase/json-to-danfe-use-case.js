"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonToDanfe = void 0;
var danfe_1 = __importDefault(require("../../../modules/pdf_generator/danfe-dacte/lib/danfe"));
var destinatario_1 = __importDefault(require("../../../modules/pdf_generator/danfe-dacte/lib/destinatario"));
var duplicata_1 = __importDefault(require("../../../modules/pdf_generator/danfe-dacte/lib/duplicata"));
var emitente_1 = __importDefault(require("../../../modules/pdf_generator/danfe-dacte/lib/emitente"));
var endereco_1 = __importDefault(require("../../../modules/pdf_generator/danfe-dacte/lib/endereco"));
var fatura_1 = __importDefault(require("../../../modules/pdf_generator/danfe-dacte/lib/fatura"));
var gerador_1 = __importDefault(require("../../../modules/pdf_generator/danfe-dacte/lib/gerador"));
var impostos_1 = __importDefault(require("../../../modules/pdf_generator/danfe-dacte/lib/impostos"));
var item_1 = __importDefault(require("../../../modules/pdf_generator/danfe-dacte/lib/item"));
var protocolo_1 = __importDefault(require("../../../modules/pdf_generator/danfe-dacte/lib/protocolo"));
var transportador_1 = __importDefault(require("../../../modules/pdf_generator/danfe-dacte/lib/transportador"));
var volumes_1 = __importDefault(require("../../../modules/pdf_generator/danfe-dacte/lib/volumes"));
var MaskFields_1 = require("../../../utils/MaskFields");
var JsonToDanfe = /** @class */ (function () {
    function JsonToDanfe() {
    }
    JsonToDanfe.prototype.find_ICMS_prod = function (imposto) {
        var tipoIcms = JSON.stringify(imposto).substring(2, 8);
        return {
            ICMS00: imposto.ICMS00,
            ICMS10: imposto.ICMS10,
            ICMS30: imposto.ICMS30,
            ICMS40: imposto.ICMS40,
            ICMS51: imposto.ICMS51,
            ICMS60: imposto.ICMS60,
            ICMS70: imposto.ICMS70,
            ICMS90: imposto.ICMS90,
            ICMS20: imposto.ICMS20,
        }[tipoIcms];
    };
    JsonToDanfe.prototype.jsonToPDF = function (json) {
        return __awaiter(this, void 0, void 0, function () {
            var maskFields, pdfBase64, emitente, destinatario, transportador, protocolo, impostos, volumes, fatura, danfe, _i, _a, item, icms, icms;
            var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32, _33, _34, _35, _36, _37, _38, _39, _40, _41, _42, _43, _44, _45, _46, _47, _48, _49, _50, _51, _52, _53, _54, _55, _56, _57, _58, _59, _60, _61, _62, _63, _64, _65, _66, _67, _68, _69, _70, _71, _72, _73, _74, _75, _76, _77, _78, _79, _80, _81, _82, _83, _84, _85, _86, _87, _88, _89, _90, _91, _92, _93, _94, _95, _96, _97, _98, _99, _100, _101, _102, _103, _104, _105, _106, _107, _108, _109, _110, _111, _112, _113, _114, _115, _116, _117, _118, _119, _120, _121, _122, _123, _124, _125, _126, _127, _128, _129, _130, _131, _132, _133, _134, _135, _136, _137, _138, _139, _140, _141, _142, _143, _144, _145, _146, _147, _148, _149, _150, _151, _152, _153, _154, _155, _156, _157, _158, _159, _160, _161, _162, _163, _164, _165, _166, _167, _168, _169, _170, _171, _172, _173, _174, _175, _176, _177, _178, _179, _180, _181, _182, _183, _184, _185, _186, _187, _188, _189, _190, _191, _192, _193, _194, _195, _196, _197, _198, _199, _200, _201, _202, _203, _204, _205, _206, _207, _208, _209, _210, _211, _212, _213, _214, _215, _216, _217, _218, _219, _220, _221, _222, _223, _224, _225, _226, _227, _228, _229, _230, _231, _232, _233, _234, _235, _236, _237, _238, _239, _240, _241, _242, _243, _244, _245, _246, _247, _248, _249, _250, _251, _252, _253, _254, _255, _256, _257, _258, _259, _260, _261, _262, _263, _264, _265, _266, _267, _268, _269, _270, _271, _272, _273, _274, _275, _276, _277, _278, _279, _280, _281, _282, _283, _284, _285, _286, _287, _288, _289, _290, _291, _292, _293, _294, _295, _296, _297, _298, _299, _300, _301, _302, _303, _304, _305, _306, _307, _308, _309, _310, _311, _312, _313, _314, _315, _316, _317, _318, _319, _320, _321, _322, _323, _324, _325, _326, _327, _328, _329, _330, _331, _332, _333, _334, _335, _336, _337, _338, _339, _340, _341, _342, _343, _344, _345, _346, _347, _348, _349, _350, _351, _352, _353, _354, _355, _356, _357, _358, _359, _360, _361, _362, _363, _364, _365, _366;
            return __generator(this, function (_367) {
                maskFields = new MaskFields_1.MaskFields();
                pdfBase64 = "";
                emitente = new emitente_1.default();
                emitente.comNome((_c = (_b = json.nfeProc) === null || _b === void 0 ? void 0 : _b.NFe.infNFe.emit.xNome) === null || _c === void 0 ? void 0 : _c._text);
                emitente.comRegistroNacional(maskFields.maskCnpj((_e = (_d = json.nfeProc) === null || _d === void 0 ? void 0 : _d.NFe.infNFe.emit.CNPJ) === null || _e === void 0 ? void 0 : _e._text));
                emitente.comInscricaoEstadual((_g = (_f = json.nfeProc) === null || _f === void 0 ? void 0 : _f.NFe.infNFe.emit.IE) === null || _g === void 0 ? void 0 : _g._text);
                emitente.comTelefone((_l = (_k = (_j = (_h = json.nfeProc) === null || _h === void 0 ? void 0 : _h.NFe.infNFe.emit) === null || _j === void 0 ? void 0 : _j.enderEmit) === null || _k === void 0 ? void 0 : _k.fone) === null || _l === void 0 ? void 0 : _l._text);
                emitente.comEmail((_q = (_p = (_o = (_m = json.nfeProc) === null || _m === void 0 ? void 0 : _m.NFe.infNFe.emit) === null || _o === void 0 ? void 0 : _o.enderEmit) === null || _p === void 0 ? void 0 : _p.email) === null || _q === void 0 ? void 0 : _q._text);
                emitente.comEndereco(new endereco_1.default()
                    .comLogradouro((_s = (_r = json.nfeProc) === null || _r === void 0 ? void 0 : _r.NFe.infNFe.emit.enderEmit.xLgr) === null || _s === void 0 ? void 0 : _s._text)
                    .comNumero("N\u00B0".concat((_u = (_t = json.nfeProc) === null || _t === void 0 ? void 0 : _t.NFe.infNFe.emit.enderEmit.nro) === null || _u === void 0 ? void 0 : _u._text))
                    .comComplemento((_w = (_v = json.nfeProc) === null || _v === void 0 ? void 0 : _v.NFe.infNFe.emit.enderEmit.xCpl) === null || _w === void 0 ? void 0 : _w._text)
                    .comCep(maskFields.maskCEP((_y = (_x = json.nfeProc) === null || _x === void 0 ? void 0 : _x.NFe.infNFe.emit.enderEmit.CEP) === null || _y === void 0 ? void 0 : _y._text))
                    .comBairro((_0 = (_z = json.nfeProc) === null || _z === void 0 ? void 0 : _z.NFe.infNFe.emit.enderEmit.xBairro) === null || _0 === void 0 ? void 0 : _0._text)
                    .comMunicipio((_3 = (_2 = (_1 = json.nfeProc) === null || _1 === void 0 ? void 0 : _1.NFe.infNFe.emit.enderEmit) === null || _2 === void 0 ? void 0 : _2.xMun) === null || _3 === void 0 ? void 0 : _3._text)
                    .comCidade((_5 = (_4 = json.nfeProc) === null || _4 === void 0 ? void 0 : _4.NFe.infNFe.emit.enderEmit.xMun) === null || _5 === void 0 ? void 0 : _5._text)
                    .comUf((_7 = (_6 = json.nfeProc) === null || _6 === void 0 ? void 0 : _6.NFe.infNFe.emit.enderEmit.UF) === null || _7 === void 0 ? void 0 : _7._text));
                destinatario = new destinatario_1.default();
                destinatario.comNome((_9 = (_8 = json.nfeProc) === null || _8 === void 0 ? void 0 : _8.NFe.infNFe.dest.xNome) === null || _9 === void 0 ? void 0 : _9._text);
                destinatario.comRegistroNacional(maskFields.maskCnpj((_11 = (_10 = json.nfeProc) === null || _10 === void 0 ? void 0 : _10.NFe.infNFe.dest.CNPJ) === null || _11 === void 0 ? void 0 : _11._text));
                destinatario.comTelefone((_16 = (_15 = (_14 = (_13 = (_12 = json.nfeProc) === null || _12 === void 0 ? void 0 : _12.NFe.infNFe) === null || _13 === void 0 ? void 0 : _13.dest) === null || _14 === void 0 ? void 0 : _14.enderDest) === null || _15 === void 0 ? void 0 : _15.fone) === null || _16 === void 0 ? void 0 : _16._text);
                destinatario.comInscricaoEstadual((_20 = (_19 = (_18 = (_17 = json.nfeProc) === null || _17 === void 0 ? void 0 : _17.NFe.infNFe) === null || _18 === void 0 ? void 0 : _18.dest) === null || _19 === void 0 ? void 0 : _19.IE) === null || _20 === void 0 ? void 0 : _20._text);
                destinatario.comEndereco(new endereco_1.default()
                    .comLogradouro((_22 = (_21 = json.nfeProc) === null || _21 === void 0 ? void 0 : _21.NFe.infNFe.dest.enderDest.xLgr) === null || _22 === void 0 ? void 0 : _22._text)
                    .comNumero((_24 = (_23 = json.nfeProc) === null || _23 === void 0 ? void 0 : _23.NFe.infNFe.dest.enderDest.nro) === null || _24 === void 0 ? void 0 : _24._text)
                    // .comComplemento("complemento")
                    .comCep(maskFields.maskCEP((_26 = (_25 = json.nfeProc) === null || _25 === void 0 ? void 0 : _25.NFe.infNFe.dest.enderDest.CEP) === null || _26 === void 0 ? void 0 : _26._text))
                    .comBairro((_28 = (_27 = json.nfeProc) === null || _27 === void 0 ? void 0 : _27.NFe.infNFe.dest.enderDest.xBairro) === null || _28 === void 0 ? void 0 : _28._text)
                    .comMunicipio((_30 = (_29 = json.nfeProc) === null || _29 === void 0 ? void 0 : _29.NFe.infNFe.dest.enderDest.xMun) === null || _30 === void 0 ? void 0 : _30._text)
                    .comCidade((_32 = (_31 = json.nfeProc) === null || _31 === void 0 ? void 0 : _31.NFe.infNFe.dest.enderDest.xMun) === null || _32 === void 0 ? void 0 : _32._text)
                    .comUf((_34 = (_33 = json.nfeProc) === null || _33 === void 0 ? void 0 : _33.NFe.infNFe.dest.enderDest.UF) === null || _34 === void 0 ? void 0 : _34._text));
                transportador = new transportador_1.default();
                transportador.comNome((_38 = (_37 = (_36 = (_35 = json.nfeProc) === null || _35 === void 0 ? void 0 : _35.NFe.infNFe.transp) === null || _36 === void 0 ? void 0 : _36.transporta) === null || _37 === void 0 ? void 0 : _37.xNome) === null || _38 === void 0 ? void 0 : _38._text);
                transportador.comRegistroNacional(maskFields.maskCnpj((_42 = (_41 = (_40 = (_39 = json.nfeProc) === null || _39 === void 0 ? void 0 : _39.NFe.infNFe.transp) === null || _40 === void 0 ? void 0 : _40.transporta) === null || _41 === void 0 ? void 0 : _41.CNPJ) === null || _42 === void 0 ? void 0 : _42._text));
                transportador.comInscricaoEstadual((_46 = (_45 = (_44 = (_43 = json.nfeProc) === null || _43 === void 0 ? void 0 : _43.NFe.infNFe.transp) === null || _44 === void 0 ? void 0 : _44.transporta) === null || _45 === void 0 ? void 0 : _45.IE) === null || _46 === void 0 ? void 0 : _46._text);
                // transportador.comCodigoAntt("");
                transportador.comPlacaDoVeiculo((_50 = (_49 = (_48 = (_47 = json.nfeProc) === null || _47 === void 0 ? void 0 : _47.NFe.infNFe.transp) === null || _48 === void 0 ? void 0 : _48.veicTransp) === null || _49 === void 0 ? void 0 : _49.placa) === null || _50 === void 0 ? void 0 : _50._text);
                transportador.comUfDaPlacaDoVeiculo((_54 = (_53 = (_52 = (_51 = json.nfeProc) === null || _51 === void 0 ? void 0 : _51.NFe.infNFe.transp) === null || _52 === void 0 ? void 0 : _52.veicTransp) === null || _53 === void 0 ? void 0 : _53.UF) === null || _54 === void 0 ? void 0 : _54._text);
                transportador.comEndereco(new endereco_1.default()
                    .comLogradouro((_60 = (_59 = (_58 = (_57 = (_56 = (_55 = json.nfeProc) === null || _55 === void 0 ? void 0 : _55.NFe) === null || _56 === void 0 ? void 0 : _56.infNFe) === null || _57 === void 0 ? void 0 : _57.transp) === null || _58 === void 0 ? void 0 : _58.transporta) === null || _59 === void 0 ? void 0 : _59.xEnder) === null || _60 === void 0 ? void 0 : _60._text)
                    .comMunicipio((_66 = (_65 = (_64 = (_63 = (_62 = (_61 = json.nfeProc) === null || _61 === void 0 ? void 0 : _61.NFe) === null || _62 === void 0 ? void 0 : _62.infNFe) === null || _63 === void 0 ? void 0 : _63.transp) === null || _64 === void 0 ? void 0 : _64.transporta) === null || _65 === void 0 ? void 0 : _65.xMun) === null || _66 === void 0 ? void 0 : _66._text)
                    .comUf((_72 = (_71 = (_70 = (_69 = (_68 = (_67 = json.nfeProc) === null || _67 === void 0 ? void 0 : _67.NFe) === null || _68 === void 0 ? void 0 : _68.infNFe) === null || _69 === void 0 ? void 0 : _69.transp) === null || _70 === void 0 ? void 0 : _70.transporta) === null || _71 === void 0 ? void 0 : _71.UF) === null || _72 === void 0 ? void 0 : _72._text));
                protocolo = new protocolo_1.default();
                protocolo.comData(maskFields.maskDate((_74 = (_73 = json.nfeProc) === null || _73 === void 0 ? void 0 : _73.protNFe.infProt.dhRecbto) === null || _74 === void 0 ? void 0 : _74._text));
                protocolo.comCodigo((_76 = (_75 = json.nfeProc) === null || _75 === void 0 ? void 0 : _75.protNFe.infProt.nProt) === null || _76 === void 0 ? void 0 : _76._text);
                impostos = new impostos_1.default();
                impostos.comBaseDeCalculoDoIcms(maskFields.maskNumber((_79 = (_78 = (_77 = json.nfeProc) === null || _77 === void 0 ? void 0 : _77.NFe.infNFe.total) === null || _78 === void 0 ? void 0 : _78.ICMSTot.vBC) === null || _79 === void 0 ? void 0 : _79._text));
                impostos.comValorDoIcms(maskFields.maskNumber((_82 = (_81 = (_80 = json.nfeProc) === null || _80 === void 0 ? void 0 : _80.NFe.infNFe.total) === null || _81 === void 0 ? void 0 : _81.ICMSTot.vICMS) === null || _82 === void 0 ? void 0 : _82._text));
                impostos.comBaseDeCalculoDoIcmsSt(maskFields.maskNumber((_85 = (_84 = (_83 = json.nfeProc) === null || _83 === void 0 ? void 0 : _83.NFe.infNFe.total) === null || _84 === void 0 ? void 0 : _84.ICMSTot.vBCST) === null || _85 === void 0 ? void 0 : _85._text));
                impostos.comValorDoIcmsSt(maskFields.maskNumber((_88 = (_87 = (_86 = json.nfeProc) === null || _86 === void 0 ? void 0 : _86.NFe.infNFe.total) === null || _87 === void 0 ? void 0 : _87.ICMSTot.vST) === null || _88 === void 0 ? void 0 : _88._text));
                impostos.comValorDoImpostoDeImportacao(maskFields.maskNumber((_89 = json.nfeProc) === null || _89 === void 0 ? void 0 : _89.NFe.infNFe.total.ICMSTot.vII._text));
                impostos.comValorDoPis(maskFields.maskNumber((_92 = (_91 = (_90 = json.nfeProc) === null || _90 === void 0 ? void 0 : _90.NFe.infNFe.total) === null || _91 === void 0 ? void 0 : _91.ICMSTot.vPIS) === null || _92 === void 0 ? void 0 : _92._text));
                impostos.comValorTotalDoIpi(maskFields.maskNumber((_95 = (_94 = (_93 = json.nfeProc) === null || _93 === void 0 ? void 0 : _93.NFe.infNFe.total) === null || _94 === void 0 ? void 0 : _94.ICMSTot.vIPI) === null || _95 === void 0 ? void 0 : _95._text));
                impostos.comValorDaCofins(maskFields.maskNumber((_98 = (_97 = (_96 = json.nfeProc) === null || _96 === void 0 ? void 0 : _96.NFe.infNFe.total) === null || _97 === void 0 ? void 0 : _97.ICMSTot.vCOFINS) === null || _98 === void 0 ? void 0 : _98._text));
                impostos.comValorTotTrib(maskFields.maskNumber((_102 = (_101 = (_100 = (_99 = json.nfeProc) === null || _99 === void 0 ? void 0 : _99.NFe.infNFe.total) === null || _100 === void 0 ? void 0 : _100.ICMSTot) === null || _101 === void 0 ? void 0 : _101.vTotTrib) === null || _102 === void 0 ? void 0 : _102._text));
                impostos.comValorFCP(maskFields.maskNumber((_106 = (_105 = (_104 = (_103 = json.nfeProc) === null || _103 === void 0 ? void 0 : _103.NFe.infNFe.total) === null || _104 === void 0 ? void 0 : _104.ICMSTot) === null || _105 === void 0 ? void 0 : _105.vFCP) === null || _106 === void 0 ? void 0 : _106._text));
                impostos.comValorICMSufRemet(maskFields.maskNumber((_110 = (_109 = (_108 = (_107 = json.nfeProc) === null || _107 === void 0 ? void 0 : _107.NFe.infNFe.total) === null || _108 === void 0 ? void 0 : _108.ICMSTot) === null || _109 === void 0 ? void 0 : _109.vICMSUFRemet) === null || _110 === void 0 ? void 0 : _110._text));
                impostos.comValorICMSufDest(maskFields.maskNumber((_114 = (_113 = (_112 = (_111 = json.nfeProc) === null || _111 === void 0 ? void 0 : _111.NFe.infNFe.total) === null || _112 === void 0 ? void 0 : _112.ICMSTot) === null || _113 === void 0 ? void 0 : _113.vICMSUFDest) === null || _114 === void 0 ? void 0 : _114._text));
                impostos.comBaseDeCalculoDoIssqn("");
                impostos.comValorTotalDoIssqn("");
                volumes = new volumes_1.default();
                volumes.comQuantidade(maskFields.maskNumber((_118 = (_117 = (_116 = (_115 = json.nfeProc) === null || _115 === void 0 ? void 0 : _115.NFe.infNFe.transp) === null || _116 === void 0 ? void 0 : _116.vol) === null || _117 === void 0 ? void 0 : _117.qVol) === null || _118 === void 0 ? void 0 : _118._text));
                volumes.comEspecie((_122 = (_121 = (_120 = (_119 = json.nfeProc) === null || _119 === void 0 ? void 0 : _119.NFe.infNFe.transp) === null || _120 === void 0 ? void 0 : _120.vol) === null || _121 === void 0 ? void 0 : _121.esp) === null || _122 === void 0 ? void 0 : _122._text);
                volumes.comMarca((_126 = (_125 = (_124 = (_123 = json.nfeProc) === null || _123 === void 0 ? void 0 : _123.NFe.infNFe.transp) === null || _124 === void 0 ? void 0 : _124.vol) === null || _125 === void 0 ? void 0 : _125.marca) === null || _126 === void 0 ? void 0 : _126._text);
                volumes.comPesoBruto(maskFields.maskNumber((_130 = (_129 = (_128 = (_127 = json.nfeProc) === null || _127 === void 0 ? void 0 : _127.NFe.infNFe.transp) === null || _128 === void 0 ? void 0 : _128.vol) === null || _129 === void 0 ? void 0 : _129.pesoB) === null || _130 === void 0 ? void 0 : _130._text));
                volumes.comPesoLiquido(maskFields.maskNumber((_134 = (_133 = (_132 = (_131 = json.nfeProc) === null || _131 === void 0 ? void 0 : _131.NFe.infNFe.transp) === null || _132 === void 0 ? void 0 : _132.vol) === null || _133 === void 0 ? void 0 : _133.pesoL) === null || _134 === void 0 ? void 0 : _134._text));
                fatura = new fatura_1.default();
                if ((_138 = (_137 = (_136 = (_135 = json.nfeProc) === null || _135 === void 0 ? void 0 : _135.NFe) === null || _136 === void 0 ? void 0 : _136.infNFe) === null || _137 === void 0 ? void 0 : _137.cobr) === null || _138 === void 0 ? void 0 : _138.fat) {
                    fatura.comNumero((_144 = (_143 = (_142 = (_141 = (_140 = (_139 = json.nfeProc) === null || _139 === void 0 ? void 0 : _139.NFe) === null || _140 === void 0 ? void 0 : _140.infNFe) === null || _141 === void 0 ? void 0 : _141.cobr) === null || _142 === void 0 ? void 0 : _142.fat) === null || _143 === void 0 ? void 0 : _143.nFat) === null || _144 === void 0 ? void 0 : _144._text);
                    fatura.comValorOriginal(maskFields.maskNumber((_150 = (_149 = (_148 = (_147 = (_146 = (_145 = json.nfeProc) === null || _145 === void 0 ? void 0 : _145.NFe) === null || _146 === void 0 ? void 0 : _146.infNFe) === null || _147 === void 0 ? void 0 : _147.cobr) === null || _148 === void 0 ? void 0 : _148.fat) === null || _149 === void 0 ? void 0 : _149.vOrig) === null || _150 === void 0 ? void 0 : _150._text));
                    fatura.comValorDoDesconto(maskFields.maskNumber((_156 = (_155 = (_154 = (_153 = (_152 = (_151 = json.nfeProc) === null || _151 === void 0 ? void 0 : _151.NFe) === null || _152 === void 0 ? void 0 : _152.infNFe) === null || _153 === void 0 ? void 0 : _153.cobr) === null || _154 === void 0 ? void 0 : _154.fat) === null || _155 === void 0 ? void 0 : _155.vDesc) === null || _156 === void 0 ? void 0 : _156._text));
                    fatura.comValorLiquido(maskFields.maskNumber((_162 = (_161 = (_160 = (_159 = (_158 = (_157 = json.nfeProc) === null || _157 === void 0 ? void 0 : _157.NFe) === null || _158 === void 0 ? void 0 : _158.infNFe) === null || _159 === void 0 ? void 0 : _159.cobr) === null || _160 === void 0 ? void 0 : _160.fat) === null || _161 === void 0 ? void 0 : _161.vLiq) === null || _162 === void 0 ? void 0 : _162._text));
                    fatura.comFormaDePagamento((_166 = (_165 = (_164 = (_163 = json.nfeProc) === null || _163 === void 0 ? void 0 : _163.NFe.infNFe.pag) === null || _164 === void 0 ? void 0 : _164.detPag) === null || _165 === void 0 ? void 0 : _165.indPag) === null || _166 === void 0 ? void 0 : _166._text);
                }
                danfe = new danfe_1.default();
                danfe.comChaveDeAcesso((_168 = (_167 = json.nfeProc) === null || _167 === void 0 ? void 0 : _167.protNFe.infProt.chNFe) === null || _168 === void 0 ? void 0 : _168._text);
                danfe.comEmitente(emitente);
                danfe.comFatura(fatura);
                danfe.comDestinatario(destinatario);
                danfe.comTransportador(transportador);
                danfe.comProtocolo(protocolo);
                danfe.comImpostos(impostos);
                danfe.comVolumes(volumes);
                danfe.comTipo((_169 = json.nfeProc) === null || _169 === void 0 ? void 0 : _169.NFe.infNFe.ide.tpNF._text);
                danfe.comNaturezaDaOperacao((_171 = (_170 = json.nfeProc) === null || _170 === void 0 ? void 0 : _170.NFe.infNFe.ide.natOp) === null || _171 === void 0 ? void 0 : _171._text);
                danfe.comNumero((_173 = (_172 = json.nfeProc) === null || _172 === void 0 ? void 0 : _172.NFe.infNFe.ide.nNF) === null || _173 === void 0 ? void 0 : _173._text);
                danfe.comSerie((_175 = (_174 = json.nfeProc) === null || _174 === void 0 ? void 0 : _174.NFe.infNFe.ide.serie) === null || _175 === void 0 ? void 0 : _175._text);
                danfe.comInformacoesComplementares(((_180 = (_179 = (_178 = (_177 = (_176 = json.nfeProc) === null || _176 === void 0 ? void 0 : _176.NFe) === null || _177 === void 0 ? void 0 : _177.infNFe) === null || _178 === void 0 ? void 0 : _178.infAdic) === null || _179 === void 0 ? void 0 : _179.infAdFisco) === null || _180 === void 0 ? void 0 : _180._text) ||
                    "".concat((_185 = (_184 = (_183 = (_182 = (_181 = json.nfeProc) === null || _181 === void 0 ? void 0 : _181.NFe) === null || _182 === void 0 ? void 0 : _182.infNFe) === null || _183 === void 0 ? void 0 : _183.infAdic) === null || _184 === void 0 ? void 0 : _184.infCpl) === null || _185 === void 0 ? void 0 : _185._text) ||
                    "".concat((_190 = (_189 = (_188 = (_187 = (_186 = json.nfeProc) === null || _186 === void 0 ? void 0 : _186.NFe) === null || _187 === void 0 ? void 0 : _187.infNFe) === null || _188 === void 0 ? void 0 : _188.infAdic) === null || _189 === void 0 ? void 0 : _189.obsCont) === null || _190 === void 0 ? void 0 : _190._text) ||
                    "".concat((_195 = (_194 = (_193 = (_192 = (_191 = json.nfeProc) === null || _191 === void 0 ? void 0 : _191.NFe) === null || _192 === void 0 ? void 0 : _192.infNFe) === null || _193 === void 0 ? void 0 : _193.infAdic) === null || _194 === void 0 ? void 0 : _194.obsFisco) === null || _195 === void 0 ? void 0 : _195._text) ||
                    "".concat((_200 = (_199 = (_198 = (_197 = (_196 = json.nfeProc) === null || _196 === void 0 ? void 0 : _196.NFe) === null || _197 === void 0 ? void 0 : _197.infNFe) === null || _198 === void 0 ? void 0 : _198.infAdic) === null || _199 === void 0 ? void 0 : _199.procRef) === null || _200 === void 0 ? void 0 : _200._text) ||
                    "");
                if (((_204 = (_203 = (_202 = (_201 = json.nfeProc) === null || _201 === void 0 ? void 0 : _201.NFe) === null || _202 === void 0 ? void 0 : _202.infNFe) === null || _203 === void 0 ? void 0 : _203.cobr) === null || _204 === void 0 ? void 0 : _204.dup) &&
                    Array.isArray((_208 = (_207 = (_206 = (_205 = json.nfeProc) === null || _205 === void 0 ? void 0 : _205.NFe) === null || _206 === void 0 ? void 0 : _206.infNFe) === null || _207 === void 0 ? void 0 : _207.cobr) === null || _208 === void 0 ? void 0 : _208.dup)) {
                    danfe.comDuplicatas((_212 = (_211 = (_210 = (_209 = json.nfeProc) === null || _209 === void 0 ? void 0 : _209.NFe) === null || _210 === void 0 ? void 0 : _210.infNFe) === null || _211 === void 0 ? void 0 : _211.cobr) === null || _212 === void 0 ? void 0 : _212.dup.map(function (duplicata) {
                        var _a, _b, _c;
                        return new duplicata_1.default()
                            .comNumero((_a = duplicata === null || duplicata === void 0 ? void 0 : duplicata.nDup) === null || _a === void 0 ? void 0 : _a._text)
                            .comVencimento(maskFields.maskDate((_b = duplicata === null || duplicata === void 0 ? void 0 : duplicata.dVenc) === null || _b === void 0 ? void 0 : _b._text))
                            .comValor(maskFields.maskNumber((_c = duplicata === null || duplicata === void 0 ? void 0 : duplicata.vDup) === null || _c === void 0 ? void 0 : _c._text));
                    }));
                }
                else if ((_216 = (_215 = (_214 = (_213 = json.nfeProc) === null || _213 === void 0 ? void 0 : _213.NFe) === null || _214 === void 0 ? void 0 : _214.infNFe) === null || _215 === void 0 ? void 0 : _215.cobr) === null || _216 === void 0 ? void 0 : _216.dup) {
                    danfe.comDuplicatas(Array(new duplicata_1.default()
                        .comNumero((_222 = (_221 = (_220 = (_219 = (_218 = (_217 = json.nfeProc) === null || _217 === void 0 ? void 0 : _217.NFe) === null || _218 === void 0 ? void 0 : _218.infNFe) === null || _219 === void 0 ? void 0 : _219.cobr) === null || _220 === void 0 ? void 0 : _220.dup) === null || _221 === void 0 ? void 0 : _221.nDup) === null || _222 === void 0 ? void 0 : _222._text)
                        .comVencimento(maskFields.maskDate((_227 = (_226 = (_225 = (_224 = (_223 = json.nfeProc) === null || _223 === void 0 ? void 0 : _223.NFe) === null || _224 === void 0 ? void 0 : _224.infNFe) === null || _225 === void 0 ? void 0 : _225.cobr) === null || _226 === void 0 ? void 0 : _226.dup) === null || _227 === void 0 ? void 0 : _227.dVenc._text))
                        .comValor(maskFields.maskNumber((_233 = (_232 = (_231 = (_230 = (_229 = (_228 = json.nfeProc) === null || _228 === void 0 ? void 0 : _228.NFe) === null || _229 === void 0 ? void 0 : _229.infNFe) === null || _230 === void 0 ? void 0 : _230.cobr) === null || _231 === void 0 ? void 0 : _231.dup) === null || _232 === void 0 ? void 0 : _232.vDup) === null || _233 === void 0 ? void 0 : _233._text))));
                }
                if ((_235 = (_234 = json.nfeProc) === null || _234 === void 0 ? void 0 : _234.NFe.infNFe.ide.dhEmi) === null || _235 === void 0 ? void 0 : _235._text) {
                    danfe.comDataDaEmissao(maskFields.maskDate((_237 = (_236 = json.nfeProc) === null || _236 === void 0 ? void 0 : _236.NFe.infNFe.ide.dhEmi) === null || _237 === void 0 ? void 0 : _237._text));
                }
                else if ((_239 = (_238 = json.nfeProc) === null || _238 === void 0 ? void 0 : _238.NFe.infNFe.ide.dEmi) === null || _239 === void 0 ? void 0 : _239._text) {
                    danfe.comDataDaEmissao(maskFields.maskDate((_241 = (_240 = json.nfeProc) === null || _240 === void 0 ? void 0 : _240.NFe.infNFe.ide.dEmi) === null || _241 === void 0 ? void 0 : _241._text));
                }
                if ((_246 = (_245 = (_244 = (_243 = (_242 = json.nfeProc) === null || _242 === void 0 ? void 0 : _242.NFe) === null || _243 === void 0 ? void 0 : _243.infNFe) === null || _244 === void 0 ? void 0 : _244.ide) === null || _245 === void 0 ? void 0 : _245.dhSaiEnt) === null || _246 === void 0 ? void 0 : _246._text) {
                    danfe.comDataDaEntradaOuSaida(maskFields.maskDate((_251 = (_250 = (_249 = (_248 = (_247 = json.nfeProc) === null || _247 === void 0 ? void 0 : _247.NFe) === null || _248 === void 0 ? void 0 : _248.infNFe) === null || _249 === void 0 ? void 0 : _249.ide) === null || _250 === void 0 ? void 0 : _250.dhSaiEnt) === null || _251 === void 0 ? void 0 : _251._text));
                    danfe.comHorarioEntradaSaida(maskFields.maskTime((_256 = (_255 = (_254 = (_253 = (_252 = json.nfeProc) === null || _252 === void 0 ? void 0 : _252.NFe) === null || _253 === void 0 ? void 0 : _253.infNFe) === null || _254 === void 0 ? void 0 : _254.ide) === null || _255 === void 0 ? void 0 : _255.dhSaiEnt) === null || _256 === void 0 ? void 0 : _256._text));
                }
                danfe.comModalidadeDoFrete((_260 = (_259 = (_258 = (_257 = json.nfeProc) === null || _257 === void 0 ? void 0 : _257.NFe.infNFe) === null || _258 === void 0 ? void 0 : _258.transp) === null || _259 === void 0 ? void 0 : _259.modFrete) === null || _260 === void 0 ? void 0 : _260._text);
                danfe.comInscricaoEstadualDoSubstitutoTributario((_265 = (_264 = (_263 = (_262 = (_261 = json.nfeProc) === null || _261 === void 0 ? void 0 : _261.NFe) === null || _262 === void 0 ? void 0 : _262.infNFe) === null || _263 === void 0 ? void 0 : _263.emit) === null || _264 === void 0 ? void 0 : _264.IEST) === null || _265 === void 0 ? void 0 : _265._text);
                danfe.comValorTotalDaNota(maskFields.maskNumber((_267 = (_266 = json.nfeProc) === null || _266 === void 0 ? void 0 : _266.NFe.infNFe.total.ICMSTot.vNF) === null || _267 === void 0 ? void 0 : _267._text));
                danfe.comValorTotalDosProdutos(maskFields.maskNumber((_271 = (_270 = (_269 = (_268 = json.nfeProc) === null || _268 === void 0 ? void 0 : _268.NFe.infNFe.total) === null || _269 === void 0 ? void 0 : _269.ICMSTot) === null || _270 === void 0 ? void 0 : _270.vProd) === null || _271 === void 0 ? void 0 : _271._text));
                danfe.comValorTotalDosServicos(maskFields.maskNumber((_275 = (_274 = (_273 = (_272 = json.nfeProc) === null || _272 === void 0 ? void 0 : _272.NFe.infNFe.total) === null || _273 === void 0 ? void 0 : _273.ICMSTot) === null || _274 === void 0 ? void 0 : _274.vServ) === null || _275 === void 0 ? void 0 : _275._text));
                danfe.comValorDoFrete(maskFields.maskNumber((_279 = (_278 = (_277 = (_276 = json.nfeProc) === null || _276 === void 0 ? void 0 : _276.NFe.infNFe.total) === null || _277 === void 0 ? void 0 : _277.ICMSTot) === null || _278 === void 0 ? void 0 : _278.vFrete) === null || _279 === void 0 ? void 0 : _279._text));
                danfe.comValorDoSeguro(maskFields.maskNumber((_283 = (_282 = (_281 = (_280 = json.nfeProc) === null || _280 === void 0 ? void 0 : _280.NFe.infNFe.total) === null || _281 === void 0 ? void 0 : _281.ICMSTot) === null || _282 === void 0 ? void 0 : _282.vSeg) === null || _283 === void 0 ? void 0 : _283._text));
                danfe.comDesconto(maskFields.maskNumber((_287 = (_286 = (_285 = (_284 = json.nfeProc) === null || _284 === void 0 ? void 0 : _284.NFe.infNFe.total) === null || _285 === void 0 ? void 0 : _285.ICMSTot) === null || _286 === void 0 ? void 0 : _286.vDesc) === null || _287 === void 0 ? void 0 : _287._text));
                danfe.comOutrasDespesas(maskFields.maskNumber((_291 = (_290 = (_289 = (_288 = json.nfeProc) === null || _288 === void 0 ? void 0 : _288.NFe.infNFe.total) === null || _289 === void 0 ? void 0 : _289.ICMSTot) === null || _290 === void 0 ? void 0 : _290.vOutro) === null || _291 === void 0 ? void 0 : _291._text));
                if (((_292 = json.nfeProc) === null || _292 === void 0 ? void 0 : _292.NFe.infNFe.det) &&
                    Array.isArray((_293 = json.nfeProc) === null || _293 === void 0 ? void 0 : _293.NFe.infNFe.det)) {
                    for (_i = 0, _a = json.nfeProc.NFe.infNFe.det; _i < _a.length; _i++) {
                        item = _a[_i];
                        icms = this.find_ICMS_prod(item.imposto.ICMS);
                        danfe.adicionarItem(new item_1.default()
                            .comCodigo((_295 = (_294 = item.prod) === null || _294 === void 0 ? void 0 : _294.cProd) === null || _295 === void 0 ? void 0 : _295._text)
                            .comDescricao((_297 = (_296 = item.prod) === null || _296 === void 0 ? void 0 : _296.xProd) === null || _297 === void 0 ? void 0 : _297._text)
                            .comNcmSh((_299 = (_298 = item.prod) === null || _298 === void 0 ? void 0 : _298.NCM) === null || _299 === void 0 ? void 0 : _299._text)
                            .comOCst((_300 = icms === null || icms === void 0 ? void 0 : icms.CST) === null || _300 === void 0 ? void 0 : _300._text)
                            .comCfop((_302 = (_301 = item.prod) === null || _301 === void 0 ? void 0 : _301.CFOP) === null || _302 === void 0 ? void 0 : _302._text)
                            .comUnidade(String((_304 = (_303 = item.prod) === null || _303 === void 0 ? void 0 : _303.uCom) === null || _304 === void 0 ? void 0 : _304._text).toUpperCase())
                            .comQuantidade(maskFields.maskNumber((_306 = (_305 = item.prod) === null || _305 === void 0 ? void 0 : _305.qCom) === null || _306 === void 0 ? void 0 : _306._text))
                            .comValorUnitario(maskFields.maskNumber((_308 = (_307 = item.prod) === null || _307 === void 0 ? void 0 : _307.vUnCom) === null || _308 === void 0 ? void 0 : _308._text))
                            .comValorTotal(maskFields.maskNumber((_310 = (_309 = item.prod) === null || _309 === void 0 ? void 0 : _309.vProd) === null || _310 === void 0 ? void 0 : _310._text))
                            .comBaseDeCalculoDoIcms(maskFields.maskNumber((_311 = icms === null || icms === void 0 ? void 0 : icms.vBC) === null || _311 === void 0 ? void 0 : _311._text))
                            .comValorDoIcms(maskFields.maskNumber((_312 = icms === null || icms === void 0 ? void 0 : icms.vICMS) === null || _312 === void 0 ? void 0 : _312._text))
                            .comValorDoIpi(maskFields.maskNumber((_315 = (_314 = (_313 = item.imposto.IPI) === null || _313 === void 0 ? void 0 : _313.IPITrib) === null || _314 === void 0 ? void 0 : _314.vIPI) === null || _315 === void 0 ? void 0 : _315._text))
                            .comAliquotaDoIcms(maskFields.maskNumber((_316 = icms === null || icms === void 0 ? void 0 : icms.pICMS) === null || _316 === void 0 ? void 0 : _316._text))
                            .comAliquotaDoIpi(maskFields.maskNumber((_319 = (_318 = (_317 = item.imposto.IPI) === null || _317 === void 0 ? void 0 : _317.IPITrib) === null || _318 === void 0 ? void 0 : _318.pIPI) === null || _319 === void 0 ? void 0 : _319._text)));
                    }
                }
                else if ((_320 = json.nfeProc) === null || _320 === void 0 ? void 0 : _320.NFe.infNFe.det) {
                    icms = this.find_ICMS_prod((_323 = (_322 = (_321 = json.nfeProc) === null || _321 === void 0 ? void 0 : _321.NFe.infNFe.det) === null || _322 === void 0 ? void 0 : _322.imposto) === null || _323 === void 0 ? void 0 : _323.ICMS);
                    danfe.adicionarItem(new item_1.default()
                        .comCodigo((_327 = (_326 = (_325 = (_324 = json.nfeProc) === null || _324 === void 0 ? void 0 : _324.NFe.infNFe.det) === null || _325 === void 0 ? void 0 : _325.prod) === null || _326 === void 0 ? void 0 : _326.cProd) === null || _327 === void 0 ? void 0 : _327._text)
                        .comDescricao((_331 = (_330 = (_329 = (_328 = json.nfeProc) === null || _328 === void 0 ? void 0 : _328.NFe.infNFe.det) === null || _329 === void 0 ? void 0 : _329.prod) === null || _330 === void 0 ? void 0 : _330.xProd) === null || _331 === void 0 ? void 0 : _331._text)
                        .comNcmSh((_335 = (_334 = (_333 = (_332 = json.nfeProc) === null || _332 === void 0 ? void 0 : _332.NFe.infNFe.det) === null || _333 === void 0 ? void 0 : _333.prod) === null || _334 === void 0 ? void 0 : _334.NCM) === null || _335 === void 0 ? void 0 : _335._text)
                        .comOCst((_336 = icms === null || icms === void 0 ? void 0 : icms.CST) === null || _336 === void 0 ? void 0 : _336._text)
                        .comCfop((_340 = (_339 = (_338 = (_337 = json.nfeProc) === null || _337 === void 0 ? void 0 : _337.NFe.infNFe.det) === null || _338 === void 0 ? void 0 : _338.prod) === null || _339 === void 0 ? void 0 : _339.CFOP) === null || _340 === void 0 ? void 0 : _340._text)
                        .comUnidade(String((_344 = (_343 = (_342 = (_341 = json.nfeProc) === null || _341 === void 0 ? void 0 : _341.NFe.infNFe.det) === null || _342 === void 0 ? void 0 : _342.prod) === null || _343 === void 0 ? void 0 : _343.uCom) === null || _344 === void 0 ? void 0 : _344._text).toUpperCase())
                        .comQuantidade(maskFields.maskNumber((_348 = (_347 = (_346 = (_345 = json.nfeProc) === null || _345 === void 0 ? void 0 : _345.NFe.infNFe.det) === null || _346 === void 0 ? void 0 : _346.prod) === null || _347 === void 0 ? void 0 : _347.qCom) === null || _348 === void 0 ? void 0 : _348._text))
                        .comValorUnitario(maskFields.maskNumber((_352 = (_351 = (_350 = (_349 = json.nfeProc) === null || _349 === void 0 ? void 0 : _349.NFe.infNFe.det) === null || _350 === void 0 ? void 0 : _350.prod) === null || _351 === void 0 ? void 0 : _351.vUnCom) === null || _352 === void 0 ? void 0 : _352._text))
                        .comValorTotal(maskFields.maskNumber((_356 = (_355 = (_354 = (_353 = json.nfeProc) === null || _353 === void 0 ? void 0 : _353.NFe.infNFe.det) === null || _354 === void 0 ? void 0 : _354.prod) === null || _355 === void 0 ? void 0 : _355.vProd) === null || _356 === void 0 ? void 0 : _356._text))
                        .comBaseDeCalculoDoIcms(maskFields.maskNumber((_357 = icms === null || icms === void 0 ? void 0 : icms.vBC) === null || _357 === void 0 ? void 0 : _357._text))
                        .comValorDoIcms(maskFields.maskNumber((_358 = icms === null || icms === void 0 ? void 0 : icms.vICMS) === null || _358 === void 0 ? void 0 : _358._text))
                        .comValorDoIpi(maskFields.maskNumber((_361 = (_360 = (_359 = json.nfeProc.NFe.infNFe.det.imposto.IPI) === null || _359 === void 0 ? void 0 : _359.IPITrib) === null || _360 === void 0 ? void 0 : _360.vIPI) === null || _361 === void 0 ? void 0 : _361._text))
                        .comAliquotaDoIcms(maskFields.maskNumber((_362 = icms === null || icms === void 0 ? void 0 : icms.pICMS) === null || _362 === void 0 ? void 0 : _362._text))
                        .comAliquotaDoIpi(maskFields.maskNumber((_365 = (_364 = (_363 = json.nfeProc.NFe.infNFe.det.imposto.IPI) === null || _363 === void 0 ? void 0 : _363.IPITrib) === null || _364 === void 0 ? void 0 : _364.pIPI) === null || _365 === void 0 ? void 0 : _365._text)));
                }
                new gerador_1.default(danfe).gerarPDF({
                    ambiente: ((_366 = json.nfeProc) === null || _366 === void 0 ? void 0 : _366.protNFe.infProt.tpAmb._text) === "2"
                        ? "homologacao"
                        : "producao",
                    ajusteYDoLogotipo: -4,
                    ajusteYDaIdentificacaoDoEmitente: 4,
                    creditos: "",
                }, function (err, pdf) {
                    if (err) {
                        throw err;
                    }
                    var chunks = [];
                    pdf.on("data", function (chunk) {
                        chunks.push(chunk);
                    });
                    pdf.on("end", function () {
                        var data = Buffer.concat(chunks);
                        pdfBase64 = data.toString("base64");
                    });
                });
                return [2 /*return*/, new Promise(function (resolve) { return setTimeout(function () { return resolve(pdfBase64); }); })];
            });
        });
    };
    return JsonToDanfe;
}());
exports.JsonToDanfe = JsonToDanfe;
//# sourceMappingURL=json-to-danfe-use-case.js.map