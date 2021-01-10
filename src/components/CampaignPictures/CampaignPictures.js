import React, { useState } from "react";
import { Image } from "react-bootstrap";
import ImageSlideShowModal from "../ImagesModal/ImagesModal";
import "./CampaignPictures.css";

const CampaignPictures = (props) => {
  const [modalShow, setModalShow] = useState(false);
  const [index, setIndex] = useState(0);

  let currentImage = "";
  let currentIndex = 0;

  const handleImageClick = (image) => {
    currentImage = props.images.filter((x) => x === image);
    currentIndex = props.images.indexOf(currentImage[0]);
    setIndex(currentIndex);
    setModalShow(true);
  };

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
                onClick={() => {
                  handleImageClick(image);
                }}
              />
            </div>
          </div>
        );
      })}
      <ImageSlideShowModal
        show={modalShow}
        name={props.campaignName}
        images={props.images}
        currentIndex={index}
        caption={props.caption}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default CampaignPictures;
