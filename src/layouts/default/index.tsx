import { Suspense } from 'react';

import { ToastContainer } from 'react-toastify';

import Loader from '@components/Loader';

import Header from './Header';

import 'react-toastify/dist/ReactToastify.css';

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="h-full">
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnHover
          toastClassName="text-sm"
        />
        <Suspense
          fallback={
            <div className="flex h-screen items-center justify-center">
              <Loader />
            </div>
          }
        >
          {children}
        </Suspense>
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default DefaultLayout;
