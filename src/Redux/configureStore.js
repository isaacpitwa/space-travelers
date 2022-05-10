import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import missionsReducer from './Missions/missions';

const rootReducer = combineReducers({
  missions: missionsReducer,
});

const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk, logger));

export default store;
