import { Button, Jumbotron, Carousel } from "react-bootstrap";
import "./MainContent.css";
import logo from "../assets/logo.png";
import carousel1 from "../assets/carousel-1.jpeg";
import carousel2 from "../assets/carousel-2.jpeg";
import carousel3 from "../assets/carousel-3.jpeg";

const MainContent = () => {
  return (
    <div>
      <Jumbotron>
        <div className="row">
          <div className="col-md-4">
            <img id="logoImage" src={logo} alt="logo" />
            <h2>Empowering communities.</h2>
            <h2>Ending poverty.</h2>
            <hr />
            <p>
              <em>
                We're an Asansol based NGO helping the underprivileged
                communities and children for their empowerment and welfare.
              </em>
            </p>
            <div className="row">
              <Button
                id="contribute"
                className="contributeOrVolunteer"
                variant="light"
                href="https://milaap.org/fundraisers/support-underprivileged-societies-1?utm_source=whatsapp&utm_medium=fundraisers-title&mlp_referrer_id=3361600"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contribute
              </Button>
              <Button
                id="volunteer"
                className="contributeOrVolunteer"
                variant="link"
                href="https://docs.google.com/forms/d/1g5IwbDYaHvB5xdlwzlj3N2b9mPt63zRPfvyh8R60pHI/edit?usp=sharing"
                rel="noopener noreferrer"
                target="_blank"
              >
                Volunteer
              </Button>
            </div>
          </div>
          <div className="col-md-8">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100 carousel-image"
                  src={carousel1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 carousel-image"
                  src={carousel2}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 carousel-image"
                  src={carousel3}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </Jumbotron>
    </div>
  );
};

export default MainContent;
