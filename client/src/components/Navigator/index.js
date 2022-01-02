import React from "react";
import styles from './styles'

function Navigator(props) {
    const classes = styles();
    return (
        <div className={classes.root}>
            testing: 
            {props.data}
        </div>
    )
}

export default Navigator;