
import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    icon: React.ReactNode;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, icon, children }) => {
    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 bg-slate-900 bg-opacity-80 backdrop-blur-sm flex justify-center items-center z-50 p-4"
            onClick={onClose}
            style={{ animation: 'fadeIn 0.3s ease-out forwards' }}
        >
            <div
                className="bg-slate-800/80 border border-slate-700/80 rounded-xl shadow-2xl shadow-cyan-500/20 w-full max-w-2xl max-h-[90vh] flex flex-col transform"
                style={{ animation: 'enter 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center p-6 border-b border-slate-700">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-slate-700/50 border border-cyan-500/30">
                           {icon}
                        </div>
                        <h2 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">{title}</h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-700/50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-800 transition-all duration-200"
                        aria-label="Cerrar modal"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                
                <div className="p-6 sm:p-8 overflow-y-auto">
                    {children}
                </div>
            </div>
            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes enter {
                    from { opacity: 0; transform: translateY(-20px) scale(0.98); }
                    to { opacity: 1; transform: translateY(0) scale(1); }
                }
            `}</style>
        </div>
    );
};

export default Modal;
