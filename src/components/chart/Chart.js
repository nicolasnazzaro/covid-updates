import React, { useState, useEffect } from 'react';
import { fetchChartData } from '../../api/agent';
import { Line, Bar } from 'react-chartjs-2';
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
                    label: 'Infected',
                    borderColor: '#3333ff',
                    fill: true
                }, {
                    data: data.map(({deaths}) => deaths),
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255, 0, 0, 0.5)',
                    fill: true
                }]
            }}
        />
    )
    
    if (!data.length) return <p>loading...</p>

    return lineChart;
}

export default Chart;