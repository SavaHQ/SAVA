import React from "react";
// import { makeStyles } from "@material-ui/core";
import HeroSection from "../../Components/HomeComponents/heroSection";
import StartPageData from "../../Data/StartupPageData.json";
import InfoBanner from "../../Components/InfoBanner/infoBanner";

function ForStartupPage() {
  // const classes = useStyles();
  const objectData = StartPageData;
  return (
    <>
      <HeroSection
        title={objectData.title}
        content={objectData.content}
        image={objectData.image}
        buttonTitleLeft={objectData.buttonTitleLeft}
        buttonTitleRight={objectData.buttonTitleRight}
      />

      <InfoBanner isBackgroundColor="#ffffff" paddingRight="20%" paddingLeft="0px" />
      <InfoBanner
        isTextRight={true}
        isBackgroundColor="#222222"
        color="#ffffff"
        paddingLeft="20%"
        paddingRight="0px"
      />
    </>
  );
}

// const useStyles = makeStyles((theme) => ({
//   root: {},
// }));

export default ForStartupPage;
