'use client';
import Link from 'next/link';
import React from 'react'
import Image from 'next/image';

const WhyChoose = () => {
  return (
    

<section className="bg-white dark:bg-gray-900 grid md:grid-cols-2  hero bg-center bg-no-repeat  w-full  md:bg-cover">
 
        <div className='w-1/4'>
        <Image src={"/slack.png"} width={850} height={520} alt='logo'/>  
        </div>
        <div className='w-3/4'>
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        <div className="w-3/4">
           <h1 className='text-[#8C3AFF]'>
            WHY CHOOSE TRACH?
           </h1>
            <h1 className="text-[#2D0173] dark:text-white text-3xl md:text-5xl font-extrabold mb-2 ">A robust, user-friendly search engine and comparison site to empower you with the information you need to make.</h1>
           
        </div>
        <div className="grid md:grid-cols-2">
    
    


        <div className=" rounded-lg  md:p-8 grid md:grid-cols-12">
  {/* First column */}
  <div className="col-span-3 flex flex-col items-center">
    {/* First row in the first column */}
    <div className="mb-2">
      <Image src={"/database.svg"} width={40} height={20} alt='logo' />
    </div>
    {/* Second row in the first column (empty) */}
    <div>
      
    </div>
  </div>
  {/* Second column */}
  <div className="col-span-9 flex flex-col">
    {/* First row in the second column */}
    <div>
      <h1 className="text-[#2D0173] dark:text-white text-xl font-extrabold ">
        Comprehensive Database
      </h1>
    </div>
    {/* Second row in the second column */}
    <div>
      <p className="text-md font-normal text-gray-500 dark:text-gray-400 mt-5 ">
        Our extensive database comprises a vast selection of local real estate agents. You'll have access to a wide range of experts.
      </p>
    </div>
  </div>
</div>


<div className=" rounded-lg  md:p-8 grid md:grid-cols-12">
  {/* First column */}
  <div className="col-span-3 flex flex-col items-center">
    {/* First row in the first column */}
    <div className="mb-2">
      <Image src={"/metric.svg"} width={40} height={20} alt='logo' />
    </div>
    {/* Second row in the first column (empty) */}
    <div></div>
  </div>
  {/* Second column */}
  <div className="col-span-9 flex flex-col">
    {/* First row in the second column */}
    <div>
      <h1 className="text-[#2D0173] dark:text-white text-xl font-extrabold ">
      Transparent metric
      </h1>
    </div>
    {/* Second row in the second column */}
    <div>
      <p className="text-md font-normal text-gray-500 dark:text-gray-400 mt-5 ">
      From recent sales records to response times, performance indicators to help you evaluate agents effectively.
      </p>
    </div>
  </div>
</div>




<div className=" rounded-lg  md:p-8 grid md:grid-cols-12">
  {/* First column */}
  <div className="col-span-3 flex flex-col items-center">
    {/* First row in the first column */}
    <div className="mb-2">
      <Image src={"/star.svg"} width={40} height={20} alt='logo' />
    </div>
    {/* Second row in the first column (empty) */}
    <div></div>
  </div>
  {/* Second column */}
  <div className="col-span-9 flex flex-col">
    {/* First row in the second column */}
    <div>
      <h1 className="text-[#2D0173] dark:text-white text-xl font-extrabold ">
      Authentic user reviews
      </h1>
    </div>
    {/* Second row in the second column */}
    <div>
      <p className="text-md font-normal text-gray-500 dark:text-gray-400 mt-5 ">
        TRACH features real reviews and ratings from previous clients, giving you valuable insights into each agent's performance.
      </p>
    </div>
  </div>
</div>
<div className=" rounded-lg  md:p-8 grid md:grid-cols-12">
  {/* First column */}
  <div className="col-span-3 flex flex-col items-center">
    {/* First row in the first column */}
    <div className="mb-2">
      <Image src={"/check.svg"} width={40} height={20} alt='logo' />
    </div>
    {/* Second row in the first column (empty) */}
    <div></div>
  </div>
  {/* Second column */}
  <div className="col-span-9 flex flex-col">
    {/* First row in the second column */}
    <div>
      <h1 className="text-[#2D0173] dark:text-white text-xl font-extrabold ">
      Privacy and security
      </h1>
    </div>
    {/* Second row in the second column */}
    <div>
      <p className="text-md font-normal text-gray-500 dark:text-gray-400 mt-5 ">
      TRACH adheres to the highest industry standards, ensuring that your information remains safe and confidential.
      </p>
    </div>
  </div>
</div>
        </div>
    </div>
        </div>
   
    
</section>

  )
}

export default WhyChoose