import { Navbar, Nav, Image, NavbarBrand } from "react-bootstrap";
import "./Header.css";
import logo from "../assets/favicon.png";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <NavbarBrand href="/">
        <Image id="brand-logo" src={logo} roundedCircle></Image>
      </NavbarBrand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/about-us">About Us</Nav.Link>
          <Nav.Link href="/campaign-gallery">Campaign Gallery</Nav.Link>
          <Nav.Link href="/#aim-and-vision">Aim and Vision</Nav.Link>
          <Nav.Link href="/#contribute">Contribute</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
