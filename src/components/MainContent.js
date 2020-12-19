import { Button, Jumbotron, Carousel } from "react-bootstrap";
import "./MainContent.css";
import logo from "../assets/logo.png";
import carousel1 from "../assets/carousel-1.jpg";
import carousel2 from "../assets/carousel-2.jpg";
import carousel3 from "../assets/carousel-3.jpg";
import carousel4 from "../assets/carousel-4.jpg";

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
              >
                Contribute
              </Button>
              <Button
                id="volunteer"
                className="contributeOrVolunteer"
                variant="link"
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
              <Carousel.Item>
                <img
                  className="d-block w-100 carousel-image"
                  src={carousel4}
                  alt="Fourth slide"
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
