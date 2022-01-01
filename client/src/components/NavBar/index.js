import React from "react";
import { 
    AppBar,
    Toolbar,
    Button,
    Typography
} from '@material-ui/core';
import styles from './styles'

function NavBar(props) {
    const classes = styles();
    return (
        <div>
            <AppBar position="relative" className={classes.root}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            {props.content}
        </div>
    )
}

export default NavBar;
