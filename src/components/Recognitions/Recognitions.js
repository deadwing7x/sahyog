import React, { useState } from "react";
import { Jumbotron, Image, Modal } from "react-bootstrap";
import "./Recognitions.css";
import Media1 from "../../assets/media/Media-1.jpg";
import Media2 from "../../assets/media/Media-2.jpg";
import Media3 from "../../assets/media/Media-3.jpg";
import Media4 from "../../assets/media/Media-4.jpg";

const media = [Media1, Media2, Media3, Media4];

const SingleImageModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      dialogClassName="mediaModal"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body id="modalBody">
        <Image className="modalImage" src={props.image} />
      </Modal.Body>
    </Modal>
  );
};

const Recognitions = () => {
  const [modalShow, setModalShow] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const handleClick = (image) => {
    setCurrentImage(image);
    setModalShow(true);
  };

  return (
    <Jumbotron className="col-md-12">
      <div className="media-gallery">
        <p className="recognition">Recognitions</p>
        <div className="row media-carousel">
          {media.map((image) => {
            return (
              <div className="col-md-3">
                <Image
                  title="Click to view enlarged image"
                  onClick={() => handleClick(image)}
                  className="media-images"
                  src={image}
                />
              </div>
            );
          })}
          <SingleImageModal
            show={modalShow}
            image={currentImage}
            onHide={() => setModalShow(false)}
          />
        </div>
      </div>
    </Jumbotron>
  );
};

export default Recognitions;
