
 


import { fetchAgent } from "@/utils";
import { HomeProps } from "@/types";
import {   Hero, Finding, WhyChoose, AsSeenIn,  Blogs,  } from "@/components";

export default async function Home({ searchParams }: HomeProps) {
  // const allAgents = await fetchAgent({});

  // const isDataEmpty = !Array.isArray(allAgents) || allAgents.length < 1 || !allAgents;

  return (
    <main className='overflow-hidden bg-white'>
      <Hero />
      <Finding/>
      <WhyChoose/>
      <div className='my-20 padding-x padding-y max-width' id='discover bg-[#F8F8F8]'>
        <div className='flex-1 mx-auto text-center max-w-[748px]'>
          <p className="text-[#8C3AFF] font-semibold text-lg">Agent Insights</p>
          <h1 className='w-full text-4xl font-extrabold text-[#2D0173] mt-5'>Unfiltered User Reviews - Discover What Our Happy Clients Say!</h1>
        </div>
      </div>
      <AsSeenIn/>
      <Blogs/>
      
    </main>
  );
}


