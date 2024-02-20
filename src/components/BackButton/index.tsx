'use client';

import { useRouter } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa';

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="flex w-1/2 shrink-0 items-center gap-x-2 rounded bg-tertiary-400 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 hover:bg-tertiary-600 sm:w-auto "
    >
      <FaArrowLeft />

      <span>Go back</span>
    </button>
  );
}
