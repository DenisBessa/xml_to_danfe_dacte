export default class Protocolo {
	getCodigo() {
		return this._codigo || "";
	}
	comCodigo(_codigo) {
		this._codigo = _codigo;
		return this;
	}
	getData() {
		return this._data;
	}
	getDataFormatada() {
		if (this.getData()) {
			return this.getData();
		}

		return "";
	}
	comData(_data) {
		this._data = _data;
		return this;
	}
	getFormatacao() {
		let resultado = "";

		if (this.getCodigo()) {
			resultado += this.getCodigo();
		}

		if (this.getCodigo() && this.getData()) {
			resultado += " - ";
		}

		if (this.getData()) {
			resultado += this.getDataFormatada();
		}

		return resultado;
	}
}
