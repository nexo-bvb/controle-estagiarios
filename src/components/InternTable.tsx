import { useState, useMemo, useEffect } from 'react';
import { Search, Filter, Download, FileText, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Intern } from '../data/mock';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
interface InternTableProps {
  data: Intern[];
}

export function InternTable({ data }: InternTableProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [yearFilter, setYearFilter] = useState<string>('');
  const [secretariatFilter, setSecretariatFilter] = useState<string>('');
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  const formatDate = (dateStr: string) => {
    const parts = dateStr.split('-');
    if (parts.length === 3) {
      return `${parts[2]}/${parts[1]}/${parts[0]}`;
    }
    return dateStr;
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, yearFilter, secretariatFilter]);

  const availableYears = ['2026', '2025', '2024', '2023'];
  const availableSecretariats = useMemo(
    () => [...new Set(data.map((intern) => intern.secretariat))].sort(),
    [data],
  );

  const filteredData = useMemo(() => {
    const result = data.filter(intern => {
      const matchSearch = intern.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          intern.secretariat.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          intern.role.toLowerCase().includes(searchTerm.toLowerCase());
      const matchSecretariat = !secretariatFilter || intern.secretariat === secretariatFilter;
      let matchYear = true;
      if (yearFilter) {
        const startYear = parseInt(intern.startDate.substring(0, 4));
        const endYearRaw = parseInt(intern.endDate.substring(0, 4));
        const endYear = !isNaN(endYearRaw) ? endYearRaw : startYear;
        const filterYear = parseInt(yearFilter);
        matchYear = startYear <= filterYear && endYear >= filterYear;
      }
      
      return matchSearch && matchYear && matchSecretariat;
    });
    
    return result.sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());
  }, [data, searchTerm, yearFilter, secretariatFilter]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredData.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredData, currentPage]);

  const getStatusStyle = (status: Intern['status']) => {
    switch (status) {
      case 'Ativo':
        return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case 'Férias':
        return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'Encerrado':
        return 'bg-slate-100 text-slate-700 border-slate-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedIds(new Set(filteredData.map(i => i.id)));
    } else {
      setSelectedIds(new Set());
    }
  };

  const handleSelectOne = (id: string) => {
    const newSet = new Set(selectedIds);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setSelectedIds(newSet);
  };

  const handleExportCSV = () => {
    const dataToExport = selectedIds.size > 0 ? filteredData.filter(i => selectedIds.has(i.id)) : filteredData;
    
    const headers = ['Nome', 'Secretaria', 'Cargo', 'Status', 'Início de Contrato', 'Final de Contrato'];
    const csvContent = [
      headers.join(';'),
      ...dataToExport.map(intern => [
        `"${intern.name}"`,
        `"${intern.secretariat}"`,
        `"${intern.role}"`,
        `"${intern.status}"`,
        `"${formatDate(intern.startDate)}"`,
        `"${formatDate(intern.endDate)}"`
      ].join(';'))
    ].join('\n');

    const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'relatorio_estagiarios.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleExportPDF = () => {
    const dataToExport = selectedIds.size > 0 ? filteredData.filter(i => selectedIds.has(i.id)) : filteredData;
    
    const doc = new jsPDF();
    
    doc.setFontSize(18);
    doc.text('Relatório de Estagiários', 14, 20);
    doc.setFontSize(10);
    doc.text(`Data de Geração: ${new Date().toLocaleDateString('pt-BR')}`, 14, 28);

    const tableColumn = ["Nome", "Secretaria", "Cargo", "Status", "Início de Contrato", "Final de Contrato"];
    const tableRows = dataToExport.map(intern => [
      intern.name,
      intern.secretariat,
      intern.role,
      intern.status,
      formatDate(intern.startDate),
      formatDate(intern.endDate)
    ]);

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 35,
      theme: 'grid',
      styles: { fontSize: 8, cellPadding: 3 },
      headStyles: { fillColor: [30, 41, 59] } // bg-slate-800
    });

    doc.save('relatorio_estagiarios.pdf');
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mt-8">
      <div className="p-6 border-b border-slate-200 flex flex-col gap-4 bg-slate-50/50">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-slate-800">Estagiários</h2>
          <div className="flex items-center gap-3">
            <button 
              onClick={handleExportCSV}
              className="flex items-center gap-2 text-sm bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-lg font-medium hover:bg-slate-50 transition-colors shadow-sm"
            >
              <Download size={16} />
              Baixar CSV
            </button>
            <button 
              onClick={handleExportPDF}
              className="flex items-center gap-2 text-sm bg-slate-800 text-white px-4 py-2 rounded-lg font-medium hover:bg-slate-700 transition-colors shadow-sm"
            >
              <FileText size={16} />
              Relatório PDF
            </button>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="relative flex-1 w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Buscar por nome, secretaria ou cargo..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-sm"
            />
          </div>

          <div className="relative w-full sm:w-auto">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <select
              value={secretariatFilter}
              onChange={(e) => setSecretariatFilter(e.target.value)}
              className="w-full sm:w-auto pl-10 pr-8 py-2 bg-white border border-slate-200 rounded-lg text-sm appearance-none focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all cursor-pointer shadow-sm"
            >
              <option value="">Todos os órgãos</option>
              {availableSecretariats.map((secretariat) => (
                <option key={secretariat} value={secretariat}>{secretariat}</option>
              ))}
            </select>
          </div>
          
          <div className="relative w-full sm:w-auto">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <select
              value={yearFilter}
              onChange={(e) => setYearFilter(e.target.value)}
              className="w-full sm:w-auto pl-10 pr-8 py-2 bg-white border border-slate-200 rounded-lg text-sm appearance-none focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all cursor-pointer shadow-sm"
            >
              <option value="">Qualquer Ano</option>
              {availableYears.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>

          {totalPages > 1 && (
            <div className="flex items-center gap-1 sm:ml-auto bg-white border border-slate-200 rounded-lg shadow-sm p-1">
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="p-1 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                title="Página Anterior"
              >
                <ChevronLeft size={18} />
              </button>
              <div className="text-sm font-medium text-slate-600 px-2 min-w-[3rem] text-center">
                {currentPage} / {totalPages}
              </div>
              <button
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="p-1 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                title="Próxima Página"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-slate-600">
          <thead className="text-xs uppercase bg-slate-50 text-slate-500 font-semibold border-b border-slate-200">
            <tr>
              <th className="px-6 py-4 w-12">
                <input 
                  type="checkbox" 
                  className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                  checked={filteredData.length > 0 && selectedIds.size === filteredData.length}
                  onChange={handleSelectAll}
                  title="Selecionar todos"
                />
              </th>
              <th className="px-6 py-4">Nome</th>
              <th className="px-6 py-4">Secretaria / Cargo</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Início de Contrato</th>
              <th className="px-6 py-4">Final de Contrato</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {paginatedData.length > 0 ? (
              paginatedData.map((intern) => (
                <tr key={intern.id} className={`hover:bg-slate-50/50 transition-colors group ${selectedIds.has(intern.id) ? 'bg-blue-50/30' : ''}`}>
                  <td className="px-6 py-4">
                    <input 
                      type="checkbox" 
                      className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                      checked={selectedIds.has(intern.id)}
                      onChange={() => handleSelectOne(intern.id)}
                    />
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-slate-800">{intern.name}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-medium text-slate-700">{intern.secretariat}</p>
                    <p className="text-slate-500 text-xs mt-0.5">{intern.role}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-md text-xs font-medium border ${getStatusStyle(intern.status)}`}>
                      {intern.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-slate-700">{formatDate(intern.startDate)}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-slate-700">{formatDate(intern.endDate)}</p>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="px-6 py-12 text-center text-slate-500">
                  Nenhum estagiário encontrado com os filtros atuais.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-200 bg-slate-50/50">
          <div className="text-sm text-slate-500">
            Mostrando <span className="font-medium text-slate-700">{((currentPage - 1) * itemsPerPage) + 1}</span> a <span className="font-medium text-slate-700">{Math.min(currentPage * itemsPerPage, filteredData.length)}</span> de <span className="font-medium text-slate-700">{filteredData.length}</span> estagiários
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-200 rounded-md disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              title="Página Anterior"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="text-sm font-medium text-slate-700 px-2">
              Página {currentPage} de {totalPages}
            </div>
            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-200 rounded-md disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              title="Próxima Página"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
