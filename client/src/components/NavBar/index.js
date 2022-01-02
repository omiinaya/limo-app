import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import PhoneIcon from '@mui/icons-material/Phone';
import styles from "./styles";

function NavBar(props) {
    const classes = styles();
    return (
        <div>
            <AppBar position="relative" className={classes.root}>
                <Toolbar>
                    <div className={classes.leftContainer}>
                        <Typography variant="h6" className={classes.leftItems}>
                            LOGO/TITLE
                        </Typography>
                    </div>
                    <div className={classes.middleContainer}>
                        <Typography variant="h6" className={classes.middleItems}>
                            SERVICES
                        </Typography>
                        <Typography variant="h6" className={classes.middleItems}>
                            FLEET
                        </Typography>
                        <Typography variant="h6" className={classes.middleItems}>
                            ABOUT US
                        </Typography>
                        <Typography variant="h6" className={classes.middleItems}>
                            CONTACT US
                        </Typography>
                        <Typography variant="h6" className={classes.middleItems}>
                            QUOTE
                        </Typography>
                    </div>
                    <div className={classes.rightContainer}>
                        <div className={classes.rightItems}>
                        <Typography variant="h6">
                           <PhoneIcon /> (731)-420-6969
                        </Typography>
                        exampleemail@limolux.com
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
            {props.content}
        </div>
    );
}

export default NavBar;
