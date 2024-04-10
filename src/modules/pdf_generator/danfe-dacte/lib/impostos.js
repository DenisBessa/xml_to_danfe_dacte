export default class Impostos {
	getBaseDeCalculoDoIcms() {
		return this._baseDeCalculoDoIcms || 0;
	}
	getBaseDeCalculoDoIcmsFormatada() {
		return this.getBaseDeCalculoDoIcms();
	}
	comBaseDeCalculoDoIcms(_baseDeCalculoDoIcms) {
		this._baseDeCalculoDoIcms = _baseDeCalculoDoIcms;
		return this;
	}
	getValorDoIcms() {
		return this._valorDoIcms || 0;
	}
	getValorDoIcmsFormatado() {
		return (
			this.getValorDoIcms(),
			{
				simbolo: "",
			}
		);
	}
	comValorDoIcms(_valorDoIcms) {
		this._valorDoIcms = _valorDoIcms;

		return this;
	}
	getBaseDeCalculoDoIcmsSt() {
		return this._baseDeCalculoDoIcmsSt || 0;
	}
	getBaseDeCalculoDoIcmsStFormatada() {
		return (
			this.getBaseDeCalculoDoIcmsSt(),
			{
				simbolo: "",
			}
		);
	}
	comBaseDeCalculoDoIcmsSt(_baseDeCalculoDoIcmsSt) {
		this._baseDeCalculoDoIcmsSt = _baseDeCalculoDoIcmsSt;
		return this;
	}
	getValorDoIcmsSt() {
		return this._ValorDoIcmsSt || 0;
	}
	getValorDoIcmsStFormatado() {
		return (
			this.getValorDoIcmsSt(),
			{
				simbolo: "",
			}
		);
	}
	comValorDoIcmsSt(_ValorDoIcmsSt) {
		this._ValorDoIcmsSt = _ValorDoIcmsSt;
		return this;
	}
	// Impostos.prototype.comIcms = function (_comIcms) {
	//     this._comIcms = _comIcms;
	//     return this;
	// };
	// Impostos.prototype.getIcms = function () {
	//     return this._comIcms;
	// };
	getTpIcms() {
		return (
			{
				"00": "Tributada Integralmente",
				40: "Isenta",
				41: "Não Tributada",
				51: "Diferimento",
				90: "Regime Normal",
			}[this.getIcms()] || ""
		);
	}
	getValorDoImpostoDeImportacao() {
		return this._valorDoImpostoDeImportacao || 0;
	}
	getValorDoImpostoDeImportacaoFormatado() {
		return (
			this.getValorDoImpostoDeImportacao(),
			{
				simbolo: "",
			}
		);
	}
	comValorDoImpostoDeImportacao(_valorDoImpostoDeImportacao) {
		this._valorDoImpostoDeImportacao = _valorDoImpostoDeImportacao;
		return this;
	}
	getValorDoPis() {
		return this._valorDoPis || 0;
	}
	getValorDoPisFormatado() {
		return (
			this.getValorDoPis(),
			{
				simbolo: "",
			}
		);
	}
	comValorDoPis(_valorDoPis) {
		this._valorDoPis = _valorDoPis;
		return this;
	}
	getValorTotalDoIpi() {
		return this._valorTotalDoIpi || 0;
	}
	getValorTotalDoIpiFormatado() {
		return (
			this.getValorTotalDoIpi(),
			{
				simbolo: "",
			}
		);
	}
	comValorTotalDoIpi(_valorTotalDoIpi) {
		this._valorTotalDoIpi = _valorTotalDoIpi;
		return this;
	}
	getValorDaCofins() {
		return this._valorDaCofins || 0;
	}
	getValorDaCofinsFormatado() {
		return (
			this.getValorDaCofins(),
			{
				simbolo: "",
			}
		);
	}
	comValorDaCofins(_valorDaCofins) {
		this._valorDaCofins = _valorDaCofins;
		return this;
	}
	getBaseDeCalculoDoIssqn() {
		return this._baseDeCalculoDoIssqn || 0;
	}
	getBaseDeCalculoDoIssqnFormatada() {
		return (
			this.getBaseDeCalculoDoIssqn(),
			{
				simbolo: "",
			}
		);
	}
	comBaseDeCalculoDoIssqn(_baseDeCalculoDoIssqn) {
		this._baseDeCalculoDoIssqn = _baseDeCalculoDoIssqn;
		return this;
	}
	getValorTotalDoIssqn() {
		return this._valorTotalDoIssqn || 0;
	}
	getValorTotalDoIssqnFormatado() {
		return (
			this.getValorTotalDoIssqn(),
			{
				simbolo: "",
			}
		);
	}
	comValorTotalDoIssqn(_valorTotalDoIssqn) {
		this._valorTotalDoIssqn = _valorTotalDoIssqn;
		return this;
	}
	comValorICMSufDest(_valorICMSufDest) {
		this._valorICMSufDest = _valorICMSufDest;
	}
	getValorICMSufDest() {
		return this._valorICMSufDest;
	}
	comValorICMSufRemet(_valorICMSufRemet) {
		this._valorICMSufRemet = _valorICMSufRemet;
		return this;
	}
	getValorICMSufRemet() {
		return this._valorICMSufRemet;
	}
	comValorFCP(_valorFCP) {
		this._valorFCP = _valorFCP;
		return this;
	}
	getValorFCP() {
		return this._valorFCP;
	}
	comSitTrib(_stringSitTrib) {
		this._stringSitTrib = _stringSitTrib;
		return this;
	}
	getSitTrib() {
		return this._stringSitTrib;
	}
	getValorTotTrib() {
		return this._valorTotTrib;
	}
	comValorTotTrib(_valorTotTrib) {
		this._valorTotTrib = _valorTotTrib;
		return this;
	}
}
