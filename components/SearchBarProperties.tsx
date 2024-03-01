'use client';
import { useState } from 'react';
import React from 'react';
 
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import SearchPropertyLocation from './SearchPropertyLocation';

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-3 z-10 p-6  ${otherClasses}`}>
    <Image
      src="/magnifying-glass2.svg"
      alt="magnifying glass"
      width={40}
      height={40}
      className="object-contain p-2"
    />
  </button>
);

const SearchBarProperties = () => {
  const [location, setLocation] = useState('');
  const [type, setType]=useState ('');

  const [page, setPage] = useState('');
  const router = useRouter();

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (location.trim() === '' && type.trim() === '') {
      return alert('Please fill in the search bar');
    }

    // Use try-catch to handle errors during the asynchronous operation
    try {
      // Await the asynchronous updateSearchParams function
      await updateSearchParams(type.toLowerCase(), location.toLowerCase());

      // After updating search parameters, navigate to "/result"
      router.push(`/properties?location=${location}`);
      //**change to location */

    } catch (error) {
      console.error('Error updating search parameters:', error);
    }
  };

  const handleSearchForRent = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (location.trim() === '') {
      return alert('Please fill in the search bar');
    }

    try {
      await updateSearchParams('rent', location.toLowerCase());
      router.push(`/rent?location=${location}`);
    } catch (error) {
      console.error('Error updating search parameters:', error);
    }
  };

  const updateSearchParams = async (type: string, location: string, ) => {
    return new Promise<void>((resolve) => {
      // Simulating an asynchronous operation (e.g., API call)
      setTimeout(() => {
        const searchParams = new URLSearchParams(window.location.search);
  
        // Remove the 'type' parameter
        searchParams.delete('type', 'page');
  
        if (location) {
          // Set the 'location' parameter
          searchParams.set('location', location);
        } else {
          // If location is empty, delete the 'location' parameter
          searchParams.delete('location');
        }
  
        const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
  
        // Use router.push to navigate to the new URL
        router.push(newPathname);
        resolve();
      }, 500); // Simulated delay of 500 milliseconds
    });
  };
  

  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className='searchbar__item'>
        <SearchPropertyLocation location={location} setLocation={setLocation} />
      </div>
    </form>
  );
};

export default SearchBarProperties;
