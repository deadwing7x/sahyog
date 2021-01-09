import { Image } from "react-bootstrap";

const People = (props) => {
  return (
    <>
      <div className="col-md-3">
        <Image
          className="displayImage"
          src={props.image}
          style={props.imageStyles}
          alt={props.name}
        ></Image>
        <div id="name">
          <p id="personName">{props.name}</p>
          <p id="personPosition">{props.position}</p>
        </div>
      </div>
      <div className="col-md-9 testimonial">{props.testimonial}</div>
    </>
  );
};

export default People;
