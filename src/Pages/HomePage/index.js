import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import HeroSection from "../../Components/HomeComponents/heroSection";
import CompanyWrapper from "../../Components/CompaniesDisplayComponents/CompanyWrapper";
import CardSection from "../../Components/CardSection/cardSection";
import Stats from "../../Components/StatsComponent/stats";
import GlassCard from "../../Components/HomeComponents/glassCard";
import sampleData from "../../Data/sampleData.json";
import ConnectBanner from "../../Components/ConnectBannerComponent/connectBanner";
import TestimonialSection from "../../Components/TestimonialSection/index.js";
function HomePage() {
  const classes = useStyles();
  const objectData = sampleData;

  return (
    <Box className={classes.root}>
      <HeroSection
        title={objectData.title}
        subtitle={objectData.subtitle}
        content={objectData.content}
        image={objectData.image}
        buttonTitleLeft={objectData.buttonTitleLeft}
        buttonTitleRight={objectData.buttonTitleRight}
      />
      <CompanyWrapper />
      <CardSection />
      <Stats />
      <GlassCard />
      <TestimonialSection />
      <ConnectBanner />
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default HomePage;
