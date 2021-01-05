import React from "react";
import CampaignGallery from "./CampaignGallery";
import ContactUs from "./ContactUs";
import MainContent from "./MainContent";
import WhoAreWe from "./WhoAreWe";
import AimAndObjective from "./AimAndObjective";

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
