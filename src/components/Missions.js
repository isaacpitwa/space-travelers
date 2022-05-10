import React from 'react';
import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function Missions() {
  const missions = useSelector((state) => state.missions);

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
              <Button variant="secondary" as="input" type="button" value="not a member" />
              {' '}
            </td>
            <td className="member-btn">
              <Button variant="outline-secondary" as="input" type="button" value="Join Mission" />
              {' '}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Missions;
