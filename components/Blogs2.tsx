
'use client';

import React from 'react';
import { Button, Card, } from 'flowbite-react';
import { images } from '@/constants'; // Replace with the correct path to your constants file
import Link from 'next/link';
import Image from "next/image";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function NextArrow(props:any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props:any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",width:"4rem", height:"4rem", background: "green",zIndex:"10" }}
      onClick={onClick}
    />
  );
}

export default function Blogs2() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          dots: true,
          infinite: true,
          speed: 1000,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          pauseOnHover: false,
        }
      },
      {
        breakpoint: 1232,
        settings: {
          dots: true,
          infinite: true,
          speed: 1000,
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          pauseOnHover: false,
        }
      },
      {
        breakpoint: 856,
        settings: {
          dots: true,
          infinite: true,
          speed: 1000,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          pauseOnHover: false,
        }
      }
    ]
  };
  return (
    <div className='w-full flex flex-col my-20 '>
      <div className=' text-center '>
        <h1 className='text-[#8C3AFF] font-semibold'>
          READ OUR BLOG
        </h1>
        <p className='text-[#2D0173] font-extrabold text-4xl my-3 '>
          Explore Insights and Tips
        </p>
      </div>
    

      <div className="sm:px-12 w-full mx-auto xl:w-[81rem] h-[35rem] pt-5 "> 

      <Slider className=" mx-auto flex justify-center items-center" {...settings}>
          {images.slice(0, 3).map((image) => (
            <div  key={image.id} style={{display:"flex", justifyContent:"center"}} className="w-[366px] sm:w-[366px] h-[465px]">
              <Card
              className="blog-card w-[366px] sm:w-[366px] h-[465px] rounded-lg overflow-hidden duration-300 shadow-none border-none px-4 md:p-0"
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
          {images.slice(0, 3).map((image) => (
            <div key={image.id} style={{display:"flex", justifyContent:"center"}} className="w-[366px] sm:w-[366px] h-[465px]">
              <Card
              className="blog-card w-[366px] sm:w-[366px] h-[465px] rounded-lg overflow-hidden duration-300 shadow-none border-none px-4 md:p-0"
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
          
      </Slider>
           
      </div>
    </div>
  );
}

