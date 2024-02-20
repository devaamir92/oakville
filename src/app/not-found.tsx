import Link from 'next/link';
import { FaExclamation } from 'react-icons/fa';

import BackButton from '@components/BackButton';

export const metadata = {
  title: 'Opps! Page not found - The Preserve Oakville',
  description: 'Opps! Page not found - The Preserve Oakville',
};

export default function NotFound() {
  return (
    <div className="flex h-[calc(100vh-70px)] flex-col items-center justify-center">
      <div className="container mx-auto flex min-h-screen items-center px-6 py-12">
        <div className="mx-auto flex max-w-sm flex-col items-center text-center">
          <p className="rounded-full bg-primary-50 p-3 text-sm font-medium text-primary-500">
            <FaExclamation />
          </p>
          <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">
            Page not found
          </h1>
          <p className="mt-4 text-gray-500">
            The page you are looking for doesn&apos;t exist. Here are some
            helpful links:
          </p>

          <div className="mt-6 flex w-full shrink-0 items-center gap-x-4 sm:w-auto">
            <BackButton />

            <Link
              href="/"
              className="w-1/2 shrink-0 rounded bg-primary-500 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 hover:bg-primary-600 sm:w-auto "
            >
              Take me home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
