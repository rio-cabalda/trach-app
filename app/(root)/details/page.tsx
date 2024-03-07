import React from 'react';

import { AgentDetailsProps, AgentProps } from '@/types';
import SideBar from './components/Sidebar';
import { fetchAgentProfile, fetchAgentReviews } from "@/utils/fetchApiData";
import Header from "./components/Header";
import Overview from "./components/Overview";
import Properties from "./components/Properties";
import Media from "./components/Media";
import Team from "./components/Team";
import Reviews from "./components/Reviews";

export default async function Home({searchParams}: { searchParams: any }) {
  const {advertiser_id , nrds_id} = searchParams;
  
  const result = await fetchAgentProfile(advertiser_id,nrds_id);
  const agentReviews = await fetchAgentReviews(advertiser_id);
  console.log("================== agentReviews =======================");
  console.log(agentReviews);
  console.log("=================================================");
  
  return (
    <main className='overflow-hidden mt-10 rounded-lg mx-10'>
      <div  className='flex gap-6'>
        <SideBar agentProfile={result} searchParams={searchParams} />
        <div className='flex flex-col gap-6 overflow-y-auto'>
          <Header searchParams={searchParams}/>
          <Overview content={result.bio}/>
          <Properties/>
          <Media/>
          <Team/>
          <Reviews agentReviews={agentReviews}/>
        </div>
      </div>
    </main>
  );
}
