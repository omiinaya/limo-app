import React from "react";
import {
    Card,
    CardMedia,
    Grid,
} from '@material-ui/core';
import styles from './styles'

function Banner(props) {
    const classes = styles();
    if (props.newProp) console.log(props.newProp)
    //calculate this based on screenspace instead
    const totalItems = props.length ? props.length : 1;
    const mediaLength = totalItems;

    let rows = [];

    for (let i = 0; i < mediaLength; i++) {
        const item = props.item.Items[i];
        const media = (
            <Grid item xs={12 / totalItems} key={item.Name} >
                <CardMedia
                    className={classes.Media}
                    image={item.Image}
                    title={item.Name}
                >
                </CardMedia>
            </Grid>
        )
        rows.push(media);
    }

    return (
        <Card raised className={classes.Banner}>
            <Grid container spacing={5} className={classes.BannerGrid}>
                {rows}
            </Grid>
        </Card>
    )
}

export default Banner;