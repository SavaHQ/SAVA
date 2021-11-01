import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import CustomButton from "../CustomButtonComponents/CustomButton";

function ConnectBanner() {
  const classes = useStyle();
  return (
    <Box className={classes.root}>
      <Box pb={2}>
        <Typography variant="h1" classes={classes.title} gutterBottom>
          Start the success of your website with us
        </Typography>
      </Box>
      <CustomButton
        name="Contact Us"
        color="#ffffff"
        background="#54759E"
        onButtonClick={() => console.log("Sign In")}
        borderRadius={5}
        isRadius={true}
      />
      <img src="assests/images/vector_svg.png" className={classes.img} />
    </Box>
  );
}

const useStyle = makeStyles((theme) => ({
  root: {
    position: "relative",
    padding: "100px",
    height: "100%",
    background: "#F7FAFE",
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
}));
export default ConnectBanner;
