import React from 'react';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ReservePage from '../ReservePage';
import styles from './styles';

function LoginModal() {
    const classes = styles();
    const [open, setOpen] = React.useState(false);
    const toggle = () => setOpen(!open);

    const body = (
        <div className={classes.paper}>
            <ReservePage />
        </div>
    );

    return (
        <div>
            <Button
                className={classes.button}
                variant="contained"
                startIcon={<DateRangeIcon />}
                sx={{ boxShadow: 15 }}
                size="large"
                onClick={toggle}
            >
                RESERVE NOW
            </Button>
            <Modal
                open={open}
                onClose={toggle}
                disableEnforceFocus
            >
                {body}
            </Modal>
        </div>
    );
}

export default LoginModal;