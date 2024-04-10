"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.xmlToJson = xmlToJson;
var xml_js_1 = __importDefault(require("xml-js"));
function xmlToJson(xml) {
    var options = { compact: true, ignoreComment: true, spaces: 1 };
    var result = xml_js_1.default.xml2json(xml, options);
    return JSON.parse(result);
}
//# sourceMappingURL=xml-to-json.js.map