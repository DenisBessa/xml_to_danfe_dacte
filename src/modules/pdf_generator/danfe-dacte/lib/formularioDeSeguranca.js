export default class FormularioDeSeguranca {
	getDanfe() {
		return this._danfe;
	}
	comDanfe(_danfe) {
		this._danfe = _danfe;
		return this;
	}
	getDadosDaNfe() {
		return {
			uf: this.getDanfe().getEmitente().getEndereco().getUf(),
			tipoDeEmissao: 5,
			cnpj: this.getDanfe().getEmitente().getRegistroNacional(),
			valorDaNfe: this.getDanfe().getValorTotalDaNota(),
			destaqueDeIcmsProprio: this.getDestaqueDeIcmsProprio(),
			destaqueDeIcmsPorST: this.getDestaqueDeIcmsPorST(),
			dataDeEmissao: this.getDanfe().getDataDaEmissao(),
		};
	}
	getDadosDaNfeFormatado() {
		return this.getDadosDaNfe();
	}
	getDestaqueDeIcmsProprio() {
		return this._destaqueDeIcmsProprio;
	}
	comDestaqueDeIcmsProprio(_destaqueDeIcmsProprio) {
		if (typeof _destaqueDeIcmsProprio === "boolean") {
			this._destaqueDeIcmsProprio = _destaqueDeIcmsProprio;
		}

		if (typeof _destaqueDeIcmsProprio === "string") {
			this._destaqueDeIcmsProprio = _destaqueDeIcmsProprio === "true";
		}

		if (typeof _destaqueDeIcmsProprio === "number") {
			this._destaqueDeIcmsProprio = _destaqueDeIcmsProprio === 1;
		}

		return this;
	}
	getDestaqueDeIcmsPorST() {
		return this._destaqueDeIcmsPorST;
	}
	comDestaqueDeIcmsPorST(_destaqueDeIcmsPorST) {
		if (typeof _destaqueDeIcmsPorST === "boolean") {
			this._destaqueDeIcmsPorST = _destaqueDeIcmsPorST;
		}

		if (typeof _destaqueDeIcmsPorST === "string") {
			this._destaqueDeIcmsPorST = _destaqueDeIcmsPorST === "true";
		}

		if (typeof _destaqueDeIcmsPorST === "number") {
			this._destaqueDeIcmsPorST = _destaqueDeIcmsPorST === 1;
		}

		return this;
	}
	getDataDaEntradaEmContingencia() {
		return this._privateAttribute;
	}
	comDataDaEntradaEmContingencia(_privateAttribute) {
		this._privateAttribute = new Date(_privateAttribute);
		return this;
	}
	getDataDaEntradaEmContingenciaFormatada() {
		// return moment(this.getDataDaEntradaEmContingencia).format('DD/MM/YYYY HH:mm:ss');
		return this.getDataDaEntradaEmContingencia;
	}
	getJustificativa() {
		return this._justificativa || "";
	}
	comJustificativa(_justificativa) {
		if (!_justificativa || _justificativa.length < 15) {
			throw new Error(
				[
					"A justificativa para entrada em contingência deve conter",
					"pelo menos 15 caracteres",
				].join(""),
			);
		}

		this._justificativa = _justificativa.substr(0, 255);
		return this;
	}
}
