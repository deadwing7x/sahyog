import { Jumbotron, Image, Form } from "react-bootstrap";
import "./ContactUs.css";
import logo from "../assets/favicon.png";

const ContactUs = () => {
  const options = ["Contribute Money", "Donate Food/Clothes", "Volunteer"];

  return (
    <div>
      <Jumbotron id="contactUs">
        <div className="row col-md-12">
          <div className="col-md-3 contactUs">
            <Image src={logo} rounded alt="footerLogo" id="footer-logo" />
          </div>
          <div className="col-md-3 contactUsDiv">
            <div className="contactInfo">
              <i id="phone" className="fas fa-map-marker-alt fa-lg"></i> Asansol
            </div>
            <div className="contactInfo">
              <a className="phoneNumbers" href="tel:+918250785627">
                <i className="fas fa-phone fa-flip-horizontal fa-lg"></i>{" "}
                +918250785627
              </a>
            </div>
            <div className="contactInfo">
              <a className="phoneNumbers" href="tel:+917001783564">
                <i className="fas fa-phone fa-flip-horizontal fa-lg"></i>{" "}
                +917001783564
              </a>
            </div>
            <div className="contactInfo">
              <a className="phoneNumbers" href="tel:+918918281898">
                <i className="fas fa-phone fa-flip-horizontal fa-lg"></i>{" "}
                +918918281898
              </a>
            </div>
            <div className="contactInfo">
              <i id="email" className="fas fa-envelope fa-lg"></i>{" "}
              organizationsahyog@gmail.com
            </div>
          </div>
          <div className="col-md-6 contactUsForm">
            <label id="formLabel">Keep in touch</label>
            <Form>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label className="labels">Name</Form.Label>
                <Form.Control
                  className="inputForms"
                  required
                  type="text"
                  placeholder="Name"
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput2">
                <Form.Label className="labels">Email address</Form.Label>
                <Form.Control
                  className="inputForms"
                  required
                  type="email"
                  placeholder="name@example.com"
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label className="labels">
                  What do you want to do?
                </Form.Label>
                <Form.Control className="inputForms" required as="select">
                  <option selected disabled>
                    Select an option
                  </option>
                  {options.map((option) => {
                    return (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    );
                  })}
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label className="labels">Message</Form.Label>
                <Form.Control className="inputForms" as="textarea" rows={3} />
              </Form.Group>
              <input id="submit-button" type="submit" />
            </Form>
          </div>
        </div>
      </Jumbotron>
    </div>
  );
};

export default ContactUs;
