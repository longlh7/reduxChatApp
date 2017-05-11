import { combineReducers } from 'redux';
import { createReducer } from 'redux-act';
import { login } from '../actions/actions';

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
  }
}, initial.app);

export default combineReducers(
  { app }
);
