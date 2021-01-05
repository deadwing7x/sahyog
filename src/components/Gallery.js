import React from "react";
import Campaign from "../components/Campaign";
import campaigns from "../data/campaigns";
import { Button } from "react-bootstrap";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div className="jumbotron" id="gallery">
      <p id="campaign">Our Campaigns</p>
      <div className="row col-md-12 campaign-gallery">
        {campaigns.map((campaign) => {
          return (
            <div className="col-md-3">
              <Button className="individual-campaign">
                <Campaign Name={campaign.Name} Thumbnail={campaign.Thumbnail} />
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
