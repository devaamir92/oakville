'use client';

import { createContext, useContext, useMemo, useState } from 'react';

type LayoutContextType = {
  login: boolean;
  verify: boolean;
  onClose: () => void;
  setLogin: React.Dispatch<React.SetStateAction<boolean>>;
  setVerify: React.Dispatch<React.SetStateAction<boolean>>;
  searchData: any;
  setSearchData: React.Dispatch<React.SetStateAction<any>>;
};

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

const LayoutProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [login, setLogin] = useState<boolean>(false);
  const [verify, setVerify] = useState<boolean>(false);
  const [searchData, setSearchData] = useState<any>({});

  const value = useMemo(() => {
    const onClose = () => {
      setLogin(false);
    };

    return {
      login,
      onClose,
      setLogin,
      verify,
      setVerify,
      searchData,
      setSearchData,
    };
  }, [login, verify, searchData]);

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
