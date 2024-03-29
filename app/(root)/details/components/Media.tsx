import Image from "next/image";
import React from 'react';
import { HiArrowRight } from 'react-icons/hi';
import { HiOutlinePlusSm } from 'react-icons/hi';
// Define the type for the property card
interface PropertyCardProps {
  photo: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ photo }) => {
  return (
    <div className='rounded-2xl relative group overflow-hidden cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105 bg-gray-200'>
      {/* Photo occupying the whole width */}
      <Image src={photo} alt='Property' width={316} height={207} objectFit="cover" />
    </div>
  );
};

const Media: React.FC = () => {
  // Sample data for property cards
  const propertiesData: PropertyCardProps[] = [
    {
      photo: '/hero.png',
    },
    {
        photo: '/hero.png',
    },
    {
        photo: '/hero.png',
    },
    {
        photo: '/hero.png',
    },
    {
        photo: '/hero.png',
    },
    {
        photo: '/hero.png',
    },
  ];

  return (
    <div className='flex flex-col bg-white w-full rounded-2xl p-5 gap-6'>
     <div className='flex items-center justify-between text-lg font-bold text-[#2D0173]'>
        Media (500)
        <HiOutlinePlusSm size={25}/>
      </div>
      {/* Navigation */}
      <div className='text-[#9300FF] font-[600] gap-16 flex border-b border-[#F6F6F6]'>
        <p className="pb-4 border-b-2 border-b-[#9300FF] text-[#9300FF]">
            All
            <span>
                (6)
            </span>
        </p>
        <p className="pb-4 text-[#7D7D7D]">
            Photos
            <span>
                (6)
            </span>
        </p>
        <p className="pb-4 text-[#7D7D7D]">
            Videos
            <span>
                (0)
            </span>
        </p>
      </div>
      {/* <div className='grid grid-cols-3 gap-6 flex-wrap'> */}
      <div className='flex gap-6 flex-wrap'>
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

export default Media;
