import { AppBar, makeStyles, Toolbar } from "@material-ui/core";
import React from "react";

function NavBarComponent() {
  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed">
        <Toolbar></Toolbar>
      </AppBar>
      <div className={classes.offset} />
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.denseToolbar,
}));

export default NavBarComponent;
