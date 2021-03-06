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
    name: "Nikita Vasvani",
    description:
      "We were one of the first users SavaHire had in the space of Crypto. At that time we were looking to source a Solidity Intern to whom we could offer a PPO. The SavaHire team connected with us and got to work on the same day. Powered with state-of-the-art scouting tech and a community they helped us save a ton of save time. I've already referred several of my counterparts to them. Their services are worth the shot.",
    designation: "HR @ Wowlabz",
  },
  {
    name: "Akankshu Argh Jain",
    description:
      "The SavaHire team helped us expand at an inflexion point in our startup. I like how the actual niche they specialise in isn't just Blockchain Development but rather immediate joiners who are hungry to make use of their skills. Would definitely recommend them, 10/10.",
    designation: "Co-founder @ BrahmaFi",
  },
];

function TestimonialSection({ titleColor }) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <FadeReveal>
        <Container className={classes.titleContainer}>
          <Typography
            variant="h1"
            color="textprimary"
            component="span"
            style={{ color: titleColor }}
          >
            Hear what our user&apos;s have to say
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
    width: "340%",
    animation: "$slideshow 100s linear infinite",
    [theme.breakpoints.down("sm")]: {
      animation: "$slideshow 25s linear infinite",
    },
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
