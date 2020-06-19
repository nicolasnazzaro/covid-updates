import React, { useState, useEffect } from 'react';
import { fetchChartData } from '../../api/agent';
import { Line } from 'react-chartjs-2';
import styles from './chart.module.css';

const Chart = () => {
    
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchChartData().then(response => setData(response));
    }, []);
    
    const lineChart = (
        <Line
            data={{
                labels: data.map(({date}) => date),
                datasets: [{
                    data: data.map(({confirmed}) => confirmed),
                    label: 'Total Infected',
                    borderColor: '#3333ff',
                    fill: true
                }, {
                    data: data.map(({deaths}) => deaths),
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255, 0, 0, 0.1)',
                    fill: true
                }, {
                    data: data.map((d, i) => {
                        let value;
                        if (i>0) {
                            value = data[i].confirmed - data[i-1].confirmed
                        }
                        return value;
                    }),
                    label: 'Infected daily increment',
                    borderColor: 'yellow',
                    backgroundColor: 'rgba(255, 255, 125, 0.1)',
                    fill: true
                }]
            }}
        />
    );

    return (
        <div className={styles.container}>
            <h3>Global Overview</h3>
            {!data.length 
                ? (<p>Loading chart...</p>)
                : lineChart
            }
        </div>
    );
}

export default Chart;