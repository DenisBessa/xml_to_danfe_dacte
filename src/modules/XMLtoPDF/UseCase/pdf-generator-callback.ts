export type ResultType = "download" | "base64" | undefined;

export const pdfGeneratorCallback = async (
	err: Error,
	pdf: PDFKit.PDFDocument,
	returnType: ResultType,
	pathFile: string,
): Promise<string> =>
	await new Promise((resolve) => {
		if (err) {
			throw err;
		}

		if (returnType === "base64") {
			const chunks: Buffer[] = [];

			pdf.on("data", (chunk: Buffer) => {
				chunks.push(chunk);
			});

			pdf.on("end", () => {
				const data = Buffer.concat(chunks);

				const pdfBase64 = data.toString("base64");

				setTimeout(() => resolve(pdfBase64));
			});
		}
	});
