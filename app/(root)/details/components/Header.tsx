import React from 'react';
import { HiOutlineInformationCircle } from 'react-icons/hi';
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { PiCurrencyDollarSimple } from "react-icons/pi";
import { BsCalendar4Event } from "react-icons/bs";
import { FaRegCalendarCheck } from "react-icons/fa";

// Define the type for the items prop
interface HeaderProps {
  searchParams: any;
}

// Use the defined type for the props
const Header: React.FC<HeaderProps> = ({ searchParams }) => {
  const {minPrice, maxPrice, avgSaleTime, recentSold} = searchParams;
  console.log("router in header", searchParams);
  
  // const { advertiser_id, nrds_id } = router.queryParams ;
  return (
    <div className='flex items-center justify-between bg-white w-full rounded-2xl p-5 overflow-hidden'>
      {/* <div className='flex justify-between mx-auto gap-10 p-5 items-center text-center'>
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
      </div> */}

      {/* Profile Info */}
      <div className='flex relative w-fit gap-2 text-lg'>
        <LiaMoneyBillWaveSolid size={16} className="text-gray-800 mt-1.5"/>
        <div className="flex flex-col">
        <div className='text-md font-bold text-[#2D0173]'>0.75% or &#36;2500</div>
          <div className="font-normal text-gray-500 text-sm">Fees</div>
        </div>
      </div> 
      {/* Line Separator */}
      <div className="border-l-2 h-10 w-2 border-[#F6F6F6]"></div>

      <div className='flex relative w-fit gap-2 text-lg'>
        <PiCurrencyDollarSimple size={16} className="text-gray-800 mt-1.5"/>
        <div className="flex flex-col">
          <div className='text-md font-bold text-[#2D0173]'>&#36;{minPrice} - &#36;{maxPrice}</div>
          <div className="font-normal text-gray-500 text-sm">Price range</div>
        </div>
      </div> 
      {/* Line Separator */}
      <div className="border-l-2 h-10 w-2 border-[#F6F6F6]"></div>

      <div className='flex relative w-fit gap-2 text-lg'>
        <FaRegCalendarCheck size={16} className="text-gray-800 mt-1.5"/>
        <div className="flex flex-col">
          <div className='text-md font-bold text-[#2D0173]'>{avgSaleTime}</div>
          <div className="font-normal text-gray-500 text-sm">Avg sale time</div>
        </div>
      </div> 

      {/* Line Separator */}
      <div className="border-l-2 h-10 w-2 border-[#F6F6F6]"></div>

      <div className='flex relative w-fit gap-2 text-lg'>
        <FaRegCalendarCheck size={16} className="text-gray-800 mt-1.5"/>
        <div className="flex flex-col">
          <div className='text-md font-bold text-[#2D0173]'>{recentSold} sold</div>
          <div className="font-normal text-gray-500 text-sm">Sold last month</div>
        </div>
      </div> 

      {/* Line Separator */}
      <div className="border-l-2 h-10 w-2 border-[#F6F6F6]"></div>

      <div className='flex relative w-fit gap-2 text-lg'>
        <BsCalendar4Event size={14} className="text-gray-800 mt-1.5"/>
        <div className="flex flex-col">
          <div className='text-md font-bold text-[#2D0173]'>10 listed</div>
          <div className="font-normal text-gray-500 text-sm">Listed last month</div>
        </div>
      </div> 
    </div>
  );
};

export default Header;
