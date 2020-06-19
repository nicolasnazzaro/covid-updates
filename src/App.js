import React from 'react';
import Cards from './components/cards/Cards';
import Chart from './components/chart/Chart';
import styles from './App.module.css';



const App = () => {
  return (
    <div className={styles.container}>
      <Chart/>
      <Cards/>
    </div>
  );
}

export default App;