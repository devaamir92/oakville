'use client';

import { useRouter } from 'next/navigation';

interface ClintButtonProps {
  id: number;
}

const ClintButton = ({ id }: ClintButtonProps) => {
  const router = useRouter();

  const handlePost = () => {
    router.push(`/test/${id}`);
  };

  return (
    <button
      type="button"
      className="bg-teal-500 px-4 py-2"
      onClick={() => handlePost()}
    >
      Go to Post
    </button>
  );
};

export default ClintButton;
