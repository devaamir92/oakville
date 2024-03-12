'use client';

import { createContext, useContext, useMemo, useState } from 'react';

type FavContextType = {
  favourite: any;
  setFavourite: React.Dispatch<React.SetStateAction<any>>;
};

const FavContext = createContext<FavContextType | any>(undefined);

const FavProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [favourite, setFavourite] = useState<any>();

  const value = useMemo(() => {
    return { favourite, setFavourite };
  }, [favourite]);

  return <FavContext.Provider value={value}>{children}</FavContext.Provider>;
};

export function useFavLayout() {
  const context = useContext(FavContext);

  if (context === undefined) {
    throw new Error('useFavLayout must be used within a FavProvider');
  }

  return context;
}
export default FavProvider;
