import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import styles from "./styles";

function NavBar(props) {
  const classes = styles();
  return (
    <div>
      <AppBar position="relative" className={classes.root}>
        <Toolbar>
          <div className={classes.title}>
            <Typography variant="h6">1</Typography>
          </div>
          <div className={classes.menu}>
            <Typography variant="h6" className={classes.item}>
              2
            </Typography>
            <Typography variant="h6" className={classes.item}>
              3
            </Typography>
          </div>
          <div className={classes.edge}>
            <Typography variant="h6">4</Typography>
          </div>
        </Toolbar>
      </AppBar>
      {props.content}
    </div>
  );
}

export default NavBar;
