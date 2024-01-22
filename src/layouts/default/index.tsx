import Header from './Header';
import Footer from './Footer';

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <main className="relative min-h-screen">
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default DefaultLayout;
