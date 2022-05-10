import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets } from '../Redux/Rockets/rockets';

function Rockets() {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);
  useEffect(() => {
    dispatch(fetchRockets());
  }, []);
  return (
    <h2>Rockets page</h2>
  );
}

export default Rockets;
