import { Box, makeStyles } from "@material-ui/core";
import React from "react";

function HeroSection() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.wrapper}>
        <Box className={classes.leftContainer}></Box>
        <Box className={classes.rightContainer}></Box>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#ffffff",
  },
  wrapper: {
    display: "flex",
    height: "50px",
  },
  leftContainer: {
    display: "flex",
    flex: 2,
    background: "red",
  },
  rightContainer: {
    flex: 2,
    background: "yellow",
  },
}));

export default HeroSection;
