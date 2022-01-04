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

function HomeMenu() {
    const classes = styles();
    return (
        <div className={classes.root}>
            <Breadcrumbs aria-label="breadcrumb">
                <Typography className={classes.Typography}>
                    <FlightIcon className={classes.icon} />
                    AIRPORT
                </Typography>
                <Typography className={classes.Typography}>
                    <DirectionsBoatIcon className={classes.icon} />
                    PORT
                </Typography>
                <Typography className={classes.Typography}>
                    <ShieldIcon className={classes.icon} />
                    PRIVATE
                </Typography>
                <Typography className={classes.Typography}>
                    <CorporateFareIcon className={classes.icon} />
                    CORPORATE
                </Typography>
                <Typography className={classes.Typography}>
                    <AccessTimeIcon className={classes.icon} />
                    HOURLY AND DAILY
                </Typography>
                <Typography className={classes.Typography}>
                    <FavoriteIcon className={classes.icon} />
                    WEDDING
                </Typography>
                <Typography className={classes.Typography}>
                    <CelebrationIcon className={classes.icon} />
                    PARTY
                </Typography>
                <Typography className={classes.Typography}>
                    <AttractionsIcon className={classes.icon} />
                    AMUSEMENT PARKS
                </Typography>
            </Breadcrumbs>
        </div>
    )
}

export default HomeMenu;