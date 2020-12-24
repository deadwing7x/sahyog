import React from "react";
import People from "./People";
import logo from "../assets/logo.png";
import "./AboutUs.css";
import testimonials from "../data/testimonials";
import intro from "../data/intro";

const AboutUs = () => {
  return (
    <div>
      <div className="col-md-12 logoWhoWeAre">
        <img id="logoImageAboutUs" src={logo} alt="logo" />
        <div className="intro">{intro}</div>
      </div>
      <div className="col-md-12 testimonials">
        {testimonials.map((person) => {
          return (
            <div className="row" id="portfolio">
              <People
                key={person.Name}
                name={person.Name}
                position={person.Position}
                testimonial={person.Testimonial}
                image={`${process.env.PUBLIC_URL}/${person.DisplayPicture}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutUs;
