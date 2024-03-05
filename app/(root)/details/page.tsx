import React from 'react';

import { AgentDetailsProps, AgentProps } from '@/types';
import SideBar from './components/Sidebar';
import { fetchAgentProfile } from "@/utils/fetchApiData";

export default async function Home({searchParams}: { searchParams: any }) {
  const {advertiser_id , nrds_id} = searchParams;
  
  const result = await fetchAgentProfile(advertiser_id,nrds_id);
  console.log("================== result =======================");
  console.log(result);
  console.log("=================================================");
  
  return (
    <main className='overflow-hidden mt-10 rounded-lg mx-10'>
      <SideBar agentProfile={result}/>
</main>
  );
}
