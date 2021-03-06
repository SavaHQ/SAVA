import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import HeroSection from "../../Components/HomeComponents/heroSection";
import StartPageData from "../../Data/StartupPageData.json";
import InfoBanner from "../../Components/InfoBanner/infoBanner";
import { useHistory } from "react-router";
import * as ROUTES from "../../Constants/routesEndpoints";

function ForStartupPage() {
  const classes = useStyles();
  const objectData = StartPageData;
  const history = useHistory();
  return (
    <Box className={classes.root}>
      <HeroSection
        title={objectData.title}
        content={objectData.content}
        image={objectData.image}
        buttonTitleLeft={objectData.buttonTitleLeft}
        buttonTitleRight={objectData.buttonTitleRight}
        onButtonClickLeft={() => history.push(ROUTES.HOME)}
        onButtonClickRight={() =>
          window.open("https://calendly.com/vyomfromsava/networking-call", "_self")
        }
      />
      <InfoBanner
        isBackgroundColor="#ffffff"
        paddingRight="20%"
        paddingLeft="0px"
        image={objectData.infoBannerOne.image}
        titleText={objectData.infoBannerOne.titleText}
        contentText={objectData.infoBannerOne.contentText}
      />
      <InfoBanner
        isTextRight={true}
        isBackgroundColor="#222222"
        color="#ffffff"
        paddingLeft="20%"
        paddingRight="0px"
        image={objectData.infoBannerTwo.image}
        titleText={objectData.infoBannerTwo.titleText}
        contentText={objectData.infoBannerTwo.contentText}
      />
      <InfoBanner
        isBackgroundColor="#ffffff"
        paddingRight="20%"
        paddingLeft="0px"
        image={objectData.infoBannerThree.image}
        titleText={objectData.infoBannerThree.titleText}
        contentText={objectData.infoBannerThree.contentText}
      />
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
  },
}));

export default ForStartupPage;
