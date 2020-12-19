import { Button, Jumbotron, Carousel } from "react-bootstrap";
import GooglePayButton from "@google-pay/button-react";
import "./MainContent.css";
import logo from "../assets/logo.png";
import carousel1 from "../assets/carousel-1.jpg";
import carousel2 from "../assets/carousel-2.jpg";
import carousel3 from "../assets/carousel-3.jpg";
import carousel4 from "../assets/carousel-4.jpg";

const MainContent = () => {
  const paymentRequest = {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: "CARD",
        parameters: {
          allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
          allowedCardNetworks: ["MASTERCARD", "VISA"],
        },
        tokenizationSpecification: {
          type: "PAYMENT_GATEWAY",
          parameters: {
            gateway: "example",
            gatewayMerchantId: "exampleGatewayMerchantId",
          },
        },
      },
    ],
    merchantInfo: {
      merchantId: "12345678901234567890",
      merchantName: "Demo Merchant",
    },
    transactionInfo: {
      totalPriceStatus: "FINAL",
      totalPriceLabel: "Total",
      totalPrice: "100.00",
      currencyCode: "USD",
      countryCode: "US",
    },
  };

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
            <GooglePayButton
              environment="TEST"
              paymentRequest={paymentRequest}
              onLoadPaymentData={() => {}}
              buttonType="donate"
              buttonColor="white"
            />
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
