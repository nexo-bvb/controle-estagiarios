import { Calendar } from 'lucide-react';

export function Header() {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-10 shadow-sm">
      <div className="flex items-center gap-3">
        <h1 className="text-xl font-bold text-slate-800">Consulta de Estagiários</h1>
      </div>

      <div className="flex items-center gap-2 text-sm text-slate-500 bg-slate-50 px-4 py-2 rounded-lg border border-slate-200">
        <Calendar size={16} className="text-blue-600" />
        <span>Última atualização: <span className="font-medium text-slate-700">01/05/2026</span></span>
      </div>
    </header>
  );
}
