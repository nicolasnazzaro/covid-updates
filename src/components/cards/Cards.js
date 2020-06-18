import React, { useState, useEffect } from 'react';
import { fetchData } from '../../api/agent';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './cards.module.css';
import cx from 'classnames';

const Cards = () => {

    const [data, setData] = useState({});

    useEffect(() => {
        const setFetchedData = async () => {
            setData(await fetchData());
        }
        setFetchedData();
    }, []);

    if (!data.confirmed) return <p>Loading...</p>

    return (
            <Grid container spacig={3} justify='center' className={styles.container}>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Infected</Typography>
                        <Typography variant='h5'>
                            <CountUp
                                start={0}
                                end={data.confirmed?.value}
                                duration={2}
                                separator=','
                            />    
                        </Typography>
                        <Typography color='textSecondary'>{new Date(data.lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>Number of active cases</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Recovered</Typography>
                        <Typography variant='h5'>
                        <CountUp
                                start={0}
                                end={data.recovered?.value}
                                duration={2}
                                separator=','
                            /> 
                        </Typography>
                        <Typography color='textSecondary'>{new Date(data.lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>Number of recovered</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Deaths</Typography>
                        <Typography variant='h5'>
                        <CountUp
                                start={0}
                                end={data.deaths?.value}
                                duration={2}
                                separator=','
                            /> 
                        </Typography>
                        <Typography color='textSecondary'>{new Date(data.lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>Number of deaths</Typography>
                    </CardContent>
                </Grid>
            </Grid>
    );
}

export default Cards;