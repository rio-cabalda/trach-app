'use client';
import React, { useEffect } from 'react'
import  {useState, useCallback} from 'react'
import { FieldValues, useForm, SubmitHandler} from 'react-hook-form';
import Input from './inputs/Input';
import Button from './Button';
import AuthSocialButton from './AuthSocialButton';
import {BsGithub, BsGoogle} from 'react-icons/bs'
import axios from 'axios';
import {toast} from 'react-hot-toast';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
 import Image from 'next/image';
import { Checkbox, FileInput, Label,Radio } from 'flowbite-react';
import Modal from '@/components/modals/Modal';
import Link from 'next/link';



type Variant = 'LOGIN' | 'REGISTER';
type InputType =
  | 'name'
  | 'address'
  | 'email'
  | 'contact_number'
  | 'queryone'
  | 'company'
  | 'lettings'
  | 'portals'
  | 'redress'
  | 'password'
  | 'outro';

const AuthForm = () => {
  const session = useSession();
  const router = useRouter();
  const [variant, setVariant] = useState<Variant>('LOGIN');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (session?.status === 'authenticated') {
      router.push('/users');
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
      contact_number: '',
      queryone: '',
      company: '',
      lettings: '',
      portals: '',
      redress: '',
      password: '',
      outro: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
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
            router.push('/users');
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
          router.push('/users');
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
      'contact_number',
      'queryone',
      'company',
      'lettings',
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
      'contact_number',
      'queryone',
      'company',
      'lettings',
      'portals',
      'redress',
      'password',
      'outro',
    ];
    const currentIndex = tabsOrder.indexOf(activeTab);

    if (activeTab === 'queryone') {
      const radioElement = document.querySelector<HTMLInputElement>('input[name="status"]:checked');
      const isCompanySelected = radioElement !== null && radioElement.value === 'coy';
      const nextTab = isCompanySelected ? 'outro' : tabsOrder[currentIndex + 1];
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

const totalTabs: InputType[] = ['name', 'address', 'email', 'contact_number', 'queryone', 'company', 'lettings', 'portals', 'redress', 'password', 'outro'];

const totalPages = totalTabs.length;

const [isOpen, setOpenModal] = useState(false);

const [onClose, setOnClose] = useState(false);

const openModal = () => setOpenModal(true);






return (
    <div className='lg:mt-5 sm:mt-0 sm:mx-auto sm:w-full sm:max-w-md lg:gap-5 sm:gap-2 relative justify-start '>
      
      
     

      {/* <Modal isOpen={isOpen} onClose={() => setOpenModal(false)}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 
              className="
                text-base 
                font-semibold 
                leading-7 
                text-gray-900
              "
            >
              Profile
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Edit your public information.
            </p>

             <div className="mt-10 flex flex-col gap-y-8">
              
             <div className='flex  mb-10 text-sm flex-1 gap-5'>
            {totalTabs.map((tab,index) => (
              <div
                key={index}
                className={`cursor-pointer ${
                  activeTab === tab ? ' font-semibold text-purple-500 border-b-2 border-purple-500' : ' text-gray-500 text-sm'
                }`}
                onClick={() => switchTab(tab)}
              >
                {tab === 'intro' ? '' : `     ${totalTabs.indexOf(tab)}`}
              </div>
            ))}
          </div>


             {variant === 'REGISTER' && (
              <div>

                
                <div>
                  {activeTab === 'intro' && (
                    <div>
                      <Image src={"/hero.png"} alt='' width={100} height={100} />
                      <p>Great! We will send you a confirmation email once we have scanned your documents.</p>
                    </div>
                  )}
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
                  {activeTab === 'contact_number' && (
                    <Input label='Contact Number' register={register} id={'contact_number'} errors={errors} type='contact_number' />
                  )}
                  {activeTab === 'queryone' && (
                    <div>
                      <fieldset className='flex max-w-md flex-col gap-4'>
                        <legend className='mb-4 mx-auto flex justify-center text-lg text-purple-700 my-5'>
                          Are you an individual or a company?
                        </legend>
                        <div className='flex items-center gap-2'>
                          <Radio id='individual' name='status' value='individual' defaultChecked />
                          <Label htmlFor='individual'>Individual</Label>
                        </div>
                        <div className='flex items-center gap-2'>
                          <Radio id='coy' name='status' value='coy' />
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
                  {activeTab === 'lettings' && (
                    <div>
                      <fieldset className='flex max-w-md flex-col gap-4'>
                        <legend className='mb-4 mx-auto flex justify-center text-lg text-purple-700 my-5'>
                          Do you buy or sell?
                        </legend>
                        <div className='flex items-center gap-2'>
                          <Radio id='buy' name='lettings' value='buy' defaultChecked />
                          <Label htmlFor='buy'>Buy</Label>
                        </div>
                        <div className='flex items-center gap-2'>
                          <Radio id='sell' name='lettings' value='sell' />
                          <Label htmlFor='sell'>Sell</Label>
                        </div>
                        <div className='flex items-center gap-2'>
                          <Radio id='both' name='lettings' value='sebothll' />
                          <Label htmlFor='both'>Buy and Sell</Label>
                        </div>
                      </fieldset>
                      <fieldset className='flex max-w-md flex-col gap-4'>
                        <legend className='mb-4 mx-auto flex justify-center text-lg text-purple-700 my-5'>
                          Are your properties Full Managed or Part Managed?
                        </legend>
                        <div className='flex items-center gap-2'>
                          <Radio id='ful' name='properties' value='full' defaultChecked />
                          <Label htmlFor='full'>Full Managed</Label>
                        </div>
                        <div className='flex items-center gap-2'>
                          <Radio id='part' name='properties' value='part' />
                          <Label htmlFor='part'>Part Managed</Label>
                        </div>
                        <div className='flex items-center gap-2'>
                          <Radio id='both' name='properties' value='both' />
                          <Label htmlFor='both'>Both</Label>
                        </div>
                      </fieldset>
                      <Input label='Listing lettings only' register={register} id={'listing'} errors={errors} type='listing' />
                    </div>
                  )}
                  {activeTab === 'portals' && (
                    <div>
                      <fieldset className='flex max-w-md flex-col gap-4'>
                        <legend className='mb-4 mx-auto flex justify-center text-lg text-purple-700 my-5'>
                          Do you buy or sell?
                        </legend>
                        <div className='flex items-center gap-2'>
                          <Radio id='zoopla' name='portals' value='zoopla' defaultChecked />
                          <Label htmlFor='zoopla'>Zoopla</Label>
                        </div>
                        <div className='flex items-center gap-2'>
                          <Radio id='rm' name='portals' value='rm' />
                          <Label htmlFor='rm'>Rightmove</Label>
                        </div>
                        <div className='flex items-center gap-2'>
                          <Radio id='Onthemove' name='portals' value='Onthemove' />
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
                      <FileInput id='file' helperText='Please upload a pdf file' />
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
                      <Image src={"/hero.png"} alt='' width={100} height={100} />
                      <p>Great! We will send you a confirmation email once we have scanned your documents.</p>
                    </div>
                  )}
                </div>
                <div className='flex justify-between mt-5 overflow-x-auto'>
            <Button type='button' onClick={switchToPreviousTab} disabled={activeTab === 'intro'}>
              Previous
            </Button>
            <Button type={activeTab === 'outro' ? 'submit' : 'button'} onClick={switchToNextTab}>
              {activeTab === 'outro' ? 'Submit' : 'Next'}
            </Button>
            
          </div>
              </div>
            )}







             
               
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
            type="submit"
          >
            Save
          </Button>
        </div>
      </form>
    </Modal> */}





     

      <div className='bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10 p-0 '>
        <form className='space-y-10 ' onSubmit={handleSubmit(onSubmit)}>
          {variant === 'LOGIN' && (
            <div>
              <h2 className='text-start lg:text-3xl font-extrabold tracking-tight text-purple-900 sm:text-xl mb-5'>
                Login to your Account
              </h2>
            </div>
          )}
















 






{/* <div className='flex  mb-10 text-sm flex-1 gap-5'>
            {totalTabs.map((tab) => (
              <div
                key={tab}
                className={`cursor-pointer ${
                  activeTab === tab ? ' font-semibold text-purple-500 border-b-2 border-purple-500' : ' text-gray-500 text-sm'
                }`}
                onClick={() => switchTab(tab)}
              >
                {tab === 'intro' ? '' : `     ${totalTabs.indexOf(tab)}`}
              </div>
            ))}
          </div> */}



<div className='space-y-6'>
            {variant === 'REGISTER' && (
              <div>
                <div>
                  {activeTab === 'name' && (
                    <div>
                      <Image src={"/hero.png"} alt='' width={100} height={100} />
                      <p>Great! We will send you a confirmation email once we have scanned your documents.</p>
                    </div>
                  )}
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
                  {activeTab === 'contact_number' && (
                    <Input label='Contact Number' register={register} id={'contact_number'} errors={errors} type='contact_number' />
                  )}
                  {activeTab === 'queryone' && (
                    <div>
                      <fieldset className='flex max-w-md flex-col gap-4'>
                        <legend className='mb-4 mx-auto flex justify-center text-lg text-purple-700 my-5'>
                          Are you an individual or a company?
                        </legend>
                        <div className='flex items-center gap-2'>
                          <Radio id='individual' name='status' value='individual' defaultChecked />
                          <Label htmlFor='individual'>Individual</Label>
                        </div>
                        <div className='flex items-center gap-2'>
                          <Radio id='coy' name='status' value='coy' />
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
                  {activeTab === 'lettings' && (
                    <div>
                      <fieldset className='flex max-w-md flex-col gap-4'>
                        <legend className='mb-4 mx-auto flex justify-center text-lg text-purple-700 my-5'>
                          Do you buy or sell?
                        </legend>
                        <div className='flex items-center gap-2'>
                          <Radio id='buy' name='lettings' value='buy' defaultChecked />
                          <Label htmlFor='buy'>Buy</Label>
                        </div>
                        <div className='flex items-center gap-2'>
                          <Radio id='sell' name='lettings' value='sell' />
                          <Label htmlFor='sell'>Sell</Label>
                        </div>
                        <div className='flex items-center gap-2'>
                          <Radio id='both' name='lettings' value='sebothll' />
                          <Label htmlFor='both'>Buy and Sell</Label>
                        </div>
                      </fieldset>
                      <fieldset className='flex max-w-md flex-col gap-4'>
                        <legend className='mb-4 mx-auto flex justify-center text-lg text-purple-700 my-5'>
                          Are your properties Full Managed or Part Managed?
                        </legend>
                        <div className='flex items-center gap-2'>
                          <Radio id='ful' name='properties' value='full' defaultChecked />
                          <Label htmlFor='full'>Full Managed</Label>
                        </div>
                        <div className='flex items-center gap-2'>
                          <Radio id='part' name='properties' value='part' />
                          <Label htmlFor='part'>Part Managed</Label>
                        </div>
                        <div className='flex items-center gap-2'>
                          <Radio id='both' name='properties' value='both' />
                          <Label htmlFor='both'>Both</Label>
                        </div>
                      </fieldset>
                      <Input label='Listing lettings only' register={register} id={'listing'} errors={errors} type='listing' />
                    </div>
                  )}
                  {activeTab === 'portals' && (
                    <div>
                      <fieldset className='flex max-w-md flex-col gap-4'>
                        <legend className='mb-4 mx-auto flex justify-center text-lg text-purple-700 my-5'>
                          Do you buy or sell?
                        </legend>
                        <div className='flex items-center gap-2'>
                          <Radio id='zoopla' name='portals' value='zoopla' defaultChecked />
                          <Label htmlFor='zoopla'>Zoopla</Label>
                        </div>
                        <div className='flex items-center gap-2'>
                          <Radio id='rm' name='portals' value='rm' />
                          <Label htmlFor='rm'>Rightmove</Label>
                        </div>
                        <div className='flex items-center gap-2'>
                          <Radio id='Onthemove' name='portals' value='Onthemove' />
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
                      <FileInput id='file' helperText='Please upload a pdf file' />
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
                      <Image src={"/hero.png"} alt='' width={100} height={100} />
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