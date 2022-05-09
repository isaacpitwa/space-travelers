import React from 'react';

function Nav() {
  return (
    <nav className='nav-container'>
     <div className='nav-brand'>
        <img src='./images/logo.png' alt='Space Travelers'/>
        <h1>Space Travelers' Hub</h1>
     </div>
     <ul className='nav-items'>
        <li>Rockets</li>
        <li>Missions</li>
        <li>My Profile</li>
     </ul>
    </nav>
  );
}

export default Nav;
