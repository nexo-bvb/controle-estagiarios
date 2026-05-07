export type InternStatus = 'Ativo' | 'Férias' | 'Encerrado';

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

export const MOCK_INTERNS: Intern[] = [
  {
    "id": "1",
    "name": "ALFREDO HENRIQUE AMBRÓSIO SILVA",
    "email": "alfredo@desenvolverr.gov.br",
    "secretariat": "DESENVOLVE RR",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2024-01-01",
    "endDate": "2025-01-01"
  },
  {
    "id": "2",
    "name": "DENIZE VENTURINI CONTE",
    "email": "denize@desenvolverr.gov.br",
    "secretariat": "DESENVOLVE RR",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2024-01-01",
    "endDate": "2025-01-01"
  },
  {
    "id": "3",
    "name": "EDUARDA NASCIMENTO BRAGA",
    "email": "eduarda@desenvolverr.gov.br",
    "secretariat": "DESENVOLVE RR",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2024-01-01",
    "endDate": "2025-01-01"
  },
  {
    "id": "4",
    "name": "GABRYELLA RAWENA TEIXEIRA BARBOZA",
    "email": "gabryella@desenvolverr.gov.br",
    "secretariat": "DESENVOLVE RR",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2024-01-01",
    "endDate": "2025-01-01"
  },
  {
    "id": "5",
    "name": "GÉVENA RAFAELA HONORATO",
    "email": "gévena@desenvolverr.gov.br",
    "secretariat": "DESENVOLVE RR",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2024-01-01",
    "endDate": "2025-01-01"
  },
  {
    "id": "6",
    "name": "MARIANE BALBINO GOMES",
    "email": "mariane@desenvolverr.gov.br",
    "secretariat": "DESENVOLVE RR",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2024-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "7",
    "name": "PEDRO LUCAS CASTRO SANTANA",
    "email": "pedro@desenvolverr.gov.br",
    "secretariat": "DESENVOLVE RR",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2024-01-01",
    "endDate": "2025-01-01"
  },
  {
    "id": "8",
    "name": "RENATA SOUZA LEITE",
    "email": "renata@desenvolverr.gov.br",
    "secretariat": "DESENVOLVE RR",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2024-01-01",
    "endDate": "2025-01-01"
  },
  {
    "id": "9",
    "name": "SANDRA RAYELLE REMIGIO DE ARAÚJO",
    "email": "sandra@desenvolverr.gov.br",
    "secretariat": "DESENVOLVE RR",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2024-01-01",
    "endDate": "2025-01-01"
  },
  {
    "id": "10",
    "name": "WICTOR SOUSA BESERRA",
    "email": "wictor@desenvolverr.gov.br",
    "secretariat": "DESENVOLVE RR",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2024-01-01",
    "endDate": "2025-01-01"
  },
  {
    "id": "11",
    "name": "GRAZIELE TRINDENTE DOS SANTOS",
    "email": "graziele@desenvolverr.gov.br",
    "secretariat": "DESENVOLVE RR",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2024-01-01",
    "endDate": "2025-01-01"
  },
  {
    "id": "12",
    "name": "JUAREZ DIAS CARNEIRO NETO",
    "email": "juarez@desenvolverr.gov.br",
    "secretariat": "DESENVOLVE RR",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2024-01-01",
    "endDate": "2025-01-01"
  },
  {
    "id": "13",
    "name": "PAULA DILU DOS SANTOS BULCÃO",
    "email": "paula@desenvolverr.gov.br",
    "secretariat": "DESENVOLVE RR",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2024-01-01",
    "endDate": "2025-01-01"
  },
  {
    "id": "14",
    "name": "MANUELLA RAMIRES OBANDO",
    "email": "manuella@desenvolverr.gov.br",
    "secretariat": "DESENVOLVE RR",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2024-01-01",
    "endDate": "2025-01-01"
  },
  {
    "id": "15",
    "name": "VICTÓRIA KAROLLINE OLIVEIRA MORAIS",
    "email": "victória@desenvolverr.gov.br",
    "secretariat": "DESENVOLVE RR",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2024-01-01",
    "endDate": "2025-01-01"
  },
  {
    "id": "16",
    "name": "ANA CLARA SOUZA MACIEL",
    "email": "ana@pge.gov.br",
    "secretariat": "PGE",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2027-01-01"
  },
  {
    "id": "17",
    "name": "ANDRE FELIPE BARRETO LIMA",
    "email": "andre@pge.gov.br",
    "secretariat": "PGE",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "18",
    "name": "ANDRE MATHEUS DE OLIVEIRA GAMA",
    "email": "andre@pge.gov.br",
    "secretariat": "PGE",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2027-01-01"
  },
  {
    "id": "19",
    "name": "ANDRE NATHAN DE OLIVEIRA GAMA",
    "email": "andre@pge.gov.br",
    "secretariat": "PGE",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2027-01-01"
  },
  {
    "id": "20",
    "name": "ARTHUR RYAN SANTOS SANTANA",
    "email": "arthur@pge.gov.br",
    "secretariat": "PGE",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "21",
    "name": "FERNANDA CAROLINA PINHEIRO DE MELO",
    "email": "fernanda@pge.gov.br",
    "secretariat": "PGE",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2027-01-01"
  },
  {
    "id": "22",
    "name": "FRANCISCO DORS NETO",
    "email": "francisco@pge.gov.br",
    "secretariat": "PGE",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2027-01-01"
  },
  {
    "id": "23",
    "name": "GEORGE VICTOR SIQUEIRA COSTA",
    "email": "george@pge.gov.br",
    "secretariat": "PGE",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2027-01-01"
  },
  {
    "id": "24",
    "name": "GUILHERME DE ARAUJO FIGUEIREDO",
    "email": "guilherme@pge.gov.br",
    "secretariat": "PGE",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "25",
    "name": "HANDERSON MATEUS NASCIMENTO MONTEIRO",
    "email": "handerson@pge.gov.br",
    "secretariat": "PGE",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2027-01-01"
  },
  {
    "id": "26",
    "name": "HEMILLIE KAYLANNE MOREIRA ARAUJO",
    "email": "hemillie@pge.gov.br",
    "secretariat": "PGE",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "27",
    "name": "ISABELA LIMA SANTIAGO",
    "email": "isabela@pge.gov.br",
    "secretariat": "PGE",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "28",
    "name": "JOAQUIM OTÁVIO DOS SANTOS JUSTE",
    "email": "joaquim@pge.gov.br",
    "secretariat": "PGE",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2027-01-01"
  },
  {
    "id": "29",
    "name": "LUCAS DOS SANTOS NASCIMENTO",
    "email": "lucas@pge.gov.br",
    "secretariat": "PGE",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2027-01-01"
  },
  {
    "id": "30",
    "name": "LYAN GUSTAVO DE SOUSA LIMA",
    "email": "lyan@pge.gov.br",
    "secretariat": "PGE",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2027-01-01"
  },
  {
    "id": "31",
    "name": "NICOLE NATHIELY BERNARDO ROSAS",
    "email": "nicole@pge.gov.br",
    "secretariat": "PGE",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2027-01-01"
  },
  {
    "id": "32",
    "name": "SHAKIRA PAMELA TAVARES DE LIMA",
    "email": "shakira@pge.gov.br",
    "secretariat": "PGE",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2027-01-01"
  },
  {
    "id": "33",
    "name": "THACILA JAMYLI NERES NUNES",
    "email": "thacila@pge.gov.br",
    "secretariat": "PGE",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "34",
    "name": "THAMYRESS BIANNCA MOREIRA MELO",
    "email": "thamyress@pge.gov.br",
    "secretariat": "PGE",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2027-01-01"
  },
  {
    "id": "35",
    "name": "YASMIN SILVA CELANE",
    "email": "yasmin@pge.gov.br",
    "secretariat": "PGE",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "36",
    "name": "ADRIANA LOPES PEREIRA",
    "email": "adriana@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "37",
    "name": "ALANA RAQUEL L CORDEIRO",
    "email": "alana@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "38",
    "name": "ALDEJANE FARIAS REIS",
    "email": "aldejane@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "39",
    "name": "ALEXANDRE ALVES DA SILVA",
    "email": "alexandre@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "40",
    "name": "ALINE THAMIRES DE AMORIM",
    "email": "aline@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "41",
    "name": "ANA LETICIA OLIVEIRA ARAUJO",
    "email": "ana@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "42",
    "name": "ANA PAULA C. ALMEIDA",
    "email": "ana@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "43",
    "name": "ANDRE FELIPE S. ARAÚJO SANTOS",
    "email": "andre@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "44",
    "name": "ANDRE RICARDO DE OLIVEIRA SANTOS",
    "email": "andre@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "45",
    "name": "ANDREY S PAIVA",
    "email": "andrey@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "46",
    "name": "ANDRYEA KAUANY S. FERREIRA",
    "email": "andryea@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "47",
    "name": "ANGEL GABRIEL P. CARDOSO",
    "email": "angel@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "48",
    "name": "ANNE CAROLINNY DA S. RODRIGUES",
    "email": "anne@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "49",
    "name": "ANNY KETHLEN C. SCHMITH",
    "email": "anny@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "50",
    "name": "ANTONIA NATHALIA DE C. GALVÃO",
    "email": "antonia@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "51",
    "name": "ARIONE RIBEIRO SOUSA",
    "email": "arione@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "52",
    "name": "AYSHA LORRANA QUADROS",
    "email": "aysha@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "53",
    "name": "BEATRIZ SUDARIO LABORNE",
    "email": "beatriz@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "54",
    "name": "BRENDA M. DE S. BARBOSA",
    "email": "brenda@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "55",
    "name": "CELIA LEANDRO FERREIRA",
    "email": "celia@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "56",
    "name": "CLYDSON BRUNO G. M. LIMA",
    "email": "clydson@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "57",
    "name": "DARLEIA DE A. CASTRO",
    "email": "darleia@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "58",
    "name": "DAYANA NAYARA DOS S. BARROSO",
    "email": "dayana@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "59",
    "name": "DEYSE SONAYRA SILVA",
    "email": "deyse@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "60",
    "name": "DIANA KELY DE OLIVEIRA SAMPAIO",
    "email": "diana@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "61",
    "name": "DOMINIK A. VALE",
    "email": "dominik@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "62",
    "name": "EDINALVA R. DA CRUZ",
    "email": "edinalva@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "63",
    "name": "EDUARDO GONÇALVES MENEZES FILHO",
    "email": "eduardo@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "64",
    "name": "ELANILDE DOS S. PADILHA",
    "email": "elanilde@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "65",
    "name": "ELIASAFE THALLISON D. SOUZA",
    "email": "eliasafe@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "66",
    "name": "ELISANNGELA DA COSTA SILVA",
    "email": "elisanngela@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "67",
    "name": "ELRISON RIBEIRO DE SOUSA",
    "email": "elrison@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "68",
    "name": "EMANUELA ALVES SILVA",
    "email": "emanuela@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "69",
    "name": "EMANUELLY VICTORIA C.\r\nBARROS",
    "email": "emanuelly@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "70",
    "name": "EMILY S. TEIXEIRA",
    "email": "emily@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "71",
    "name": "EVELINE DE C. GOMES",
    "email": "eveline@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "72",
    "name": "FELIPE RODRIGUES SOARES",
    "email": "felipe@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "73",
    "name": "FERNANDA DE OLIVEIRA",
    "email": "fernanda@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "74",
    "name": "FERNANDO VINICIO S. ROCHA",
    "email": "fernando@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "75",
    "name": "FLAVIO HENRIQUE L. F. PONTES",
    "email": "flavio@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "76",
    "name": "FRANCISCO EDILSON DA SILVA JUNIOR",
    "email": "francisco@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "77",
    "name": "FRANCISCO SILVA SOUSA",
    "email": "francisco@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "78",
    "name": "GABRIELA LARISSA DE SOUSA",
    "email": "gabriela@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "79",
    "name": "GABRIELA LEAL COSTA",
    "email": "gabriela@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "80",
    "name": "GABRIELE DOS SANTOS CORREA",
    "email": "gabriele@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "81",
    "name": "GARDENIA NAYANA R FURTADO",
    "email": "gardenia@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "82",
    "name": "GIOVANNA VITORIA R. SOUZA",
    "email": "giovanna@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "83",
    "name": "GUSTAVO DOS S. LEAL LIMA",
    "email": "gustavo@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "84",
    "name": "GUSTAVO REGO MACHADO",
    "email": "gustavo@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "85",
    "name": "HADRYA REBEKA T. S.\r\nSOBRAL",
    "email": "hadrya@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "86",
    "name": "HADRYA REBEKA T.S. SOBRAL",
    "email": "hadrya@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "87",
    "name": "HEMILLY DA S. FERREIRA",
    "email": "hemilly@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "88",
    "name": "HEMILY CRISTINY C. LOPES",
    "email": "hemily@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "89",
    "name": "HENRIQUE DE S. QUADROS",
    "email": "henrique@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "90",
    "name": "HIZADORA LIRA DE ARAÚJO",
    "email": "hizadora@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "91",
    "name": "HYAGO MEGIAS DAMASCENO",
    "email": "hyago@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "92",
    "name": "JACIELEN P. SOARES",
    "email": "jacielen@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "93",
    "name": "JACKSON W. SOUSA DE JESUS",
    "email": "jackson@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "94",
    "name": "JAMILLY ALVES",
    "email": "jamilly@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "95",
    "name": "JAMILLY ALVES PINHEIRO\r\nDA SILVA",
    "email": "jamilly@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "96",
    "name": "JAMILLY DA SILVA GOMES",
    "email": "jamilly@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "97",
    "name": "JANNY ESTEFANIA R RODRIGUES",
    "email": "janny@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "98",
    "name": "JENELICE MARQUES DE MELO",
    "email": "jenelice@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "99",
    "name": "JENNIFER LEININ C. GONZALEZ",
    "email": "jennifer@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "100",
    "name": "JESSICA DEL CARMEN L. ABREO",
    "email": "jessica@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "101",
    "name": "JESSICA DEL CARMEN\r\nLOPEZ ABREO",
    "email": "jessica@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "102",
    "name": "JESSICA SILVA SANTOS",
    "email": "jessica@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "103",
    "name": "JHEILLY CRISTINA F. BARROS",
    "email": "jheilly@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "104",
    "name": "JHINAIRA APARECIDA BAZILIO MALLMANN",
    "email": "jhinaira@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "105",
    "name": "JHONAIRA APARECIDA B MALLMANN",
    "email": "jhonaira@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "106",
    "name": "JOLISA JONESSA DOS SANTOS",
    "email": "jolisa@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "107",
    "name": "JORDEANE PEREIRA COSTA",
    "email": "jordeane@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "108",
    "name": "JOSELMA DA S. RODRIUGUES",
    "email": "joselma@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "109",
    "name": "JOSUE ALVES COSTA",
    "email": "josue@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "110",
    "name": "JULIA COSTA SOARES",
    "email": "julia@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "111",
    "name": "JULIANE A. DA SILVA",
    "email": "juliane@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "112",
    "name": "KAIO LUCAS LAGO O. MORAES",
    "email": "kaio@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "113",
    "name": "KAMILA LIMA SOUZA",
    "email": "kamila@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "114",
    "name": "KARINA PAIXÃO DA SILVA",
    "email": "karina@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "115",
    "name": "KARINNE SENA SOUSA",
    "email": "karinne@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "116",
    "name": "KAROLAINE DE BRITO PIMENTA",
    "email": "karolaine@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "117",
    "name": "KAYKY TAVARES DA ROCHA",
    "email": "kayky@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "118",
    "name": "KECIANNE S. RODRIGUES",
    "email": "kecianne@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "119",
    "name": "KELLY RAIANE S. PEREIRA",
    "email": "kelly@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "120",
    "name": "KENNERSON LUNA NOBGREGA",
    "email": "kennerson@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "121",
    "name": "KERLEN KETLEN DA S. RODRIGUES",
    "email": "kerlen@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "122",
    "name": "KIARA FEITOSA LIMA",
    "email": "kiara@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "123",
    "name": "LEIA SOUSA DE JESUS",
    "email": "leia@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "124",
    "name": "LEOMIL DA S. XIMENES",
    "email": "leomil@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "125",
    "name": "LETICIA N. PEIRO",
    "email": "leticia@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "126",
    "name": "LUIZ CLAUDIO FARIAS EVANGELISTA JUNIOR",
    "email": "luiz@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "127",
    "name": "LUZIA CAVALCANTE CRUZ",
    "email": "luzia@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "128",
    "name": "MAIZA LUIZA DA SILVA",
    "email": "maiza@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "129",
    "name": "MARCELLA SOUZA DA COSTA",
    "email": "marcella@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "130",
    "name": "MARCELO FARIA TEIXEIRA",
    "email": "marcelo@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "131",
    "name": "MARDILENE KETHLEN S. FRANCO",
    "email": "mardilene@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "132",
    "name": "MARIA ANTONIA S. TATAIRA",
    "email": "maria@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "133",
    "name": "MARIA ARANILCE D. RIBEIRO",
    "email": "maria@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "134",
    "name": "MARIA CLARA R. LIMA",
    "email": "maria@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "135",
    "name": "MARIA EVELEYNE ALBUQUERQUE\r\nVIDAL",
    "email": "maria@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "136",
    "name": "MARIA LETICIA O. DA SILVA",
    "email": "maria@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "137",
    "name": "MARIA LUIZA DOS S. SILVA",
    "email": "maria@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "138",
    "name": "MARIA LUIZA SILVA",
    "email": "maria@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "139",
    "name": "MARIANNA A. DO VALE",
    "email": "marianna@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "140",
    "name": "MARIANY DA S. SOUSA",
    "email": "mariany@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "141",
    "name": "MARIANY DA SILVA SOUSA",
    "email": "mariany@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "142",
    "name": "MAURIVAN MARQUES DA SILVA",
    "email": "maurivan@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "143",
    "name": "MIRELLA BEZERRA MAIA",
    "email": "mirella@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "144",
    "name": "MIRIAN C. SANTOS MELO",
    "email": "mirian@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "145",
    "name": "MYKL DOS S. SILVA",
    "email": "mykl@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "146",
    "name": "NALANDA RIBEIRO OLIVEIRA",
    "email": "nalanda@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "147",
    "name": "NARLEN CRISTINA SOUZA PONTES",
    "email": "narlen@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "148",
    "name": "NATHALLY DA S. NASCIMENTO",
    "email": "nathally@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "149",
    "name": "NORA NEY M BARROS",
    "email": "nora@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "150",
    "name": "PABLO AGUIAR LIMA",
    "email": "pablo@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "151",
    "name": "PABLO DANIEL L. DOS SANTOS",
    "email": "pablo@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "152",
    "name": "PAULA ANDREIA DE A. BRAGA",
    "email": "paula@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "153",
    "name": "PAULO HENRIQUE DAS N. NASCIMENTO",
    "email": "paulo@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "154",
    "name": "RAIANA FARIA TTEIXEIRA",
    "email": "raiana@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "155",
    "name": "RANDSON FEITOSA MACEDO",
    "email": "randson@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "156",
    "name": "RICARDO LIMA SOUSA",
    "email": "ricardo@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "157",
    "name": "RONILSON DOS SANTOS",
    "email": "ronilson@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "158",
    "name": "RUTH MARQUES DA SILVA",
    "email": "ruth@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "159",
    "name": "RUTHE A. FELIX",
    "email": "ruthe@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "160",
    "name": "SAMILA VITOR DE SOUZA",
    "email": "samila@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "161",
    "name": "SAMIRA DOS S. DUARTE",
    "email": "samira@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "162",
    "name": "SARA ARAUJO DA CONCEIÇÃO",
    "email": "sara@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "163",
    "name": "SARA PEREIRA",
    "email": "sara@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "164",
    "name": "SCARLYS ALEXA H. FRANCIS",
    "email": "scarlys@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "165",
    "name": "SHIRLLEY M. S. SOARES DE\r\nOLIVEIRA",
    "email": "shirlley@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "166",
    "name": "THAIS FERANDA MATOS",
    "email": "thais@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "167",
    "name": "THALITA OLIVEIRA DE SOUSA",
    "email": "thalita@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "168",
    "name": "VANIA MOREIRA DE SOUZA",
    "email": "vania@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "169",
    "name": "VANIA VASCONCELOS DE LIMA",
    "email": "vania@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "170",
    "name": "VERONICA B. PEREIRA",
    "email": "veronica@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "171",
    "name": "VICTOR EDUARDO R. DA SILVA",
    "email": "victor@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "172",
    "name": "VICTORIA ISABELLA C. ARAÚJO",
    "email": "victoria@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "173",
    "name": "VITORIA SILVA E SILVA",
    "email": "vitoria@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "174",
    "name": "VIVIANE DE A. SILVA",
    "email": "viviane@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "175",
    "name": "WALLISON KAUAN DE L SILVA",
    "email": "wallison@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "176",
    "name": "WINNIS O. SENA",
    "email": "winnis@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "177",
    "name": "YANNE ALMEIDA DE ARAÚJO",
    "email": "yanne@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "178",
    "name": "YASMIN LOPES CRUZ",
    "email": "yasmin@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "179",
    "name": "ALBA DE JESUS B. POLICARPO",
    "email": "alba@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "180",
    "name": "ANDREA GOMES COUTINHO",
    "email": "andrea@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "181",
    "name": "MARIA DE FATIMA F. RIBEIRO",
    "email": "maria@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "182",
    "name": "NATHALIA JULIANY DA S. SOUSA",
    "email": "nathalia@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "183",
    "name": "ELZA C. DAMASCENO",
    "email": "elza@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "184",
    "name": "EMYLLY C. FERNANDES",
    "email": "emylly@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "185",
    "name": "LAIS GOMES DA SILVA",
    "email": "lais@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "186",
    "name": "RANDIMAR DE LOS ANGELES R. GIMENEZ",
    "email": "randimar@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "187",
    "name": "FLÁVIA A. DE OLIVEIRA",
    "email": "flávia@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "188",
    "name": "JULIO FILHO FONTES",
    "email": "julio@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "189",
    "name": "MARIA JESUINA L. DA SILVA",
    "email": "maria@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "190",
    "name": "ANDREIA G. DA SILVA",
    "email": "andreia@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "191",
    "name": "EVENLEY DEZAM",
    "email": "evenley@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "192",
    "name": "GISELE L. COELHO",
    "email": "gisele@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "193",
    "name": "GUSTAVO R. PEREIRA",
    "email": "gustavo@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "194",
    "name": "ALANA DA S. BESERRA",
    "email": "alana@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "195",
    "name": "DENILSON JOSÉ DA C. SANTOS",
    "email": "denilson@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "196",
    "name": "EVA DA C. VALE",
    "email": "eva@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "197",
    "name": "LINDALEE C. SILVA",
    "email": "lindalee@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "198",
    "name": "ANA CLARA O. SILVA",
    "email": "ana@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "199",
    "name": "ANNA PAULA S. PINHEIRO",
    "email": "anna@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "200",
    "name": "AGATA CASSIANE D. SOUZA LOPES",
    "email": "agata@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "201",
    "name": "MYRLA SUYENNE M. MESSIAS",
    "email": "myrla@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "202",
    "name": "ROSANA DA S. BEZERRA",
    "email": "rosana@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "203",
    "name": "CATY CARLINA FRANCES",
    "email": "caty@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "204",
    "name": "CHARLLYSSON KENNED L. GOMES",
    "email": "charllysson@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "205",
    "name": "MATHEUS AUGUSTO R. PEREIRA",
    "email": "matheus@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "206",
    "name": "LUCAS FERREIRA DE S. MOURA",
    "email": "lucas@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "207",
    "name": "MARLA NAYARA NEVES S.",
    "email": "marla@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "208",
    "name": "MARIA EDUARDA F. SILVA",
    "email": "maria@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "209",
    "name": "AVANIR DOS SANTOS C. OLIVEIRA",
    "email": "avanir@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "210",
    "name": "JOSEANE BORGES DA SILVA",
    "email": "joseane@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "211",
    "name": "MARIA DE FATIMA GALVÃO",
    "email": "maria@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "212",
    "name": "WILLIMAR DOS REIS SILVA",
    "email": "willimar@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "213",
    "name": "KAYSA KAROLYNE VERAS FREIRE",
    "email": "kaysa@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "214",
    "name": "CLEITON ARAÚJO DA SILVA",
    "email": "cleiton@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "215",
    "name": "LEIA SOUZA DE JESUS",
    "email": "leia@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "216",
    "name": "ROBERTO GOMES DA SILVA",
    "email": "roberto@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "217",
    "name": "CARLOS DANIEL ALVES PEREIRA",
    "email": "carlos@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "218",
    "name": "VINICIUS DA SILVA COURA",
    "email": "vinicius@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "219",
    "name": "ALICE TAYZA A. DE VASCONCELOS",
    "email": "alice@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "220",
    "name": "ALDER GIULIO ARAUJO DE CRISTO",
    "email": "alder@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "221",
    "name": "VINYCIUS CARDOSO L. AMADOR",
    "email": "vinycius@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "222",
    "name": "THAÍS DA SILVA ALMEIDA",
    "email": "thaís@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "223",
    "name": "KETLEN DA SILVA RAMOS",
    "email": "ketlen@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "224",
    "name": "PATRICIA ANTONELLA S. HERRERA",
    "email": "patricia@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "225",
    "name": "RILANI DAS NEVES ARAUJO",
    "email": "rilani@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "226",
    "name": "ADRIANA FERNANDES COSTA",
    "email": "adriana@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "227",
    "name": "ADRIANO BASILIO DE SOUSA",
    "email": "adriano@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "228",
    "name": "URCILÂNDIA DA SILVA COSTA",
    "email": "urcilândia@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "229",
    "name": "NATALIA RAIANE M. ARAUJO",
    "email": "natalia@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "230",
    "name": "LUCAS EDUARDO CARDOSO SILVA",
    "email": "lucas@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "231",
    "name": "KATIUSCIA VIEIRA P. FERREIRA",
    "email": "katiuscia@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "232",
    "name": "ANNE KARINY DA SILVA SARAIVA",
    "email": "anne@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "233",
    "name": "RAFAELLANY ESTEFANY P. DA SILVA",
    "email": "rafaellany@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "234",
    "name": "ELDER DA SILVA CASTELO",
    "email": "elder@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "235",
    "name": "EMILLY LORRANY LOPES DA SILVA",
    "email": "emilly@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "236",
    "name": "JOSIVAN DO NASCIMENTO RODRIGUES",
    "email": "josivan@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "237",
    "name": "VITOR GABRIEL DA SILVA MACCAGNAN",
    "email": "vitor@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "238",
    "name": "RONIEL DE SOUSA ALMEIDA",
    "email": "roniel@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "239",
    "name": "DEUZIANE LUSTOSA XIMENES",
    "email": "deuziane@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "240",
    "name": "GEREDIEL ANDRADE SILVA",
    "email": "gerediel@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "241",
    "name": "MARIA ALVES DA SILVA",
    "email": "maria@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "242",
    "name": "FREDY DANILO S. DIAZ",
    "email": "fredy@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "243",
    "name": "JANE ALVES DO NASCIMENTO",
    "email": "jane@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "244",
    "name": "LILIAN F. AGUIAR",
    "email": "lilian@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "245",
    "name": "AGATA CASSIANE DE S. LOPES",
    "email": "agata@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "246",
    "name": "ALICE MILENA F. DA SILVA",
    "email": "alice@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "247",
    "name": "ANDRESSA DE O. BARBOSA",
    "email": "andressa@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "248",
    "name": "GABRIEL A. FLORINDO",
    "email": "gabriel@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "249",
    "name": "LAYANE VITORIA S. GASPAR",
    "email": "layane@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "250",
    "name": "JANICE S. DE ARAUJO",
    "email": "janice@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "251",
    "name": "JESSICA DEL CARMEN L. ALBICO",
    "email": "jessica@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "252",
    "name": "SIMONE DOS S. CHARLES",
    "email": "simone@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "253",
    "name": "SUANNY DE S. F. RIBEIRO",
    "email": "suanny@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "254",
    "name": "ANDREA G. COUTINHO",
    "email": "andrea@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "255",
    "name": "ANA BEATRIZ O. DA COSTA",
    "email": "ana@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "256",
    "name": "DYOGO DOS R. DA LUZ JULIETE",
    "email": "dyogo@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "257",
    "name": "GLICIA JANAINA DE OLIVEIRA",
    "email": "glicia@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "258",
    "name": "KAILANE V. SALES",
    "email": "kailane@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "259",
    "name": "ADRYA RAPHAELLE A. RAMOS",
    "email": "adrya@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "260",
    "name": "ESTEFANY JULIANE F. DA SILVA",
    "email": "estefany@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "261",
    "name": "GUSTAVO F. SILVA",
    "email": "gustavo@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "262",
    "name": "JEUNESSE PAULINO DA SILVA",
    "email": "jeunesse@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "263",
    "name": "MATHEUS HENRIQUE G. VELOSO",
    "email": "matheus@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "264",
    "name": "ZAHARA SHEKINAH B. TAVAIERA",
    "email": "zahara@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "265",
    "name": "DAYANE ARRUDA DIAS",
    "email": "dayane@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "266",
    "name": "GIOVANNA MONICE S. MORAES",
    "email": "giovanna@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "267",
    "name": "JENNIFER SILBINA H. RODRIGUEZ",
    "email": "jennifer@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "268",
    "name": "MILEIDY KARINA C. RODRIGUEZ",
    "email": "mileidy@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "269",
    "name": "EVELLY THAIS C. SILVA",
    "email": "evelly@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "270",
    "name": "JHONNY GUTIERREZ",
    "email": "jhonny@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "271",
    "name": "NANETE DA SILVA",
    "email": "nanete@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "272",
    "name": "SIMONE A. CLEMENTINO",
    "email": "simone@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "273",
    "name": "FRANCIELIA N. DE CARVALHO",
    "email": "francielia@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "274",
    "name": "KEITIANE ROQUE GOMES",
    "email": "keitiane@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "275",
    "name": "MISMA HADADI P. LIMA",
    "email": "misma@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "276",
    "name": "EVELLYN R. DE SOUSA",
    "email": "evellyn@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "277",
    "name": "POLIANA DE S. NASCIMENTO",
    "email": "poliana@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "278",
    "name": "TAYSON BRUNO R. SIMAO",
    "email": "tayson@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "279",
    "name": "ANA BEL M. MOTA",
    "email": "ana@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "280",
    "name": "LIADINA P. LIMA",
    "email": "liadina@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "281",
    "name": "JOSELHA DE S.VIEIRA",
    "email": "joselha@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "282",
    "name": "CATY CARLINA FRANCIS",
    "email": "caty@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "283",
    "name": "CHARLLYSON KENNED L. GOMES",
    "email": "charllyson@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "284",
    "name": "AMANDA DA S. VARGAS",
    "email": "amanda@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "285",
    "name": "CRISTIAN ALEXANDER N. LIZARDI",
    "email": "cristian@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "286",
    "name": "MELISSA R. MATOS TATIANA NASCIMENTO SILVA",
    "email": "melissa@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "287",
    "name": "RANAYRA LUIZE S. L. MACIEL",
    "email": "ranayra@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "288",
    "name": "AMABILY DE S. GOMES",
    "email": "amabily@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "289",
    "name": "EDIENE A. FERREIRA",
    "email": "ediene@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "290",
    "name": "HEMILLY SHAIANNE S. COSTA",
    "email": "hemilly@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "291",
    "name": "VANESSA S. DA SILVA",
    "email": "vanessa@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "292",
    "name": "ELIELMA DE O. ALVES",
    "email": "elielma@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "293",
    "name": "JULIANA M. LIMA",
    "email": "juliana@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "294",
    "name": "SILIANY DE S. RIBEIRO MARQUES",
    "email": "siliany@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "295",
    "name": "WENDRYL F. DE OLIVEIRA",
    "email": "wendryl@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "296",
    "name": "AMANDA DA SILVA VARGAS",
    "email": "amanda@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "297",
    "name": "MELISSA R. MATOS",
    "email": "melissa@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "298",
    "name": "RANAYRA LUIZE S. LIMA MACIEL",
    "email": "ranayra@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "299",
    "name": "EVENLEY DEZAN",
    "email": "evenley@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "300",
    "name": "AMANDA CLARA P. DE SOUZA",
    "email": "amanda@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "301",
    "name": "ALEXANDRE M. DE JESUS",
    "email": "alexandre@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "302",
    "name": "GABRIEL G. RODRIGUES",
    "email": "gabriel@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "303",
    "name": "JOSYKELY S. MORAIS",
    "email": "josykely@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "304",
    "name": "FLÁVIA AROUCHA DE OLIVEIRA",
    "email": "flávia@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "305",
    "name": "GEAN GIMENES ROCHA",
    "email": "gean@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "306",
    "name": "ANA BEATRIZ C. MELO DA SILVA",
    "email": "ana@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "307",
    "name": "ADRIANA L. PEREIRA",
    "email": "adriana@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "308",
    "name": "ESTHER P. DE OLIVEIRA",
    "email": "esther@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  },
  {
    "id": "309",
    "name": "RANYELLE O. GOVEIA",
    "email": "ranyelle@sesau.gov.br",
    "secretariat": "SESAU",
    "role": "Estagiário(a)",
    "status": "Ativo",
    "startDate": "2025-01-01",
    "endDate": "2026-01-01"
  }
];

export const MOCK_STATS = {
  total: 309,
  active: 309,
  vacation: 0,
  expiringSoon: 0,
  openPositions: 0
};
