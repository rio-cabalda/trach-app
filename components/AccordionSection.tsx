// AccordionSection.tsx
import React, { useState } from 'react';
import Image from 'next/image';
import { updateSearchParams } from '@/utils';
import { useRouter } from 'next/navigation';

interface CheckboxOption {
  label: string;
  value: string;
}

interface AccordionSectionProps {
  options: CheckboxOption[];
  label: string;
}

const AccordionSection: React.FC<AccordionSectionProps> = ({ options, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const [selectedOptions, setSelectedOptions] = useState<CheckboxOption[]>([]); // State for storing the selected options

  // Update the URL search parameters and navigate to the new URL
  const handleUpdateParams = () => {
    const values = selectedOptions.map((option) => option.value.toLowerCase());
    const newPathName = updateSearchParams(label, values.join(','));
    router.push(newPathName);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxChange = (value: string) => {
    const selectedOption = options.find((option) => option.value === value);

    if (selectedOption) {
      const isAlreadySelected = selectedOptions.some((option) => option.value === selectedOption.value);

      if (isAlreadySelected) {
        setSelectedOptions(selectedOptions.filter((option) => option.value !== selectedOption.value));
      } else {
        setSelectedOptions([...selectedOptions, selectedOption]);
      }

      // Update the URL search parameters and navigate to the new URL
      handleUpdateParams();
    }
  };

  return (
    <div className='my-10'>
       <div className="mb-4 grid grid-cols-2 my-5 text-[#290F6A] text-lg font-semibold cursor-pointer" onClick={handleToggle}>
  <span className="flex items-center pl-2">{label}</span>
  <div className="flex items-right justify-end pr-2">
    <Image src="/arrow-down.svg" alt="" width={20} height={20} className="" />
  </div>
</div>

      {isOpen && (
        <fieldset className="flex max-w-md flex-col gap-4 ">
          {options.map((option) => (
            <div key={option.value} className="flex items-center gap-2">
              <input
                type="checkbox"
                id={option.value}
                name={label}
                value={option.value}
                checked={selectedOptions.some((selectedOption) => selectedOption.value === option.value)}
                onChange={() => handleCheckboxChange(option.value)}
                className="hover:bg-[#8C3AFF] rounded-sm focus:ring-purple-600 dark:ring-offset-purple-600 dark:focus:ring-purple-600 text-purple-600"
              />
              <label htmlFor={option.value}>{option.label}</label>
            </div>
          ))}
        </fieldset>
      )}
    </div>
  );
};

export default AccordionSection;
