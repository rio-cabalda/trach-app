'use client';
import React, { useEffect, useState, useCallback } from 'react';
import { FieldValues, useForm, SubmitHandler } from 'react-hook-form';
import Input from './inputs/Input';
import Button from './Button';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Checkbox, FileInput, Label, Radio } from 'flowbite-react';

type Variant = 'LOGIN' | 'REGISTER';
 
type InputType =
| 'name'
| 'address'
| 'email'
| 'contactNumber'
| 'queryone'
| 'company'
| 'role'
| 'portals'
| 'redress'
| 'password'
| 'outro' 
| 'isIndividual'
| 'isCompany'
| 'withFile'
| 'listing';



const AuthForm = () => {
  const session = useSession();
  const router = useRouter();
  const [variant, setVariant] = useState<Variant>('LOGIN');
  const [isLoading, setIsLoading] = useState(false);
  const [role, setRole] = useState('');
  const [isIndividual, setIsIndividual] = useState<boolean>(true); // Initialize with a default value
  const [isCompany, setIsCompany] = useState<boolean>(false); // Initialize with a default value
  const [withFile, setWithFile] = useState<boolean>(false); // Initialize with a default value
  const [listing, setListing] = useState<string>('none'); // Initialize with a default value

  const handleListingChange = (value: string) => {
    setListing(value);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Check if files are present
    const hasFiles = event.target.files && event.target.files.length > 0;
    setWithFile(Boolean(hasFiles)); // Ensure it's either true or false
  };


  const handleStatusChange = (value: string) => {
    if (value === 'individual') {
      setIsIndividual(true);
      setIsCompany(false);
    } else if (value === 'coy') {
      setIsIndividual(false);
      setIsCompany(true);
    }
  };

  useEffect(() => {
    if (session?.status === 'authenticated') {
      router.push('/profile');
    }
  }, [session?.status, router]);

  const toggleVariant = useCallback(() => {
    setVariant((prevVariant) => (prevVariant === 'LOGIN' ? 'REGISTER' : 'LOGIN'));
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      address: '',
      email: '',
      contactNumber: '',
      queryone: '',
      company: '',
      isIndividual:"",
      isCompany:"",
      listing:"",
      withFile:"",
      role: '',
      portals: '',
      redress: '',
      password: '',
      outro: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    data.role = role;
    data.isIndividual = isIndividual;
    data.isCompany = isCompany;
    data.withFile = withFile;
    data.listing = listing;
   

    if (variant === 'REGISTER') {
      axios
        .post('/api/register', data)
        .then(() => signIn('credentials', data))
        .catch(() => toast.error('Something went wrong!'))
        .finally(() => setIsLoading(false));
    }
    if (variant === 'LOGIN') {
      signIn('credentials', {
        ...data,
        redirect: false,
      })
        .then((callback) => {
          if (callback?.error) {
            toast.error('Invalid credentials');
          }
          if (callback?.ok && !callback?.error) {
            toast.success('Successfully logged in!');
            router.push('/profile');
          }
        })
        .finally(() => setIsLoading(false));
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);
    signIn(action, { redirect: false })
      .then((callback) => {
        if (callback?.error) {
          toast.error('Invalid Credentials');
        }
        if (callback?.ok && !callback?.error) {
          toast.success('Logged in');
          router.push('/profile');
        }
      })
      .finally(() => setIsLoading(false));
  };

  const [activeTab, setActiveTab] = useState<InputType>('name');

  const switchTab = (tab: InputType) => {
    setActiveTab(tab);
  };

  const switchToPreviousTab = () => {
    const tabsOrder: InputType[] = [
      'name',
      'address',
      'email',
      'contactNumber',
      'queryone',
      'company',
      'role',
      'portals',
      'redress',
      'password',
      'outro',
    ];
    const currentIndex = tabsOrder.indexOf(activeTab);
    const previousTab = tabsOrder[currentIndex - 1];
    if (previousTab) {
      switchTab(previousTab);
    }
  };

  const switchToNextTab = () => {
    const tabsOrder: InputType[] = [
      'name',
      'address',
      'email',
      'contactNumber',
      'queryone',
      'company',
      'role',
      'portals',
      'redress',
      'password',
      'outro',
    ];
    const currentIndex = tabsOrder.indexOf(activeTab);

    if (activeTab === 'name') {
      const radioElement = document.querySelector<HTMLInputElement>('input[name="status"]:checked');
      const isCompanySelected = radioElement !== null && radioElement.value === 'individual';
      const nextTab = isCompanySelected ? 'redress' : tabsOrder[currentIndex + 1];
      if (nextTab) {
        switchTab(nextTab);
      }
    } else {
      const nextTab = tabsOrder[currentIndex + 1];
      if (nextTab) {
        switchTab(nextTab);
      }
    }
  };

  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page: number) => setCurrentPage(page);

  const totalTabs: InputType[] = [
    'name',
    'address',
    'email',
    'contactNumber',
    'queryone',
    'company',
    'role',
    'portals',
    'redress',
    'password',
    'outro',

  ];

  const totalPages = totalTabs.length;

  const [isOpen, setOpenModal] = useState(false);
  const [onClose, setOnClose] = useState(false);
  const openModal = () => setOpenModal(true);
  const handleRoleChange = (value: string) => {
    setRole(value);
  };



  
return (
    <div className='lg:mt-5 sm:mt-0 sm:mx-auto sm:w-full sm:max-w-md lg:gap-5 sm:gap-2 relative justify-start '>
      
      
     

     





     

      <div className='bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10 p-0 '>
        <form className='space-y-10 ' onSubmit={handleSubmit(onSubmit)}>
          {variant === 'LOGIN' && (
            <div>
              <h2 className='text-start lg:text-3xl font-extrabold tracking-tight text-purple-900 sm:text-xl mb-5'>
                Login to your Account
              </h2>
            </div>
          )}
















 










<div className='space-y-6'>
            {variant === 'REGISTER' && (
              <div>
                <div>
                <div className='flex  mb-10 text-sm flex-1 gap-5'>
            {totalTabs.map((tab) => (
              <div
                key={tab}
                className={`cursor-pointer ${
                  activeTab === tab ? ' font-semibold text-purple-500 border-b-2 border-purple-500' : ' text-gray-500 text-sm'
                }`}
                onClick={() => switchTab(tab)}
              >
                {tab === 'name' ? '' : `     ${totalTabs.indexOf(tab)}`}
              </div>
            ))}
          </div>
                   
                  {activeTab === 'name' && (
                    <div>
                      <p className='mx-auto flex justify-center text-lg text-purple-700 my-5'>
                        What do you like us to call you?
                      </p>
                      <Input label='Name' register={register} id={'name'} errors={errors} type='name' />
                    </div>
                  )}
                  {activeTab === 'address' && (
                    <div>
                      <p className='mx-auto flex justify-center text-lg text-purple-700 my-5'>
                        Where are you located at?
                      </p>
                      <Input label='' register={register} id={'address'} errors={errors} type='address' />
                    </div>
                  )}
                  {activeTab === 'email' && <Input label='Email address' register={register} id={'email'} errors={errors} type='email' />}
                  {activeTab === 'contactNumber' && (
                    <Input label='Contact Number' register={register} id={'contactNumber'} errors={errors} type='contactNumber' />
                  )}
                  {activeTab === 'queryone' && (
                    <div>
                         <fieldset className='flex max-w-md flex-col gap-4'>
        <legend className='mb-4 mx-auto flex justify-center text-lg text-purple-700 my-5'>
          Are you an individual or a company?
        </legend>
        <div className='flex items-center gap-2'>
          <Radio
            id='individual'
            name='status'
            value='individual'
            checked={isIndividual}
            onChange={() => handleStatusChange('individual')}
          />
          <Label htmlFor='individual'>Individual</Label>
        </div>
        <div className='flex items-center gap-2'>
          <Radio
            id='coy'
            name='status'
            value='coy'
            checked={isCompany}
            onChange={() => handleStatusChange('coy')}
          />
          <Label htmlFor='coy'>Company</Label>
        </div>
      </fieldset>
                    </div>
                  )}
                  {activeTab === 'company' && (
                    <div>
                      <Input label='Company name' register={register} id={'company_name'} errors={errors} type='company_name' />
                      <Input label='Company number' register={register} id={'company_number'} errors={errors} type='company_number' />
                      <Input label='Company address' register={register} id={'company_address'} errors={errors} type='company_address' />
                      <Input label='Company Director' register={register} id={'company_director'} errors={errors} type='company_director' />
                    </div>
                  )}
                  {activeTab === 'role' && (
                    <div>
                                
                          <label className='flex items-center mr-4'>
                     
                    <input
                      type='radio'
                      name='role'
                      value='seller'
                      checked={role === 'seller'}
                      onChange={() => handleRoleChange('seller')}
                      className='ml-2'
                    />
                    <span className='mx-2'>
                    Seller
                    </span>
                  </label>
                  <label className='flex items-center'>
                    
                    <input
                      type='radio'
                      name='role'
                      value='buyer'
                      checked={role === 'buyer'}
                      onChange={() => handleRoleChange('buyer')}
                      className='ml-2'
                    />
                    <span className='mx-2'>
                    Buyer
                    </span>
                    
                  </label>
                  
                      
                    </div>
                  )}
                  {activeTab === 'portals' && (
                       <div>
                       <fieldset className='flex max-w-md flex-col gap-4'>
                         <legend className='mb-4 mx-auto flex justify-center text-lg text-purple-700 my-5'>
                           Where are you listed on?
                         </legend>
                         <div className='flex items-center gap-2'>
                           <Radio
                             id='zoopla'
                             name='portals'
                             value='zoopla'
                             defaultChecked={listing === 'zoopla'}
                             onChange={() => handleListingChange('zoopla')}
                           />
                           <Label htmlFor='zoopla'>Zoopla</Label>
                         </div>
                         <div className='flex items-center gap-2'>
                           <Radio
                             id='rm'
                             name='portals'
                             value='rm'
                             defaultChecked={listing === 'rm'}
                             onChange={() => handleListingChange('rm')}
                           />
                           <Label htmlFor='rm'>Rightmove</Label>
                         </div>
                         <div className='flex items-center gap-2'>
                           <Radio
                             id='Onthemove'
                             name='portals'
                             value='Onthemove'
                             defaultChecked={listing === 'Onthemove'}
                             onChange={() => handleListingChange('Onthemove')}
                           />
                           <Label htmlFor='Onthemove'>Buy and Sell</Label>
                         </div>
                       </fieldset>
                     </div>
                  )}
                  {activeTab === 'redress' && (
                       <div id='fileUpload' className='max-w-md'>
                       <div className='mb-2 block'>
                         <Label htmlFor='file' value='Upload Proof of Redress Scheme / Property Ombudsmen Certificate' />
                       </div>
                       <FileInput
  id='file'
  helperText='Please upload a pdf file'
  onChange={handleFileUpload}
  multiple  // Add this line
/>
                       <Input
                         label='Also enter redress scheme/property ombudsmen number'
                         register={register}
                         id={'scheme'}
                         errors={errors}
                         type='scheme'
                       />
                     </div>
                  )}
                  {activeTab === 'password' && (
                    <div>
                      <p>Please confirm the details you have entered by typing your password and press next</p>
                      <Input label='Password' register={register} id={'password'} errors={errors} type='password' />
                    </div>
                  )}
                  {activeTab === 'outro' && (
                    <div>
                       
                      <p>Great! We will send you a confirmation email once we have scanned your documents.</p>
                    </div>
                  )}
                </div>
                <div className='flex justify-between mt-5 overflow-x-auto'>
            <Button type='button' onClick={switchToPreviousTab} disabled={activeTab === 'name'}>
              Previous
            </Button>
            <Button type={activeTab === 'outro' ? 'submit' : 'button'} onClick={switchToNextTab}>
              {activeTab === 'outro' ? 'Submit' : 'Next'}
            </Button>
            
          </div>
              </div>
            )}

            
          </div>





          {variant === 'LOGIN' && (
            <div className=''>
              <Input label='Email address' register={register} id={'email'} errors={errors} type='email' />
              <Input label='Password' register={register} id={'password'} errors={errors} type='password' />
              <div className='my-5'>
                <Button disabled={isLoading} fullWidth type='submit'>
                  {variant === 'LOGIN' ? 'Sign-in' : 'Register'}
                </Button>
              </div>
              <div className='flex items-center gap-2'>
                <Checkbox id='accept' color={'purple'} />
                <Label htmlFor='accept' className='flex'>
                  Remember me
                </Label>
              </div>
            </div>
          )}
        </form>

        {/* {variant === 'LOGIN' && (
          <div className='lg:mt-10 sm:mt-0'>
            <div className='relative'>
              <div className='absolute inset-0 flex items-center'>
                <div className='w-full border-t border-gray-300' />
              </div>
              <div className='relative flex justify-center text-sm'>
                <span className='bg-white px-2 text-gray-500'>Or continue with</span>
              </div>
            </div>
            <div className=' flex gap-2 lg:my-10 sm:my-2'>
              <AuthSocialButton icon={BsGithub} onClick={() => socialAction('github')} />
              <AuthSocialButton icon={BsGoogle} onClick={() => socialAction('google')} />
            </div>
          </div>
        )} */}

        <div className='flex gap-2 justify-start text-sm mt-10 px-2 text-gray-500'>
          <div className=''>
            {variant === 'LOGIN' ? 'Need help?' : 'Already registered?'}
          </div>
           <div
            onClick={() => {
              toggleVariant();
              setOpenModal(false);
            }}
            className='underline cursor-pointer font-semibold text-purple-500'
          >
           {variant === 'LOGIN' ? 'Create an Account' : 'Login'}
           </div> 

           
          {/* <div className='underline cursor-pointer font-semibold text-purple-500'  onClick={() => {
              toggleVariant();
              setOpenModal(true);
            }}> */}

              {/* <Link href={'/registration'}>
            <div className='underline cursor-pointer font-semibold text-purple-500'>
              Register Now!
             </div>
             </Link> */}
         
          
        </div>
      </div>
    </div>
  );
};

export default AuthForm;