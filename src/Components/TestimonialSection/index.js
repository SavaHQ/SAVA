import { Box, Grid, Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import ReviewCard from "../TestimonialCard/index.js";
import CardContainer from "../CardContainer/cardContainer.js";
import FadeReveal from "../FadeReveal";

const TestimonialList = [
  {
    name: "Vrushank Vyas",
    description:
      "SAVA seems to have unique access to talented students who are genuinely excited to learn the ropes of work and are looking to contribute meaningfully. The interns that we are working with have high work ethic and creativity. Look forward to tapping into their community for more!",
    designation: "Directors of Marketing, AIcrowd",
  },
  {
    name: "Vrushank Vyas",
    description:
      "SAVA seems to have unique access to talented students who are genuinely excited to learn the ropes of work and are looking to contribute meaningfully. The interns that we are working with have high work ethic and creativity. Look forward to tapping into their community for more!",
    designation: "Directors of Marketing, AIcrowd",
  },
  {
    name: "Vrushank Vyas",
    description:
      "SAVA seems to have unique access to talented students who are genuinely excited to learn the ropes of work and are looking to contribute meaningfully. The interns that we are working with have high work ethic and creativity. Look forward to tapping into their community for more!",
    designation: "Directors of Marketing, AIcrowd",
  },
];

function TestimonialSection() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <FadeReveal>
        <Container className={classes.titleContainer}>
          <Typography variant="h1" color="textprimary" component="span">
            What our client&apos;s say
          </Typography>
        </Container>
      </FadeReveal>
      <Grid className={classes.gridScroll}>
        <div className={classes.reviewSlide}>
          {TestimonialList.map((item, index) => {
            return (
              <CardContainer key={index} className={classes.MainSection}>
                <ReviewCard
                  name={item.name}
                  description={item.description}
                  designation={item.designation}
                />
              </CardContainer>
            );
          })}
        </div>
      </Grid>
    </Box>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 450,
  },
  titleContainer: {
    textAlign: "center",
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(7),
  },

  "@keyframes slideshow": {
    "0%": {
      left: "10%",
    },
    "100%": {
      left: "-140%",
    },
  },
  reviewSlide: {
    position: "inherit",
    left: 0,
    top: 0,
    overflow: "hidden",
    display: "flex",
    width: "250%",
    animation: "$slideshow 140s linear infinite",
    display: "flex",
  },
  gridScroll: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
    position: "relative",
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      overflow: "scroll",
    },
  },
}));

export default TestimonialSection;
