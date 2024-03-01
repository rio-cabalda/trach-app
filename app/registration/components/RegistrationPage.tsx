'use client';

import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import InputGroup from 'react-bootstrap/InputGroup';


const RegistrationPage: React.FC = () => {
  const [name, setName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [registrationType, setRegistrationType] = useState('');
  const [activeTab, setActiveTab] = useState('name');

  const switchTab = (tab: string) => {
    setActiveTab(tab);
  };

  const switchToPreviousTab = () => {
    // Define the order of tabs
    const tabsOrder = ['name', 'contactNumber', 'address', 'email', 'registrationType'];
    const currentIndex = tabsOrder.indexOf(activeTab);
    const previousTab = tabsOrder[currentIndex - 1];
    if (previousTab) {
      switchTab(previousTab);
    }
  };

  const switchToNextTab = () => {
    // Define the order of tabs
    const tabsOrder = ['name', 'contactNumber', 'address', 'email', 'registrationType'];
    const currentIndex = tabsOrder.indexOf(activeTab);
    const nextTab = tabsOrder[currentIndex + 1];
    if (nextTab) {
      switchTab(nextTab);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/registration', {
        name,
        contactNumber,
        address,
        email,
        registrationType,
      });

      if (response.status === 200) {
        toast.success('Registration submitted successfully!');
        // Handle success, e.g., show a success message or redirect
      } else {
        toast.error('Failed to submit registration.');
        // Handle error, e.g., show an error message
      }
    } catch (error) {
      toast.error('An error occurred');
      // Handle error, e.g., show an error message
    }
  };

  const totalTabs = ['name', 'contactNumber', 'address', 'email', 'registrationType'];
  const totalPages = totalTabs.length;

  return (
    <div className=' p-10 shadow-lg'>
      
      <div className='bg-transparent px-4 py-8  sm:rounded-lg sm:px-10 p-0'>
        <form className='space-y-10 p-10 mx-10' onSubmit={handleSubmit}>
          <div className='flex    text-sm flex-1 gap-5'>
            {totalTabs.map((tab, index) => (
              <div
                key={tab}
                className={`cursor-pointer ${
                  activeTab === tab ? ' font-semibold text-purple-500 border-b-2 border-purple-500' : ' text-gray-500 text-sm'
                }`}
                onClick={() => switchTab(tab)}
              >
                {tab === 'name' ? '1' : ` ${index + 1}`}
              </div>
            ))}
          </div>

          <div className=''>
            {activeTab !== 'registrationType' ? (
              
              <label className='block mb-4'>
                  <span className='text-purple-700 '>
    {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}:
  </span>
                <input
                  type='text'
                  value={
                    activeTab === 'name'
                      ? name
                      : activeTab === 'contactNumber'
                      ? contactNumber
                      : activeTab === 'address'
                      ? address
                      : email
                  }
                  onChange={(e) =>
                    activeTab === 'name'
                      ? setName(e.target.value)
                      : activeTab === 'contactNumber'
                      ? setContactNumber(e.target.value)
                      : activeTab === 'address'
                      ? setAddress(e.target.value)
                      : setEmail(e.target.value)
                  }
                  className='border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:border-blue-500 mt-5 block'
                />
              </label>
            ) : (
              <div className='block'>
                <label className='block'>Registration Type:</label>
                <div className='flex items-center'>
                  <label className='flex items-center mr-4'>
                    Individual
                    <input
                      type='radio'
                      name='registrationType'
                      value='individual'
                      checked={registrationType === 'individual'}
                      onChange={() => setRegistrationType('individual')}
                      className='ml-2'
                    />
                  </label>
                  <label className='flex items-center'>
                    Group
                    <input
                      type='radio'
                      name='registrationType'
                      value='group'
                      checked={registrationType === 'group'}
                      onChange={() => setRegistrationType('group')}
                      className='ml-2'
                    />
                  </label>
                </div>
              </div>
            )}
          </div>

          <div className='flex flex-1 justify-between mt-5 w-full'>
            <button
              type='button'
              onClick={switchToPreviousTab}
              disabled={activeTab === 'name'}
              className='bg-purple-500 p-3 text-white rounded-md'
            >
              Previous
            </button>
            <button
              type={activeTab === 'registrationType' ? 'submit' : 'button'}
              onClick={switchToNextTab}
              className='bg-purple-500 p-3 text-white rounded-md'
            >
              {activeTab === 'registrationType' ? 'Submit' : 'Next'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;


