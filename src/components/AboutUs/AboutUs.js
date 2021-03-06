import React from "react";
import People from "../People/People";
import logo from "../../assets/logo.png";
import "./AboutUs.css";
import testimonials from "../../data/testimonials";
import intro from "../../data/intro";
import LazyLoad from "react-lazy-load";

const AboutUs = () => {
  return (
    <div className="aboutUsDiv">
      <img id="logoImageAboutUs" src={logo} alt="logo" />
      <div className="col-md-12 logoWhoWeAre">
        <div className="intro">{intro}</div>
      </div>
      <div id="team">
        <p>Our Team</p>
      </div>
      <div className="col-md-12 testimonials">
        {testimonials.map((person) => {
          return (
            <LazyLoad className="filler" key={person.Name} offset={300}>
              <div className="row" id="portfolio">
                <People
                  key={person.Name}
                  name={person.Name}
                  position={person.Position}
                  testimonial={person.Testimonial}
                  image={`${process.env.PUBLIC_URL}/${person.DisplayPicture}`}
                />
              </div>
            </LazyLoad>
          );
        })}
      </div>
    </div>
  );
};

export default AboutUs;
