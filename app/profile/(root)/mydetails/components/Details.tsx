'use client';

  
import { FieldValues, useForm } from 'react-hook-form';
import { User } from '@prisma/client';
import Image from 'next/image';
import { HiCloud } from 'react-icons/hi2';

interface DetailsProps {
  currentUser?: Partial<User>;
}

const Details: React.FC<DetailsProps> = ({
  currentUser = {}
}) => {
  const {
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

  return (
    <div className=''>
      <div className=" mx-5  rounded-t-lg ">
        <div className="border-b border-gray-900/10 pb-12 "></div>
      </div>
      <div className="space-y-12 bg-white bg-gradient-to-tl mx-5 ">
        <div className="border-b border-gray-900/10 pb-12 ">
          <div className="mt-10 flex flex-col gap-y-8 h-full">
            <div>
              <Image
                width="100"
                height="100"
                className=" "
                src={image || currentUser?.image || '/images/placeholder.jpg'}
                alt="Avatar"
              />
              <div className='ml-[140px] flex flex-col border-b border-gray-900/10 pb-12 ' style={{ transform: 'translateY(-40px)' }}>
                <span className=' text-lg font-bold text-purple-900'>
                  {currentUser?.name}
                </span>
                <span className=' text-lg font-bold text-purple-900'>
                  {currentUser?.role}
                </span>
                <div>
                {currentUser?.website}
                 {currentUser?.role}
                 {currentUser?.listing}
                 {currentUser?.email}
                 {currentUser?.address}
                 {currentUser?.contactNumber}
                 
                 {currentUser?.isCompany}
                 {currentUser?.isIndividual}
                 {currentUser?.withFile}
                </div>
              </div>
              
            </div>
            <div className='flex flex-col border-b border-gray-900/10 pb-12 mx-5 gap-5 '>
                <h2 className='text-lg font-bold text-purple-800'>
                    About me
                </h2>
                <span className='border border-gray-200  bg-slate-500 h-[200px] rounded-md p-5 text-white w-[80%]'>
                 {currentUser?.bio}
                </span>
           
              
              </div>
              <div className='flex flex-col border-b border-gray-900/10 pb-12 mx-5 gap-5 '>
                <h2 className='text-lg font-bold text-purple-800'>
                    Services
                </h2>
                <ul>
                {currentUser?.services?.map((service, index) => (
                  <li key={index} className='ml-5 flex gap-5'>
                    <HiCloud className='mt-1'/>
                    {service}
                  </li>
                ))}
              </ul>
           
              
              </div>
            <div className='flex gap-8 mx-auto border-b border-gray-900/10 pb-12 '>
             <Image
                width="500"
                height="500"
                className="bg-purple-300 rounded-lg"
                src={image || currentUser?.image || '/images/placeholder.jpg'}
                alt="Avatar"
              />
               <Image
                width="500"
                height="500"
                className="bg-purple-300 rounded-lg"
                src={image || currentUser?.image || '/images/placeholder.jpg'}
                alt="Avatar"
              />
               <Image
                width="500"
                height="500"
                className="bg-purple-300 rounded-lg"
                src={image || currentUser?.image || '/images/placeholder.jpg'}
                alt="Avatar"
              />
              
             </div>
             <div className='flex gap-8 mx-auto border-b border-gray-900/10 pb-12 '>
              
              
             </div>

          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Details;
