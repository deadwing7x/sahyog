import "./MapContainer.css";

const MapContainer = () => {
  return (
    <>
      <iframe
        className="mapContainer"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.46878761742!2d86.953638214967!3d23.694947746809287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f71f1ae19fcc7f%3A0xc2b08f35a7803f3a!2sApcar%20Garden%2C%20Asansol%2C%20West%20Bengal%20713301!5e0!3m2!1sen!2sin!4v1610268358344!5m2!1sen!2sin"
        frameborder="0"
        allowfullscreen="true"
        aria-hidden="false"
        tabindex="0"
        title="Sahyog"
      ></iframe>
    </>
  );
};

export default MapContainer;
