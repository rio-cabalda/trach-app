import React from 'react';
import AgentCard from './components/AgentCard';
import { AgentProps, HomeProps } from '@/types';
import { CustomButton, CustomFilter, ShowMore } from '@/components';
import { PriceRange, SelectRating } from '@/constants';
import Link from 'next/link';
import { updateSearchParams } from "@/utils";
import { fetchAgent } from "@/utils/fetchApiData";

export default async function Home({ searchParams }: HomeProps) {
  const {agentType, location, postalcode, limit} = searchParams;
  console.log("postalcode", postalcode);
  
  const response = await fetchAgent(postalcode?.trim(),limit?.trim());
  // const response:any=[];
  console.log("Result data: ",response);

  const dataArray = Array.from({ length: 20 }).fill(undefined);
  
  const handleShowMore = () => {
    const newLimit = Number(limit) + 10;
  }
  
  const isDataEmpty = !response?.agents || response?.agents.length === 0 || response?.agents.length < 1 ;
  console.log("isDataEmpty: ", isDataEmpty);
  
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
        {response?.agents?.length > 0
          ? `${response.agents.length} agents found in `
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
          <section>
            <div className='home__cars-wrapper gap-2'>
            {response.agents.slice(0,10).map((agent: AgentProps, index: number) => {
                console.log("agent map: ", agent);
                
              return (
                <div key={index}>
                
                <AgentCard agent={agent}/>
                </div>
              )})}
            </div>
              {/* <ShowMore
              pageNumber={(searchParams.page || 1) / 10}
              isNext={(searchParams.page || 10) > response?.length}  
            /> */}
          </section>
        )}
      </div>
    </main>
  );
}
