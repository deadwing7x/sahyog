import React from "react";
import CampaignGallery from "./CampaignGallery";
import ContactUs from "./ContactUs";
import MainContent from "./MainContent";
import WhoAreWe from "./WhoAreWe";

const Home = () => {
  return (
    <>
      <MainContent />
      <WhoAreWe />
      <CampaignGallery />
      <ContactUs />
    </>
  );
};

export default Home;
