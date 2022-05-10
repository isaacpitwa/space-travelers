import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket, cancelReservation } from '../Redux/Rockets/rockets';

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
      PropTypes.shape(
        {
          id: PropTypes.number,
          name: PropTypes.string,
          type: PropTypes.string,
          flickrImages: PropTypes.arrayOf(PropTypes.string),
          description: PropTypes.string,
          reserved: PropTypes.bool,
        },
      ).isRequired,

  };

  const bookRocket = () => {
    dispatch(reserveRocket(rocket));
  };

  const cancelBooking = () => {
    dispatch(cancelReservation(rocket));
  };
  return (
    <li className="rocket" key={id}>
      <div className="image-container">
        <img src={flickrImages[0]} alt={name} />
      </div>
      <div className="content">
        <h4>{name}</h4>
        <p>
          {rocket.reserved ? <span>Reserved</span> : null}
          {description}
        </p>
        {rocket.reserved ? <button type="button" onClick={cancelBooking} className="btn-cancel">Cancel Reservation</button> : <button type="button" onClick={bookRocket}>Reserve Rocket</button>}
      </div>
    </li>
  );
}

export default RocketItem;
