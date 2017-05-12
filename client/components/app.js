import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { AppBar, FlatButton, TextField,Tabs, Tab  } from 'material-ui';
import Login from './Login';
import Setting from './Setting';
import Chat from './Chat';
import {login, logout} from '../actions/actions';

const styles = {
  tab: {
    width: 400,
    height: 1000,
    top: '50%',
    left: '50%',
  }
};

class App extends Component {
  render() {
    const {username} = this.props;
    console.log('Username: ', username);
    let body;
    if (username) {
      body = <Chat/>;
    } else {
      body = <Login/>;
    }

    return (
      <Tabs style={styles.tab}>
        <Tab label="Chat App">
            {body}
        </Tab>
        <Tab label="Setting">
            <Setting/>
        </Tab>
      </Tabs>
    )
  }
}

function select({app}) {
  return {...app};
}

export default connect(select)(App);
