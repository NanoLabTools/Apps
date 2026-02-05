
import React from 'react';
import { AppTool } from '../types';

interface AppSectionProps {
  apps: AppTool[];
}

export const AppSection: React.FC<AppSectionProps> = ({ apps }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {apps.map((app) => (
        <div key={app.id} className="bg-white rounded-3xl shadow-sm border border-slate-100 flex flex-col overflow-hidden transition-transform hover:-translate-y-1 duration-300">
          <div className="p-8 pb-4 flex justify-between items-start">
            <div className="w-12 h-12 bg-[#5850ec] rounded-2xl flex items-center justify-center shadow-md">
              {app.icon}
            </div>
          </div>
          
          <div className="px-8 flex-grow">
            <h3 className="text-xl font-bold text-slate-800 mb-3">{app.name}</h3>
            <p className="text-sm text-slate-500 leading-relaxed mb-6">
              {app.description}
            </p>
            
            <ul className="space-y-3 mb-8">
              {app.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-xs text-slate-500 font-medium">
                  <svg className="w-4 h-4 text-[#5850ec] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="p-6 pt-0 mt-auto">
            <a 
              href={app.downloadUrl} 
              download={app.fileName}
              className="flex items-center justify-center space-x-3 w-full py-4 bg-[#5850ec] text-white rounded-2xl font-bold text-sm hover:bg-[#4e46e5] active:scale-[0.98] transition-all shadow-lg shadow-indigo-100"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
              </svg>
              <span>Download Tool (.html)</span>
            </a>
          </div>
        </div>
      ))}

      {/* Coming Soon Card */}
      <div className="border-2 border-dashed border-slate-200 rounded-3xl flex flex-col items-center justify-center p-12 text-center bg-transparent">
        <div className="w-14 h-14 bg-slate-50 rounded-full flex items-center justify-center mb-6">
          <svg className="w-6 h-6 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
          </svg>
        </div>
        <h4 className="text-lg font-bold text-slate-400 mb-2">More Tools Coming</h4>
        <p className="text-sm text-slate-300 max-w-[200px] leading-relaxed">
          We are developing new tools.
        </p>
      </div>
    </div>
  );
};
