import { Box, makeStyles, Typography } from "@material-ui/core";

import React from "react";
import CustomButton from "../CustomButtonComponents/CustomButton";

function InfoBanner({ isTextRight, isBackgroundColor, color, image, titleText, contentText }) {
  const classes = useStyles();
  return (
    <Box
      className={classes.container}
      style={{
        flexDirection: isTextRight ? "row-reverse" : "row",
        backgroundColor: isBackgroundColor,
        justifyContent: "space-between",
        color: color,
        textAlign: "left",
      }}
    >
      <Box className={classes.infoContainer}>
        <Typography gutterBottom variant="h1" className={classes.title}>
          {titleText}
        </Typography>
        <Typography gutterBottom variant="h5" component="p" className={classes.paragraph}>
          {contentText}
        </Typography>
        <Box className={classes.buttonContainer}>
          <CustomButton
            name="Learn More"
            color="#ffffff"
            background="#666E78"
            onButtonClick={() => console.log("Join Us")}
            borderRadius={5}
            isRadius={true}
          />
        </Box>
      </Box>
      <Box className={classes.imageContainer}>
        <img src={image} className={classes.image} />
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    height: "100%",
    padding: "100px",
    flexDirection: "row",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      display: "block",
      padding: "10px",
      height: "0",
    },
    [theme.breakpoints.down("lg")]: {
      display: "block",
      height: "100%",
      padding: "0",
    },
  },
  title: {
    letterSpacing: 0.2,
    fontSize: "2.3565rem",
    paddingBottom: "10px",
    lineHeight: 1.4,
    overflowWrap: "break-word",
    [theme.breakpoints.down("sm")]: {
      fontSize: 38,
    },
  },
  subtitle: {
    fontSize: "16px",
    paddingBottom: "70px",
    overflowWrap: "break-word",
    [theme.breakpoints.down("sm")]: {
      fontSize: 15,
    },
  },
  infoContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    textAlign: "left",
    justifyContent: "center",
    flex: 5,
    margin: theme.spacing(15),
    [theme.breakpoints.down("lg")]: {
      margin: theme.spacing(8),
      marginTop: theme.spacing(12),
    },
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(4),
      marginTop: theme.spacing(10),
    },
  },
  imageContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    flex: 6,
  },
  image: {
    height: "80%",
    backgroundColor: "#EBEBEB",
    width: "80%",
    [theme.breakpoints.down("lg")]: {
      width: "100%",
    },
    [theme.breakpoints.down("md")]: {
      height: "200px",
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      height: "200px",
      width: "100%",
    },
  },
  buttonContainer: {
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "row",
    },
  },
  paragraph: {
    marginTop: theme.spacing(2),
    lineHeight: theme.spacing(0.2),
  },
}));

export default InfoBanner;
