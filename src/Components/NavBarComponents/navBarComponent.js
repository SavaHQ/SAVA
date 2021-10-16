import { AppBar, makeStyles, Toolbar } from "@material-ui/core";
import React from "react";

function NavBarComponent() {
  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} elevation={0}>
        <Toolbar></Toolbar>
      </AppBar>
      <div className={classes.offset} />
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.denseToolbar,
  appBar: {
    background: "#FFFFFF",
    height: "80px",
  },
}));

export default NavBarComponent;
