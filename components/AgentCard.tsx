"use client";

// Import necessary libraries and components
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { AgentProps } from '@/types';
import { CustomButton } from '.';
import { useRouter } from 'next/navigation';
import AgentDetails from '@/components/AgentDetails';
 
import { FaCheck, FaMoneyBillAlt, FaPhone } from 'react-icons/fa';
import { Avatar } from 'flowbite-react';
import { stringify } from "querystring";
 
 


// Define the AgentCardProps interface
interface AgentCardProps {
  agent: AgentProps;
}

// Define the AgentCard component
const AgentCard: React.FC<AgentCardProps> = ({ agent }) => {
  // Initialize state and router
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const [agentDetails, setAgentDetails] = useState(false);
  console.log("agent", agent);
  
  useEffect(()=>{
    const existingTickets:any = localStorage.getItem('AgentDetails')
    if(!existingTickets){
      localStorage.setItem('AgentDetails', JSON.stringify(agent));
    }
      setAgentDetails(JSON.parse(existingTickets))

},[])

  // Helper function to format price
  const formatPrice = (price: number): string => {
    return price >= 1000 ? (price / 1000).toFixed(1) + 'K' : price?.toString();
  };

  // Handle view profile click
  const handleViewProfile = () => {
    router.push(`/details?id=${agent?.id}`);
  };

  // Render the AgentCard component
  return (
<div className='shadow-sm mx-5 flex flex-col p-5 justify-center items-start bg-primary-blue-100 hover:bg-white hover:shadow-lg rounded-3xl transform transition-transform duration-300 ease-in-out hover:scale-105'>
 

      {/* Header */}
      <div className='flex w-full justify-between text-gray py-3'>
        <div className='flex flex-wrap justify-center items-center gap-2'>
          
          <p className='text-[14px] rounded-full'>  {agent?.office.name}</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-2'>
          offline
        </div>
      </div>

      {/* Body - Car details and image */}
      <div className='flex flex-col w-full my-5 py-5 bg-blue-50 bg-opacity-80 rounded-lg'>
        <div className=' flex text-left justify-start justify-items-start px-5 '>
          <Avatar img={agent?.photo.href} status="away" statusPosition="bottom-right" size="lg" rounded >
            <div className="space-y-1 font-medium dark:text-white">
              <div className='text-md font-bold text-purple-500'>{agent?.full_name}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{agent?.title}</div>
            </div>
          </Avatar>
          
           
        </div>
         

        <div className=' mx-auto mb-3'>
          {/* Conditionally render stars based on agent_rating */}
          <div className='flex flex-1'>
            {Array.from({ length: agent?.agent_rating }, (_, index) => (
              <Image key={index} src={'/star2.svg'} alt={''} width={10} height={10} />
            ))}
            <p className='text-[#FF8933] ml-3'>{agent?.review_count}</p>
            <p className='text-gray-500  ml-2'>/reviews</p>
          </div>

          <div className='flex flex-wrap w-full gap-2'>
            <p>{agent?.rating}</p>
          </div>
        </div>
      </div>

      {/* Body - Additional Information */}
      <div className='grid grid-cols-2 mb-10'>
        {/* First Information */}
        <div className='flex relative w-fit border-l-2 border-gray-200 gap-1 pl-3 py-2'>
        <FaPhone size={24} color="blue" />
          <div className="grid grid-rows-2">
            <div className='text-md font-bold text-purple-800'>phone number</div>
            <div>{agent?.phones[0]?.number}</div>
          </div>
        </div>  

        {/* Second Information */}
        <div className='flex relative w-fit border-l-2 border-gray-200 gap-1 pl-3 py-2 ml-5  '>
          <Image src={"/icon2.svg"} alt={"icon2"} width={15} height={15} className="pb-5  " />
          <div className="grid grid-rows-2  ">
            <div className='text-md font-bold text-purple-800  '>Agent Id</div>
            <div className='text-end overflow-hidden'>{agent?.id}</div>
          </div>
        </div>

        {/* Third Information */}
        <div className='flex relative w-fit border-l-2 border-gray-200 gap-1 pl-3 py-2 mb-10'>
        <FaMoneyBillAlt size={24} color="green" />
          <div className="grid grid-rows-2">
            <div className='text-md font-bold text-purple-800'>Price range</div>
            <div>
              {formatPrice(agent?.for_sale_price.min)} - {formatPrice(agent?.for_sale_price.max)}
            </div>
          </div>
        </div>

        {/* Fourth Information */}
        <div className='flex relative w-fit border-l-2 border-gray-200 gap-1 pl-3 py-2 ml-5 mb-10  '>
        <FaCheck size={20} color="green" />
          <div className="grid grid-rows-2">
            <div className='text-md font-bold text-purple-800  '>Recently Sold</div>
            <div>{agent?.recently_sold.count}</div>
          </div>
        </div>
      </div>

      {/* Footer - View Profile button */}
      <div className='relative flex w-full'>
        <div className='flex group-hover:invisible w-full justify-between text-gray'>
          <div className='car-card__btn-container2 hover:bg-purple-400  rounded-lg'>
            <CustomButton
              title='View Profile'
              containerStyles='w-full py-[16px] rounded-sm bg-transparent border'
              textStyles=" text-[#9300FF] text-[14px] leading-[17px] font-bold"
              rightIcon="/right-arrow.svg"
              handleClick={handleViewProfile}
            />
          </div>
        </div>
        <div className='car-card__btn-container rounded-lg '>
          <CustomButton
            title='View Profile'
            containerStyles='w-full py-[16px] rounded-sm bg-[#8C3AFF]'
            textStyles=" text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={handleViewProfile}
          />
        </div>
      </div>

      {/* <AgentDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} agent={agent} /> */}
    </div>
  );
};

// Export the AgentCard component
export default AgentCard;


