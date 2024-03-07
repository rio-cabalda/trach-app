
'use client';

import React, { useState } from 'react';
import {  HiChartPie, HiOutlineMail, HiOutlinePlusSm } from 'react-icons/hi';
import Header from './Header';
import { HiCurrencyDollar, HiOutlineClock, HiOutlineCalendar } from 'react-icons/hi';
import { IoBriefcaseSharp } from "react-icons/io5";
import { IoIosStar } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import { Menu } from '@headlessui/react'

export default function SideBar({agentProfile,searchParams}:{agentProfile:any,searchParams:any}) {
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

  const [serviceList, setServiceList] =  useState<string[]>(agentProfile.specialties);
  const [serviceText, setServiceText] =  useState('');
  const [showInputService, setShowInputService] =  useState(false);

  const [service, viewMoreService] = serviceList.length >= 8 ? 
                                [serviceList.slice(0, 8), serviceList.slice(8)] : 
                                [serviceList, []];
  // const url = new URL(window.location.href);

  console.log("result",agentProfile);
  console.log("First part",service);
  console.log("Second part",viewMoreService);
  
  const handleAddService = () => {
      const newServiceList = [...serviceList, serviceText];
      setServiceList(newServiceList);
      setServiceText('');
      setShowInputService(false);
  }
    

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
                  </div>
                  <p className="text-sm text-[#7D7D7D] font-[500]">{agentProfile?.ratings?.average_rating} review(s)</p>
                </div>
                
                <div className='w-full mt-10'>
                  <button className='w-full bg-purple-500 py-3 text-white rounded-lg px-8 flex justify-center gap-2 hover:bg-purple-700  '>
                  <HiOutlineMail size={24}/>Send a message</button>
                </div>
              </div>
              <div className="w-full flex flex-col items-center p-6 bg-white rounded-2xl">
                <div className="relative w-full">
                  <button className=" w-full flex items-center justify-between py-1"
                          onClick={()=>setShowInputService(!showInputService)}
                          >
                    <span className="text-base font-semibold text-[#37005F]">Services</span>
                    <HiOutlinePlusSm size={20}/>
                  </button>
                  {showInputService&&
                    <div className="absolute flex items-center top-8 left-0 rounded-md w-full bg-slate-100 border p-1 z-[1]">
                      <input type="text" className=" w-full bg-transparent px-4 py-2 focus:outline-none focus:border-transparent focus:ring-0 border-none " value={serviceText} onChange={(e)=>setServiceText(e.target.value)} placeholder="Add service"/>
                      <button className="px-4 py-2 rounded-md bg-[#9300FF] hover:bg-[#944cc7] active:bg-[#b054f1] text-slate-100" onClick={handleAddService}>Add</button>
                    </div>
                    }
                </div>
                
                <div className="w-full mt-3 flex flex-col gap-2">
                  {service.map((item:string)=>(
                    <div key={item} className="flex text-[#7D7D7D] items-center gap-2"><IoBriefcaseSharp /> <span className="font-[500] text-[15px]">{item}</span></div>
                  ))}
                </div>
                {viewMoreService.length > 0 &&
                <Menu as="div" className="w-full mt-2">
                  <Menu.Button className="flex items-center cursor-default gap-2 text-sm font-semibold text-[#9300FF]">View More <IoIosArrowDown /></Menu.Button>
                  <Menu.Items className="flex flex-col gap-2 mt-2">
                    {viewMoreService.map((item:string)=>(
                      <Menu.Item key={item}>
                      {({ active }) => (
                        <a
                          className={`flex text-[#7D7D7D] items-center gap-2`}
                          href=""
                        >
                          <IoBriefcaseSharp />
                          <p className="font-[500] text-[15px]">{item}</p>
                        </a>
                      )}
                    </Menu.Item>
                    ))}
                    
                    
                  </Menu.Items>
                </Menu>
              }
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
   

   
     
    
  );
}
