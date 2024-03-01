
import { FilterPropertiesProps } from "@/types";

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
  window.location.href = `/rent${newPathname}`;
};

 
export async function fetchPropertiesForRent(filters: FilterPropertiesProps) {
    const { location, page } = filters;
  
    // Set the required headers for the API request
    // const headers: HeadersInit = {
    //   'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY || "",
    //   'X-RapidAPI-Host': process.env.NEXT_PUBLIC_RAPID_API_HOST || ""
    // };
  
    // try {
    //   // Construct the URL with proper keys for the parameters
    //    const url = `https://realtor16.p.rapidapi.com/forrent?location=${location}&page=${page}`;
  
    //   console.log('Fetching data from:', url);
  
    //   // Make the API request
    //   const response = await fetch(url, {
    //     headers: headers,
    //   });
  
    //   // Check if the response was successful (status code 200)
    //   if (!response.ok) {
    //     console.error('API request failed with status:', response.status);
    //     return null; // or handle the error as needed
    //   }
  
    //   // Parse the response as JSON
    //   const result = await response.json();
    //   const storedDataString = localStorage.getItem('apiData');
    //   if(!storedDataString){
    //     localStorage.setItem('apiData', result);
    //   }
    //   console.log('API Response:', result);
  
    //   return result;
    // } catch (error) {
    //   console.error('Error during API request:', error);
    //   return null; // or handle the error as needed
    // }


    const url = 'https://realtor16.p.rapidapi.com/forrent?location=santa%20monica';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '32e3edac46msh47596979458f9c6p1d274cjsn4c77cf0d2b40',
          'X-RapidAPI-Host': 'realtor16.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const result = await response.text();
        const storedDataString = localStorage.getItem('apiData');
        if(!storedDataString){
              localStorage.setItem('apiData', result);
            }
        console.log(result);
        return result
      } catch (error) {
        console.error(error);
      }
  }
  




