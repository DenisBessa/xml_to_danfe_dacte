export default class Endereco {
	getLogradouro() {
		return this._logradouro || "";
	}
	comLogradouro(_logradouro) {
		this._logradouro = _logradouro;
		return this;
	}
	getNumero() {
		return this._numero || "";
	}
	comNumero(_numero) {
		this._numero = _numero;
		return this;
	}
	getComplemento() {
		return this._complemento || "";
	}
	comComplemento(_complemento) {
		this._complemento = _complemento;
		return this;
	}
	getBairro() {
		return this._bairro || "";
	}
	comBairro(_bairro) {
		this._bairro = _bairro;
		return this;
	}
	getCidade() {
		return this._cidade || "";
	}
	comCidade(_cidade) {
		this._cidade = _cidade;
		return this;
	}
	getCep() {
		return this._cep || "";
	}
	getCepFormatado() {
		return this.getCep();
	}
	comCep(_cep) {
		// if(!eCep(_cep)) {
		//     throw new Error('Não é um cep válido');
		// }
		this._cep = _cep;
		return this;
	}
	getMunicipio() {
		return this._municipio || "";
	}
	comMunicipio(_municipio) {
		this._municipio = _municipio;
		return this;
	}
	getUf() {
		return this._uf || "";
	}
	comUf(_uf) {
		if (!_uf) {
			return this;
		}

		// if(siglasDosEstados.indexOf(_uf.toUpperCase()) === -1) {
		//     throw new Error('Não é um UF válido');
		// }
		this._uf = _uf.toUpperCase();
		return this;
	}
	comPais(_pais) {
		if (!_pais) {
			return this;
		}
		this._pais = _pais.toUpperCase();
		return this;
	}
	getPais() {
		return this._pais || "";
	}
	getPrimeiraLinha() {
		return [this.getLogradouro(), this.getNumero(), this.getComplemento()]
			.filter((dados) => dados)
			.join(" ");
	}
	getSegundaLinha() {
		let resultado = "";

		if (this.getBairro()) {
			resultado += this.getBairro();
		}

		if (this.getBairro() && this.getCidade()) {
			resultado += ", ";
		}

		if (this.getCidade()) {
			resultado += this.getCidade();
		}

		if (resultado && this.getUf()) {
			resultado += "/";
		}

		if (this.getUf()) {
			resultado += this.getUf();
		}

		if (resultado && this.getCep()) {
			resultado += " — ";
		}

		if (this.getCep()) {
			resultado += this.getCepFormatado();
		}

		return resultado;
	}
}
