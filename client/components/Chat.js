import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {Card,CardHeader,CardActions,CardText, TextField, FlatButton, RaisedButton, List, ListItem, Divider, Avatar } from 'material-ui';
import {sendMessage} from '../actions/actions';
import {
  blue300,
  indigo900,
  orange200,
  deepOrange300,
  pink400,
  purple500,
} from 'material-ui/styles/colors';


const styles = {
  raisedButton: {
    float: 'right'
  },
  listItem: {
    height: 400,
    overflow: 'scroll'
  },
  rightItem: {
    textAlign: 'right'
  },
  leftItem: {
    textAlign: 'left'
  },
  avatar: {
    margin: 5
  }
}

class Chat extends React.Component {

    handleSend(){
      const msg = $('#chatMsg').val();
      if (msg) {
        this.props.dispatch(sendMessage({ msg }));
        $("#listItem").scrollTop(1000);
        $('#chatMsg').val('');
      } else {
        console.log(this.props);
      }
    }

    render() {
      const { messages, app } = this.props;
      return (
        <Card>
          <CardHeader title={app.username} subtitle="v0.1"/>
          <Divider/>
          <List style={styles.listItem} id="listItem">
            {messages.list.map(id => messages.entities[id]).map((m, i) =>
                app.username === m.username ?
                  <ListItem rightAvatar={
                      <Avatar
                        src="../public/avatar/icon.png"
                        size={30}
                        style={styles.avatar}
                      />
                    }
                    style={styles.rightItem }
                    primaryText={m.text}
                    secondaryText={m.username}
                    key={`${i}:${m.id}`}
                  />
                :
                  <ListItem leftAvatar={
                      <Avatar
                        src="../public/avatar/icon.png"
                        size={30}
                        style={styles.avatar}
                      />
                    }
                    style={styles.leftItem }
                    primaryText={m.text}
                    secondaryText={m.username}
                    key={`${i}:${m.id}`}
                  />

            )}
          </List>

          <CardActions>
            <TextField hintText="Chat here" id="chatMsg"/>
            <FlatButton label="Send" onKeyPress={this.handleSend.bind(this)} onTouchTap={this.handleSend.bind(this)}/>
          </CardActions>
        </Card>
      )
    }
}

function select({ messages, app }) {
  return {  messages, app };
}

export default connect(select)(Chat);
