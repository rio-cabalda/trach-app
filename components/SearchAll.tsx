// SearchAll.tsx
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Combobox } from '@headlessui/react';
import { locations } from '@/constants';
import magnifyingGlass from '../public/magnifying-glass.svg'
import { fetchLocation } from "@/utils/fetchApiData";
import { LiaCitySolid } from "react-icons/lia";

// const SearchButton = ({ title, onClick, otherClasses }: { title: string; onClick: () => void; otherClasses: string }) => (
//   <button
//     type="submit"
//     className={`flex items-center justify-center -ml-3 z-10 px-5 ${otherClasses} sm:flex-row md:flex-col lg:flex-row lg:py-3 `}
//     onClick={onClick}
//   >
//     {title}
//   </button>
// );

const SearchAll = () => {
  const [location, setLocation] = useState('');
  const router = useRouter();
  const [typingTimer, setTypingTimer] = useState<any>(undefined);
  const [userIsTyping, setUserIsTyping] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [suggestedList, setSuggestedList] = useState<any[]>([]);
  const [seachOpen, setSearchOpen] = useState(false);
  const [selectedLocationData, setSelectedLocationData] = useState<any>(null);
  console.log("result",suggestedList);
  console.log("location",location.length);

  useEffect(()=>{
    
  },[userIsTyping])
  
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setLocation(newValue);
    setUserIsTyping(true);
    if(!seachOpen){setSearchOpen(true)}
    // Clear previous timeout
    if (typingTimer) {
      clearTimeout(typingTimer);
    }

    // Set a new timer to run your function after 3 seconds of inactivity
    setTypingTimer(setTimeout(async() => {
      setUserIsTyping(false);
      setIsLoading(true);
      const searchedLocation = await fetchLocation(location) as any;
      // Extract counties arrays from each object in the autocomplete array
      const countiesArrays:any[] = searchedLocation?.autocomplete?.map((item: any) => item.counties) as any;

  
      // Flatten the arrays into a single array and remove duplicates
      const uniqueCounties: any[] = countiesArrays?.reduce((acc: any[], countiesArray: any[]) => {
        countiesArray?.forEach((county: any) => {
            // Check if county name already exists in the accumulator array
            const existingCounty = acc.find((c: any) => c.name === county.name);
            // If the county name doesn't exist, add it to the accumulator array
            if (!existingCounty) {
            acc.push(county);
            }
        });
        return acc;
        }, []);
        setSuggestedList(uniqueCounties);
        setIsLoading(false);
    }, 3000));
  }

  const handleSelectedLocation = (data:any) =>{
    console.log("search data: ",data);
    setLocation(data.name)
    setSearchOpen(false);
    setSelectedLocationData(data);
  }

  const handleSearch = async (agentType: string) => {
    if (location.trim() === '') {
      return alert('Please fill in the search bar');
    }
    try {
      if(selectedLocationData){
        // await updateSearchParams(type, location.toLowerCase());
        router.push(`/agent?agentType=${agentType}&location=${location}&postalcode=${selectedLocationData.fips}&limit=10`);
      }
    } catch (error) {
      console.error('Error updating search parameters:', error);
    }
  };

  // const updateSearchParams = async (type: string, location: string) => {
  //   return new Promise<void>((resolve) => {
  //     // Simulating an asynchronous operation (e.g., API call)
  //     setTimeout(() => {
  //       const searchParams = new URLSearchParams(window.location.search);

  //       // Remove the 'type' parameter
  //       searchParams.delete('type', 'page');

  //       if (location) {
  //         // Set the 'location' parameter
  //         searchParams.set('location', location);
  //       } else {
  //         // If location is empty, delete the 'location' parameter
  //         searchParams.delete('location');
  //       }

  //       const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  //       // Use router.push to navigate to the new URL
  //       router.push(newPathname);
  //       resolve();
  //     }, 500); // Simulated delay of 500 milliseconds
  //   });
  // };


 
  const handleSearchSell = () => {
    // handleSearch('sale');
    handleSearch('sell');
  };

  const handleSearchRent = () => {
    // handleSearch('rent');
    handleSearch('agent');
  };

  // const handleSearchAgent = () => {
  //   handleSearch('agent');
  // };
  const [query, setQuery] = useState('');

  const filteredLocations = query === ''
    ? locations
    : locations.filter((item) => (
      item.toLowerCase()
        .replace(/\s+/g, '')
        .includes(query.toLowerCase().replace(/\s+/g, ''))
    ));

