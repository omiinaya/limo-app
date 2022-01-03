import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import styles from "./styles";

function Footer() {
    const classes = styles();
    return (
        <div>
            <AppBar position="fixed" sx={{ top: 'auto', bottom: 0 }}>
                <Toolbar>
                    <div className={classes.leftContainer}>
                        <Typography variant="h6" className={classes.leftItems}>
                            LEFT ITEMS
                        </Typography>
                    </div>
                    <div className={classes.middleContainer}>
                        <Typography variant="h6" className={classes.middleItems}>
                            COPYRIGHT OEM
                        </Typography>
                    </div>
                    <div className={classes.rightContainer}>
                    <Typography variant="h6" className={classes.rightItems}>
                            RIGHT ITEMS
                        </Typography>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Footer;
