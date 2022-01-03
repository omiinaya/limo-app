import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import PhoneIcon from '@mui/icons-material/Phone';
import styles from "./styles";
import Scroll from 'react-scroll';

function NavBar(props) {
    const classes = styles();
    const scroll = Scroll.animateScroll;
    const scroller = Scroll.scroller;

    function scrollToTop(options) {
        scroll.scrollToTop({
            smooth: true,
            duration: 450
        })
    }

    function scrollTo(name) {
        scroller.scrollTo(name, {
            smooth: true,
            duration: 450,
            offset: -130
        })
    }
    return (
        <div>
            <AppBar position="relative" className={classes.root}>
                <Toolbar>
                    <div className={classes.leftContainer}>
                        <Typography
                            variant="h6"
                            className={classes.middleItems}
                            onClick={() => {
                                scrollToTop()
                            }}
                        >
                            LOGO/TITLE
                        </Typography>
                    </div>
                    <div className={classes.middleContainer}>
                        <Typography
                            variant="h6"
                            className={classes.middleItems}
                            onClick={() => {
                                scrollTo('Services')
                            }}
                        >
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
