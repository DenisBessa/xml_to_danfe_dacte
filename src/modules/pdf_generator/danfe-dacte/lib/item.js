export default class Item {
	getCodigo() {
		return this._codigo || "";
	}
	comCodigo(_codigo) {
		this._codigo = _codigo;
		return this;
	}
	getDescricao() {
		return this._descricao || "";
	}
	comDescricao(_descricao) {
		this._descricao = _descricao;
		return this;
	}
	getInformacoesAdicionais() {
		return this._informacoesAdicionais;
	}
	comInformacoesAdicionais(_informacoesAdicionais) {
		this._informacoesAdicionais = _informacoesAdicionais;
		return this;
	}
	getNcmSh() {
		return this._ncmSh || "";
	}
	comNcmSh(_ncmSh) {
		// if(typeof ncms[_ncmSh] === 'undefined') {
		//     throw new Error('Não é um NCM válido');
		// }
		this._ncmSh = _ncmSh;
		return this;
	}
	getOCst() {
		return this._oCst || "";
	}
	comOCst(_oCst) {
		this._oCst = _oCst;
		return this;
	}
	getCfop() {
		return this._cfop || "";
	}
	comCfop(_cfop) {
		// if(typeof cfops[_cfop] === 'undefined') {
		//     throw new Error('Não é um CFOP válido');
		// }
		this._cfop = _cfop;
		return this;
	}
	getUnidade() {
		return this._unidade || "";
	}
	comUnidade(_unidade) {
		this._unidade = _unidade;
		return this;
	}
	getQuantidade() {
		return this._quantidade || 0;
	}
	getQuantidadeFormatada() {
		return this.getQuantidade();
	}
	comQuantidade(_quantidade) {
		if (_quantidade < 0) {
			throw new Error("Quantidade não pode ser inferior a zero");
		}

		this._quantidade = _quantidade;
		return this;
	}
	getValorUnitario() {
		return this._valorUnitario || 0;
	}
	getValorUnitarioFormatado() {
		return (
			this.getValorUnitario(),
			{
				simbolo: "",
			}
		);
	}
	comValorUnitario(_valorUnitario) {
		if (_valorUnitario < 0) {
			throw new Error("Valor unitário não pode ser inferior a zero");
		}

		this._valorUnitario = _valorUnitario;
		return this;
	}
	getValorTotal() {
		return this._valorTotal || 0;
	}
	getValorTotalFormatado() {
		return (
			this.getValorTotal(),
			{
				simbolo: "",
			}
		);
	}
	comValorTotal(_valorTotal) {
		if (_valorTotal < 0) {
			throw new Error("Valor total não pode ser inferior a zero");
		}

		this._valorTotal = _valorTotal;
		return this;
	}
	getBaseDeCalculoDoIcms() {
		//Embora os valores daqui para baixo sejam numéricos
		//eu deixei retornando string vazio por padrão
		return this._baseDeCalculoDoIcms || "";
	}
	getBaseDeCalculoDoIcmsFormatada() {
		if (!this.getBaseDeCalculoDoIcms()) {
			return "";
		}

		return (
			this.getBaseDeCalculoDoIcms(),
			{
				simbolo: "",
			}
		);
	}
	comBaseDeCalculoDoIcms(_baseDeCalculoDoIcms) {
		if (_baseDeCalculoDoIcms < 0) {
			throw new Error("Base de cálculo do icms não pode ser inferior a zero");
		}

		this._baseDeCalculoDoIcms = _baseDeCalculoDoIcms;
		return this;
	}
	getValorDoIcms() {
		return this._valorDoIcms || "";
	}
	getValorDoIcmsFormatado() {
		if (!this.getValorDoIcms()) {
			return "";
		}

		return (
			this.getValorDoIcms(),
			{
				simbolo: "",
			}
		);
	}
	comValorDoIcms(_valorDoIcms) {
		if (_valorDoIcms < 0) {
			throw new Error("Valor do icms não pode ser inferior a zero");
		}

		this._valorDoIcms = _valorDoIcms;
		return this;
	}
	getValorDoIpi() {
		return this._valorDoIpi || "";
	}
	getValorDoIpiFormatado() {
		if (!this.getValorDoIpi()) {
			return "";
		}

		return (
			this.getValorDoIpi(),
			{
				simbolo: "",
			}
		);
	}
	comValorDoIpi(_valorDoIpi) {
		if (_valorDoIpi < 0) {
			throw new Error("Valor do ipi não pode ser inferior a zero");
		}

		this._valorDoIpi = _valorDoIpi;
		return this;
	}
	getAliquotaDoIcms() {
		return this._aliquotaDoIcms || "";
	}
	getAliquotaDoIcmsFormatada() {
		if (this.getAliquotaDoIcms() !== "") {
			return formatarAliquota(this.getAliquotaDoIcms());
		}

		return "";
	}
	comAliquotaDoIcms(_aliquotaDoIcms) {
		if (_aliquotaDoIcms < 0 || _aliquotaDoIcms >= 1) {
			throw new Error("Aliquota do icms deve estar entre 0 e 1");
		}

		this._aliquotaDoIcms = _aliquotaDoIcms;
		return this;
	}
	getAliquotaDoIpi() {
		return this._aliquotaDoIpi || "";
	}
	getAliquotaDoIpiFormatada() {
		if (this.getAliquotaDoIpi() !== "") {
			return formatarAliquota(this.getAliquotaDoIpi());
		}

		return "";
	}
	comAliquotaDoIpi(_aliquotaDoIpi) {
		if (_aliquotaDoIpi < 0 || _aliquotaDoIpi >= 1) {
			throw new Error("Aliquota do icms deve estar entre 0 e 1");
		}

		this._aliquotaDoIpi = _aliquotaDoIpi;
		return this;
	}
}

function formatarAliquota(aliquota) {
	const parteDecimal = aliquota.toString().split(".");

	if (parteDecimal.length > 1) {
		aliquota = parteDecimal[1];

		if (aliquota.length > 2) {
			aliquota = aliquota.replace(".", ",");
		}

		aliquota = Number.parseFloat(aliquota); //Remover os zeros a esquerda
	} else {
		aliquota = "0";
	}

	return aliquota + "%";
}

Item.prototype.getInformacoesAdicionais = function () {
	return this._informacoesAdicionais;
};

Item.prototype.comInformacoesAdicionais = function (_informacoesAdicionais) {
	this._informacoesAdicionais = _informacoesAdicionais;
	return this;
};
