import { Jumbotron, Image, Form } from "react-bootstrap";
import * as emailjs from "emailjs-com";
import "./ContactUs.css";
import logo from "../../assets/favicon.png";
import { useState } from "react";
import MapContainer from "../MapContainer/MapContainer";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [select, setSelect] = useState("Select an option");
  const [freeText, setFreeText] = useState("");

  const options = ["Contribute Money", "Donate Food/Clothes", "Volunteer"];

  const resetForm = () => {
    setName("");
    setEmail("");
    setSelect("Select an option");
    setFreeText("");
  };

  const submitForm = (e) => {
    e.preventDefault();

    const btn = document.getElementById("submit-button");

    btn.value = "Sending Email...";

    const serviceId = "service_l9aucym";
    const templateId = "template_6fibgpn";
    const userId = "user_cKKEeAQ94mur2gTuwRThv";

    const templateParams = {
      name: name,
      email: email,
      action: select.toLowerCase(),
      message: freeText,
    };

    emailjs.send(serviceId, templateId, templateParams, userId).then(
      (result) => {
        console.log(result);
        resetForm();
        alert("Email sent successfully!");
        btn.value = "Submit";
      },
      (error) => {
        btn.value = "Submit";
        console.log(error.text);
      }
    );

    resetForm();
  };

  return (
    <div>
      <Jumbotron id="contactUs">
        <div className="row col-md-12">
          <div className="col-md-3 contactUs">
            <Image src={logo} rounded alt="footerLogo" id="footer-logo" />
          </div>
          <div className="col-md-3 contactUsDiv">
            <div className="contactInfo">
              <i id="phone" className="fas fa-map-marker-alt fa-md"></i> Apcar
              Garden, Asansol
            </div>
            <div className="contactInfo">
              <a className="phoneNumbers" href="tel:+918250785627">
                <i className="fas fa-phone fa-flip-horizontal fa-md"></i>{" "}
                +918250785627
              </a>
            </div>
            <div className="contactInfo">
              <a className="phoneNumbers" href="tel:+917001783564">
                <i className="fas fa-phone fa-flip-horizontal fa-md"></i>{" "}
                +917001783564
              </a>
            </div>
            <div className="contactInfo">
              <a className="phoneNumbers" href="tel:+918918281898">
                <i className="fas fa-phone fa-flip-horizontal fa-md"></i>{" "}
                +918918281898
              </a>
            </div>
            <div className="contactInfo">
              <i id="email" className="fas fa-envelope fa-md"></i>{" "}
              organizationsahyog@gmail.com
            </div>
            <MapContainer />
          </div>
          <div className="col-md-6 contactUsForm">
            <label id="formLabel">Keep in touch</label>
            <Form
              onSubmit={(event) => {
                submitForm(event);
              }}
            >
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label className="labels">Name</Form.Label>
                <Form.Control
                  className="inputForms"
                  required
                  name="name"
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                  type="text"
                  placeholder="Name"
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput2">
                <Form.Label className="labels">Email address</Form.Label>
                <Form.Control
                  className="inputForms"
                  required
                  name="email"
                  type="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                  placeholder="name@example.com"
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label className="labels">
                  What do you want to do?
                </Form.Label>
                <Form.Control
                  name="select"
                  value={select}
                  className="inputForms"
                  onChange={(event) => {
                    setSelect(event.target.value);
                  }}
                  required
                  as="select"
                >
                  <option defaultValue disabled>
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
                <Form.Control
                  name="freeText"
                  value={freeText}
                  className="inputForms"
                  onChange={(event) => {
                    setFreeText(event.target.value);
                  }}
                  as="textarea"
                  rows={3}
                />
              </Form.Group>
              <input id="submit-button" value="Submit" type="submit" />
            </Form>
          </div>
        </div>
      </Jumbotron>
    </div>
  );
};

export default ContactUs;
