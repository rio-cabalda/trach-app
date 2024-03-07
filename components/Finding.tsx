'use client';
// Your component file

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { findings } from '@/constants';
 
const Finding = () => {
  return (
    <section className="w-full bg-white dark:bg-gray-900">
      <div className="max-w-[75rem] flex flex-col gap-[85px] py-8 px-4 xl:px-0 mx-auto lg:py-16">
        <div className="w-full flex flex-col gap-[10px] ">
          <h3 className="text-[#7100C3] font-medium text-lg">
            HOW TRACH WORKS.
          </h3>
          <h2 className="text-[#2D0173] max-w-[35rem] dark:text-white text-3xl md:text-4xl font-extrabold break-words  md:leading-[3rem]">
            Finding the perfect real estate agent is just a few clicks.
          </h2>
        </div>
        <div className="flex flex-col items-center md:flex-row md:items-start md:justify-between gap-10">
          {findings.map((finding) => (
            <div key={finding.id} className="flex w-[80%] md:w-[20.3rem] flex-col gap-4 rounded-lg cursor-default">
              <div>
                <Image
                  src={finding.iconSrc}
                  width={30}
                  height={20}
                  alt={`Icon for ${finding.title}`}
                />
                <h1 className="text-[#37005F] dark:text-white text-[22px] font-medium mt-4">
                  {finding.title}
                </h1>
              </div>

              <p className="text-base font-normal text-gray-500 dark:text-gray-400 ">
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
