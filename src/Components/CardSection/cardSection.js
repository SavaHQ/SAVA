import { Box, Container, makeStyles } from "@material-ui/core";
import React from "react";
import CardComponent from "../CardComponents/cardComponent";

function HeroSection() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Container>
        <Box className={classes.wrapper}>
          <Box className={classes.leftContainer}>
            <CardComponent
              image="assests/images/cardOne.png"
              title="What are we trying to do?"
              content="Sava is an invite-only community of content creators looking to empower themselves by sharing what they’ve learnt"
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
      </Container>
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
  leftContainer: {
    display: "flex",
    flex: 4,
    flexDirection: "column",
    justifyContent: "center", // main Access alignment(vertical ) (y  axis)    &&   flexDirection: "row",   (x  axis)
    alignItems: "center",
  },
  rightContainer: {
    flex: 4,
    background: "#ffff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center", // main Access alignment(vertical ) (y  axis)    &&   flexDirection: "row",   (x  axis)
    alignItems: "center", // cross access alignment(Horizontal)(x  axis)  && flexDirection: "row",   (y  axis)
  },
}));

export default HeroSection;
