'use client';
import { useState } from 'react';
import React from 'react';
 
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import SearchLocation from './SearchLocation';

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

const SearchBar2 = () => {
  const [location, setLocation] = useState('');
  const [agentname, setAgentName] = useState('');
  const router = useRouter();

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (location.trim() === '' && agentname.trim() === '') {
      return alert('Please fill in the search bar');
    }

    // Use try-catch to handle errors during the asynchronous operation
    try {
      // Await the asynchronous updateSearchParams function
      await updateSearchParams(agentname.toLowerCase(), location.toLowerCase());

      // After updating search parameters, navigate to "/trial"
      router.push(`/trial?location=${location}`);
      //**change to location */

    } catch (error) {
      console.error('Error updating search parameters:', error);
    }
  };

  const updateSearchParams = async (agentname: string, location: string) => {
    return new Promise<void>((resolve) => {
      // Simulating an asynchronous operation (e.g., API call)
      setTimeout(() => {
        const searchParams = new URLSearchParams(window.location.search);
  
        // Remove the 'model' parameter
        searchParams.delete('agentname');
  
        if (location) {
          // Set the 'manufacturer' parameter
          searchParams.set('location', location);
        } else {
          // If manufacturer is empty, delete the 'manufacturer' parameter
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
        <SearchLocation location={location} setLocation={setLocation} />
      </div>
    </form>
  );
};

export default SearchBar2;