return (
  <div className=''>
    <div className=''>
    <div className="relative flex-1 max-sm:w-full flex justify-start items-center rounded-lg p-4 bg-black/20">
      
      <Combobox value={location} onChange={setLocation}>
        <div className="flex w-[49.5rem] h-[6.188rem] gap-6 items-center bg-white rounded-md border-[#00000029]">
          <div className="absolute z-[1]">
            <Image
              src={magnifyingGlass}
              width={30}
              height={30}
              className="ml-4"
              alt="magnifying glass"
            />
          </div>
          <div className="w-full relative">
            <Combobox.Input
              className="w-full h-[58px] pl-12 p-4 rounded-l-full max-sm:rounded-full outline-none focus:outline-none cursor-text text-sm border-none ring-transparent focus:ring-transparent"
              placeholder="City, town or postcode"
              // displayValue={(location: string) => location}
              // onChange={(e) => setQuery(e.target.value)}
              value={location}
              onChange={(e) => handleInputChange(e)}
            />
            {/* Dropdown in search area. Dummy list of city */}
            {seachOpen && <div className="absolute w-full flex justify-center top-20 left-0 bg-gray-50 border border-gray-300 rounded-md overflow-hidden z-[1]">
              {isLoading &&
                <div className="flex items-center gap-4 py-4">
                    <div className="inline-block h-8 w-8 text-purple-900 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status">
                    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]" >Loading...</span>
                    </div>
                    Loading list...
                </div>}
                {userIsTyping && <div className="flex items-end py-4">
                  <span className="font-bold">Typing</span>
                  <div className='flex -translate-y-1 space-x-1 justify-center items-end h-fit dark:invert'>
                      <span className='sr-only'>Loading...</span>
                      <div className='h-[5px] w-[5px] bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
                    <div className='h-[5px] w-[5px] bg-black rounded-full animate-bounce [animation-delay:-0.15s]'></div>
                    <div className='h-[5px] w-[5px] bg-black rounded-full animate-bounce'></div>
                  </div>
                  </div>}
              {(suggestedList?.length > 1 && !isLoading && !userIsTyping) && 
                <div className="w-full h-full flex flex-col">
                  {suggestedList.map((city)=>(
                    <button key={city.name} onClick={()=>handleSelectedLocation(city)} className="capitalize flex items-center px-4 py-2 gap-2 hover:bg-purple-300 active:bg-purple-500">
                    <LiaCitySolid size={16}/>{city.name}</button>
                    ))}
                </div>
              }
              
            </div>}
          </div>
          {/*<div className='justify-end flex space-x-5 w-full '>
          <SearchButton title="Find Agents" onClick={handleSearchAgent} otherClasses={'rounded-md bg-transparent outline outline-1 outline-purple-500 text-purple-500 hover:bg-purple-300 hover:text-white hover:outline-none'} /> 
          </div>*/}
          <div className='justify-end gap-4 flex mr-6'>
            <button disabled={!selectedLocationData} onClick={handleSearchSell} className="w-[99px] h-[51px] py-4 px-6 rounded-md bg-[#7100C3] text-white text-base leading-[19.36px] font-[500] font hover:bg-purple-600 outline-none disabled:bg-purple-400" >To Sell</button>
            <button disabled={!selectedLocationData} onClick={handleSearchRent} className="w-[107px] h-[51px] py-4 px-6 rounded-md bg-[#8C3AFF] text-white text-base leading-[19.36px] font-[500] font hover:bg-purple-600 outline-none disabled:bg-purple-400" >To Rent</button>

            {/* <SearchButton title="For Rent" onClick={handleSearchRent} className={'rounded-md bg-purple-500 text-white hover:bg-transparent hover:text-purple-500 hover:outline-purple-500 hover:outline-1  outline-none '} >To Rent</SearchButton> */}
          </div>

          
        </div>
          {/* Dropdown in search area. Dummy list of city */}
        {/* <Combobox.Options className="absolute top-full left-5 z-[100] ">
          {filteredLocations.map((item,index) => (
            <Combobox.Option
              key={index}
              value={item}
              className={({ active }) => `relative  cursor-default select-none py-2 pl-10 pr-4 ${active ? 'rounded-md bg-[#8C3AFF] text-white ' : 'text-gray-900 bg-white'}`}
            >
              {({ selected, active }) => (
                <>
                  <span
                    className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}
                  >
                    {item}
                  </span>
                  {selected ? (
                    <span
                      className={`absolute inset-y-0 left-5 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'}`}
                    >
                    </span>
                  ) : null}
                </>
              )}
            </Combobox.Option>
          ))}
        </Combobox.Options> */}

      </Combobox>
    </div>
  </div>
</div>
  );
};

export default SearchAll;
