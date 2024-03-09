import React, { useEffect, useState } from 'react';
import AgentCard from './components/AgentCard';
import { AgentProps, HomeProps } from '@/types';
import { CustomButton, CustomFilter, ShowMore } from '@/components';
import { PriceRange, SelectRating } from '@/constants';
import Link from 'next/link';
import { updateSearchParams } from "@/utils";
import { fetchAgent } from "@/utils/fetchApiData";
import AgentList from "./components/AgentList";

export default async function Home({ searchParams }: HomeProps) {
  const {agentType, location, limit} = searchParams;

  const agentList = await fetchAgent(location?.trim(),limit?.trim(),agentType);
  const isDataEmpty = !agentList || agentList.length === 0 || agentList.length < 1;


  
  const handleShowMore = () => {
    const newLimit = Number(limit) + 10;
  }
  // const totalPages = Math.max(1, Math.ceil(FiltteredAgentByType.length / 10));
  // const totalPagesArray = Array.from({ length: totalPages }, (_, index) => index + 1);
  


  
  return (
    <main className='overflow-hidden '>
      <div className=' hero justify-between relative  mt-5 bg-white  p-3 '>
      <CustomFilter title='rating' options={SelectRating} />
      <CustomFilter title='price' options={PriceRange} />
      <CustomFilter title='empty' options={PriceRange} />
      <CustomFilter title='empty' options={PriceRange} />

      <Link href={"/"}>
      <button className='text-white bg-purple-700 p-2 rounded-md'>
          Apply Filters
        </button>
      </Link>

      </div>
      <div className=' mt-16 flex justify-start flex-row gap-2 mx-[6%] text-xl font-extrabold'>
        {agentList?.length > 0
          ? `${agentList?.length} agents found in `
          : '0 agents found in '}
        <span className='text-purple-700' style={{ textTransform: 'capitalize' }}>
          {location}
        </span>
      </div>
      <div className='home__error-container'>


      {/* <section>
            <div className='home__cars-wrapper'>
      {dataArray.map((_,index)=>( <AgentCard agent={"agent"}/> ))}
      </div>
      </section> */}
        
        {isDataEmpty ? (
          <div>
            <h2 className='text-black text-xl font-bold'>oooops no agents found</h2>
          </div>
        ) : (
          <AgentList agentList={agentList} agentType={agentType} />
        )}
      </div>
    </main>
  );
}
