import React from 'react';
import Image from 'next/image';
import AuthForm from './AuthForm';
import Link from 'next/link';

const Home = () => {
  return (
    <div className='flex min-h-full justify-center sm:px-2 lg:px-8 '>
       <div className='lg:flex-none lg:w-[35%] bg-purple-200  self-center h-3/4 sm:w-md hover:bg-purple-300'>
        <div className='flex flex-col items-center justify-center text-center  h-full'>
          <Image src={'/login.png'} width={400} height={100} alt='asd' className=' ' />
        <Link href={"https://www.zoopla.co.uk/"}>
          <Image src={'/zoopla.png'} width={100} height={100} alt='asd' className=' mx-auto rounded-lg' />
          </Link>
          </div>
        
      </div>
      <div className='flex-none lg:w-[35%] sm:w-md bg-white  sm:w  self-center h-3/4'>
        <div className='p-10 h-full'>
          <Link href={'/'}>
            <Image src={"/logo-new.svg"} width={78} height={48} alt='' className=' mt-3'/>
          </Link>
         
          <AuthForm />
          
        </div>
       
      </div>
    </div>
  );
};

export default Home;
