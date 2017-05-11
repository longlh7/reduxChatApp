import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
        <div>
          <h1>Im from app</h1>
        </div>
    )
  }
}

function select({app}) {
  return {...app};
}

export default connect(select)(App);
