
'use client';

import { Avatar, Navbar, Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineInformationCircle, HiOutlineMail, HiOutlineMinusSm, HiOutlinePlusSm, HiShoppingBag, HiStar, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import { BiBuoy } from 'react-icons/bi';
import { AgentDetailsProps } from '@/types';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Hero } from '@/components';
import Header from './Header';
import {
  HiCurrencyDollar,
  HiOutlineClock,
  
  HiOutlineCalendar
} from 'react-icons/hi';
import Overview from './Overview';
import Properties from './Properties';
import Media from './Media';
import Team from './Team';
import Reviews from './Reviews';
 
export default function SideBar() {
  const [agentDetails, setAgentDetails] = useState({
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
  useEffect(() => {
    const fetchData = async () => {
      const url = new URL(window.location.href);
      const advertiser_id = url.searchParams.get('advertiser_id');
      const nrds_id = url.searchParams.get('nrds_id');
      const options = {
        method: 'GET',
        url: 'https://realty-in-us.p.rapidapi.com/agents/get-profile',
        params: {
          advertiser_id: advertiser_id,
          nrds_id: nrds_id,
        },
        headers: {
          'X-RapidAPI-Key': 'ddeec46817msh45b32b0ecc215efp1732d0jsnf1ac0705742e',
          'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.request(options);
        const {
          role,
          description,
          profile_name,
          fullname,
          phone_list: { phone_1 },
          bio,
          photo,
        } = response.data;
        setAgentDetails({
          role,
          profile_name,
          fullname,
          phone_number: phone_1.number,
          bio,
          photo,
          description,
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

    

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
   

    <div  className='flex'>


     

      
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
    <div className='flex-none '>
  
    <Sidebar aria-label="" className='' >
      <Sidebar.Items>
        <Sidebar.ItemGroup>
         <Avatar img={agentDetails?.photo?.href} rounded size={"xl"} className='my-5' bordered color="purple"  status="away" statusPosition="bottom-right"/>
          <Sidebar.Item>
        
            <div className='flex flex-col  mx-auto items-center gap-2 '>
                <p className='text-gray-400 text-lg'>
                    {agentDetails.profile_name}
                    {agentDetails?.role} 
                    
                </p>
                <p className='text-2xl font-extrabold text-purple-700'>
                
                </p>
                <div className='flex flex-1 gap- mb-2'>
                <HiStar className='text-yellow-400'/>
                <p className='text-gray-400 '>
                {agentDetails.bio}
                </p>
                <p className='text-gray-400 '>
                {/* {agentDetails?.rating} */}
                </p>
                </div>
            </div>
            <div className='flex flex-col  mx-auto items-center gap-2 my-5 '>
                <button className='bg-purple-500 py-3 text-white rounded-lg px-8 flex gap-2 hover:bg-purple-700  '>
                <HiOutlineMail size={24}/>
                    Send a message
                </button>
            </div>
          </Sidebar.Item>
          <Sidebar.Collapse  className='text-lg font-extrabold text-purple-600' label="Services">
            <Sidebar.Item href="#" icon={HiShoppingBag}>Products</Sidebar.Item>
            <Sidebar.Item href="#" icon={HiShoppingBag}>Sales</Sidebar.Item>
            <Sidebar.Item href="#" icon={HiShoppingBag}>Refunds</Sidebar.Item>
            <Sidebar.Item href="#" icon={HiShoppingBag}>Shipping</Sidebar.Item>
            <Sidebar.Collapse  className='text-md font-bold text-purple-500' label="View More">
            <Sidebar.Item href="#" icon={HiShoppingBag}>Products</Sidebar.Item>
            <Sidebar.Item href="#" icon={HiShoppingBag}>Sales</Sidebar.Item>
            <Sidebar.Item href="#" icon={HiShoppingBag}>Refunds</Sidebar.Item>
            <Sidebar.Item href="#" icon={HiShoppingBag}>Shipping</Sidebar.Item>
          </Sidebar.Collapse>
          </Sidebar.Collapse>
         
          <Sidebar.Item href="#" icon={HiInbox}>
            Inbox
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            Users
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag}>
            Products
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiTable}>
            Sign Up
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
        <Sidebar.Collapse
          className="text-lg font-extrabold text-purple-600"
          label="Listed On"
        >

{isListedOnOpen ? (
            <>
            <Sidebar.Item href="#" icon={HiShoppingBag}>Products</Sidebar.Item>
            <Sidebar.Item href="#" icon={HiShoppingBag}>Sales</Sidebar.Item>
            <Sidebar.Item href="#" icon={HiShoppingBag}>Refunds</Sidebar.Item>
            <Sidebar.Item href="#" icon={HiShoppingBag}>Shipping</Sidebar.Item>
            <Sidebar.Collapse  className='text-md font-bold text-purple-500' label="View More">
            <Sidebar.Item href="#" icon={HiShoppingBag}>Products</Sidebar.Item>
            <Sidebar.Item href="#" icon={HiShoppingBag}>Sales</Sidebar.Item>
            <Sidebar.Item href="#" icon={HiShoppingBag}>Refunds</Sidebar.Item>
            <Sidebar.Item href="#" icon={HiShoppingBag}>Shipping</Sidebar.Item>
          </Sidebar.Collapse>
          </>
          ) : null}
          </Sidebar.Collapse>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Upgrade to Pro
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards}>
            Documentation
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={BiBuoy}>
            Help
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>

    </div>
    <div className='flex-auto '>
        <Header items={items} />
        <Overview content={agentDetails.bio}/>
        <Properties/>
        <Media/>
        <Team/>
        <Reviews/>
      </div>
    
  </div>

   
     
    
  );
}
