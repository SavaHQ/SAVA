import { Box, makeStyles, Typography } from "@material-ui/core";

import React from "react";
import CustomButton from "../CustomButtonComponents/CustomButton";

function InfoBanner({ isTextRight, isBackgroundColor, isPolygon, alignItems, textAlign }) {
  const classes = useStyles();
  return (
    <Box
      style={{
        display: "flex",
        padding: "100px",
        flexDirection: isTextRight ? "row-reverse" : "row",
        backgroundColor: isBackgroundColor,
        clipPath: isPolygon ? "polygon(0 11%, 100% 0, 100% 50%, 100% 88%, 0 100%, 0% 50%)" : "none",
        alignItems: alignItems,
        textAlign: "left",
      }}
    >
      <Box className={classes.infoContainer}>
        <Typography variant="h1" className={classes.title}>
          Lorem ipsum dolor sit amet
        </Typography>
        <Typography variant="body1" className={classes.subtitle}>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque sit viverra turpis eu.
          Pellentesque scelerisque nec enim tempus netus mi proin viverra eu. Auctor neque, amet,
          eget elit.{" "}
        </Typography>

        <CustomButton
          className={classes.button}
          name="Learn More"
          color="#666E78"
          background="#FFFFFF"
          onButtonClick={() => console.log("Login")}
          border=" 2px solid #666E78"
          borderRadius={5}
          isRadius={true}
        />
      </Box>
      <Box className={classes.imageContainer}>
        <Box className={classes.image} />
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "50px",
    width: "66%",
    paddingBottom: "20px",
  },

  infoContainer: {
    display: "flex",
    flexDirection: "column",
  },
  imageContainer: {},
  subtitle: {
    color: theme.palette.text.secondary,
    width: "66%",
    paddingBottom: "70px",
  },
  image: {
    height: "50vh",
    width: "30vw",
    backgroundColor: "#EBEBEB",
  },
}));

export default InfoBanner;
