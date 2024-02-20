'use client';

import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import cn from '@utils/cn';

function Search() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <form className="">
        <label
          htmlFor="searchblog"
          className="flex h-[36px] items-center overflow-hidden  bg-primary-500 px-1.5 text-sm transition-all duration-300 ease-in-out lg:min-w-96"
        >
          <input
            type="text"
            id="searchblog"
            placeholder="Search Blog"
            className={cn(
              'full absolute right-[58px] h-[36px] w-[calc(100%-72px)] bg-primary-500 pl-2 text-white placeholder:text-gray-100 focus:outline-none  lg:relative lg:right-0 lg:flex-1',
              show ? 'block' : 'hidden lg:block'
            )}
          />
          <button
            type="button"
            aria-label="Search"
            className=" p-2"
            onClick={() => setShow(!show)}
          >
            <FaSearch className="text-white" />
          </button>
        </label>
      </form>
    </div>
  );
}

export default Search;
