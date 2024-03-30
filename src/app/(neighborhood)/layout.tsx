interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-full flex-col">
      <div className="">{children}</div>
    </div>
  );
};

export default PageLayout;
