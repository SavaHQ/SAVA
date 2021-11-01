import { Box, Typography, makeStyles } from "@material-ui/core";
import React from "react";
import CustomButton from "../CustomButtonComponents/CustomButton";

function GlassCard() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.wrapper}>
        <Box className={classes.mainContainer}>
          <Box className={classes.leftContainer}>
            <Typography variant="h5" className={classes.title}>
              Are you looking to hire creative interns?
            </Typography>
            <Typography variant="h5" className={classes.subContent}>
              The process is simple, you share with us your requirements and we vet them, post them
              on our job board, and the community gets notified. Why don’t we continue this
              conversation over a call?
            </Typography>
            <Box className={classes.buttonWrapper}>
              <CustomButton
                name="Schedule a Call"
                color="#ffffff"
                width="188px"
                background="#666E78"
                onButtonClick={() => console.log()}
                borderRadius={5}
                isRadius={true}
              />
            </Box>
          </Box>
          <Box className={classes.rightContainer}>
            <img src="assests/images/glassSectionImage.png" alt="glassSectionImage" />
          </Box>
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
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: "2.3565rem",
    letterSpacing: "0.01em",
    marginLeft: 25,
    inlineSize: "800px",
    overflowWrap: "break-word",
    fontStyle: "normal",
    fontWeight: "bold",
    textTransform: "capitalize",
    color: "#252B42",
    paddingBottom: "20px",
  },
  mainContainer: {
    width: "80%",
    maxWidth: " 1000px",
    margin: " 50px auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  subContent: {
    marginLeft: 30,
    fontSize: "16px",
    color: " #4B4B4B",
    paddingBottom: "10px",
  },
  buttonWrapper: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 30,
    paddingTop: "40px",
  },
  leftContainer: {
    textAlign: "left",
    display: "flex",
    width: " 850px",
    flexDirection: "column",
    justifyContent: "center", // main Access alignment(vertical ) (y  axis)    &&   flexDirection: "row",   (x  axis)
    alignItems: "flex-start", // cross access alignment(Horizontal)(x  axis)  && flexDirection: "row",   (y  axis)
    background: "rgba(248, 248, 248, 0.77)",
    backdropFilter: "blur(9px)",
    borderRadius: "16px",
    minHeight: "350px",
    padding: " 30px",
  },
  rightContainer: {
    width: "50%",
    height: "500px",
    borderRadius: "8px",
    marginLeft: "-75px",
    justifyContent: "center", // main Access alignment(vertical ) (y  axis)    &&   flexDirection: "row",   (x  axis)
    alignItems: "flex-start", // cross access alignment(Horizontal)(x  axis)  && flexDirection: "row",   (y  axis)
  },
}));

export default GlassCard;
