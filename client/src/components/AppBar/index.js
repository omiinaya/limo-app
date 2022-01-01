import React from "react";
import MenuIcon from '@material-ui/icons/Menu';
import { 
    AppBar,
    Toolbar,
    IconButton,
    Button,
    Typography
} from '@material-ui/core';
import styles from './styles'

function Home() {
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

export default Home;
