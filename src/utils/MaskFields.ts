class MaskFields {
	maskCnpj(cnpj: string | undefined): string {
		if (cnpj) {
			return cnpj.replace(
				/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
				"$1.$2.$3/$4-$5",
			);
		}
		return "";
	}

	maskIE(ie: string | undefined): string {
		if (ie) {
			return ie.replace(/(\d{3})?(\d{3})?(\d{3})?(\d{4})/, "$1.$2.$3-$4");
		}
		return "";
	}

	maskCEP(cep: string | undefined): string {
		if (cep) {
			return cep.replace(/^([\d]{2})\.*([\d]{3})-*([\d]{3})/, "$1.$2-$3");
		}
		return "";
	}

	maskNumber(number: string | undefined): string {
		if (number) {
			return String(
				new Intl.NumberFormat("pt-BR", { minimumFractionDigits: 2 }).format(
					Number(number),
				),
			);
		}
		return "0,00";
	}

	maskDate(data: string | undefined): string {
		if (data) {
			if (data.length > 10)
				return String(new Intl.DateTimeFormat("pt-br").format(new Date(data)));

			return String(
				new Intl.DateTimeFormat("pt-br").format(
					new Date(data.replace(/-/g, "/")),
				),
			);
		}
		return "";
	}

	maskTime(data: string | undefined): string {
		if (data) {
			if (data.length > 19) data = data.slice(0, 19);

			return String(
				new Intl.DateTimeFormat("pt-br", {
					hour: "numeric",
					minute: "numeric",
					second: "numeric",
				}).format(new Date(data)),
			);
		}
		return "";
	}

	maskDateTime(data: string | undefined): string {
		if (data) {
			return String(`${this.maskDate(data)} ${this.maskTime(data)}`);
		}
		return "";
	}

	maskTelefone(telefone: string | undefined): string {
		if (telefone) {
			return telefone.replace(/^(\d{2})(\d{5})(\d{4})/, "($1)$2-$3");
		}
		return "";
	}
}

export { MaskFields };
