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
exports.JsonToCTE = void 0;
var cteInfo_1 = __importDefault(require("../../../modules/pdf_generator/danfe-dacte/lib/cteInfo"));
var danfe_1 = __importDefault(require("../../../modules/pdf_generator/danfe-dacte/lib/danfe"));
var destinatario_1 = __importDefault(require("../../../modules/pdf_generator/danfe-dacte/lib/destinatario"));
var emitente_1 = __importDefault(require("../../../modules/pdf_generator/danfe-dacte/lib/emitente"));
var endereco_1 = __importDefault(require("../../../modules/pdf_generator/danfe-dacte/lib/endereco"));
var expeditor_1 = __importDefault(require("../../../modules/pdf_generator/danfe-dacte/lib/expeditor"));
var gerador_1 = __importDefault(require("../../../modules/pdf_generator/danfe-dacte/lib/gerador"));
var impostos_1 = __importDefault(require("../../../modules/pdf_generator/danfe-dacte/lib/impostos"));
var item_1 = __importDefault(require("../../../modules/pdf_generator/danfe-dacte/lib/item"));
var protocolo_1 = __importDefault(require("../../../modules/pdf_generator/danfe-dacte/lib/protocolo"));
var recebedor_1 = __importDefault(require("../../../modules/pdf_generator/danfe-dacte/lib/recebedor"));
var transportador_1 = __importDefault(require("../../../modules/pdf_generator/danfe-dacte/lib/transportador"));
var MaskFields_1 = require("../../../utils/MaskFields");
var JsonToCTE = /** @class */ (function () {
    function JsonToCTE() {
    }
    JsonToCTE.prototype.returnICMS = function (imposto) {
        var tipoIcms = JSON.stringify(imposto).substring(2, 8);
        return {
            ICMS00: imposto.ICMS00,
            ICMS20: imposto.ICMS20,
            ICMS45: imposto.ICMS45,
            ICMS60: imposto.ICMS60,
            ICMS90: imposto.ICMS90,
            ICMSSN: imposto.ICMSSN,
            ICMSOu: imposto.ICMSOutraUF,
        }[tipoIcms];
    };
    JsonToCTE.prototype.montaObservacao = function (obs, obs2) {
        var result = "";
        if (obs) {
            result = obs;
        }
        if (Array.isArray(obs2)) {
            for (var _i = 0, obs2_1 = obs2; _i < obs2_1.length; _i++) {
                var item = obs2_1[_i];
                result += " ".concat(item.xTexto._text);
            }
        }
        else if (obs2) {
            result += obs2.xTexto._text;
        }
        return result;
    };
    JsonToCTE.prototype.jsonToPDF = function (json) {
        return __awaiter(this, void 0, void 0, function () {
            var maskFields, pdfBase64, cteInfo, recebedor, expeditor, emitente, destinatario, transportador, protocolo, icms, impostos, danfe, _i, _a, item;
            var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32, _33, _34, _35, _36, _37, _38, _39, _40, _41, _42, _43, _44, _45, _46, _47, _48, _49, _50, _51, _52, _53, _54, _55, _56, _57, _58, _59, _60, _61, _62, _63, _64, _65, _66, _67, _68, _69, _70, _71, _72, _73, _74, _75, _76, _77, _78, _79, _80, _81, _82, _83, _84, _85, _86, _87, _88, _89, _90, _91, _92, _93, _94, _95, _96, _97, _98, _99, _100, _101, _102, _103, _104, _105, _106, _107, _108, _109, _110, _111, _112, _113, _114, _115, _116, _117, _118, _119, _120, _121, _122, _123, _124, _125, _126, _127, _128, _129, _130, _131, _132, _133, _134, _135, _136, _137, _138, _139, _140, _141, _142, _143, _144, _145, _146, _147, _148, _149, _150, _151, _152, _153, _154, _155, _156, _157, _158, _159, _160, _161, _162, _163, _164, _165, _166, _167, _168, _169, _170, _171, _172, _173, _174, _175, _176, _177, _178, _179, _180, _181, _182, _183, _184, _185, _186, _187, _188, _189, _190, _191, _192, _193, _194, _195, _196, _197, _198, _199, _200, _201, _202, _203, _204, _205, _206, _207, _208, _209, _210, _211, _212, _213, _214, _215, _216, _217, _218, _219, _220, _221, _222, _223, _224, _225, _226, _227, _228, _229, _230, _231, _232, _233, _234, _235, _236, _237, _238, _239, _240, _241, _242, _243, _244, _245, _246, _247, _248, _249, _250, _251, _252, _253, _254, _255, _256, _257, _258, _259, _260, _261, _262, _263, _264, _265, _266, _267, _268, _269, _270, _271, _272, _273, _274, _275, _276, _277, _278, _279, _280, _281, _282, _283, _284, _285, _286, _287, _288, _289, _290, _291, _292, _293, _294, _295, _296, _297, _298, _299, _300, _301, _302, _303, _304, _305, _306, _307, _308, _309, _310, _311, _312, _313, _314, _315, _316, _317, _318, _319, _320, _321, _322, _323, _324, _325, _326, _327, _328, _329, _330, _331, _332, _333, _334, _335, _336, _337, _338, _339, _340, _341, _342, _343, _344, _345, _346, _347, _348, _349, _350, _351, _352, _353, _354, _355, _356, _357, _358, _359, _360, _361, _362, _363, _364, _365, _366, _367, _368, _369, _370, _371, _372, _373, _374, _375, _376, _377, _378, _379, _380, _381, _382, _383, _384, _385, _386, _387, _388, _389, _390, _391, _392, _393, _394, _395, _396, _397, _398, _399, _400, _401, _402, _403, _404, _405, _406, _407, _408, _409, _410, _411, _412, _413, _414, _415, _416, _417, _418, _419, _420, _421, _422, _423, _424, _425, _426, _427, _428, _429, _430, _431, _432, _433, _434, _435, _436, _437, _438, _439, _440, _441, _442, _443, _444, _445, _446, _447, _448, _449, _450, _451, _452, _453, _454, _455, _456, _457, _458;
            return __generator(this, function (_459) {
                maskFields = new MaskFields_1.MaskFields();
                pdfBase64 = "";
                cteInfo = new cteInfo_1.default();
                cteInfo.comTpCte((_f = (_e = (_d = (_c = (_b = json.cteProc) === null || _b === void 0 ? void 0 : _b.CTe) === null || _c === void 0 ? void 0 : _c.infCte) === null || _d === void 0 ? void 0 : _d.ide) === null || _e === void 0 ? void 0 : _e.tpCTe) === null || _f === void 0 ? void 0 : _f._text);
                cteInfo.comTpServ((_k = (_j = (_h = (_g = json.cteProc) === null || _g === void 0 ? void 0 : _g.CTe) === null || _h === void 0 ? void 0 : _h.infCte.ide) === null || _j === void 0 ? void 0 : _j.tpServ) === null || _k === void 0 ? void 0 : _k._text);
                if ((_q = (_p = (_o = (_m = (_l = json.cteProc) === null || _l === void 0 ? void 0 : _l.CTe) === null || _m === void 0 ? void 0 : _m.infCte.ide) === null || _o === void 0 ? void 0 : _o.toma3) === null || _p === void 0 ? void 0 : _p.toma) === null || _q === void 0 ? void 0 : _q._text) {
                    cteInfo.comToma((_w = (_v = (_u = (_t = (_s = (_r = json.cteProc) === null || _r === void 0 ? void 0 : _r.CTe) === null || _s === void 0 ? void 0 : _s.infCte) === null || _t === void 0 ? void 0 : _t.ide) === null || _u === void 0 ? void 0 : _u.toma3) === null || _v === void 0 ? void 0 : _v.toma) === null || _w === void 0 ? void 0 : _w._text);
                }
                else {
                    cteInfo.comToma("4");
                }
                cteInfo.comModalFrete((_z = (_y = (_x = json.cteProc) === null || _x === void 0 ? void 0 : _x.CTe) === null || _y === void 0 ? void 0 : _y.infCte.ide.modal) === null || _z === void 0 ? void 0 : _z._text);
                cteInfo.comCfopFrete("".concat((_2 = (_1 = (_0 = json.cteProc) === null || _0 === void 0 ? void 0 : _0.CTe) === null || _1 === void 0 ? void 0 : _1.infCte.ide.CFOP) === null || _2 === void 0 ? void 0 : _2._text, " - ").concat((_5 = (_4 = (_3 = json.cteProc) === null || _3 === void 0 ? void 0 : _3.CTe) === null || _4 === void 0 ? void 0 : _4.infCte.ide.natOp) === null || _5 === void 0 ? void 0 : _5._text));
                cteInfo.comInicioPrestacao(String("".concat((_7 = (_6 = json.cteProc) === null || _6 === void 0 ? void 0 : _6.CTe) === null || _7 === void 0 ? void 0 : _7.infCte.ide.xMunIni._text, " - ").concat((_10 = (_9 = (_8 = json.cteProc) === null || _8 === void 0 ? void 0 : _8.CTe) === null || _9 === void 0 ? void 0 : _9.infCte.ide.UFIni) === null || _10 === void 0 ? void 0 : _10._text)).toUpperCase());
                cteInfo.comFinalDaPrestacao(String("".concat((_12 = (_11 = json.cteProc) === null || _11 === void 0 ? void 0 : _11.CTe) === null || _12 === void 0 ? void 0 : _12.infCte.ide.xMunFim._text, " - ").concat((_15 = (_14 = (_13 = json.cteProc) === null || _13 === void 0 ? void 0 : _13.CTe) === null || _14 === void 0 ? void 0 : _14.infCte.ide.UFFim) === null || _15 === void 0 ? void 0 : _15._text)).toUpperCase());
                cteInfo.comModelo((_17 = (_16 = json.cteProc) === null || _16 === void 0 ? void 0 : _16.CTe) === null || _17 === void 0 ? void 0 : _17.infCte.ide.mod._text);
                cteInfo.comProdPred((_23 = (_22 = (_21 = (_20 = (_19 = (_18 = json.cteProc) === null || _18 === void 0 ? void 0 : _18.CTe) === null || _19 === void 0 ? void 0 : _19.infCte) === null || _20 === void 0 ? void 0 : _20.infCTeNorm) === null || _21 === void 0 ? void 0 : _21.infCarga) === null || _22 === void 0 ? void 0 : _22.proPred) === null || _23 === void 0 ? void 0 : _23._text);
                cteInfo.comCarga((_28 = (_27 = (_26 = (_25 = (_24 = json.cteProc) === null || _24 === void 0 ? void 0 : _24.CTe) === null || _25 === void 0 ? void 0 : _25.infCte) === null || _26 === void 0 ? void 0 : _26.infCTeNorm) === null || _27 === void 0 ? void 0 : _27.infCarga) === null || _28 === void 0 ? void 0 : _28.infQ);
                cteInfo.comObservacao(this.montaObservacao((_33 = (_32 = (_31 = (_30 = (_29 = json.cteProc) === null || _29 === void 0 ? void 0 : _29.CTe) === null || _30 === void 0 ? void 0 : _30.infCte) === null || _31 === void 0 ? void 0 : _31.compl) === null || _32 === void 0 ? void 0 : _32.xObs) === null || _33 === void 0 ? void 0 : _33._text, (_37 = (_36 = (_35 = (_34 = json.cteProc) === null || _34 === void 0 ? void 0 : _34.CTe) === null || _35 === void 0 ? void 0 : _35.infCte) === null || _36 === void 0 ? void 0 : _36.compl) === null || _37 === void 0 ? void 0 : _37.ObsCont));
                cteInfo.comRNTRC((_44 = (_43 = (_42 = (_41 = (_40 = (_39 = (_38 = json.cteProc) === null || _38 === void 0 ? void 0 : _38.CTe) === null || _39 === void 0 ? void 0 : _39.infCte) === null || _40 === void 0 ? void 0 : _40.infCTeNorm) === null || _41 === void 0 ? void 0 : _41.infModal) === null || _42 === void 0 ? void 0 : _42.rodo) === null || _43 === void 0 ? void 0 : _43.RNTRC) === null || _44 === void 0 ? void 0 : _44._text);
                cteInfo.comCIOT((_51 = (_50 = (_49 = (_48 = (_47 = (_46 = (_45 = json.cteProc) === null || _45 === void 0 ? void 0 : _45.CTe) === null || _46 === void 0 ? void 0 : _46.infCte) === null || _47 === void 0 ? void 0 : _47.infCTeNorm) === null || _48 === void 0 ? void 0 : _48.infModal) === null || _49 === void 0 ? void 0 : _49.rodo) === null || _50 === void 0 ? void 0 : _50.CIOT) === null || _51 === void 0 ? void 0 : _51._text);
                cteInfo.comDataEntrega(maskFields.maskDate((_58 = (_57 = (_56 = (_55 = (_54 = (_53 = (_52 = json.cteProc) === null || _52 === void 0 ? void 0 : _52.CTe) === null || _53 === void 0 ? void 0 : _53.infCte) === null || _54 === void 0 ? void 0 : _54.infCTeNorm) === null || _55 === void 0 ? void 0 : _55.infModal) === null || _56 === void 0 ? void 0 : _56.rodo) === null || _57 === void 0 ? void 0 : _57.dPrev) === null || _58 === void 0 ? void 0 : _58._text));
                cteInfo.comOutrasCaracCarga((_63 = (_62 = (_61 = (_60 = (_59 = json.cteProc) === null || _59 === void 0 ? void 0 : _59.CTe) === null || _60 === void 0 ? void 0 : _60.infCte.infCTeNorm) === null || _61 === void 0 ? void 0 : _61.infCarga) === null || _62 === void 0 ? void 0 : _62.xOutCat) === null || _63 === void 0 ? void 0 : _63._text);
                cteInfo.comComponenteServico((_67 = (_66 = (_65 = (_64 = json.cteProc) === null || _64 === void 0 ? void 0 : _64.CTe) === null || _65 === void 0 ? void 0 : _65.infCte) === null || _66 === void 0 ? void 0 : _66.vPrest) === null || _67 === void 0 ? void 0 : _67.Comp);
                recebedor = new recebedor_1.default();
                recebedor.comNome((_71 = (_70 = (_69 = (_68 = json.cteProc) === null || _68 === void 0 ? void 0 : _68.CTe) === null || _69 === void 0 ? void 0 : _69.infCte.receb) === null || _70 === void 0 ? void 0 : _70.xNome) === null || _71 === void 0 ? void 0 : _71._text);
                recebedor.comRegistroNacional(maskFields.maskCnpj((_76 = (_75 = (_74 = (_73 = (_72 = json.cteProc) === null || _72 === void 0 ? void 0 : _72.CTe) === null || _73 === void 0 ? void 0 : _73.infCte) === null || _74 === void 0 ? void 0 : _74.receb) === null || _75 === void 0 ? void 0 : _75.CNPJ) === null || _76 === void 0 ? void 0 : _76._text));
                recebedor.comInscricaoEstadual((_81 = (_80 = (_79 = (_78 = (_77 = json.cteProc) === null || _77 === void 0 ? void 0 : _77.CTe) === null || _78 === void 0 ? void 0 : _78.infCte) === null || _79 === void 0 ? void 0 : _79.receb) === null || _80 === void 0 ? void 0 : _80.IE) === null || _81 === void 0 ? void 0 : _81._text);
                recebedor.comTelefone((_85 = (_84 = (_83 = (_82 = json.cteProc) === null || _82 === void 0 ? void 0 : _82.CTe) === null || _83 === void 0 ? void 0 : _83.infCte.receb) === null || _84 === void 0 ? void 0 : _84.fone) === null || _85 === void 0 ? void 0 : _85._text);
                recebedor.comEmail("");
                recebedor.comEndereco(new endereco_1.default()
                    .comLogradouro((_90 = (_89 = (_88 = (_87 = (_86 = json.cteProc) === null || _86 === void 0 ? void 0 : _86.CTe) === null || _87 === void 0 ? void 0 : _87.infCte.receb) === null || _88 === void 0 ? void 0 : _88.enderReceb) === null || _89 === void 0 ? void 0 : _89.xLgr) === null || _90 === void 0 ? void 0 : _90._text)
                    .comNumero((_95 = (_94 = (_93 = (_92 = (_91 = json.cteProc) === null || _91 === void 0 ? void 0 : _91.CTe) === null || _92 === void 0 ? void 0 : _92.infCte.receb) === null || _93 === void 0 ? void 0 : _93.enderReceb) === null || _94 === void 0 ? void 0 : _94.nro) === null || _95 === void 0 ? void 0 : _95._text)
                    .comComplemento((_100 = (_99 = (_98 = (_97 = (_96 = json.cteProc) === null || _96 === void 0 ? void 0 : _96.CTe) === null || _97 === void 0 ? void 0 : _97.infCte.receb) === null || _98 === void 0 ? void 0 : _98.enderReceb) === null || _99 === void 0 ? void 0 : _99.xCpl) === null || _100 === void 0 ? void 0 : _100._text)
                    .comCep(maskFields.maskCEP((_105 = (_104 = (_103 = (_102 = (_101 = json.cteProc) === null || _101 === void 0 ? void 0 : _101.CTe) === null || _102 === void 0 ? void 0 : _102.infCte.receb) === null || _103 === void 0 ? void 0 : _103.enderReceb) === null || _104 === void 0 ? void 0 : _104.CEP) === null || _105 === void 0 ? void 0 : _105._text))
                    .comBairro((_110 = (_109 = (_108 = (_107 = (_106 = json.cteProc) === null || _106 === void 0 ? void 0 : _106.CTe) === null || _107 === void 0 ? void 0 : _107.infCte.receb) === null || _108 === void 0 ? void 0 : _108.enderReceb) === null || _109 === void 0 ? void 0 : _109.xBairro) === null || _110 === void 0 ? void 0 : _110._text)
                    .comMunicipio((_115 = (_114 = (_113 = (_112 = (_111 = json.cteProc) === null || _111 === void 0 ? void 0 : _111.CTe) === null || _112 === void 0 ? void 0 : _112.infCte.receb) === null || _113 === void 0 ? void 0 : _113.enderReceb) === null || _114 === void 0 ? void 0 : _114.xMun) === null || _115 === void 0 ? void 0 : _115._text)
                    .comCidade((_120 = (_119 = (_118 = (_117 = (_116 = json.cteProc) === null || _116 === void 0 ? void 0 : _116.CTe) === null || _117 === void 0 ? void 0 : _117.infCte.receb) === null || _118 === void 0 ? void 0 : _118.enderReceb) === null || _119 === void 0 ? void 0 : _119.xMun) === null || _120 === void 0 ? void 0 : _120._text)
                    .comUf((_125 = (_124 = (_123 = (_122 = (_121 = json.cteProc) === null || _121 === void 0 ? void 0 : _121.CTe) === null || _122 === void 0 ? void 0 : _122.infCte.receb) === null || _123 === void 0 ? void 0 : _123.enderReceb) === null || _124 === void 0 ? void 0 : _124.UF) === null || _125 === void 0 ? void 0 : _125._text)
                    .comPais((_130 = (_129 = (_128 = (_127 = (_126 = json.cteProc) === null || _126 === void 0 ? void 0 : _126.CTe) === null || _127 === void 0 ? void 0 : _127.infCte.receb) === null || _128 === void 0 ? void 0 : _128.enderReceb) === null || _129 === void 0 ? void 0 : _129.xPais) === null || _130 === void 0 ? void 0 : _130._text));
                expeditor = new expeditor_1.default();
                expeditor.comNome((_134 = (_133 = (_132 = (_131 = json.cteProc) === null || _131 === void 0 ? void 0 : _131.CTe) === null || _132 === void 0 ? void 0 : _132.infCte.exped) === null || _133 === void 0 ? void 0 : _133.xNome) === null || _134 === void 0 ? void 0 : _134._text);
                expeditor.comRegistroNacional(maskFields.maskCnpj((_139 = (_138 = (_137 = (_136 = (_135 = json.cteProc) === null || _135 === void 0 ? void 0 : _135.CTe) === null || _136 === void 0 ? void 0 : _136.infCte) === null || _137 === void 0 ? void 0 : _137.exped) === null || _138 === void 0 ? void 0 : _138.CNPJ) === null || _139 === void 0 ? void 0 : _139._text));
                expeditor.comInscricaoEstadual((_144 = (_143 = (_142 = (_141 = (_140 = json.cteProc) === null || _140 === void 0 ? void 0 : _140.CTe) === null || _141 === void 0 ? void 0 : _141.infCte) === null || _142 === void 0 ? void 0 : _142.exped) === null || _143 === void 0 ? void 0 : _143.IE) === null || _144 === void 0 ? void 0 : _144._text);
                expeditor.comTelefone((_148 = (_147 = (_146 = (_145 = json.cteProc) === null || _145 === void 0 ? void 0 : _145.CTe) === null || _146 === void 0 ? void 0 : _146.infCte.exped) === null || _147 === void 0 ? void 0 : _147.fone) === null || _148 === void 0 ? void 0 : _148._text);
                expeditor.comEmail("");
                expeditor.comEndereco(new endereco_1.default()
                    .comLogradouro((_153 = (_152 = (_151 = (_150 = (_149 = json.cteProc) === null || _149 === void 0 ? void 0 : _149.CTe) === null || _150 === void 0 ? void 0 : _150.infCte.exped) === null || _151 === void 0 ? void 0 : _151.enderExped) === null || _152 === void 0 ? void 0 : _152.xLgr) === null || _153 === void 0 ? void 0 : _153._text)
                    .comNumero((_158 = (_157 = (_156 = (_155 = (_154 = json.cteProc) === null || _154 === void 0 ? void 0 : _154.CTe) === null || _155 === void 0 ? void 0 : _155.infCte.exped) === null || _156 === void 0 ? void 0 : _156.enderExped) === null || _157 === void 0 ? void 0 : _157.nro) === null || _158 === void 0 ? void 0 : _158._text)
                    .comComplemento((_163 = (_162 = (_161 = (_160 = (_159 = json.cteProc) === null || _159 === void 0 ? void 0 : _159.CTe) === null || _160 === void 0 ? void 0 : _160.infCte.exped) === null || _161 === void 0 ? void 0 : _161.enderExped) === null || _162 === void 0 ? void 0 : _162.xCpl) === null || _163 === void 0 ? void 0 : _163._text)
                    .comCep(maskFields.maskCEP((_168 = (_167 = (_166 = (_165 = (_164 = json.cteProc) === null || _164 === void 0 ? void 0 : _164.CTe) === null || _165 === void 0 ? void 0 : _165.infCte.exped) === null || _166 === void 0 ? void 0 : _166.enderExped) === null || _167 === void 0 ? void 0 : _167.CEP) === null || _168 === void 0 ? void 0 : _168._text))
                    .comBairro((_173 = (_172 = (_171 = (_170 = (_169 = json.cteProc) === null || _169 === void 0 ? void 0 : _169.CTe) === null || _170 === void 0 ? void 0 : _170.infCte.exped) === null || _171 === void 0 ? void 0 : _171.enderExped) === null || _172 === void 0 ? void 0 : _172.xBairro) === null || _173 === void 0 ? void 0 : _173._text)
                    .comMunicipio((_178 = (_177 = (_176 = (_175 = (_174 = json.cteProc) === null || _174 === void 0 ? void 0 : _174.CTe) === null || _175 === void 0 ? void 0 : _175.infCte.exped) === null || _176 === void 0 ? void 0 : _176.enderExped) === null || _177 === void 0 ? void 0 : _177.xMun) === null || _178 === void 0 ? void 0 : _178._text)
                    .comCidade((_183 = (_182 = (_181 = (_180 = (_179 = json.cteProc) === null || _179 === void 0 ? void 0 : _179.CTe) === null || _180 === void 0 ? void 0 : _180.infCte.exped) === null || _181 === void 0 ? void 0 : _181.enderExped) === null || _182 === void 0 ? void 0 : _182.xMun) === null || _183 === void 0 ? void 0 : _183._text)
                    .comUf((_188 = (_187 = (_186 = (_185 = (_184 = json.cteProc) === null || _184 === void 0 ? void 0 : _184.CTe) === null || _185 === void 0 ? void 0 : _185.infCte.exped) === null || _186 === void 0 ? void 0 : _186.enderExped) === null || _187 === void 0 ? void 0 : _187.UF) === null || _188 === void 0 ? void 0 : _188._text)
                    .comPais((_193 = (_192 = (_191 = (_190 = (_189 = json.cteProc) === null || _189 === void 0 ? void 0 : _189.CTe) === null || _190 === void 0 ? void 0 : _190.infCte.exped) === null || _191 === void 0 ? void 0 : _191.enderExped) === null || _192 === void 0 ? void 0 : _192.xPais) === null || _193 === void 0 ? void 0 : _193._text));
                emitente = new emitente_1.default();
                emitente.comNome((_197 = (_196 = (_195 = (_194 = json.cteProc) === null || _194 === void 0 ? void 0 : _194.CTe) === null || _195 === void 0 ? void 0 : _195.infCte.emit) === null || _196 === void 0 ? void 0 : _196.xNome) === null || _197 === void 0 ? void 0 : _197._text);
                emitente.comRegistroNacional(maskFields.maskCnpj((_202 = (_201 = (_200 = (_199 = (_198 = json.cteProc) === null || _198 === void 0 ? void 0 : _198.CTe) === null || _199 === void 0 ? void 0 : _199.infCte) === null || _200 === void 0 ? void 0 : _200.emit) === null || _201 === void 0 ? void 0 : _201.CNPJ) === null || _202 === void 0 ? void 0 : _202._text));
                emitente.comInscricaoEstadual((_207 = (_206 = (_205 = (_204 = (_203 = json.cteProc) === null || _203 === void 0 ? void 0 : _203.CTe) === null || _204 === void 0 ? void 0 : _204.infCte) === null || _205 === void 0 ? void 0 : _205.emit) === null || _206 === void 0 ? void 0 : _206.IE) === null || _207 === void 0 ? void 0 : _207._text);
                emitente.comTelefone((_212 = (_211 = (_210 = (_209 = (_208 = json.cteProc) === null || _208 === void 0 ? void 0 : _208.CTe) === null || _209 === void 0 ? void 0 : _209.infCte.emit) === null || _210 === void 0 ? void 0 : _210.enderEmit) === null || _211 === void 0 ? void 0 : _211.fone) === null || _212 === void 0 ? void 0 : _212._text);
                emitente.comEmail("");
                emitente.comEndereco(new endereco_1.default()
                    .comLogradouro((_216 = (_215 = (_214 = (_213 = json.cteProc) === null || _213 === void 0 ? void 0 : _213.CTe) === null || _214 === void 0 ? void 0 : _214.infCte.emit) === null || _215 === void 0 ? void 0 : _215.enderEmit.xLgr) === null || _216 === void 0 ? void 0 : _216._text)
                    .comNumero((_220 = (_219 = (_218 = (_217 = json.cteProc) === null || _217 === void 0 ? void 0 : _217.CTe) === null || _218 === void 0 ? void 0 : _218.infCte.emit) === null || _219 === void 0 ? void 0 : _219.enderEmit.nro) === null || _220 === void 0 ? void 0 : _220._text)
                    .comComplemento((_224 = (_223 = (_222 = (_221 = json.cteProc) === null || _221 === void 0 ? void 0 : _221.CTe) === null || _222 === void 0 ? void 0 : _222.infCte.emit) === null || _223 === void 0 ? void 0 : _223.enderEmit.xCpl) === null || _224 === void 0 ? void 0 : _224._text)
                    .comCep(maskFields.maskCEP((_228 = (_227 = (_226 = (_225 = json.cteProc) === null || _225 === void 0 ? void 0 : _225.CTe) === null || _226 === void 0 ? void 0 : _226.infCte.emit.enderEmit) === null || _227 === void 0 ? void 0 : _227.CEP) === null || _228 === void 0 ? void 0 : _228._text))
                    .comBairro((_232 = (_231 = (_230 = (_229 = json.cteProc) === null || _229 === void 0 ? void 0 : _229.CTe) === null || _230 === void 0 ? void 0 : _230.infCte.emit) === null || _231 === void 0 ? void 0 : _231.enderEmit.xBairro) === null || _232 === void 0 ? void 0 : _232._text)
                    .comMunicipio(String((_236 = (_235 = (_234 = (_233 = json.cteProc) === null || _233 === void 0 ? void 0 : _233.CTe) === null || _234 === void 0 ? void 0 : _234.infCte.emit) === null || _235 === void 0 ? void 0 : _235.enderEmit.xMun) === null || _236 === void 0 ? void 0 : _236._text).toUpperCase())
                    .comCidade((_240 = (_239 = (_238 = (_237 = json.cteProc) === null || _237 === void 0 ? void 0 : _237.CTe) === null || _238 === void 0 ? void 0 : _238.infCte.emit) === null || _239 === void 0 ? void 0 : _239.enderEmit.xMun) === null || _240 === void 0 ? void 0 : _240._text)
                    .comUf((_244 = (_243 = (_242 = (_241 = json.cteProc) === null || _241 === void 0 ? void 0 : _241.CTe) === null || _242 === void 0 ? void 0 : _242.infCte.emit) === null || _243 === void 0 ? void 0 : _243.enderEmit.UF) === null || _244 === void 0 ? void 0 : _244._text)
                    .comPais((_249 = (_248 = (_247 = (_246 = (_245 = json.cteProc) === null || _245 === void 0 ? void 0 : _245.CTe) === null || _246 === void 0 ? void 0 : _246.infCte.emit) === null || _247 === void 0 ? void 0 : _247.enderEmit) === null || _248 === void 0 ? void 0 : _248.xPais) === null || _249 === void 0 ? void 0 : _249._text));
                destinatario = new destinatario_1.default();
                destinatario.comNome((_253 = (_252 = (_251 = (_250 = json.cteProc) === null || _250 === void 0 ? void 0 : _250.CTe) === null || _251 === void 0 ? void 0 : _251.infCte.dest) === null || _252 === void 0 ? void 0 : _252.xNome) === null || _253 === void 0 ? void 0 : _253._text);
                destinatario.comRegistroNacional(maskFields.maskCnpj((_258 = (_257 = (_256 = (_255 = (_254 = json.cteProc) === null || _254 === void 0 ? void 0 : _254.CTe) === null || _255 === void 0 ? void 0 : _255.infCte) === null || _256 === void 0 ? void 0 : _256.dest) === null || _257 === void 0 ? void 0 : _257.CNPJ) === null || _258 === void 0 ? void 0 : _258._text));
                destinatario.comTelefone((_262 = (_261 = (_260 = (_259 = json.cteProc) === null || _259 === void 0 ? void 0 : _259.CTe) === null || _260 === void 0 ? void 0 : _260.infCte.dest) === null || _261 === void 0 ? void 0 : _261.fone) === null || _262 === void 0 ? void 0 : _262._text); //Criamos na INfe.ts
                destinatario.comInscricaoEstadual((_267 = (_266 = (_265 = (_264 = (_263 = json.cteProc) === null || _263 === void 0 ? void 0 : _263.CTe) === null || _264 === void 0 ? void 0 : _264.infCte) === null || _265 === void 0 ? void 0 : _265.dest) === null || _266 === void 0 ? void 0 : _266.IE) === null || _267 === void 0 ? void 0 : _267._text);
                destinatario.comEndereco(new endereco_1.default()
                    .comLogradouro((_272 = (_271 = (_270 = (_269 = (_268 = json.cteProc) === null || _268 === void 0 ? void 0 : _268.CTe) === null || _269 === void 0 ? void 0 : _269.infCte.dest) === null || _270 === void 0 ? void 0 : _270.enderDest) === null || _271 === void 0 ? void 0 : _271.xLgr) === null || _272 === void 0 ? void 0 : _272._text)
                    .comNumero((_277 = (_276 = (_275 = (_274 = (_273 = json.cteProc) === null || _273 === void 0 ? void 0 : _273.CTe) === null || _274 === void 0 ? void 0 : _274.infCte.dest) === null || _275 === void 0 ? void 0 : _275.enderDest) === null || _276 === void 0 ? void 0 : _276.nro) === null || _277 === void 0 ? void 0 : _277._text)
                    // .comComplemento("") //json.cteProc?.CTe?.infCte.rem?.enderReme.xCpl?._text
                    .comCep(maskFields.maskCEP((_282 = (_281 = (_280 = (_279 = (_278 = json.cteProc) === null || _278 === void 0 ? void 0 : _278.CTe) === null || _279 === void 0 ? void 0 : _279.infCte.dest) === null || _280 === void 0 ? void 0 : _280.enderDest) === null || _281 === void 0 ? void 0 : _281.CEP) === null || _282 === void 0 ? void 0 : _282._text))
                    .comBairro((_287 = (_286 = (_285 = (_284 = (_283 = json.cteProc) === null || _283 === void 0 ? void 0 : _283.CTe) === null || _284 === void 0 ? void 0 : _284.infCte.dest) === null || _285 === void 0 ? void 0 : _285.enderDest) === null || _286 === void 0 ? void 0 : _286.xBairro) === null || _287 === void 0 ? void 0 : _287._text)
                    .comMunicipio(String((_292 = (_291 = (_290 = (_289 = (_288 = json.cteProc) === null || _288 === void 0 ? void 0 : _288.CTe) === null || _289 === void 0 ? void 0 : _289.infCte.dest) === null || _290 === void 0 ? void 0 : _290.enderDest) === null || _291 === void 0 ? void 0 : _291.xMun) === null || _292 === void 0 ? void 0 : _292._text).toUpperCase())
                    .comCidade((_297 = (_296 = (_295 = (_294 = (_293 = json.cteProc) === null || _293 === void 0 ? void 0 : _293.CTe) === null || _294 === void 0 ? void 0 : _294.infCte.dest) === null || _295 === void 0 ? void 0 : _295.enderDest) === null || _296 === void 0 ? void 0 : _296.xMun) === null || _297 === void 0 ? void 0 : _297._text)
                    .comUf((_302 = (_301 = (_300 = (_299 = (_298 = json.cteProc) === null || _298 === void 0 ? void 0 : _298.CTe) === null || _299 === void 0 ? void 0 : _299.infCte.dest) === null || _300 === void 0 ? void 0 : _300.enderDest) === null || _301 === void 0 ? void 0 : _301.UF) === null || _302 === void 0 ? void 0 : _302._text)
                    .comPais((_307 = (_306 = (_305 = (_304 = (_303 = json.cteProc) === null || _303 === void 0 ? void 0 : _303.CTe) === null || _304 === void 0 ? void 0 : _304.infCte.dest) === null || _305 === void 0 ? void 0 : _305.enderDest) === null || _306 === void 0 ? void 0 : _306.xPais) === null || _307 === void 0 ? void 0 : _307._text));
                transportador = new transportador_1.default();
                transportador.comNome((_311 = (_310 = (_309 = (_308 = json.cteProc) === null || _308 === void 0 ? void 0 : _308.CTe) === null || _309 === void 0 ? void 0 : _309.infCte.rem) === null || _310 === void 0 ? void 0 : _310.xNome) === null || _311 === void 0 ? void 0 : _311._text);
                transportador.comRegistroNacional(maskFields.maskCnpj((_315 = (_314 = (_313 = (_312 = json.cteProc) === null || _312 === void 0 ? void 0 : _312.CTe) === null || _313 === void 0 ? void 0 : _313.infCte.rem) === null || _314 === void 0 ? void 0 : _314.CNPJ) === null || _315 === void 0 ? void 0 : _315._text));
                transportador.comInscricaoEstadual((_319 = (_318 = (_317 = (_316 = json.cteProc) === null || _316 === void 0 ? void 0 : _316.CTe) === null || _317 === void 0 ? void 0 : _317.infCte.rem) === null || _318 === void 0 ? void 0 : _318.IE) === null || _319 === void 0 ? void 0 : _319._text);
                transportador.comTelefone((_324 = (_323 = (_322 = (_321 = (_320 = json.cteProc) === null || _320 === void 0 ? void 0 : _320.CTe) === null || _321 === void 0 ? void 0 : _321.infCte) === null || _322 === void 0 ? void 0 : _322.rem) === null || _323 === void 0 ? void 0 : _323.fone) === null || _324 === void 0 ? void 0 : _324._text);
                transportador.comEndereco(new endereco_1.default()
                    .comLogradouro((_330 = (_329 = (_328 = (_327 = (_326 = (_325 = json.cteProc) === null || _325 === void 0 ? void 0 : _325.CTe) === null || _326 === void 0 ? void 0 : _326.infCte) === null || _327 === void 0 ? void 0 : _327.rem) === null || _328 === void 0 ? void 0 : _328.enderReme) === null || _329 === void 0 ? void 0 : _329.xLgr) === null || _330 === void 0 ? void 0 : _330._text)
                    .comNumero((_336 = (_335 = (_334 = (_333 = (_332 = (_331 = json.cteProc) === null || _331 === void 0 ? void 0 : _331.CTe) === null || _332 === void 0 ? void 0 : _332.infCte) === null || _333 === void 0 ? void 0 : _333.rem) === null || _334 === void 0 ? void 0 : _334.enderReme) === null || _335 === void 0 ? void 0 : _335.nro) === null || _336 === void 0 ? void 0 : _336._text)
                    .comCep(maskFields.maskCEP((_341 = (_340 = (_339 = (_338 = (_337 = json.cteProc) === null || _337 === void 0 ? void 0 : _337.CTe) === null || _338 === void 0 ? void 0 : _338.infCte.rem) === null || _339 === void 0 ? void 0 : _339.enderReme) === null || _340 === void 0 ? void 0 : _340.CEP) === null || _341 === void 0 ? void 0 : _341._text))
                    .comBairro((_346 = (_345 = (_344 = (_343 = (_342 = json.cteProc) === null || _342 === void 0 ? void 0 : _342.CTe) === null || _343 === void 0 ? void 0 : _343.infCte.rem) === null || _344 === void 0 ? void 0 : _344.enderReme) === null || _345 === void 0 ? void 0 : _345.xBairro) === null || _346 === void 0 ? void 0 : _346._text)
                    .comMunicipio(String((_351 = (_350 = (_349 = (_348 = (_347 = json.cteProc) === null || _347 === void 0 ? void 0 : _347.CTe) === null || _348 === void 0 ? void 0 : _348.infCte.rem) === null || _349 === void 0 ? void 0 : _349.enderReme) === null || _350 === void 0 ? void 0 : _350.xMun) === null || _351 === void 0 ? void 0 : _351._text).toUpperCase())
                    .comCidade((_356 = (_355 = (_354 = (_353 = (_352 = json.cteProc) === null || _352 === void 0 ? void 0 : _352.CTe) === null || _353 === void 0 ? void 0 : _353.infCte.rem) === null || _354 === void 0 ? void 0 : _354.enderReme) === null || _355 === void 0 ? void 0 : _355.xMun) === null || _356 === void 0 ? void 0 : _356._text)
                    .comUf((_361 = (_360 = (_359 = (_358 = (_357 = json.cteProc) === null || _357 === void 0 ? void 0 : _357.CTe) === null || _358 === void 0 ? void 0 : _358.infCte.rem) === null || _359 === void 0 ? void 0 : _359.enderReme) === null || _360 === void 0 ? void 0 : _360.UF) === null || _361 === void 0 ? void 0 : _361._text)
                    .comPais((_366 = (_365 = (_364 = (_363 = (_362 = json.cteProc) === null || _362 === void 0 ? void 0 : _362.CTe) === null || _363 === void 0 ? void 0 : _363.infCte.rem) === null || _364 === void 0 ? void 0 : _364.enderReme) === null || _365 === void 0 ? void 0 : _365.xPais) === null || _366 === void 0 ? void 0 : _366._text));
                protocolo = new protocolo_1.default();
                protocolo.comCodigo((_370 = (_369 = (_368 = (_367 = json.cteProc) === null || _367 === void 0 ? void 0 : _367.protCTe) === null || _368 === void 0 ? void 0 : _368.infProt) === null || _369 === void 0 ? void 0 : _369.nProt) === null || _370 === void 0 ? void 0 : _370._text);
                protocolo.comData(maskFields.maskDate((_374 = (_373 = (_372 = (_371 = json.cteProc) === null || _371 === void 0 ? void 0 : _371.protCTe) === null || _372 === void 0 ? void 0 : _372.infProt) === null || _373 === void 0 ? void 0 : _373.dhRecbto) === null || _374 === void 0 ? void 0 : _374._text));
                icms = this.returnICMS((_378 = (_377 = (_376 = (_375 = json.cteProc) === null || _375 === void 0 ? void 0 : _375.CTe) === null || _376 === void 0 ? void 0 : _376.infCte) === null || _377 === void 0 ? void 0 : _377.imp) === null || _378 === void 0 ? void 0 : _378.ICMS);
                impostos = new impostos_1.default();
                impostos.comBaseDeCalculoDoIcms(maskFields.maskNumber(((_379 = icms === null || icms === void 0 ? void 0 : icms.vBC) === null || _379 === void 0 ? void 0 : _379._text) || ((_380 = icms === null || icms === void 0 ? void 0 : icms.vBCSTRet) === null || _380 === void 0 ? void 0 : _380._text) || ((_381 = icms === null || icms === void 0 ? void 0 : icms.vBCOutraUF) === null || _381 === void 0 ? void 0 : _381._text)));
                impostos.comValorDoIcms(maskFields.maskNumber(((_382 = icms === null || icms === void 0 ? void 0 : icms.vICMS) === null || _382 === void 0 ? void 0 : _382._text) || ((_383 = icms === null || icms === void 0 ? void 0 : icms.vICMSOutraUF) === null || _383 === void 0 ? void 0 : _383._text)));
                impostos.comValorDoIcmsSt(maskFields.maskNumber((_384 = icms === null || icms === void 0 ? void 0 : icms.vICMSSTRet) === null || _384 === void 0 ? void 0 : _384._text));
                impostos.comValorDoPis((_385 = icms === null || icms === void 0 ? void 0 : icms.CST) === null || _385 === void 0 ? void 0 : _385._text); /// usado o mesmo campo para CST
                impostos.comValorTotalDoIpi(maskFields.maskNumber(((_386 = icms === null || icms === void 0 ? void 0 : icms.pICMS) === null || _386 === void 0 ? void 0 : _386._text) || ((_387 = icms === null || icms === void 0 ? void 0 : icms.pICMSOutraUF) === null || _387 === void 0 ? void 0 : _387._text))); // aliquota ICMS
                impostos.comValorDaCofins(maskFields.maskNumber((_392 = (_391 = (_390 = (_389 = (_388 = json.cteProc) === null || _388 === void 0 ? void 0 : _388.CTe) === null || _389 === void 0 ? void 0 : _389.infCte) === null || _390 === void 0 ? void 0 : _390.imp) === null || _391 === void 0 ? void 0 : _391.pRedBC) === null || _392 === void 0 ? void 0 : _392._text)); // RED
                danfe = new danfe_1.default();
                danfe.comChaveDeAcesso((_395 = (_394 = (_393 = json.cteProc) === null || _393 === void 0 ? void 0 : _393.protCTe) === null || _394 === void 0 ? void 0 : _394.infProt.chCTe) === null || _395 === void 0 ? void 0 : _395._text);
                danfe.comEmitente(emitente);
                danfe.comDestinatario(destinatario);
                danfe.comTransportador(transportador);
                danfe.comCteInfo(cteInfo);
                danfe.comRecebedor(recebedor);
                danfe.comExpeditor(expeditor);
                danfe.comProtocolo(protocolo);
                danfe.comImpostos(impostos);
                danfe.comTipo("saida");
                danfe.comNaturezaDaOperacao((_398 = (_397 = (_396 = json.cteProc) === null || _396 === void 0 ? void 0 : _396.CTe) === null || _397 === void 0 ? void 0 : _397.infCte.ide.natOp) === null || _398 === void 0 ? void 0 : _398._text);
                danfe.comNumero((_401 = (_400 = (_399 = json.cteProc) === null || _399 === void 0 ? void 0 : _399.CTe) === null || _400 === void 0 ? void 0 : _400.infCte.ide.nCT) === null || _401 === void 0 ? void 0 : _401._text);
                danfe.comSerie((_404 = (_403 = (_402 = json.cteProc) === null || _402 === void 0 ? void 0 : _402.CTe) === null || _403 === void 0 ? void 0 : _403.infCte.ide.serie) === null || _404 === void 0 ? void 0 : _404._text);
                danfe.comDataDaEmissao(maskFields.maskDateTime((_407 = (_406 = (_405 = json.cteProc) === null || _405 === void 0 ? void 0 : _405.CTe) === null || _406 === void 0 ? void 0 : _406.infCte.ide.dhEmi) === null || _407 === void 0 ? void 0 : _407._text));
                danfe.comDataDaEntradaOuSaida(maskFields.maskDate((_410 = (_409 = (_408 = json.cteProc) === null || _408 === void 0 ? void 0 : _408.protCTe) === null || _409 === void 0 ? void 0 : _409.infProt.dhRecbto) === null || _410 === void 0 ? void 0 : _410._text));
                danfe.comModalidadeDoFrete((_413 = (_412 = (_411 = json.cteProc) === null || _411 === void 0 ? void 0 : _411.CTe) === null || _412 === void 0 ? void 0 : _412.infCte.ide.modal) === null || _413 === void 0 ? void 0 : _413._text); // json.cteProc?.CTe?.infCte.ide.mod?._text
                danfe.comInscricaoEstadualDoSubstitutoTributario("");
                danfe.comInformacoesComplementares("");
                danfe.comValorTotalDosProdutos(maskFields.maskNumber((_418 = (_417 = (_416 = (_415 = (_414 = json.cteProc) === null || _414 === void 0 ? void 0 : _414.CTe) === null || _415 === void 0 ? void 0 : _415.infCte.infCTeNorm) === null || _416 === void 0 ? void 0 : _416.infCarga) === null || _417 === void 0 ? void 0 : _417.vCarga) === null || _418 === void 0 ? void 0 : _418._text));
                danfe.comValorTotalDosServicos(maskFields.maskNumber((_423 = (_422 = (_421 = (_420 = (_419 = json.cteProc) === null || _419 === void 0 ? void 0 : _419.CTe) === null || _420 === void 0 ? void 0 : _420.infCte) === null || _421 === void 0 ? void 0 : _421.vPrest) === null || _422 === void 0 ? void 0 : _422.vTPrest) === null || _423 === void 0 ? void 0 : _423._text));
                danfe.comValorDoFrete(maskFields.maskNumber((_428 = (_427 = (_426 = (_425 = (_424 = json.cteProc) === null || _424 === void 0 ? void 0 : _424.CTe) === null || _425 === void 0 ? void 0 : _425.infCte) === null || _426 === void 0 ? void 0 : _426.vPrest) === null || _427 === void 0 ? void 0 : _427.vRec) === null || _428 === void 0 ? void 0 : _428._text));
                if (((_432 = (_431 = (_430 = (_429 = json.cteProc) === null || _429 === void 0 ? void 0 : _429.CTe) === null || _430 === void 0 ? void 0 : _430.infCte.infCTeNorm) === null || _431 === void 0 ? void 0 : _431.infDoc) === null || _432 === void 0 ? void 0 : _432.infNFe) &&
                    Array.isArray((_436 = (_435 = (_434 = (_433 = json.cteProc) === null || _433 === void 0 ? void 0 : _433.CTe) === null || _434 === void 0 ? void 0 : _434.infCte.infCTeNorm) === null || _435 === void 0 ? void 0 : _435.infDoc) === null || _436 === void 0 ? void 0 : _436.infNFe)) {
                    for (_i = 0, _a = (_440 = (_439 = (_438 = (_437 = json.cteProc) === null || _437 === void 0 ? void 0 : _437.CTe) === null || _438 === void 0 ? void 0 : _438.infCte.infCTeNorm) === null || _439 === void 0 ? void 0 : _439.infDoc) === null || _440 === void 0 ? void 0 : _440.infNFe; _i < _a.length; _i++) {
                        item = _a[_i];
                        danfe.adicionarItem(new item_1.default()
                            .comCodigo(item.chave._text)
                            .comDescricao("".concat(String(item.chave._text).substring(22, 25), "/").concat(String(item.chave._text).substring(25, 34))));
                    }
                }
                else if ((_444 = (_443 = (_442 = (_441 = json.cteProc) === null || _441 === void 0 ? void 0 : _441.CTe) === null || _442 === void 0 ? void 0 : _442.infCte.infCTeNorm) === null || _443 === void 0 ? void 0 : _443.infDoc) === null || _444 === void 0 ? void 0 : _444.infNFe) {
                    danfe.adicionarItem(new item_1.default()
                        .comCodigo((_448 = (_447 = (_446 = (_445 = json.cteProc) === null || _445 === void 0 ? void 0 : _445.CTe) === null || _446 === void 0 ? void 0 : _446.infCte.infCTeNorm) === null || _447 === void 0 ? void 0 : _447.infDoc) === null || _448 === void 0 ? void 0 : _448.infNFe.chave._text)
                        .comDescricao("".concat(String((_452 = (_451 = (_450 = (_449 = json.cteProc) === null || _449 === void 0 ? void 0 : _449.CTe) === null || _450 === void 0 ? void 0 : _450.infCte.infCTeNorm) === null || _451 === void 0 ? void 0 : _451.infDoc) === null || _452 === void 0 ? void 0 : _452.infNFe.chave._text).substring(22, 25), "/").concat(String((_456 = (_455 = (_454 = (_453 = json.cteProc) === null || _453 === void 0 ? void 0 : _453.CTe) === null || _454 === void 0 ? void 0 : _454.infCte.infCTeNorm) === null || _455 === void 0 ? void 0 : _455.infDoc) === null || _456 === void 0 ? void 0 : _456.infNFe.chave._text).substring(25, 34))));
                }
                new gerador_1.default(danfe).gerarCTE({
                    ambiente: ((_458 = (_457 = json.cteProc) === null || _457 === void 0 ? void 0 : _457.protCTe) === null || _458 === void 0 ? void 0 : _458.infProt.tpAmb._text) === "2"
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
    return JsonToCTE;
}());
exports.JsonToCTE = JsonToCTE;
//# sourceMappingURL=json-to-cte-use-case.js.map