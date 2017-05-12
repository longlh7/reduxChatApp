import io from 'socket.io-client';
import {eventChannel} from 'redux-saga';
import { fork, take, call, put, cancel } from 'redux-saga/effects';
import { login } from './actions/actions';

function connect() {
  console.log('\n[sagas.js] connect()');
  const socket = io('http://localhost:3000');

  return new Promise (resolve => {
    console.log('\n[sagas.js] Promise resolved');
    socket.on('connect', () => {
      resolve(socket);
    });

  }, rejected => {
    console.log('\n[sagas.js] Promise rejected');
  });
}

function subscribe(socket) {
    console.log('\n[sagas.js] subscribe()');
    return eventChannel (emit => {
        socket.on('users.login', ({username}) => {
          emit(addUser({username}));
        });
        return () => {};
    });
}

function* handleIO(socket) {
  console.log('\n[sagas.js] handleIO() ',socket);
  yield fork(read, socket);  
}

function* read(socket) {
  console.log('\n[sagas.js] read()',socket);
  const channel = yield call(subscribe, socket);
  while (true) {
    let action = yield take(channel);
    yield put(action);
  }
}

function* flow() {
  console.log('\n[sagas.js] flow()');

  while (true) {
    let {payload} = yield take('$(login)');
    const socket = yield call(connect);
    socket.emit('login', {username:payload.username});

    const task = yield fork(handleIO, socket);
  }
}

export default function* rootSaga() {
    console.log('\n[sagas.js] rootSaga()');
    yield fork(flow);
}
