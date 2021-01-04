import React from "react";
import { Figure } from "react-bootstrap";
import campaigns from "../data/campaigns";
import "./CampaignGallery.css";

const CampaignGallery = () => {
  return (
    <div className="jumbotron" id="campaignGallery">
      <p id="campaigns">Our Campaigns</p>
      <div className="row col-md-12 gallery">
        {campaigns.map((campaign) => {
          return (
            <div className="col-md-3">
              <Figure>
                <Figure.Image
                  src={campaign.Thumbnail}
                  className="campaignImage"
                  alt={campaign.Name}
                />
                <Figure.Caption className="campaignText">
                  {campaign.Name}
                </Figure.Caption>
              </Figure>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CampaignGallery;
