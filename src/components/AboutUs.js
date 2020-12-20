import { Jumbotron } from "react-bootstrap";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <Jumbotron id="aboutUs">
      <div className="row whoWeAre">
        <div className="col-md-3 whoWeAreDiv">
          <div className="whoWeAreText">
            <div>Who we</div>
            <div>are ?</div>
          </div>
        </div>
        <div className="col-md-9">
          Sahyog is a non-governmental organization registered in 2020 under the
          West Bengal Society Registration Act, 1961 of West Bengal, India. The
          head office is located in Apcar Garden, Asansol serves as an epicenter
          for its programs and activities. As the name suggests, Sahyog
          Organization believes in bringing a smile on faces that deserve it the
          most but do not have access to happiness in their lives. We aim to
          create a sustainable impact in the lives of the children and
          underprivileged communities at-risk by developing strong programs
          focussed on their upbringing and surrounding. Our team comprises of
          some like minded young individuals whose sole motive is to eradicate
          the economic and social ills of the society.
        </div>
      </div>
    </Jumbotron>
  );
};

export default AboutUs;
