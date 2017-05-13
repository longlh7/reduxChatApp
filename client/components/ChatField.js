import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {Card,CardHeader,CardActions,CardText, TextField, FlatButton, RaisedButton, List, ListItem, Divider, Avatar } from 'material-ui';
import {sendMessage} from '../actions/actions';


class ChatField extends React.Component {
    render() {
      return (
        <ListItem leftAvatar={
            <Avatar
              src="../public/images/IMG_1183.JPG"
              size={30}
              style={styles.avatar}
            />
          }
          style={
                app.username === m.username? styles.rightItem: styles.leftItem
          }
          primaryText={m.text}
          secondaryText={m.username}
          key={`${i}:${m.id}`}
        />
      )
    }
}

export default connect()(ChatField);
