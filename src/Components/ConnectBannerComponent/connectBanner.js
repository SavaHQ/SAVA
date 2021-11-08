import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import CustomButton from "../CustomButtonComponents/CustomButton";

function ConnectBanner() {
  const classes = useStyle();
  return (
    <Box className={classes.root}>
      <Box pb={2}>
        <Typography variant="h1" classes={classes.title} gutterBottom>
          Schedule a call with us today 🙌
        </Typography>
      </Box>
      <CustomButton
        name="Contact Us"
        color="#ffffff"
        background="#54759E"
        onButtonClick={() => window.open("https://discord.gg/JPXv2KPPTE", "_self")}
        borderRadius={5}
        isRadius={true}
      />
    </Box>
  );
}

const useStyle = makeStyles((theme) => ({
  root: {
    position: "relative",
    padding: "100px",
    height: "100%",
    backgroundImage: "url(assests/images/vector_svg.png)",
    [theme.breakpoints.down("sm")]: {
      padding: "50px",
    },
  },
  title: {
    color: "#ffffff",
  },
  subtitle: {
    color: "#E6E6E6",
  },
  img: {
    position: "absolute",
    left: 0,
    top: 0,
    height: "100%",
    width: "100%",
  },
  link: {
    textDecoration: "none",
  },
}));
export default ConnectBanner;
