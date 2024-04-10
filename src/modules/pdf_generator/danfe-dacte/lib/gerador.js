import geradorDePdf from "@/modules/pdf_generator/danfe-dacte/lib/geradores/geradorDePdf";
import geradorPdfCTEOS from "@/modules/pdf_generator/danfe-dacte/lib/geradores/geradorPdfCteOs";
import gerarPdfCTE from "@/modules/pdf_generator/danfe-dacte/lib/geradores/gerarPdfCTE";

export default class Gerador {
	constructor(danfe) {
		this._danfe = danfe;
	}
	gerarPDF(opcoes, callback) {
		if (typeof opcoes === "function") {
			callback = opcoes;
			opcoes = {};
		}

		geradorDePdf(this._danfe, opcoes, callback);
	}
	gerarCTE(opcoes, callback) {
		if (typeof opcoes === "function") {
			callback = opcoes;
			opcoes = {};
		}

		gerarPdfCTE(this._danfe, opcoes, callback);
	}
	gerarCTEOS(opcoes, callback) {
		if (typeof opcoes === "function") {
			callback = opcoes;
			opcoes = {};
		}

		geradorPdfCTEOS(this._danfe, opcoes, callback);
	}
}
