import React, { useState } from "react";
import { Image } from "react-bootstrap";
import ImageSlideShowModal from "../ImagesModal/ImagesModal";
import "./CampaignPictures.css";

const CampaignPictures = (props) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="row col-md-12 campaignImagesDiv">
      {props.images.map((image) => {
        return (
          <div key={Math.random()}>
            <div className="col-md-4">
              <Image
                className="campaign-images"
                src={image}
                title="Click to view enlarged image"
                alt={props.campaignName}
                onClick={() => setModalShow(true)}
              />
            </div>
          </div>
        );
      })}
      <ImageSlideShowModal
        show={modalShow}
        name={props.campaignName}
        images={props.images}
        caption={props.caption}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default CampaignPictures;
