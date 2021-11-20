import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import CardComponent from "../CardComponents/cardComponent";

function HeroSection({
  title,
  content,
  imageOne,
  imageTwo,
  titleCardOne,
  titleCardTwo,
  contentCardTwo,
  contentCardOne,
  buttonCardOne,
  backgroundcolor,
  buttonCardTwo,
  titleColor,
}) {
  const classes = useStyles();
  return (
    <Box className={classes.root} style={{ background: backgroundcolor }}>
      <Box className={classes.textWrapper}>
        <Typography variant="h1" className={classes.title} style={{ color: titleColor }}>
          {title}
        </Typography>
        <Typography variant="h7" className={classes.subtitle2} style={{ color: titleColor }}>
          {content}
        </Typography>
      </Box>
      <Container className={classes.container}>
        <Box className={classes.wrapper} pt={10} pb={10}>
          <CardComponent
            image={imageOne}
            title={titleCardOne}
            content={contentCardOne}
            buttonTitle={buttonCardOne}
          />

          <CardComponent
            image={imageTwo}
            title={titleCardTwo}
            content={contentCardTwo}
            buttonTitle={buttonCardTwo}
          />
        </Box>
      </Container>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    height: "100%",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
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
