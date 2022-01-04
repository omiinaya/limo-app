import React from "react";
import { AppBar, Toolbar, Link, Typography } from "@material-ui/core";
import PhoneIcon from '@mui/icons-material/Phone';
import { scrollToTop } from "../../scripts"
import { scrollTo } from "../../scripts"
import styles from "./styles";

function NavBar(props) {
    const classes = styles();

    return (
        <div>
            <AppBar className={classes.root}>
                <Toolbar>
                    <div className={classes.leftContainer}>
                        <Link
                            color="inherit"
                            href="#"
                            className={classes.middleItems}
                            onClick={() => {
                                scrollToTop()
                            }}
                        >
                            LOGO/TITLE
                        </Link>
                    </div>
                    <div className={classes.middleContainer}>
                        <Link
                            color="inherit"
                            href="#"
                            className={classes.middleItems}
                            onClick={() => {
                                scrollTo('Services')
                            }}
                        >
                            SERVICES
                        </Link>
                        <Link
                            color="inherit"
                            href="#"
                            className={classes.middleItems}
                            onClick={() => {
                                scrollTo('Fleet')
                            }}
                        >
                            FLEET
                        </Link>
                        <Link
                            color="inherit"
                            href="#"
                            className={classes.middleItems}
                            onClick={() => {
                                scrollTo('Reservations')
                            }}
                        >
                            RESERVATIONS
                        </Link>
                        <Link
                            color="inherit"
                            href="#"
                            className={classes.middleItems}
                            onClick={() => {
                                scrollTo('AboutUs')
                            }}
                        >
                            ABOUT US
                        </Link>
                        <Link
                            color="inherit"
                            href="#"
                            className={classes.middleItems}
                            onClick={() => {
                                scrollTo('ContactUs')
                            }}
                        >
                            CONTACT US
                        </Link>
                    </div>
                    <div className={classes.rightContainer}>
                        <div className={classes.rightItems}>
                            <Typography variant="h6">
                                <PhoneIcon />(731)-420-6969
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
