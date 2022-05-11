import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getMission } from '../Redux/Missions/missions';

function Nav() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMission());
  }, [dispatch]);

  return (
    <nav className="nav-container">
      <div className="nav-brand">
        <img src="./images/logo.png" alt="Space Travelers" />
        <h1>Space Travelers&apos; Hub</h1>
      </div>
      <ul className="nav-items">
        <li><NavLink to="/">Rockets</NavLink></li>
        <li>
          {' '}
          <NavLink to="/missions">Missions</NavLink>
        </li>
        <li>
          {' '}
          <NavLink to="/my-profile">My Profile</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
