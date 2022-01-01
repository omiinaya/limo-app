import React from "react";
import styles from './styles'
import Carousel from '../Carousel'

function Home() {
    const classes = styles();
    return (
        <div className={classes.root}>
            <Carousel />
        </div>
    )
}

export default Home;