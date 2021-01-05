import React from "react";
import { Figure } from "react-bootstrap";
import "./Campaign.css";

const Campaign = (prop) => {
  return (
    <Figure>
      <Figure.Image
        src={prop.Thumbnail}
        className="campaignImage"
        alt={prop.Name}
      />
      <Figure.Caption className="campaignText">{prop.Name}</Figure.Caption>
    </Figure>
  );
};

export default Campaign;
