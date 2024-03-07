'use client';
import Link from 'next/link';
import React from 'react'
import Image from 'next/image';

const WhyChoose = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 flex gap-20 ">
      <div className='hidden lg:flex h-fit'>
      <Image src={"/slack.png"} width={402} height={585} alt='logo'/>  
      </div>
      <div className="h-full max-w-screen-lg px-4">
        <div className="h-full max-w-[748px]">
          <h3 className='text-[#8C3AFF] text-lg font-medium'>
            WHY CHOOSE TRACH?
          </h3>
          <h1 className="text-[#2D0173] dark:text-white text-3xl md:text-4xl font-bold leading-[40px]  md:leading-[50px] ">A robust, user-friendly search engine and comparison site to empower you with the information you need to make.</h1>
        </div>
        <div className="grid grid-cols-2 mt-10 h-full gap-11 lg:gap-[100px]">
            <div className="flex gap-4 max-w-[375px]">
                  <div className="hidden md:block w-20 h-20">
                    <Image src={"/database.svg"} width={32} height={32} alt='logo' objectFit="cover" />
                  </div>
                  <div>
                    <h1 className="text-[#2D0173] dark:text-white text-[22px]  font-bold ">
                      Comprehensive Database
                    </h1>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400 mt-2 ">
                      Our extensive database comprises a vast selection of local real estate agents. You'll have access to a wide range of experts.
                    </p>
                  </div>
            </div>
            <div className="flex gap-4 max-w-[375px]">
                  <div className="hidden md:block w-20 h-20">
                    <Image src={"/metric.svg"} width={32} height={32} alt='logo' objectFit="cover" />
                  </div>
                  <div>
                    <h1 className="text-[#2D0173] dark:text-white text-[22px]  font-bold ">
                      Transparent metric
                    </h1>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400 mt-2 ">
                    From recent sales records to response times, performance indicators to help you evaluate agents effectively.
                    </p>
                  </div>
            </div>
            <div className="flex gap-4 max-w-[375px]">
                  <div className="hidden md:block w-20 h-20">
                    <Image src={"/star.svg"} width={32} height={32} alt='logo' objectFit="cover" />
                  </div>
                  <div>
                    <h1 className="text-[#2D0173] dark:text-white text-[22px]  font-bold ">
                      Authentic user reviews
                    </h1>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400 mt-2 ">
                    TRACH features real reviews and ratings from previous clients, giving you valuable insights into each agent's performance.
                    </p>
                  </div>
            </div>
            <div className="flex gap-4 max-w-[375px]">
                  <div className="hidden md:block w-20 h-20">
                    <Image src={"/check.svg"} width={32} height={32} alt='logo' objectFit="cover" />
                  </div>
                  <div>
                    <h1 className="text-[#2D0173] dark:text-white text-[22px]  font-bold ">
                      Privacy and security
                    </h1>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400 mt-2 ">
                    TRACH adheres to the highest industry standards, ensuring that your information remains safe and confidential.
                    </p>
                  </div>
            </div>
        </div>
      </div>

    </section>
  )
}

export default WhyChoose