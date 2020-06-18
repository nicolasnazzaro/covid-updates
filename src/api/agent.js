import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate} } = await axios.get(url);

        const neededData = {
            confirmed,
            recovered,
            deaths,
            lastUpdate
        }
        return neededData;
    }
    catch (error) {
        console.log(error);
    }
}