import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";

function Banner() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography className={classes.title} variant="h1">
        Frequently Asked Question
      </Typography>
      <Box pt={2}>
        <Typography className={classes.subtitle} variant="subtitle1">
          Enter your select domain name and choose any extension name in the next step (choose
          between .com, .online, .tech, .site, .net, and more)
        </Typography>
      </Box>
      <img src="assests/images/vector_svg.png" className={classes.img} />
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    padding: "80px",
    height: "100%",
    background: "#666E78",
    [theme.breakpoints.down("sm")]: {
      padding: "50px",
    },
  },
  title: {
    color: "#ffffff",
  },
  subtitle: {
    color: "#E6E6E6",
  },
  img: {
    position: "absolute",
    left: 0,
    top: 0,
    height: "100%",
    width: "100%",
  },
}));

export default Banner;
