import React from 'react';
import { connect } from 'react-router';

function mapStateToProps(store) {
  return {}
}

class TicTakToe extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div></div>
    );
  }
}

export default connect(mapStateToProps)(TicTakToe);
