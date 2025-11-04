import React from 'react';

export type Timeframe = 'Corto Plazo' | 'Mediano Plazo' | 'Largo Plazo';

interface TimeframeNavigatorProps {
    activeTimeframe: Timeframe;
    onTimeframeChange: (timeframe: Timeframe) => void;
}

const timeframes: Timeframe[] = ['Corto Plazo', 'Mediano Plazo', 'Largo Plazo'];

const TimeframeNavigator: React.FC<TimeframeNavigatorProps> = ({ activeTimeframe, onTimeframeChange }) => {
    return (
        <div className="flex justify-center">
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-full p-1.5 flex items-center space-x-2">
                {timeframes.map((timeframe) => (
                    <button
                        key={timeframe}
                        onClick={() => onTimeframeChange(timeframe)}
                        className={`px-4 sm:px-6 py-2.5 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900
                            ${activeTimeframe === timeframe 
                                ? 'bg-cyan-500 text-slate-900 shadow-lg' 
                                : 'text-slate-300 hover:bg-slate-700/50'
                            }`}
                    >
                        {timeframe}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default TimeframeNavigator;