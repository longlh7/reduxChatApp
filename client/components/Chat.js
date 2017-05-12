import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {Card,CardHeader,CardActions,CardText, TextField, FlatButton, RaisedButton, List, ListItem, Divider } from 'material-ui';
import {sendMessage} from '../actions/actions';

const styles = {
  raisedButton: {
    float: 'right'
  },
  listItem: {
    height: 400,
    overflow: 'scroll'
  },
  item: {
    height: 100,
    width: 100,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block'
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
      const { users, messages } = this.props;
      return (
        <Card>
          <CardHeader title="ChatApp" subtitle="v0.1"/>

          <Divider/>
          <List style={styles.listItem} id="listItem">
            {messages.list.map(id => messages.entities[id]).map((m, i) =>
                <ListItem
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

function select({ users, messages }) {
  return { users, messages };
}

export default connect(select)(Chat);
