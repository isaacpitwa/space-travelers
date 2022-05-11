import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
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
});
