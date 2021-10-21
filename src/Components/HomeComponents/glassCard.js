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
              Are you a young Micro-Influencer?
            </Typography>
            <Typography variant="h5" className={classes.subContent}>
              Sava is the place to share what you’ve learnt overtime and learn from other content
              creators! Apply to join us, everything’s free 😄
            </Typography>
            <Box className={classes.buttonWrapper}>
              <CustomButton
                name="Join us"
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
    fontSize: "58px",
    letterSpacing: "0.01em",
    lineHeight: 1.4,
    marginLeft: 75,
    inlineSize: "700px",
    overflowWrap: "break-word",
    fontStyle: "normal",
    fontWeight: "bold",
    textTransform: "capitalize",
    color: "#252B42",
  },
  mainContainer: {
    width: "90%",
    maxWidth: " 1000px",
    margin: " 50px auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  subContent: {
    marginLeft: 80,
    inlineSize: "700px",
    overflowWrap: "break-word",
    fontStyle: "normal",
    fontWeight: " normal",
    fontSize: "20px",
    lineHeight: "34px",
    letterSpacing: "0.01em",
    color: " #4B4B4B",
  },
  buttonWrapper: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 80,
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
    minHeight: "390px",
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
