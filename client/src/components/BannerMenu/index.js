import React from "react";
import { Stack } from '@mui/material';
import ReserveModal from '../ReserveModal';
import QuoteModal from '../QuoteModal';

function BannerMenu() {
    return (
        <Stack direction="row" spacing={2}>
            <ReserveModal />
            <QuoteModal />
        </Stack>
    )
}

export default BannerMenu;