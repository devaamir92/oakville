import Loader from '@components/Loader';

const loading = () => {
  return (
    <div className="flex h-screen w-full flex-1 items-center justify-center">
      <Loader />
    </div>
  );
};

export default loading;
