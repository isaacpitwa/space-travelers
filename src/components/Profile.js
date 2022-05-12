import React from 'react';
import { useSelector } from 'react-redux';
import ProfMission from './profileMission';

const Profile = () => {
  const rockets = useSelector((state) => state.rockets.filter((rocket) => rocket.reserved));

  return (
    <section className="profile-container">
      {/* here I'm placing the component filtered and with the if statement */}
      <ProfMission />
      <div className="rockets">
        <h4>My Rockets</h4>
        <ul className="rockets-list">
          {rockets.map((rocket) => (
            <li key={rocket.id} className="rocket-item">
              {rocket.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Profile;
