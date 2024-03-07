'use client';

import axios from 'axios';
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { User } from '@prisma/client';
 

 
import Image from 'next/image';
import { toast } from 'react-hot-toast';


import dynamic from 'next/dynamic';
import { HiStar } from 'react-icons/hi';
import SettingsProfile from './SettingsProfile';
import Link from 'next/link';




interface ProfileProps{
    currentUser?:Partial<User>;
}

const Profile:React.FC<ProfileProps> = ({
    currentUser={}
}) => {

    const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const CldUploadButton = dynamic(() => import('next-cloudinary').then((module) => module.CldUploadButton), {
    ssr: false,
  });
  

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: {
      errors,
    }
  } = useForm<FieldValues>({
    defaultValues: {
      name: currentUser?.name,
      image: currentUser?.image
    }
  });

  const image = watch('image');

  const handleUpload = (result: any) => {
    setValue('image', result.info.secure_url, { 
      shouldValidate: true 
    });
  }

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios.post('/api/settings', data)
    .then(() => {
      router.refresh();
      
    })
    .catch(() => toast.error('Something went wrong!'))
    .finally(() => setIsLoading(false));
  }

  const menuItems = [
    'My details',
    'Profile',
    'Password',
    'Team',
    'Messages',
    'Plan',
    'Billing',
    'Email',
    'Notification',
    'Integrations',
    'API',
  ];

  const item2 = [
    'mydetails',
    'settingsprofile',
    'password',
    'team',
    'messages',
    'plan',
    'billing',
    'email',
    'notification',
    'integrations',
    'api',
  ];

  return (
    <div className=' '>
             
        <div className="space-y-12 bg-purple-300    mx-5 mt-5 overflow-hidden rounded-t-lg ">
          <div className="border-b border-gray-900/10 pb-12">
             
             

            <div className="mt-10 flex flex-col gap-y-8">
               
              <div>
                 
                <div className="mt-2 flex items-center gap-x-3 h-10">
                   
                   <div>
                 
                
              </div>
                </div>
              </div>
             
            </div>
          </div>
        </div>

        <div 
          className="space-y-12 bg-white  bg-gradient-to-tl mx-5 overflow-hidden   "
        >
           <div className="border-b border-gray-900/10 pb-12">
             
             

             <div className="mt-10 flex flex-col gap-y-8 h-10">
                
               <div>
                  
                 <div className="mt-2 flex items-center gap-x-3 ">

                 <div className='flex flex-1 justify-between mx-5'>
                         
                 <div className='ml-[140px]' style={{ transform: 'translateY(-40px)' }}>                        <span className=' text-lg font-bold text-purple-900'>
                 {currentUser?.name}
                 </span>
                    
                <div className='flex gap-2 mt-2'>
                     <div className='flex flex-1'>
                     <HiStar/>
                    <HiStar/>
                    <HiStar/>
                     </div>
                    <p>
                        reviews
                    </p>
                </div>
                        </div>
                        <div style={{ transform: 'translateY(-40px)' }}>
                            add company logo here
                        </div>
                
                 
                    </div>
                   <Image
                     width="100"
                     height="100" 
                     className="rounded-full absolute mb-[130px] ml-10 bg-gray-500 object-contain" 
                     src={image || currentUser?.image || '/images/placeholder.jpg'}
                     alt="Avatar"
                   />
                    

               {/* {currentUser?.role}
                 {currentUser?.listing}
                 {currentUser?.email}
                 {currentUser?.address}
                 {currentUser?.contactNumber}
                 
                 {currentUser?.isCompany}
                 {currentUser?.isIndividual}
                 {currentUser?.withFile} */}
                 </div>
               </div>
             
              
             </div>

            
           </div>
           <div className='flex flex-1 justify-start gap-10 items-center mb-5 pb-5 ml-10'>
      {menuItems.map((item, index) => (
         <Link key={index} href={`/profile/${item2[index]}`}>
            <p
          key={index}
          className='text-lg text-gray-500 font-semibold hover:text-purple-800 cursor-pointer'
        >
          {item}
        </p>
        </Link>
      
      ))}
    </div>
           
        </div>
       <div className="space-y-12 bg-white  h-full  mx-5 mt-5 overflow-hidden rounded-t-lg ">
         {/* <SettingsProfile/> */}
       </div>

    </div>
  )
}

export default Profile