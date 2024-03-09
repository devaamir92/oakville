'use client';

import { createContext, useContext, useMemo, useState } from 'react';

type LayoutContextType = {
  login: boolean;
  toggle: () => void;
};

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

const LayoutProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [login, setLogin] = useState<boolean>(false);

  const value = useMemo(() => {
    const toggle = () => {
      setLogin(pre => !pre);
    };

    return { login, toggle };
  }, [login]);

  return (
    <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
  );
};

export function useLayout() {
  const context = useContext(LayoutContext);

  if (context === undefined) {
    throw new Error('useLayout must be used within a LayoutProvider');
  }

  return context;
}
export default LayoutProvider;
