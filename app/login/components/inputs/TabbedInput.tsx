// TabbedInputs.tsx

import React, { useState } from 'react';
import Input from './Input';


type InputType = 'name' | 'email' | 'password';

interface TabbedInputsProps {
    activeTab: InputType;
    switchTab: (tab: InputType) => void;
    register: any; // Replace with the actual type for register
    errors: any;   // Replace with the actual type for errors
}

const TabbedInputs: React.FC<TabbedInputsProps> = ({ activeTab, switchTab, register, errors }) => {
    return (
        <div>
            <div className="flex justify-between items-center mb-5">
                <div
                    className={`cursor-pointer ${activeTab === 'name' ? 'font-semibold text-purple-500' : 'text-gray-500'}`}
                    onClick={() => switchTab('name')}
                >
                    Name
                </div>
                <div
                    className={`cursor-pointer ${activeTab === 'email' ? 'font-semibold text-purple-500' : 'text-gray-500'}`}
                    onClick={() => switchTab('email')}
                >
                    Email
                </div>
                <div
                    className={`cursor-pointer ${activeTab === 'password' ? 'font-semibold text-purple-500' : 'text-gray-500'}`}
                    onClick={() => switchTab('password')}
                >
                    Password
                </div>
            </div>

            <div>
                {activeTab === 'name' && (
                    <Input label='Name' register={register} id={'name'} errors={errors} type='name'/>
                )}
                {activeTab === 'email' && (
                    <Input label='Email address' register={register} id={'email'} errors={errors} type='email'/>
                )}
                {activeTab === 'password' && (
                    <Input label='Password' register={register} id={'password'} errors={errors} type='password'/>
                )}
            </div>
        </div>
    );
};

export default TabbedInputs;
