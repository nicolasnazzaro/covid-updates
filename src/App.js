import React from 'react';
import Cards from './components/cards/Cards';
import Chart from './components/chart/Chart';
import CountryPicker from './components/countryPicker/CountryPicker';

const App = () => {
  return (
    <div>
      <Cards/>
      <Chart/>
      <CountryPicker/>
    </div>
  );
}

export default App;