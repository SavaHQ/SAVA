import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import CardComponent from "../CardComponents/cardComponent";

function HeroSection() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.wrapper}>
        <Box className={classes.leftContainer}>
          <CardComponent
            image="assests/images/cardOne.png"
            title="What are we trying to do?"
            content="Sava is an invite-only community of content creators looking to empower themselves by sharing what they’ve learnt overtime"
            buttonTitle="Find out more"
          />
        </Box>
        <Box className={classes.rightContainer}>
          <CardComponent
            image="assests/images/cardTwo.png"
            title="What's the catch for Startups?"
            content="Sava sources these brilliant Content Creators to startups who are looking for Creative Talent as interns"
            buttonTitle="Get in Touch"
          />
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
    height: "120vh",
    width: "100%",
  },
  title: {
    fontSize: 58,
    letterSpacing: 0.2,
    color: "#252B42",
    lineHeight: 1.4,
    marginLeft: 75,
    inlineSize: "600px",
    overflowWrap: "break-word",
  },
  subtitle: {
    fontSize: 16,
    letterSpacing: 0.1,
    lineHeight: 4,
    color: "#222222",
    fontWeight: 700,
    marginLeft: 80,
  },
  subtitle2: {
    letterSpacing: 0.1,
    marginLeft: 80,
    inlineSize: "500px",
    overflowWrap: "break-word",
    color: "#737373",
  },

  buttonWrapper: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 80,
    marginTop: "-40px",
  },
  leftContainer: {
    display: "flex",
    flex: 2,
    flexDirection: "column",
    justifyContent: "center", // main Access alignment(vertical ) (y  axis)    &&   flexDirection: "row",   (x  axis)
    alignItems: "center",
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
