import { Suspense } from 'react';

import Loader from '@components/Loader';

import Header from './Header';
import Footer from './Footer';

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="h-full">
        <Suspense
          fallback={
            <div className="flex h-screen items-center justify-center">
              <Loader />
            </div>
          }
        >
          {children}
        </Suspense>
      </div>
      <Footer />
    </>
  );
};

export default DefaultLayout;
