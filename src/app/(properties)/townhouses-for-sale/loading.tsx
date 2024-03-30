import Loader from '@components/Loader';

const loading = () => {
  return (
    <div className="flex h-[calc(100vh-70px)] items-center justify-center">
      <Loader />
    </div>
  );
};

export default loading;
