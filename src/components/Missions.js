import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMission } from '../Redux/Missions/missions';

function Missions() {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);
  useEffect(() => {
    dispatch(getMission());
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </thead>
      {missions.map((mission) => (
        <tbody key={mission.mission_id}>
          <tr>
            <td>{mission.mission_name}</td>
            <td>{mission.description}</td>
            <td><button type="button">not a member</button></td>
            <td><button type="button">join mission</button></td>
          </tr>
        </tbody>
      ))}

    </table>
  );
}

export default Missions;
