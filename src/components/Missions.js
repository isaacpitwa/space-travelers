import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { joinMission } from '../Redux/Missions/missions';

function Missions() {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  const joinMissionHandler = (event) => {
    const reserve = event.target.getAttribute('data-reserved');
    const missionId = event.target.getAttribute('data-id');
    dispatch(joinMission(missionId, reserve));
  };

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {missions.map((mission) => (
          <tr key={mission.mission_id}>
            <td>{mission.mission_name}</td>
            <td>{mission.description}</td>
            <td className="member-btn">
              {mission.reserved ? (
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
            <td className="member-btn">
              {mission.reserved ? (
                <Button
                  variant="outline-danger"
                  as="input"
                  type="button"
                  value="Leave Mission"
                  data-id={mission.mission_id}
                  data-reserved={0}
                  onClick={joinMissionHandler}
                />
              ) : (
                <Button
                  variant="outline-secondary"
                  as="input"
                  type="button"
                  value="Join Mission"
                  data-id={mission.mission_id}
                  data-reserved={1}
                  onClick={joinMissionHandler}
                />
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Missions;
