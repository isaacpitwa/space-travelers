import React from 'react';
import PropTypes from 'prop-types';

function RocketItem(props) {
  const { rocket } = props;
  const {
    id,
    name,
    flickrImages,
    description,
  } = rocket;

  RocketItem.propTypes = {
    rocket:
      PropTypes.objectOf(
        {
          id: PropTypes.number,
          name: PropTypes.string,
          type: PropTypes.string,
          flickrImages: PropTypes.array,
          description: PropTypes.string,
        },
      ).isRequired,

  };

  return (
    <li className="rocket" key={id}>
      <div className="image-container">
        <img src={flickrImages[0]} alt={name} />
      </div>
      <div className="content">
        <h4>{name}</h4>
        <p>{description}</p>
        <button type="button">Reserve Rocket</button>
      </div>
    </li>
  );
}

export default RocketItem;
