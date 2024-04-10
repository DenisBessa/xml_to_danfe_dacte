export default class Duplicata {
	getNumero() {
		return this._numero;
	}
	comNumero(_numero) {
		this._numero = _numero;
		return this;
	}
	getVencimento() {
		return this._vencimento;
	}
	getVencimentoFormatado() {
		if (this._vencimento) {
			return this._vencimento;
		}

		return "";
	}
	comVencimento(_vencimento) {
		this._vencimento = _vencimento;
		return this;
	}
	getValor() {
		return this._valor;
	}
	getValorFormatado() {
		return this._valor || 0;
	}
	comValor(_valor) {
		this._valor = _valor;
		return this;
	}
}
