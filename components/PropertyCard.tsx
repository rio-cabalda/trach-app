"use client";

// Import necessary libraries and components
import React, { useState } from 'react';
import { PropertyProps } from '@/types';
import { CustomButton } from '.';
import { FaPhone } from 'react-icons/fa';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { Button, Modal, Select } from 'flowbite-react';
 

// Define the PropertyCardProps interface
interface PropertyCardProps {
  href: string;
  property: PropertyProps;
}

// Define the PropertyCard component
const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  // Initialize state
  const [isOpen, setIsOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const handleLeftArrowClick = () => {
    setActiveImageIndex((prevIndex) => (prevIndex - 1 + property.photos.length) % property.photos.length);
  };

  const handleRightArrowClick = () => {
    setActiveImageIndex((prevIndex) => (prevIndex + 1) % property.photos.length);
  };

  const formatPrice2 = (price: number): string => {
    const roundedPrice = Math.round(price);
    if (roundedPrice >= 1000) {
      const formattedPrice = (roundedPrice / 1000).toFixed().replace(/\.0$/, '') + 'K';      return formattedPrice;
    } else {
      return roundedPrice.toString();
    }
  };
  
  const [openModal, setOpenModal] = useState(false);
  const [modalSize, setModalSize] = useState<string>('md');

  // Render the PropertyCard component
  return (
<div className='shadow-sm mx-5 flex flex-col p-5 justify-center items-start bg-primary-blue-100 hover:bg-white hover:shadow-lg rounded-3xl transform transition-transform duration-300 ease-in-out '>      {/* Large Picture */}
      <div className='relative group duration-300 ease-in-outtransform transition-transform'>
      <HiChevronLeft className='cursor-pointer absolute mt-[8rem] duration-300 ease-in-out hover:scale-105 rounded-full bg-slate-200  hidden group-hover:block opacity-0 group-hover:opacity-100'  onClick={handleLeftArrowClick}/>
      <HiChevronRight className='absolute mt-[8rem] duration-300 ease-in-out hover:scale-105 rounded-full bg-slate-200 ml-[17rem] hidden group-hover:block opacity-0 group-hover:opacity-100 cursor-pointer'  onClick={handleRightArrowClick}/>
      {property.photos.map((photo:PropertyCardProps, index:number) => (
          <img
            key={index}
            className={`w-full h-64 object-cover rounded-lg mb-4 ${index === activeImageIndex ? 'opacity-100' : 'opacity-0 hidden'}`}
            src={photo.href || ''}
            alt={`Property Photo ${index + 1}`}
            
          />
        ))}
         
      </div>

      {/* Branding Name */}
      <div className='space-y-1 font-medium dark:text-white'>
        <div className='text-md font-bold text-purple-500'>{property.branding[0]?.name}</div>
        
        <div className='text-sm text-gray-500 dark:text-gray-400'><span className='text-lg font-bold mr-1'>$</span>{formatPrice2(property.list_price)}</div>
        <div className='text-sm text-gray-500 dark:text-gray-400'>{property.location.address.city}</div>
        <div className='text-sm text-gray-500 dark:text-gray-400'>{property.list_date}</div>
        <div className='text-sm text-gray-500 dark:text-gray-400'>{property.status}</div>
      </div>

       {/* Footer - View Profile button */}
       <div className='relative flex-none w-full mt-4'>
        <div className=' hover:bg-purple-400 rounded-lg'>
          <CustomButton
            title='View Profile'
            containerStyles='w-full py-[16px] rounded-sm bg-transparent border'
            textStyles='text-[#9300FF] text-[14px] leading-[17px] font-bold'
            rightIcon='/right-arrow.svg'
            handleClick={() => setOpenModal(true)}
          />
        </div>
        {/* <div className='car-card__btn-container rounded-lg mt-2'>
          <CustomButton
            title='View Profile'
            containerStyles='w-full py-[16px] rounded-sm bg-[#8C3AFF]'
            textStyles='text-white text-[14px] leading-[17px] font-bold'
            rightIcon='/right-arrow.svg'
            handleClick={() => console.log('View Profile clicked')}
          />
        </div> */}
      </div>
      <Modal show={openModal} size={modalSize} onClose={() => setOpenModal(false)}>
        <Modal.Header>{property.branding[0]?.name}
        <p className='gap-5'>
          {property.location.address.line}
          {property.location.address.state}
          {property.location.county.name}
        </p>
          <p>
          {property.branding[0]?.type}
          </p>
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-6 p-6">
            <img src={property.photos[0].href} alt="" className=' w-full h-full rounded-lg shadow-md' />
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
             
            </p>
          </div>
          <div className='space-y-1 font-medium dark:text-white'>
        {Object.entries(property.description).map(([key, value]) => (
          <div key={key} className='text-sm text-gray-500 dark:text-gray-400'>
            <span className='font-bold'>{key}:</span> {value}
          </div>
        ))}
      </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)} className='bg-purple-500'>Contact an Agent</Button>
          <Button color="gray" onClick={() => setOpenModal(false)} className='outline outline-purple-600 outline-1 text-purple-700 hover:bg-purple-500 '>
            Schedule a tour
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

// Export the PropertyCard component
export default PropertyCard;




