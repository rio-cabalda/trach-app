"use client"
// Hooks
import {useState} from 'react'
// Component
import AgentCard from "./AgentCard"
// icons
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function AgentList({agentList:agents, agentType}:any) {
    const [currentPage, setCurrentPage] = useState(1);
    const agentsPerPage = 10;
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(agents.length / agentsPerPage); i++) {
        pageNumbers.push(i);
    }

    // Logic to calculate the index of the first and last agents on the current page
    const indexOfLastAgent = currentPage * agentsPerPage;
    const indexOfFirstAgent = indexOfLastAgent - agentsPerPage;
    const currentAgents = agents.slice(indexOfFirstAgent, indexOfLastAgent);

    // Function to handle pagination when clicking on page numbers
    const handleClick = (pageNumber:number) => {
        setCurrentPage(pageNumber);
    };

    // Function to handle navigating to the next page
    const nextPage = () => {
        if(currentPage !==  agents.length){
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    // Function to handle navigating to the previous page
    const prevPage = () => {
        if(currentPage !== (indexOfFirstAgent + 1) ){
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };
    
    return (
    <section>
            <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6'>
            {currentAgents.map((agent:any, index:number) => {
            
                return (
                <div key={index}>
                <AgentCard agent={agent} agentType={agentType}/>
                </div>
                )})}
            </div>
            {/* <ShowMore
                pageNumber={(searchParams.page || 1) / 10}
                isNext={(searchParams.page || 1) < totalPages * 10}
                isPrev={(searchParams.page || 1) <= 1}
                lastPage={(searchParams.page || 1) - totalPages}
                totalPages={totalPagesArray} // Pass totalPages as an array
                searchParams={(searchParams.page || 1)} // Pass searchParams to ShowMore component
                /> */}
                
                {/* Pagination */}
                <div>
      {/* Display current agents on the page */}

        <ul className="flex w-full justify-center gap-2 mt-10">
            <li>
                <button className="h-14 w-14 flex items-center justify-center bg-gray-200 hover:bg-purple-400 disabled:bg-purple-200" onClick={prevPage} disabled={currentPage === 1}>
                <IoIosArrowBack size={16}/>
                </button>
            </li>
            {pageNumbers.map((number) => (
            <li key={number}>
                <button className="h-14 w-14 flex items-center justify-center bg-gray-200 hover:bg-purple-400 disabled:bg-purple-200" disabled={currentPage === number} onClick={() => handleClick(number)}>{number}</button>
            </li>
            ))}
            <li>
                <button className="h-14 w-14 flex items-center justify-center bg-gray-200 hover:bg-purple-400 disabled:bg-purple-200" onClick={nextPage} disabled={currentPage === Math.ceil(agents.length / agentsPerPage)}>
                <IoIosArrowForward size={16}/>
                </button>
            </li>
        </ul>
    </div>
            </section>
    )
}

export default AgentList