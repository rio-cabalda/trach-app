'use client';
import React from 'react';
import SearchAll from './SearchAll';
 

const Hero = () => {
    return (
      <div className='hero  bg-center bg-no-repeat  w-full flex flex-col items-center justify-center sm:bg-cover md:bg-cover' style={{ backgroundImage: `url('/hero-new.png')` }}>
            <div className='flex-1 pt-36 padding-x text-center'>
                <h1 className='hero__title2 text-[#290F6A]'>Your Trusted <span className='text-[#9300FF]'>Real Estate </span> Agent Comparison Hub</h1>
                <p className='hero__subtitle2'>We are your go-to online platform designed to simplify the process <br/>of choosing the best local real estate agent for your needs.</p>
                <div className="flex flex-col items-center gap-4 mt-10 py-10">
                    {/* <SearchBar2 />
                    <SearchBarProperties/> */}
                    <SearchAll/>
                </div>
            </div>

          
        </div>
    );
};

export default Hero;
