import React from "react";
import campaigns from "../data/campaigns";
import Campaign from "./Campaign";
import "./CampaignGallery.css";

const CampaignGallery = () => {
  return (
    <div className="jumbotron" id="campaignGallery">
      <p id="campaigns">Campaign Gallery</p>
      <div className="row col-md-12 gallery">
        {campaigns.map((campaign) => {
          return (
            <div className="col-md-3">
              <Campaign Name={campaign.Name} Thumbnail={campaign.Thumbnail} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CampaignGallery;
