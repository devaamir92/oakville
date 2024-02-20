import React from 'react';

import Toolbar from '@components/Toolbar';
import { Desktop } from '@components/ua';

interface LayoutProps {
  map: React.ReactNode;
  children: React.ReactNode;
}

const layout = ({ children, map }: LayoutProps) => {
  return (
    <main className="flex flex-col">
      <Toolbar />
      <main className="relative flex flex-1">
        <Desktop>{map}</Desktop>
        {children}
      </main>
    </main>
  );
};

export default layout;
