import type { Metadata } from 'next';

import fonts from '@fonts';

import '@styles/globals.css';
import 'mapbox-gl/dist/mapbox-gl.css';

import DefaultLayout from '@layouts/default';

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
      <body className="bg-[#f3f4f6] font-gilroy">
        <DefaultLayout>{children}</DefaultLayout>
      </body>
    </html>
  );
}
