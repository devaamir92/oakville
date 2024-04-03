'use client';

import { createContext, useContext, useMemo, useState } from 'react';

type ProContextType = {
  selectedMls: string;
  setSelectedMls: React.Dispatch<React.SetStateAction<any>>;
};

const PropContext = createContext<ProContextType | any>(undefined);

const PropProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [selectedMls, setSelectedMls] = useState<string>('');
  const [pageMls, setPageMls] = useState<any>([]);

  const value = useMemo(() => {
    return { selectedMls, setSelectedMls, pageMls, setPageMls };
  }, [selectedMls, pageMls]);

  return <PropContext.Provider value={value}>{children}</PropContext.Provider>;
};

export function usePropLayout() {
  const context = useContext(PropContext);

  if (context === undefined) {
    throw new Error('usePropLayout must be used within a PropProvider');
  }

  return context;
}
export default PropProvider;
