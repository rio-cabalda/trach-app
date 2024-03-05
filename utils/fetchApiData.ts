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
        'X-RapidAPI-Key': 'ee7219ff7emshc4213874b0102a4p159e17jsn329a36218abf',
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

export const fetchAgent = async(postalCode: string | undefined,limit: string | undefined, agentType: string | undefined) =>{
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
                'X-RapidAPI-Key': 'dbd77582a3msh709e5494b8b6ff2p16f799jsn12231d10fa1d',
                'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
            }
        };
        
        try {
            const response = await axios.request(options);
            const result = response.data;
            const filteredAgentsByType = result.agents.filter((agent:any) => agent.agent_type && agent.agent_type.includes(agentType));
            return filteredAgentsByType;
            
        } catch (error) {
            console.error("Error in fetching api: ",error);
        }
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