import Link from 'next/link';
import React from 'react';

const defultClass =
  'mx-1 hidden transform rounded-md bg-white px-4 py-2 text-gray-700 transition-colors duration-300 hover:border-blue-500 hover:text-blue-500 sm:inline';

function Pagination() {
  return (
    <div className="flex">
      <Link href="/" className={defultClass}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </Link>

      <Link href="/" className={defultClass}>
        1
      </Link>

      <Link href="/" className={defultClass}>
        2
      </Link>

      <Link href="/" className={defultClass}>
        ...
      </Link>

      <Link href="/" className={defultClass}>
        9
      </Link>

      <Link href="/" className={defultClass}>
        10
      </Link>

      <Link href="/" className={defultClass}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </Link>
    </div>
  );
}

export default Pagination;
