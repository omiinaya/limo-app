import React from "react";
import styles from './styles'
import { Link } from "@material-ui/core";
import MouseIcon from '@mui/icons-material/Mouse';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { scrollTo } from "../../scripts"

function MoreInfo() {
    const classes = styles();
    return (
        <Link
            className={classes.root}
            color="inherit"
            href="#"
            onClick={() => { scrollTo('Services') }}>
            <center>
                <div className={classes.icons}><MouseIcon /></div>
                <div className={classes.icons}><ArrowDropDownIcon /></div>
                <div className={classes.text}>SCROLL DOWN</div>
            </center>
        </Link>
    )
}

export default MoreInfo;