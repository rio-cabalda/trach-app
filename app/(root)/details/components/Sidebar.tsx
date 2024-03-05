
'use client';

import { Avatar, Navbar, Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineInformationCircle, HiOutlineMail, HiOutlineMinusSm, HiOutlinePlusSm, HiShoppingBag, HiStar, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import { BiBuoy } from 'react-icons/bi';
import { AgentDetailsProps } from '@/types';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Hero } from '@/components';
import Header from './Header';
import { HiCurrencyDollar, HiOutlineClock, HiOutlineCalendar } from 'react-icons/hi';
import { IoIosStar } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import Overview from './Overview';
import Properties from './Properties';
import Media from './Media';
import Team from './Team';
import Reviews from './Reviews';
import Image from "next/image";
import { Menu } from '@headlessui/react'
import axios from "axios";
import { fetchAgentProfile } from "@/utils/fetchApiData";
import { profile } from "console";

export default function SideBar({agentProfile}:{agentProfile:any}) {
  const [agentDetails, setAgentDetails] = useState<any>({
    role: '',
    profile_name: '',
    fullname: '',
    phone_number: '',
    bio: '',
    description: '',
    photo: {
      href: '',
    },
  });
  // const url = new URL(window.location.href);

  console.log("result",agentProfile);
  

    

  const icons = [
    <HiCurrencyDollar />,
    <HiCurrencyDollar />,
    <HiOutlineClock />,
    <HiOutlineCalendar />,
    <HiOutlineCalendar />
  ];

   // Filter keys to include only specific properties


  const filteredKeys = [
    'role', 'profile_name', 'fullname', 'phone_number',
  ];
  const items = filteredKeys.map((key, icon) => ({
    title: key,
    description: agentDetails[key],
    icon:icons[icon] || null,
  }));

  // Get the first five keys from agentDetails
  const firstFiveKeys = agentDetails ? Object.keys(agentDetails).slice(0, 10) : [];
  
      
    const isListedOnOpen = true;
  return (
  <div  className='flex gap-6'>
        {/* <Avatar img={agent?.photo?.href} 
          // status="away"
          statusPosition="top-left" className="w-10 h-10 object-contain" rounded > 
          </Avatar> */}
      
        {/* <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">Agent Detailsd</h1>
          <ul className="list-disc pl-6">
            {firstFiveKeys.map((key) => (
              <li key={key}>
                <span className="font-bold">{key}:</span> {JSON.stringify(agentDetails[key])}
              </li>
            ))}
          </ul>
        </div> */}
    <div className='flex-none'>
      <div className="w-[21rem] flex flex-col gap-5">
        <div className="w-full flex flex-col items-center p-6 bg-white rounded-2xl">
          <div>
            <Image src="/slack-logo.svg" alt='Slack Logo' width={85} height={25} />
          </div>
          <div className="w-full flex justify-center">
            <div className="relative w-32 h-32 rounded-full overflow-hidden">
              {agentProfile?.photo.href?  <Image loader={()=>agentProfile?.photo.href} src={agentProfile?.photo.href} alt='Slack Logo' fill={true} objectFit="cover"/>: <span className="w-full text-center">No photo</span>}
               
                <div className="absolute bottom-2 right-1 w-6 h-6 p-1 rounded-full bg-white">
                    <div className="w-full h-full rounded-full bg-green-500"></div>
                </div>
            </div>
          </div>
          <div className="mt-5">
            <div className='w-full text-center font-[500] text-[#7D7D7D]'>
              Slack
            </div>
            <div className='w-full text-center font-semibold text-2xl text-[#290F6A]'>
              {agentProfile.fullname}
            </div>
          </div>
          <div className="w-full flex gap-2 items-center justify-center mt-2">
            <div className="flex">
              {Array.from({ length: agentProfile?.ratings?.average_rating}, () => null).map((item,index)=>(
                <IoIosStar key={index} size={19} className="text-[#FF8933]"/>
              ))}
              {/* <IoIosStar size={19} className="text-[#FF8933]"/>
              <IoIosStar size={19} className="text-[#FF8933]"/>
              <IoIosStar size={19} className="text-[#FF8933]"/>
              <IoIosStar size={19} className="text-[#FF8933]"/>
              <IoIosStar size={19} className="text-[#FF8933]"/> */}
            </div>
            <p className="text-sm text-[#7D7D7D] font-[500]">{agentProfile?.ratings?.average_rating} review(s)</p>
          </div>
          
          <div className='w-full mt-10'>
            <button className='w-full bg-purple-500 py-3 text-white rounded-lg px-8 flex justify-center gap-2 hover:bg-purple-700  '>
            <HiOutlineMail size={24}/>Send a message</button>
          </div>
        </div>
        <div className="w-full flex flex-col items-center p-6 bg-white rounded-2xl">
          <button className="w-full flex items-center justify-between py-1">
            <span className="text-base font-semibold text-[#37005F]">Services</span>
            <HiOutlinePlusSm size={20}/>
          </button>
          <div className="w-full mt-3 flex flex-col gap-2">
              <div className="flex text-[#7D7D7D] items-center gap-2"><HiChartPie /> <span className="font-[500] text-[15px]">DSLR Photography</span></div>
              <div className="flex text-[#7D7D7D] items-center gap-2"><HiChartPie /> <span className="font-[500] text-[15px]">Videography</span></div>
              <div className="flex text-[#7D7D7D] items-center gap-2"><HiChartPie /> <span className="font-[500] text-[15px]">Floor Plans</span></div>
              <div className="flex text-[#7D7D7D] items-center gap-2"><HiChartPie /> <span className="font-[500] text-[15px]">For Sale Signs</span></div>
              <div className="flex text-[#7D7D7D] items-center gap-2"><HiChartPie /> <span className="font-[500] text-[15px]">Virtual Tours</span></div>
              <div className="flex text-[#7D7D7D] items-center gap-2"><HiChartPie /> <span className="font-[500] text-[15px]">Premium Listings</span></div>
              <div className="flex text-[#7D7D7D] items-center gap-2"><HiChartPie /> <span className="font-[500] text-[15px]">Social Media Advertising</span></div>
              <div className="flex text-[#7D7D7D] items-center gap-2"><HiChartPie /> <span className="font-[500] text-[15px]">Free EPC</span></div>
          </div>
          <Menu as="div" className="w-full mt-2">
            <Menu.Button className="flex items-center gap-2 text-sm font-semibold text-[#9300FF]">View More <IoIosArrowDown /></Menu.Button>
            <Menu.Items className="flex flex-col gap-2 mt-2">
              <Menu.Item >
                {({ active }) => (
                  <a
                    className={`${active && 'bg-purple-400 text-gray-800'} flex text-[#7D7D7D] items-center gap-2`}
                    href=""
                  >
                    <HiChartPie />
                    <p className="font-[500] text-[15px]">Account settings</p>
                  </a>
                )}
              </Menu.Item>
              <Menu.Item >
                {({ active }) => (
                  <a
                    className={`${active && 'bg-purple-400 text-gray-800'} flex text-[#7D7D7D] items-center gap-2`}
                    href=""
                  >
                    <HiChartPie />
                    <p className="font-[500] text-[15px]">Account settings</p>
                  </a>
                )}
              </Menu.Item>
              <Menu.Item >
                {({ active }) => (
                  <a
                    className={`${active && 'bg-purple-400 text-gray-800'} flex text-[#7D7D7D] items-center gap-2`}
                    href=""
                  >
                    <HiChartPie />
                    <p className="font-[500] text-[15px]">Account settings</p>
                  </a>
                )}
              </Menu.Item>
            </Menu.Items>
          </Menu>
        
        </div>
        <div className="w-full flex flex-col items-center p-6 bg-white rounded-2xl">
          <button className="w-full flex items-center justify-between py-1">
            <span className="text-base font-semibold text-[#37005F]">Listed On</span>
            <HiOutlinePlusSm size={20}/>
          </button>
          <div className="w-full mt-3 flex flex-col gap-2">
              <div className="flex text-[#7D7D7D] items-center gap-2"><HiChartPie /> <span className="font-[500] text-[15px]">DSLR Photography</span></div>
              <div className="flex text-[#7D7D7D] items-center gap-2"><HiChartPie /> <span className="font-[500] text-[15px]">Videography</span></div>
              <div className="flex text-[#7D7D7D] items-center gap-2"><HiChartPie /> <span className="font-[500] text-[15px]">Floor Plans</span></div>
              <div className="flex text-[#7D7D7D] items-center gap-2"><HiChartPie /> <span className="font-[500] text-[15px]">For Sale Signs</span></div>
              <div className="flex text-[#7D7D7D] items-center gap-2"><HiChartPie /> <span className="font-[500] text-[15px]">Virtual Tours</span></div>
              <div className="flex text-[#7D7D7D] items-center gap-2"><HiChartPie /> <span className="font-[500] text-[15px]">Premium Listings</span></div>
              <div className="flex text-[#7D7D7D] items-center gap-2"><HiChartPie /> <span className="font-[500] text-[15px]">Social Media Advertising</span></div>
              <div className="flex text-[#7D7D7D] items-center gap-2"><HiChartPie /> <span className="font-[500] text-[15px]">Free EPC</span></div>
          </div>
          <Menu as="div" className="w-full mt-2">
            <Menu.Button className="flex items-center gap-2 text-sm font-semibold text-[#9300FF]">View More <IoIosArrowDown /></Menu.Button>
            <Menu.Items className="flex flex-col gap-2 mt-2">
              <Menu.Item >
                {({ active }) => (
                  <a
                    className={`${active && 'bg-purple-400 text-gray-800'} flex text-[#7D7D7D] items-center gap-2`}
                    href=""
                  >
                    <HiChartPie />
                    <p className="font-[500] text-[15px]">Account settings</p>
                  </a>
                )}
              </Menu.Item>
              <Menu.Item >
                {({ active }) => (
                  <a
                    className={`${active && 'bg-purple-400 text-gray-800'} flex text-[#7D7D7D] items-center gap-2`}
                    href=""
                  >
                    <HiChartPie />
                    <p className="font-[500] text-[15px]">Account settings</p>
                  </a>
                )}
              </Menu.Item>
              <Menu.Item >
                {({ active }) => (
                  <a
                    className={`${active && 'bg-purple-400 text-gray-800'} flex text-[#7D7D7D] items-center gap-2`}
                    href=""
                  >
                    <HiChartPie />
                    <p className="font-[500] text-[15px]">Account settings</p>
                  </a>
                )}
              </Menu.Item>
            </Menu.Items>
          </Menu>
        
        </div>
      </div>
    </div>
    <div className='flex flex-col gap-6 overflow-y-auto'>
        <Header items={items} />
        <Overview content={agentProfile.bio}/>
        <Properties/>
        <Media/>
        <Team/>
        <Reviews/>
      </div>
    
  </div>

   
     
    
  );
}
