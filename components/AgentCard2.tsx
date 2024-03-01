'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { AgentProps } from '@/types';
import { CustomButton } from '.';
 
import CarDetails2 from './CarDetails2';
import { useRouter } from 'next/navigation';

interface AgentCardProps2 {
  agent: AgentProps;
}

const AgentCard2 = ({ agent }: AgentCardProps2) => {
  const {full_name,  address, agent_rating , types, title, href   } = agent;
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter(); // Initialize the router

   
  const handleViewProfile = () => {
    // Use the router to navigate to the profile page with the manufacturer parameter
    router.push(`/profile?agentname=${full_name}`);
  };

  return (
    <div className='w-[90%] shadow-sm flex flex-col p-5 justify-center items-start bg-primary-blue-100 hover:bg-white hover:shadow-lg rounded-3xl group '>
      {/* Gas efficiency and drive information */}
      <div className='relative flex w-full'>
        <div className='flex w-full justify-between text-gray py-3'>
          <div className='flex flex-wrap justify-center items-center gap-2'>
            <Image src={"/gas.svg"} width={20} height={20} alt='gas' />
            <p className='text-[14px] rounded-full'>
              {full_name}
            </p>
          </div>
          <div className='flex flex-col justify-center items-center gap-2'></div>
          {/* <div className='flex flex-wrap justify-center items-center gap-2 '>
            <span className={`bg-${drive.toUpperCase() === 'FWD' ? 'red-500' : 'green-500'} h-[10px] w-[10px] rounded-full`}></span>
            <p className={`text-${drive.toUpperCase() === 'FWD' ? 'red-500' : 'green-500'} text-[14px]`}>
              {drive.toUpperCase()=== 'FWD' ? 'Offline' : 'Online'}
            </p>
          </div> */}
        </div>
      </div>

      {/* Car details and image */}
      <div className='flex bg-[#F8F9FF] w-full  my-3'>
        <div className='flex relative w-fit  px-5'>
          <div className='grid grid-rows-2 '>
            <Image src={href} alt={'avatar'} width={70} height={70} className='rounded-full bg-[#e6dfcf] text-[#eceaf0] object-contain'/>
          </div>
        </div>
        <div className="justify-start mb-3">
          <div className='car-card__content-title2 pb-2'>{full_name}</div>
          <div className='w-full pb-2'>{agent_rating}</div>
          <div className='flex flex-wrap w-full gap-2'>
            <Image src={'/star2.svg'} alt={''} width={20} height={20} />
            <h1 className='text-[#FF8933] '>
              {types}
            </h1>
            <p>/ 3.5k reviews</p>
          </div>
          <div></div>
        </div>
      </div>

      {/* Additional information grid */}
      <div className='grid grid-cols-2 mb-10 '>
        {/* Time-related information */}
        <div className='flex relative w-fit  border-l-2 border-gray-200 gap-1 pl-3 py-2 '>
          <Image src={"/clock.svg"} alt={"time"} width={15} height={15} className=" pb-5"/>
          <div className="grid grid-rows-2">
            <div>
              1st row 1st col
            </div>
            <div>
              asdasd
            </div>
          </div>
        </div>
        {/* More time-related information */}
        <div className='flex relative w-fit  border-l-2 border-gray-200 gap-1 pl-3  py-2 ml-5 '>
          <Image src={"/clock.svg"} alt={"time"} width={15} height={15} className=" pb-5"/>
          <div className="grid grid-rows-2">
            <div>
              1st row 2nd col
            </div>
            <div>
              asdasd
            </div>
          </div>
        </div>
        {/* Even more time-related information */}
        <div className='flex relative w-fit  border-l-2 border-gray-200 gap-1 pl-3 py-2 mb-10'>
          <Image src={"/clock.svg"} alt={"time"} width={15} height={15} className=" pb-5"/>
          <div className="grid grid-rows-2">
            <div>
              2nd row 1st col
            </div>
            <div>
              asdasd
            </div>
          </div>
        </div>
        {/* Last time-related information */}
        <div className='flex relative w-fit  border-l-2 border-gray-200 gap-1 pl-3 py-2 ml-5 mb-10'>
          <Image src={"/clock.svg"} alt={"time"} width={15} height={15} className=" pb-5"/>
          <div className="grid grid-rows-2">
            <div>
              2nd row 2nd col
            </div>
            <div>
              asdasd
            </div>
          </div>
        </div>
      </div>

      {/* View Profile buttons */}
      <div className='relative flex w-full '>
        <div className='flex group-hover:invisible w-full justify-between text-gray'>
          <div className='car-card__btn-container2 '>
            <CustomButton
              title='View Profile'
              containerStyles='w-full py-[16px] rounded-sm bg-transparent border'
              textStyles=" text-[#9300FF] text-[14px] leading-[17px] font-bold"
              rightIcon="/right-arrow.svg"
              handleClick={() => setIsOpen(true)}
            />
          </div>
        </div>
        <div className='car-card__btn-container'>
          <CustomButton
            title='View Profilea'
            containerStyles='w-full py-[16px] rounded-sm bg-[#8C3AFF]'
            textStyles=" text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            // handleClick={() => setIsOpen(true)}
            handleClick={handleViewProfile}
          />
        </div>
      </div>

      {/* Modal for displaying car details */}
      {/* <CarDetails2 isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} /> */}
    </div>
  );
};

// Exporting the component
export default AgentCard2;