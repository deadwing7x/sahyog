import React, { useEffect, useState } from "react";
import campaigns from "../../data/campaigns";
import Campaign from "../Campaign/Campaign";
import "./CampaignGallery.css";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const CampaignGallery = () => {
  const [campaignImages, setCampaignImages] = useState([]);
  const [redirect, setRedirect] = useState(false);
  const [campaignName, setCampaignName] = useState("");
  const [caption, setCaption] = useState("");
  const history = useHistory();

  useEffect(() => {
    if (redirect) {
      history.push({
        pathname: `/campaign-gallery/:${campaignName}`,
        state: {
          images: campaignImages,
          caption: caption,
        },
      });
    }
  });

  return (
    <div className="jumbotron" id="campaignGallery">
      <div className="galleryDiv">
        <p id="campaigns">Campaign Gallery</p>
        <div className="row col-md-12 gallery">
          {campaigns.map((campaign) => {
            return (
              <div className="col-md-3 campaigns" key={campaign.Name}>
                <Button
                  onClick={() => {
                    setCampaignName(campaign.Name);
                    setRedirect(true);
                    setCampaignImages(
                      campaigns.filter((x) => x.Name === campaign.Name)[0]
                        .Images
                    );
                    setCaption(
                      campaigns.filter((x) => x.Name === campaign.Name)[0]
                        .Caption
                    );
                  }}
                  className="individual-campaign"
                >
                  <Campaign
                    Name={campaign.Name}
                    Thumbnail={campaign.Thumbnail}
                  />
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CampaignGallery;
