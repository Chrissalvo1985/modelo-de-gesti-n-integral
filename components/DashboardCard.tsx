
import React from 'react';
import { ModalDataType } from '../constants';

interface DashboardCardProps {
    item: ModalDataType;
    onClick: () => void;
    size?: 'normal' | 'large';
}

const DashboardCard: React.FC<DashboardCardProps> = ({ item, onClick, size = 'normal' }) => {
    const baseClasses = `
        bg-slate-800/50 p-6 rounded-lg border border-slate-700/50 
        hover:border-cyan-500 hover:shadow-2xl hover:shadow-cyan-500/10 
        transform hover:-translate-y-1 transition-all duration-300 cursor-pointer 
        flex flex-col h-full
    `;
    
    const summary = item.details[0].replace(/\*\*([^*]+)\*\*/g, '$1');

    if (size === 'large') {
        return (
            <div className={baseClasses} onClick={onClick}>
                <div className="flex flex-col sm:flex-row items-start gap-4">
                     <div className="flex-shrink-0 w-12 h-12 inline-flex items-center justify-center rounded-full bg-slate-800 border-2 border-cyan-500/50 text-white">
                        {item.icon}
                    </div>
                    <div className="flex-1">
                        {item.subtitle && <p className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">{item.subtitle}</p>}
                        <h3 className="mt-1 text-xl font-bold text-slate-100">{item.title}</h3>
                    </div>
                </div>
                <p className="mt-4 text-slate-400 text-base flex-grow">
                    {summary.substring(0, 200)}{summary.length > 200 ? '...' : ''}
                </p>
                <span className="text-cyan-400 font-semibold mt-4 self-start">Ver detalle completo</span>
            </div>
        )
    }

    // Normal size card
    return (
        <div className={baseClasses} onClick={onClick}>
            <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex-shrink-0 inline-flex items-center justify-center rounded-full bg-slate-800 border-2 border-cyan-500/50 text-white">
                    {item.icon}
                </div>
                 <div className="flex-1">
                    <h3 className="text-base font-bold text-slate-100 leading-tight">{item.title}</h3>
                </div>
            </div>
            <p className="mt-3 text-slate-400 text-sm flex-grow">
                {summary.substring(0, 100)}{summary.length > 100 ? '...' : ''}
            </p>
            <span className="text-cyan-400 font-semibold mt-4 text-sm self-start">Ver detalle</span>
        </div>
    );
};

export default DashboardCard;
