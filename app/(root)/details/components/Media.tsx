import React from 'react';
import { HiArrowRight } from 'react-icons/hi';

// Define the type for the property card
interface PropertyCardProps {
  photo: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ photo }) => {
  return (
    <div className='gap-5 rounded-lg relative group overflow-hidden cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105 bg-gray-200'>
      {/* Photo occupying the whole width */}
      <img src={photo} alt='Property' className='w-full h-full rounded-md object-cover' />
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
    <div className='bg-white w-full m-3 rounded-lg'>
      <div className='font-bold text-purple-800  gap-5 mx-3 p-2'>Media</div>
      <div className='font-bold text-purple-800 mb-2 gap-5 mx-3 p-2 flex'>
        <p>
            All
            <span>
                (count)
            </span>
        </p>
        <p>
            Photos
            <span>
                (count)
            </span>
        </p>
        <p>
            Videos
            <span>
                (count)
            </span>
        </p>
      </div>
      <div className='grid grid-cols-3 gap-3 p-2'>
        {/* Map through the property data and render PropertyCard for each */}
        {propertiesData.map((property, index) => (
          <PropertyCard key={index} {...property} />
        ))}
      </div>
      <div className='text-sm text-purple-700 mb-2 gap-5 mx-3 p-2 flex flex-row items-center'>
        <p>View All Media</p>
        <HiArrowRight className='ml-2' />
      </div>
    </div>
  );
};

export default Media;
