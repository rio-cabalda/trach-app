import axios from "axios";

function checkString(input:string) {
    const hasNumber = /\d/.test(input);
    const hasLetter = /[a-zA-Z]/.test(input);
    
    if (hasNumber && hasLetter) {
        return "number and letter";
    } else if (hasNumber) { //input is zipcode
        return "numbers"; 
    } else if (hasLetter) {//input is city
        return "letters";
    } else {
        return "empty";
    }
}



export const fetchLocation = async(input:string) => {
    // const options = {
    // method: 'GET',
    // url: 'https://realty-in-us.p.rapidapi.com/locations/v2/auto-complete',
    // params: {
    //     input: input,
    //     limit: '10'
    // },
    // headers: {
    //     'X-RapidAPI-Key': 'ee7219ff7emshc4213874b0102a4p159e17jsn329a36218abf',
    //     'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
    // }
    // };

    // try {
    //     const response = await axios.request(options);
    //     const result = response.data;
    //     return result
    // } catch (error) {
    //     console.error(error);
    // }
    const searchZipOrCity = checkString(input);
    const inputToUri = encodeURIComponent(input);
    
    if(searchZipOrCity === "letters"){ // Search by cities
        const options = {
            method: 'GET',
            url: `https://autocomplete-usa.p.rapidapi.com/marketplace/autocomplete/usa/city/displayType/1/${inputToUri}`,
            headers: {
            'X-RapidAPI-Key': '32e3edac46msh47596979458f9c6p1d274cjsn4c77cf0d2b40',
            'X-RapidAPI-Host': 'autocomplete-usa.p.rapidapi.com'
            }
        };
        
        try {
            const response = await axios.request(options);
            const result = response.data.Result;
            return result;
        } catch (error) {
            console.error(error);
        }
    }
    if(searchZipOrCity === "numbers"){ // search by zipcode
        
    }
    if(searchZipOrCity === "number and letter"){
        
    }
    
}

export const fetchAgent = async(location: string | undefined,limit: string | undefined, agentType: string | undefined) =>{

    function separateString(str:string | undefined) {
        let city,state;
        if(str){
            const parts = str?.split(',').map(part => part.trim());
            city = parts[0];
            state = parts.slice(1).join(', ')?parts.slice(1).join(', '):parts.slice(1).join(',');
            return {city, state};
        }
        return {city,state };
    }

    const {city, state} = separateString(location);
    let zip_code;

    const options = {
    method: 'GET',
    url: 'https://us-zipcodes.p.rapidapi.com/codes',
    params: {
        q: city
    },
    headers: {
        'X-RapidAPI-Key': '32e3edac46msh47596979458f9c6p1d274cjsn4c77cf0d2b40',
        'X-RapidAPI-Host': 'us-zipcodes.p.rapidapi.com'
    }
    };
    
    try {

        const response = await axios.request(options);
        const searchResult = response.data;
        const result = searchResult.find((entry:any) => entry.city === city && entry.state === state);

        zip_code =  result ? result.zip_code : null;

    } catch (error) {
        console.error("Error fetching zip code ===== ", error);
    }


    const agentListOptions = {
        method: 'GET',
        url: 'https://realty-in-us.p.rapidapi.com/agents/list',
        params: {
            postal_code: zip_code,
            offset: '0',
            limit: limit,
            sort: 'recent_activity_high',
            types: 'agent'
            },
            headers: {
                'X-RapidAPI-Key': 'dbd77582a3msh709e5494b8b6ff2p16f799jsn12231d10fa1d',
                'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
            }
        };
        
        
        if(zip_code){
            try {
                const response = await axios.request(agentListOptions);
                const result = response.data;
                const filteredAgentsByType = result.agents.filter((agent:any) => agent.agent_type && agent.agent_type.includes(agentType));
                
                return filteredAgentsByType;
            } catch (error) {
                console.error("Error in fetching agent list ===== ",error);
            }
        }
        
    return null;
}

export const fetchAgentProfile = async(advertiser_id:string | null, nrds_id:string | null) => {
    const options = {
        method: 'GET',
        url: 'https://realty-in-us.p.rapidapi.com/agents/get-profile',
        params: {
            advertiser_id: advertiser_id,
            nrds_id: nrds_id
        },
        headers: {
            'X-RapidAPI-Key': 'dbd77582a3msh709e5494b8b6ff2p16f799jsn12231d10fa1d',
            'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
        }
        };
        
        try {
            const response = await axios.request(options);
            const result = response.data;
            return result;
        } catch (error) {
            console.error(error);
            throw error; // Re-throw the error
        }
}

export const fetchAgentReviews = async(advertiser_id:string | null) => {
    const options = {
        method: 'GET',
        url: 'https://realty-in-us.p.rapidapi.com/agents/get-reviews',
        params: {
            advertiser_id
        },
        headers: {
            'X-RapidAPI-Key': 'dbd77582a3msh709e5494b8b6ff2p16f799jsn12231d10fa1d',
            'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
        }
        };
        
        try {
            const response = await axios.request(options);
            const result = response.data;
            return result;
        } catch (error) {
            console.error("Error in fetching reviews",error);
        }
}


