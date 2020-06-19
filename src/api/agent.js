import axios from 'axios';

const URL = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    let changeableUrl = URL;
    
    if (country) {
        changeableUrl = `${URL}/countries/${country}`;
    }
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);
        const neededData = {
            confirmed,
            recovered,
            deaths,
            lastUpdate
        }
        return neededData;
    } catch (error) {
        console.log(error);
    }
}

export const fetchChartData = async () => {
    try {
        const { data } = await axios.get(`${URL}/daily`);
        const filteredData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }));
        return filteredData;
    } catch (error) {
        console.log(error);
    }
}

export const fetchCountries = async () => {
    try {
        const { data } = await axios.get(`${URL}/countries`);
        return data.countries.map(country => country.name);
    } catch (error) {
        console.log(error)
    }
}