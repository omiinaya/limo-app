import React from "react";
import styles from './styles'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';

function BannerMenu() {
    const classes = styles();
    return (
        <div className={classes.root}>
            <Stack direction="row" spacing={2}>
                <Button
                    className={classes.button}
                    variant="contained"
                    startIcon={<DateRangeIcon />}
                    sx={{ boxShadow: 15 }}
                    size="large"
                >
                    RESERVE NOW
                </Button>
                <Button
                    size="large"
                    className={classes.button}
                    variant="contained"
                    startIcon={<PriceCheckIcon />}
                    sx={{ boxShadow: 15 }}
                >
                    GET A QUOTE
                </Button>
            </Stack>
        </div>
    )
}

export default BannerMenu;