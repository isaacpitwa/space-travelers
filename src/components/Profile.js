import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const rockets = useSelector((state) => state.rockets.filter((rocket) => rocket.reserved));
  return (
    <div className="profile-container">
      <div className="missions">
        <h4>My Missions</h4>
      </div>
      <div className="rockets">
        <h4>My Rockets</h4>
        <ul className="rockets-list">
          {
            rockets.map((rocket) => <li key={rocket.id} className="rocket-item">{rocket.name}</li>)
        }
        </ul>
      </div>
    </div>
  );
};

export default Profile;
