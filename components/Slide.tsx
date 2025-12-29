
import { GOALS_2026 } from '../constants';
import React from 'react';

interface SlideProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  pageNumber: number;
}

const Slide: React.FC<SlideProps> = ({ children, title, subtitle, pageNumber }) => {
  return (
    <div key={`slide-${pageNumber}`} className="w-full h-full flex flex-col overflow-hidden relative slide-content-animate px-12 py-10 md:px-20 md:py-14">
      <header className="z-10 mb-8 shrink-0 relative pl-8 border-l-[6px] border-[#007AFF]">
        {title && (
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-2 leading-tight uppercase">
            {title}
          </h1>
        )}
        {subtitle && (
          <p className="text-sm md:text-lg text-slate-500 font-bold tracking-[0.2em] uppercase">
            {subtitle}
          </p>
        )}
      </header>
      
      <main className="flex-1 z-10 relative flex flex-col min-h-0">
        {children}
      </main>

      <footer className="z-10 mt-8 flex justify-between items-end shrink-0 border-t border-white/5 pt-6">
        <div className="flex flex-col">
          <span className="text-white/30 font-bold text-[9px] tracking-[0.3em] uppercase mb-1">THE INTERNATIONAL VOCATIONAL COLLEGE</span>
          <span className="text-[#007AFF] text-[10px] font-black tracking-[0.15em] uppercase">2026 STRATEGIC ASCENT</span>
        </div>
        <div className="flex items-center space-x-6">
           <div className="text-right">
              <div className="text-white font-black text-3xl tracking-tighter tabular-nums flex items-baseline leading-none">
                <span className="text-[#007AFF]">{pageNumber.toString().padStart(2, '0')}</span>
                <span className="text-slate-800 mx-2 text-lg font-light">/</span>
                <span className="text-slate-800 text-xl">25</span>
              </div>
           </div>
        </div>
      </footer>
    </div>
  );
};

export default Slide;
