'use client';

import React from 'react';
import Link from 'next/link';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

import { useRouter, useSearchParams } from 'next/navigation';

import cn from '@utils/cn';

const defaultClass =
  'border rounded bg-white flex justify-center items-center text-sm w-7 h-7 text-gray-700 transition-colors duration-300 hover:border-primary-500 hover:text-primary-500 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:hover:border-gray-200 disabled:hover:text-gray-700';

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
  const searchParams = useSearchParams();
  const tempQuery = searchParams.toString();
  const { push } = useRouter();

  let pagesToShow = 5;
  if (currentPage === 4) {
    pagesToShow = 6;
  }
  const startPage = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
  const endPage = Math.min(totalPages, startPage + pagesToShow - 1);

  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

  const getQuery = (page: number) => {
    const query = new URLSearchParams(tempQuery);
    query.set('page', page.toString());

    return query.toString();
  };

  return (
    <div className="flex justify-center gap-2">
      <button
        type="button"
        title="Previous Page"
        disabled={currentPage === 1}
        aria-label={`Previous Page ${currentPage - 1}`}
        // href={`${location}?${getQuery(currentPage - 1)}`}
        onClick={() => push(`${location}?${getQuery(currentPage - 1)}`)}
        className={defaultClass}
      >
        <FaChevronLeft size={10} />
      </button>
      {!pages.includes(2) && (
        <>
          <Link
            aria-label={`Page Number ${1}`}
            href={`${location}?${getQuery(1)}`}
            className={defaultClass}
          >
            1
          </Link>
          <div className={defaultClass}>...</div>
        </>
      )}
      {pages.map(page => (
        <Link
          aria-disabled={page === currentPage}
          aria-label={`Page Number ${page}`}
          key={page}
          href={`${location}?${getQuery(page)}`}
          className={cn(defaultClass, {
            'pointer-events-none border-primary': page === currentPage,
          })}
        >
          {page}
        </Link>
      ))}

      {totalPages > 6 && !pages.includes(totalPages - 1) && (
        <>
          <div className={defaultClass}>...</div>
          <Link
            aria-label={`Page Number ${totalPages}`}
            href={`${location}?${getQuery(totalPages)}`}
            className={defaultClass}
          >
            {totalPages}
          </Link>
        </>
      )}

      {!pages.includes(totalPages) && !(currentPage <= totalPages - 4) && (
        <Link
          aria-label={`Page Number ${totalPages}`}
          href={`${location}?${getQuery(totalPages)}`}
          className={defaultClass}
        >
          {totalPages}
        </Link>
      )}
      <button
        disabled={currentPage === totalPages}
        type="button"
        aria-label={`Next Page ${currentPage + 1}`}
        title="Next Page"
        // href={`${location}?${getQuery(currentPage + 1)}`}
        className={defaultClass}
        onClick={() => push(`${location}?${getQuery(currentPage + 1)}`)}
      >
        <FaChevronRight size={10} />
      </button>
    </div>
  );
};

export default Pagination;
