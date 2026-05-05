import type { ElementType } from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: ElementType;
  trend?: {
    value: string;
    positive: boolean;
  };
  colorClass: string;
}

export function StatCard({ title, value, icon: Icon, trend, colorClass }: StatCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all group relative overflow-hidden flex flex-col justify-between h-full transform-gpu">
      <div className={`absolute right-0 top-0 w-24 h-24 ${colorClass} opacity-5 rounded-bl-[100px] transition-transform transform-gpu duration-300 group-hover:scale-110`} />
      
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm font-medium text-slate-500 mb-1 min-h-[40px] flex items-center">{title}</p>
          <h3 className="text-3xl font-bold text-slate-800 tracking-tight">{value}</h3>
          
          <div className="mt-2 h-5">
            {trend ? (
              <p className="text-sm flex items-center gap-1 font-medium">
                <span className={trend.positive ? 'text-emerald-500' : 'text-red-500'}>
                  {trend.value}
                </span>
                <span className="text-slate-400 font-normal">vs último mês</span>
              </p>
            ) : null}
          </div>
        </div>
        
        <div className={`p-3 rounded-xl ${colorClass} bg-opacity-10 shrink-0`}>
          <Icon size={24} className={colorClass.replace('bg-', 'text-').replace('-500', '-600')} />
        </div>
      </div>
    </div>
  );
}
