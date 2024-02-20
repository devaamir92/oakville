import Mapbox from '@components/Mapbox';

interface PageProps {
  searchParams?: {
    view?: 'list' | 'map';
  };
}

const page: React.FC<PageProps> = ({ searchParams }) => {
  if (searchParams?.view === 'list') return null;

  return (
    <section
      style={{
        height: 'calc(100vh - 70px - 48px)',
        top: 'calc(70px + 48px)',
      }}
      className="sticky left-0 flex-1"
    >
      <Mapbox lat={43.48162606437566} lng={79.71881522172734} zoom={12.83} />; ;
    </section>
  );
};

export default page;
