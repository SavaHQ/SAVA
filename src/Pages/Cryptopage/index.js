import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import HeroSection from "../../Components/HomeComponents/heroSection";
import CompanyWrapper from "../../Components/CompaniesDisplayComponents/CompanyWrapper";
import CardSection from "../../Components/CardSection/cardSection";
import Stats from "../../Components/StatsComponent/stats";
import GlassCard from "../../Components/HomeComponents/glassCard";
import cryptodata from "../../Data/cryptodata.json";
import ConnectBanner from "../../Components/ConnectBannerComponent/connectBanner";
import TestimonialSection from "../../Components/TestimonialSection/index.js";
import { useHistory } from "react-router";
import InfoBanner from "../../Components/InfoBanner/infoBanner";
import * as ROUTES from "../../Constants/routesEndpoints";

function CryptoPage() {
  const classes = useStyles();
  const objectData = cryptodata;
  const history = useHistory();
  return (
    <Box className={classes.root}>
      <HeroSection
        title={objectData.title}
        subtitle={objectData.subtitle}
        titleColor="white"
        content={objectData.content}
        image={objectData.image}
        buttonTitleLeft={objectData.buttonTitleLeft}
        buttonTitleRight={objectData.buttonTitleRight}
        onButtonClickLeft={() => history.push(ROUTES.FORSTARTUP)}
        onButtonClickRight={() => window.open("https://discord.gg/JPXv2KPPTE", "_self")}
      />
      <CompanyWrapper />
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
        backgroundColor="#222222"
      />
      <Stats backgroundColor="#222222" />
      <TestimonialSection />
      <InfoBanner
        isBackgroundColor="#222222"
        color="#ffffff"
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
      <GlassCard image={objectData.glasssection.image} />
      <ConnectBanner contentColor="white" />
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#222222",
  },
}));

export default CryptoPage;
