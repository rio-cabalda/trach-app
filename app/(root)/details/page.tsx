import React from 'react';

import { AgentDetailsProps, AgentProps } from '@/types';
import SideBar from './components/Sidebar';

export default async function Home({ }: AgentDetailsProps) {

  return (
    <main className='overflow-hidden mt-10 rounded-lg mx-10'>
      <SideBar />
</main>
  );
}
