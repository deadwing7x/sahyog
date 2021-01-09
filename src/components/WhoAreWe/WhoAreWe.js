import { Jumbotron } from "react-bootstrap";
import "./WhoAreWe.css";
import intro from "../../data/intro";

const WhoAreWe = () => {
  return (
    <Jumbotron id="aboutUs">
      <div className="row whoWeAre">
        <div className="col-md-3 whoWeAreDiv">
          <div className="whoWeAreText">
            <div>Who are</div>
            <div>we ?</div>
          </div>
        </div>
        <div className="col-md-9 text">{intro}</div>
      </div>
    </Jumbotron>
  );
};

export default WhoAreWe;
