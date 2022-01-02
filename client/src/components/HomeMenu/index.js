import React from 'react';
import FlightIcon from '@mui/icons-material/Flight';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ShieldIcon from '@mui/icons-material/Shield';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import CelebrationIcon from '@mui/icons-material/Celebration';
import AttractionsIcon from '@mui/icons-material/Attractions';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import styles from './styles'

function HomeMenu() {
    const classes = styles();
    return (
        <div className={classes.root}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" href="/" onClick={() => { }} className={classes.link}>
                    <FlightIcon className={classes.icon} />
                    AIRPORT
                </Link>
                <Link color="inherit" href="/" onClick={() => { }} className={classes.link}>
                    <DirectionsBoatIcon className={classes.icon} />
                    PORT
                </Link>
                <Link color="inherit" href="/" onClick={() => { }} className={classes.link}>
                    <ShieldIcon className={classes.icon} />
                    PRIVATE
                </Link>
                <Link color="inherit" href="/" onClick={() => { }} className={classes.link}>
                    <AccessTimeIcon className={classes.icon} />
                    HOURLY AND DAILY
                </Link>
                <Link color="inherit" href="/" onClick={() => { }} className={classes.link}>
                    <FavoriteIcon className={classes.icon} />
                    WEDDING
                </Link>
                <Link color="inherit" href="/" onClick={() => { }} className={classes.link}>
                    <CorporateFareIcon className={classes.icon} />
                    CORPORATE
                </Link>
                <Link color="inherit" href="/" onClick={() => { }} className={classes.link}>
                    <CelebrationIcon className={classes.icon} />
                    PARTY
                </Link>
                <Link color="inherit" href="/" onClick={() => { }} className={classes.link}>
                    <AttractionsIcon className={classes.icon} />
                    AMUSEMENT PARKS
                </Link>
            </Breadcrumbs>
        </div>
    )
}

export default HomeMenu;