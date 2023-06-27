import './rockets.css';
import PropTypes from 'prop-types';

const RocketItem = ({ data }) => (
  <div className="container">
    <div className="img-container">
      {/* eslint-disable-next-line */}
      <img src={data.flickr_images} className="rocket-img" alt="Rocket Image" />
    </div>
    <div className="details-container">
      <h2>{data.name}</h2>
      <p>{data.description}</p>
      {/* eslint-disable-next-line */}
      <button className="rocket-btn">Reserve Rocket</button>
    </div>
  </div>
);

RocketItem.propTypes = {
  data: PropTypes.shape({
    flickr_images: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default RocketItem;