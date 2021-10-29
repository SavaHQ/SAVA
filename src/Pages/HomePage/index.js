import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import HeroSection from "../../Components/HomeComponents/heroSection";
import CompanyWrapper from "../../Components/CompaniesDisplayComponents/CompanyWrapper";
import CardSection from "../../Components/CardSection/cardSection";
import Stats from "../../Components/StatsComponent/stats";
import GlassCard from "../../Components/HomeComponents/glassCard";
import InfoBanner from "../../Components/InfoBanner/infoBanner";
import sampleData from "../../Data/sampleData.json";

function HomePage() {
  const classes = useStyles();
  const objectData = sampleData;

  return (
    <Box className={classes.root}>
      <HeroSection
        title={objectData.title}
        content={objectData.content}
        image={objectData.image}
        buttonTitleLeft={objectData.buttonTitleLeft}
        buttonTitleRight={objectData.buttonTitleRight}
      />
      <CompanyWrapper />
      <CardSection />
      <Stats />
      <GlassCard />
      <InfoBanner isBackgroundColor="#ffffff" paddingRight="20%" paddingLeft="0px" />
      <InfoBanner
        isTextRight={true}
        isBackgroundColor="#222222"
        color="#ffffff"
        paddingLeft="20%"
        paddingRight="0px"
      />
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default HomePage;
