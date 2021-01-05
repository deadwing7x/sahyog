import React from "react";
import { Image } from "react-bootstrap";
import "./CampaignPictures.css";

const CampaignPictures = (prop) => {
  return (
    <div className="row col-md-12 campaignImagesDiv">
      {prop.Images.map((image) => {
        return (
          <div className="col-md-4">
            <Image
              className="campaign-images"
              src={image}
              alt="campagin-image"
            />
          </div>
        );
      })}
    </div>
  );
};

export default CampaignPictures;
