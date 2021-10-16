import { Box, makeStyles } from "@material-ui/core";
import React from "react";

function HeroSection() {
  const classes = useStyles();
  return <Box className={classes.root}></Box>;
}

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#333333",
    height: "89.3vh",
  },
}));

export default HeroSection;
