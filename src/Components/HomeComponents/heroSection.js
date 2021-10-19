import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import React from "react";

function HeroSection() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.wrapper}>
        <Box className={classes.leftContainer}>
          <Box className={classes.infoContainer}>
            <Typography>Join Our Community</Typography>
            <Typography variant="h1" className={classes.title}>
              EASILY LAND AN INTERNSHIP
            </Typography>
            <Box pt={5} pb={10}>
              <Typography>
                We source micro-influencers to startups in need of Creative Talent.
              </Typography>
            </Box>

            <Box className={classes.buttonWrapper}>
              <Button>One</Button>
              <Button>Two</Button>
            </Box>
          </Box>
        </Box>
        <Box className={classes.rightContainer}>
          <img src="assests/images/heroImage.png" alt="heroImage" />
        </Box>
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
    height: "88vh",
  },
  infoContainer: {
    textAlign: "left",
    height: "88vh",
    display: "flex",
    flexDirection: "column",
    background: "#ffff",
    justifyContent: "center", // main Access alignment(vertical ) (y  axis)    &&   flexDirection: "row",   (x  axis)
    alignItems: "flex-start", // cross access alignment(Horizontal)(x  axis)  && flexDirection: "row",   (y  axis)
  },
  buttonWrapper: {
    display: "flex",
    flexDirection: "row",
  },
  leftContainer: {
    display: "flex",
    background: "red",
    flex: 2,
    justifyContent: "center",
  },
  rightContainer: {
    flex: 2,
    background: "#ffff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center", // main Access alignment(vertical ) (y  axis)    &&   flexDirection: "row",   (x  axis)
    alignItems: "center", // cross access alignment(Horizontal)(x  axis)  && flexDirection: "row",   (y  axis)
  },
}));

export default HeroSection;
