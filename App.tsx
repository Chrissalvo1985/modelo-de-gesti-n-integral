
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { presentationData, ModalDataType } from './constants';
import Header from './components/Header';
import VisionSection from './components/VisionSection';
import FinalMessage from './components/FinalMessage';
import Modal from './components/Modal';
import TimeframeNavigator, { Timeframe } from './components/TimeframeNavigator';
import DashboardCard from './components/DashboardCard';

const App: React.FC = () => {
    const [modalData, setModalData] = useState<ModalDataType | null>(null);
    const [activeTimeframe, setActiveTimeframe] = useState<Timeframe>('Corto Plazo');
    const [animationKey, setAnimationKey] = useState(0);

    const openModal = useCallback((data: ModalDataType) => {
        setModalData(data);
    }, []);

    const closeModal = useCallback(() => {
        setModalData(null);
    }, []);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                closeModal();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [closeModal]);

    const handleTimeframeChange = (timeframe: Timeframe) => {
        setActiveTimeframe(timeframe);
        setAnimationKey(prevKey => prevKey + 1); // Trigger re-animation
    };

    const timeframeMapping: Record<Timeframe, string> = {
        'Corto Plazo': 'corto',
        'Mediano Plazo': 'mediano',
        'Largo Plazo': 'largo'
    };

    const currentData = useMemo(() => {
        const timeframeKey = timeframeMapping[activeTimeframe];
        
        const filterByTimeframe = (items: any[]) => items.filter(item => item.timeframe.includes(timeframeKey));

        return {
            objective: presentationData.strategicObjectives.items.find(item => item.timeframe === timeframeKey),
            roadmap: presentationData.capabilitiesRoadmap.items.find(item => item.timeframe === timeframeKey),
            kpis: filterByTimeframe(presentationData.kpis.items),
            resources: filterByTimeframe(presentationData.resources.items),
            risks: filterByTimeframe(presentationData.risks.items),
        };
    }, [activeTimeframe]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-gray-900 antialiased">
            <Header title={presentationData.title} subtitle={presentationData.subtitle} />

            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
                <VisionSection vision={presentationData.vision} />

                <div>
                    <TimeframeNavigator
                        activeTimeframe={activeTimeframe}
                        onTimeframeChange={handleTimeframeChange}
                    />
                    
                    <div key={animationKey} className="mt-12 content-animate">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {currentData.objective && (
                                <div className="md:col-span-2 lg:col-span-4">
                                     <DashboardCard
                                        item={currentData.objective}
                                        onClick={() => openModal(currentData.objective!)}
                                        size="large"
                                    />
                                </div>
                            )}

                            {currentData.roadmap && (
                                 <div className="md:col-span-2 lg:col-span-4">
                                    <DashboardCard
                                        item={currentData.roadmap}
                                        onClick={() => openModal(currentData.roadmap!)}
                                        size="large"
                                    />
                                </div>
                            )}
                            
                            {/* Dynamic sections based on timeframe */}
                             {currentData.kpis.length > 0 && (
                                <h3 className="lg:col-span-4 text-sm font-semibold text-cyan-400 tracking-widest uppercase mt-8 mb-[-0.5rem]">Indicadores Clave</h3>
                             )}
                            {currentData.kpis.map((item, index) => (
                                <DashboardCard key={`kpi-${index}`} item={item} onClick={() => openModal(item)} />
                            ))}

                            {currentData.resources.length > 0 && (
                                <h3 className="lg:col-span-4 text-sm font-semibold text-cyan-400 tracking-widest uppercase mt-8 mb-[-0.5rem]">Recursos Necesarios</h3>
                            )}
                            {currentData.resources.map((item, index) => (
                                <DashboardCard key={`res-${index}`} item={item} onClick={() => openModal(item)} />
                            ))}

                             {currentData.risks.length > 0 && (
                                <h3 className="lg:col-span-4 text-sm font-semibold text-cyan-400 tracking-widest uppercase mt-8 mb-[-0.5rem]">Riesgos a Gestionar</h3>
                             )}
                            {currentData.risks.map((item, index) => (
                                <DashboardCard key={`risk-${index}`} item={item} onClick={() => openModal(item)} />
                            ))}
                        </div>
                    </div>
                </div>

                <FinalMessage message={presentationData.finalMessage} />
            </main>
            
            {modalData && (
                <Modal
                    isOpen={!!modalData}
                    onClose={closeModal}
                    title={modalData.title}
                    icon={modalData.icon}
                >
                     <div className="space-y-5">
                        {modalData.details.map((item, index) => {
                             const isMitigation = item.toLowerCase().startsWith('mitigación:');
                             const isBold = item.startsWith('**');
                             
                             if (isMitigation) {
                                 const content = item.substring('mitigación:'.length).trim();
                                 const hasBoldPart = content.includes('**');
                                 const parts = hasBoldPart ? content.split('**') : [content];

                                 return (
                                     <div key={index} className="p-4 border-l-4 border-cyan-500 bg-slate-900/50 rounded-r-lg animate-fade-in-up" style={{ animationDelay: `${index * 100}ms`}}>
                                        <h4 className="font-semibold text-cyan-400 tracking-wider uppercase text-sm">Mitigación</h4>
                                        <p className="mt-2 text-slate-300">
                                            {hasBoldPart ? <><strong>{parts[1]}</strong>{parts[2]}</> : parts[0]}
                                        </p>
                                     </div>
                                 );
                             }

                             if(isBold) {
                                const parts = item.split('**');
                                return(
                                  <div key={index} className="flex items-start gap-4 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms`}}>
                                    <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-cyan-500/10 rounded-full mt-0.5">
                                        <svg className="w-4 h-4 text-cyan-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-slate-300 leading-relaxed">
                                        <strong className="text-slate-100">{parts[1]}</strong>{parts[2]}
                                    </p>
                                </div>
                                )
                             }
 
                             return (
                                 <div key={index} className="flex items-start gap-4 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms`}}>
                                     <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-cyan-500/10 rounded-full mt-0.5">
                                        <svg className="w-4 h-4 text-cyan-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                     </div>
                                     <p className="text-slate-300 leading-relaxed">{item}</p>
                                 </div>
                             );
                         })}
                     </div>
                     <style>{`
                         @keyframes fade-in-up {
                             from { opacity: 0; transform: translateY(10px); }
                             to { opacity: 1; transform: translateY(0); }
                         }
                         .animate-fade-in-up {
                             opacity: 0;
                             animation: fade-in-up 0.5s ease-out forwards;
                         }
                     `}</style>
                </Modal>
            )}
        </div>
    );
};

export default App;
