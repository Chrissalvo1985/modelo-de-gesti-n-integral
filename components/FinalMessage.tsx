
import React from 'react';

interface FinalMessageProps {
    message: string;
}

const FinalMessage: React.FC<FinalMessageProps> = ({ message }) => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="bg-gradient-to-r from-cyan-500 to-teal-600 p-8 rounded-lg shadow-2xl shadow-cyan-500/20 text-center">
                     <h2 className="text-sm font-semibold text-white/80 tracking-widest uppercase">
                        Mensaje Final
                    </h2>
                    <p className="mt-4 text-2xl font-bold text-white max-w-4xl mx-auto">
                        {message}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default FinalMessage;
