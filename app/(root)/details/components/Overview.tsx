import React from 'react';
import { BsPencil } from "react-icons/bs";

interface OverviewProps {
  content: string;
}

const Overview: React.FC<OverviewProps> = ({ content }) => {
  return (
    <div className='bg-white w-full rounded-2xl p-5'>
      <div className='flex items-center justify-between text-lg font-bold text-[#2D0173]'>
        Overview
        <BsPencil size={20} />
      </div>
      
      <div className='text-sm text-gray-500 mt-4'>
        <p>{content || "Bio not available"}</p>
      </div>
    </div>
  );
};

export default Overview;
