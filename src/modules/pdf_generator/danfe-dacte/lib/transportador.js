import Pessoa from "@/modules/pdf_generator/danfe-dacte/lib/pessoa";

export default class Transportador extends Pessoa {
	getCodigoAntt() {
		return this._codigoAntt || "";
	}
	comCodigoAntt(_codigoAntt) {
		if (_codigoAntt) {
			this._codigoAntt = _codigoAntt;
		}

		return this;
	}
	getPlacaDoVeiculoFormatada() {
		return this.getPlacaDoVeiculo();
	}
	getPlacaDoVeiculo() {
		return this._placaDoVeiculo || "";
	}
	comPlacaDoVeiculo(_placaDoVeiculo) {
		return this._placaDoVeiculo;
	}
	getUfDaPlacaDoVeiculo() {
		return this._ufDaPlacaDoVeiculo || "";
	}
	comUfDaPlacaDoVeiculo(_ufDaPlacaDoVeiculo) {
		// if(siglasDosEstados.indexOf(_ufDaPlacaDoVeiculo) === -1) {
		//     throw new Error('Não é um estado válido');
		// }
		return this._ufDaPlacaDoVeiculo;
	}
}
