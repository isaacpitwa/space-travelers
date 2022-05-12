import React from 'react';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import { joinMission } from '../Redux/Missions/missions';

const Profile = () => {
  const rockets = useSelector((state) => state.rockets.filter((rocket) => rocket.reserved));
  const missions = useSelector((state) => state.missions.filter((mission) => mission.reserved));
  const dispatch = useDispatch();

  const joinMissionHandler = (event) => {
    const reserve = event.target.getAttribute('data-reserved');
    const missionId = event.target.getAttribute('data-id');
    dispatch(joinMission(missionId, reserve));
  };

  return (
    <div className="profile-container">
      <div className="missions">
        <h4>My Missions</h4>
        <thead>
          <tr>
            <th>Mission</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((missions) => (
            <tr key={missions.mission_id} className="mission-item">
              <td className="separation">{missions.mission_name}</td>
              <td className="member-btn separation">
                {missions.reserved ? (
                  <Button
                    variant="primary"
                    as="input"
                    type="button"
                    value="Active Member"
                  />
                ) : (
                  <Button
                    variant="secondary"
                    as="input"
                    type="button"
                    value="NOT A MEMBER"
                  />
                )}
              </td>
              <td>
                {missions.reserved ? (
                  <Button
                    variant="outline-danger"
                    as="input"
                    type="button"
                    value="Leave Mission"
                    data-id={missions.mission_id}
                    data-reserved={0}
                    onClick={joinMissionHandler}
                  />
                ) : (
                  <Button
                    variant="outline-secondary"
                    as="input"
                    type="button"
                    value="Join Mission"
                    data-id={missions.mission_id}
                    data-reserved={1}
                    onClick={joinMissionHandler}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </div>

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
    </div>
  );
};

export default Profile;
