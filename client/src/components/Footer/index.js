import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import styles from "./styles";

function Footer() {
    const classes = styles();
    return (
        <AppBar position="sticky" className={classes.root}>
            <Toolbar>
                <div className={classes.leftContainer}>
                    <Typography variant="h6" className={classes.leftItems}>

                    </Typography>
                </div>
                <div className={classes.middleContainer}>
                    <Typography variant="h6" className={classes.middleItems}>
                        Copyright © 2022 OEM
                    </Typography>
                </div>
                <div className={classes.rightContainer}>
                    <Typography variant="h6" className={classes.rightItems}>

                    </Typography>
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default Footer;
