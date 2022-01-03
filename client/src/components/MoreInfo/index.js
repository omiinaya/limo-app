import React from "react";
import styles from './styles'
import MouseIcon from '@mui/icons-material/Mouse';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function MoreInfo() {
    const classes = styles();
    return (
        <div className={classes.root}>
            <center>
                <div className={classes.icons}><MouseIcon /></div>
                <div className={classes.icons}><ArrowDropDownIcon /></div>
                <div className={classes.text}>SCROLL DOWN</div>
            </center>
        </div>
    )
}

export default MoreInfo;