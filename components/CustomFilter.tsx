"use client";

import { Fragment, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Listbox, Transition } from "@headlessui/react";

import { CustomFilterProps } from "@/types";
import { updateSearchParams} from "@/utils";

export default function CustomFilter({ title, options }: CustomFilterProps) {
  const router = useRouter();
  const [selected, setSelected] = useState(options[0]); // State for storing the selected option

  // update the URL search parameters and navigate to the new URL
  const handleUpdateParams = (e: { title: string; value: string | number }) => {
    const newPathName = updateSearchParams(title, e.value.toString().toLowerCase());

    router.push(newPathName);
  };

  return (
    <div className='w-fit'>
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e); // Update the selected option in state
          handleUpdateParams(e); // Update the URL search parameters and navigate to the new URL
        }}
      >
        <div className=' flex relative w-fit z-10 border-l-2 border-gray-200 gap-1 pl-3'>
          
            <Image src={"/clock.svg"} alt={"time"} width={15} height={15} className=" pb-5"/>
          
          <div className="grid grid-rows-2">
          <div className="text-sm text-gray-500">
            {title}
          </div>
          {/* Button for the listbox */}
          <Listbox.Button className=' relative w-full min-w-[127px] flex justify-between items-center cursor-default  bg-white   text-right  sm:text-sm 
            
          '>
            <p className="font-bold text-purple-700 px-2">
              Select {title}
            </p>
            <span className='truncate text-[#2D0173] font-semibold flex gap-5 pr-2'> {selected.title}
             <Image src='/time.svg' width={5} height={20} className=' object-contain' alt='chevron_up-down' /></span>
           
          </Listbox.Button>
          </div>
          
          {/* Transition for displaying the options */}
          <Transition
            as={Fragment} // group multiple elements without introducing an additional DOM node i.e., <></>
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options className='custom-filter__options'>
              {/* Map over the options and display them as listbox options */}
              {options.map((option) => (
                <Listbox.Option
                  key={option.title}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 px-4 ${
                      active ? "bg-purple-500 text-white" : "text-gray-900"
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`} >
                        {option.title}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}