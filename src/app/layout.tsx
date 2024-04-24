/* eslint-disable react/no-danger */
import type { Metadata } from 'next';
import type { WebPage, WithContext } from 'schema-dts';

import fonts from '@fonts';

import '@styles/globals.css';

import DefaultLayout from '@layouts/default';
import LayoutProvider from '@context/LayoutContext';
import FavProvider from '@context/FavContext';

export const metadata: Metadata = {
  title: 'The Preserve Oakville | Luxury Homes for Sale, Homes in Oakville',
  description: 'Oakville The Preserve',
  verification: {
    google: 'RvIN5c5EB83P6UoG729cT_8pl8aDXuENACJwpMtgQ4w',
  },
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
};

const jsonLd: WithContext<WebPage> = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  url: 'https://preserveoakville.ca/',
  mainEntity: {
    '@type': 'LocalBusiness',
    name: 'The Preserve Oakville',
    url: 'https://preserveoakville.ca/',
    logo: 'https://preserveoakville.ca/images/png/preserveOakville.png',
    description:
      'Luxury real estate listings in Oakville, Ontario. Discover your dream home with The Preserve Oakville.',
    address: {
      '@type': 'PostalAddress',
      streetAddress:
        'SUTTON Group - SUMMIT Realty Inc, Brokerage 33 Pearl Street',
      addressLocality: 'Mississauga',
      addressRegion: 'ON',
      postalCode: 'L5M 1X1',
      addressCountry: 'Canada',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Agent',
      telephone: ['+1-416-837-2000', '+1-647-929-9072'],
      email: 'info@preserveoakville.ca',
    },
    areaServed: 'oakville, ontario, canada',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fonts}>
      <body className="relative min-h-screen bg-white font-opensans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <FavProvider>
          <LayoutProvider>
            <DefaultLayout>{children}</DefaultLayout>
          </LayoutProvider>
        </FavProvider>
      </body>
    </html>
  );
}
