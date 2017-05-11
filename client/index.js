import 'babel-polyfill';
// React
import React from 'react'; //ok
import ReactDOM from 'react-dom'; //ok
import { Provider } from 'react-redux'; //ok
// Configuration
import App from './components/app';
import configureStore from './store';//ok

ReactDOM.render(
  <Provider store={configureStore()}>
      <App />
  </Provider>,
document.getElementById('container'));
