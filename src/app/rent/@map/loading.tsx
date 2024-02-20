import Loader from '@components/Loader';

const loading = () => {
  return (
    <div className="flex size-full flex-1 items-center justify-center">
      <Loader />
    </div>
  );
};

export default loading;
