
import React, { useState, useRef, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [showContact, setShowContact] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowContact(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="border-b border-slate-100 bg-white/80 backdrop-blur-md relative">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-4">
            <div className="w-11 h-11 bg-[#5850ec] rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200">
               <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-slate-900 leading-none">
                NanoLabTools
              </span>
              <span className="text-[10px] font-bold tracking-[0.15em] text-slate-400 uppercase mt-1">
                Repository
              </span>
            </div>
          </div>
          
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={() => setShowContact(!showContact)}
              className="px-5 h-10 flex items-center justify-center rounded-full bg-slate-900 hover:bg-black text-white transition-all focus:outline-none text-xs font-bold tracking-wide"
            >
              Contact
            </button>

            {showContact && (
              <div className="absolute right-0 mt-4 w-80 bg-white rounded-3xl shadow-2xl shadow-indigo-100 border border-slate-100 p-6 z-[60] animate-in fade-in zoom-in-95 duration-200 origin-top-right">
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Support & Feedback</h4>
                <p className="text-[13px] text-slate-600 leading-relaxed">
                  For inquiries or feature requests, please contact us at:
                  <a href="mailto:migisber@ucm.es" className="block mt-2 font-bold text-[#5850ec] text-sm hover:underline tracking-tight">
                    migisber@ucm.es
                  </a>
                </p>
                <div className="absolute -top-1.5 right-7 w-3 h-3 bg-white border-t border-l border-slate-100 rotate-45"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
