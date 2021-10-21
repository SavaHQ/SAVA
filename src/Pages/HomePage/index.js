import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import HeroSection from "../../Components/HomeComponents/heroSection";
import CompanyWrapper from "../../Components/CompaniesDisplayComponents/CompanyWrapper";
import CardSection from "../../Components/CardSection/cardSection";

function HomePage() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <HeroSection />
      <CompanyWrapper />
      <CardSection />
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default HomePage;
