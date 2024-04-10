import { JsonToCTE } from "./modules/XMLtoPDF/UseCase/json-to-cte-use-case";
import { JsonToDanfe } from "./modules/XMLtoPDF/UseCase/json-to-danfe-use-case";
import { xmlToJson } from "./modules/XMLtoPDF/UseCase/xml-to-json";
import type { IDaCte } from "./modules/interfaces/IDaCte";
import type { INfe } from "./modules/interfaces/INfe";

import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
	try {
		const { body: xml } = req;

		// check if body is a text
		if (typeof xml !== "string" || !xml.length) throw new Error("Invalid XML");

		// check if xml contains "http://www.portalfiscal.inf.br/nfe"
		const isDanfe = xml.includes("http://www.portalfiscal.inf.br/nfe");
		const isDacte = xml.includes("http://www.portalfiscal.inf.br/cte");

		if (!isDanfe && !isDacte) throw new Error("Invalid XML");

		const json = await xmlToJson(xml);

		const pdfBase64 = isDanfe
			? await new JsonToDanfe().jsonToPDF(json as INfe)
			: await new JsonToCTE().jsonToPDF(json as IDaCte);

		return res.json(pdfBase64);
	} catch (error) {
		console.error(error);

		res.status(500).send(error);

		return;
	}
}
