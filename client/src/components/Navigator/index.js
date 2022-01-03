import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { scrollToTop } from "../../scripts"
import styles from './styles'

function Navigator(props) {
    const classes = styles();
    return (
        <div className={classes.root}>
            <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                <Link color="inherit" href="#" onClick={()=>{
                    scrollToTop()
                }}>
                    Main
                </Link>
                <Typography color="textPrimary">{props.data}</Typography>
            </Breadcrumbs>
        </div>
    )
}

export default Navigator;