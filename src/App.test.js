import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import store from './Redux/configureStore';
import App from './App';

const appRender = () => render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
);

describe('App', () => {
  it('renders without crashing', () => {
    appRender();
  });
  it('renders the rocket list', () => {
    appRender();
    expect(screen.getByText('Rockets')).toBeInTheDocument();
  });
  it('renders the mission list', () => {
    appRender();
    expect(screen.getByText('Missions')).toBeInTheDocument();
  });
  it('renders the profile', () => {
    appRender();
    expect(screen.getByText('My Profile')).toBeInTheDocument();
  });
  it('Simulates a click on the Missions page', () => {
    appRender();
    const mission = screen.getByText('Missions');
    fireEvent.click(mission);
    expect(screen.getByText('Description')).toBeInTheDocument();
  });
});
