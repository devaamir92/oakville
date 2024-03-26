'use client';

import React, { useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import { FaSearch } from 'react-icons/fa';

const MobileSearch = () => {
  const [showSearch, setShowSearch] = useState(false);
  const ref = useRef(null);

  useOnClickOutside(ref, () => {
    setShowSearch(false);
  });

  return (
    <div ref={ref}>
      <button
        type="button"
        aria-label="Search"
        className="flex size-10 items-center justify-center rounded bg-primary-600 text-white"
        onClick={() => setShowSearch(!showSearch)}
      >
        <FaSearch size={18} />
      </button>
      {showSearch && (
        <div className="container absolute inset-x-0 top-0 size-full">
          <div className="flex size-full items-center justify-center">
            <input
              type="text"
              placeholder="Search"
              className="h-full flex-1 rounded-l border-none bg-primary-600 px-2 text-white outline-none placeholder:text-gray-200"
            />
            <button
              type="button"
              aria-label="Close Search"
              className="flex h-full w-10 items-center justify-center rounded-r bg-primary-600 text-white"
              onClick={() => setShowSearch(false)}
            >
              <FaSearch size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileSearch;
