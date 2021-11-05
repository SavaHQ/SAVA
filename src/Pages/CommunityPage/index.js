import React from "react";
import HeroSection from "../../Components/HomeComponents/heroSection";
import CommunityPageData from "../../Data/CommunityPageData.json";
import InfoBanner from "../../Components/InfoBanner/infoBanner";

function CommunityPage() {
  const objectData = CommunityPageData;
  return (
    <>
      <HeroSection
        title={objectData.title}
        content={objectData.content}
        image={objectData.image}
        buttonTitleLeft={objectData.buttonTitleLeft}
        buttonTitleRight={objectData.buttonTitleRight}
      />

      <InfoBanner
        isBackgroundColor="#ffffff"
        paddingRight="20%"
        paddingLeft="0px"
        titleText={objectData.infoBannerOne.titleText}
        contentText={objectData.infoBannerOne.contentText}
      />
      <InfoBanner
        isTextRight={true}
        isBackgroundColor="#222222"
        color="#ffffff"
        paddingLeft="20%"
        paddingRight="0px"
        titleText={objectData.infoBannerTwo.titleText}
        contentText={objectData.infoBannerTwo.contentText}
      />
      <InfoBanner
        isBackgroundColor="#ffffff"
        paddingRight="20%"
        paddingLeft="0px"
        titleText={objectData.infoBannerThree.titleText}
        contentText={objectData.infoBannerThree.contentText}
      />
    </>
  );
}

export default CommunityPage;
