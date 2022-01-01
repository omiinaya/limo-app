import React from "react";
import { 
    AppBar,
    Toolbar,
    Button,
    Typography
} from '@material-ui/core';
import styles from './styles'

function NavBar() {
    const classes = styles();
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar;
