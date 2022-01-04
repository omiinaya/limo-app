import React from 'react';
import { Typography, Breadcrumbs } from "@material-ui/core";
import FlightIcon from '@mui/icons-material/Flight';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ShieldIcon from '@mui/icons-material/Shield';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import CelebrationIcon from '@mui/icons-material/Celebration';
import AttractionsIcon from '@mui/icons-material/Attractions';
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