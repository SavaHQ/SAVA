import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";

function HeroComponent() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.infoBox}>
        <Box pb={5}>
          <Typography variant="h1">What We Can Help you?</Typography>
        </Box>
        <Typography className={classes.paragraph} variant="subtitle1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus
          venenatis, lectus magna fringilla urna, porttitor Lorem ipsum dolor sit amet, consectetur
          adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor
        </Typography>
      </Box>
      <Box className={classes.container}>
        {" "}
        <img src="" className={classes.image} />
      </Box>
    </Box>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "row",
    padding: "120px",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      padding: "30px",
    },
  },
  infoBox: {
    display: "flex",
    textAlign: "left",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  paragraph: {
    textAlign: "left",
    fontSize: "16px",
    color: "#808080",
    width: "65%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  container: {
    display: "flex",
    height: "300px",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginTop: "40px",
    },
  },
}));

export default HeroComponent;
