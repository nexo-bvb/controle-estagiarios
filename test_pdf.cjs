const fs = require('fs');
const PDFParser = require("pdf2json");

let pdfParser = new PDFParser(this, 1);

pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError) );
pdfParser.on("pdfParser_dataReady", pdfData => {
    const rawText = pdfParser.getRawTextContent();
    console.log(rawText.substring(0, 1500));
});

pdfParser.loadPDF("C:/dados estagiarios/2026/PGE/Abril/controlador.php.pdf");
