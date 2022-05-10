import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets } from '../Redux/Rockets/rockets';
import RocketItem from './RocketItem';

function Rockets() {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);
  useEffect(() => {
    dispatch(fetchRockets());
  }, []);
  return (
    <ul className="rocket-list">
      { rockets.map((rocket) => <RocketItem rocket={rocket} key={rocket.id} />)}
    </ul>
  );
}

export default Rockets;
