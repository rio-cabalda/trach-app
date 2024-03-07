import React from 'react';
import { HiArrowCircleDown, HiArrowRight } from 'react-icons/hi';
import { HiArrowLeft } from 'react-icons/hi2';
import { RiMapPin2Line } from "react-icons/ri";
import { HiOutlinePlusSm } from 'react-icons/hi';
import Image from "next/image";
// Define the type for the property card
interface PropertyCardProps {
  photo: string;
  title: string;
  description: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ photo, title, description }) => {
    return (
      <div className='w-fit flex flex-col gap-4 group overflow-hidden cursor-pointer  transition-transform origin-center duration-300 ease-in-out transform hover:scale-105'>
        {/* Photo occupying the whole width */}
        <Image src={"/hero.png"} alt={title} width={316} height={207}  className='w-full rounded-2xl bg-gray-100' objectFit="cover"/>
        {/* Body below the photo */}
        <div className='flex flex-col'>
          
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              {/* Title and Description */}
              <button className='py-1.5 px-3 rounded-[3px] text-[12px] font-[400] hover:outline-none text-blue-500 bg-blue-100 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out'>
                Condominium
              </button>
              <button className='py-1.5 px-3 rounded-[3px] text-[12px] font-[400] hover:outline-none text-[#19A15E] bg-[#19A15E]/10 hover:bg-green-500 hover:text-white transition duration-300 ease-in-out'>
                  Forsale
              </button>
            </div>
            <h3 className="font-[600] text-base text-black">&#36;700k</h3>
          </div>
          
          <h3 className='text-lg font-[600] my-2 text-[#290F6A]'>{title}</h3>
          <div className='flex gap-2 items-center'>
            <RiMapPin2Line size={20}/>
            <p className="text-base font-[400] text-[#7D7D7D]">{description}</p>
          </div>
        </div>
        {/* Footer with a full-width button */}
    
        <button className='py-4 border w-full hover:bg-purple-500 outline-gray-500   hover:outline-none hover:text-white'>View Property</button>
      </div>
    );
  };
const Properties: React.FC = () => {
  // Sample data for property cards
  const propertiesData: PropertyCardProps[] = [
    {
      photo: 'path/to/photo1.jpg',
      title: 'Property 1',
      description: 'Description for Property 1',
    },
    {
      photo: 'path/to/photo2.jpg',
      title: 'Property 2',
      description: 'Description for Property 2',
    },
    {
      photo: 'path/to/photo3.jpg',
      title: 'Property 3',
      description: 'Description for Property 3',
    },
  ];

  return (
    <div className='flex flex-col bg-white w-full rounded-2xl p-5 gap-4'>
      <div className='flex items-center justify-between text-lg font-bold text-[#2D0173]'>
        Properties (3)
        <HiOutlinePlusSm size={25}/>
      </div>
      <div className='text-sm flex text-gray-500 mb-5 gap-5 '>
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

export default Properties;
