import Loader from '@components/Loader';

const loading = () => {
  return (
    <div className="flex h-[calc(100vh-70px)] w-full flex-1 items-center justify-center">
      <Loader />
    </div>
  );
};

export default loading;
