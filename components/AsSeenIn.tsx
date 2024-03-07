'use client';
// Your component file

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { newsOutlets } from '../constants/index';

const AsSeenIn = () => {
  return (
    <section className=" dark:bg-gray-900 py-20">
      <div className="py-8 px-4 mx-auto max-w-screen-xl">
        <div className="max-w-[563px]">
          <h1 className="text-[#7100C3] font-semibold text-xl">As Seen In</h1>
          <h1 className="text-[#2D0173] dark:text-white text-4xl sm:text-5xl font-extrabold my-2 leading-[40px] sm:leading-[60px]">
            Featured in Leading Newspapers Across the Nation!
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-10">
          {newsOutlets.map((outlet, index) => (
            <div key={index} className="flex justify-center sm:justify-start">
              <Image
                src={outlet.src}
                alt={outlet.alt}
                width={outlet.width}
                height={outlet.height}
                className="py-5 my-5"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AsSeenIn;
