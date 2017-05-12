import { combineReducers } from 'redux';
import { createReducer } from 'redux-act';
import { login, newMessage } from '../actions/actions';

const initial = {
  app: {
    username: null
  },
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

const messages = createReducer({
  [newMessage]: (state, payload) => {
    const { message } = payload;
    return {
      ...state,
      list: [ ...state.list, message.id ],
      entities: { ...state.entities, [message.id]: message }
    };
  }
}, initial.messages);

export default combineReducers(
  {app, messages}
);
