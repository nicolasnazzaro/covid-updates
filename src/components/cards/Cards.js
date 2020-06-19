import React, { useState, useEffect, Fragment } from 'react';
import { fetchData } from '../../api/agent';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountryPicker from '../countryPicker/CountryPicker';
import CountUp from 'react-countup';
import styles from './cards.module.css';
import cx from 'classnames';

const Cards = () => {

    const [data, setData] = useState({});
    const [selectedCountry, setSelectedCountry] = useState('');

    useEffect(() => {
        const setFetchedData = async () => {
            setData(await fetchData(selectedCountry));
        }
        setFetchedData();
    }, [selectedCountry]);

    const handleCountryChange = async (country) => {
        setSelectedCountry(country);
    }

    if (!data.confirmed) return <p>Loading cards...</p>;

    return (
        <Fragment>
            <div className={styles.pickerContainer}>
                <h3 style={{marginRight: 20}}>By country:</h3>
                <CountryPicker handleCountryChange={handleCountryChange}/>
            </div>
            <Grid container spacig={3} justify='center' className={styles.container}>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Infected</Typography>
                        <Typography variant='h5'>
                            <CountUp
                                start={0}
                                end={data.confirmed?.value}
                                duration={1.5}
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
                                duration={1.5}
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
                                duration={1.5}
                                separator=','
                            /> 
                        </Typography>
                        <Typography color='textSecondary'>{new Date(data.lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>Number of deaths</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </Fragment>
    );
}

export default Cards;