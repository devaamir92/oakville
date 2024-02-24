'use client';

import type { ReactNode } from 'react';
import React from 'react';
import { SessionProvider } from 'next-auth/react';

type AuthProviderProps = {
  children: ReactNode;
};

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => (
  <SessionProvider>{children}</SessionProvider>
);

export default AuthProvider;
