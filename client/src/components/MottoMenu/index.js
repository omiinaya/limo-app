import React from 'react';
import { Typography, Breadcrumbs } from "@material-ui/core";
import styles from './styles'

function MottoMenu() {
    const classes = styles();
    return (
        <div className={classes.root}>
            <Breadcrumbs separator="-" aria-label="breadcrumb">
                <Typography onClick={() => { }} className={classes.Typography}>
                    TRUSTED
                </Typography>
                <Typography onClick={() => { }} className={classes.Typography}>
                    PRIVATE
                </Typography>
                <Typography onClick={() => { }} className={classes.Typography}>
                    SECURE
                </Typography>
            </Breadcrumbs>
        </div>
    )
}

export default MottoMenu;