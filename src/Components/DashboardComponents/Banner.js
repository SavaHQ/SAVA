import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";

function HeroBanner() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.root}>
        <Box className={classes.textWrapper}>
          <Typography variant="h1" className={classes.title}>
            Dashboard
          </Typography>
          <Typography variant="h7" className={classes.subtitle2}>
            Email
          </Typography>
        </Box>
      </Box>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#000",
    color: "#ffffff",
    padding: "100px",
  },
  textWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
}));

export default HeroBanner;
