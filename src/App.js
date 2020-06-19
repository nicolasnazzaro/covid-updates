import React from 'react';
import Cards from './components/cards/Cards';
import Chart from './components/chart/Chart';
import styles from './App.module.css';
import Footer from './components/footer/Footer';



const App = () => {
  return (
    <div className={styles.container}>
      <h2>Covid-19 Updates</h2>
      <Chart/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;