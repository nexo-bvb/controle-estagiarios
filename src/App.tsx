import { Header } from './components/Header';
import { StatCard } from './components/StatCard';
import { InternTable } from './components/InternTable';
import { MOCK_INTERNS, MOCK_STATS } from './data/mock';
import { Users, UserCheck } from 'lucide-react';
import './App.css';

function App() {
  return (
    <div className="flex min-h-screen bg-slate-50 font-sans">
      
      <div className="flex-1 flex flex-col">
        <Header />
        
        <main className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-slate-800">Visão Geral</h1>
              <p className="text-slate-500 mt-1">Bem-vindo ao painel de gestão de estagiários.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <StatCard 
                title="Total de Estagiários" 
                value={MOCK_STATS.total} 
                icon={Users} 
                colorClass="bg-blue-500"
                trend={{ value: '+12%', positive: true }}
              />
              <StatCard 
                title="Ativos no Momento" 
                value={MOCK_STATS.active} 
                icon={UserCheck} 
                colorClass="bg-emerald-500"
              />
            </div>

            {/* Table Section */}
            <InternTable data={MOCK_INTERNS} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
