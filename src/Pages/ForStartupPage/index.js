import React from "react";
import { makeStyles } from "@material-ui/core";

function ForStartupPage() {
  const classes = useStyles();
  return (
    <>
      <h1 className={classes.title}>Startup page</h1>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default ForStartupPage;
