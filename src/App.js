import React, { useEffect, useState } from 'react';
import Cards from './components/cards/Cards';
import Chart from './components/chart/Chart';
import CountryPicker from './components/countryPicker/CountryPicker';
import { fetchData } from './api/agent';



const App = () => {
  
  const [data, setData] = useState({});
  
  useEffect(() => {
    fetchData().then(response => setData({...response}));
  },[]);
  
  return (
    <div>
      <Cards data={data}/>
      <Chart/>
      <CountryPicker/>
    </div>
  );
}

export default App;