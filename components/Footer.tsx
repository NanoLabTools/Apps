
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-10 border-t border-slate-100 bg-[#f9fafb]">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 bg-slate-300 rounded flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="text-sm font-bold text-slate-700">
              NanoLabTools Repository
            </span>
          </div>
          
          <div className="text-sm text-slate-400">
            Developed by <span className="text-[#5850ec] font-semibold">Miguel G</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
