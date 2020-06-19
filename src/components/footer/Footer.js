import React from 'react';
import styles from './footer.module.css';
import { Typography, Link } from '@material-ui/core';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Typography variant="body2" color="textSecondary">
                {'Data retrieved from '}
                <Link color="inherit" href="https://covid19.mathdro.id/api">
                https://covid19.mathdro.id/api
                </Link>
            </Typography>
        </footer>
    )
}

export default Footer;