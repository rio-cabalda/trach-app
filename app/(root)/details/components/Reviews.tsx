import { Avatar } from 'flowbite-react';
import React from 'react';
import { HiArrowCircleDown, HiArrowRight, HiOutlineThumbDown, HiOutlineThumbUp, HiStar } from 'react-icons/hi';
import { HiArrowLeft } from 'react-icons/hi2';
import { HiOutlinePlusSm } from 'react-icons/hi';
import { FaRegUser } from "react-icons/fa";
import Image from "next/image";
import { getDateDifference } from "@/utils/functions";

// Define the type for the property card
interface PropertyCardProps {
  comment: string;
  rating: number;
  display_name: string;
  year: string;
  location: string;
  describe_yourself:string;
  started_timestamp:string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ comment, rating, display_name, year, location, describe_yourself, started_timestamp}) => {
    return (
      <div className='flex flex-col border-b border-[#F6F6F6]'>
        <div className='text-yellow-300 flex'>
          {[...Array(rating)].map((_, index) => (
            <HiStar size={20} key={index} />
          ))}
        </div>
        <h4 className='text-md font-bold text-[#2D0173] my-4'>
            {describe_yourself}
        </h4>
        <p className="text-[#7D7D7D] text-base">{comment}</p>
        
        <div className='flex justify-between my-4'>
          <div className='flex items-center gap-5'>
            {/* <Avatar img={photo} rounded status="away" statusPosition="bottom-right" /> */}
            <div className="bg-gray-100 w-14 h-14 p-1 rounded-full flex items-center justify-center overflow-hidden">
              {/* <Image src={photo} alt='review photo' width={50} height={50} objectFit="cover"/> */}
              <FaRegUser size={20} />
            </div>
            <div className='p-2 gap-1'>
              <h3 className='text-base font-bold text-black'>{display_name}</h3>
              <p>{getDateDifference(started_timestamp)}</p>
            </div>
          </div>
          <div className='flex flex-1 justify-end gap-2 items-center'>
            <button className='text-gray-400 rounded-full p-2 outline outline-1 outline-gray-300 transition duration-300 ease-in-out hover:bg-green-400 hover:text-white transform hover:scale-105'>
              <HiOutlineThumbUp />
            </button>
            <button className='text-gray-400 rounded-full p-2 outline outline-1 outline-gray-300 transition duration-300 ease-in-out hover:bg-red-400 hover:text-white transform hover:scale-105'>
              <HiOutlineThumbDown />
            </button>
          </div>
        </div>
      </div>
    );
  };
const Reviews = ({agentReviews}:{agentReviews:any}) => {
  

  return (
    <div className='flex flex-col bg-white w-full rounded-2xl p-5 gap-6'>
      <div className='flex items-center justify-between text-lg font-bold text-[#2D0173]'>
        Reviews ({agentReviews.length})
        <HiOutlinePlusSm size={25}/>
      </div>
      {/* Navigation */}
      <div className='text-[#9300FF] font-[600] gap-16 flex border-b border-[#F6F6F6]'>
        <p className="pb-4 border-b-2 border-b-[#9300FF] text-[#9300FF]">
            TRACH Reviews ({agentReviews.length})
        </p>
        <p className="pb-4 text-[#7D7D7D]">
            Google Reviews (0)
        </p>
        <p className="pb-4 text-[#7D7D7D]">
            Trustpilot Reviews (0)
        </p>
      </div>
      <div className='flex flex-col gap-6'>
        {/* Map through the property data and render PropertyCard for each */}
        {agentReviews.map((property:any, index:number) => (
          <PropertyCard key={index} {...property} />
        ))}
      </div>
      <button className='text-[16px] text-[#9300FF] gap-2 flex items-center'>
        <p>
        View All Properties
        </p>
        <HiArrowRight size={18}/>
      </button>
    </div>
  );
};

export default Reviews;
