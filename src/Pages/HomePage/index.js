import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import HeroSection from "../../Components/HomeComponents/heroSection";
import CompanyWrapper from "../../Components/CompaniesDisplayComponents/CompanyWrapper";
import CardSection from "../../Components/CardSection/cardSection";
import Stats from "../../Components/StatsComponent/stats";
import GlassCard from "../../Components/HomeComponents/glassCard";
import InfoBanner from "../../Components/InfoBanner/infoBanner";

function HomePage() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <HeroSection />
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
