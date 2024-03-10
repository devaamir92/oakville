import type { Metadata } from 'next';

import fonts from '@fonts';

import '@styles/globals.css';

import DefaultLayout from '@layouts/default';
import LayoutProvider from '@context/LayoutContext';

export const metadata: Metadata = {
  title: 'Oakville The Preserve',
  description: 'Oakville The Preserve',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fonts}>
      <body className="relative h-screen bg-white font-opensans">
        <LayoutProvider>
          <DefaultLayout>{children}</DefaultLayout>
        </LayoutProvider>
      </body>
    </html>
  );
}
