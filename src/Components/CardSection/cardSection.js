import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import CardComponent from "../CardComponents/cardComponent";

function HeroSection() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.textWrapper}>
        <Typography variant="h5" className={classes.subtitle}>
          Practice Advice
        </Typography>
        <Typography variant="h2" className={classes.title}>
          What is Lorem Ipsum
        </Typography>
        <Typography variant="h5" className={classes.subtitle2}>
          Problems trying to resolve the conflict between the two major realms of Classical physics:
          Newtonian mechanics
        </Typography>
      </Box>
      <Container>
        <Box className={classes.wrapper}>
          <Box className={classes.leftContainer}>
            <CardComponent
              image="assests/images/cardOne.gif"
              title="What are we trying to do?"
              content="Sava is an invite-only community of content creators looking to empower themselves by sharing what they’ve learnt"
              buttonTitle="Find out more"
            />
          </Box>
          <Box className={classes.rightContainer}>
            <CardComponent
              image="assests/images/cardTwo.gif"
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
    height: "100vh",
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
  title: {
    height: "45px",
    fontWeight: " bold",
    fontSize: " 34px",
  },
  subtitle: {
    color: "#96BB7C",
    marginTop: "120px",
    fontWeight: "bold",
  },
  textWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  subtitle2: {
    inlineSize: "600px",
    overflowWrap: "break-word",
  },
}));

export default HeroSection;
