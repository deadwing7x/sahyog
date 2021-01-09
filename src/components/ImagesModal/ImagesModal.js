import React from "react";
import { Modal } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel'

const ImageSlideShowModal = (props) => {
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
          {props.images.map((image, i) => {
            return (
              <div key={i + 1}>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={image}
                    alt={props.name}
                  />
                  <Carousel.Caption>
                    <h4>{props.caption}</h4>
                  </Carousel.Caption>
                </Carousel.Item>
              </div>
            );
          })}
        </Carousel>
      </Modal.Body>
    </Modal>
  );
};

export default ImageSlideShowModal;
