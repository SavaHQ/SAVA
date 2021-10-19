import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import CustomButton from "../CustomButtonComponents/CustomButton";

function HeroSection() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.wrapper}>
        <Box className={classes.leftContainer}>
          <Box className={classes.infoContainer}>
            <Typography variant="h5" className={classes.subtitle}>
              Join Our Community
            </Typography>
            <Typography variant="h1" className={classes.title}>
              EASILY LAND AN INTERNSHIP
            </Typography>
            <Box pt={5} pb={10}>
              <Typography display="block" variant="h3" className={classes.subtitle2}>
                We source micro-influencers to startups in need of Creative Talent.
              </Typography>
            </Box>
            <Box className={classes.buttonWrapper}>
              <CustomButton
                name="Join Us"
                color="#ffffff"
                background="#666E78"
                onButtonClick={() => console.log("Join Us")}
                borderRadius={5}
                isRadius={true}
              />
              <CustomButton
                name="Learn More"
                color="#666E78"
                background="#FFFFFF"
                onButtonClick={() => console.log("Learn More")}
                border=" 1px solid #666E78"
                borderRadius={5}
                isRadius={true}
              />
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
  title: {
    fontSize: 58,
    letterSpacing: 0.2,
    color: "#252B42",
    lineHeight: 1.4,
    marginLeft: 60,
  },
  subtitle: {
    fontSize: 16,
    letterSpacing: 0.1,
    lineHeight: 4,
    color: "#222222",
    fontWeight: 700,
    marginLeft: 65,
  },
  subtitle2: {
    letterSpacing: 0.1,
    marginLeft: 65,
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
    marginLeft: 65,
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
