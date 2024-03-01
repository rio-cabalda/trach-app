'use client';

import {useState} from 'react';

import { CustomButton } from '.';


import CommonCard from './CommonCard';


const Modal = () => {
    
    const [isOpen, setIsOpen]=useState(false);

  
  return (
    
   
        
                <div className='rounded-md bg-black '>
                    <CustomButton 
                        title=''
                        containerStyles=""
                        textStyles=""
                        rightIcon="/filter.svg"
                        handleClick={() =>setIsOpen(true)}
                        
                    />
                     <CommonCard isOpen={isOpen} closeModal={()=>setIsOpen(false)}/>
                </div>
               
       
       
   
  )
}

export default Modal