import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import CardComponent from "../CardComponents/cardComponent";

function HeroSection() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.textWrapper}>
        <Typography variant="h1" className={classes.title}>
          What we are upto?
        </Typography>
        <Typography variant="h7" className={classes.subtitle2}>
          We are not just a crazy fast end-to-end hiring service, we are also a community. We are a
          pro-labour movement and believe that stipends must start at ₹10k/month.
        </Typography>
      </Box>
      <Container className={classes.container}>
        <Box className={classes.wrapper} pt={10} pb={10}>
          <CardComponent
            image="assests/images/cardOne.gif"
            title="What are we trying to do?"
            content="Sava is an invite-only community of content creators looking to empower themselves by sharing what they’ve learnt overtime"
            buttonTitle="Join our Community"
          />

          <CardComponent
            image="assests/images/cardTwo.gif"
            title="What's the catch for Startups?"
            content="Sava sources these brilliant Content Creators to startups who are looking for Creative Talent as interns."
            buttonTitle="Learn More"
          />
        </Box>
      </Container>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#F7FAFE",
  },
  wrapper: {
    display: "flex",
    height: "100%",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },

  container: {
    maxWidth: "80%",
  },

  title: {
    padding: "20px",
    paddingTop: "110px",
    fontWeight: " bold",
    fontSize: "2.3565rem",
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
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      display: "block",
      height: "100%",
    },
  },
  subtitle2: {
    inlineSize: "700px",
    color: "#808080",
    fontSize: "16px",
    lineHeight: "32px",
  },
}));

export default HeroSection;
