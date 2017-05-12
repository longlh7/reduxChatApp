import { combineReducers } from 'redux';
import { createReducer } from 'redux-act';
import { login, logout, addUser, removeUser } from '../actions/actions';

const initial = {
  app: {
    username: null
  },
  users: {},
  messages: {
    list: [],
    entities: {}
  },
};

const app = createReducer({
  [login]: (state, payload) => {
    return { ...state, username: payload.username };
  },
  [logout]: (state, payload) => {
    return {...state, username: null};
  }
}, initial.app);

const users = createReducer({
  [addUser]: (state, payload) => {
    return {...state, [payload.username]: true}
  },
  [removeUser]: (state, payload) => {
    const newState = {...state};
    delete newState[payload.username];
    return newState;
  }
}, initial.users);

export default combineReducers(
  { app, users}
);
