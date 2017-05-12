import React from 'react';
import {connect} from 'react-redux';
import {Card,CardHeader,CardActions,CardText, TextField, FlatButton, RaisedButton, List, ListItem } from 'material-ui';
import {sendMessage,logout} from '../actions/actions';

const styles = {
  raisedButton: {
    float: 'right'
  }
}

class Chat extends React.Component {
    render() {
      const { users, messages } = this.props;
      return (

        <Card>

          <CardHeader title="ChatApp" subtitle="v0.1"/>

          <CardActions>
            <TextField hintText="Chat here" id="chatMsg"/>
            <FlatButton label="Send" onTouchTap={this.handleSend.bind(this)}/>
          </CardActions>

          <RaisedButton style={styles.raisedButton} secondary={true} label="Logout" onTouchTap={this.handleLogout.bind(this)} />
        </Card>
      )
    }

    handleSend(){
      const {username} = this.props;
      console.log(username);
    }

    handleLogout() {
      this.props.dispatch(logout());
    }
}

function select({users,messages}) {
  return {users, messages};
}

export default connect(select)(Chat);
