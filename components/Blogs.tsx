
'use client';

import React from 'react';
import { Button, Card } from 'flowbite-react';
import { images } from '@/constants'; // Replace with the correct path to your constants file
import Link from 'next/link';

function Blogs() {
  return (
    <div className='hero flex flex-wrap justify-center my-5 pt-5'>
      <div className=' text-center '>
        <h1 className='text-[#8C3AFF] font-semibold'>
          READ OUR BLOG
        </h1>
        <p className='text-[#2D0173] font-extrabold text-4xl my-3 '>
          Explore Insights and Tips
        </p>
      </div>
    

      <div className="flex space-x-4 pt-5">
        {images.slice(0, 3).map((image) => (
          <Card
            key={image.id}
            className="max-w-sm hover:shadow-lg  hover:-translate-y-1 hover:scale-105 transition-transform duration-300"
            imgAlt={image.title}
            imgSrc={image.src}
          >
            <h5 className="text-2xl font-bold tracking-tight text-[#2D0173] dark:text-white">
              {image.title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {image.desc}
            </p>
            <Link href={"/under-construction"}>
            <Button color="purple" pill className='bg-transparent text-[#9300FF] hover:text-white ransition-transform duration-200'>
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
            </Button>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Blogs;

