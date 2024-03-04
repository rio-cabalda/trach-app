import { Avatar } from 'flowbite-react';
import React from 'react';
import { HiArrowCircleDown, HiArrowRight, HiOutlineThumbDown, HiOutlineThumbUp, HiStar } from 'react-icons/hi';
import { HiArrowLeft } from 'react-icons/hi2';

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
        <div className='p-4 m-2 text-left justify-start rounded-md w-full flex flex-col group' style={{ borderBottom: '1px solid #ccc' }}>
        <div className='text-yellow-300 flex'>
  {[...Array(starCount)].map((_, index) => (
    <HiStar key={index} />
  ))}
</div>
        <p className='text-md font-bold text-purple-700 my-2'>
            {reviewHead}
        </p>
       
        {review}

        <div className='flex justify-between'>
  <div className='flex gap-5'>
    <Avatar img={photo} rounded status="away" statusPosition="bottom-right" />
    <div className='p-2 gap-5    '>
           
        
         
           
           <h3 className='text-md font-bold my-2 text-purple-700'>{name}</h3>
            
              
             <p>{date}</p>
            
           
         </div>
       

  </div>
  <div className='flex gap-2 items-center'>
    <button className='text-gray-400 rounded-full p-2 outline outline-1 outline-gray-300 transition duration-300 ease-in-out hover:bg-green-400 hover:text-white transform hover:scale-105'>
      <HiOutlineThumbUp />
    </button>
    <button className='text-gray-400 rounded-full p-2 outline outline-1 outline-gray-300 transition duration-300 ease-in-out hover:bg-red-400 hover:text-white transform hover:scale-105'>
      <HiOutlineThumbDown />
    </button>
  </div>
</div>


        <div className='p-2 gap-5    '>
          <h3 className='text-md font-bold my-2 text-purple-700'>{name}</h3>
           
             
            <p>{date}</p>
           
          
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
    <div className='bg-white w-full rounded-lg'>
      <div className='font-bold text-purple-700 mb-2 gap-5 mx-3 p-2'>Team</div>
      <div className='text-sm text-gray-500 mb-5 gap-5 mx-3 p-2 flex justify-between flex-col'>
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

export default Reviews;
