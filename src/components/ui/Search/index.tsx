'use client';

import { FaSearch } from 'react-icons/fa';
import { useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

import { useRef, useState } from 'react';
import Link from 'next/link';

import { useOnClickOutside } from 'usehooks-ts';

import getSlug from '@utils/getSlug';
import { searchProperty } from '@lib/api/searchProperty';

const SearchComponent: React.FC = () => {
  const searchParams = useSearchParams();

  const { push } = useRouter();
  const [showList, setShowList] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => setShowList(false));

  const [properties, setProperties] = useState<{ data: any[] } | null>(null);
  const [searchText, setSearchText] = useState('');

  const getProperties = async (search: string) => {
    const res = await searchProperty(search, 1);
    return res;
  };
  const handleSearchRoute = () => {
    const search = searchParams.get('tag') || searchText;
    if (search) {
      push(`/search?tag=${search}`);
    }
  };

  const handleSearch = useDebouncedCallback(search => {
    if (search) {
      getProperties(search).then(data => {
        setProperties(data);
      });
      setShowList(true);
    } else {
      setProperties(null);
      setShowList(false);
    }
  }, 300);

  return (
    <div className="relative w-full" ref={ref}>
      <div className="flex h-9 w-full items-center gap-4 rounded border bg-primary-500 px-2 text-lg lg:text-sm lg:font-normal">
        <input
          className="size-full bg-transparent text-white outline-none placeholder:text-white "
          type="search"
          id="search"
          name="search"
          autoComplete="off"
          placeholder="Search by address, MLS #..."
          onChange={e => {
            setSearchText(e.target.value);
            handleSearch(e.target.value);
          }}
        />
        <button type="button" aria-label="search" onClick={handleSearchRoute}>
          <FaSearch className="text-white" size={14} />
        </button>
      </div>

      {properties?.data && showList && (
        <div className="absolute top-10 z-50 w-full rounded-b bg-white shadow-lg">
          <ul className="flex flex-col divide-y-2">
            {properties?.data.slice(0, 5).map(property => (
              <li key={property.Ml_num} className="flex-1">
                <Link
                  className="flex w-full flex-col px-2"
                  href={getSlug(
                    property.S_r,
                    property.Status,
                    property.Community,
                    property.Slug
                  )}
                >
                  <div className="flex items-center justify-between py-2">
                    <p className="text-xs font-semibold text-primary-500">
                      {(property.Unit_num ? `${property.Unit_num} - ` : '') ||
                        (property.Apt_num ? property.Apt_num : '')}
                      {property.Addr}
                    </p>
                    <span className="text-xs ">
                      {property.Ml_num} |{' '}
                      {(property.S_r === 'Sale' && 'For Sale') ||
                        (property.S_r === 'Lease' && 'For Rent')}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
            {properties?.data.length > 5 && (
              <li className="flex-1">
                <Link
                  className="flex w-full flex-col justify-center  px-2"
                  href={`/search?tag=${searchText}`}
                >
                  <div className="flex items-center justify-center py-2">
                    <p className="text-xs font-semibold text-gray-800">
                      View all results for &quot;{searchText}&quot;
                    </p>
                  </div>
                </Link>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
