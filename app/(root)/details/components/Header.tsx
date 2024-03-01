import React from 'react';
import { HiOutlineInformationCircle } from 'react-icons/hi';

// Define the type for the items prop
interface HeaderProps {
  items: {
    title: string;
    description: string;
    icon: React.ReactNode; // You can adjust the type based on your actual use case
  }[];
}

// Use the defined type for the props
const Header: React.FC<HeaderProps> = ({ items }) => {
  return (
    <div className='bg-white  w-full mx-3 rounded-lg'>
      <div className='flex justify-between mx-auto gap-10 p-5 items-center text-center'>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <div className='text-left'>
              <div className='flex gap-2 items-center'>
                {item.icon}
                <h2 className='text-md font-bold text-purple-700'>{item.title}</h2>
              </div>
              <div className='ml-6'>
                <p>{item.description}</p>
              </div>
            </div>
            {index < items.length - 1 && (
              <div className='h-6 w-0.5 bg-gray-300 mx-4' />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Header;
