// 'use client';
// import React from 'react'
// import { Transition, Dialog } from '@headlessui/react';
// import {Fragment} from 'react'
// import Image from 'next/image';

// import AccordionSection from './AccordionSection';
// import { listingOptions, onlineOptions, ratingsOptions, saleOptions, saletimeOptions, servicesOptions, soldamountOptions } from '@/types';
// import RangeSliders from './RangeSliders';


// interface CarDetailsProps{
//     isOpen: boolean;
//     closeModal: ()=>void;
    
// }
// const handleRangeChange = (values: number[]) => {
//     console.log('Selected Range:', values);
// };

// const CommonCard = ({isOpen, closeModal}:CarDetailsProps) => {
//   return (
//     <>
//     <Transition
//             appear show={isOpen}
//             as={Fragment}
//         >
//             <Dialog 
//             as="div" 
//             className={"relative z-10 "} 
//             onClose={closeModal}>
//                 <Transition.Child
//                     as={Fragment} 
//                     enter='ease-out duration-200'
//                     enterFrom='opacity-0'
//                     enterTo='opacity-100'
//                     leave='ease-in duration-200'
//                     leaveFrom='opacity-100'
//                     leaveTo='opacity-0'
//                 > 
//                     <div
//                       className='fixed inset-0 bg-black bg-opacity-35'  
//                     />
                    
//                 </Transition.Child>
//                 <div className='fixed inset-0 overflow-y-auto'>
//                     <div className='flex min-h-full items-center justify-center p-4 text-center '>
//                     <Transition.Child
//                     as={Fragment} 
//                     enter='ease-out duration-3200'
//                     enterFrom='opacity-0 transform translate-x-50'
//                     enterTo='opacity-100 transform translate-x-70'
//                     leave='ease-in duration-200'
//                     leaveFrom='opacity-100 transform translate-x-0'
//                     leaveTo='opacity-0 transform translate-x-full'
//                 >
                    
//                     <Dialog.Panel 
//                         className=" right-0 top-0  mr-[0] mt-[0]  absolute w-lg max-w-lg min-h-[100vh] overflow-y-auto transform  bg-white text-left shadow-xl transition-all flex flex-col gap-5 p-8"
//                         >
//                         <div className='flex-wrap flex'>
//                             <h1 className="text-2xl font-bold">
//                             Filter
//                             </h1>
//                             <button
//                             type='button'
//                             className='absolute top-2 right-2 z-10 w-fit pt-2 mt-5 bg-primary-blue-100 rounded-full'
//                             onClick={closeModal}
//                             >
//                             <Image
//                                 src="/close.svg"
//                                 alt="Close Button"
//                                 width={24}
//                                 height={24}
//                             />
//                             </button>
//                         </div>

//                         <div>
//                             <AccordionSection options={servicesOptions} label={'Services'}/>
//                             <AccordionSection options={onlineOptions} label={'Online status'}/>
//                             <AccordionSection options={saletimeOptions} label={'Sale time'}/>
//                             <AccordionSection options={saleOptions} label={'Sale history'}/>
//                         </div>

//                         <div className="container mx-auto">
//                             <h1 className="text-xl font-bold mb-4 w-full">Price range</h1>
//                             <RangeSliders min={250} max={500} onChange={handleRangeChange} />
//                         </div>

//                         <div>
//                             <AccordionSection options={soldamountOptions} label={'Sold amount'}/>
//                             <AccordionSection options={listingOptions} label={'Listing amount'}/>
//                             <div className="container mx-auto">
//                             <h1 className="text-xl font-bold mb-4 w-full">Fees</h1>
//                             <RangeSliders min={250} max={500} onChange={handleRangeChange} />
//                             </div>
//                             <AccordionSection options={ratingsOptions} label={'Ratings'}/>
//                         </div>
//                     </Dialog.Panel>
//                 </Transition.Child>
//                     </div>
//                 </div>
//             </Dialog>
                               
//         </Transition>
//     </>
//   )
// }

// export default CommonCard