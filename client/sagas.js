import io from 'socket.io-client';
import {eventChannel} from 'redux-saga';
import { fork, take, call, put, cancel } from 'redux-saga/effects';
import {
  login, sendMessage, newMessage
} from './actions/actions';

function connect() {

  console.log('\n[sagas.js] connect()');
  const socket = io('http://localhost:3000');

  return new Promise(resolve => {
    // console.log('resolved ',resolve);
    socket.on('connect', () => {
      resolve(socket);
    });
  });
}

function subscribe(socket) {
  // console.log('\n[sagas.js] subscribe()',socket);
  return eventChannel(emit => {
    socket.on('messages.new', ({ message }) => {
      emit(newMessage({ message }));
    });
    socket.on('disconnect', e => {
      // TODO: handle
    });
    return () => {};
  });
}

function* read(socket) {
  // console.log('\n[sagas.js] read()',socket);
  const channel = yield call(subscribe, socket);
  while (true) {
    let action = yield take(channel);
    yield put(action);
  }
}

function* write(socket) {
  // console.log('\n[sagas.js] write()',socket);
  while (true) {
    const { payload } = yield take(`${sendMessage}`);
    console.log('emit message', payload);
    socket.emit('message', payload);
  }
}

function* handleIO(socket) {
  // console.log('\n[sagas.js] handleIO() ',socket);
  yield fork(read, socket);
  yield fork(write, socket);
}

function* flow() {
  console.log('\n[sagas.js] flow()');
  while (true) {

    // console.log('\nflow() yield take login');
    let { payload } = yield take(`${login}`);

    // console.log('\nflow() yield call connect');
    const socket = yield call(connect);

    console.log('\nflow() emit login:');
    socket.emit('login', { username: payload.username, password: payload.password });

    const task = yield fork(handleIO, socket);
  }
}

export default function* rootSaga() {
  console.log('\n[sagas.js] rootSaga()');
  yield fork(flow);
}
