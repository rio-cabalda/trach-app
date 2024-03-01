'use client';
// Your component file

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { findings } from '@/constants';
 
const Finding = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        <div className="w-3/4">
          <h1 className="text-[#7100C3] font-semibold text-lg">
            HOW TRACH WORKS.
          </h1>
          <h1 className="text-[#2D0173] dark:text-white text-3xl md:text-5xl font-extrabold mb-2">
            Finding the perfect real estate agent is just a few clicks.
          </h1>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {findings.map((finding) => (
            <div key={finding.id} className="rounded-lg p-8 md:p-12  hover:-translate-y-1 hover:scale-105 transition-transform duration-300 cursor-pointer">
              <Link href={'/'}>
                <Image
                  src={finding.iconSrc}
                  width={30}
                  height={20}
                  alt={`Icon for ${finding.title}`}
                />
                <h1 className="text-[#37005F] dark:text-white text-3xl font-extrabold mb-2">
                  {finding.title}
                </h1>
              </Link>

              <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                {finding.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Finding;
