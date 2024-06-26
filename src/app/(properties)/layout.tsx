import Footer from '@components/Footer';
import Tabbar from '@components/Tabbar';
import { Mobile } from '@components/ua';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-full flex-col">
      <div className="">{children}</div>
      <Footer />
      <Mobile>
        <Tabbar />
      </Mobile>
    </div>
  );
};

export default PageLayout;
