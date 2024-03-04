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
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { PiCurrencyDollarSimple } from "react-icons/pi";
import { IoMdTime } from "react-icons/io";
import { BsCalendar4Event } from "react-icons/bs";

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

const formatMoney = (num:any) => {
  
  if (num < 1000) {
    return num.toString();
  } else if (num < 1000000) {
    return (num / 1000).toFixed(0) + 'k';
  } else {
    return (num / 1000000).toFixed(0) + 'M';
  }}

// Define the AgentCard component
const AgentCard: React.FC<any> = ({ agent }) => {
  // Initialize state and router
  const [isOpen, setIsOpen] = useState(false);
  const [agentDetails, setAgentDetails] = useState<any>("");
  const router = useRouter();

  const minPrice = formatMoney(agent?.recently_sold?.min);
  const maxPrice = formatMoney(agent?.recently_sold?.max)
  
  // console.log("Formatted money", formatMoney(agent?.recently_sold?.min));
  console.log(agent);
  // Handle view profile click
  const handleViewProfile = () => {
    router.push(`/details?advertiser_id=${agent?.advertiser_id}&nrds_id=${agent?.nrds_id}`);
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
          <Image loader={()=>agent?.office?.photo?.href} src={agent?.office?.photo?.href? agent?.office?.photo?.href: ""} fill={true} alt="Office Photo"  />
        </div>
        <div className='flex text-green-500 items-center gap-2 font-semibold text-sm'>
          <FaCircle size={13} /> Online
        </div>
      </div>

      {/* Body - Card details and image */}
      <div className='w-full p-4 flex flex-col bg-[#F8F9FF] rounded-2xl mt-5'>
        <div className='w-full flex text-left gap-5 '>
          {/* <Avatar img={agent?.photo?.href} 
          // status="away"
          statusPosition="top-left" className="w-10 h-10 object-contain" rounded > 
          </Avatar> */}
          <div>
            <div className="relative w-10 h-10 rounded-full overflow-hidden border bg-gray-600">
              <Image className="absolute origin-center top-0 -translate-y-2"
              loader={()=>agent?.photo?.href} src={agent?.photo?.href? agent?.photo?.href: ""}
              width={40} height={40} 
              alt="Agent Photo"/>
            </div>
          </div>

          <div className="w-full flex gap-3 flex-col justify-between font-medium dark:text-white">
              <div className='text-md font-[900] text-[#290F6A] '>{agent?.full_name}</div>
              <div className="w-full text-sm text-gray-500 dark:text-gray-400 break-words">{agent?.office?.name}</div>
              <div className='flex items-center gap-1'>
                <Image src="/star2.svg" alt='Rating' width={15} height={15} />
                <p className='text-[#FF8933] text-sm'>{agent?.agent_rating}</p>
                <p className='text-sm text-gray-500'>/ {agent?.review_count} reviews</p>
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
      <div className='grid grid-cols-2 mt-5'>
        {/* First Information */}
        <div className='flex relative w-fit gap-1 pl-3 py-2 text-sm'>
          <LiaMoneyBillWaveSolid size={16} className="text-gray-800 mt-[2px]"/>
          <div className="flex flex-col">
            <div className='text-md font-bold text-[#290F6A]'>Fees</div>
            <div className="font-normal text-gray-500">0.75%</div>
          </div>
        </div>  

        {/* Second Information */}
        <div className='flex relative w-fit gap-1 pl-3 py-2 ml-5 text-sm'>
          <PiCurrencyDollarSimple size={16} className="text-gray-800 mt-[2px]"/>
          <div className="flex flex-col">
            <div className='text-md font-bold text-[#290F6A] '>Price range</div>
            <div className='font-normal text-gray-500'>
              {agent?.recently_sold? <span>&#36;{minPrice} - &#36;{maxPrice} </span>
              :
              <span> &#36;280k - &#36;300k</span>}</div>
          </div>
        </div>
          {/* { <span> &#36;280k - &#36;300k</span>} */}
        {/* import { PiCurrencyDollarSimple } from "react-icons/pi";
            import { IoMdTime } from "react-icons/io";
            import { BsCalendar4Event } from "react-icons/bs"; */}

        {/* Third Information */}
        <div className='flex w-full gap-1 pl-3 py-2 text-sm'>
          <IoMdTime size={16} className="text-gray-800 mt-[2px]"/>
          <div className="flex flex-col">
            <div className='h-fit text-md font-bold text-[#290F6A]'>Avg sale time</div>
            <div className="font-normal text-gray-500">4 weeks</div>
          </div>
        </div>  

        {/* Fourth Information */}
        <div className='flex relative w-fit gap-1 pl-3 py-2 ml-5 text-sm'>
          <BsCalendar4Event size={14} className="text-gray-800 mt-[3px]"/>
          <div className="flex flex-col">
            <div className='text-md font-bold text-[#290F6A] '>Listed last month</div>
            <div className='font-normal text-gray-500'>{agent?.recently_sold?.count?
            `Total ${agent?.recently_sold?.count} listed`
            :"Total 10 listed"}</div>
          </div>
        </div>
      </div>

      {/* Footer - View Profile button */}
      <div className='relative flex w-full flex-1'>
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


