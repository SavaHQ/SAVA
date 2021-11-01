import { Box } from "@material-ui/core";
import React from "react";
import Banner from "../../Components/ContactUsComponent/Banner";
import ContactSection from "../../Components/ContactUsComponent/ContactSection";
import HeroComponent from "../../Components/ContactUsComponent/HeroComponent";
import TabSection from "../../Components/ContactUsComponent/TabSection";

function ContactUs() {
  return (
    <Box>
      <HeroComponent />
      <Banner />
      <TabSection />
      <ContactSection />
    </Box>
  );
}

export default ContactUs;
