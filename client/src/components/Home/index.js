import React from "react";
import AppBar from '../AppBar'
import styles from './styles'

function Home() {
    const classes = styles();
    return (
        <div className={classes.root}>
            Hello World
        </div>
    )
}

export default Home;