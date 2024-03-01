'use client';
// Your component file

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { newsOutlets } from '../constants/index';

const AsSeenIn = () => {
  return (
    <section className=" dark:bg-gray-900 hero">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        <div className="w-3/4">
          <h1 className="text-[#7100C3] font-semibold text-lg">As Seen In</h1>
          <h1 className="text-[#2D0173] dark:text-white text-3xl md:text-5xl font-extrabold mb-2">
            Featured in Leading Newspapers Across the Nation!
          </h1>
        </div>
        <div className="grid md:grid-cols-4 gap-5">
          {newsOutlets.map((outlet, index) => (
            <div key={index}>
              <Image
                src={outlet.src}
                alt={outlet.alt}
                width={outlet.width}
                height={outlet.height}
                className="py-5 my-5 hover:-translate-y-1 hover:scale-105 transition-transform duration-300    "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AsSeenIn;
