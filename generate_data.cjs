const xlsx = require('xlsx');
const fs = require('fs');

const workbook = xlsx.readFile('C:\\dados estagiarios\\2026\\PGE\\Janeiro\\01_JANEIRO__INFORMAA_u2021A_u2022ES_ESTAGIARIOS.xlsx');
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];
const data = xlsx.utils.sheet_to_json(sheet, { header: 1 });

const interns = [];
let idCounter = 1;

// Skip the first two rows (Title and Headers)
for (let i = 2; i < data.length; i++) {
  const row = data[i];
  if (!row || !row[1]) continue; // Skip empty rows or rows without name

  // row[1] is NOME
  const name = row[1].trim();
  
  interns.push({
    id: String(idCounter++),
    name: name,
    email: `${name.toLowerCase().split(' ')[0]}@pge.rr.gov.br`, // Mock email
    secretariat: 'Procuradoria-Geral do Estado',
    role: 'Estagiário(a) de Direito',
    status: 'Ativo',
    startDate: '2024-01-01', // Mock date since it's not in the excel
    endDate: '2025-01-01' // Mock date
  });
}

const mockTsContent = `export type InternStatus = 'Ativo' | 'Férias' | 'Encerrado';

export interface Intern {
  id: string;
  name: string;
  email: string;
  secretariat: string;
  role: string;
  status: InternStatus;
  startDate: string;
  endDate: string;
}

export const MOCK_INTERNS: Intern[] = ${JSON.stringify(interns, null, 2)};

export const MOCK_STATS = {
  total: ${interns.length},
  active: ${interns.length},
  vacation: 0,
  expiringSoon: 0,
  openPositions: 0
};
`;

fs.writeFileSync('src/data/mock.ts', mockTsContent, 'utf-8');
console.log('Real data successfully imported into src/data/mock.ts. Total interns:', interns.length);
