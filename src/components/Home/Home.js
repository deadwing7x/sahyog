import React from "react";
import CampaignGallery from "../CampaignGallery/CampaignGallery";
import ContactUs from "../ContactUs/ContactUs";
import MainContent from "../MainContent/MainContent";
import WhoAreWe from "../WhoAreWe/WhoAreWe";
import AimAndObjective from "../AimAndObjective/AimAndObjective";

const Home = () => {
  return (
    <>
      <MainContent />
      <WhoAreWe />
      <AimAndObjective />
      <CampaignGallery />
      <ContactUs />
    </>
  );
};

export default Home;
