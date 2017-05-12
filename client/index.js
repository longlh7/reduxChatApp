import 'babel-polyfill';
import injectTapEventPlugin from 'react-tap-event-plugin';
// React
import React from 'react'; //ok
import ReactDOM from 'react-dom'; //ok
import { Provider } from 'react-redux'; //ok
// Configuration
import App from './components/app';
import configureStore from './store';//ok
// Material UI
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


injectTapEventPlugin();

ReactDOM.render(
  <Provider store={configureStore()}>
      <MuiThemeProvider muiTheme={getMuiTheme()}>
          <App />
      </MuiThemeProvider>
  </Provider>,
document.getElementById('container'));
