import React from "react";
import CampaignGallery from "../CampaignGallery/CampaignGallery";
import ContactUs from "../ContactUs/ContactUs";
import MainContent from "../MainContent/MainContent";
import WhoAreWe from "../WhoAreWe/WhoAreWe";
import AimAndObjective from "../AimAndObjective/AimAndObjective";
import Recognitions from "../Recognitions/Recognitions";

const Home = () => {
  return (
    <>
      <MainContent />
      <WhoAreWe />
      <AimAndObjective />
      <CampaignGallery />
      <Recognitions />
      <ContactUs />
    </>
  );
};

export default Home;
