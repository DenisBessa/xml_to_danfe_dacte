export default class Volumes {
	getQuantidade() {
		return this._quantidade || 0;
	}
	getQuantidadeFormatada() {
		return this.getQuantidade();
	}
	comQuantidade(_quantidade) {
		this._quantidade = _quantidade;
		return this;
	}
	getEspecie() {
		return this._especie || "";
	}
	comEspecie(_especie) {
		this._especie = _especie;
		return this;
	}
	getMarca() {
		return this._marca || "";
	}
	comMarca(_marca) {
		this._marca = _marca;
		return this;
	}
	getNumeracao() {
		return this._numeracao || "";
	}
	comNumeracao(_numeracao) {
		this._numeracao = _numeracao;
		return this;
	}
	getPesoBruto() {
		return this._pesoBruto || "";
	}
	comPesoBruto(_pesoBruto) {
		this._pesoBruto = _pesoBruto;
		return this;
	}
	getPesoLiquido() {
		return this._pesoLiquido || "";
	}
	comPesoLiquido(_pesoLiquido) {
		this._pesoLiquido = _pesoLiquido;
		return this;
	}
}
