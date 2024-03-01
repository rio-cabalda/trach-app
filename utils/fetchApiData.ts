import axios from "axios";


export const fetchLocation = async(input:string) => {
    const options = {
    method: 'GET',
    url: 'https://realty-in-us.p.rapidapi.com/locations/v2/auto-complete',
    params: {
        input: input,
        limit: '10'
    },
    headers: {
        'X-RapidAPI-Key': '32e3edac46msh47596979458f9c6p1d274cjsn4c77cf0d2b40',
        'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
    }
    };

    try {
        const response = await axios.request(options);
        const result = response.data;
        return result
    } catch (error) {
        console.error(error);
    }
}

export const fetchAgent = async(postalCode: string | undefined,limit: string | undefined ) =>{
    const options = {
        method: 'GET',
        url: 'https://realty-in-us.p.rapidapi.com/agents/list',
        params: {
            postal_code: postalCode,
            offset: '0',
            limit: limit,
            sort: 'recent_activity_high',
            types: 'agent'
            },
            headers: {
            'X-RapidAPI-Key': '32e3edac46msh47596979458f9c6p1d274cjsn4c77cf0d2b40',
            'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
            }
        };
        
        try {
            const response = await axios.request(options);
            const result = response.data;
            return result
        } catch (error) {
            console.error("Error in fetching api: ",error);
        }
}