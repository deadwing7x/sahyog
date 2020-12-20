import { Navbar, Nav } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <Navbar className="row col-md-12" bg="dark" variant="dark">
        <div className="col-md-7 copyright">
          <div>Copyright © 2020</div>
          <div>Asansol Sahyog Welfare Organization</div>
        </div>
        <Navbar className="col-md-5" id="basic-navbar-nav">
          <Nav>
            <a
              className="footer-links"
              href="mailto:organizationsahyog@gmail.com"
            >
              <i className="fas fa-envelope-open-text"></i>
            </a>
            <a
              className="footer-links"
              href="https://www.instagram.com/sahyog_org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              className="footer-links"
              href="https://www.facebook.com/sahyog.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </Nav>
        </Navbar>
      </Navbar>
    </div>
  );
};

export default Footer;
