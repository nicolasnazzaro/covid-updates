import React from 'react';
import Cards from './components/cards/Cards';
import Chart from './components/chart/Chart';
import CountryPicker from './components/countryPicker/CountryPicker';
import styles from './App.module.css';



const App = () => {
  return (
    <div className={styles.container}>
      <Cards/>
      <Chart/>
      <CountryPicker/>
    </div>
  );
}

export default App;