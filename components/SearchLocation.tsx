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

const SearchLocation = ({ location, setLocation }: SearchLocationProps) => {
  const [query, setQuery] = useState('');

  const filteredLocations = query === ''
    ? locations
    : locations.filter((item) => (
      item.toLowerCase()
        .replace(/\s+/g, '')
        .includes(query.toLowerCase().replace(/\s+/g, ''))
    ));

  return (
    <div className="search-manufacturer relative shadow-md">
      <Combobox value={location} onChange={setLocation}>
        <div className="flex items-center w-full mx-10 bg-white rounded-lg py-5">
          <Combobox.Button className="absolute">
            <Image
              src="/magnifying-glass.svg"
              width={30}
              height={30}
              className="ml-4"
              alt="magnifying glass"
            />
          </Combobox.Button>
          <Combobox.Input
            className="search-manufacturer__input"
            placeholder="City, town or postcode"
            displayValue={(location: string) => location}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="justify-end flex space-x-5 w-full mx-2">
          <SearchButton title="Find Agents" otherClasses={'rounded-md bg-[#7100C3]'} />
          </div>
        </div>
    
        <Combobox.Options
          className="absolute top-full left-5 z-10 "
        >
          {filteredLocations.map((item) => (
            <Combobox.Option
              key={item}
              value={item}
              className={({ active }) => `relative search-manufacturer__option
                ${active ? 'rounded-md bg-[#8C3AFF] text-white ': 'text-gray-900'}`}
            >
              {({ selected, active }) => (
                <>
                  <span
                    className={`block truncate ${
                      selected ? 'font-medium' : 'font-normal'
                    }`}
                  >
                    {item}
                  </span>
                  {selected ? (
                    <span
                      className={`absolute inset-y-0 left-5 flex items-center pl-3 ${
                        active ? 'text-white' : 'text-teal-600'
                      }`}
                    >
                    </span>
                  ) : null}
                </>
              )}
            </Combobox.Option>
          ))}
        </Combobox.Options>
       
      </Combobox>
    </div>
  );
};

export default SearchLocation;

