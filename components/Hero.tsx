'use client';
import React from 'react';
import SearchAll from './SearchAll';
 

const Hero = () => {
    return (
      <div className='w-full h-[47.25rem] flex bg-center bg-no-repeat flex-col items-center justify-center bg-cover' style={{ backgroundImage: `url('/hero-new.png')` }}>
            <div className='text-center'>
                <h1 className='hero__title2 text-[#290F6A]'>Your Trusted <span className='text-[#9300FF]'>Real Estate<br/> </span> Agent Comparison Hub</h1>
                <p className='font-normal text-lg text-[#000000] mt-6'>We are your go-to online platform designed to simplify the process <br/>of choosing the best local real estate agent for your needs.</p>
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
