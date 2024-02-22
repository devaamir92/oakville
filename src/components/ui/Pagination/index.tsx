import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import Link from 'next/link';
import React from 'react';

import cn from '@utils/cn';

const defaultClass =
  'border rounded bg-white flex justify-center items-center text-sm w-7 h-7 text-gray-700 transition-colors duration-300 hover:border-blue-500 hover:text-blue-500';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  location: string;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  location,
}) => {
  const pagesToShow = 5;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center gap-2">
      <Link
        aria-label={`Previous Page ${currentPage + 1}`}
        href={`${location}?page=${currentPage - 1}`}
        className={defaultClass}
      >
        <FaChevronLeft size={10} />
      </Link>

      {pages.slice(0, pagesToShow).map(page => (
        <Link
          aria-disabled={page === currentPage}
          aria-label={`Page Number ${page}`}
          key={page}
          href={`${location}?page=${page}`}
          className={cn(defaultClass, {
            'pointer-events-none border-primary': page === currentPage,
          })}
        >
          {page}
        </Link>
      ))}

      <div className={defaultClass}>...</div>

      <Link
        aria-label={`Page Number ${totalPages}`}
        href={`${location}?page=${totalPages}`}
        className={defaultClass}
      >
        {totalPages}
      </Link>

      <Link
        aria-label={`Next Page ${currentPage + 1}`}
        href={`${location}?page=${currentPage + 1}`}
        className={defaultClass}
      >
        <FaChevronRight size={10} />
      </Link>
    </div>
  );
};

export default Pagination;
