"use client";

// Import necessary libraries and components
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { AgentProps } from '@/types';
import { useRouter } from 'next/navigation';
import { FaCheck, FaMoneyBillAlt, FaPhone } from 'react-icons/fa';
import { Avatar } from 'flowbite-react';
import { CustomButton } from "@/components";
import { FaCircle } from "react-icons/fa";

// Define the AgentCardProps interface
interface AgentCardProps {
  agent: any;
}

function formatReview(value:string){
  if(value){
    if(value?.length < 2){
      return value;
    }
    const numberString = value.toString();
    const modifiedNumberString = numberString.slice(0, -1) + '.' + numberString.slice(-1);
    return modifiedNumberString
  }
}

// Define the AgentCard component
const AgentCard: React.FC<any> = ({ agent }) => {
  // Initialize state and router
  const [isOpen, setIsOpen] = useState(false);
  const [agentDetails, setAgentDetails] = useState<any>("");
  const router = useRouter();

  useEffect(()=>{
    const storedData = localStorage.getItem('AgentData');
    if (!storedData) {
      localStorage.setItem('AgentData', JSON.stringify(agent));
    }else{
      setAgentDetails(JSON.parse(storedData))
    } 
  },[agent])
  console.log("Agent data state: ", agent);
  

  // Helper function to format price
  const formatPrice = (price: number): string => {
    if(!price){
      return price.toString()
    }
    return price >= 1000 ? (price / 1000).toFixed(1) + 'K' : price?.toString();
  };

  // Handle view profile click
  const handleViewProfile = () => {
    // router.push(`/details?id=${agent?.id}`);
  };

  if(!agent){
    return null
  }
  // Render the AgentCard component
  return (
<div className='w-[28rem] h-[26.4rem] shadow-sm flex flex-col p-5 justify-start bg-[#FFFFFF] hover:shadow-lg rounded-2xl border border-[#F6F6F6]'>
      {/* Header */}
      <div className='flex w-full h-[25px] items-center justify-between'>
        <div className='relative h-[25px] w-12'>
          <Image loader={()=>agent?.office?.photo?.href} src={agent?.office?.photo?.href? agent?.office?.photo?.href: ""} fill={true} alt="Office Photo" objectFit="contain" />
        </div>
        <div className='flex text-green-500 items-center gap-2 font-semibold text-sm'>
          <FaCircle size={13} /> Online
        </div>
      </div>

      {/* Body - Card details and image */}
      <div className='w-full p-4 flex flex-col  bg-[#F8F9FF] rounded-2xl'>
        <div className='w-full h-[105px] flex text-left gap-5 '>
          {/* <Avatar img={agent?.photo?.href} 
          // status="away"
          statusPosition="top-left" className="w-10 h-10 object-contain" rounded > 
          </Avatar> */}
          <div className="">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border bg-gray-600">
              <Image className="absolute origin-center top-0 -translate-y-2"
              loader={()=>agent?.photo?.href} src={agent?.photo?.href? agent?.photo?.href: ""}
              width={40} height={40} 
              alt="Agent Photo" objectFit="contain" />
            </div>
          </div>

          <div className="w-full flex flex-col justify-between font-medium dark:text-white">
              <div className='text-md font-[900] text-[#290F6A] '>{agent?.full_name}</div>
              <div className="w-full text-sm text-gray-500 dark:text-gray-400 break-words">{agent?.office?.name}</div>
              <div className='flex items-center gap-1'>
                <Image src="/star2.svg" alt='Rating' width={15} height={15} objectFit="contain"/>
                <p className='text-[#FF8933] text-sm'>{agent?.agent_rating}</p>
                <p className='text-sm text-gray-500'>/ {formatReview(agent?.review_count)} reviews</p>
              </div>
          </div>
            {/* <div className=' mx-auto mb-3'>
                {/* Conditionally render stars based on agent_rating 
                <div className='flex flex-wrap w-full gap-2'>
                  <p>{agent?.rating}</p>
                </div>
              </div> */}

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
          <Image src={"/icon2.svg"} alt={"icon2"} width={15} height={15} className="pb-5" />
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
              {formatPrice(agent?.for_sale_price?.min)} - {formatPrice(agent?.for_sale_price?.max)}
            </div>
          </div>
        </div>

        {/* Fourth Information */}
        <div className='flex relative w-fit border-l-2 border-gray-200 gap-1 pl-3 py-2 ml-5 mb-10  '>
        <FaCheck size={20} color="green" />
          <div className="grid grid-rows-2">
            <div className='text-md font-bold text-purple-800  '>Recently Sold</div>
            <div>{agent?.recently_sold?.count}</div>
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


