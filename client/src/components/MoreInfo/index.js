import React from "react";
import styles from './styles'
import { Link } from "@material-ui/core";
import MouseIcon from '@mui/icons-material/Mouse';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { scrollTo } from "../../scripts"

function MoreInfo() {
    const classes = styles();
    return (
        <div className={classes.root}>
            <center>
                <div className={classes.test}>
                    <Link
                        color="inherit"
                        href="#"
                        onClick={() => {
                            scrollTo('Services')
                        }}
                    >
                            <div className={classes.icons}><MouseIcon /></div>
                            <div className={classes.icons}><ArrowDropDownIcon /></div>
                            <div className={classes.text}>SCROLL DOWN</div>
                    </Link>
                </div>
            </center>
        </div>
    )
}

export default MoreInfo;