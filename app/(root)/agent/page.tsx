import { HomeProps } from '@/types';
import { fetchAgent } from "@/utils/fetchApiData";
import AgentList from "./components/AgentList";

export default async function Home({ searchParams }: HomeProps) {
  const {agentType, location, limit} = searchParams;

  const agentList = await fetchAgent(location?.trim(),limit?.trim(),agentType);


  const handleShowMore = () => {
    const newLimit = Number(limit) + 10;
  }
  // const totalPages = Math.max(1, Math.ceil(FiltteredAgentByType.length / 10));
  // const totalPagesArray = Array.from({ length: totalPages }, (_, index) => index + 1);
  
  return (
    <main className='overflow-hidden bg-slate-50'>
      <AgentList agentList={agentList} location={location}/>
    </main>
  );
}
