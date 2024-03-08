
'use client';

import React from 'react';
import { Button, Card, Carousel } from 'flowbite-react';
import { images } from '@/constants'; // Replace with the correct path to your constants file
import Link from 'next/link';
import Image from "next/image";

function Blogs() {

  const customTheme= {
    "root": {
      "base": "relative h-full w-full",
      "leftControl": "absolute top-[20%] sm:top-0 left-2 sm:left-0 flex h-full items-start sm:items-center justify-center px-4 focus:outline-none",
      "rightControl": "absolute top-[20%] sm:top-0 right-2 sm:right-0 flex h-full items-start sm:items-center justify-center px-4 focus:outline-none"
    },
    "indicators": {
      "active": {
        "off": "bg-[#8C3AFF]/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800",
        "on": "bg-[#8C3AFF] dark:bg-gray-800"
      },
      "base": "h-3 w-3 rounded-full",
      "wrapper": "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3"
    },
    "item": {
      "base": "absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
      "wrapper": {
        "off": "w-full flex-shrink-0 transform cursor-default snap-center",
        "on": "w-full flex-shrink-0 transform cursor-grab snap-center"
      }
    },
    "control": {
      "base": "inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#8C3AFF]/50 group-hover:bg-[#8C3AFF] group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
      "icon": "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6"
    },
    "scrollContainer": {
      "base": "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
      "snap": "snap-x"
    }
  }
  return (
    <div className='flex flex-col my-20'>
      <div className=' text-center '>
        <h1 className='text-[#8C3AFF] font-semibold'>
          READ OUR BLOG
        </h1>
        <p className='text-[#2D0173] font-extrabold text-4xl my-3 '>
          Explore Insights and Tips
        </p>
      </div>
    

      <div className="w-full md:w-[35rem] h-[35rem] flex pt-5 mx-auto gap-12 "> 

        <Carousel 
              theme={customTheme} 
              slide={true} 
              pauseOnHover 
              className="custom-carousel">

          {images.slice(0, 3).map((image) => (
            <div className="max-w-[366px] h-[465px]">
              <Card
              key={image.id}
              className="blog-card w-[366px] h-[465px] rounded-lg overflow-hidden duration-300 shadow-none border-none px-4 md:p-0"
              renderImage={() => <Image width={366} height={100} src={image.src} objectFit="cover" alt="Explore insight" className="rounded-lg"/>}
            >
              <h5 className="text-xl font-bold tracking-tight text-[#2D0173] dark:text-white leading-[35px]">
                {image.title}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {image.desc}
              </p>
              <Link href={"/under-construction"}>
              <button className='flex items-center gap-2 text-[#9300FF] origin-center transform hover:scale-110 duration-200'>
                Read more
                <svg
                  className="-mr-1 ml-2 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              </Link>
              </Card> 
            </div>
            
          ))}
        </Carousel>

      </div>
    </div>
  );
}

export default Blogs;

