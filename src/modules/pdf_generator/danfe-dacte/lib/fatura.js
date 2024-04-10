export default class Fatura {
	getNumero() {
		return this._numero;
	}
	comNumero(_numero) {
		this._numero = _numero;
		return this;
	}
	getValorOriginal() {
		return this._valorOriginal;
	}
	getValorOriginalFormatado() {
		return this._valorOriginal || 0;
	}
	comValorOriginal(_valorOriginal) {
		this._valorOriginal = _valorOriginal;
		return this;
	}
	getValorDoDesconto() {
		return this._valorDoDesconto;
	}
	getValorDoDescontoFormatado() {
		return this._valorDoDesconto || 0;
	}
	comValorDoDesconto(_valorDoDesconto) {
		this._valorDoDesconto = _valorDoDesconto;
		return this;
	}
	getValorLiquido() {
		return this._valorLiquido;
	}
	getValorLiquidoFormatado() {
		return this._valorLiquido || 0;
	}
	comValorLiquido(_valorLiquido) {
		this._valorLiquido = _valorLiquido;
		return this;
	}
	getFormaDePagamento() {
		return {
			0: "A VISTA",
			1: "A PRAZO",
			2: "OUTROS",
		}[this.getCodFormaDePagamento()];
	}
	comFormaDePagamento(_formaDePagamento) {
		this._formaDePagamento = _formaDePagamento;
		return this;
	}
	getCodFormaDePagamento() {
		return this._formaDePagamento;
	}
	removerFormaDePagamento() {
		this._formaDePagamento = null;
		return this;
	}
}
