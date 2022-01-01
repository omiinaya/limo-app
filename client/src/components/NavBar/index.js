import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import styles from "./styles";

function NavBar(props) {
    const classes = styles();
    return (
        <div>
            <AppBar position="relative" className={classes.root}>
                <Toolbar>
                    <div className={classes.left}>
                        <Typography variant="h6">
                            Logo
                        </Typography>
                    </div>
                    <div className={classes.menu}>
                        <Typography variant="h6" className={classes.item}>
                            SERVICE
                        </Typography>
                        <Typography variant="h6" className={classes.item}>
                            FLEET
                        </Typography>
                        <Typography variant="h6" className={classes.item}>
                            ABOUT US
                        </Typography>
                        <Typography variant="h6" className={classes.item}>
                            CONTACT US
                        </Typography>
                        <Typography variant="h6" className={classes.item}>
                            QUOTE
                        </Typography>
                    </div>
                    <div className={classes.right}>
                        <Typography variant="h6">
                            Number
                        </Typography>
                    </div>
                </Toolbar>
            </AppBar>
            {props.content}
        </div>
    );
}

export default NavBar;
