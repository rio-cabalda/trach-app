export const updateSearchParams = (type: string, value: string) => {
  // Get the current URL search params
  const searchParams = new URLSearchParams(global.location.search); // Change here

  // Set the specified search parameter to the given value
  searchParams.set(type, value);

  // Set the specified search parameter to the given value
  const newPathname = `${global.location.pathname}?${searchParams.toString()}`; // Change here

  return newPathname;
};

export const deleteSearchParams = (type: string) => {
  // Set the specified search parameter to the given value
  const newSearchParams = new URLSearchParams(global.location.search); // Change here

  // Delete the specified search parameter
  newSearchParams.delete(type.toLocaleLowerCase());

  // Construct the updated URL pathname with the deleted search parameter
  const newPathname = `${global.location.pathname}?${newSearchParams.toString()}`; // Change here

  return newPathname;
};

export const navigateSearchParams = (type: string, value: string) => {
  const newPathname = updateSearchParams(type, value);
  global.location.href = `/details${newPathname}`;
};

export async function fetchAgentDetails(id: string) {
  // Set the required headers for the API request
  const headers = {
    'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY || "",
    'X-RapidAPI-Host': 'realtor16.p.rapidapi.com'
  };

  // Set the required headers for the API request
  const response = await fetch(
    `https://realtor16.p.rapidapi.com/agent?id=${id}`,
    {
      headers: headers,
    }
  );

  // Parse the response as JSON
  const result = await response.json();

  return result;
}
