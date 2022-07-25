import axios from 'axios';

const apiUrl = 'http://localhost:3000/api/';


export const getSingleFiles = async () => {
    try {
            const {data} = await axios.get(apiUrl + 'getSingleFiles');
            return data;
    } catch (error) {
        throw error;
    }
}
