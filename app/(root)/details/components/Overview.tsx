import React from 'react';

interface OverviewProps {
  content: string;
}

const Overview: React.FC<OverviewProps> = ({ content }) => {
  return (
    <div className='bg-white w-full m-3 rounded-lg'>
      <div className='text-lg font-bold text-purple-700 mb-2 gap-5 mx-3 p-2'>
        Overview
      </div>
      <div className='text-sm   text-gray-500 mb-5 gap-5 mx-3 p-2'>
        <p>{content || 'Lorem Ipsum '.repeat(50)}</p>
      </div>
    </div>
  );
};

export default Overview;
