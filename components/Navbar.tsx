import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { CustomButton, SearchBar } from '.';

const Navbar = () => {
  return (
    <header className='w-full absolute z-10'>
      <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 bg-white p-8'>
        {/* Column 1: Logo and SearchBar */}
        <div className='flex items-center'>
          <Link href={"/"} className='flex justify-center items-center'>
            <Image
              src="/logo-new.svg"
              alt='trach hub logo'
              width={118}
              height={18}
              className='object-contain mx-10'
            />
          </Link>
        
        </div>

        {/* Column 2: Navigation Buttons */}
        <div className='flex'>
         
        </div>

        {/* Column 3: Vertical Line and Sign-In/For Agents */}
        <div className='flex items-center'>
        <CustomButton
            title="Home"
            btnType="button"
            containerStyles='text-[#290F6A] rounded-full bg-white min-w-[130px] font-semibold'
          />
          <CustomButton
            title="To Sell"
            btnType="button"
            containerStyles='text-gray-500 rounded-full bg-white min-w-[130px]'
          />
          <CustomButton
            title="To Rent"
            btnType="button"
            containerStyles='text-gray-500 rounded-full bg-white min-w-[130px]'
          />
          <CustomButton
            title="Blog"
            btnType="button"
            containerStyles='text-gray-500 rounded-full bg-white min-w-[130px]'
          />
        
          <div className='h-8 border-r border-gray-400 mx-4'></div>
          <CustomButton
            title="Sign-In"
            btnType="button"
            containerStyles='text-[#9300FF] rounded-full bg-white min-w-[130px]'
          />
          <CustomButton
            title="For Agents"
            btnType="button"
            containerStyles='bg-[#9300FF] text-white rounded-md min-w-[130px]'
          />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
