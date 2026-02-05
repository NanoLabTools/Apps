
import React from 'react';

export interface AppTool {
  id: string;
  name: string;
  description: string;
  version: string;
  downloadUrl: string;
  fileName: string; // The name the file will have when downloaded
  features: string[];
  icon: React.ReactNode;
}

export enum ViewMode {
  GRID = 'GRID',
  LIST = 'LIST'
}
