import xlsx from 'xlsx';
const workbook = xlsx.readFile('c:/Users/User/Downloads/Terceirizados/TERCEIRIZADOS/2025/SESAU/TERCEIRIZADOS_UCS.xlsx');
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];
const data = xlsx.utils.sheet_to_json(worksheet, { header: 1 });
console.log(data.slice(0, 10));
