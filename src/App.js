import React from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import './App.css';
import Missions from './components/Missions';
import Nav from './components/nav';
import Profile from './components/Profile';
import Rockets from './components/Rockets';
import NotMatch from './pages/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route
          path="/"
          element={(
            <div>
              {' '}
              <Outlet />
            </div>
)}
          exact
        >
          <Route index element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/my-profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<NotMatch />} />
      </Routes>

    </div>
  );
}

export default App;
