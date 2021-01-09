import React, { useState } from "react";
import Campaign from "../Campaign/Campaign";
import campaigns from "../../data/campaigns";
import { Button } from "react-bootstrap";
import "./Gallery.css";
import CampaignPictures from "../CampaignPictures/CampaignPictures";
import { useRouteMatch, useLocation } from "react-router-dom";

const Gallery = () => {
  const [campaignImages, setCampaignImages] = useState([]);
  const [campaignClicked, setCampaignClicked] = useState(false);
  const [campaignName, setCampaignName] = useState("");
  const match = useRouteMatch("/campaign-gallery/:campaign");
  const location = useLocation();
  let imagesArr = [];
  let nameOfCampaign = "";
  if (match) {
    nameOfCampaign = match.params.campaign.split(":")[1];
    imagesArr = location.state.images;
    setTimeout(() => {
      document.getElementById("imagesList").scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  }

  return (
    <div className="jumbotron" id="gallery">
      <p id="campaign">Our Campaigns</p>
      <div className="row col-md-12 campaign-gallery">
        {campaigns.map((campaign) => {
          return (
            <div className="col-md-3 campaigns" key={campaign.Name}>
              <Button
                onClick={() => {
                  setCampaignClicked(true);
                  setCampaignImages(
                    campaigns.filter((x) => x.Name === campaign.Name)[0].Images
                  );
                  setCampaignName(campaign.Name);
                  document.getElementById("imagesList").scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="individual-campaign"
              >
                <Campaign Name={campaign.Name} Thumbnail={campaign.Thumbnail} />
              </Button>
            </div>
          );
        })}
        <div id="imagesList" className="campaignImagesList">
          {campaignClicked ? (
            <>
              <p id="name">{campaignName}</p>
              <CampaignPictures Images={campaignImages} />
            </>
          ) : match ? (
            <>
              <p id="name">{nameOfCampaign}</p>
              <CampaignPictures Images={imagesArr} />
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
