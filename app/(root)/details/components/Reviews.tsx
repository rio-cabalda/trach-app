import { Avatar } from 'flowbite-react';
import React from 'react';
import { HiArrowCircleDown, HiArrowRight, HiOutlineThumbDown, HiOutlineThumbUp, HiStar } from 'react-icons/hi';
import { HiArrowLeft } from 'react-icons/hi2';
import { HiOutlinePlusSm } from 'react-icons/hi';
import Image from "next/image";

// Define the type for the property card
interface PropertyCardProps {
  photo: string;
  name: string;
  date: string;
  review: string;
  reviewHead: string;
  starCount:Number;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ photo, name, date, review, reviewHead, starCount }) => {
    return (
      <div className='flex flex-col border-b border-[#F6F6F6]'>
        <div className='text-yellow-300 flex'>
          {[...Array(starCount)].map((_, index) => (
            <HiStar size={20} key={index} />
          ))}
        </div>
        <h4 className='text-md font-bold text-[#2D0173] my-4'>
            {reviewHead}
        </h4>
        <p className="text-[#7D7D7D] text-base">{review}</p>
        
        <div className='flex justify-between my-4'>
          <div className='flex items-center gap-5'>
            {/* <Avatar img={photo} rounded status="away" statusPosition="bottom-right" /> */}
            <div className="bg-gray-100 w-14 h-14 p-1 rounded-full flex items-center justify-center">
              <Image src={photo} alt='review photo' width={50} height={50} objectFit="cover"/>
            </div>
            <div className='p-2 gap-1'>
              <h3 className='text-base font-bold text-black'>{name}</h3>
              <p>3 days ago...</p>
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
const Reviews: React.FC = () => {
  // Sample data for property cards
  const propertiesData: PropertyCardProps[] = [
    {
      photo: "/hero.png",
      name: 'Person 1',
      date: 'date for person 1',
      review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda amet cupiditate esse ut similique itaque repellendus recusandae soluta dolorum sunt voluptas officiis at ad, error praesentium cumque animi beatae placeat',
      reviewHead:"Highly recommended!",
      starCount:1
  
    },
    
    {
        photo: "/hero.png",
        name: 'Person 1',
        date: 'date for person 1',
        review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda amet cupiditate esse ut similique itaque repellendus recusandae soluta dolorum sunt voluptas officiis at ad, error praesentium cumque animi beatae placeat',
        reviewHead:"Highly recommended!",
        starCount:2
      },
      {
        photo: "/hero.png",
        name: 'Person 1',
        date: 'date for person 1',
        review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda amet cupiditate esse ut similique itaque repellendus recusandae soluta dolorum sunt voluptas officiis at ad, error praesentium cumque animi beatae placeat',
        reviewHead:"Highly recommended!",
        starCount:3
      },
      {
        photo: "/hero.png",
        name: 'Person 1',
        date: 'date for person 1',
        review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda amet cupiditate esse ut similique itaque repellendus recusandae soluta dolorum sunt voluptas officiis at ad, error praesentium cumque animi beatae placeat',
        reviewHead:"Highly recommended!",
        starCount:5
      },
  ];

  return (
    <div className='flex flex-col bg-white w-full rounded-2xl p-5 gap-6'>
      <div className='flex items-center justify-between text-lg font-bold text-[#2D0173]'>
        Reviews ({propertiesData.length})
        <HiOutlinePlusSm size={25}/>
      </div>
      {/* Navigation */}
      <div className='text-[#9300FF] font-[600] gap-16 flex border-b border-[#F6F6F6]'>
        <p className="pb-4 border-b-2 border-b-[#9300FF] text-[#9300FF]">
            TRACH Reviews (400)
        </p>
        <p className="pb-4 text-[#7D7D7D]">
            Google Reviews (400)
        </p>
        <p className="pb-4 text-[#7D7D7D]">
            Trustpilot Reviews (324)
        </p>
      </div>
      <div className='flex flex-col gap-6'>
        {/* Map through the property data and render PropertyCard for each */}
        {propertiesData.map((property, index) => (
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
