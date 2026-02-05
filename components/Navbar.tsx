
import React, { useState, useRef, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [showContact, setShowContact] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
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
    <nav className="border-b border-slate-100 bg-white relative">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-4">
            <div className="w-11 h-11 bg-[#5850ec] rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200">
               <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-[#1e293b] leading-none">
                NanoLabTools
              </span>
              <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mt-1">
                Repository
              </span>
            </div>
          </div>
          
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={() => setShowContact(!showContact)}
              className="px-4 h-9 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-black transition-all focus:outline-none text-xs font-semibold"
              aria-label="Contact information"
            >
              Contact
            </button>

            {showContact && (
              <div className="absolute right-0 mt-3 w-72 bg-white rounded-2xl shadow-xl border border-slate-100 p-5 z-[60] animate-in fade-in zoom-in-95 duration-150 origin-top-right">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Get in touch</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Send an email to <a href="mailto:migisber@ucm.es" className="font-semibold text-[#5850ec] hover:underline">migisber@ucm.es</a> for questions or suggestions.
                </p>
                {/* Arrow pointer */}
                <div className="absolute -top-1.5 right-6 w-3 h-3 bg-white border-t border-l border-slate-100 rotate-45"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
