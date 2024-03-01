'use client';
import React from 'react'
import { useState, Fragment } from 'react';
import Image from 'next/image';
import { Combobox, Transition } from '@headlessui/react';
import { SearchLocationProps } from '@/types';
import { locations } from '@/constants';
import { SearchBar } from '.';

const SearchButton = ({ title, otherClasses }: { title: string; otherClasses: string }) => (
  <button
    type="submit"
    className={`  flex items-center justify-center -ml-3 z-10 px-5 bg-[#8C3AFF] ${otherClasses} sm:flex-row md:flex-col lg:flex-row lg:py-3 text-white`}
  >
    {title}
  </button>
);



// ... (other imports)

const SearchLocation2 = ({ location, setLocation }: SearchLocationProps) => {
  const [query, setQuery] = React.useState('');

  return (
    <div className="search-manufacturer relative shadow-md">
      <div className="flex items-center w-full mx-10 bg-white rounded-lg py-5">
        <Image
          src="/magnifying-glass.svg"
          width={30}
          height={30}
          className="ml-4"
          alt="magnifying glass"
        />
        <input
          type="text"
          className="search-manufacturer__input"
          placeholder="Enter location manually"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="justify-end flex space-x-5 w-full mx-2">
          <SearchButton title="Check the page" otherClasses={'rounded-md bg-[#7100C3]'} />
        </div>
      </div>
    </div>
  );
};

export default SearchLocation2;
