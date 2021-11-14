import { Box, Typography, makeStyles } from "@material-ui/core";
import React from "react";
import CustomButton from "../CustomButtonComponents/CustomButton";
import { Link } from "react-router-dom";

function GlassCard() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.wrapper}>
        <Box className={classes.mainContainer}>
          <Box className={classes.leftContainer}>
            <Typography variant="h5" className={classes.title}>
              Are you a content creator looking for an internship?
            </Typography>
            <Typography variant="h5" className={classes.subContent}>
              The members of the Sava Community get an unrestricted access to internships that pay
              atleast ₹10k/month 😄
            </Typography>
            <Box className={classes.buttonWrapper}>
              <Link
                className={classes.link}
                to={{ pathname: "https://discord.gg/JPXv2KPPTE" }}
                target="_parent"
              >
                <CustomButton
                  name="Join Us"
                  color="#ffffff"
                  width="188px"
                  background="#666E78"
                  onButtonClick={() => console.log()}
                  borderRadius={5}
                  isRadius={true}
                />
              </Link>
            </Box>
          </Box>
          <Box className={classes.rightContainer}>
            <img src="assests/images/glassnew.gif" alt="glassSectionImage"/>
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
    [theme.breakpoints.down("sm")]: {
      minHeight: "0vh",
    },
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
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px",
      inlineSize: "250px",
      overflowWrap: "break-word",
      paddingBottom: "20px",
    },
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
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
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
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      height: "200px",
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      width: " 350px",
      backdropFilter: "blur(9px)",
      borderRadius: "16px",
      minHeight: "350px",
      padding: " 30px",
    },
  },
  rightContainer: {
    width: "58%",
    height: "500px",
    borderRadius: "8px",
    marginLeft: "-75px",
    justifyContent: "center", // main Access alignment(vertical ) (y  axis)    &&   flexDirection: "row",   (x  axis)
    alignItems: "flex-start", // cross access alignment(Horizontal)(x  axis)  && flexDirection: "row",   (y  axis)
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  link: {
    textDecoration: "none",
  },
  image: {
    width: "220%",
    height: "120%",
  }
}));

export default GlassCard;
