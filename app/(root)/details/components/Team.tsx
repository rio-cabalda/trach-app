import { Avatar } from 'flowbite-react';
import React from 'react';
import { HiArrowCircleDown, HiArrowRight } from 'react-icons/hi';
import { HiArrowLeft } from 'react-icons/hi2';
import { HiOutlinePlusSm } from 'react-icons/hi';
import Image from "next/image";

// Define the type for the property card
interface PropertyCardProps {
  photo: string;
  name: string;
  description: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ photo, name, description }) => {
    return (
      <div className='flex flex-col items-center py-11 px-6 w-[234px] h-[258px] border border-[#EAEAEA] bg-[##FFFFFF] rounded-2xl overflow-hidden cursor-pointer transition-transform duration-300 ease-in-out origin-center transform hover:scale-105'>
        {/* Photo occupying the whole width */}
        {/* <Avatar img={photo} rounded status="away" statusPosition="bottom-right" /> */}
        <div className="">
          <Image src="/margot.png" alt='teams' width={100} height={100} objectFit="cover"/>
        </div>
        {/* Body below the photo */}
        <div className='py-4 gap-2 items-center justify-center text-center '>
          {/* name and Description */}
            <h3 className='text-lg font-[600] text-[#290F6A]'>{name}</h3>
            <p className="text-base font-[400] text-[#7D7D7D]">{description}</p>
            {/* <h3 className='text-md font-bold my-2 text-purple-700'>{name}</h3>
            <p>{description}</p> */}
        </div>
        
      </div>
    );
  };
const Team: React.FC = () => {
  // Sample data for property cards
  const propertiesData: PropertyCardProps[] = [
    {
      photo: "/hero.png",
      name: 'Person 1',
      description: 'Description for person 1',
    },
    {
        photo: "/hero.png",
        name: 'Person 2',
        description: 'Description for person 1',
      },
      {
        photo: "/hero.png",
        name: 'Person 3',
        description: 'Description for person 1',
      },
      {
        photo: "/hero.png",
        name: 'Person 4',
        description: 'Description for person 1',
      },
  ];

  return (
    <div className='flex flex-col bg-white w-full rounded-2xl p-5 gap-6'>
      <div className='flex items-center justify-between text-lg font-bold text-[#2D0173]'>
        Team (10)
        <HiOutlinePlusSm size={25}/>
      </div>
      <div className='flex gap-5 flex-wrap'>
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

export default Team;
