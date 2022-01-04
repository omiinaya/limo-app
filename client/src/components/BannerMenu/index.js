import React from "react";
import styles from './styles'
import { Button, Stack } from '@mui/material';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';

function BannerMenu(props) {
    const classes = styles();
    console.log(props)
    return (
        <div className={classes.root}>
            <Stack direction="row" spacing={2}>
                <Button
                    className={classes.button}
                    variant="contained"
                    startIcon={<DateRangeIcon />}
                    sx={{ boxShadow: 15 }}
                    size="large"
                    onClick={() => { props.toggleReserve() }}
                >
                    RESERVE NOW
                </Button>
                <Button
                    className={classes.button}
                    variant="contained"
                    startIcon={<PriceCheckIcon />}
                    sx={{ boxShadow: 15 }}
                    size="large"
                    onClick={() => { props.toggleQuote() }}
                >
                    GET A QUOTE
                </Button>
            </Stack>
        </div>
    )
}

export default BannerMenu;