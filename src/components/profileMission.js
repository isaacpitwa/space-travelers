import React from 'react';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import { joinMission } from '../Redux/Missions/missions';

/* this whole new component is created to make appear the table when length of missions is > 0 */
const ProfMission = () => {
  const missions = useSelector((state) => state.missions.filter((mission) => mission.reserved));

  const dispatch = useDispatch();

  const joinMissionHandler = (event) => {
    const reserve = event.target.getAttribute('data-reserved');
    const missionId = event.target.getAttribute('data-id');
    dispatch(joinMission(missionId, reserve));
  };

  if (missions.length !== 0) {
    return (
      <article className="missions">
        <h4>My Missions</h4>
        <table>
          <thead>
            <tr>
              <th>Mission</th>
            </tr>
          </thead>
          <tbody>
            {missions.map((missions) => (
              <tr key={missions.mission_id} className="mission-item">
                <td className="separation">{missions.mission_name}</td>
                <td className="separation">
                  <a href={missions.wikipedia} target="_blank" rel="noreferrer">Read More</a>
                  {/* this is the Read More part */}
                </td>
                <td className="member-btn separation">
                  {/*
                  also here I'm implementing the badge and the button for leaving the missions
                  from the my profile page
                  in the future i would like to create a component for each button */}
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
        </table>
      </article>
    );
  }
  return <p>No Missions yet</p>;
};

export default ProfMission;
