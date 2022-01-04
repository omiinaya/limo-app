import React from "react";
import { Modal, Box, Typography, Button } from '@mui/material';
import styles from './styles'

function ReserveModal(props) {
    const classes = styles();
    //console.log(props)

    return (
        <Modal
            ref={props.myRef}
            className={classes.root}
            open={props.stateReserve}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            BackdropProps={{ style: { display: 'none' } }}
        >
            <Box>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Text in a modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>
                <Button onClick={ ()=> { props.myTest()}}>TEST</Button>
            </Box>
        </Modal>
    )
}

export default ReserveModal