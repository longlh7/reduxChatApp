import React from 'react';
import {connect} from 'react-redux';
import {Card,CardHeader,CardText,FlatButton,List,ListItem,Checkbox,Divider,Popover,Menu,MenuItem,RaisedButton,Subheader,Toggle } from 'material-ui';

class Setting extends React.Component {

  constructor(props) {
   super(props);

   this.state = {
     open: false,
   };
 }

 handleTouchTap = (event) => {
   // This prevents ghost click.
   event.preventDefault();

   this.setState({
     open: true,
     anchorEl: event.currentTarget,
   });
 };

 handleRequestClose = () => {
   this.setState({
     open: false,
   });
 };

  render() {
    return (
      <Card>
        <CardHeader title="Setting"/>
        <CardText>
          <List>
            <ListItem primaryText="Avatar" secondaryText="Change your profile picture"/>
            <ListItem primaryText="Language" secondaryText="Choose your Language" onTouchTap={this.handleTouchTap}/>

            <Popover
             open={this.state.open}
             anchorEl={this.state.anchorEl}
             anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
             targetOrigin={{horizontal: 'left', vertical: 'top'}}
             onRequestClose={this.handleRequestClose}>
             <Menu>
               <MenuItem primaryText="English" />
               <MenuItem primaryText="Vietnamese" />
             </Menu>
           </Popover>

          </List>
          <Divider/>
          <List>
            <ListItem leftCheckbox={<Checkbox/>} primaryText="Notifications" secondaryText="Turn on || off"/>
            <ListItem leftCheckbox={<Checkbox/>} primaryText="Sound" secondaryText="Turn on || off"/>
          </List>

          <Divider />
          <List>
            <Subheader>Mode</Subheader>
            <ListItem primaryText="Busy mode" rightToggle={<Toggle />} />            
          </List>

        </CardText>
      </Card>
    );
  }
}

export default connect()(Setting);
