import { makeStyles, Box, Typography } from "@material-ui/core";
import React from "react";
import CustomButton from "../CustomButtonComponents/CustomButton";
function heroSection({ title, content, image, buttonTitleLeft, buttonTitleRight }) {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.infoContainer}>
        <Typography gutterBottom variant="h1" className={classes.title}>
          {title}
        </Typography>
        <Typography gutterBottom variant="h5" component="p" className={classes.paragraph}>
          {content}
        </Typography>
        <Box className={classes.buttonContainer}>
          <CustomButton
            name={buttonTitleLeft}
            color="#ffffff"
            background="#666E78"
            onButtonClick={() => console.log("Join Us")}
            borderRadius={5}
            isRadius={true}
          />
          <CustomButton
            name={buttonTitleRight}
            color="#666E78"
            background="#FFFFFF"
            onButtonClick={() => console.log("Learn More")}
            border=" 1px solid #666E78"
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
    flexDirection: "row",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      display: "block",
      height: "100%",
    },
    [theme.breakpoints.down("lg")]: {
      display: "block",
      height: "100%",
    },
  },
  title: {
    fontSize: 58,
    letterSpacing: 0.2,
    color: "#252B42",
    lineHeight: 1.4,
    overflowWrap: "break-word",
    [theme.breakpoints.down("sm")]: {
      fontSize: 38,
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
    height: "90%",
    width: "90%",
    [theme.breakpoints.down("lg")]: {
      width: "100%",
    },
    [theme.breakpoints.down("md")]: {
      height: "300px",
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      height: "300px",
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
  topTitle: {
    color: theme.palette.primary.main,
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(4),
    },
  },
}));

export default heroSection;
