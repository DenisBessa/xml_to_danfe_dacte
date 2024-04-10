import Pessoa from "@/modules/pdf_generator/danfe-dacte/lib/pessoa";

class Emitente extends Pessoa {
	getLogotipo() {
		return this._logotipo || "";
	}
	comLogotipo(_logotipo) {
		this._logotipo = _logotipo;
		return this;
	}
	getInscricaoMunicipal() {
		return this._inscricaoMunicipal || "";
	}
	comInscricaoMunicipal(_inscricaoMunicipal) {
		this._inscricaoMunicipal = _inscricaoMunicipal;
		return this;
	}
}

export default Emitente;
