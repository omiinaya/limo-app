import React from "react";
import Banner from '../Banner'
import styles from './styles'

const rows = [
    {
        Items: [
            {
                Name: "Macbook Pro",
                Image: "https://source.unsplash.com/featured/?macbook"
            }
        ]
    },
    {
        Items: [
            {
                Name: "iPhone",
                Image: "https://source.unsplash.com/featured/?iphone"
            }
        ]
    },
    {
        Items: [
            {
                Name: "Washing Machine WX9102",
                Image: "https://source.unsplash.com/featured/?washingmachine"
            }
        ]
    }
]

function Carousel() {
    const classes = styles();
    
    return (
        <div style={{ color: "#494949" }}>
        <Carousel
            className={classes.Root}
            autoPlay={true}
            animation="fade"
            indicators={true}
            timeout={100}
            cycleNavigation={true}
            navButtonsAlwaysVisible={false}
            navButtonsAlwaysInvisible={true}
        >
            {
                rows.map((item, index) => {
                    return <Banner item={item} key={index} contentPosition={item.contentPosition} />
                })
            }
        </Carousel>
    </div>
    )
}

export default Carousel;
