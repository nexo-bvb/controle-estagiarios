const fs = require('fs');
const path = require('path');
const xlsx = require('xlsx');

// Diretório base
const BASE_DIR = 'C:\\dados estagiarios';

// Função para buscar recursivamente todos os arquivos .xlsx
function findExcelFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(findExcelFiles(file));
    } else {
      if (file.toLowerCase().endsWith('.xlsx') && !file.includes('~$')) {
        results.push(file);
      }
    }
  });
  return results;
}

const excelFiles = findExcelFiles(BASE_DIR);
console.log(`Found ${excelFiles.length} excel files.`);

// Map para evitar duplicados (chave: nome do estagiário em minúsculas)
const internsMap = new Map();
let idCounter = 1;

excelFiles.forEach(file => {
  try {
    // Tenta extrair a secretaria do caminho do arquivo
    // Ex: C:\dados estagiarios\2025\SESAU\... -> SESAU
    const parts = file.split(path.sep);
    // BaseDir é C:\dados estagiarios (2 partes na raiz ou 1 se drive for diferente, vamos usar indexação relativa)
    let yearStr = '2024';
    let secretariat = 'Desconhecida';
    const yearIndex = parts.findIndex(p => p === '2023' || p === '2024' || p === '2025' || p === '2026');
    if (yearIndex !== -1) {
      yearStr = parts[yearIndex];
      if (parts.length > yearIndex + 1) {
        secretariat = parts[yearIndex + 1];
      }
    } else {
       // Fallback se a estrutura de pastas não for como o esperado
       secretariat = path.basename(path.dirname(file));
    }

    const wb = xlsx.readFile(file);
    const sheetName = wb.SheetNames[0];
    const sheet = wb.Sheets[sheetName];
    // Array de arrays (cada linha é um array de colunas)
    const data = xlsx.utils.sheet_to_json(sheet, { header: 1 });

    // Encontrar o cabeçalho
    let headerRowIndex = -1;
    let nameColIndex = -1;

    for (let i = 0; i < Math.min(data.length, 15); i++) {
      const row = data[i];
      if (!row) continue;
      
      for (let j = 0; j < row.length; j++) {
        const cellValue = String(row[j] || '').toUpperCase().trim();
        if (cellValue === 'NOME' || cellValue === 'NOME DO ESTAGIÁRIO' || cellValue === 'NOME DO ALUNO' || cellValue.includes('NOME') || cellValue === 'ESTAGIÁRIOS' || cellValue === 'ESTAGIÁRIO') {
          headerRowIndex = i;
          nameColIndex = j;
          break;
        }
      }
      if (headerRowIndex !== -1) break;
    }

    if (headerRowIndex !== -1 && nameColIndex !== -1) {
      // Ler dados a partir da linha seguinte ao cabeçalho
      for (let i = headerRowIndex + 1; i < data.length; i++) {
        const row = data[i];
        if (!row) continue;
        
        const nameVal = row[nameColIndex];
        if (!nameVal || typeof nameVal !== 'string') continue;
        
        const cleanName = nameVal.trim();
        // Evita cabeçalhos repetidos ou valores vazios/lixo numérico
        if (cleanName === '' || cleanName.toUpperCase() === 'NOME' || cleanName.length < 5) continue;
        
        const key = cleanName.toLowerCase();
        const currentYear = parseInt(yearStr);
        
        if (!internsMap.has(key)) {
          internsMap.set(key, {
            id: String(idCounter++),
            name: cleanName,
            email: `${cleanName.toLowerCase().split(' ')[0]}@${secretariat.toLowerCase().replace(/[^a-z]/g, '')}.gov.br`,
            secretariat: secretariat,
            role: 'Estagiário(a)',
            status: 'Ativo',
            startDate: `${yearStr}-01-01`,
            endDate: `${currentYear + 1}-01-01`
          });
        } else {
          const existing = internsMap.get(key);
          const existingStart = parseInt(existing.startDate.substring(0, 4));
          const existingEnd = parseInt(existing.endDate.substring(0, 4));
          
          // Se este arquivo for de um ano anterior ao registrado, atualiza o início
          if (currentYear < existingStart) {
            existing.startDate = `${yearStr}-01-01`;
          }
          // Se este arquivo for de um ano posterior ao registrado, atualiza o fim
          if (currentYear + 1 > existingEnd) {
            existing.endDate = `${currentYear + 1}-01-01`;
          }
        }
      }
    } else {
      console.warn(`Could not find name column in file: ${file}`);
    }
  } catch (error) {
    console.error(`Error processing file ${file}:`, error.message);
  }
});

const interns = Array.from(internsMap.values());
console.log(`Successfully extracted ${interns.length} unique interns.`);

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

const outputPath = path.join(__dirname, 'src', 'data', 'mock.ts');
fs.writeFileSync(outputPath, mockTsContent, 'utf-8');
console.log('Successfully saved to src/data/mock.ts');
