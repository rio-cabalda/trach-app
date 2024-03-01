import React from 'react';
import { HiArrowCircleDown, HiArrowRight } from 'react-icons/hi';
import { HiArrowLeft } from 'react-icons/hi2';

// Define the type for the property card
interface PropertyCardProps {
  photo: string;
  title: string;
  description: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ photo, title, description }) => {
    return (
      <div className='bg-gray-200 p-4 m-2 rounded-lg w-full flex flex-col group overflow-hidden cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105'>
        {/* Photo occupying the whole width */}
        <img src={"/hero.png"} alt={title} className='w-full rounded-t-lg mb-2' />
        {/* Body below the photo */}
        <div className='p-2 gap-5'>
           
          {/* Title and Description */}
          <button className=' outline-1 outline px-5 mr-2 rounded-sm text-[.65rem]  hover:outline-none text-blue-500 bg-blue-100 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out'>
      Condominium
    </button>
    <button className=' outline-1 outline px-5 mr-2 rounded-sm text-[.65rem]  hover:outline-none text-green-500 bg-green-100 hover:bg-green-500 hover:text-white transition duration-300 ease-in-out'>
      Condominium
    </button>
           
          <h3 className='text-md font-bold my-2 text-purple-700'>{title}</h3>
          <div className='flex gap-2'>
            <HiArrowCircleDown/>
            <p>{description}</p>
          </div>
          
        </div>
        {/* Footer with a full-width button */}
     
        <button className=' w-full hover:bg-purple-500 outline-gray-500 outline outline-1 hover:outline-none hover:text-white py-2 mt-2 rounded-sm  '>View Property</button>
        
        
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
    <div className='bg-white w-full m-3 rounded-lg'>
      <div className='font-bold text-purple-700 mb-2 gap-5 mx-3 p-2'>Properties</div>
      <div className='text-sm text-gray-500 mb-5 gap-5 mx-3 p-2 flex justify-between'>
        {/* Map through the property data and render PropertyCard for each */}
        {propertiesData.map((property, index) => (
          <PropertyCard key={index} {...property} />
        ))}
      </div>
      <div className='text-sm  text-purple-700 mb-2 gap-5 mx-3 p-2 flex flex-row'>
        <p>
        View All Properties
        </p>
        <HiArrowRight/>
       
        
        </div>
    </div>
  );
};

export default Properties;
