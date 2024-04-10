import CteInfo from "@/modules/pdf_generator/danfe-dacte/lib/cteInfo";
import Destinatario from "@/modules/pdf_generator/danfe-dacte/lib/destinatario";
import Emitente from "@/modules/pdf_generator/danfe-dacte/lib/emitente";
import Expeditor from "@/modules/pdf_generator/danfe-dacte/lib/expeditor";
import Impostos from "@/modules/pdf_generator/danfe-dacte/lib/impostos";
import Protocolo from "@/modules/pdf_generator/danfe-dacte/lib/protocolo";
import Recebedor from "@/modules/pdf_generator/danfe-dacte/lib/recebedor";
import Transportador from "@/modules/pdf_generator/danfe-dacte/lib/transportador";
import Volumes from "@/modules/pdf_generator/danfe-dacte/lib/volumes";

export default class Danfe {
	constructor() {
		this.comOrientacao("retrato");
		this.comEmitente(new Emitente());
		this.comDestinatario(new Destinatario());
		this.comTransportador(new Transportador());
		this.comProtocolo(new Protocolo());
		this.comImpostos(new Impostos());
		this.comVolumes(new Volumes());
		this.comExpeditor(new Expeditor());
		this.comRecebedor(new Recebedor());
		this.comCteInfo(new CteInfo());
		this._itens = [];
	}
	getProtocolo() {
		return this._protocolo;
	}
	comProtocolo(_protocolo) {
		this._protocolo = _protocolo;
		return this;
	}
	getFormularioDeSeguranca() {
		return this._formularioDeSeguranca;
	}
	comFormularioDeSeguranca(_formularioDeSeguranca) {
		// if(_formularioDeSeguranca.getJustificativa().length < 15) {
		//     throw new Error([
		//         'A justificativa da entrada em contingência deve conter 15 caracteres ou mais'
		//     ].join(''));
		// }
		_formularioDeSeguranca.comDanfe(this);
		this._formularioDeSeguranca = _formularioDeSeguranca;

		return this;
	}
	getEmitente() {
		return this._emitente;
	}
	comExpeditor(_expeditor) {
		this._expeditor = _expeditor;
		return this;
	}
	comRecebedor(_recebedor) {
		this._recebedor = _recebedor;
		return this;
	}
	getExpeditor() {
		return this._expeditor;
	}
	getRecebedor() {
		return this._recebedor;
	}
	comEmitente(_emitente) {
		this._emitente = _emitente;
		return this;
	}
	getDestinatario() {
		return this._destinatario;
	}
	comDestinatario(_destinatario) {
		this._destinatario = _destinatario;
		return this;
	}
	getTransportador() {
		return this._transportador;
	}
	comTransportador(_transportador) {
		this._transportador = _transportador;
		return this;
	}
	getImpostos() {
		return this._impostos;
	}
	comImpostos(_impostos) {
		this._impostos = _impostos;
		return this;
	}
	adicionarItem(_item) {
		this._itens.push(_item);
		return this;
	}
	getFatura() {
		return this._fatura;
	}
	comFatura(_fatura) {
		this._fatura = _fatura;
		return this;
	}
	getDuplicatas() {
		return this._duplicatas || [];
	}
	comDuplicatas(_duplicatas) {
		this._duplicatas = _duplicatas;
		return this;
	}
	adicionarDuplicata(duplicata) {
		if (!this._duplicatas) {
			this._duplicatas = [];
		}

		this._duplicatas.push(duplicata);
		return this;
	}
	getItens() {
		return this._itens;
	}
	comItens(_itens) {
		this._itens = _itens;
		return this;
	}
	getInformacoesComplementares() {
		return this._informacoesComplementares || "";
	}
	comInformacoesComplementares(_informacoesComplementares) {
		if (!_informacoesComplementares) {
			return this;
		}

		this._informacoesComplementares = _informacoesComplementares.toString();
		return this;
	}
	getValorTotalDaNota() {
		return this._valorTotalDaNota || 0;
	}
	getValorTotalDaNotaFormatado(simbolo) {
		return this.getValorTotalDaNota();
	}
	comValorTotalDaNota(_valorTotalDaNota) {
		this._valorTotalDaNota = _valorTotalDaNota;
		return this;
	}
	getValorTotalDosProdutos() {
		return this._valorTotalDosProdutos || 0;
	}
	getValorTotalDosProdutosFormatado() {
		return this.getValorTotalDosProdutos();
	}
	comValorTotalDosProdutos(_valorTotalDosProdutos) {
		this._valorTotalDosProdutos = _valorTotalDosProdutos;
		return this;
	}
	getValorTotalDosServicos() {
		return this._valorTotalDosServicos || 0;
	}
	getValorTotalDosServicosFormatado() {
		return this.getValorTotalDosServicos();
	}
	comValorTotalDosServicos(_valorTotalDosServicos) {
		this._valorTotalDosServicos = _valorTotalDosServicos;
		return this;
	}
	getOrientacao() {
		return this._orientacao;
	}
	comOrientacao(_orientacao) {
		if (["retrato", "paisagem"].indexOf(_orientacao) === -1) {
			throw new Error(
				'Os valores permitidos são as strings "retrato" e "paisagem"',
			);
		}

		this._orientacao = _orientacao;

		return this;
	}
	getInscricaoEstadualDoSubstitutoTributario() {
		return this._inscricaoEstadualDoSubstitutoTributario || "";
	}
	comInscricaoEstadualDoSubstitutoTributario(
		_inscricaoEstadualDoSubstitutoTributario,
	) {
		// if(!ie(_inscricaoEstadualDoSubstitutoTributario)) {
		//     // throw new Error('Não é uma inscrição estadual válida');
		// }
		return this._inscricaoEstadualDoSubstitutoTributario;
	}
	getValorDoFrete() {
		return this._valorDoFrete || 0;
	}
	getValorDoFreteFormatado() {
		return this.getValorDoFrete();
	}
	comValorDoFrete(_valorDoFrete) {
		this._valorDoFrete = _valorDoFrete;
		return this;
	}
	getValorDoSeguro() {
		return this._valorDoSeguro || 0;
	}
	getValorDoSeguroFormatado() {
		return this.getValorDoSeguro();
	}
	comValorDoSeguro(_valorDoSeguro) {
		this._valorDoSeguro = _valorDoSeguro;
		return this;
	}
	getDesconto() {
		return this._desconto || 0;
	}
	getDescontoFormatado() {
		return this.getDesconto();
	}
	comDesconto(_desconto) {
		this._desconto = _desconto;
		return this;
	}
	getOutrasDespesas() {
		return this._outrasDespesas || 0;
	}
	getOutrasDespesasFormatado() {
		return this.getOutrasDespesas();
	}
	comOutrasDespesas(_outrasDespesas) {
		this._outrasDespesas = _outrasDespesas;
		return this;
	}
	getTipo() {
		return this._tipo;
	}
	getTipoFormatado() {
		return this.getTipo();
	}
	comTipo(_tipo) {
		this._tipo = _tipo;

		return this;
	}
	getNumero() {
		return this._numero;
	}
	getNumeroFormatado() {
		// if(this.getNumero()) {
		// }
		return `Nº. ${this.getNumero()}`;
	}
	comNumero(_numero) {
		_numero = Number.parseInt(_numero, 10);

		if (Number.isNaN(_numero)) {
			throw new Error(`Não é um número válido. Valor encontrado: ${_numero}`);
		}

		if (_numero < 1 || _numero > 999999999) {
			throw new Error("O número deve ser um valor entre 1 e 999.999.999");
		}

		this._numero = _numero;

		return this;
	}
	getSerie() {
		return this._serie;
	}
	getSerieFormatada() {
		// if(this.getSerie()) {
		// }
		return `SÉRIE ${this.getSerie()}`;
	}
	comSerie(_serie) {
		this._serie = _serie;

		return this;
	}
	getChaveDeAcesso() {
		return this._chaveDeAcesso || "";
	}
	getChaveDeAcessoFormatada() {
		return this.getChaveDeAcesso();
	}
	comChaveDeAcesso(_chaveDeAcesso) {
		// if(!eChaveDeAcesso(_chaveDeAcesso)) {
		//     throw new Error('A chave de acesso é inválida');
		// }
		this._chaveDeAcesso = _chaveDeAcesso;

		return this._chaveDeAcesso;
	}
	getDataDaEmissao() {
		return this._dataDaEmissao;
	}
	getDataDaEmissaoFormatada() {
		if (this.getDataDaEmissao()) {
			return this.getDataDaEmissao();
		}

		return "";
	}
	comDataDaEmissao(_dataDaEmissao) {
		// if(typeof _dataDaEmissao === 'string') {
		//     _dataDaEmissao = new Date(_dataDaEmissao);
		// }
		// if(!eDataValida(_dataDaEmissao)) {
		//     throw new Error('Não é uma data válida');
		// }
		this._dataDaEmissao = _dataDaEmissao;

		return this;
	}
	getDataDaEntradaOuSaida() {
		return this._dataDaEntradaOuSaida;
	}
	getDataDaEntradaOuSaidaFormatada() {
		if (this.getDataDaEntradaOuSaida()) {
			return this.getDataDaEntradaOuSaida();
		}

		return "";
	}
	// htardivo
	getHorarioDaEntradaOuSaida() {
		return this._horarioEntradaSaida || "";
	}
	comHorarioEntradaSaida(_horarioEntradaSaida) {
		this._horarioEntradaSaida = _horarioEntradaSaida;
		return this;
	}
	// htardivo
	comDataDaEntradaOuSaida(_dataDaEntradaOuSaida) {
		// if(typeof _dataDaEntradaOuSaida === 'string') {
		//     _dataDaEntradaOuSaida = new Date(_dataDaEntradaOuSaida);
		// }
		// if(!eDataValida(_dataDaEntradaOuSaida)) {
		//     throw new Error('Não é uma data válida');
		// }
		this._dataDaEntradaOuSaida = _dataDaEntradaOuSaida;

		return this;
	}
	getVolumes() {
		return this._volumes;
	}
	comVolumes(_volumes) {
		this._volumes = _volumes;
		return this;
	}
	getModalidadeDoFrete() {
		return this._modalidadeDoFrete;
	}
	comModalidadeDoFrete(_modalidadeDoFrete) {
		// if([
		//     'semFrete',
		//     'porContaDoEmitente',
		//     'porContaDoDestinatarioRemetente',
		//     'porContaDeTerceiros'
		// ].indexOf(_modalidadeDoFrete) === -1) {
		//     throw new Error([
		//         'Os valores permitidos são as strings',
		//         '"semFrete",',
		//         '"porContaDoEmitente",',
		//         '"porContaDoDestinatarioRemetente",',
		//         '"porContaDeTerceiros"',
		//     ].join(' '));
		// }
		this._modalidadeDoFrete = _modalidadeDoFrete;

		return this;
	}
	getModalidadeDoFreteFormatada() {
		return (
			{
				9: "(9) Sem Frete",
				0: "(0) Emitente",
				1: "(1) Dest/Rem",
				2: "(2) Terceiros",
				3: "(3) T.Próp Rem",
				4: "(4) T.Próp Dest",
			}[this.getModalidadeDoFrete()] || ""
		);
	}
	getNaturezaDaOperacao() {
		return this._naturezaDaOperacao || "";
	}
	comNaturezaDaOperacao(_naturezaDaOperacao) {
		this._naturezaDaOperacao = _naturezaDaOperacao;
		return this;
	}
	// MÓDULOS CRIADOS PRA CAMPOS DACTE
	comCteInfo(_cteInfo) {
		this._cteInfo = _cteInfo;
		return this;
	}
	getCteInfo() {
		return this._cteInfo;
	}
}
