import Loader from '@components/Loader';

const loading = () => {
  return (
    <div
      className="flex w-full flex-1 items-center justify-center"
      style={{
        height: 'calc(100vh - 118px)',
      }}
    >
      <Loader />
    </div>
  );
};

export default loading;
