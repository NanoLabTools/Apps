
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { AppSection } from './components/AppSection';
import { Footer } from './components/Footer';
import { AppTool } from './types';

const App: React.FC = () => {
  const [apps] = useState<AppTool[]>([
    {
      id: 'cell-lab-manager',
      name: 'Cell Lab Manager',
      version: 'V2.0.0',
      description: 'A specialized laboratory management tool for tracking cell line vials stored in liquid nitrogen tanks. Includes audit trails and storage mapping.',
      features: [
        'Inventory Tracking & Filtering',
        'Excel Export / Import',
        'PDF User Manual Generation',
        'Multilingual (EN/ES) UI'
      ],
      // Apuntando a la nueva ruta en tu repositorio de GitHub
      downloadUrl: './downloads/CellLabManager.html', 
      fileName: 'CellLabManager.html',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      )
    }
  ]);
  
  return (
    <div className="min-h-screen flex flex-col bg-[#fbfcfe]">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      
      <main className="flex-grow">
        <div className="max-w-6xl mx-auto px-8 py-16">
          <header className="mb-12">
            <h2 className="text-xs font-black tracking-widest text-[#5850ec] uppercase mb-3">Available Apps</h2>
            <div className="text-black text-[15px] leading-tight font-medium">
              <p>Click on the download button to get the standalone HTML file. No installation</p>
              <p>Required.</p>
            </div>
          </header>
          
          <AppSection apps={apps} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
