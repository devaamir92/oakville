import React from 'react';

import Toolbar from '@components/Toolbar';

interface LayoutProps {
  map: React.ReactNode;
  children: React.ReactNode;
}

const layout: React.FC<LayoutProps> = ({ children, map }) => {
  return (
    <main className="flex flex-col">
      <Toolbar />
      <main className="relative flex flex-1">
        <section
          style={{
            height: 'calc(100vh - 70px - 48px)',
            top: 'calc(70px + 48px)',
          }}
          className="sticky left-0 flex-1"
        >
          {map}
        </section>
        {children}
      </main>
    </main>
  );
};

export default layout;
