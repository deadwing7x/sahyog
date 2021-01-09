import React from "react";
import { Modal, Carousel, Image } from "react-bootstrap";

const ImageSlideShowModal = (props) => {
  const carouselImagesStyle = {
    height: "500px",
    width: "auto",
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Carousel>
          {props.images.map((image) => {
            return (
              <Carousel.Item>
                <Image
                  src={image}
                  style={carouselImagesStyle}
                  alt={props.name}
                />
                <Carousel.Caption>
                  <p>{props.caption}</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </Modal.Body>
    </Modal>
  );
};

export default ImageSlideShowModal;
