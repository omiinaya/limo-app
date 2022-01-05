import React from 'react'
import styles from './styles'

const MapView = (props) => {
    const classes = styles();
    return (
        <div className={classes.root}>
            Map
        </div>
    );
}

export default MapView