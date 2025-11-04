
import React from 'react';

interface HeaderProps {
    title: string;
    subtitle: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
    return (
        <header className="py-12 sm:py-16 bg-slate-900/50">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-500 tracking-tight">
                    {title}
                </h1>
                {subtitle && (
                    <p className="mt-4 text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto">
                        {subtitle}
                    </p>
                )}
            </div>
        </header>
    );
};

export default Header;
