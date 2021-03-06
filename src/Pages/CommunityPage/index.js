import React from "react";
import HeroSection from "../../Components/HomeComponents/heroSection";
import CommunityPageData from "../../Data/CommunityPageData.json";
import InfoBanner from "../../Components/InfoBanner/infoBanner";
import { useHistory } from "react-router";
import * as ROUTES from "../../Constants/routesEndpoints";
function CommunityPage() {
  const objectData = CommunityPageData;
  const history = useHistory();
  return (
    <>
      <HeroSection
        title={objectData.title}
        content={objectData.content}
        image={objectData.image}
        buttonTitleLeft={objectData.buttonTitleLeft}
        buttonTitleRight={objectData.buttonTitleRight}
        onButtonClickLeft={() => history.push(ROUTES.FORSTARTUP)}
        onButtonClickRight={() => window.open("https://bit.ly/joinsava", "_self")}
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
    </>
  );
}

export default CommunityPage;
