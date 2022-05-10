import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets } from '../Redux/Rockets/rockets';
import RocketItem from './RocketItem';
import LoadingRockets from './LoadingRockets';

function Rockets() {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);
  useEffect(() => {
    dispatch(fetchRockets());
  }, []);
  return (
    <ul className="rocket-list">
      { typeof (rockets) === 'string' ? (
        <LoadingRockets />
      ) : rockets.map((rocket) => <RocketItem rocket={rocket} key={rocket.id} />)}
    </ul>
  );
}

export default Rockets;
