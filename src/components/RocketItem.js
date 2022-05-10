import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket } from '../Redux/Rockets/rockets';

function RocketItem(props) {
  const dispatch = useDispatch();
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

  const bookRocket = () => {
    dispatch(reserveRocket(rocket));
  };
  return (
    <li className="rocket" key={id}>
      <div className="image-container">
        <img src={flickrImages[0]} alt={name} />
      </div>
      <div className="content">
        <h4>{name}</h4>
        <p>{description}</p>
        <button type="button" onClick={bookRocket}>Reserve Rocket</button>
      </div>
    </li>
  );
}

export default RocketItem;
