import React, { useState } from "react";
import Campaign from "../Campaign/Campaign";
import campaigns from "../../data/campaigns";
import { Button } from "react-bootstrap";
import "./Gallery.css";
import CampaignPictures from "../CampaignPictures/CampaignPictures";

const Gallery = () => {
  const [campaignImages, setCampaignImages] = useState([]);
  const [campaignClicked, setCampaignClicked] = useState(false);
  const [campaignName, setCampaignName] = useState("");

  return (
    <div className="jumbotron" id="gallery">
      <p id="campaign">Our Campaigns</p>
      <div className="row col-md-12 campaign-gallery">
        {campaigns.map((campaign) => {
          return (
            <div className="col-md-3 campaigns">
              <Button
                onClick={() => {
                  setCampaignClicked(true);
                  setCampaignImages(
                    campaigns.filter((x) => x.Name === campaign.Name)[0].Images
                  );
                  setCampaignName(campaign.Name);
                }}
                className="individual-campaign"
              >
                <Campaign Name={campaign.Name} Thumbnail={campaign.Thumbnail} />
              </Button>
            </div>
          );
        })}
        {campaignClicked ? (
          <div className='campaignImagesList'>
            <p id="name">{campaignName}</p>
            <CampaignPictures Images={campaignImages} />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Gallery;
