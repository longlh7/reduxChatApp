import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {AppBar,Card, CardActions, CardHeader, CardText,FlatButton, TextField} from 'material-ui';
import {login} from '../actions/actions'

class Login extends Component {
  render() {
    return (
      <Card>
          <CardHeader  title="Welcome to ChatApp" subtitle="Please enter your name" actAsExpander={true} showExpandableButton={true}/>

          <CardActions>
            <TextField floatingLabelText="Username" id="username"/>
            <TextField type="password" floatingLabelText="Password" id="password"/>
            <FlatButton label="Go" primary={true} onTouchTap={this.handleLogin.bind(this)}/>
          </CardActions>

         <CardText expandable={true}>
            This demostration was created in order to study redux and material-ui
        </CardText>
      </Card>
    )
  }

  handleLogin(){
    const username = $('#username').val();
    const password = $('#password').val();
    if (username.length > 0 && username.length > 0) {
      this.props.dispatch(login({username, password}));
    }
    console.log(this.props);
  }
}

export default connect()(Login);
