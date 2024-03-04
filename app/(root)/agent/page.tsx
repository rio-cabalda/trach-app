
import React, { useEffect, useState } from 'react';
import AgentCard from './components/AgentCard';
import { AgentProps, HomeProps } from '@/types';
import { CustomButton, CustomFilter, ShowMore } from '@/components';
import { PriceRange, SelectRating } from '@/constants';
import Link from 'next/link';
import { updateSearchParams } from "@/utils";
import { fetchAgent } from "@/utils/fetchApiData";

export default async function Home({ searchParams }: HomeProps) {
  const {agentType, location, postalcode, limit} = searchParams;

  

  
  const response = await fetchAgent(postalcode?.trim(),limit?.trim());
  // const response:any=[];
  // console.log(response);
  
  // const [response, setResponse] = useState<any>([]);
  // useEffect(()=>{
  //   const storedData:any = localStorage.getItem('nevadaData');
  //   if(!storedData){
  //     console.log("Running use effect");
  //     const fetchData =async()=>{
  //       console.log("Fetching data...1");
        
  //       const response = await fetchAgent(postalcode?.trim(),limit?.trim());
        
  //       console.log("Fetching data...2", response);
  //     if(!storedData && response.agents){
  //       localStorage.setItem('nevadaData', JSON.stringify(response));
  //       console.log('Retrieved data:', response);
  //     }else{
  //       setResponse(JSON.parse(storedData));
  //     }
  //     }

  //     fetchData();
  // }
  // setResponse(JSON.parse(storedData));
  // },[])
  
  const handleShowMore = () => {
    const newLimit = Number(limit) + 10;
  }
  
  const isDataEmpty = !response?.agents || response?.agents.length === 0 || response?.agents.length < 1 ;
  // console.log("isDataEmpty: ", isDataEmpty);

  const sellerAgents = response.agents?.filter((agent: AgentProps) => agent.agent_type && agent.agent_type.includes('seller'))  || [];  
  const totalPages = Math.max(1, Math.ceil(sellerAgents.length / 10));
  const totalPagesArray = Array.from({ length: totalPages }, (_, index) => index + 1);
  
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
            <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6'>
            {response.agents.slice(0,10).map((agent: AgentProps, index: number) => {
                console.log("agent map: ", agent);
                
              return (
                <div key={index}>
                
                <AgentCard agent={agent}/>
                </div>
              )})}
            </div>
            <ShowMore
  pageNumber={(searchParams.page || 1) / 10}
  isNext={(searchParams.page || 1) < totalPages * 10}
  isPrev={(searchParams.page || 1) <= 1}
  lastPage={(searchParams.page || 1) - totalPages}
  totalPages={totalPagesArray} // Pass totalPages as an array
  searchParams={(searchParams.page || 1)} // Pass searchParams to ShowMore component
/>
          </section>
        )}
      </div>
    </main>
  );
}
