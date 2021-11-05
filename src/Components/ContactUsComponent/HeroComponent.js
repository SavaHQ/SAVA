import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";

function HeroComponent() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.infoBox}>
        <Box pb={5}>
          <Typography variant="h1">Looking to hire? Let’s chat!</Typography>
        </Box>
        <Typography className={classes.paragraph} variant="subtitle1">
          Feel free to use any of the channels given below to contact us and if we don’t respond in
          under 30 minutes, pizza’s on us.
        </Typography>
      </Box>
      <Box className={classes.container}>
        {" "}
        <img src="assests/images/contact.jpg" className={classes.image} />
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
