import React, { useEffect, useState } from "react";
import { Modal, Carousel, Image } from "react-bootstrap";
import "./ImagesModal.css";

// TODO - Fix issue where carousel starts from first even on clicking the next image.
const PicturesCarousel = (props) => {
  const [mounted, setMounted] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
    return () => {
      setMounted(false);
    };
  }, []);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handleOnLoad = () => {
    setMounted(false);
  };

  return (
    <Modal
      {...props}
      size="lg"
      dialogClassName="myModal"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Carousel
          activeIndex={mounted ? props.currentIndex : index}
          onSelect={handleSelect}
          onClickCapture={handleOnLoad}
          interval={1500}
        >
          {props.images.map((image) => {
            return (
              <Carousel.Item>
                <Image
                  src={image}
                  className="d-block w-100 carouselImage"
                  alt={props.name}
                />
                <Carousel.Caption>
                  <h5>{props.caption}</h5>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </Modal.Body>
    </Modal>
  );
};

const ImageSlideShowModal = (props) => {
  return <PicturesCarousel {...props} />;
};

export default ImageSlideShowModal;
