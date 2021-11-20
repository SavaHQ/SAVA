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
import { useHistory } from "react-router";
import * as ROUTES from "../../Constants/routesEndpoints";

function HomePage() {
  const classes = useStyles();
  const objectData = sampleData;
  const history = useHistory();
  return (
    <Box className={classes.root}>
      <HeroSection
        title={objectData.title}
        subtitle={objectData.subtitle}
        content={objectData.content}
        image={objectData.image}
        buttonTitleLeft={objectData.buttonTitleLeft}
        buttonTitleRight={objectData.buttonTitleRight}
        onButtonClickLeft={() => history.push(ROUTES.FORSTARTUP)}
        onButtonClickRight={() => window.open("https://discord.gg/JPXv2KPPTE", "_self")}
      />
      <CompanyWrapper backgroundColor="000000" />
      <CardSection
        title={objectData.cardSection.title}
        content={objectData.cardSection.content}
        imageOne={objectData.cardSection.imageOne}
        imageTwo={objectData.cardSection.imageTwo}
        titleCardOne={objectData.cardSection.titleCardOne}
        titleCardTwo={objectData.cardSection.titleCardTwo}
        contentCardTwo={objectData.cardSection.contentCardTwo}
        contentCardOne={objectData.cardSection.contentCardOne}
        buttonCardOne={objectData.cardSection.buttonCardOne}
        buttonCardTwo={objectData.cardSection.buttonCardTwo}
      />
      <Stats backgroundColor="#666E78" />
      <GlassCard image={objectData.glasssection.image} />
      <TestimonialSection />
      <ConnectBanner />
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default HomePage;
