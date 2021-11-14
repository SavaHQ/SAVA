import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";

function HeroBanner({ loginUserEmail }) {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography variant="h1" className={classes.container}>
        Dashboard
      </Typography>
      <Typography variant="subtitle2" className={classes.statsText}>
        {loginUserEmail}
      </Typography>
      );
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#0000",
    display: "flex",
    justifyContent: "center",
    color: "#ffffff",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  container: {
    padding: "50px",
  },
}));

export default HeroBanner;
