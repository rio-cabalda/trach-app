"use client";
import React from 'react'
import clsx from "clsx"
import {
    FieldErrors,
    FieldValues,
    UseFormRegister
} from 'react-hook-form';
interface InputProps{
    label:string;
    id: string;
    type?:string;
    required?: boolean;
    register: UseFormRegister<FieldValues>,
    errors:FieldErrors,
    disabled?: boolean;

}
const Input: React.FC<InputProps> = ({
     label,
     id,
     type,
     required,
     register,
     errors,
     disabled
}) => {
  return (
    <div>
        <label htmlFor={id} className='
            block
            text-sm
            font-medium
            leading-6
            text-gray-900
        '>
                <span className='font-bold text-purple-800'>
                {label}
                </span>
           
            <div className='mt-2'>
                <input 
                    id={id}
                    type={type}
                    autoComplete={id}
                    disabled={disabled}
                    {...register(id,{required})}
                    className={clsx(`
                        form-input
                        block
                        w-full
                        rounded-md
                        border-0
                        py-1.5text-gray-900
                        shadow-sm
                        ring-inset
                        ring-gray-300
                        ring-1
                        placeholder:text-gray-400
                        focus:ring-2 
                        focus:ring-purple-600
                        sm:text-sm
                        sm:leading-6
                       

                    `, errors[id]&& "focus:ring-rose-500", disabled && "opacity-50 cursor-default")}
                 />
            </div>
        </label>
    </div>
  )
}

export default Input