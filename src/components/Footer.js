import { Navbar, Nav } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <Navbar expand="lg" id="footer-quickLinks" bg="dark" variant="dark">
        <Navbar>
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
      <div className="copyright">
        <div>Copyright © 2020</div>
        <div>Asansol Sahyog Welfare Organization</div>
        <div>Designed with <i className="fas fa-heart"></i> by Anubhav</div>
      </div>
    </div>
  );
};

export default Footer;
