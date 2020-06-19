import React, { useState, useEffect, Fragment } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './countryPicker.module.css';
import { fetchCountries } from '../../api/agent';

const CountryPicker = ({ handleCountryChange }) => {
    
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const getCountries = async () => {
            setCountries(await fetchCountries());
        }
        getCountries();
    }, [setCountries]);

    return (
        <Fragment>
            <FormControl className={styles.formControl}>
                <NativeSelect default='' onChange={e => handleCountryChange(e.target.value)}>
                    <option value=''>All</option>
                    {countries.map((country, i) => 
                        <option key={i} value={country}>{country}</option>
                    )}
                </NativeSelect>
            </FormControl>
        </Fragment>
    );
}

export default CountryPicker;