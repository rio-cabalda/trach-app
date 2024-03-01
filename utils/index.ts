import { FilterAgentProps } from "@/types";
import axios from "axios";

export const updateSearchParams = (type: string, value: string) => {
  // Get the current URL search params
  const searchParams = new URLSearchParams(window.location.search);

  // Set the specified search parameter to the given value
  searchParams.set(type, value);

  // Set the specified search parameter to the given value
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};

export const deleteSearchParams = (type: string) => {
  // Set the specified search parameter to the given value
  const newSearchParams = new URLSearchParams(window.location.search);

  // Delete the specified search parameter
  newSearchParams.delete(type.toLocaleLowerCase());

  // Construct the updated URL pathname with the deleted search parameter
  const newPathname = `${window.location.pathname}?${newSearchParams.toString()}`;

  return newPathname;
};
export const navigateSearchParams = (type: string, value: string) => {
  const newPathname = updateSearchParams(type, value);
  window.location.href = `/trial${newPathname}`;
};

export async function fetchAgent(filters: FilterAgentProps) {
    const { location, page, rating, price } = filters;

  // Set the required headers for the API request
  const headers: HeadersInit = {
    'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY || "",
    'X-RapidAPI-Host':  process.env.NEXT_PUBLIC_RAPID_API_HOST || ""
  };

  console.log("filters: ",filters);
  

  if(location){
    try {
      // Set the required headers for the API request
      const response = await fetch(
        `https://realtor16.p.rapidapi.com/search_agents?location=${location}&page=${page}&rating=${rating}&price=${price}`,
        {
          headers: headers,
        }
      );

      // Parse the response as JSON
      const result = await response.json();
      const storedDataString = localStorage.getItem('apiData');
      if(!storedDataString){
        localStorage.setItem('apiData', result);
      }
      console.log("Result ",result);
      console.log("api key", process.env.NEXT_PUBLIC_RAPID_API_KEY);
      
      return result;

    } catch (error) {
      console.log("Error Fetching Agent: ", error);
    }
  }
}

export async function getAllAgentData(){
  const options = {
    method: 'GET',
    url: 'https://realtor16.p.rapidapi.com/agent',
    params: {
      id: '569e892a89a68901006bdb99'
    },
    headers: {
      'X-RapidAPI-Key': '32e3edac46msh47596979458f9c6p1d274cjsn4c77cf0d2b40',
      'X-RapidAPI-Host': 'realtor16.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
}





