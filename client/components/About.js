import React from 'react';
import {connect} from 'react-redux';
import {Card,CardHeader,CardText} from 'material-ui';

class About extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader title="About"/>
        <CardText>
          Im LongLH7
        </CardText>
      </Card>
    );
  }
}

export default connect()(About);
