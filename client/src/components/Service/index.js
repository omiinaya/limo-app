import React from "react";
import styles from './styles'
import Navigator from '../Navigator'

function Service() {
    const classes = styles();
    return (
        <div className={classes.root}>
            <Navigator data={'path'} />
            <div>Hello World</div>
        </div>
    )
}

export default Service;