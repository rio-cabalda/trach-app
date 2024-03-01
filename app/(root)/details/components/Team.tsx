import { Avatar } from 'flowbite-react';
import React from 'react';
import { HiArrowCircleDown, HiArrowRight } from 'react-icons/hi';
import { HiArrowLeft } from 'react-icons/hi2';

// Define the type for the property card
interface PropertyCardProps {
  photo: string;
  name: string;
  description: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ photo, name, description }) => {
    return (
      <div className='bg-gray-200 p-4 m-2 rounded-md w-full flex flex-col group overflow-hidden cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105'>
        {/* Photo occupying the whole width */}
        <Avatar img={photo} rounded status="away" statusPosition="bottom-right" />
        {/* Body below the photo */}
        <div className='p-2 gap-5 items-center justify-center text-center '>
           
          {/* name and Description */}
         
           
          <h3 className='text-md font-bold my-2 text-purple-700'>{name}</h3>
           
             
            <p>{description}</p>
           
          
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
        name: 'Person 1',
        description: 'Description for person 1',
      },
      {
        photo: "/hero.png",
        name: 'Person 1',
        description: 'Description for person 1',
      },
      {
        photo: "/hero.png",
        name: 'Person 1',
        description: 'Description for person 1',
      },
  ];

  return (
    <div className='bg-white w-full m-3 rounded-lg'>
      <div className='font-bold text-purple-700 mb-2 gap-5 mx-3 p-2'>Team</div>
      <div className='text-sm text-gray-500 mb-5 gap-5 mx-3 p-2 flex justify-between'>
        {/* Map through the property data and render PropertyCard for each */}
        {propertiesData.map((property, index) => (
          <PropertyCard key={index} {...property} />
        ))}
      </div>
      <div className='text-sm  text-purple-700 mb-2 gap-5 mx-3 p-2 flex flex-row'>
        <p>
        View All Team Members
        </p>
        <HiArrowRight/>
       
        
        </div>
    </div>
  );
};

export default Team;
