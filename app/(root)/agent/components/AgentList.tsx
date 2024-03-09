"use client"
// Hooks
import {useState} from 'react'
// Component
import AgentCard from "./AgentCard"
// icons
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { CustomFilter } from '@/components';
import { PriceRange, SelectRating } from '@/constants';
import Link from 'next/link';

function AgentList({agentList, location}:any) {
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ agents, setAgents ] = useState(agentList);

    const agentsPerPage = 10;
    const pageNumbers = [];
    console.log("Agent List", agents);
    
    for (let i = 1; i <= Math.ceil(agents.length / agentsPerPage); i++) {
        pageNumbers.push(i);
    }

    const isDataEmpty = !agents || agents.length === 0 || agents.length < 1;
    console.log("isDataEmpty",isDataEmpty);
    
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
    
    return (<>
        <div className='flex justify-between relative mt-5 mx-4 p-3 bg-white'>
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
        <div className=' mt-16 flex justify-start flex-row gap-2 mx-[6%] text-xl font-extrabold '>
            {agents?.length > 0
            ? `${agents?.length} agents found in `
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
                        {currentAgents.map((agent:any, index:number) =>  (
                            <div key={index}>
                                <AgentCard agent={agent}/> 
                            </div>
                        ))}
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
                        <ul className="flex w-full justify-center gap-2 my-10">
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
            )}
        </div>
    </>)
}

export default AgentList