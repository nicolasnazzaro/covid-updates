import React from 'react';
import Cards from './components/cards/Cards';
import Chart from './components/chart/Chart';
import styles from './App.module.css';



const App = () => {
  return (
    <div className={styles.container}>
      <h2>Covid-19 Updates</h2>
      <Chart/>
      <Cards/>
    </div>
  );
}

export default App;