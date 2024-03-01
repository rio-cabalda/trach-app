'use client';
import { useState } from 'react';
import React from 'react';
import { CustomButton, SearchManufacturer } from '.';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

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



const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState('');
  const [model, setModel] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (manufacturer.trim() === '' && model.trim() === '') {
      return alert('Please fill in the search bar');
    }
    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
  };

  const updateSearchParams = (model: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (model) {
      searchParams.set('model', model);
    } else {
      searchParams.delete('model');
    }

    if (manufacturer) {
      searchParams.set('manufacturer', manufacturer);
    } else {
      searchParams.delete('manufacturer');
    }

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
    router.push(newPathname);
  };

  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className='searchbar__item'>
        {/* <SearchManufacturer manufacturer={manufacturer} setManuFacturer={setManufacturer} /> */}
      </div>
    </form>
  );
};

export default SearchBar;
