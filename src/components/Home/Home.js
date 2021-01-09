import React from "react";
import CampaignGallery from "../CampaignGallery/CampaignGallery";
import ContactUs from "../ContactUs/ContactUs";
import MainContent from "../MainContent/MainContent";
import WhoAreWe from "../WhoAreWe/WhoAreWe";
import AimAndObjective from "../AimAndObjective/AimAndObjective";
import LazyLoad from "react-lazy-load";

const Home = () => {
  return (
    <>
      <MainContent />
      <WhoAreWe />
      <LazyLoad offsetVertical={500}>
        <AimAndObjective />
      </LazyLoad>
      <CampaignGallery />
      <ContactUs />
    </>
  );
};

export default Home;
