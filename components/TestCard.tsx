'use client';
import {useState} from 'react';
import Image from 'next/image';
import { CarCardProps, CarProps, CarPropstest } from '@/types';
import { CustomButton } from '.';
import { calculateCarRent, generateCarImageUrl } from '@/utils';
import CarDetails from './CarDetails';
import TestDetails from './TestDetails';

interface CarCardPropstest{
    car: CarPropstest;
}
const TestCard = ({car}: CarCardPropstest) => {
    const {agent_rating, person_name} = car;
    const [isOpen, setIsOpen]=useState(false);

    ;
  return (
    <div
    className='car-card group'
    >
        <div className='car-card__content'>
            <h2 className='car-card__content-title'>
                {agent_rating}  {person_name}
            </h2>
        </div>
        <p className='flex mt-6 text-[32px] font-extrabold'>
            <span className='self-start text-[14px] font-semibold'>
              $
            </span>
            
            <span className='self-end text-[14px] font-medium'>
               /day
            </span>
        </p>
        <div className='relative w-full h-40 my-3 object-contain'>
            
        </div>
        <div className='relative flex w-full mt-2'>
            <div className='flex group-hover:invisible w-full justify-between text-gray'>
                
                
            </div>
                <div className='car-card__btn-container'>
                    <CustomButton 
                        title='View More'
                        containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
                        textStyles=" text-white text-[14px] leading-[17px] font-bold"
                        rightIcon="/right-arrow.svg"
                        handleClick={() =>setIsOpen(true)}
                    />
                </div>
        </div>
        <TestDetails isOpen={isOpen} closeModal={()=>setIsOpen(false)} car={car}/>
    </div>
  )
}

export default TestCard