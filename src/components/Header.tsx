import { Search } from 'lucide-react';

export function Header() {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center px-8 sticky top-0 z-10">
      {/* Spacer esquerdo para equilibrar o layout e manter o centro perfeito */}
      <div className="flex-1 hidden md:block" />

      {/* Barra de Pesquisa (Centro) */}
      <div className="flex-1 flex justify-center w-full">
        <div className="relative group w-full max-w-xl">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={20} />
          <input 
            type="text" 
            placeholder="Buscar estagiários, departamentos ou relatórios..." 
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all shadow-sm"
          />
        </div>
      </div>

      {/* Spacer direito para manter o centro perfeito */}
      <div className="flex-1 hidden md:block" />
    </header>
  );
}
