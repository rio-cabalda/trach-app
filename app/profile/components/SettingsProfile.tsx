'use client';

import axios from 'axios';
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { User } from '@prisma/client';
// import { CldUploadButton } from 'next-cloudinary';

import Input from '@/app/login/components/inputs/Input';
 
import Button from '@/app/login/components/Button';
import Image from 'next/image';
import { toast } from 'react-hot-toast';


import dynamic from 'next/dynamic';




interface ProfileProps{
    currentUser?:Partial<User>;

}

interface ShowPasswordState {
  current: boolean;
  newPassword: boolean;
  confirmPassword: boolean;
}


const SettingsProfile:React.FC<ProfileProps> = ({
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
      name: currentUser?.name || '',
      image: currentUser?.image || '',
      role: currentUser?.role || '',
      address: currentUser?.address || '',
      email: currentUser?.email || '',
      contactNumber: currentUser?.contactNumber || '',
      bio: currentUser?.bio || '',
    }
  });

  const image = watch('image');

  const handleUpload = (result: any) => {
    setValue('image', result.info.secure_url, { 
      shouldValidate: true 
    });
  }

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const requiredFields = ['name', 'email', 'contactNumber', 'role', 'bio'];
  const isEmptyField = requiredFields.some((field) => !data[field]);

  if (isEmptyField) {
    toast.error('Please fill in all required fields.');
    return;
  }
    setIsLoading(true);
    

    axios.post('/api/settings', data)
    .then(() => {
      router.refresh();
      
    })
    .catch(() => toast.error('Something went wrong!'))
    .finally(() => setIsLoading(false));
  }

  const inputFields = [
     
    { label: 'name', id: 'name' },
    { label: 'Website', id: 'website' },
    { label: 'Job title', id: 'role' },
    
  ];

  const inputFields2: { label: string; id: keyof ShowPasswordState }[] = [
    { label: 'Current password', id: 'current' },
    { label: 'New password', id: 'newPassword' },
    { label: 'Confirm password', id: 'confirmPassword' },
  ];

  const inputFields3  = [
    { label: 'Email address', id: 'email' },
    { label: 'Phone number', id: 'contactNumber' },
      
  ];

  const [showPasswords, setShowPasswords] = useState<ShowPasswordState>({
    current: false,
    newPassword: false,
    confirmPassword: false,
  });

  const togglePasswordVisibility = (field: keyof ShowPasswordState) => {
    setShowPasswords((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };
  return (
    <div className='p-5 pl-10'>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 
              className="
                text-lg 
                font-bold 
                leading-7 
                text-purple-900
              "
            >
              Profile
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              This will be displayed in your profile
            </p>

            <div className="mt-10 flex flex-col gap-y-8">
                <div className='flex flex-1  gap-10'>
                {inputFields.map(({ label, id }) => (
                  <Input
                    key={id}
                    disabled={isLoading}
                    label={label}
                    id={id}
                    
                    errors={errors}
                    register={register}
                  />
                ))}
                </div>


              {/* <Input
                disabled={isLoading}
                label="Name" 
                id="name" 
                errors={errors} 
                
                register={register}
              /> */}
              <div>
                <label 
                  htmlFor="photo" 
                  className="
                    block 
                    text-sm 
                    font-medium 
                    leading-6 
                    text-gray-900
                  "
                >
                  Photo
                </label>
                <div className="mt-2 flex items-center gap-x-3">
                  <Image
                    width="48"
                    height="48" 
                    className="rounded-full" 
                    src={image || currentUser?.image || '/images/placeholder.jpg'}
                    alt="Avatar"
                  />
                  <CldUploadButton 
                    options={{ maxFiles: 1 }} 
                    onUpload={handleUpload} 
                    uploadPreset="yepljdkc"
                  >
                    <Button
                      disabled={isLoading}
                      secondary
                      type="button"
                    >
                      Change
                    </Button>
                  </CldUploadButton>
                </div>
              </div>
            </div>
            <div className="mt-5">
          <div>
            <label
              htmlFor="bio"
              className="
                block 
                text-sm 
                font-bold 
                leading-6 
                text-purple-800
              "
            >
              Your Bio
            </label>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Add a short description about yourself.
            </p>
              <div className='flex  gap-8'>
                    {/* Font Dropdown */}
                    <div className="mt-2">
                      <label
                        htmlFor="font"
                        className="block text-sm font-medium leading-6 text-gray-900 w-[300px]"
                      >
                        Font
                      </label>
                      <select
                        id="font"
                        
                         
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                      >
                        {/* Add your font options here */}
                        <option value="Arial">Arial</option>
                        <option value="Helvetica">Helvetica</option>
                        {/* Add more font options as needed */}
                      </select>
                    </div>

                    {/* Weight Dropdown */}
                    <div className="mt-2">
                      <label
                        htmlFor="weight"
                        className="block text-sm font-medium leading-6 text-gray-900  w-[300px]"
                      >
                        Font Weight
                      </label>
                      <select
                        id="weight"
                        
                         
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                      >
                        {/* Add your weight options here */}
                        <option value="normal">Normal</option>
                        <option value="bold">Bold</option>
                        {/* Add more weight options as needed */}
                      </select>
                    </div>

                    {/* Size Dropdown */}
                    <div className="mt-2">
                      <label
                        htmlFor="size"
                        className="block text-sm font-medium leading-6 text-gray-900  w-[300px]"
                      >
                        Font Size
                      </label>
                      <select
                        id="size"
                        
                         
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                      >
                        {/* Add your size options here */}
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                        {/* Add more size options as needed */}
                      </select>
                    </div>
                    <div className="mt-2">
                       
                    </div>
               </div>
            {/* Bio Textarea */}
            <textarea
              id="bio"
              disabled={isLoading}
              className="
                mt-2 
                block 
                w-full 
                shadow-sm 
                focus:ring-indigo-500 
                focus:border-indigo-500 
                sm:text-sm 
                border-gray-100 
                rounded-md
              "
              
            />
            {errors.bio && typeof errors.bio === 'string' && (
              <p className="mt-2 text-sm text-red-500">{errors.bio}</p>
            )}
          </div>
          
          <div>
            <h2
              className="
                text-lg 
                font-bold 
                leading-7 
                text-purple-900
              "
            >
              Password
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              You can change your password
            </p>
            <div className='flex gap-10'>
              <div className='flex flex-1 gap-10'>
              {inputFields2.map(({ label, id }) => (
  <div key={id} className="relative">
    <label
      htmlFor={id}
      className="block text-sm font-medium leading-6 text-gray-900"
    >
      {label}
    </label>
    <div className="mt-1 flex rounded-md shadow-sm">
      <input
        type={showPasswords[id] ? 'text' : 'password'}
        id={id}
        {...register(id)}
        disabled={isLoading}
        className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300"
      />
      <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
        <button
          type="button"
          onClick={() => togglePasswordVisibility(id)}
          className="text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
        >
          {showPasswords[id] ? 'Hide' : 'Show'}
        </button>
      </div>
    </div>
    {errors[id] && typeof errors[id] === 'string' && (
      <p className="mt-2 text-sm text-red-500">error1 </p>
    )}
    {errors[id] && typeof errors[id] !== 'string' && (
      <p className="mt-2 text-sm text-red-500"> error2</p>
    )}
  </div>
))}
     
              </div>
              
            </div>
          </div>
        </div>

        <div className='mt-5'>
     <h2 
              className="
                text-lg 
                font-bold 
                leading-7 
                text-purple-900
              "
            >
              Alternative contacts
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Your alternative contacts
            </p>
             
            <div className='flex flex-1  gap-10 mt-10 mb-10'>
                {inputFields3.map(({ label, id }) => (
                  <Input
                    key={id}
                    disabled={isLoading}
                    label={label}
                    id={id}
                    
                    errors={errors}
                    register={register}
                  />
                ))}
                </div>
             
     </div>

          </div>
           
        </div>

        <div 
          className="
            mt-6 
            flex 
            items-center 
            justify-end 
            gap-x-6
          "
        >
          <Button 
            disabled={isLoading}
            secondary 
             
          >
            Cancel
          </Button>
          <Button 
            disabled={isLoading}
            type="submit"
          >
            Save
          </Button>
        </div>
      </form>

    </div>
  )
}

export default SettingsProfile