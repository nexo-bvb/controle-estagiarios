const xlsx = require('xlsx');

const workbook = xlsx.readFile('C:\\dados estagiarios\\2026\\PGE\\Janeiro\\01_JANEIRO__INFORMAA_u2021A_u2022ES_ESTAGIARIOS.xlsx');
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];
const data = xlsx.utils.sheet_to_json(sheet, { header: 1 });

console.log(JSON.stringify(data.slice(0, 5), null, 2));
