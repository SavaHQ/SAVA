import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import CustomButton from "../CustomButtonComponents/CustomButton";

function CommunityComponent() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.contain}>
        <Box className={classes.wrapper}>
          <Box className={classes.textWrapper}>
            <Typography variant="h1" className={classes.title}>
              Start the success of your website with us
            </Typography>
            <CustomButton
              name="join us"
              color="#ffffff"
              width="188px"
              background="#666E78"
              onButtonClick={() => console.log("join us")}
              borderRadius={5}
              isRadius={true}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    height: "400px",
    width: "100%",
    backgroundRepeat: "no-repeat",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "70px",
    marginBottom: "70px",
    backgroundImage: `url(${"assests/images/CTA.svg"})`,
    backgroundSize: "cover",
  },
  contain: {
    maxWidth: "1300px",
    margin: "auto",
  },
  title: {
    fontWeight: "bold",
    fontSize: "60px",
    inlineSize: "800px",
    overflowWrap: "break-word",
    textAlign: " center",
    color: "2E2E2E",
    padding: "20px",
  },
});

export default CommunityComponent;
