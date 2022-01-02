import React from "react";
import styles from './styles'
import Navigator from '../Navigator'

function Services() {
    const classes = styles();
    return (
        <div className={classes.root}>
            <Navigator data={'Services'} />
            <div>Hello World</div>
        </div>
    )
}

export default Services;