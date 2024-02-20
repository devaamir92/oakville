import Header from './Header';
import Footer from './Footer';

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    // <div className="relative min-h-screen">
    <>
      <Header />
      {children}
      <Footer />
    </>
    // </div>
  );
};

export default DefaultLayout;
