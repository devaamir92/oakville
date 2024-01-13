import { Suspense } from 'react';
import type { Metadata } from 'next';

import fonts from '@fonts';

import '../styles/globals.css';
import Loader from '@components/Loader';

export const metadata: Metadata = {
  title: 'Realty Pen',
  description: 'Realty Pen',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fonts}>
      <body className="font-gilroy">
        <Suspense
          fallback={
            <div className="flex h-screen items-center justify-center">
              <Loader />
            </div>
          }
        >
          {children}
        </Suspense>
      </body>
    </html>
  );
}
