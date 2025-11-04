
import React from 'react';

interface VisionSectionProps {
    vision: string;
}

const VisionSection: React.FC<VisionSectionProps> = ({ vision }) => {
    return (
        <section className="text-center">
             <h2 className="text-sm font-semibold text-cyan-400 tracking-widest uppercase">
                Visión General
            </h2>
            <blockquote className="mt-6 text-2xl sm:text-3xl font-medium text-slate-100 max-w-4xl mx-auto leading-relaxed">
                <p>"{vision}"</p>
            </blockquote>
        </section>
    );
};

export default VisionSection;
