'use client';
import React, { useState } from "react";


import Image from 'next/image';
import { useRouter } from 'next/navigation';
import SearchPostCode from './SearchPostCode';

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



const SearchBar3 = () => {
  const [postal_code, setPostal_code] = useState('');
  const [person_name, setPerson_name] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (postal_code.trim() === '' && person_name.trim() === '') {
      return alert('Please fill in the search bar');
    }
    updateSearchParams(person_name.toLowerCase(), postal_code.toLowerCase());
  };

  const updateSearchParams = (person_name: string,  postal_code:string ) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (person_name) {
      searchParams.set('person_name', person_name);
    } else {
      searchParams.delete('person_name');
    }

    if (postal_code) {
      searchParams.set('postal_code', postal_code);
    } else {
      searchParams.delete('postal_code');
    }

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
    router.push(newPathname);
  };

  return (
    <form className='searchbar' onSubmit={handleSearch}>
    <div className='searchbar__item'>
      <SearchPostCode
        postal_code={postal_code}
        setPostal_code={setPostal_code}
      />
      <SearchButton otherClasses='sm:hidden' />
    </div>
    <div className='searchbar__item'>
      <Image
        src='/model-icon.png'
        width={25}
        height={25}
        className='absolute w-[20px] h-[20px] ml-4'
        alt='car model'
      />
      <input
        type='text'
        name='model'
        value={person_name}
        onChange={(e) => setPerson_name(e.target.value)}
        placeholder='Tiguan...'
        className='searchbar__input'
      />
      <SearchButton otherClasses='sm:hidden' />
    </div>
    <SearchButton otherClasses='max-sm:hidden' />
  </form>
  );
};

export default SearchBar3;
